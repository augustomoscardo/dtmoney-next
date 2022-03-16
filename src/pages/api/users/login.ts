// import { NextApiRequest, NextApiResponse } from "next";
// import User from "../../../Schemas/User";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     //check if not post
//     // find user
//     //check user exist
//     // check password match
//     const { method } = req;
//     const { userName, password } = req.body;

//     if (method !== "POST") return res.status(400).json({ success: false });

//     const hasUser = await User.findOne({ userName });

//     if (!hasUser) return res.status(400).send("Usuário ou senha não confere.");

//     const passwordMatch = await hasUser.validatePassword(password);

//     if (!passwordMatch)
//       return res.status(400).send("Usuário ou senha não confere.");

//     return res.json({ message: true });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default handler;
