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
import ww320HighQuality from "../assets/ww320HighQuality.webp"
import ww320Premium from "../assets/ww320Premium.webp"
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
import brazilianBlackPepper from "../assets/brazilianBlackPepper.webp"


// PRODUCT LIST
const products = [
  { id: 1, name: "Cashew Nuts", image: cashewnuts, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012" },
  { id: 29, name: "Cashew Nuts WW320", image: ww320Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max" },
  { id: 2, name: "Desiccated Coconut", image: desiccatedCoconut, origin: "Vietnam", moisture: "3% max" },
  { id: 3, name: "Copra Cup", image: copraCup, origin: "Vietnam", moisture: "6%" },
  { id: 4, name: "Black Pepper", image: blackPepper, origin: "Vietnam", moisture: "13.5% max" },
  { id: 5, name: "White Pepper 630g/l (EU Standard)", image: whitePepper, origin: "Vietnam", moisture: "13.5% max", density: "630g/l", admixture: "0.5% max", blackSeeds: "2% max" },
  { id: 6, name: "Dried Ginger", image: driedGinger, origin: "Vietnam", moisture: "8%" },

  // CATEGORIZED UNDER CASHEW NUTS
  { id: 7, name: "Roasted & Salted Cashew Nuts", image: roastedSaltedCashew, origin: "Vietnam", moisture: "4%" },
  { id: 28, name: "Cashew Nuts WW320 AFI Standard", image: ww320Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max" },
  { id: 8, name: "Cashew Nuts WW320 High Quality", image: ww320HighQuality, origin: "Vietnam", moisture: "5% max", standard: "High Quality", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max" },
  { id: 27, name: "Cashew Nuts WW320 Premium", image: ww320Premium, origin: "Vietnam", moisture: "5% max", standard: "Standard Premium", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max" },
  { id: 9, name: "Cashew Nuts WW240", image: ww240Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", seedsPerLb: "220-240", broken: "5% max", lowerSize: "7-8% max" },
  { id: 10, name: "Cashew Nuts WW180", image: ww180Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", seedsPerLb: "160-180", broken: "7-8% max", lowerSize: "7-8% max" },
  { id: 11, name: "Cashew Nuts WW450", image: ww450Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012" },
  { id: 12, name: "Cashew Nuts SK", image: cashewSK, origin: "Vietnam", moisture: "4%" },
  { id: 13, name: "Cashew Nuts SL", image: cashewSL, origin: "Vietnam", moisture: "4%" },
  { id: 21, name: "Cashew Nuts LP", image: cashewnuts, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", sieve: "6.3 mm", crop: "New crop" },
  { id: 22, name: "Cashew Nuts WS", image: cashewnuts, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", nutSize: "Small pieces, on sieve 5mm - 7.2mm", broken: "10% max" },

  // CATEGORIZED UNDER BLACK PEPPER
  { id: 14, name: "Black Pepper 450g/l FAQ", image: blackPepper, origin: "Vietnam", moisture: "13.5% max", density: "450g/l", admixture: "1% max", grade: "FAQ" },
  { id: 15, name: "Black Pepper 500g/l FAQ", image: blackPepper, origin: "Vietnam", moisture: "13.5% max", density: "500g/l", admixture: "1% max", grade: "FAQ" },
  { id: 16, name: "Black Pepper 550g/l FAQ", image: blackPepper, origin: "Vietnam", moisture: "13.5% max", density: "550g/l", admixture: "1% max", grade: "FAQ" },
  { id: 17, name: "Black Pepper 500g/l MC/ASTA", image: blackPepper, origin: "Vietnam", moisture: "12.5% max", density: "500g/l", admixture: "0.5% max", grade: "MC/ASTA" },
  { id: 18, name: "Black Pepper 550g/l MC/ASTA", image: blackPepper, origin: "Vietnam", moisture: "12.5% max", density: "550g/l", admixture: "0.5% max", grade: "MC/ASTA" },
  { id: 19, name: "Black Pepper 570g/l MC/ASTA", image: blackPepper, origin: "Vietnam", moisture: "12.5% max", density: "570g/l", admixture: "0.5% max", grade: "MC/ASTA" },
  { id: 20, name: "Black Pepper 5mm Bold", image: blackPepper, origin: "Vietnam", moisture: "12.5% max", density: "570g/l - 580g/l , 80% on screen", admixture: "0.5% max", grade: "5mm Bold", size: "5mm (80% Min. on sieve)" },
  { id: 26, name: "Brazilian Black Pepper", image: brazilianBlackPepper, origin: "Brazil", moisture: "13.5% max", appearance: "Small, dark brown to black, wrinkled berries (~4-5 mm)", aroma: "Strong, pungent, citrusy, slightly woody, and spicy", benefits: "Aids digestion, anti-inflammatory, weight loss", packing: "Mesh bags, jute sacks, or plastic bags" },

  // CATEGORIZED UNDER DESICCATED COCONUT
  { id: 23, name: "Low fat Desiccated Coconut Fine Grade", image: desiccatedCoconut, origin: "Vietnam", moisture: "4% max", ffa: "0.3% max", fatContent: "30-35% min", so2: "100 ppm max" },
  { id: 24, name: "High fat Desiccated Coconut Fine Grade", image: desiccatedCoconut, origin: "Vietnam", moisture: "3% max", ffa: "0.3% max", fatContent: "63% min", so2: "100 ppm max" },
  { id: 25, name: "High fat Desiccated Coconut Medium Grade", image: desiccatedCoconut, origin: "Vietnam", moisture: "3% max", ffa: "0.3% max", fatContent: "63% min", so2: "100 ppm max" },
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
  "Roasted & Salted Cashew Nuts",
  "Cashew Nuts WW240",
  "Cashew Nuts WW180",
  "Cashew Nuts WW320", 
  "Cashew Nuts WW450",
  "Cashew Nuts SK",
  "Cashew Nuts SL",
  "Cashew Nuts LP",
  "Cashew Nuts WS"
];

// FILTER GROUP FOR WW320 SUB-CATEGORY
const ww320FilterList = [
  "Cashew Nuts WW320 AFI Standard",
  "Cashew Nuts WW320 High Quality",
  "Cashew Nuts WW320 Premium"
];

// FILTER GROUP FOR BLACK PEPPER CATEGORY
const blackPepperFilterList = [
  "Brazilian Black Pepper",
  "Black Pepper 450g/l FAQ",
  "Black Pepper 500g/l FAQ",
  "Black Pepper 550g/l FAQ",
  "Black Pepper 500g/l MC/ASTA",
  "Black Pepper 550g/l MC/ASTA",
  "Black Pepper 570g/l MC/ASTA",
  "Black Pepper 5mm Bold"
  
];

// FILTER GROUP FOR DESICCATED COCONUT CATEGORY
const desiccatedCoconutFilterList = [
  "Low fat Desiccated Coconut Fine Grade",
  "High fat Desiccated Coconut Fine Grade",
  "High fat Desiccated Coconut Medium Grade"
];


// PRODUCT CARD
const ProductCard = memo(({ product, onClick }) => (
  <div
    onClick={onClick}
    className="group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-200 border border-white/40 bg-white/80 backdrop-blur flex flex-col h-full"
  >
    <div className="relative w-full h-56 bg-white overflow-hidden flex-none">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/45"></div>
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/85 text-[#0A1C2E] shadow-sm">
          {product.origin || "Origin"}
        </span>
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0B3A82] text-white shadow-sm">
          Export
        </span>
      </div>
      <div className="absolute bottom-3 left-3 flex gap-2 text-white text-[11px] font-semibold">
        <span className="px-2.5 py-1 rounded-full bg-black/55">Moisture {product.moisture || "—"}</span>
      </div>
    </div>
    <div className="px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white flex-none flex-grow">
      <p className="text-sm font-semibold uppercase leading-tight flex-1">{product.name}</p>
      <span className="text-white/80 group-hover:translate-x-0.5 transition-transform duration-200 flex-shrink-0 ml-2">→</span>
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
    ? products.filter((p) => !cashewFilterList.includes(p.name) && !ww320FilterList.includes(p.name) && !blackPepperFilterList.includes(p.name) && !desiccatedCoconutFilterList.includes(p.name)) // Show main products only
    : selectedCategory === "Cashew Nuts"
    ? products.filter(
      (p) =>
        cashewFilterList.includes(p.name) &&
        !ww320FilterList.includes(p.name) // ❌ exclude sub-ww320
    )  // Only sub-cashew items (excluding WW320)
    : selectedCategory === "Cashew Nuts WW320"
    ? products.filter((p) => ww320FilterList.includes(p.name))  // Only WW320 sub-items
    : selectedCategory === "Black Pepper"
    ? products.filter((p) => blackPepperFilterList.includes(p.name))  // Only sub-black pepper items
    : selectedCategory === "Desiccated Coconut"
    ? products.filter((p) => desiccatedCoconutFilterList.includes(p.name))  // Only sub-desiccated coconut items
    : selectedCategory === "White Pepper"
    ? products.filter((p) => p.name.startsWith("White Pepper"))  // White Pepper products (name starts with "White Pepper")
    : products.filter((p) => p.name === selectedCategory);       // Single-item categories (exact match)

  return (
  <section className="relative pt-28 pb-16 min-h-screen px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: "radial-gradient(circle at 20% 20%, #EFF4FF 0%, #E3ECFF 35%, #F7F9FD 70%)" }}>
    {/* Decorative background */}
    <div className="absolute inset-0" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }}></div>
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#0A1C2E]/70 font-semibold">Fresh Picks</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A1C2E]">Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium cashews, coconuts, peppers, and spices—ready for export with consistent quality and reliable supply.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Export ready", "Batch QC", "On-time shipping"].map((chip) => (
            <span key={chip} className="px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm border border-gray-200 text-[#0A1C2E]">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* SIDEBAR */}
        <div className="w-full lg:w-72 rounded-2xl shadow-lg p-4 h-fit sticky top-24 bg-white/90 backdrop-blur border-t border-l border-b border-gray-200 space-y-2" style={{ borderRight: "none" }}>
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 font-semibold px-2">Filter</p>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 ${
                selectedCategory === cat ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-50 text-[#0A1C2E]"
              }`}
              style={{
                ...(selectedCategory === cat 
                  ? { border: "none" }
                  : {
                      borderTop: "1px solid #e5e7eb",
                      borderLeft: "1px solid #e5e7eb",
                      borderBottom: "1px solid #e5e7eb",
                      borderRight: "1px solid #e5e7eb",
                    }
                ),
              }}
            >
              <span className="font-semibold text-sm">{cat}</span>
              <span className="text-base">{selectedCategory === cat ? "•" : "›"}</span>
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" style={{ gridAutoRows: '1fr', alignItems: 'stretch' }}>
            {filteredProducts.map((product) => {
              // Check if this is a main category product (has subcategories)
              const isMainCategory = product.name === "Cashew Nuts" || 
                                     product.name === "Black Pepper" || 
                                     product.name === "Desiccated Coconut" ||
                                     product.name === "Cashew Nuts WW320";
              
              // If in "All" view and clicking a main category, navigate to that category
              const handleClick = () => {
                if (isMainCategory) {
                  setSelectedCategory(product.name);
                } else {
                  navigate(`/product/${product.id}`, {
                    state: { product },
                  });
                }
              };

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleClick}
                />
              );
            })}
          </div>
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
