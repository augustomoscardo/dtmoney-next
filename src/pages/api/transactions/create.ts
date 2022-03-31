import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Transaction from "../../../Schemas/Transaction";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const { title, amount, type, category } = req.body;
    const session = await getSession({ req });

    if (method !== "POST") return res.status(400).json({ success: false });

    await dbConnect();

    const userEmail = session?.user?.email; //get user from session

    const user = await User.findOne({ userEmail }); //find user in DB

    const transaction = await Transaction.create({
      title,
      amount,
      type,
      category,
      user: user._id,
    }); //create transaction after find user

    return res.json({ message: true, transaction });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
