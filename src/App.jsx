import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
function App() {
  return (
    <>
      <div className="">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
