import express from "express";
import { getAllnotes,getNoteById,createNote,updateNote,deleteNote } from "../controlles/notesControlles.js";

const router = express.Router();

// Sample notes data

router.get("/", getAllnotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;