import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FactoryPage from "./pages/FactoryPage";
import AboutUs from "./pages/AboutUs";

// ✅ Page transition animation settings
const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6, ease: "easeInOut" },
};


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <HomePage />
            </motion.div>
          }
        />

        {/* 🛍️ All Products */}
        <Route
          path="/products"
          element={
            <motion.div {...pageTransition}>
              <Products />
            </motion.div>
          }
        />

        {/* 🛍️ All Products */}
        <Route
          path="/factorypage"
          element={
            <motion.div {...pageTransition}>
              <FactoryPage/>
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <AboutUs />
            </motion.div>
          }
        />

        {/* 📦 Product Details */}
        <Route
          path="/product/:id"
          element={
            <motion.div {...pageTransition}>
              <ProductDetail />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f1e8]">
      {/* 🔝 Navbar with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50"
      >
        <Navbar />
      </motion.div>

      {/* 📄 Animated Page Content */}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>

      {/* 🔻 Footer with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
