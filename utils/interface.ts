import { Document } from "mongoose";

interface iUser {
  email: string;
  verify: boolean;
  enrollmentID: string;
}

export interface iUserData extends iUser, Document {}
