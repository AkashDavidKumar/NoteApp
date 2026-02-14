import mongoose from "mongoose";

// Define the Note schema
// The schema defines the structure of the Note documents in the MongoDB collection.
const noteSchema = new mongoose.Schema(
  {
    title: {    
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;