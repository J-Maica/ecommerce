import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ShopContextProvider from "./context/ShopContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import ViewProduct from "./pages/ViewProduct";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";


function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/viewProduct/:productId" element={<ViewProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
