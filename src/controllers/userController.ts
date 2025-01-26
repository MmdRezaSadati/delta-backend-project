import { Request, Response } from "express";
import { User } from "../models/User";
import { getAllUsersService, getUserByIdService } from "../utils/services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export const getUserById = async (
  req: Request<{
    id: string;
  }>,
  res: Response
) => {
  const userId = req.params.id;
  try {
    const user = await getUserByIdService(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};
