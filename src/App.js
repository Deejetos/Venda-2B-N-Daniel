import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/cadastrar-produto" element={<AddProducts />} />
        <Route path="/Carinho" element={<Cart />} />
      </Routes>
    </Router>
  )
}