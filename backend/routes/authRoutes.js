// import express from "express";
// import { signup } from "../controllers/authController.js";

// const router = express.Router();

// router.post("/signup", signup);

// export default router;
import express from "express";
import { register,logout, login, updateProfile, getAllUsers, deleteUser } from "../controllers/authController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import  {singleUpload}  from "../middleware/multer.js";
const router = express.Router();
router.route("/register").post(singleUpload,register);
router.route("/all").get(getAllUsers);
router.route("/delete/:id").delete(deleteUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;