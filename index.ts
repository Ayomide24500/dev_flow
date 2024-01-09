import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

config();

const port: number = parseInt(process.env.PORT!);

const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);

const server = app.listen(port, () => {
  console.clear();
  console.log("");
  dbConfig();
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
