import React, { Suspense, memo, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import lowFatDesiccatedCoconut from "../assets/low-fat-desiccated-coconut.webp"
import highFatDesiccatedCoconut from "../assets/high-fat-desiccated-coconut.webp"
import mediumFatDesiccatedCoconut from "../assets/medium-fat-desiccated-cocunut.webp"
import driedGinger from "../assets/driedGinger.webp"
import gingerWholeDry from "../assets/drygng-dry.webp"
import gingerWholeFresh from "../assets/drygng-fresh.webp"
import roastedSaltedCashew from "../assets/roastedSaltedCashew.webp"
import whitePepper from "../assets/whitePepper.webp"
import blackPepper from "../assets/blackPepper.webp"
import brazilianBlackPepper from "../assets/brazilianBlackPepper.webp"
import mangoChips from "../assets/mango-chips.webp"
import redChilli from "../assets/red-chilli.webp"
import starAnise from "../assets/star-anise.webp"
import sweetTamarind from "../assets/sweet-tamarind.webp"
import robustaBeans from "../assets/robusta-beans.webp"
import robustaS16Clean from "../assets/robustas16-clean-welpolished.webp"
import robustaS18Clean from "../assets/robusta-s18-clean.webp"
import robustaS13 from "../assets/robusta-s13.webp"
import arabicaS16S18 from "../assets/arabic-s16-s18.webp"
import blackCardamom from "../assets/black-cardamom.webp"
import greenCardamom from "../assets/green-cardamom.webp"
import bigCardamom from "../assets/big-cardamom.webp"
import turmericFinger from "../assets/termaricFinger.webp"
import walnuts from "../assets/walnuts.webp"
import cigaretteCassia from "../assets/cigaretteCasia.webp"
import cassiaSplit from "../assets/cassia-split.webp"
import cassiaPressed from "../assets/cassia-pressed.webp"
import brokenCassia from "../assets/broken-cassia.webp"
import cassiaCigarette from "../assets/cassia-ciggarette.webp"
import cassiaPowder from "../assets/cassia-powder.webp"
import cassiaLeave from "../assets/cassia-leave.jpg"
import cassiaHusk from "../assets/cassia-husk.jpg"
import cassiaLongstick from "../assets/cassia-longstick.webp"
import pumpkinAAA from "../assets/pumpkin-aaa.webp"
import pumpkinAA from "../assets/pumpkin-aa.webp"
import pumpkinA from "../assets/pumpkin-a.webp"
import sunflowerSeeds from "../assets/sunflower-seeds.webp"
import sunflowerKernels from "../assets/sunflower-kernels.webp"
import watermelonSeeds from "../assets/watermelon-seed.webp"
import nigellaSativa from "../assets/nigella-sativa.webp"
import chinesePeanut from "../assets/chinese-peanunt.webp"
import almond from "../assets/almond.webp"
import cloves from "../assets/cloves.webp"


import { products, getDesiccatedCoconutFineProducts, getDesiccatedCoconutMediumProducts, getDesiccatedCoconutLowFatProducts } from "../data/products";
import { MAIN_CATEGORIES } from "../data/categories";

// Categories: "All" plus main categories that have at least one product (in display order)
const categories = [
  "All",
  ...MAIN_CATEGORIES.filter((cat) => products.some((p) => p.category === cat)),
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

// SUBCATEGORY CARD (for Ginger subcategories)
const SubcategoryCard = memo(({ name, image, onClick }) => (
  <div
    onClick={onClick}
    className="group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-200 border border-white/40 bg-white/80 backdrop-blur flex flex-col h-full"
  >
    <div className="relative w-full h-56 bg-white overflow-hidden flex-none">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/45"></div>
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/85 text-[#0A1C2E] shadow-sm">
          Vietnam
        </span>
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0B3A82] text-white shadow-sm">
          Export
        </span>
      </div>
    </div>
    <div className="px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white flex-none flex-grow">
      <p className="text-sm font-semibold uppercase leading-tight flex-1">{name}</p>
      <span className="text-white/80 group-hover:translate-x-0.5 transition-transform duration-200 flex-shrink-0 ml-2">→</span>
    </div>
  </div>
));



const Products = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Prevent body scroll when filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  // Sync category with URL when URL changes (e.g., when navigating back)
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "All";
    setSelectedCategory(urlCategory);
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category });
    // Scroll to top of page when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Main-category products for "All" view: one representative per category (name matches category or first)
  const mainCategoryProducts =
    selectedCategory === "All"
      ? MAIN_CATEGORIES.flatMap((cat) => {
          const list = products.filter((p) => p.category === cat);
          const exact = list.find((p) => p.name === cat);
          return exact ? [exact] : list.length ? [list[0]] : [];
        })
      : [];

  // FILTER LOGIC: by category (and subcategory where used in sidebar)
  const filteredProductsRaw =
    selectedCategory === "All"
      ? mainCategoryProducts
      : selectedCategory === "Cashew Nuts"
      ? products.filter((p) => p.category === "Cashew Nuts" && p.subcategory !== "WW320" && p.subcategory !== "Roasted")
      : selectedCategory === "Cashew Nuts Roasted"
      ? products.filter((p) => p.category === "Cashew Nuts" && p.subcategory === "Roasted")
      : selectedCategory === "Cashew Nuts WW320"
      ? products.filter((p) => p.category === "Cashew Nuts" && p.subcategory === "WW320")
      : selectedCategory === "Pepper"
      ? []
      : selectedCategory === "Black Pepper"
      ? products.filter((p) => p.category === "Pepper" && p.subcategory === "Black Pepper")
      : selectedCategory === "White Pepper"
      ? products.filter((p) => p.category === "Pepper" && (p.subcategory === "White Pepper" || p.name === "White Pepper 630g/l (EU Standard)"))
      : selectedCategory === "Fresh Ginger"
      ? []
      : selectedCategory === "Dried Whole Ginger"
      ? products.filter((p) => p.category === "Fresh Ginger" && p.subcategory === "Whole Ginger")
      : selectedCategory === "Dried Slice Ginger"
      ? products.filter((p) => p.category === "Fresh Ginger" && p.subcategory === "Slice Ginger")
      : selectedCategory === "CASSIA/CINNAMON"
      ? products.filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory !== "Pressed" && p.subcategory !== "Long Stick" && p.subcategory !== "Cigarette" && p.subcategory !== "Powder")
      : selectedCategory === "CASSIA/CINNAMON Pressed"
      ? products.filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory === "Pressed" && (p.name.includes("10kg") || p.name.includes("12kg")))
      : selectedCategory === "CASSIA/CINNAMON Long Stick"
      ? products.filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory === "Long Stick")
      : selectedCategory === "CASSIA/CINNAMON Stick"
      ? products.filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory === "Cigarette")
      : selectedCategory === "CASSIA/CINNAMON Powder"
      ? products.filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory === "Powder")
      : selectedCategory === "Star Anise"
      ? products.filter((p) => p.category === "Star Anise" && ![116, 117, 118, 119, 120, 121].includes(p.id))
      : selectedCategory === "Star Anise Autumn"
      ? products.filter((p) => p.category === "Star Anise" && p.subcategory === "Autumn" && (p.name.includes("Premium") || p.name.includes("Good")))
      : selectedCategory === "Star Anise Tu Quy"
      ? products.filter((p) => p.category === "Star Anise" && p.name.includes("Tu Quy"))
      : selectedCategory === "Star Anise Canh Dan"
      ? products.filter((p) => p.category === "Star Anise" && p.subcategory === "Canh Dan" && (p.name.includes("Premium") || p.name.includes("Good")))
      : selectedCategory === "Desiccated Coconut"
      ? products.filter(
          (p) =>
            p.category === "Desiccated Coconut" &&
            p.subcategory !== "High fat Fine" &&
            p.subcategory !== "High fat Medium" &&
            p.subcategory !== "Low fat"
        )
      : selectedCategory === "Desiccated Coconut Fine"
      ? getDesiccatedCoconutFineProducts(products)
      : selectedCategory === "Desiccated Coconut Medium"
      ? getDesiccatedCoconutMediumProducts(products)
      : selectedCategory === "Desiccated Coconut Low Fat"
      ? getDesiccatedCoconutLowFatProducts(products)
      : selectedCategory === "Seeds"
      ? products.filter(
          (p) => p.category === "Seeds" && p.subcategory !== "Pumpkin Seeds" && p.subcategory !== "Sunflower Seeds"
        )
      : selectedCategory === "Pumpkin Seeds"
      ? products.filter((p) => p.category === "Seeds" && p.subcategory === "Pumpkin Seeds")
      : selectedCategory === "Sunflower Seeds"
      ? products.filter((p) => p.category === "Seeds" && p.subcategory === "Sunflower Seeds")
      : products.filter((p) => p.category === selectedCategory);

  // Main-category product (the one shown as category card on "All") appears only on "All", not when viewing that category.
  // When viewing Cassia subcategories, hide the generic main product so only specific variants show.
  // If the category has only one product (e.g. TEJA RED CHILLI), keep it so the category is not empty.
  const filteredProducts =
    selectedCategory === "All"
      ? filteredProductsRaw
      : filteredProductsRaw.filter((p) => {
          if (p.name === selectedCategory) {
            if (filteredProductsRaw.length <= 1) return true;
            return false;
          }
          if (selectedCategory === "CASSIA/CINNAMON Powder" && p.name === "CASSIA POWDER") return false;
          if (selectedCategory === "CASSIA/CINNAMON Long Stick" && p.name === "CASSIA LONG STICK") return false;
          if (selectedCategory === "Pumpkin Seeds" && p.name === "Pumpkin Seeds") return false;
          if (selectedCategory === "Sunflower Seeds" && p.name === "Sunflower Seeds") return false;
          return true;
        });

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
        {/* MOBILE FILTER OVERLAY */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsFilterOpen(false)}
        />
        
        {/* SIDEBAR - Hidden on mobile, shown in drawer when filter is open */}
        <div className={`
          fixed lg:relative inset-x-0 bottom-0 lg:inset-auto
          w-full lg:w-72 
          max-h-[75vh] lg:max-h-none
          rounded-t-3xl lg:rounded-2xl 
          shadow-2xl lg:shadow-lg 
          p-4 lg:p-4 
          bg-white lg:bg-white/90 
          backdrop-blur 
          border-t border-l border-r lg:border-r-0 border-gray-200 lg:border-b
          space-y-2
          z-[101] lg:z-auto
          lg:sticky lg:top-24 lg:h-fit
          transform transition-transform duration-300 ease-out
          ${isFilterOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
          overflow-y-auto
        `}>
          {/* Mobile drawer handle */}
          <div className="lg:hidden flex justify-center mb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Mobile header with close button */}
          <div className="lg:hidden flex items-center justify-between px-2 pb-2 border-b border-gray-100">
            <p className="text-sm font-bold text-[#0A1C2E]">Filter Categories</p>
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="hidden lg:block text-xs uppercase tracking-[0.18em] text-gray-500 font-semibold px-2">Filter</p>
          {categories.map((cat) => (
            <div key={cat}>
              <button
                onClick={() => {
                  handleCategoryChange(cat);
                  // Don't close on category with subcategories
                  if (cat !== "Cashew Nuts" && cat !== "Fresh Ginger" && cat !== "CASSIA/CINNAMON" && cat !== "Star Anise" && cat !== "Desiccated Coconut" && cat !== "Seeds") {
                    setIsFilterOpen(false);
                  }
                }}
                className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 ${
                  selectedCategory === cat || (cat === "Desiccated Coconut" && (selectedCategory === "Desiccated Coconut Fine" || selectedCategory === "Desiccated Coconut Medium" || selectedCategory === "Desiccated Coconut Low Fat")) || (cat === "Seeds" && (selectedCategory === "Pumpkin Seeds" || selectedCategory === "Sunflower Seeds")) ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-50 text-[#0A1C2E]"
                }`}
                style={{
                  ...(selectedCategory === cat || (cat === "Desiccated Coconut" && (selectedCategory === "Desiccated Coconut Fine" || selectedCategory === "Desiccated Coconut Medium" || selectedCategory === "Desiccated Coconut Low Fat")) || (cat === "Seeds" && (selectedCategory === "Pumpkin Seeds" || selectedCategory === "Sunflower Seeds"))
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
                <span className="text-base">{selectedCategory === cat || (cat === "Desiccated Coconut" && (selectedCategory === "Desiccated Coconut Fine" || selectedCategory === "Desiccated Coconut Medium" || selectedCategory === "Desiccated Coconut Low Fat")) || (cat === "Seeds" && (selectedCategory === "Pumpkin Seeds" || selectedCategory === "Sunflower Seeds")) ? "•" : "›"}</span>
              </button>
              {/* Show subcategories for Seeds */}
              {cat === "Seeds" && (selectedCategory === "Seeds" || selectedCategory === "Pumpkin Seeds" || selectedCategory === "Sunflower Seeds") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button onClick={() => { handleCategoryChange("Pumpkin Seeds"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Pumpkin Seeds" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Pumpkin Seeds</span>
                    <span className="text-xs">{selectedCategory === "Pumpkin Seeds" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("Sunflower Seeds"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Sunflower Seeds" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Sunflower Seeds</span>
                    <span className="text-xs">{selectedCategory === "Sunflower Seeds" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show subcategories for Desiccated Coconut */}
              {cat === "Desiccated Coconut" && (selectedCategory === "Desiccated Coconut" || selectedCategory === "Desiccated Coconut Fine" || selectedCategory === "Desiccated Coconut Medium" || selectedCategory === "Desiccated Coconut Low Fat") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button onClick={() => { handleCategoryChange("Desiccated Coconut Fine"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Desiccated Coconut Fine" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">High Desiccated Fine Grade</span>
                    <span className="text-xs">{selectedCategory === "Desiccated Coconut Fine" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("Desiccated Coconut Medium"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Desiccated Coconut Medium" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">High Desiccated Medium Grade</span>
                    <span className="text-xs">{selectedCategory === "Desiccated Coconut Medium" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("Desiccated Coconut Low Fat"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Desiccated Coconut Low Fat" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Low fat Desiccated Coconut</span>
                    <span className="text-xs">{selectedCategory === "Desiccated Coconut Low Fat" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show subcategories for Cashew Nuts */}
              {cat === "Cashew Nuts" && (selectedCategory === "Cashew Nuts" || selectedCategory === "Cashew Nuts Roasted" || selectedCategory === "Cashew Nuts WW320" || selectedCategory === "Cashew Nuts WW320 AFI Standard" || selectedCategory === "Cashew Nuts WW320 High Quality" || selectedCategory === "Cashew Nuts WW320 Premium") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      handleCategoryChange("Cashew Nuts Roasted");
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "Cashew Nuts Roasted" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">Salted and Roasted Cashew Nuts</span>
                    <span className="text-xs">{selectedCategory === "Cashew Nuts Roasted" ? "•" : "›"}</span>
                  </button>
                  <button
                    onClick={() => {
                      handleCategoryChange("Cashew Nuts WW320");
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "Cashew Nuts WW320" || selectedCategory === "Cashew Nuts WW320 AFI Standard" || selectedCategory === "Cashew Nuts WW320 High Quality" || selectedCategory === "Cashew Nuts WW320 Premium" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">Cashew Nuts WW320</span>
                    <span className="text-xs">{selectedCategory === "Cashew Nuts WW320" || selectedCategory === "Cashew Nuts WW320 AFI Standard" || selectedCategory === "Cashew Nuts WW320 High Quality" || selectedCategory === "Cashew Nuts WW320 Premium" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show subcategories for Ginger */}
              {cat === "Fresh Ginger" && (selectedCategory === "Fresh Ginger" || selectedCategory === "Dried Whole Ginger" || selectedCategory === "Dried Slice Ginger") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      handleCategoryChange("Dried Whole Ginger");
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "Dried Whole Ginger" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">Dried Whole Ginger</span>
                    <span className="text-xs">{selectedCategory === "Dried Whole Ginger" ? "•" : "›"}</span>
                  </button>
                  <button
                    onClick={() => {
                      handleCategoryChange("Dried Slice Ginger");
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "Dried Slice Ginger" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">Dried Slice Ginger</span>
                    <span className="text-xs">{selectedCategory === "Dried Slice Ginger" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show subcategories for CASSIA/CINNAMON */}
              {cat === "CASSIA/CINNAMON" && (selectedCategory === "CASSIA/CINNAMON" || selectedCategory === "CASSIA/CINNAMON Pressed" || selectedCategory === "CASSIA/CINNAMON Long Stick" || selectedCategory === "CASSIA/CINNAMON Stick" || selectedCategory === "CASSIA/CINNAMON Powder") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button onClick={() => { handleCategoryChange("CASSIA/CINNAMON Pressed"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "CASSIA/CINNAMON Pressed" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Cassia Pressed</span>
                    <span className="text-xs">{selectedCategory === "CASSIA/CINNAMON Pressed" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("CASSIA/CINNAMON Long Stick"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "CASSIA/CINNAMON Long Stick" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Cassia Long Stick</span>
                    <span className="text-xs">{selectedCategory === "CASSIA/CINNAMON Long Stick" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("CASSIA/CINNAMON Stick"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "CASSIA/CINNAMON Stick" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Cassia Stick</span>
                    <span className="text-xs">{selectedCategory === "CASSIA/CINNAMON Stick" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("CASSIA/CINNAMON Powder"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "CASSIA/CINNAMON Powder" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Cassia Powder</span>
                    <span className="text-xs">{selectedCategory === "CASSIA/CINNAMON Powder" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show subcategories for Pepper */}
              {cat === "Star Anise" && (selectedCategory === "Star Anise" || selectedCategory === "Star Anise Autumn" || selectedCategory === "Star Anise Tu Quy" || selectedCategory === "Star Anise Canh Dan") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button onClick={() => { handleCategoryChange("Star Anise Autumn"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Star Anise Autumn" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Autumn</span>
                    <span className="text-xs">{selectedCategory === "Star Anise Autumn" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("Star Anise Tu Quy"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Star Anise Tu Quy" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Tu Quy</span>
                    <span className="text-xs">{selectedCategory === "Star Anise Tu Quy" ? "•" : "›"}</span>
                  </button>
                  <button onClick={() => { handleCategoryChange("Star Anise Canh Dan"); setIsFilterOpen(false); }} className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${selectedCategory === "Star Anise Canh Dan" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"}`}>
                    <span className="font-medium">Canh Dan</span>
                    <span className="text-xs">{selectedCategory === "Star Anise Canh Dan" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {cat === "Pepper" && (selectedCategory === "Pepper" || selectedCategory === "Black Pepper" || selectedCategory === "White Pepper") && (
                <div className="ml-4 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      handleCategoryChange("Black Pepper");
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "Black Pepper" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">Black Pepper</span>
                    <span className="text-xs">{selectedCategory === "Black Pepper" ? "•" : "›"}</span>
                  </button>
                  <button
                    onClick={() => {
                      handleCategoryChange("White Pepper");
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition shadow-sm outline-none focus:outline-none focus:ring-0 text-xs ${
                      selectedCategory === "White Pepper" ? "bg-gradient-to-r from-[#0B3A82] to-[#128C7E] text-white border-0" : "bg-gray-100 text-[#0A1C2E]"
                    }`}
                  >
                    <span className="font-medium">White Pepper</span>
                    <span className="text-xs">{selectedCategory === "White Pepper" ? "•" : "›"}</span>
                  </button>
                </div>
              )}
              {/* Show products in sidebar for categories that have no subcategories (not for "All") */}
              {cat === selectedCategory &&
                cat !== "All" &&
                !["Cashew Nuts", "Fresh Ginger", "CASSIA/CINNAMON", "Star Anise", "Desiccated Coconut", "Pepper", "Seeds"].includes(cat) &&
                filteredProducts.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                          state: { product, category: selectedCategory },
                        });
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50 transition-colors"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile bottom padding for safe area */}
          <div className="lg:hidden h-4"></div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1 pb-20 lg:pb-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" style={{ gridAutoRows: '1fr', alignItems: 'stretch' }}>
            {/* Show subcategory cards for Cashew Nuts WW320 category */}
            {selectedCategory === "Cashew Nuts WW320" ? (
              <>
                <SubcategoryCard
                  name="Cashew Nuts WW320 AFI Standard"
                  image={ww320Cashew}
                  onClick={() => {
                    const product = products.find(p => p.name === "Cashew Nuts WW320 AFI Standard");
                    if (product) {
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      });
                    }
                  }}
                />
                <SubcategoryCard
                  name="Cashew Nuts WW320 High Quality"
                  image={ww320HighQuality}
                  onClick={() => {
                    const product = products.find(p => p.name === "Cashew Nuts WW320 High Quality");
                    if (product) {
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      });
                    }
                  }}
                />
                <SubcategoryCard
                  name="Cashew Nuts WW320 Premium"
                  image={ww320Premium}
                  onClick={() => {
                    const product = products.find(p => p.name === "Cashew Nuts WW320 Premium");
                    if (product) {
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      });
                    }
                  }}
                />
              </>
            ) : selectedCategory === "Pepper" ? (
              <>
                <SubcategoryCard
                  name="Black Pepper"
                  image={blackPepper}
                  onClick={() => handleCategoryChange("Black Pepper")}
                />
                <SubcategoryCard
                  name="White Pepper"
                  image={whitePepper}
                  onClick={() => {
                    const product = products.find(p => p.name === "White Pepper 630g/l (EU Standard)");
                    if (product) {
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      });
                    }
                  }}
                />
              </>
            ) : selectedCategory === "Fresh Ginger" ? (
              <>
                <SubcategoryCard
                  name="Dried Whole Ginger"
                  image={gingerWholeDry}
                  onClick={() => handleCategoryChange("Dried Whole Ginger")}
                />
                <SubcategoryCard
                  name="Dried Slice Ginger"
                  image={driedGinger}
                  onClick={() => handleCategoryChange("Dried Slice Ginger")}
                />
              </>
            ) : selectedCategory === "Cashew Nuts Roasted" ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
                    })
                  }
                />
              ))
            ) : selectedCategory === "Cashew Nuts" ? (
              <>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      })
                    }
                  />
                ))}
                <SubcategoryCard
                  name="Salted and Roasted Cashew Nuts"
                  image={roastedSaltedCashew}
                  onClick={() => handleCategoryChange("Cashew Nuts Roasted")}
                />
                <SubcategoryCard
                  name="Cashew Nuts WW320"
                  image={ww320Cashew}
                  onClick={() => handleCategoryChange("Cashew Nuts WW320")}
                />
              </>
            ) : selectedCategory === "CASSIA/CINNAMON Pressed" || selectedCategory === "CASSIA/CINNAMON Long Stick" || selectedCategory === "CASSIA/CINNAMON Stick" || selectedCategory === "CASSIA/CINNAMON Powder" ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
                    })
                  }
                />
              ))
            ) : selectedCategory === "CASSIA/CINNAMON" ? (
              <>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      })
                    }
                  />
                ))}
                <SubcategoryCard name="Cassia Pressed" image={cassiaPressed} onClick={() => handleCategoryChange("CASSIA/CINNAMON Pressed")} />
                <SubcategoryCard name="Cassia Long Stick" image={cassiaLongstick} onClick={() => handleCategoryChange("CASSIA/CINNAMON Long Stick")} />
                <SubcategoryCard name="Cassia Stick" image={cassiaCigarette} onClick={() => handleCategoryChange("CASSIA/CINNAMON Stick")} />
                <SubcategoryCard name="Cassia Powder" image={cassiaPowder} onClick={() => handleCategoryChange("CASSIA/CINNAMON Powder")} />
              </>
            ) : selectedCategory === "Star Anise Autumn" || selectedCategory === "Star Anise Tu Quy" || selectedCategory === "Star Anise Canh Dan" ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
                    })
                  }
                />
              ))
            ) : selectedCategory === "Star Anise" ? (
              <>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      })
                    }
                  />
                ))}
                <SubcategoryCard name="Autumn" image={starAnise} onClick={() => handleCategoryChange("Star Anise Autumn")} />
                <SubcategoryCard name="Tu Quy" image={starAnise} onClick={() => handleCategoryChange("Star Anise Tu Quy")} />
                <SubcategoryCard name="Canh Dan" image={starAnise} onClick={() => handleCategoryChange("Star Anise Canh Dan")} />
              </>
            ) : selectedCategory === "Desiccated Coconut Fine" || selectedCategory === "Desiccated Coconut Medium" || selectedCategory === "Desiccated Coconut Low Fat" ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
                    })
                  }
                />
              ))
            ) : selectedCategory === "Desiccated Coconut" ? (
              <>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      })
                    }
                  />
                ))}
                <SubcategoryCard name="High Desiccated Fine Grade" image={highFatDesiccatedCoconut} onClick={() => handleCategoryChange("Desiccated Coconut Fine")} />
                <SubcategoryCard name="High Desiccated Medium Grade" image={highFatDesiccatedCoconut} onClick={() => handleCategoryChange("Desiccated Coconut Medium")} />
                <SubcategoryCard name="Low fat Desiccated Coconut" image={highFatDesiccatedCoconut} onClick={() => handleCategoryChange("Desiccated Coconut Low Fat")} />
              </>
            ) : selectedCategory === "Pumpkin Seeds" || selectedCategory === "Sunflower Seeds" ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
                    })
                  }
                />
              ))
            ) : selectedCategory === "Seeds" ? (
              <>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                      navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                        state: { product, category: selectedCategory },
                      })
                    }
                  />
                ))}
                <SubcategoryCard name="Pumpkin Seeds" image={pumpkinAAA} onClick={() => handleCategoryChange("Pumpkin Seeds")} />
                <SubcategoryCard name="Sunflower Seeds" image={sunflowerSeeds} onClick={() => handleCategoryChange("Sunflower Seeds")} />
              </>
            ) : (
              filteredProducts.map((product) => {
                // Main category products in "All" view: clicking navigates to that category
                const isMainCategory =
                  selectedCategory === "All" &&
                  (product.name === "Cashew Nuts" ||
                    product.name === "Pepper" ||
                    product.name === "Desiccated Coconut" ||
                    product.name === "Fresh Ginger" ||
                    product.name === "CARDAMOM" ||
                    product.name === "CASSIA/CINNAMON" ||
                    product.name === "Seeds" ||
                    product.name === "Pumpkin Seeds" ||
                    product.name === "Sunflower Seeds" ||
                    product.name === "Peanuts" ||
                    product.name === "Almonds" ||
                    product.name === "Star Anise" ||
                    product.name === "Green Coffee Beans");
                
                const handleClick = () => {
                  if (isMainCategory) {
                    const categoryName =
                      product.name === "CARDAMOM" ? "Cardamom" : product.category || product.name;
                    handleCategoryChange(categoryName);
                  } else {
                    navigate(`/product/${product.id}?category=${encodeURIComponent(selectedCategory)}`, {
                      state: { product, category: selectedCategory },
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
              })
            )}
          </div>
        </div>
      </div>
    </div>

    {/* MOBILE FILTER BUTTON - Fixed at bottom */}
    <button
      onClick={() => setIsFilterOpen(true)}
      className="lg:hidden fixed left-1/2 -translate-x-1/2 bottom-6 z-[99] flex items-center gap-2.5 px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: "linear-gradient(135deg, #0B3A82 0%, #128C7E 100%)",
        boxShadow: "0 8px 32px rgba(11, 58, 130, 0.35), 0 4px 16px rgba(18, 140, 126, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      <span className="text-white font-semibold text-sm tracking-wide">
        {selectedCategory === "All" ? "Filter Products" : selectedCategory === "Cashew Nuts Roasted" ? "Salted and Roasted Cashew Nuts" : selectedCategory === "CASSIA/CINNAMON Pressed" ? "Cassia Pressed" : selectedCategory === "CASSIA/CINNAMON Long Stick" ? "Cassia Long Stick" : selectedCategory === "CASSIA/CINNAMON Stick" ? "Cassia Stick" : selectedCategory === "CASSIA/CINNAMON Powder" ? "Cassia Powder" : selectedCategory === "Star Anise Autumn" ? "Star Anise Autumn" : selectedCategory === "Star Anise Tu Quy" ? "Star Anise Tu Quy" : selectedCategory === "Star Anise Canh Dan" ? "Star Anise Canh Dan" : selectedCategory === "Desiccated Coconut Fine" ? "High Desiccated Fine Grade" : selectedCategory === "Desiccated Coconut Medium" ? "High Desiccated Medium Grade" : selectedCategory === "Desiccated Coconut Low Fat" ? "Low fat Desiccated Coconut" : selectedCategory}
      </span>
      <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
    </button>

    <a
      href="https://wa.me/66982818995"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-[100px] lg:bottom-[30px] z-[9999]"
      style={{
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
