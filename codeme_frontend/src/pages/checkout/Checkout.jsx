import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nabbar from "../../components/navbar/Navbar";

import "./styles.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("");

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const placeOrder = () => {
    const order = {
      products: cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalAmount: cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
    };
    axios
      .post("http://localhost:5000/api/orders", order)
      .then((response) => {
        localStorage.removeItem("cart");
        alert("Order placed")
        navigate("/");
      })
      .catch((error) => console.error("Error placing order:", error));
  };

  return (
    <div className="container">
      <Nabbar />
      <h1 className="checkout_heading">Checkout</h1>

      <div className="checkout_items">
        {cart.map((item) => (
          <div key={item.product._id} className="checkout-item">
            <h2>{item.product.name} : </h2>
            <p>
              ₹ {item.product.price} x {item.quantity}
            </p>
          </div>
        ))}

        <h3>Total: ₹ {getTotal()}</h3>
        <button className="order_button" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
