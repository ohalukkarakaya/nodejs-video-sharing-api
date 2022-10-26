import express from "express";
import { update, deleteUser, getOneUser, subscribe, unSubscribe, like, dislike } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, update);

//DELETE USER
router.delete("/:id", verifyToken, deleteUser);

//GET ONE USER
router.get("/find/:id", getOneUser);

//SUBSCRIBE USER
router.put("/sub/:id", verifyToken, subscribe);

//UNSUBSCRİBE USER
router.put("/unsub/:id", verifyToken, unSubscribe);

//LIKE VIDEO
router.put("/like/:videoId", verifyToken, like);

//DİSLİKE VIDEO
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
