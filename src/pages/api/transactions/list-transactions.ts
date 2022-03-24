import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Transaction from "../../../Schemas/Transaction";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //get user in session
  //compare user id with user._id in Transaction
  //list transactions

  try {
    const session = await getSession({ req });

    await dbConnect();

    const userEmail = session?.user?.email;

    const user = await User.findOne({ userEmail });

    const transactions = await Transaction.find({ user: user._id }).sort({
      created_at: -1,
    });

    res.status(200).json({ succes: true, data: transactions });
  } catch (error) {
    res.status(400).json({ succes: false });
  }
};

export default handler;
