import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  products: [{ product: mongoose.Schema.Types.ObjectId, quantity: Number }],
  totalAmount: Number,
});

const Order = mongoose.model('Order',OrderSchema)

export default Order