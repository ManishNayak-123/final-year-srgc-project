

import React, { useState, useEffect } from "react";
import { 
  Mail, Phone, MapPin, Briefcase, CheckCircle, 
  X, CheckCircle2, Save, FileText 
} from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppliedJobTable from "./AppliedJobTable";
import { USER_API_END_POINT } from "./Utils/Constant";
import { setUser } from "./Redux/userSlice"; // Ensure this path is correct
import useGetAppliedJobs from "./Hooks/useGetAppliedJobs";

const MyProfile = () => {
  useGetAppliedJobs();
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);

  // UI States
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
 

  // Form Data State
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    bio: "",
    skills: "", 
    file: null
  });

  // Sync state when user logs in or updates
  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "",
        file: user?.profile?.resume || null
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      setSelectedFileName(file.name);
    }
  };

  // --- DATABASE SUBMISSION ---
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("bio", formData.bio);
    data.append("skills", formData.skills);
    
    if (formData.file instanceof File) {
      data.append("file", formData.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user)); // Sync Redux
        toast.success(res?.data?.message || "Profile updated successfully!");
        setIsEditing(false);
        setSelectedFileName("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const hasResume = user?.profile?.resume;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <form onSubmit={submitHandler}>
        {/* Header Section */}
        <div className="bg-[#387780] pt-24 pb-32 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl">
              <img 
                src={user?.profile?.profilePhoto || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.fullname}`} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Role */}
            <div className="text-center md:text-left text-white flex-1">
              {isEditing ? (
                <input 
                  className="bg-white/20 border border-white/30 text-2xl font-bold rounded-lg px-3 py-1 outline-none w-full md:w-auto"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
              ) : (
                <h1 className="text-4xl font-bold flex items-center justify-center md:justify-start gap-3">
                  {user?.fullname} <CheckCircle size={24} className="text-blue-300" />
                </h1>
              )}
              <p className="text-xl opacity-90 mt-1 uppercase tracking-wide text-sm font-semibold">
                {user?.role === 'recruiter' ? 'Recruiter' : 'Job Seeker'}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm opacity-80">
                <span className="flex items-center gap-1"><MapPin size={16} />{user.location}</span>
                <span className="flex items-center gap-1"><Briefcase size={16} /> {user?.profile?.experience || 0} Years Exp</span>
              </div>
            </div>

            {/* Edit/Save Buttons */}
            <div className="flex flex-col gap-3">
              {isEditing ? (
                <div className="flex gap-2">
                  <button type="submit" disabled={loading} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all">
                    {loading ? "Saving..." : <><Save size={18}/> Save Changes</>}
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl font-bold transition-all">
                    <X size={18}/>
                  </button>
                </div>
              ) : (
                <button type="button" onClick={() => setIsEditing(true)} className="bg-[#ff9933] hover:bg-[#e68a00] text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all">
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Contacts & Skills */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="text-[#387780]" size={18} />
                    {isEditing ? (
                      <input className="border rounded px-2 py-1 text-sm w-full" name="email" value={formData.email} onChange={handleInputChange} />
                    ) : <span className="text-sm">{user?.email}</span>}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="text-[#387780]" size={18} />
                    {isEditing ? (
                      <input className="border rounded px-2 py-1 text-sm w-full" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                    ) : <span className="text-sm">{user?.phoneNumber}</span>}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {isEditing ? (
                    <input 
                      className="border rounded px-3 py-2 text-sm w-full outline-[#387780]" 
                      placeholder="React, Node, CSS..."
                      name="skills" 
                      value={formData.skills} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    user?.profile?.skills?.length > 0 ? (
                      user?.profile?.skills?.map((skill, index) => (
                        <span key={index} className="bg-[#eef6f7] text-[#387780] px-3 py-1 rounded-full text-xs font-bold border border-[#387780]/10">
                          {skill}
                        </span>
                      ))
                    ) : <span className="text-gray-400 text-xs italic">No skills added</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Bio & Resume */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bio</h3>
                {isEditing ? (
                  <textarea 
                    className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#387780]" 
                    rows="4" 
                    name="bio"
                    value={formData.bio} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed">{user?.profile?.bio || user?.bio ||"No bio added yet."}</p>
                )}
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Professional Resume</h3>
                <div className={`p-8 rounded-3xl border-2 border-dashed transition-all ${selectedFileName ? "border-green-400 bg-green-50/50" : "border-[#387780]/20 bg-[#387780]/5"}`}>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center md:gap-5 gap-1">
                      <FileText size={32} className="text-[#387780]" />
                      <div>
                        <h4 className="font-bold md:text-[15px] text-[13px]  text-slate-800 truncate max-w-[200px]">
                          {selectedFileName || user?.profile?.resumeOriginalName || "Not Uploaded"}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">PDF format preferred</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <input 
                        type="file" 
                        id="resumeInput" 
                        accept="application/pdf" 
                        onChange={handleFileChange} 
                        className="hidden" 
                      />
                      {hasResume && !selectedFileName && (
                        <a href={user?.profile?.resume} target="_blank" rel="noreferrer" className="bg-white text-slate-600 font-bold md:p-2 p-1 py-2 md:px-6 px-2 rounded-xl md:text-[15px] text-[13px] border hover:bg-gray-50 transition-all">{user?.profile?.resumeOriginalName}</a>
                      )}
                      <button 
                        type="button" 
                        onClick={() => document.getElementById('resumeInput').click()} 
                        className="bg-slate-800 text-white font-bold py-2 px-6 rounded-xl text-sm hover:bg-slate-900 transition-all"
                      >
                        {hasResume ? "Change" : "Upload"}
                      </button>
                    </div>
                  </div>
                  {selectedFileName && (
                    <p className="mt-3 text-green-600 text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 size={14}/> {selectedFileName} selected. Click "Save Changes" to update.
                    </p>
                  )}
                </div>
              </div>

              {/* Applied Jobs Table */}
              
            </div>
          </div>
        </div>
      </form>
      <AppliedJobTable />
      <Footer />
    </div>
  );
}

export default MyProfile;