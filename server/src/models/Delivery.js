import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    totalBoxes: {
        type: Number,
        default: 0,
    },
});

const Delivery = mongoose.model("Delivery", deliverySchema);
export default Delivery;
