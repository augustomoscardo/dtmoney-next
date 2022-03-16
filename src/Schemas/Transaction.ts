import mongoose, { model, Schema } from "mongoose";

interface Transaction {
  title: string;
  amount: number;
  type: string;
  category: string;
  user: Schema.Types.ObjectId;
}

const schema = new Schema<Transaction>(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default mongoose.models.Transaction ||
  model<Transaction>("Transaction", schema);
