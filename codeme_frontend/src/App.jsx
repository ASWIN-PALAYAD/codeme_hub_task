import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  return (
      <>
      
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
         
        </Router>
      </>
     
  )
}

export default App