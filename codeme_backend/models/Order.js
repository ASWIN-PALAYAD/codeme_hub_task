import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  products: [{ product: mongoose.Schema.Types.ObjectId, quantity: Number }],
  totalAmount: Number,
  discount: Number,
  finalAmount: Number,
});

const Order = mongoose.model('Order',OrderSchema)

export default Order