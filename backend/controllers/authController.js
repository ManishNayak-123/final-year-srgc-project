
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import {User} from "../modles/User.js";


// export const register = async(req,res)=>{
//     try{
//         const {fullname, email, phoneNumber, password, role} = req.body;
//         if(!fullname || !email || !phoneNumber || !password || !role){
//         return res.status(400).json({
//         message:"something is missing",
//         success : false
//     });
//         };
//         const user = await User.findOne(email);
//         if(user) {
//             return res.status(400).json({
//                 message:"User already exists with this email",
//                 success:false
//             });
//         };

//         const hashedPassword = await bcrypt.hash(password,10);
//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password:hashedPassword,
//             role
//         });

//         return res.status(201).json({
//             message:"Account created Successfully",
//             success:true
//         })
//     }catch(error){
//      console.log(error);
//     }
// }


// //for login
// export const login = async(req, res)=>{
//     try{
//         const { email, password, role} = req.body;
//         if( !email ||  !password || !role){
//         return res.status(400).json({
//         message:"something is missing",
//         success : false
//     });
//         };
    
//     let user = await User.findOne({email});
//     if(!user){
//         return res.status(400).json({
//             message:"Incorrect email or password",
//             success:false
//         });
//     };

//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if(!isPasswordMatch){
//         return res.status(400).json({
//             message:"Incorrect email or Password",
//             success:false
//         });
//     };

//     if(role !== user.role){
//         return res.status(400).json({
//             message:"Account doesn't exist with current role",
//             success:false
//         });
//     };

//     const tokenData = {
//         userId:user._id
//     }
//     const token = await jwt.sign(tokenData, process.env.SECRECT_KEY, {expiresIn:'1d'});

//     user = {
//         _id:user._id,
//         fullname:user.fullname,
//         email:user.email,
//         phoneNumber:user.phoneNumber,
//         role:user.role,
//         profile:user.profile
//     }
//     return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
//         message:`Welcome back ${user.fullname}`,
//         user,
//         success:true
//     })
//     }catch(error){
//         console.log(error);
//     }
// }


// //for logout

// export const logout = async(req, res) =>{
//     try{

//         return res.status(200).cookie("token", "", {maxAge:0}).json({
//             message:"Loged out successfully",
//             success:true
//         })
//     }catch(error){
//         console.log("error");

//     }
// }

// //for update file
// export const updateProfile = async (req, res)=>{
//     try{
//         const {fullname, email, phoneNumber, bio, skills} = req.body;
//         const file = req.file;
//          if(!fullname || !email || !phoneNumber || !bio|| !skills){
//         return res.status(400).json({
//         message:"something is missing",
//         success : false
//     });
//  };


//  //cloudinary
//  const skillsArray = skills.split(",");
//  const userId = red.id;
//  let user = await User.findById(userId); 

//   if(!user){
//     return res.status(400).json({
//         message:"User not Found",
//         success:false
//     });
//   };
//   user.fullname = fullname,
//   user.email = email,
//   user.phoneNumber = phoneNumber,
//   user.profile.bio = bio,
//   user.profile.skills = skillsArray

//   //resume will come here later

//   await user.save();

//     user = {
//         _id:user._id,
//         fullname:user.fullname,
//         email:user.email,
//         phoneNumber:user.phoneNumber,
//         role:user.role,
//         profile:user.profile
//     };
//     return res.status(200).json({
//         message:"Profile updated successfully",
//         user,
//         success:true
//     });
//     }
//     catch(error){
//      console.log(error);
//     }
// }

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../modles/User.js"; // ✅ fixed path
import getDataUri from "../config/datauri.js";
import cloudinary from "../config/cloudinary.js";
import sendRegistrationEmail from "../Utility/sendEmail.js";
// ================= REGISTER =================
// export const register = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, password, role } = req.body;
//         console.log(fullname, email, phoneNumber, password, role);
//         if (!fullname || !email || !phoneNumber || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         }

//         const file = req.file;
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

//         // ✅ fixed findOne
//         const user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({
//                 message: "User already exists with this email",
//                 success: false
//             });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             role,
//             profile:{
//                 profilePhoto:cloudResponse.secure_url,
//             }
//         });

//         return res.status(201).json({
//             message: "Account created Successfully",
//             success: true
//         });

//     } catch (error) {
//         console.log(error);
//     }
// };

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        
        // 1. Basic Validation
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        // 2. Profile Photo Upload to Cloudinary
        const file = req.file;
        let cloudResponse;
        if (file) {
            const fileUri = getDataUri(file);
            cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        }

        // 3. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false
            });
        }

        // 4. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. Create User in Database
        const newUser = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: {
                profilePhoto: cloudResponse ? cloudResponse.secure_url : "",
            }
        });

        // ==========================================
        // ✅ AUTOMATIC EMAIL TRIGGER (Operational)
        // ==========================================
        // We trigger this without 'await' so the response is sent immediately to the frontend
        sendRegistrationEmail(newUser.email, newUser.fullname, newUser.role)
            .then(() => console.log(`Welcome email sent to ${newUser.email}`))
            .catch((err) => console.error("Email failed to send:", err));

        // 6. Final Response
        return res.status(201).json({
            message: "Account created Successfully",
            success: true
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// ================= LOGIN =================
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) { 
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        };

        // ✅ fixed SECRET_KEY
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        // remove password before sending
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            });

    } catch (error) {
        console.log(error);
    }
};


// ================= LOGOUT =================
export const logout = async (req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", { maxAge: 0 })
            .json({
                message: "Logged out successfully",
                success: true
            });

    } catch (error) {
        console.log(error);
    }
};


// ================= UPDATE PROFILE =================
// export const updateProfile = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, bio, skills } = req.body;
//         const file = req.file;
//          const fileUri = getDataUri(file);
//          const cloudResponse = await cloudinary.uploader.upload(fileUri.content,{
//             resource_type:"auto"
//          });


//         //cloudenary will be implemented here

//         let skillsArray;
//         if(skills){
//               skillsArray = skills.split(",");
//         }
       

//         // ✅ fixed req.id
//         const userId = req.id;

//         let user = await User.findById(userId);

//         if (!user) {
//             return res.status(400).json({
//                 message: "User not found",
//                 success: false
//             });
//         }

//         // ✅ fixed assignments
//         if(fullname) user.fullname = fullname;
//         if(email) user.email = email;
//         if(phoneNumber) user.phoneNumber = phoneNumber;
//         if(bio) user.profile.bio = bio;
//         if(skills) user.profile.skills = skills;

//         if(cloudResponse){
//             user.profile.resume = cloudResponse.secure_url;
//             user.profile.resumeOriginalName = file.originalname;
//         }
//         await user.save();

//         user = {
//             _id: user._id,
//             fullname: user.fullname,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             role: user.role,
//             profile: user.profile
//         };

//         return res.status(200).json({
//             message: "Profile updated successfully",
//             user,
//             success: true
//         });

//     } catch (error) {
//         console.log(error);
//     }
// };
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        
        // Initialize cloudResponse as null
        let cloudResponse = null;

        // ✅ FIX: Check if file exists before processing DataURI
        if (file) {
            const fileUri = getDataUri(file);
            cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
                resource_type: "auto"
            });
        }

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }

        const userId = req.id; 
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        // Updating data
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        
        // Ensure user.profile exists before assigning
        if (!user.profile) user.profile = {}; 
        
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray; // Use the array version

        // ✅ Only update resume fields if a file was actually uploaded
        if (cloudResponse) {
            user.profile.resume = cloudResponse.secure_url;
            user.profile.resumeOriginalName = file.originalname;
        }

        await user.save();

        // Prepare response object
        const updatedUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser,
            success: true
        });

    } catch (error) {
        console.error("Update Profile Error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        // Find all users but EXCLUDE the hashed password for security
        // However, since you specifically asked for it to manage the DB, 
        // I will include it, but remember it's a hash, not plain text.
        const users = await User.find({}).sort({ createdAt: -1 });

        if (!users) {
            return res.status(404).json({
                message: "No users found.",
                success: false
            });
        }

        return res.status(200).json({
            users,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "User deleted successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
}