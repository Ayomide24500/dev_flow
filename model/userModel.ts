import { Schema, model } from "mongoose";
import { iUserData } from "../utils/interface";

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    verify: {
      type: Boolean,
    },
    enrollmentID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
