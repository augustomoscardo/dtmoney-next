import dbConnect from "../../services/mongoose";
import User from "../../Schemas/User";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.findById({});
        res.status(200).json({ succes: true, data: users });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;

    case "POST":
      const { name, password } = req.body;

      try {
        const user = await User.create({ name, password });
        // user.save();
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
