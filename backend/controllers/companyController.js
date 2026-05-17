// import {Company} from "../modles/Company.js";


// export const registerCompany = async (req, res)=>{
// try{
//        const {companyName} = req.body;
//        if(!companyName){
//         return res.status(400).json({
//             message:"Company name is required",
//             success:false
//         });
//        }
//        let company = await Company.findOne({name:companyName});
//        if(company){
//         return res.status(400).json({
//             message:"You can't register in the same company",
//             success:false
//         });
//        }

//        company = await Company.create({
//         name:companyName,
//         userId:req.id
//        });

//        return res.status(201).json({
//         message:"Company registered successfully.",
//         company,
//         success:true
//        });

// }catch(error){
//   console.log(error);
// }
// }
import { Company } from "../modles/Company.js"; // ✅ fixed typo
import getDataUri from "../config/datauri.js";
import cloudinary from "../config/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "Company already exists", // ✅ better message
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id, // ✅ comes from middleware
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};



export const getCompany = async(req, res)=>{
    try{

        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"Companies not found",
                success:false
            });
        }

        return res.status(200).json({
            companies,
            success:true
        })
    }catch(error){

        console.log(error);
    }
}

export const getCompanyById = async (req, res)=>{
    try{

        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false                
            });
        }

        return res.status(200).json({
            company,
            success:true
        });
    }catch(error){

    }
}

export const updateCompany = async (req, res) =>{
    try{
        const {name, description, website, location} = req.body;
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;


        const updateData = {logo, name, description, website, location};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});
        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            });
        }

        return res.status(200).json({
            message:"Company inforamtion updated",
            success:true
        });

    }catch(error){
        console.log(error);
    }
}


export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Company.findByIdAndDelete(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};