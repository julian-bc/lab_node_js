import mongoose from "mongoose";
import config from "../config/config.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.databaseUrl);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
