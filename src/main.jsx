import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import WishProvider from "./contexts/WishContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <WishProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </WishProvider>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
