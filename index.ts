import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { mainApp } from "./mainApp";

config();

const port: number = parseInt(process.env.PORT!);

const app: Application = express();

mainApp(app);

app.use(express.json());
app.use(cors());

const server = app.listen(port, () => {
  console.log("server is running .. 🚀");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: Error) => {
  console.log("unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});
