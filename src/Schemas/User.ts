import mongoose, { model, Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import dbConnect from "../services/mongoose";

// const HASH_ROUNDS = 10;

interface User extends Document {
  name: string;
  email: string;
  // password: string;
  // validatePassword(password: string): boolean;
}

const schema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    // password: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// schema.methods.validatePassword = async function (pass: string) {
//   return bcrypt.compare(pass, this.password);
// };

// schema.pre("save", async function (next) {
//   const thisObj = this as User;

//   if (!this.isModified("password")) {
//     return next();
//   }

//   try {
//     const salt = await bcrypt.genSalt(HASH_ROUNDS);
//     thisObj.password = await bcrypt.hash(thisObj.password, salt);
//     return next();
//   } catch (error: any) {
//     return next(error.message);
//   }
// });

// mongoose.models = {};

export default mongoose.models.User || model<User>("User", schema);
