import mongoose from "mongoose";

const AviaSchema = new mongoose.Schema({
  idSlug: {
    type: String,
    required: true,
  },
  rays: {
    type: String,
    required: true,
  },
  fromRays: {
    type: String,
    required: true,
  },
  date1: {
    type: String,
    required: true,
  },
  date2: {
    type: String,
    required: true,
  },
  reys: {
    type: String,
    required: true,
  },
  timeAll: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Avia", AviaSchema);
