import { Request, Response } from "express";
import crypto from "crypto";
import userModel from "../model/userModel";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const token = crypto.randomBytes(3).toString("hex");
    const enrollmentID = crypto.randomBytes(2).toString("hex");

    const user = await userModel.create({ email, enrollmentID, token });

    return res.status(201).json({
      message: "user has been created",
      data: user,
    });
  } catch (error) {
    return res.status(201).json({
      message: "error creating user",
    });
  }
};

export const viewOneuser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(404).json({
      message: "user found..",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error findinf user",
    });
  }
};
export const viewAlluser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(404).json({
      message: "user found..",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error finding user",
    });
  }
};
