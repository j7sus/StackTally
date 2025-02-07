import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  barcode: {
    type: String,
    require: true,
  },
  style: {
    type: String,
  },
  item: {
    type: String,
  },
  color: {
    type: String,
  },
  description: {
    type: String,
  },
  size: {
    type: String,
  },
  box: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Box",
  },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
