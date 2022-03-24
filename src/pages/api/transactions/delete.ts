import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../../Schemas/Transaction";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //select transaction by ID
  // delete transaction

  try {
    const { method } = req;
    const { _id } = req.body;
    console.log(req.body);

    if (method !== "POST") return res.status(400).json({ success: false });

    await dbConnect();

    const deleteTransaction = await Transaction.deleteOne({ _id });

    console.log(`Transação deletada com sucesso.`);

    return res.json({ message: true, transaction: deleteTransaction });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
