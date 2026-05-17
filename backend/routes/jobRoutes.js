import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { deleteJobs, getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/jobController.js";


const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/delete/:id").delete(isAuthenticated,deleteJobs);

export default router;