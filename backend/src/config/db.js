import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGODB_URI ? "Loaded successfully" : "UNDEFINED!");
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB Connected successfully: ", conn.connection.host);
  } catch (error) {
    console.log("Mongo DB Connection Error: ", error);
  }
};
export default connectDB;
