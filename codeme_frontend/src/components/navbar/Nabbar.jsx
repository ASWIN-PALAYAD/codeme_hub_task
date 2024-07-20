import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

import './styles.css'

const Nabbar = () => {
  return (
    <div className="nav_container">
      <div className="logo">
        <img src={"/src/assets/logo.png"} height={"100px"} />
      </div>

      <div className="nav_links">
        <div className="nav_search">
          <input type="text" placeholder="Search..." />
          <CiSearch style={{ width: '20px', height: '20px', backgroundColor:'grey' , borderRadius:"50%",padding:"2px" }}  />
        </div>
        <Link className="nav_link">
          <BsHandbag style={{ width: '20px', height: '20px' }} />
        </Link>
        <Link>
          <FaRegBell style={{ width: '20px', height: '20px' }} />
        </Link>
        <Link>
          <CiHeart  style={{ width: '20px', height: '20px' }}/>
        </Link>
        <Link>
          <LuUser2 style={{ width: '20px', height: '20px' }}/>
        </Link>
      </div>
    </div>
  );
};

export default Nabbar;
