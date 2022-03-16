import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { method } = req;
//     const { userName, password } = req.body;

//     if (method !== "POST") {
//       return res.status(400).json({ success: false });
//     }

//     await dbConnect();

//     const hasUser = await User.findOne({ userName });

//     if (hasUser) return res.status(400).json({ message: "Usuário já existe." });

//     const user = await User.create({ userName, password });
//     console.log(`Usuário ${user.userName} criado com sucesso!`);

//     res.status(201).json({ data: user });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default handler;
