import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../../Schemas/Transaction";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //select transaction by ID
  // update fields, then return new document

  try {
    const { method } = req;
    const { _id, title, amount, type, category } = req.body;

    if (method !== "POST") return res.status(400).json({ success: false });

    await dbConnect();

    const updateTransaction = await Transaction.findOneAndUpdate(
      { _id },
      {
        $set: { title, amount, type, category },
      },
      { returnDocument: "after" }
    );

    console.log(`Transação: ${JSON.stringify(updateTransaction)} atualizada.`);

    return res.json({ message: true, transaction: updateTransaction });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
