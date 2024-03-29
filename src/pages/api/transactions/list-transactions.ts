import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Transaction from "../../../Schemas/Transaction";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

const myCustomLabels = {
  docs: "transactionsList",
  totalDocs: "itemsCount",
  limit: "itemsPerPage",
  page: "currentPage",
  meta: "paginator",
};

const options = {
  limit: 10,
  collation: {
    locale: "en",
  },
  lean: true,
  leanWithId: true,
  sort: { created_at: -1 },
  customLabels: myCustomLabels,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //get user in session -> find user -> list transactions by user._id

  try {
    const session = await getSession({ req });

    const { page } = req.query;

    await dbConnect();

    const userEmail = session?.user?.email;

    const user = await User.findOne({ userEmail });

    const paginateTransaction = await Transaction.paginate(
      { user: user._id },
      { ...options, page: page || 1 }
    );

    res.status(200).json({ succes: true, paginateTransaction });
  } catch (error) {
    console.log(error);

    res.status(400).json({ succes: false });
  }
};

export default handler;
