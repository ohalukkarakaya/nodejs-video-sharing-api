import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, trend, random, sub } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//CREATE VİDEO
router.post("/", verifyToken, addVideo)

//UPDATE VİDEO
router.put("/:id", verifyToken, updateVideo)

//DELETE VİDEO
router.delete("/:id", verifyToken, deleteVideo)

//GET VİDEO
router.get("/find/:id", getVideo)

//INCREASE VİEW VİDEO
router.put("/view/:id", addView)

//GET TREND VİDEOS
router.get("/trend", trend)

//GET RANDOM VİDEOS
router.get("/random", random)

//GET SUBSCRİBED CHANELS VİDEOS
router.get("/sub", verifyToken, sub)

export default router;