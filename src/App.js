import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Delivery from './pages/delivery/Delivery';
import ProductPage from './pages/productPage/ProductPage';
import DetailedCategory from './pages/detailedCategory/DetailedCategory';


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
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/clothes/:category/:productNameOrId" element={<ProductPage />} />
          <Route path="/clothes/:category" element={<DetailedCategory />} />
          <Route path="/:category" element={<DetailedCategory />} />
          <Route path="/all" element={<DetailedCategory />} />
          <Route path="/new" element={<DetailedCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

