import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from the web server!");
});

app.get("/film/", (_req: Request, res: Response) => {
  res.send("Doing film shit!");
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
