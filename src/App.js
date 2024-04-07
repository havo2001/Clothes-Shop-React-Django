import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Category from './pages/category/Category';
import Contact from './pages/contact/Contact';
import Delivery from './pages/delivery/Delivery';
import ProductPage from './pages/productPage/ProductPage';
import DetailedCategory from './pages/category/DetailedCategory';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:category/:productNameOrId" element={<ProductPage />} />
          <Route path="/category/:category" element={<DetailedCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

