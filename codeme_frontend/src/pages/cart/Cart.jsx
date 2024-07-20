import "./styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nabbar from "../../components/navbar/Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="container">
        <Nabbar/>
      <h1 className="cart_heading">Cart</h1>
      {cart.length === 0 ? (
        <p className="cart_empty">Your cart is empty</p>
      ) : (
        <div className="cart_items">
          <div className="left">
            {cart.map((item, index) => (
              <div key={item.product._id} className="cart-item">
                <img
                  className="cart_image"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <h2>{item.product.name}</h2>
                <p>₹ {item.product.price}</p>
                <label htmlFor="">
                  quantity :
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(index, Number(e.target.value))
                    }
                  />
                </label>
                <button className="remove_button" onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="right">
            <h2>Payment details</h2>
              <div className="checkout">
                <h3>Total: ₹  {getTotal()}</h3>
                <Link className="checkout_link" to="/checkout">Proceed to Checkout</Link>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
