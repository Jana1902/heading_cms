import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDb } from "./lib/db.js";
import router from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", router);

app.listen(5001, () => {
  console.log("Server is started at port 5001");
  connectDb();
});
