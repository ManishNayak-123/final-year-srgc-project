// import React from "react";
// import { X, User, Mail, Lock, CheckCircle, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router";
// import { useState } from "react";
// import { Camera } from "lucide-react";
// // import { signupUser } from "./api/auth";

// const Register = ({ isOpen, onClose, onSwitchToLogin }) => {
//   if (!isOpen) return null;
//   const navigate = useNavigate();

// //signup connerction
// const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4 p-2">
//       {/* Blurred Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
//         // onClick = {onClose}
//         onClick={()=>navigate("/")} 
//       />

//       {/* Modal Card */}
//       <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
//         <button onClick={()=>navigate("/")} className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 z-10">
//           <X size={20} />
//         </button>

//         <div className="md:p-6 p-4">
//           <div className="text-center mb-8">
//             <h2 className="md:text-3xl text-2xl font-black text-[#387780]">Join JiViKa</h2>
//             <p className="text-gray-500 mt-2">Start your journey toward a better career</p>
//           </div>

//           <form className="space-y-4" >
//             <div className="relative">
//               <User className="absolute left-4 top-5 text-gray-400" size={18} />
//               <input 
//                 onChange={handleChange}
//                 type="text" 
//                 placeholder="Full Name" 
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] focus:ring-4 focus:ring-[#387780]/10 outline-none transition-all"
//               />
//             </div>

//             <div className="relative">
//               <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
//               <input 
//                 onChange={handleChange}
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] focus:ring-4 focus:ring-[#387780]/10 outline-none transition-all"
//               />
//             </div>

//             <div className="relative">
//               <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
//               <input 
//                 onChange={handleChange}
//                 type="password" 
//                 placeholder="Create Password" 
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] focus:ring-4 focus:ring-[#387780]/10 outline-none transition-all"
//               />
//             </div>

//              <div className="flex  items-center my-4 gap-3">
//               {/* <RadioGroup className = "flex items-center justify-between"> */}
//                 <div className=" space-x-2">
//                 <input
//                  type="radio"
//                  name= "role"
//                  value="student"
//                  className="cursor-pointer"
//                 />
//                 <label htmlFor="r1">Student</label>
//                 </div>
//                 <div className=" space-x-2">
//                   <input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   className="cursor-pointer"
//                   />
//                   <label htmlFor="r2" >Recruiter</label>
//                 </div>
//                 <div className="flex  ">
//                   <div className="flex">
//       <label className="block md:mt-10 md:ml-30 mt-0 ml-0 justify-self-end  text-[12px] font-bold text-slate-700 uppercase tracking-wider">
//         Profile Picture
//       </label>
//       </div>
//        <div className="md:flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
//       <div className="relative group">
//         {/* The Avatar Circle */}
//         <div className={`
//           md:w-15 md:h-15 h-8 w-8 rounded-full border-4 border-dashed transition-all duration-300
//           flex items-center justify-center overflow-hidden
//           ${imagePreview ? "border-blue-500" : "border-slate-200 bg-slate-50 hover:border-blue-400"}
//         `}>
//           {imagePreview ? (
//             <img 
//               src={imagePreview} 
//               alt="Preview" 
//               className="w-full h-full object-cover" 
//             />
//           ) : (
//             <User size={48} className="text-slate-300" />
//           )}

//           {/* Hover Overlay */}
//           <label className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 rounded-full">
//             <Camera size={24} className="text-white mb-1" />
//             <span className="text-[10px] text-white font-medium uppercase">Change</span>
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </label>
//         </div>

//         {/* Remove Button (Only shows if image exists) */}
//         {imagePreview && (
//           <button
//             onClick={removeImage}
//             type="button"
//             className="absolute -top-1 -right-1 bg-rose-500 text-white p-1 rounded-full shadow-lg hover:bg-rose-600 transition-colors"
//           >
//             <X size={14} />
//           </button>
//         )}
//       </div>
    

//       <div className="flex flex-col">
//       <p className="text-[11px]  text-slate-400 text-center leading-relaxed">
//         JPG, PNG or GIF. <br /> Max size of 2MB.
//       </p>
//       </div>
//     </div>
//     </div>
//              </div>
//             <button className="w-full bg-[#ff9933] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#e68a00] flex items-center justify-center gap-2 group transition-all mt-4">
//               Create Account
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//           </form>

//           <p className="text-center mt-10 text-sm text-gray-500">
//             Already have an account? 
//             <button onClick={()=>navigate("/login")} className="ml-2 font-black text-[#387780] hover:underline">
//               Login here
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useEffect, useState } from "react";
import { X, User, Mail, Lock, ArrowRight, Camera, Phone } from "lucide-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { USER_API_END_POINT } from "./Utils/Constant";
import { toast } from "react-toastify";
import { useDispatch , useSelector} from "react-redux";
import { setLoading } from "./Redux/userSlice";

const Register = ({ isOpen }) => {

  const [input , setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });



    const {loading, user} = useSelector(store => store.user);
    const dispatch = useDispatch();
   
  
  const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]:e.target.value});
  }

  const changeFileHandler = (e) =>{
    setInput({...input, file:e.target.files?.[0]})
  }

    const submitHandler = async (e) =>{
    e.preventDefault();
  
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);

      if(input.file){
        formData.append("file", input.file);
      }
        try{
          dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    }catch(error){
      console.log(error);
       toast.error(error?.response?.data?.message || "Something went wrong ❌");
    }finally{
      dispatch(setLoading(false));
    }
  }

  if (!isOpen) return null;
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => setImagePreview(null);

  useEffect(()=>{
    if(user){
      navigate("/");
    }
  },[]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={() => navigate("/")} 
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-y-auto max-h-[95vh] animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={() => navigate("/")} 
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-[#387780]">Join JiViKa</h2>
            <p className="text-gray-500 mt-1 text-sm md:text-base">Start your journey toward a better career</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            {/* Input Fields */}
            <div className="space-y-3">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  name="fullname"
                 value={input.fullname}
                 onChange={changeEventHandler}
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all"
                />
              </div>
               <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  type="text" 
                  placeholder="91-" 
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  type="password" 
                  placeholder="Create Password" 
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all"
                />
              </div>
            </div>

            {/* Role & Profile Container */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
              {/* Radio Group */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                  type="radio"
                   name="role"
                  value="student"
                  checked = {input.role === 'student'}
                  onChange={changeEventHandler}
                   className="accent-[#387780]" />
                  <span className="text-sm font-medium">Student</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                   type="radio"
                    name="role"
                     checked = {input.role === 'recruiter'}
                      onChange={changeEventHandler}
                     value="recruiter"
                      className="accent-[#387780]" />
                  <span className="text-sm font-medium">Recruiter</span>
                </label>
              </div>

              {/* Profile Upload Section */}
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Profile Picture</p>
                  <p className="text-[9px] text-slate-400 italic">Max 2MB</p>
                </div>

                <div className="relative group">
                  <div className={`
                    w-16 h-16 rounded-full border-2 border-dashed transition-all
                    flex items-center justify-center overflow-hidden
                    ${imagePreview ? "border-[#387780]" : "border-slate-200 bg-slate-50"}
                  `}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <User size={24} className="text-slate-300" />
                    )}

                    <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity rounded-full">
                      <Camera size={16} className="text-white" />
                      <input
                       type="file"
                       onChange = {changeFileHandler}
                        accept="image/*"
                         className="hidden"
                          />
                    </label>
                  </div>
                  {imagePreview && (
                    <button onClick={removeImage} className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full">
                      <X size={10} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* <button type="submit" className="w-full bg-[#ff9933] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#e68a00] flex items-center justify-center gap-2 group transition-all">
              Create Account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button> */}
            
                        <button
              type="submit"
              disabled={loading}
              className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff9933] hover:bg-[#e68a00] text-white"}
              `}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account? 
            <button onClick={() => navigate("/login")} className="ml-2 font-black text-[#387780] hover:underline">
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;