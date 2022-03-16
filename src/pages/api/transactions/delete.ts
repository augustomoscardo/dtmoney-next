import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Transaction from "../../../Schemas/Transaction";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const { title, amount, type, category } = req.body;
    const userName = getSession();

    if (method !== "POST") return res.status(400).json({ success: false });

    await dbConnect();

    const transaction = await Transaction.findOne({});

    const transactionDelete = await Transaction.deleteOne({
      transaction,
    });

    return res.json({ message: true, transactionDelete });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
