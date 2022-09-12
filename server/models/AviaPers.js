import mongoose from "mongoose";

const AviaPersSchema = new mongoose.Schema(
  {
    avia: {
      type: Array,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AviaPers", AviaPersSchema);
