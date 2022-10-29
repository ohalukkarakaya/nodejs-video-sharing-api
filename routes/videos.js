import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, trend, random, sub, getByTag, search } from "../controllers/video.js";
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

//GET SUBSCRIBED CHANELS VİDEOS
router.get("/sub", verifyToken, sub)

//GET Videos by tag
router.get("/tags", getByTag, sub)

//GET Videos with search
router.get("/search", search, sub)

export default router;