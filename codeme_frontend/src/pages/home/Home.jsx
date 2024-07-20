import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/bannerSection/Banner";
import Category from "../../components/categorry/Category";
import Nabbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.product._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // console.log(products);

  return (
    <div className="container">
      <Nabbar />
      <Category />
      <Banner />
      <div className="display_section">
        <div className="filter_section">
          <h1>Our Top Categories</h1>
          <div className="sort_section">
            <span>Sorted By: </span>
          </div>
        </div>

        {products && (
          <div className="products">
            {products?.map((product) => (
              <>
                <ProductCard product={product} addToCart={addToCart} />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
