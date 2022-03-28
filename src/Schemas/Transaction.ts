import mongoose, {
  model,
  Schema,
  PaginateModel,
  PaginateOptions,
} from "mongoose";
import paginate from "mongoose-paginate-v2";

interface Transaction extends Document {
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

schema.plugin(paginate);

export default mongoose.models.Transaction ||
  model<Transaction, PaginateModel<Transaction>>("Transaction", schema);
