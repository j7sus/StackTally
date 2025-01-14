import mongoose from "mongoose";

const BoxSchema = new mongoose.Schema({
    numberBox: {
        type: String,
        require: true,
    },
    store: {
        type: String,
        require: true,
    },
    totalItems: {
        type: Number,
        default: 0,
    },
    delivery: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Delivery"
    },
});

const Box = mongoose.model("Box", BoxSchema);
export default Box;
