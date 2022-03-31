import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Transaction from "../../../Schemas/Transaction";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });

    await dbConnect();

    const userEmail = session?.user?.email;

    const user = await User.findOne({ userEmail });

    const transactions = await Transaction.find({ user: user._id });

    res.status(200).json({ succes: true, transactions });
  } catch (error) {
    console.log(error);

    res.status(400).json({ succes: false });
  }
};

export default handler;
