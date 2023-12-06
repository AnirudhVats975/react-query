import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Product from "./components/Product";
// import Products from "./components/Products";
import Products from './components/Pagination';
import OptimisticApp from "./components/OptimisticApp";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
  
          <Link to="/products" className="list">
            Products
          </Link>

          <Link to="/optimistic" className="list">
            Optimistic
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/paginated" element={<Products />} />
        <Route path="/optimistic" element={<OptimisticApp />} />


      </Routes>
    </>
  );
}

export default App;
