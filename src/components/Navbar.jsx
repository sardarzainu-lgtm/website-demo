import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// ✅ Import real logo
import logo from "../assets/logo.jpeg";

// ✅ Import product images
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


// 🌟 Premium Colors
const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";
const OFFWHITE = "#F6F6F6";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("/");

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [cashewSubmenuOpen, setCashewSubmenuOpen] = useState(false);
  const [ww320SubmenuOpen, setWw320SubmenuOpen] = useState(false);
  const [blackPepperSubmenuOpen, setBlackPepperSubmenuOpen] = useState(false);
  const [desiccatedCoconutSubmenuOpen, setDesiccatedCoconutSubmenuOpen] = useState(false);
  const [gingerSubmenuOpen, setGingerSubmenuOpen] = useState(false);
  const [wholeGingerSubmenuOpen, setWholeGingerSubmenuOpen] = useState(false);
  const [sliceGingerSubmenuOpen, setSliceGingerSubmenuOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const [mobileCashewSubmenuOpen, setMobileCashewSubmenuOpen] = useState(false);
  const [mobileWw320SubmenuOpen, setMobileWw320SubmenuOpen] = useState(false);
  const [mobileBlackPepperSubmenuOpen, setMobileBlackPepperSubmenuOpen] = useState(false);
  const [mobileDesiccatedCoconutSubmenuOpen, setMobileDesiccatedCoconutSubmenuOpen] = useState(false);
  const [mobileGingerSubmenuOpen, setMobileGingerSubmenuOpen] = useState(false);
  const [mobileWholeGingerSubmenuOpen, setMobileWholeGingerSubmenuOpen] = useState(false);
  const [mobileSliceGingerSubmenuOpen, setMobileSliceGingerSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const submenuTimeoutRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
        setCashewSubmenuOpen(false);
        setBlackPepperSubmenuOpen(false);
        setDesiccatedCoconutSubmenuOpen(false);
        setGingerSubmenuOpen(false);
        setWholeGingerSubmenuOpen(false);
        setSliceGingerSubmenuOpen(false);
        setWw320SubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      Object.values(submenuTimeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  // ✅ FULL PRODUCT LIST (REQUIRED FOR SEARCH)
  const products = [
   { 
    id: 1, 
    name: "Cashew Nuts", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max", 
    standard: "AFI Standard 2012"
  },

  { 
    id: 2, 
    name: "Desiccated Coconut", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "3% max"
  },

  { 
    id: 3, 
    name: "Edible Copra", 
    image: copraCup, 
    origin: "Indonesia", 
    moisture: "7-10%",
    packing: "40 Kg Net in Mesh Bags",
    description: "Looking for premium quality copra? Our Edible Copra is the perfect choice for various food applications and international trade!",
    fullName: "Edible Copra (White Copra Sundry - Split)"
  },

  { 
    id: 4, 
    name: "Black Pepper", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max"
  },

  { 
    id: 5, 
    name: "White Pepper 630g/l (EU Standard)", 
    image: whitePepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "630g/l",
    admixture: "0.5% max",
    blackSeeds: "2% max"
  },

  { 
    id: 6, 
    name: "Dried Ginger", 
    image: driedGinger, 
    origin: "Vietnam", 
    moisture: "8%"
  },
  { 
    id: 35, 
    name: "DRY SLICE GINGER A GRADE", 
    image: driedGinger, 
    origin: "Vietnam", 
    moisture: "8%" 
  },
  { 
    id: 36, 
    name: "DRY SLICE GINGER B GRADE", 
    image: driedGinger, 
    origin: "Vietnam", 
    moisture: "8%" 
  },
  { 
    id: 37, 
    name: "DRY SLICE GINGER C GRADE", 
    image: driedGinger, 
    origin: "Vietnam", 
    moisture: "8%" 
  },
  { 
    id: 38, 
    name: "Ginger Whole Dry", 
    image: gingerWholeDry, 
    origin: "Vietnam", 
    moisture: "10% max", 
    grade: "Whole", 
    appearance: "Natural color, clean, no foreign matter", 
    packing: "10-25 kg bags" 
  },
  { 
    id: 39, 
    name: "Ginger Whole Fresh", 
    image: gingerWholeFresh, 
    origin: "Vietnam", 
    moisture: "12-15%", 
    grade: "Whole Fresh", 
    appearance: "Fresh appearance, natural color, clean", 
    packing: "10-25 kg bags" 
  },
 { 
    id: 7, 
    name: "Roasted & Salted Cashew Nuts", 
    image: roastedSaltedCashew, 
    origin: "Vietnam", 
    moisture: "4%"
  },

  // Cashew Nuts WW320 AFI Standard
  { 
    id: 28, 
    name: "Cashew Nuts WW320 AFI Standard", 
    image: ww320Cashew, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "300-320",
    broken: "5% max",
    lowerSize: "7-8% max"
  },
  // Cashew Nuts WW320 High Quality
  { 
    id: 8, 
    name: "Cashew Nuts WW320 High Quality", 
    image: ww320HighQuality, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "High Quality",
    seedsPerLb: "300-320",
    broken: "5% max",
    lowerSize: "7-8% max"
  },
  // Cashew Nuts WW320 Premium
  { 
    id: 27, 
    name: "Cashew Nuts WW320 Premium", 
    image: ww320Premium, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "Standard Premium",
    seedsPerLb: "300-320",
    broken: "5% max",
    lowerSize: "7-8% max"
  },

  // Cashew Nuts WW240
  { 
    id: 9, 
    name: "Cashew Nuts WW240", 
    image: ww240Cashew, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "220-240",
    broken: "5% max",
    lowerSize: "7-8% max"
  },

  // Cashew Nuts WW180
  { 
    id: 10, 
    name: "Cashew Nuts WW180", 
    image: ww180Cashew, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "160-180",
    broken: "7-8% max",
    lowerSize: "7-8% max"
  },

  // Cashew Nuts WW450
  { 
    id: 11, 
    name: "Cashew Nuts WW450", 
    image: ww450Cashew, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012"
  },

  // Cashew Nuts SK
  { 
    id: 12, 
    name: "Cashew Nuts SK", 
    image: cashewSK, 
    origin: "Vietnam", 
    moisture: "4%"
  },

  // Cashew Nuts SL
  { 
    id: 13, 
    name: "Cashew Nuts SL", 
    image: cashewSL, 
    origin: "Vietnam", 
    moisture: "4%"
  },

  // Black Pepper subcategories
  { 
    id: 14, 
    name: "Black Pepper 450g/l FAQ", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "450g/l",
    admixture: "1% max",
    grade: "FAQ"
  },
  { 
    id: 15, 
    name: "Black Pepper 500g/l FAQ", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "500g/l",
    admixture: "1% max",
    grade: "FAQ"
  },
  { 
    id: 16, 
    name: "Black Pepper 550g/l FAQ", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "550g/l",
    admixture: "1% max",
    grade: "FAQ"
  },
  { 
    id: 17, 
    name: "Black Pepper 500g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "500g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA"
  },
  { 
    id: 18, 
    name: "Black Pepper 550g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "550g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA"
  },
  { 
    id: 19, 
    name: "Black Pepper 570g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "570g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA"
  },
  { 
    id: 20, 
    name: "Black Pepper 5mm Bold", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "570g/l - 580g/l",
    admixture: "0.5% max",
    grade: "5mm Bold",
    size: "5mm (80% Min. on sieve)"
  },
  { 
    id: 26, 
    name: "Brazilian Black Pepper", 
    image: brazilianBlackPepper, 
    origin: "Brazil", 
    moisture: "13.5% max",
    appearance: "Small, dark brown to black, wrinkled berries (~4-5 mm)",
    aroma: "Strong, pungent, citrusy, slightly woody, and spicy",
    benefits: "Aids digestion, anti-inflammatory, weight loss",
    packing: "Mesh bags, jute sacks, or plastic bags"
  },

  { 
    id: 21, 
    name: "Cashew Nuts LP", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    sieve: "6.3 mm",
    crop: "New crop"
  },
  { 
    id: 22, 
    name: "Cashew Nuts WS", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    nutSize: "Small pieces, on sieve 5mm - 7.2mm",
    broken: "10% max"
  },

  // Updated Desiccated Coconut
  { 
    id: 23, 
    name: "Low fat Desiccated Coconut Fine Grade", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "4% max",
    ffa: "0.3% max",
    fatContent: "30-35% min",
    so2: "100 ppm max"
  },
  { 
    id: 24, 
    name: "High fat Desiccated Coconut Fine Grade", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "3% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max"
  },
  { 
    id: 25, 
    name: "High fat Desiccated Coconut Medium Grade", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "3% max", 
    ffa: "0.3% max", 
    fatContent: "63% min", 
    so2: "100 ppm max" 
  },
  { 
    id: 30, 
    name: "Soft Dried Mango", 
    image: mangoChips, 
    origin: "Vietnam", 
    moisture: "12-17% max", 
    ingredients: "100% Mango", 
    appearanceColor: "Yellow color", 
    cuttingType: "Slice", 
    process: "5-10% Sugar Added / without sugar-coated", 
    length: "8cm - 10cm", 
    thickness: "0.1cm - 0.2cm", 
    shelfLife: "12 Months", 
    packing: "Zip bags, craft paper, bulk packing depends on customer request from 100g - 10kg / pack" 
  },
  { 
    id: 31, 
    name: "TEJA RED CHILLI", 
    image: redChilli, 
    origin: "India", 
    pungency: "75,000 - 1,000,000 SHU", 
    capsaicinContent: "1%", 
    color: "Vibrant Red Color (ASTA 40-60)", 
    length: "5-6 cm", 
    skinThickness: "0.50-0.70 mm", 
    podsWithStalks: "2%", 
    brokenChilies: "1%", 
    looseSeeds: "1%", 
    description: "Perfect for adding bold spice to your curries, sauces, and snacks!" 
  },
  { 
    id: 32, 
    name: "Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    size: "2.5 cm 80% up", 
    brokenPieces: "10% max", 
    notes: "No fungus, natural color" 
  },
  { 
    id: 33, 
    name: "Sweet Tamarind", 
    image: sweetTamarind, 
    origin: "Vietnam", 
    moisture: "10-14%", 
    variety: "Sirthong", 
    size: "6.9 - 7.5 inches", 
    process: "Not steamed" 
  },
  { 
    id: 34, 
    name: "Robusta Coffee Beans", 
    image: robustaBeans, 
    origin: "Vietnam", 
    moisture: "12.5%", 
    grades: "R1-16, R1-18", 
    brokenAndBlack: "2% max" 
  },
];

  // Product categories for dropdown
  const productCategories = [
    { id: 1, name: "Cashew Nuts", hasSubcategories: true },
    { id: 2, name: "Desiccated Coconut", hasSubcategories: true },
    { id: 3, name: "Edible Copra", hasSubcategories: false },
    { id: 4, name: "Black Pepper", hasSubcategories: true },
    { id: 5, name: "White Pepper", hasSubcategories: false },
    { id: 6, name: "Ginger", hasSubcategories: true },
    { id: 30, name: "Soft Dried Mango", hasSubcategories: false },
    { id: 31, name: "TEJA RED CHILLI", hasSubcategories: false },
    { id: 32, name: "Star Anise", hasSubcategories: false },
    { id: 33, name: "Sweet Tamarind", hasSubcategories: false },
    { id: 34, name: "Robusta Coffee Beans", hasSubcategories: false },
  ];

  // Cashew Nuts subcategories
  const cashewSubcategories = [
    { id: 7, name: "Roasted & Salted Cashew Nuts" },
    { id: "ww320", name: "Cashew Nuts WW320", hasSubcategories: true },
    { id: 9, name: "Cashew Nuts WW240" },
    { id: 10, name: "Cashew Nuts WW180" },
    { id: 11, name: "Cashew Nuts WW450" },
    { id: 12, name: "Cashew Nuts SK" },
    { id: 13, name: "Cashew Nuts SL" },
    { id: 21, name: "Cashew Nuts LP" },
    { id: 22, name: "Cashew Nuts WS" },
  ];

  // WW320 subcategories
  const ww320Subcategories = [
    { id: 28, name: "Cashew Nuts WW320 AFI Standard" },
    { id: 8, name: "Cashew Nuts WW320 High Quality" },
    { id: 27, name: "Cashew Nuts WW320 Premium" },
  ];

  // Black Pepper subcategories
  const blackPepperSubcategories = [
    { id: 14, name: "Black Pepper 450g/l FAQ" },
    { id: 15, name: "Black Pepper 500g/l FAQ" },
    { id: 16, name: "Black Pepper 550g/l FAQ" },
    { id: 17, name: "Black Pepper 500g/l MC/ASTA" },
    { id: 18, name: "Black Pepper 550g/l MC/ASTA" },
    { id: 19, name: "Black Pepper 570g/l MC/ASTA" },
    { id: 20, name: "Black Pepper 5mm Bold" },
    { id: 26, name: "Brazilian Black Pepper" },
  ];

  // Desiccated Coconut subcategories
  const desiccatedCoconutSubcategories = [
    { id: 23, name: "Low fat Desiccated Coconut Fine Grade" },
    { id: 24, name: "High fat Desiccated Coconut Fine Grade" },
    { id: 25, name: "High fat Desiccated Coconut Medium Grade" },
  ];

  // Ginger subcategories
  const gingerSubcategories = [
    { id: "wholeGinger", name: "Whole Ginger", hasSubcategories: true },
    { id: "sliceGinger", name: "Slice Ginger", hasSubcategories: true },
  ];

  // Whole Ginger sub-subcategories
  const wholeGingerSubcategories = [
    { id: 38, name: "Ginger Whole Dry" },
    { id: 39, name: "Ginger Whole Fresh" },
  ];

  // Slice Ginger sub-subcategories
  const sliceGingerSubcategories = [
    { id: 35, name: "DRY SLICE GINGER A GRADE" },
      { id: 36, name: "DRY SLICE GINGER B GRADE" },
      { id: 37, name: "DRY SLICE GINGER C GRADE" },
  ];

  // Handle product navigation
  const handleProductClick = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      navigate(`/product/${productId}`, { state: { product } });
      setProductsDropdownOpen(false);
      setCashewSubmenuOpen(false);
    }
  };

  // 🔍 Live Search Handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  // 🔍 Select Search Result → go to Product Detail + send FULL data
  const handleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
    setSearchTerm("");
    setSuggestions([]);
    setShowSearch(false);
  };

  const isActive = (path) => location.pathname === path;

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1100] transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-md" : "bg-transparent"
      }`}
      style={
        !isScrolled
          ? {
              background: `linear-gradient(180deg, rgba(13,71,161,0.9) 0%, rgba(13,71,161,0.55) 45%, rgba(255,255,255,0) 100%)`,
            }
          : {}
      }
    >
      {/* Top info bar (only on top state) */}
      {!isScrolled && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 text-white text-[11px] sm:text-xs font-medium sm:border-b sm:border-white/30">
          <div className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1">
              ✉ <a href="mailto:info@lion-lotus.co" className="hover:text-[#FFD479]">info@lion-lotus.co</a>
            </span>
            <span className="hidden sm:inline text-white/70">|</span>
            <span className="flex items-center gap-1">
              ☎ <a href="tel:+6580350461" className="hover:text-[#FFD479]">+65 8035 0461</a>
            </span>
          </div>
        </div>
      )}

      {/* MAIN NAV */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 ${
          isScrolled ? "py-3" : "py-4 sm:py-5"
        } flex justify-between items-center transition-all duration-300`}
      >

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Lion & Lotus Trading Co., Ltd. logo"
            className="h-10 w-auto object-contain drop-shadow-lg"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-base font-semibold"
              style={{ color: isScrolled ? NAVY : "#ffffff" }}
            >
              Lion & Lotus
            </span>
            <span className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/70"}`}>
              Trading Co., Ltd.
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">

          <Link
            to="/"
            className={`relative transition-colors duration-150 ${
              isActive("/")
                ? "text-[rgb(212,168,87)]"
                : isScrolled
                ? "text-[#0A1C2E] hover:text-[#0D47A1]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Home
            <span
              className={`absolute left-0 bottom-0 h-0.5 transition-all duration-200 ${isActive("/") ? "w-full" : "w-0"}`}
              style={{ backgroundColor: "rgb(212, 168, 87)" }}
            ></span>
          </Link>

         

          {/* Products Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
              }
              setProductsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => {
                setProductsDropdownOpen(false);
                setCashewSubmenuOpen(false);
                setBlackPepperSubmenuOpen(false);
                setDesiccatedCoconutSubmenuOpen(false);
                setGingerSubmenuOpen(false);
                setWholeGingerSubmenuOpen(false);
                setSliceGingerSubmenuOpen(false);
                setWw320SubmenuOpen(false);
              }, 200); // 200ms delay before closing
            }}
          >
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`relative flex items-center gap-1 transition-colors duration-150 ${
                  isActive("/products") || location.pathname.startsWith("/product/")
                    ? "text-[#0D47A1]"
                    : isScrolled
                    ? "text-[#0A1C2E] hover:text-[#0D47A1]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Product
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-200 ${isActive("/products") || location.pathname.startsWith("/product/") ? "w-full" : "w-0"} bg-[#0D47A1]`}
                ></span>
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  style={{ minWidth: "280px" }}
                >
                <Link
                  to="/products"
                  onClick={() => setProductsDropdownOpen(false)}
                  className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-semibold text-[#0D47A1] border-b border-gray-100"
                >
                  All Products
                </Link>
                {productCategories.map((category) => (
                  <div key={category.id} className="relative">
                    {category.hasSubcategories ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          if (category.name === "Cashew Nuts") {
                            setCashewSubmenuOpen(true);
                            setBlackPepperSubmenuOpen(false);
                            setDesiccatedCoconutSubmenuOpen(false);
                            setGingerSubmenuOpen(false);
                          } else if (category.name === "Black Pepper") {
                            setBlackPepperSubmenuOpen(true);
                            setCashewSubmenuOpen(false);
                            setDesiccatedCoconutSubmenuOpen(false);
                            setGingerSubmenuOpen(false);
                          } else if (category.name === "Desiccated Coconut") {
                            setDesiccatedCoconutSubmenuOpen(true);
                            setCashewSubmenuOpen(false);
                            setBlackPepperSubmenuOpen(false);
                            setGingerSubmenuOpen(false);
                          } else if (category.name === "Ginger") {
                            setGingerSubmenuOpen(true);
                            setCashewSubmenuOpen(false);
                            setBlackPepperSubmenuOpen(false);
                            setDesiccatedCoconutSubmenuOpen(false);
                          }
                        }}
                      >
                        <button
                          onMouseEnter={() => {
                            if (dropdownTimeoutRef.current) {
                              clearTimeout(dropdownTimeoutRef.current);
                            }
                            setProductsDropdownOpen(true);
                            if (category.name === "Cashew Nuts") {
                              setCashewSubmenuOpen(true);
                              setBlackPepperSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Black Pepper") {
                              setBlackPepperSubmenuOpen(true);
                              setCashewSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Desiccated Coconut") {
                              setDesiccatedCoconutSubmenuOpen(true);
                              setCashewSubmenuOpen(false);
                              setBlackPepperSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Ginger") {
                              setGingerSubmenuOpen(true);
                              setCashewSubmenuOpen(false);
                              setBlackPepperSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                            }
                          }}
                          onClick={() => {
                            if (category.name === "Cashew Nuts") {
                              setCashewSubmenuOpen(!cashewSubmenuOpen);
                              setBlackPepperSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Black Pepper") {
                              setBlackPepperSubmenuOpen(!blackPepperSubmenuOpen);
                              setCashewSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Desiccated Coconut") {
                              setDesiccatedCoconutSubmenuOpen(!desiccatedCoconutSubmenuOpen);
                              setCashewSubmenuOpen(false);
                              setBlackPepperSubmenuOpen(false);
                              setGingerSubmenuOpen(false);
                            } else if (category.name === "Ginger") {
                              setGingerSubmenuOpen(!gingerSubmenuOpen);
                              setCashewSubmenuOpen(false);
                              setBlackPepperSubmenuOpen(false);
                              setDesiccatedCoconutSubmenuOpen(false);
                            }
                          }}
                          className="w-full px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center justify-between group text-left"
                        >
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#0D47A1]">
                            {category.name}
                          </span>
                          <ChevronRight 
                            size={16} 
                            className={`text-gray-400 transition-transform duration-200 ${
                              (category.name === "Cashew Nuts" && cashewSubmenuOpen) ||
                              (category.name === "Black Pepper" && blackPepperSubmenuOpen) ||
                              (category.name === "Desiccated Coconut" && desiccatedCoconutSubmenuOpen) ||
                              (category.name === "Ginger" && gingerSubmenuOpen)
                                ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleProductClick(category.id)}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                      >
                        {category.name}
                      </button>
                    )}

                    {/* Cashew Nuts Submenu */}
                    {category.hasSubcategories && category.name === "Cashew Nuts" && cashewSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setCashewSubmenuOpen(true);
                            }}
                            onMouseLeave={() => {
                              dropdownTimeoutRef.current = setTimeout(() => {
                                setProductsDropdownOpen(false);
                                setCashewSubmenuOpen(false);
                                setWw320SubmenuOpen(false);
                              }, 200);
                            }}
                      >
                        {cashewSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setCashewSubmenuOpen(true);
                              if (subcat.hasSubcategories && subcat.id === "ww320") {
                                setWw320SubmenuOpen(true);
                              }
                            }}
                          >
                            {subcat.hasSubcategories ? (
                              <button
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCashewSubmenuOpen(true);
                                  setWw320SubmenuOpen(true);
                                }}
                                onClick={() => setWw320SubmenuOpen(!ww320SubmenuOpen)}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${ww320SubmenuOpen ? "rotate-90" : ""}`}
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleProductClick(subcat.id)}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                              >
                                {subcat.name}
                              </button>
                            )}
                            {/* WW320 Submenu */}
                            {subcat.hasSubcategories && subcat.id === "ww320" && ww320SubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCashewSubmenuOpen(true);
                                  setWw320SubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setProductsDropdownOpen(false);
                                    setCashewSubmenuOpen(false);
                                    setWw320SubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {ww320Subcategories.map((ww320Subcat) => (
                                  <button
                                    key={ww320Subcat.id}
                                    onClick={() => handleProductClick(ww320Subcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {ww320Subcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Black Pepper Submenu */}
                    {category.hasSubcategories && category.name === "Black Pepper" && blackPepperSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setBlackPepperSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setBlackPepperSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {blackPepperSubcategories.map((subcat) => (
                          <button
                            key={subcat.id}
                            onClick={() => handleProductClick(subcat.id)}
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                          >
                            {subcat.name}
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Desiccated Coconut Submenu */}
                    {category.hasSubcategories && category.name === "Desiccated Coconut" && desiccatedCoconutSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setDesiccatedCoconutSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setDesiccatedCoconutSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {desiccatedCoconutSubcategories.map((subcat) => (
                          <button
                            key={subcat.id}
                            onClick={() => handleProductClick(subcat.id)}
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                          >
                            {subcat.name}
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Ginger Submenu */}
                    {category.hasSubcategories && category.name === "Ginger" && gingerSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setGingerSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setGingerSubmenuOpen(false);
                            setWholeGingerSubmenuOpen(false);
                            setSliceGingerSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {gingerSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setGingerSubmenuOpen(true);
                              if (subcat.hasSubcategories) {
                                if (subcat.id === "wholeGinger") {
                                  setWholeGingerSubmenuOpen(true);
                                  setSliceGingerSubmenuOpen(false);
                                } else if (subcat.id === "sliceGinger") {
                                  setSliceGingerSubmenuOpen(true);
                                  setWholeGingerSubmenuOpen(false);
                                }
                              }
                            }}
                          >
                            {subcat.hasSubcategories ? (
                              <button
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setGingerSubmenuOpen(true);
                                  if (subcat.id === "wholeGinger") {
                                    setWholeGingerSubmenuOpen(true);
                                    setSliceGingerSubmenuOpen(false);
                                  } else if (subcat.id === "sliceGinger") {
                                    setSliceGingerSubmenuOpen(true);
                                    setWholeGingerSubmenuOpen(false);
                                  }
                                }}
                                onClick={() => {
                                  if (subcat.id === "wholeGinger") {
                                    setWholeGingerSubmenuOpen(!wholeGingerSubmenuOpen);
                                    setSliceGingerSubmenuOpen(false);
                                  } else if (subcat.id === "sliceGinger") {
                                    setSliceGingerSubmenuOpen(!sliceGingerSubmenuOpen);
                                    setWholeGingerSubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${
                                    (subcat.id === "wholeGinger" && wholeGingerSubmenuOpen) ||
                                    (subcat.id === "sliceGinger" && sliceGingerSubmenuOpen)
                                      ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleProductClick(subcat.id)}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                              >
                                {subcat.name}
                              </button>
                            )}
                            {/* Whole Ginger Submenu */}
                            {subcat.hasSubcategories && subcat.id === "wholeGinger" && wholeGingerSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setGingerSubmenuOpen(true);
                                  setWholeGingerSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setProductsDropdownOpen(false);
                                    setGingerSubmenuOpen(false);
                                    setWholeGingerSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {wholeGingerSubcategories.map((wholeGingerSubcat) => (
                                  <button
                                    key={wholeGingerSubcat.id}
                                    onClick={() => handleProductClick(wholeGingerSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {wholeGingerSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* Slice Ginger Submenu */}
                            {subcat.hasSubcategories && subcat.id === "sliceGinger" && sliceGingerSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setGingerSubmenuOpen(true);
                                  setSliceGingerSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setProductsDropdownOpen(false);
                                    setGingerSubmenuOpen(false);
                                    setSliceGingerSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {sliceGingerSubcategories.map((sliceGingerSubcat) => (
                                  <button
                                    key={sliceGingerSubcat.id}
                                    onClick={() => handleProductClick(sliceGingerSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {sliceGingerSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>


          <Link
            to="/factorypage"
            className={`relative transition-colors duration-150 ${
              isActive("/factorypage")
                ? "text-[#0D47A1]"
                : isScrolled
                ? "text-[#0A1C2E] hover:text-[#0D47A1]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Processing
            <span
              className={`absolute left-0 bottom-0 h-0.5 transition-all duration-200 ${isActive("/factorypage") ? "w-full" : "w-0"} bg-[#0D47A1]`}
            ></span>
          </Link>

          <Link
            to="/contact"
            className={`relative transition-colors duration-150 ${
              isActive("/contact")
                ? "text-[#0D47A1]"
                : isScrolled
                ? "text-[#0A1C2E] hover:text-[#0D47A1]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 h-0.5 transition-all duration-200 ${isActive("/contact") ? "w-full" : "w-0"} bg-[#0D47A1]`}
            ></span>
          </Link>

          <Link
            to="/about"
            className={`relative transition-colors duration-150 ${
              isActive("/about")
                ? "text-[#0D47A1]"
                : isScrolled
                ? "text-[#0A1C2E] hover:text-[#0D47A1]"
                : "text-white/90 hover:text-white"
            }`}
          >
            About Us
            <span
              className={`absolute left-0 bottom-0 h-0.5 transition-all duration-200 ${isActive("/about") ? "w-full" : "w-0"} bg-[#0D47A1]`}
            ></span>
          </Link>
          {/* <a
            href="#news"
            style={{ color: NAVY }}
            className="cursor-pointer hover:text-[#0D47A1]"
            onClick={(e) => handleAnchorClick(e, "#news")}
          >
            News
          </a>

          <a
            href="#contact"
            style={{ color: NAVY }}
            className="cursor-pointer hover:text-[#0D47A1]"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Contact
          </a> */}
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="/contact"
            className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              isScrolled ? "text-white" : "text-white"
            }`}
            style={{
              background: "linear-gradient(90deg, #0B3A82, #128C7E)",
            }}
          >
            Get Quote
          </a>

          {/* Desktop language toggle */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-semibold">
            <span className={isScrolled ? "text-gray-700" : "text-white/90"}>EN</span>
            <span className={isScrolled ? "text-gray-400" : "text-white/60"}>|</span>
            <span className={isScrolled ? "text-gray-500 hover:text-[#0D47A1]" : "text-white/70 hover:text-white"}>TH</span>
          </div>

          {/* Mobile language toggle */}
          <div className="flex items-center gap-1 text-xs font-semibold lg:hidden">
            <span className={`${isScrolled ? "text-gray-700" : "text-white/90"}`}>EN</span>
            <span className={`${isScrolled ? "text-gray-400" : "text-white/60"}`}>|</span>
            <span className={`${isScrolled ? "text-gray-500" : "text-white/70"} hover:text-[#0D47A1] cursor-pointer`}>
              TH
            </span>
          </div>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className={`hover:text-[#0D47A1] ${isScrolled ? "text-gray-600" : "text-white/90"}`}
            aria-label={showSearch ? "Close product search" : "Open product search"}
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden hover:text-[#0D47A1] ${isScrolled ? "text-gray-700" : "text-white/90"}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="bg-white border-t px-4 py-3 relative z-[9999] shadow-sm">
          <div className="max-w-7xl mx-auto">

            {/* Search Input */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
              <Search className="text-gray-500" size={18} />

              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                className="ml-2 w-full bg-transparent outline-none text-sm"
              />

              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(""); setSuggestions([]); }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* SEARCH RESULTS */}
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 bg-white shadow-xl rounded-lg mt-2 max-h-60 overflow-y-auto z-[99999] border border-gray-200 animate-fade-slide-down">

                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover border"
                    />

                    <div>
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.origin}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[1200] bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
            <div
              className="ml-auto h-full w-5/6 sm:w-1/2 bg-white/95 backdrop-blur px-4 pb-6 pt-4 flex flex-col space-y-2 text-base font-medium shadow-2xl rounded-l-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="flex items-center justify-between mb-2">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                <img
                  src={logo}
                  alt="Lion & Lotus Trading Co., Ltd. logo"
                  className="h-9 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <button
                className="text-gray-600 hover:text-[#0D47A1]"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <Link
              to="/"
              className={`block w-full px-2 py-3 rounded-md text-[15px] ${
                isActive("/")
                  ? "bg-gray-50 font-semibold"
                  : "hover:bg-gray-50"
              }`}
              style={{ color: isActive("/") ? "rgb(212, 168, 87)" : "#0A1C2E" }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block w-full px-2 py-3 rounded-md text-[15px] ${
                isActive("/about")
                  ? "bg-gray-50 text-[#0D47A1] font-semibold"
                  : "text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            {/* Mobile Products Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)}
                className={`w-full flex items-center justify-between px-2 py-3 rounded-md text-[15px] ${
                  isActive("/products") || location.pathname.startsWith("/product/")
                    ? "bg-gray-50 text-[#0D47A1] font-semibold"
                    : "text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
                }`}
              >
                <span>Products</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${mobileProductsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileProductsDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    to="/products"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileProductsDropdownOpen(false);
                    }}
                    className="block px-2 py-2 rounded-md text-[14px] font-semibold text-[#0D47A1] hover:bg-gray-50 border-b border-gray-200 pb-3 mb-1"
                  >
                    All Products
                  </Link>
                  {productCategories.map((category) => (
                    <div key={category.id}>
                      {category.hasSubcategories ? (
                        <>
                          <button
                            onClick={() => {
                              if (category.name === "Cashew Nuts") {
                                setMobileCashewSubmenuOpen(!mobileCashewSubmenuOpen);
                                setMobileWw320SubmenuOpen(false);
                                setMobileBlackPepperSubmenuOpen(false);
                                setMobileDesiccatedCoconutSubmenuOpen(false);
                                setMobileGingerSubmenuOpen(false);
                              } else if (category.name === "Black Pepper") {
                                setMobileBlackPepperSubmenuOpen(!mobileBlackPepperSubmenuOpen);
                                setMobileCashewSubmenuOpen(false);
                                setMobileWw320SubmenuOpen(false);
                                setMobileDesiccatedCoconutSubmenuOpen(false);
                                setMobileGingerSubmenuOpen(false);
                              } else if (category.name === "Desiccated Coconut") {
                                setMobileDesiccatedCoconutSubmenuOpen(!mobileDesiccatedCoconutSubmenuOpen);
                                setMobileCashewSubmenuOpen(false);
                                setMobileWw320SubmenuOpen(false);
                                setMobileBlackPepperSubmenuOpen(false);
                                setMobileGingerSubmenuOpen(false);
                              } else if (category.name === "Ginger") {
                                setMobileGingerSubmenuOpen(!mobileGingerSubmenuOpen);
                                setMobileCashewSubmenuOpen(false);
                                setMobileWw320SubmenuOpen(false);
                                setMobileBlackPepperSubmenuOpen(false);
                                setMobileDesiccatedCoconutSubmenuOpen(false);
                                setMobileWholeGingerSubmenuOpen(false);
                                setMobileSliceGingerSubmenuOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[14px] text-gray-700 hover:text-[#0D47A1] hover:bg-gray-50"
                          >
                            <span>{category.name}</span>
                            <ChevronRight 
                              size={14} 
                              className={`transition-transform duration-200 ${
                                (category.name === "Cashew Nuts" && mobileCashewSubmenuOpen) ||
                                (category.name === "Black Pepper" && mobileBlackPepperSubmenuOpen) ||
                                (category.name === "Desiccated Coconut" && mobileDesiccatedCoconutSubmenuOpen) ||
                                (category.name === "Ginger" && mobileGingerSubmenuOpen)
                                  ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          {category.name === "Cashew Nuts" && mobileCashewSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {cashewSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          setMobileWw320SubmenuOpen(!mobileWw320SubmenuOpen);
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${mobileWw320SubmenuOpen ? "rotate-90" : ""}`}
                                        />
                                      </button>
                                      {subcat.id === "ww320" && mobileWw320SubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {ww320Subcategories.map((ww320Subcat) => (
                                            <button
                                              key={ww320Subcat.id}
                                              onClick={() => {
                                                handleProductClick(ww320Subcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileCashewSubmenuOpen(false);
                                                setMobileWw320SubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {ww320Subcat.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        handleProductClick(subcat.id);
                                        setMenuOpen(false);
                                        setMobileProductsDropdownOpen(false);
                                        setMobileCashewSubmenuOpen(false);
                                      }}
                                      className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                    >
                                      {subcat.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {category.name === "Black Pepper" && mobileBlackPepperSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {blackPepperSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileBlackPepperSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "Desiccated Coconut" && mobileDesiccatedCoconutSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {desiccatedCoconutSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileDesiccatedCoconutSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "Ginger" && mobileGingerSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {gingerSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (subcat.id === "wholeGinger") {
                                            setMobileWholeGingerSubmenuOpen(!mobileWholeGingerSubmenuOpen);
                                            setMobileSliceGingerSubmenuOpen(false);
                                          } else if (subcat.id === "sliceGinger") {
                                            setMobileSliceGingerSubmenuOpen(!mobileSliceGingerSubmenuOpen);
                                            setMobileWholeGingerSubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${
                                            (subcat.id === "wholeGinger" && mobileWholeGingerSubmenuOpen) ||
                                            (subcat.id === "sliceGinger" && mobileSliceGingerSubmenuOpen)
                                              ? "rotate-90" : ""
                                          }`}
                                        />
                                      </button>
                                      {subcat.id === "wholeGinger" && mobileWholeGingerSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {wholeGingerSubcategories.map((wholeGingerSubcat) => (
                                            <button
                                              key={wholeGingerSubcat.id}
                                              onClick={() => {
                                                handleProductClick(wholeGingerSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileGingerSubmenuOpen(false);
                                                setMobileWholeGingerSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {wholeGingerSubcat.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "sliceGinger" && mobileSliceGingerSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {sliceGingerSubcategories.map((sliceGingerSubcat) => (
                                            <button
                                              key={sliceGingerSubcat.id}
                                              onClick={() => {
                                                handleProductClick(sliceGingerSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileGingerSubmenuOpen(false);
                                                setMobileSliceGingerSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {sliceGingerSubcat.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        handleProductClick(subcat.id);
                                        setMenuOpen(false);
                                        setMobileProductsDropdownOpen(false);
                                        setMobileGingerSubmenuOpen(false);
                                      }}
                                      className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                    >
                                      {subcat.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            handleProductClick(category.id);
                            setMenuOpen(false);
                            setMobileProductsDropdownOpen(false);
                          }}
                          className="w-full text-left px-2 py-2 rounded-md text-[14px] text-gray-700 hover:text-[#0D47A1] hover:bg-gray-50"
                        >
                          {category.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/factorypage"
              className={`block w-full px-2 py-3 rounded-md text-[15px] ${
                isActive("/factorypage")
                  ? "bg-gray-50 text-[#0D47A1] font-semibold"
                  : "text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Processing
            </Link>

            <Link
              to="/contact"
              className={`block w-full px-2 py-3 rounded-md text-[15px] ${
                isActive("/contact")
                  ? "bg-gray-50 text-[#0D47A1] font-semibold"
                  : "text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          {/*
          <button
            className="block w-full px-2 py-2 rounded-md text-left text-[15px] text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
            onClick={(e) => {
              setMenuOpen(false);
              handleAnchorClick(e, "#news");
            }}
          >
            News
          </button>

          <button
            className="block w-full px-2 py-2 rounded-md text-left text-[15px] text-gray-800 hover:text-[#0D47A1] hover:bg-gray-50"
            onClick={(e) => {
              setMenuOpen(false);
              handleAnchorClick(e, "#contact");
            }}
          >
            Contact
          </button>
          */}

            <Link
              to="/contact"
              className="mt-2 block w-full text-center rounded-full px-4 py-3 text-[15px] font-semibold text-white shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, #0B3A82, #128C7E)" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </Link>

          {/* Mobile Contact Info */}
          <div className="pt-3 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Email</p>
            <a href="mailto:info@lion-lotus.co" className="text-[#0D47A1] hover:underline break-all">
              info@lion-lotus.co
            </a>
            <p className="font-semibold pt-2">Phone</p>
            <a href="tel:+6580350461" className="text-[#0D47A1] hover:underline">+65 8035 0461</a>
          </div>

          {/* Mobile Social Links */}
          <div className="pt-4 flex items-center gap-3 text-xl text-gray-500">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-[#0D47A1] hover:border-[#0D47A1] transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-[#0D47A1] hover:border-[#0D47A1] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-[#0D47A1] hover:border-[#0D47A1] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-[#0D47A1] hover:border-[#0D47A1] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

            <div className="pt-3 text-xs text-gray-500 border-t border-gray-200 mt-3">
              <span className="font-semibold">Language:</span> EN | TH
            </div>
          </div>
        </div>,
        document.body
      )}

    </header>
  );
};

export default Navbar;
