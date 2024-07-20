import "./styles.css";

import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({product}) => {
  return (
    <div className="card_container">
      <div className="prod_image">
        <img
          src={product?.image}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h1 className="prod_name">{product.name}</h1>
      <span className="pro_desc">
        {product.description}
      </span>
      <div className="prod_price">
        <span className="prod_price">Rs {product.price}/-</span>
        <span>
        <FaRegStar color="yellow"  /><FaRegStar color="yellow" /><FaRegStar color="yellow"  /><FaRegStar color="yellow"  />
        </span>
      </div>
      <button className="add_button">
        <IoBagHandleOutline style={{ width: "20px", height: "20px" }} />
        Add To cart
      </button>
    </div>
  );
};

export default ProductCard;
