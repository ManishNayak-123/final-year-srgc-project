import { Job } from "../modles/Job.js";

// export const postJob = async (req,res) =>{
//     try{

//         const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
//         const userId = req.id;

//         if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
//             return res.status(400).json({
//                 message:"Something is missing",
//                 success:false
//             });
//         };

//         const job = await Job.create({
//             title,
//             description,
//             requirements:requirements.split(","),
//             salary:Number(salary),
//             location,
//             jobType,
//             experienceLevel:experience,
//             position,
//             company:companyId,
//             created_by:userId
//         });

//         return res.status(201).json({
//             message:"New job created successfully",
//             job,
//             success:true
//         });

//     }catch(error){
//       console.log(error);
//     }
// }
// import { Job } from "../modles/Job.js";

export const postJob = async (req, res) => {
  try {
    let {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }

    // ✅ FIX: Clean and convert salary safely
    const cleanedSalary = salary.toString().replace(/[^0-9]/g, "");

    const numericSalary = Number(cleanedSalary);

    if (isNaN(numericSalary)) {
      return res.status(400).json({
        message: "Salary must be a valid number",
        success: false
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: numericSalary, // ✅ safe number
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId
    });

    return res.status(201).json({
      message: "New job created successfully",
      job,
      success: true
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false
    });
  }
};


export const getAllJobs = async (req, res) =>{
    try{
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}},
            ]
        };

        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){ 
            return res.status(404).josn({
                message:"Job not found",
                success: false
            });
        };

        return res.status(200).json({
            jobs,
            success:true
        });

    }catch(error){
    console.log(error);
    }
}

export const getJobById = async(req, res) =>{
    try{

        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });

        if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            });
        };

        return res.status(200).json({
          job,
          success:true
        })
    }catch(error){
      console.log(error);
    }
}

export const getAdminJobs = async (req, res) =>{
    try{
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId}).populate({
            path:'company',
            createdAt:-1
        });

        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success:false
            });
        };

        return res.status(200).json({
            jobs,
            success:true
        });

    }catch(error){
      console.log(error);
    }
}


export const deleteJobs = async (req, res) => {
  try {
    const { id } = req.params;

    const jobs = await Job.findByIdAndDelete(id);

    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Jobs deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};