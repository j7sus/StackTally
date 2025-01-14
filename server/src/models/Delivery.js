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
    boxes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Box", // Nombre del modelo relacionado
        },
    ],
});

const Delivery = mongoose.model("Delivery", deliverySchema);
export default Delivery;
