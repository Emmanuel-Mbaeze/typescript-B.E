import { Response, Request } from "express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRouter from "./router/studentRouter";
import stackRouter from "./router/stackRouter";
import courseRouter from "./router/courseRouter";

const port: number = 2233;
const URL: string = "mongodb://localhost/newClassDB";

mongoose
  .connect(URL)
  .then((): void => {
    console.log("DataBase is now connected...!");
  })
  .catch((err): void => console.log(err.message));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "Welcome to our test API" });
});

app.use("/api/student", studentRouter);
app.use("/api/stack", stackRouter);
app.use("/api/course", courseRouter);

app.listen(port, (): void => {
  console.log("Server is now listening");
});
