import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
  
function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const removeItem = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const handleBuy = () => {
    alert("Thank you for your purchase!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  const toggleCartSidebar = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <Header/>
      {/* Pass toggleCartSidebar to NavBar */}
      <NavBar toggleCartSidebar={toggleCartSidebar} />

      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<ProductCard addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        </Routes>
      </main>

      {/* Render Cart Sidebar */}
      {isCartOpen && (
        <CartSidebar
          cart={cart}
          removeItem={removeItem}
          onBuy={handleBuy}
          toggleCartSidebar={toggleCartSidebar}

        />
      )}

      <Footer />
    </>
  );
}

export default App;
