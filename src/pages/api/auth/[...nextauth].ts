import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// import { session } from "next-auth/react";
import User from "../../../Schemas/User";
import dbConnect from "../../../services/mongoose";

// interface UserCredentials {
//   userName: string;
//   password: string;
// }

export default NextAuth({
  providers: [
    // CredentialProvider({
    //   name: "dtmoney",
    //   credentials: {
    //     userName: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     try {
    //       await dbConnect();

    //       const { userName, password } = credentials as UserCredentials;

    //       const user = await User.findOne({ userName });

    //       const validPassword = await user?.validatePassword(password);

    //       if (!validPassword) return null;

    //       return user;
    //     } catch (err) {
    //       console.log(err);
    //       return null;
    //     }
    //   },
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // scope: "read:user",
    }),
  ],

  callbacks: {
    // async session({ session, user }) {
    //   try {
    //     await dbConnect();

    //     const user = await User.findOne({ userName });

    //     session.id = user;

    //     return session;
    //   } catch (error) {
    //     return session;
    //   }
    // },
    async signIn({ user, account, profile, credentials }) {
      const { name, email } = user;

      // return true;

      try {
        await dbConnect();

        //check if email exists in db
        const hasUser = await User.findOne({ email });
        console.log(`Found user: ${hasUser}`);

        if (!hasUser) {
          console.log("Inserting new user in DB");
          await User.create({ name, email }); //not working
          console.log(`User created`);
        }

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },
    // async jwt({ token, user, account, profile }) {
    //   if (account && user) {
    //     return {
    //       ...token,
    //       accessToken: user.data.token,
    //       refreshToken: user.data.refreshToken,
    //     };
    //   }

    //   return token;
    // },
  },
  // secret: process.env.JWT_SECRET,
  // pages: {
  //   signIn: "/",
  // },
});
