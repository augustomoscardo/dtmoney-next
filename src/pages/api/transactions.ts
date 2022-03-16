// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import dbConnect from "../../services/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../Schemas/Transaction";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const transactions = await Transaction.find({});
        res.status(200).json({ succes: true, data: transactions });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    case "POST":
      try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json({ success: true, data: transaction });
        break;
      } catch (error) {
        res.status(400).json({ succes: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
