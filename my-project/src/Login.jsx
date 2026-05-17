// import React, { useEffect, useState } from "react";
// import { LogIn, User, ChevronRight, Menu, X, Mail, Lock, ArrowRight, Store} from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// import { USER_API_END_POINT } from "./Utils/Constant";
// import { toast } from "react-toastify";
// import {useDispatch, useSelector} from "react-redux";
// import { setLoading, setUser } from "./Redux/userSlice";
// // --- 1. CONFIGURATION DATA ---
// const LANGUAGES = [
//   { code: "en", name: "English", country: "United States", flag: "🇺🇸" },
//   { code: "hi", name: "Hindi", country: "India", flag: "🇮🇳" },
// ];

// // --- 2. INTERNAL LOGIN COMPONENT ---
// const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
//   if (!isOpen) return null;
//   const handleSuccess = (credentialResponse) => {
//     const user = jwtDecode(credentialResponse.credential);
//     console.log(user);

//     localStorage.setItem("user", JSON.stringify(user));
//   };

//   // const {user} = useSelector()

//   const handleError = () => {
//     console.log("Google login failed");
//   };

//     const [input , setInput] = useState({
//       email:"",
//       password:"",
//       role:""
//     });
//     const {loading,user} = useSelector(store => store.user);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
  
//       const changeEventHandler = (e) =>{
//     setInput({...input, [e.target.name]:e.target.value});
//   }
//   const controller = new AbortController();
//     const submitHandler = async (e) =>{
//     e.preventDefault();
    
//        try{
//         dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/login`, input,{
//         signal: controller.signal,

//         headers:{
//           "Content-Type":"application/json"
//         },
//         withCredentials:true,
//       });
//       if(res.data.success){
//         dispatch(setUser(res.data.user));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     }catch(error){
//       console.log(error);
//        toast.error(error?.response?.data?.message || "Something went wrong ❌");
      
//     }finally{
//        dispatch(setLoading(false));
//       // setLoading(false);
//     }
//     controller.abort();
//   }

//   const changeFileHandler = (e) =>{
//     setInput({...input, file:e.target.files?.[0]})
//   }

//   useEffect(()=>{
//     if(user){
//       navigate("/");
//     }
//   })

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer" onClick={onClose} />
//       <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
//         <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 z-10">
//           <X size={20} />
//         </button>
//         <div className="md:p-10 p-4">
//           <div className="text-center mb-8">
//             <h2 className="md:text-3xl text-2xl font-black text-[#387780]">Welcome Back</h2>
//             <p className="text-gray-500 mt-2 text-sm">Log in to your JiViKa account</p>
//           </div>
//           <form className="space-y-4" onSubmit={submitHandler}>
//             <div className="relative">
//               <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
//               <input
//                 name="email"
//                 value={input.email}
//                 onChange={changeEventHandler}
//                 type="email" 
//                 placeholder="Email Address"
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all" />
//             </div>
//             <div className="relative">
//               <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
//               <input
//                name="password"
//                value={input.password}
//                onChange={changeEventHandler}
//                 type="password" 
//               placeholder="Enter Password"
//               className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all" />
//             </div>
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
//               {/* Radio Group */}
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input 
//                   type="radio"
//                    name="role"
//                   value="student"
//                   checked = {input.role === 'student'}
//                   onChange={changeEventHandler}
//                    className="accent-[#387780]" />
//                   <span className="text-sm font-medium">Student</span>
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                    type="radio"
//                     name="role"
//                      checked = {input.role === 'recruiter'}
//                      onChange={changeEventHandler}
//                      value="recruiter"
//                       className="accent-[#387780]" />
//                   <span className="text-sm font-medium">Recruiter</span>
//                 </label>
//               </div>
//               </div>

//             {/* <button type="submit" className="w-full bg-[#387780] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#2c5e65] flex items-center justify-center gap-2 group transition-all mt-4">
//               Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button> */} 

//             <button
//   type="submit"
//   disabled={loading}
//   className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all
//     ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff9933] hover:bg-[#e68a00] text-white"}
//   `}
// >
//   {loading ? (
//     <>
//       <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
//       Processing...
//     </>
//     // <h1>Processing</h1>
//   ) : (
//     <>
//       Create Account
//       <ArrowRight size={18} />
//     </>
//   )}
// </button>
//           </form>
          
//           <div className="mt-8 relative flex items-center justify-center">
//             <div className="border-t border-gray-100 w-full"></div>
//             <span className="bg-white px-4 text-[10px] text-gray-400 uppercase tracking-widest absolute">Or continue with</span>
//           </div>
//           <div className="mt-4 p-2">
//            <GoogleLogin 
//            onSuccess={handleSuccess}
//            onError={handleError}
//            />
//           </div>

//           <p className="text-center mt-10 text-sm text-gray-500">
//             New to JiViKa? <button onClick={onSwitchToSignup} className="font-black text-[#ff9933] hover:underline">Create Account</button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- 3. INTERNAL REGISTER COMPONENT ---
// // (Previously shared code remains the same inside this file)

// // --- 4. MAIN NAVBAR COMPONENT ---
// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   // ... (Other states like isMenuOpen, currentLang)

//   return (
//     <>
//       <nav className="bg-[#387780] shadow-lg sticky top-0 z-50 w-full">
//         {/* ... Nav items as before ... */}
//         <Link to="/login" className="bg-white text-[#387780] font-semibold py-2 px-5 rounded-full flex items-center hover:bg-gray-100 transition shadow-md">
//            <LogIn className="w-4 h-4 mr-2" /> Sign In
//         </Link>
//         <Link to="/register" className="bg-[#ff9933] text-white font-semibold py-2 px-5 rounded-full flex items-center hover:bg-[#e68a00] transition shadow-md">
//            <User className="w-4 h-4 mr-2" /> Sign Up
//         </Link>
//       </nav>

//       {/* --- INTEGRATED MODAL LOGIC --- */}
//       <LoginModal 
//         isOpen={location.pathname === "/login"} 
//         onClose={() => navigate("/")} 
//         onSwitchToSignup={() => navigate("/register")}
//       />

//       {/* Your existing RegisterModal logic here */}
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { LogIn, User, ChevronRight, Menu, X, Mail, Lock, ArrowRight, Store} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { USER_API_END_POINT } from "./Utils/Constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "./Redux/userSlice";

// --- 1. CONFIGURATION DATA ---
const LANGUAGES = [
  { code: "en", name: "English", country: "United States", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", country: "India", flag: "🇮🇳" },
];

// --- 2. INTERNAL LOGIN COMPONENT ---
const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: ""
  });

  const { loading, user } = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isOpen) return null;

  // --- UPDATED GOOGLE SUCCESS HANDLER ---
  const handleSuccess = async (credentialResponse) => {
    try {
      dispatch(setLoading(true));
      // 1. Decode the Google JWT
      const decoded = jwtDecode(credentialResponse.credential);
      
      /* NOTE: In a production app, you should send 'credentialResponse.credential' 
         to your backend (e.g., axios.post(`${USER_API_END_POINT}/google-login`))
         to verify it and create a session. 
         For now, we update the Redux state so the UI reflects the login.
      */

      const userData = {
        _id: decoded.sub, // Google's unique ID
        fullname: decoded.name,
        email: decoded.email,
        profile: { profilePhoto: decoded.picture },
        role: input.role || 'student' // Uses the selected radio button role
      };

      // 2. Update Redux and LocalStorage
      dispatch(setUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      
      toast.success("Logged in with Google successfully! 🎉");
      navigate("/");
      onClose();
    } catch (error) {
      console.error("Google Auth Error:", error);
      toast.error("Failed to process Google Login");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleError = () => {
    toast.error("Google login failed. Please try again.");
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
        toast.success(res.data.message);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong ❌");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer" onClick={onClose} />
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 z-10">
          <X size={20} />
        </button>
        <div className="md:p-10 p-4">
          <div className="text-center mb-8">
            <h2 className="md:text-3xl text-2xl font-black text-[#387780]">Welcome Back</h2>
            <p className="text-gray-500 mt-2 text-sm">Log in to your JiViKa account</p>
          </div>
          
          <form className="space-y-4" onSubmit={submitHandler}>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                type="password"
                placeholder="Enter Password"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#387780] outline-none transition-all" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === 'student'}
                    onChange={changeEventHandler}
                    className="accent-[#387780]" />
                  <span className="text-sm font-medium">Student</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    className="accent-[#387780]" />
                  <span className="text-sm font-medium">Recruiter</span>
                </label>
              </div>
            </div>

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
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
            <div className="border-t border-gray-100 w-full"></div>
            <span className="bg-white px-4 text-[10px] text-gray-400 uppercase tracking-widest absolute">Or continue with</span>
          </div>

          <div className="mt-6 flex justify-center">
            {/* Added styling to match your theme better */}
            <div className="scale-110">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                theme="filled_blue"
                shape="pill"
              />
            </div>
          </div>

          <p className="text-center mt-10 text-sm text-gray-500">
            New to JiViKa? <button onClick={onSwitchToSignup} className="font-black text-[#ff9933] hover:underline">Create Account</button>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector(store => store.user);

  return (
    <>
      <nav className="bg-[#387780] shadow-lg sticky top-0 z-50 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">JiViKa</div>
          <div className="flex gap-4">
            {!user ? (
              <>
                <Link to="/login" className="bg-white text-[#387780] font-semibold py-2 px-5 rounded-full flex items-center hover:bg-gray-100 transition shadow-md">
                  <LogIn className="w-4 h-4 mr-2" /> Sign In
                </Link>
                <Link to="/register" className="bg-[#ff9933] text-white font-semibold py-2 px-5 rounded-full flex items-center hover:bg-[#e68a00] transition shadow-md">
                  <User className="w-4 h-4 mr-2" /> Sign Up
                </Link>
              </>
            ) : (
              <span className="text-white">Welcome, {user.fullname}</span>
            )}
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={location.pathname === "/login"} 
        onClose={() => navigate("/")} 
        onSwitchToSignup={() => navigate("/register")}
      />
    </>
  );
};

export default Navbar;