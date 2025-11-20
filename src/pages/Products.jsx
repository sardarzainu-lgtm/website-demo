import React, { Suspense, memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero3.webp"

// THEME COLORS
const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";
const OFFWHITE = "#F6F6F6";

// Images
import ww240Cashew from "../assets/ww240Cashew.webp"
import ww180Cashew from "../assets/ww180Cashew.webp"
import ww320Cashew from "../assets/ww320Cashew.webp"
import ww450Cashew from "../assets/ww450Cashew.webp"
import cashewSK from "../assets/cashewSK.webp"
import cashewSL from "../assets/cashewSL.webp"
import cashewnuts from "../assets/cashewnuts.webp";
import copraCup from "../assets/copraCup.webp"
import desiccatedCoconut from "../assets/desiccatedCoconut.webp"
import driedGinger from "../assets/driedGinger.webp"
import roastedSaltedCashew from "../assets/roastedSaltedCashew.webp"
import whitePepper from "../assets/whitePepper.webp"
import blackPepper from "../assets/blackPepper.webp"


// PRODUCT LIST
const products = [
  { id: 1, name: "Cashew Nuts", image: cashewnuts, origin: "Goa, India", moisture: "5%", color: "Cream White" },
  { id: 2, name: "Desiccated Coconut", image: desiccatedCoconut, origin: "Sri Lanka", moisture: "3%", color: "Pure White" },
  { id: 3, name: "Copra Cup", image: copraCup, origin: "Philippines", moisture: "6%", color: "Light Brown" },
  { id: 4, name: "Black Pepper", image: blackPepper, origin: "Vietnam", moisture: "12%", color: "Dark Black" },
  { id: 5, name: "White Pepper", image: whitePepper, origin: "Indonesia", moisture: "12%", color: "Off-White" },
  { id: 6, name: "Dried Ginger", image: driedGinger, origin: "India", moisture: "8%", color: "Yellowish Brown" },

  // CATEGORIZED UNDER CASHEW NUTS
  { id: 7, name: "Roasted Cashew Nuts", image: roastedSaltedCashew, origin: "Vietnam", moisture: "4%", color: "Light Golden" },
  { id: 8, name: "Cashew Nuts WW320", image: ww320Cashew, origin: "India", moisture: "5%", color: "Classic White" },
  { id: 9, name: "Cashew Nuts WW240", image: ww240Cashew, origin: "Vietnam", moisture: "5%", color: "Cream White" },
  { id: 10, name: "Cashew Nuts WW180", image: ww180Cashew, origin: "Brazil", moisture: "5%", color: "Ivory White" },
  { id: 11, name: "Cashew Nuts WW450", image: ww450Cashew, origin: "Indonesia", moisture: "5%", color: "Off-White" },
  { id: 12, name: "Cashew Nuts SK", image: cashewSK, origin: "Vietnam", moisture: "4%", color: "Light Cream" },
  { id: 13, name: "Cashew Nuts SL", image: cashewSL, origin: "India", moisture: "4%", color: "Cream White" },
];


// CATEGORIES (ONLY TWO)
const categories = [
  "All", 
  "Cashew Nuts",
  "Desiccated Coconut",
  "Copra Cup",
  "Black Pepper",
  "White Pepper",
  "Dried Ginger"];


// FILTER GROUP FOR CASHEW CATEGORY
const cashewFilterList = [
  "Roasted Cashew Nuts",
  "Cashew Nuts WW320",
  "Cashew Nuts WW240",
  "Cashew Nuts WW180",
  "Cashew Nuts WW450",
  "Cashew Nuts SK",
  "Cashew Nuts SL"
];


// PRODUCT CARD
const ProductCard = memo(({ product, onClick }) => (
  <div
    onClick={onClick}
    className="rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden w-full max-w-[260px]"
    style={{ background: OFFWHITE, border: `1px solid ${ROYAL}` }}
  >
    {/* IMAGE */}
    <div className="w-full h-56 bg-white overflow-hidden rounded-t-lg">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
  />
</div>
    {/* TITLE BAR */}
    <div
      className="px-4 py-3 flex items-center justify-between"
      style={{ background: ROYAL , borderTop: `1px solid ${ROYAL}` }}
    >
      <p className="text-sm font-semibold uppercase leading-tight" style={{ color: "white" }}>
        {product.name}
      </p>
      <span style={{ color: ROYAL }}>→</span>
    </div>
  </div>
));



const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // FILTER LOGIC
const filteredProducts =
  selectedCategory === "All"
    ? products.filter((p) => !cashewFilterList.includes(p.name)) // Show main products only
    : selectedCategory === "Cashew Nuts"
    ? products.filter((p) => cashewFilterList.includes(p.name))  // Only sub-cashew items
    : products.filter((p) => p.name === selectedCategory);       // Single-item categories

  return (
  <section className="relative pt-32 min-h-screen p-10 overflow-hidden">
  
  {/* 🔹 Blurred Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30 "
    style={{ backgroundImage: `url(${hero})` }}
  ></div>
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: ROYAL }}>
            Our Products
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Discover our premium selection of agricultural products and spices.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* SIDEBAR */}
          <div
            className="w-full md:w-64 rounded-xl shadow-md p-4 h-fit sticky top-28"
            style={{ background: "white", border: `1px solid ${ROYAL}` }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-left mb-2 transition"
                style={{
                  background: selectedCategory === cat ? ROYAL : OFFWHITE,
                  color: selectedCategory === cat ? "white" : NAVY,
                  border: `1px solid ${ROYAL}`,
                }}
              >
                {cat}
                <span className="text-xl">›</span>
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: { product },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
<a
  href="https://wa.me/66982818995"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed"
  style={{
    right: "24px",
    bottom: "30px",
    zIndex: 9999,
    animation: "floatS 1s ease-in-out infinite",
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-14 h-14 sm:w-16 sm:h-16"
    style={{
      filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.3))",
    }}
  />

</a>


    </section>
  );
};

export default Products;
