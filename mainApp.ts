import { Application, Request, Response } from "express";
import user from "./router/userRouter";
export const mainApp = async (app: Application) => {
  try {
    app.use("/api/v1", user);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Welcome to my production api",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error fetching default message",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
