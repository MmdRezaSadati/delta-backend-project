import express, { Request } from "express";
import { User } from "./models/User";

const app = express();
app.use(express.json());
app.get("/", async (req: Request, res): Promise<any> => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.status(500).json({ error: "Database connection failed", schema: "delta_project", timestamps: false });
  }
});
export default app