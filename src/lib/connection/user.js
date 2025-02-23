import mongoose from "mongoose";

let connected = false;

export async function connect() {
  if (connected) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in MongoDB connection: " + error);
  }
}
