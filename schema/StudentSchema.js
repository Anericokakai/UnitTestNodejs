import mongoose, { Schema } from "mongoose";
const studentSchema = new Schema(
  {
    name: String,
    email: {
      unique: true,
      required: true,
      type: String,
    },
    password: String,
    course: String,
    
    preference: [String],
    role:{
        type:String,
        default:'student'
    },
  },
  {
    collection: "students",
  }
);

export const studentDb_collection = mongoose.model("students", studentSchema);
