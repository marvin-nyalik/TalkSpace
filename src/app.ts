import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello world");
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000/`);
});
