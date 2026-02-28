import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// ✅ Import real logo
import logo from "../assets/logo.webp";

import { products as sharedProducts, getDesiccatedCoconutFineProducts, getDesiccatedCoconutMediumProducts } from "../data/products";


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
  const [roastedSubmenuOpen, setRoastedSubmenuOpen] = useState(false);
  const [ww320SubmenuOpen, setWw320SubmenuOpen] = useState(false);
  const [pepperSubmenuOpen, setPepperSubmenuOpen] = useState(false);
  const [blackPepperSubmenuOpen, setBlackPepperSubmenuOpen] = useState(false);
  const [desiccatedCoconutSubmenuOpen, setDesiccatedCoconutSubmenuOpen] = useState(false);
  const [desiccatedCoconutFineSubmenuOpen, setDesiccatedCoconutFineSubmenuOpen] = useState(false);
  const [desiccatedCoconutMediumSubmenuOpen, setDesiccatedCoconutMediumSubmenuOpen] = useState(false);
  const [gingerSubmenuOpen, setGingerSubmenuOpen] = useState(false);
  const [wholeGingerSubmenuOpen, setWholeGingerSubmenuOpen] = useState(false);
  const [sliceGingerSubmenuOpen, setSliceGingerSubmenuOpen] = useState(false);
  const [cardamomSubmenuOpen, setCardamomSubmenuOpen] = useState(false);
  const [cassiaSubmenuOpen, setCassiaSubmenuOpen] = useState(false);
  const [cassiaPressedSubmenuOpen, setCassiaPressedSubmenuOpen] = useState(false);
  const [cassiaLongStickSubmenuOpen, setCassiaLongStickSubmenuOpen] = useState(false);
  const [cassiaStickSubmenuOpen, setCassiaStickSubmenuOpen] = useState(false);
  const [cassiaPowderSubmenuOpen, setCassiaPowderSubmenuOpen] = useState(false);
  const [seedsSubmenuOpen, setSeedsSubmenuOpen] = useState(false);
  const [pumpkinSeedsSubmenuOpen, setPumpkinSeedsSubmenuOpen] = useState(false);
  const [sunflowerSeedsSubmenuOpen, setSunflowerSeedsSubmenuOpen] = useState(false);
  const [peanutsSubmenuOpen, setPeanutsSubmenuOpen] = useState(false);
  const [almondsSubmenuOpen, setAlmondsSubmenuOpen] = useState(false);
  const [starAniseSubmenuOpen, setStarAniseSubmenuOpen] = useState(false);
  const [starAniseAutumnSubmenuOpen, setStarAniseAutumnSubmenuOpen] = useState(false);
  const [starAniseTuquySubmenuOpen, setStarAniseTuquySubmenuOpen] = useState(false);
  const [starAniseCandhanSubmenuOpen, setStarAniseCandhanSubmenuOpen] = useState(false);
  const [greenCoffeeSubmenuOpen, setGreenCoffeeSubmenuOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const [mobileCashewSubmenuOpen, setMobileCashewSubmenuOpen] = useState(false);
  const [mobileRoastedSubmenuOpen, setMobileRoastedSubmenuOpen] = useState(false);
  const [mobileWw320SubmenuOpen, setMobileWw320SubmenuOpen] = useState(false);
  const [mobilePepperSubmenuOpen, setMobilePepperSubmenuOpen] = useState(false);
  const [mobileBlackPepperSubmenuOpen, setMobileBlackPepperSubmenuOpen] = useState(false);
  const [mobileDesiccatedCoconutSubmenuOpen, setMobileDesiccatedCoconutSubmenuOpen] = useState(false);
  const [mobileDesiccatedCoconutFineSubmenuOpen, setMobileDesiccatedCoconutFineSubmenuOpen] = useState(false);
  const [mobileDesiccatedCoconutMediumSubmenuOpen, setMobileDesiccatedCoconutMediumSubmenuOpen] = useState(false);
  const [mobileGingerSubmenuOpen, setMobileGingerSubmenuOpen] = useState(false);
  const [mobileWholeGingerSubmenuOpen, setMobileWholeGingerSubmenuOpen] = useState(false);
  const [mobileSliceGingerSubmenuOpen, setMobileSliceGingerSubmenuOpen] = useState(false);
  const [mobileCardamomSubmenuOpen, setMobileCardamomSubmenuOpen] = useState(false);
  const [mobileCassiaSubmenuOpen, setMobileCassiaSubmenuOpen] = useState(false);
  const [mobileCassiaPressedSubmenuOpen, setMobileCassiaPressedSubmenuOpen] = useState(false);
  const [mobileCassiaLongStickSubmenuOpen, setMobileCassiaLongStickSubmenuOpen] = useState(false);
  const [mobileCassiaStickSubmenuOpen, setMobileCassiaStickSubmenuOpen] = useState(false);
  const [mobileCassiaPowderSubmenuOpen, setMobileCassiaPowderSubmenuOpen] = useState(false);
  const [mobileSeedsSubmenuOpen, setMobileSeedsSubmenuOpen] = useState(false);
  const [mobilePumpkinSeedsSubmenuOpen, setMobilePumpkinSeedsSubmenuOpen] = useState(false);
  const [mobileSunflowerSeedsSubmenuOpen, setMobileSunflowerSeedsSubmenuOpen] = useState(false);
  const [mobilePeanutsSubmenuOpen, setMobilePeanutsSubmenuOpen] = useState(false);
  const [mobileAlmondsSubmenuOpen, setMobileAlmondsSubmenuOpen] = useState(false);
  const [mobileStarAniseSubmenuOpen, setMobileStarAniseSubmenuOpen] = useState(false);
  const [mobileStarAniseAutumnSubmenuOpen, setMobileStarAniseAutumnSubmenuOpen] = useState(false);
  const [mobileStarAniseTuquySubmenuOpen, setMobileStarAniseTuquySubmenuOpen] = useState(false);
  const [mobileStarAniseCandhanSubmenuOpen, setMobileStarAniseCandhanSubmenuOpen] = useState(false);
  const [mobileGreenCoffeeSubmenuOpen, setMobileGreenCoffeeSubmenuOpen] = useState(false);
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
        setPepperSubmenuOpen(false);
        setBlackPepperSubmenuOpen(false);
        setDesiccatedCoconutSubmenuOpen(false);
        setGingerSubmenuOpen(false);
        setWholeGingerSubmenuOpen(false);
        setSliceGingerSubmenuOpen(false);
        setCardamomSubmenuOpen(false);
        setSeedsSubmenuOpen(false);
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

  const products = sharedProducts;

  // Product categories for dropdown (from data, in display order)
  const MAIN_CATEGORY_ORDER = [
    "Cashew Nuts", "WALNUTS", "Desiccated Coconut","Edible Copra", "Pepper", "TEJA RED CHILLI",
    "CASSIA/CINNAMON",  "Soft Dried Mango","Fresh Ginger", "TURMERIC FINGER",
     "Star Anise", "Cardamom",
    "Seeds", "Peanuts", "Almonds", "Sweet Tamarind",
    "Green Coffee Beans", "Nigella sativa", "Cloves",
  ];
  const productCategories = MAIN_CATEGORY_ORDER
    .filter((name) => products.some((p) => p.category === name))
    .map((name, i) => ({
      id: i + 1,
      name,
      hasSubcategories: products.filter((p) => p.category === name).length > 1 || products.some((p) => p.category === name && p.subcategory),
    }));

  // Cashew Nuts: group by subcategory; WW320 as expandable, others as direct links
  const cashewBySub = {};
  products.filter((p) => p.category === "Cashew Nuts").forEach((p) => {
    const s = p.subcategory || p.name;
    if (!cashewBySub[s]) cashewBySub[s] = [];
    cashewBySub[s].push(p);
  });
  const CASHEW_SUB_ORDER = ["Roasted", "WW320", "WW240", "WW210", "WW180", "WW450", "SK", "SL", "LP", "WS"];
  const cashewSubcategories = [];
  CASHEW_SUB_ORDER.forEach((sub) => {
    if (!cashewBySub[sub]) return;
    if (sub === "Roasted") {
      cashewSubcategories.push({ id: "roasted", name: "Salted and Roasted Cashew Nuts", hasSubcategories: true });
      return;
    }
    if (sub === "WW320") {
      cashewSubcategories.push({ id: "ww320", name: "Cashew Nuts WW320", hasSubcategories: true });
      return;
    }
    cashewBySub[sub].forEach((p) => cashewSubcategories.push({ id: p.id, name: p.name }));
  });
  Object.keys(cashewBySub).forEach((sub) => {
    if (CASHEW_SUB_ORDER.includes(sub)) return;
    cashewBySub[sub].forEach((p) => cashewSubcategories.push({ id: p.id, name: p.name }));
  });

  const roastedSubcategories = (cashewBySub["Roasted"] || []).map((p) => ({ id: p.id, name: p.name }));
  const ww320Subcategories = (cashewBySub["WW320"] || []).map((p) => ({ id: p.id, name: p.name }));

  const pepperSubcategories = [
    { id: "blackPepper", name: "Black Pepper", hasSubcategories: true },
    ...products.filter((p) => p.category === "Pepper" && (p.subcategory === "White Pepper" || p.name.includes("White Pepper"))).map((p) => ({ id: p.id, name: p.name })),
  ];
  const blackPepperSubcategories = products
    .filter((p) => p.category === "Pepper" && p.subcategory === "Black Pepper")
    .map((p) => ({ id: p.id, name: p.name }));

  // Desiccated Coconut: Fine and Medium (same product list as Products page)
  const desiccatedCoconutFineSubcategories = getDesiccatedCoconutFineProducts(products).map((p) => ({ id: p.id, name: p.name }));
  const desiccatedCoconutMediumSubcategories = getDesiccatedCoconutMediumProducts(products).map((p) => ({ id: p.id, name: p.name }));
  const DESICCATED_COCONUT_FINE_MEDIUM_IDS = [
    ...desiccatedCoconutFineSubcategories.map((x) => x.id),
    ...desiccatedCoconutMediumSubcategories.map((x) => x.id),
  ];
  const desiccatedCoconutSubcategories = [
    { id: "dc-fine", name: "High Desiccated Fine Grade", hasSubcategories: true },
    { id: "dc-medium", name: "High Desiccated Medium Grade", hasSubcategories: true },
    ...products
      .filter((p) => p.category === "Desiccated Coconut" && !DESICCATED_COCONUT_FINE_MEDIUM_IDS.includes(p.id))
      .map((p) => ({ id: p.id, name: p.name })),
  ];

  const gingerSubcategories = [
    { id: "wholeGinger", name: "Dried Whole Ginger", hasSubcategories: true },
    { id: "sliceGinger", name: "Dried Slice Ginger", hasSubcategories: true },
  ];
  const wholeGingerSubcategories = products
    .filter((p) => p.category === "Fresh Ginger" && p.subcategory === "Whole Ginger")
    .map((p) => ({ id: p.id, name: p.name }));
  const sliceGingerSubcategories = products
    .filter((p) => p.category === "Fresh Ginger" && p.subcategory === "Slice Ginger")
    .map((p) => ({ id: p.id, name: p.name }));

  const cardamomSubcategories = products.filter((p) => p.category === "Cardamom").map((p) => ({ id: p.id, name: p.name }));

  // Cassia: group by subcategory; Pressed (10/12 kg), Long Stick, Stick (Cigarette), Powder as expandable
  const cassiaBySub = {};
  products.filter((p) => p.category === "CASSIA/CINNAMON").forEach((p) => {
    const s = p.subcategory || p.name;
    if (!cassiaBySub[s]) cassiaBySub[s] = [];
    cassiaBySub[s].push(p);
  });
  const CASSIA_SUB_ORDER = ["Pressed", "Long Stick", "Cigarette", "Powder", "Split", "Broken", "Leaves", "Husk"];
  const cassiaSubcategories = [];
  CASSIA_SUB_ORDER.forEach((sub) => {
    if (!cassiaBySub[sub]) return;
    if (sub === "Pressed") {
      cassiaSubcategories.push({ id: "cassia-pressed", name: "Cassia Pressed", hasSubcategories: true });
      return;
    }
    if (sub === "Long Stick") {
      cassiaSubcategories.push({ id: "cassia-long-stick", name: "Cassia Long Stick", hasSubcategories: true });
      return;
    }
    if (sub === "Cigarette") {
      cassiaSubcategories.push({ id: "cassia-stick", name: "Cassia Stick", hasSubcategories: true });
      return;
    }
    if (sub === "Powder") {
      cassiaSubcategories.push({ id: "cassia-powder", name: "Cassia Powder", hasSubcategories: true });
      return;
    }
    cassiaBySub[sub].forEach((p) => cassiaSubcategories.push({ id: p.id, name: p.name }));
  });
  Object.keys(cassiaBySub).forEach((sub) => {
    if (CASSIA_SUB_ORDER.includes(sub)) return;
    cassiaBySub[sub].forEach((p) => cassiaSubcategories.push({ id: p.id, name: p.name }));
  });

  // Cassia Pressed: only Whole Premium 10 kg and 12 kg (display names), 10 kg first
  const cassiaPressedSubcategories = products
    .filter((p) => p.category === "CASSIA/CINNAMON" && p.subcategory === "Pressed" && (p.name.includes("10kg") || p.name.includes("12kg")))
    .sort((a, b) => a.id - b.id)
    .map((p) => ({ id: p.id, name: p.name.includes("10kg") ? "Whole Premium 10 kg" : "Whole Premium 12 kg" }));
  const cassiaLongStickSubcategories = (cassiaBySub["Long Stick"] || []).map((p) => ({ id: p.id, name: p.name }));
  const cassiaStickSubcategories = (cassiaBySub["Cigarette"] || []).map((p) => ({ id: p.id, name: p.name }));
  const cassiaPowderSubcategories = (cassiaBySub["Powder"] || []).map((p) => ({ id: p.id, name: p.name }));

  const pumpkinSeedMain = products.find((p) => p.category === "Seeds" && p.name === "Pumpkin Seeds");
  const sunflowerSeedMain = products.find((p) => p.category === "Seeds" && p.name === "Sunflower Seeds");
  const watermelonSeedMain = products.find((p) => p.category === "Seeds" && p.name === "Watermelon Seeds");
  const seedsSubcategories = [
    ...(pumpkinSeedMain ? [{ id: pumpkinSeedMain.id, name: "Pumpkin Seeds", hasSubcategories: true }] : []),
    ...(sunflowerSeedMain ? [{ id: sunflowerSeedMain.id, name: "Sunflower Seeds", hasSubcategories: true }] : []),
    ...(watermelonSeedMain ? [{ id: watermelonSeedMain.id, name: "Watermelon Seeds", hasSubcategories: false }] : []),
  ];

  const pumpkinSeedsSubcategories = products
    .filter((p) => p.category === "Seeds" && p.subcategory === "Pumpkin Seeds")
    .map((p) => ({ id: p.id, name: p.name }));
  const sunflowerSeedsSubcategories = products
    .filter((p) => p.category === "Seeds" && p.subcategory === "Sunflower Seeds")
    .map((p) => ({ id: p.id, name: p.name }));

  const peanutsSubcategories = products.filter((p) => p.category === "Peanuts").map((p) => ({ id: p.id, name: p.name }));
  const almondsSubcategories = products.filter((p) => p.category === "Almonds").map((p) => ({ id: p.id, name: p.name }));
  // Star Anise: Autumn, Tu Quy, Canh Dan (Candhan) as expandable with Premium/Good; rest as direct links
  const starAniseAutumnSubcategories = products
    .filter((p) => p.category === "Star Anise" && p.subcategory === "Autumn" && (p.name.includes("Premium") || p.name.includes("Good")))
    .map((p) => ({ id: p.id, name: p.name }));
  const starAniseTuquySubcategories = products
    .filter((p) => p.category === "Star Anise" && p.name.includes("Tu Quy"))
    .map((p) => ({ id: p.id, name: p.name }));
  const starAniseCandhanSubcategories = products
    .filter((p) => p.category === "Star Anise" && p.subcategory === "Canh Dan" && (p.name.includes("Premium") || p.name.includes("Good")))
    .map((p) => ({ id: p.id, name: p.name }));
  const STAR_ANISE_EXPANDABLE_IDS = [116, 117, 118, 119, 120, 121]; // Autumn/Tu Quy/Canh Dan Premium & Good
  const starAniseSubcategories = [
    { id: "star-anise-autumn", name: "Autumn", hasSubcategories: true },
    { id: "star-anise-tuquy", name: "Tu Quy", hasSubcategories: true },
    { id: "star-anise-candhan", name: "Canh Dan", hasSubcategories: true },
    ...products
      .filter((p) => p.category === "Star Anise" && !STAR_ANISE_EXPANDABLE_IDS.includes(p.id))
      .map((p) => ({ id: p.id, name: p.name })),
  ];
  const greenCoffeeSubcategories = products
    .filter((p) => p.category === "Green Coffee Beans")
    .map((p) => ({ id: p.id, name: p.name }));

  // Helper function to close all submenus (desktop)
  const closeAllSubmenus = () => {
    setCashewSubmenuOpen(false);
    setRoastedSubmenuOpen(false);
    setWw320SubmenuOpen(false);
    setPepperSubmenuOpen(false);
    setBlackPepperSubmenuOpen(false);
    setDesiccatedCoconutSubmenuOpen(false);
    setDesiccatedCoconutFineSubmenuOpen(false);
    setDesiccatedCoconutMediumSubmenuOpen(false);
    setGingerSubmenuOpen(false);
    setWholeGingerSubmenuOpen(false);
    setSliceGingerSubmenuOpen(false);
    setCardamomSubmenuOpen(false);
    setCassiaSubmenuOpen(false);
    setCassiaPressedSubmenuOpen(false);
    setCassiaLongStickSubmenuOpen(false);
    setCassiaStickSubmenuOpen(false);
    setCassiaPowderSubmenuOpen(false);
    setSeedsSubmenuOpen(false);
    setPumpkinSeedsSubmenuOpen(false);
    setSunflowerSeedsSubmenuOpen(false);
    setPeanutsSubmenuOpen(false);
    setAlmondsSubmenuOpen(false);
    setStarAniseSubmenuOpen(false);
    setStarAniseAutumnSubmenuOpen(false);
    setStarAniseTuquySubmenuOpen(false);
    setStarAniseCandhanSubmenuOpen(false);
    setGreenCoffeeSubmenuOpen(false);
  };

  // Helper function to close all mobile submenus
  const closeAllMobileSubmenus = () => {
    setMobileCashewSubmenuOpen(false);
    setMobileRoastedSubmenuOpen(false);
    setMobileWw320SubmenuOpen(false);
    setMobilePepperSubmenuOpen(false);
    setMobileBlackPepperSubmenuOpen(false);
    setMobileDesiccatedCoconutSubmenuOpen(false);
    setMobileDesiccatedCoconutFineSubmenuOpen(false);
    setMobileDesiccatedCoconutMediumSubmenuOpen(false);
    setMobileGingerSubmenuOpen(false);
    setMobileWholeGingerSubmenuOpen(false);
    setMobileSliceGingerSubmenuOpen(false);
    setMobileCardamomSubmenuOpen(false);
    setMobileCassiaSubmenuOpen(false);
    setMobileCassiaPressedSubmenuOpen(false);
    setMobileCassiaLongStickSubmenuOpen(false);
    setMobileCassiaStickSubmenuOpen(false);
    setMobileCassiaPowderSubmenuOpen(false);
    setMobileSeedsSubmenuOpen(false);
    setMobilePumpkinSeedsSubmenuOpen(false);
    setMobileSunflowerSeedsSubmenuOpen(false);
    setMobilePeanutsSubmenuOpen(false);
    setMobileAlmondsSubmenuOpen(false);
    setMobileStarAniseSubmenuOpen(false);
    setMobileStarAniseAutumnSubmenuOpen(false);
    setMobileStarAniseTuquySubmenuOpen(false);
    setMobileStarAniseCandhanSubmenuOpen(false);
    setMobileGreenCoffeeSubmenuOpen(false);
  };

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
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 py-2 text-white text-[11px] sm:text-xs font-medium sm:border-b sm:border-white/30">
          <div className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1">
              ✉ <a href="mailto:kashif@lion-lotus.co" className="hover:text-[#FFD479]">kashif@lion-lotus.co</a>
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
            className="h-14 w-auto object-contain drop-shadow-lg"
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
                setPepperSubmenuOpen(false);
                setBlackPepperSubmenuOpen(false);
                setDesiccatedCoconutSubmenuOpen(false);
                setGingerSubmenuOpen(false);
                setWholeGingerSubmenuOpen(false);
                setSliceGingerSubmenuOpen(false);
                setCardamomSubmenuOpen(false);
                setCassiaSubmenuOpen(false);
                setCassiaPressedSubmenuOpen(false);
                setCassiaLongStickSubmenuOpen(false);
                setCassiaStickSubmenuOpen(false);
                setCassiaPowderSubmenuOpen(false);
                setSeedsSubmenuOpen(false);
                setRoastedSubmenuOpen(false);
                setWw320SubmenuOpen(false);
                setStarAniseSubmenuOpen(false);
                setStarAniseAutumnSubmenuOpen(false);
                setStarAniseTuquySubmenuOpen(false);
                setStarAniseCandhanSubmenuOpen(false);
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
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                  style={{ minWidth: "520px", position: "absolute" }}
              >
                <Link
                  to="/products"
                  onClick={() => setProductsDropdownOpen(false)}
                  className="block px-4 py-2.5 hover:bg-gray-50 text-sm font-semibold text-[#0D47A1] border-b border-gray-100"
                >
                  All Products
                </Link>
                <div className="grid grid-cols-2 gap-0">
                {productCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className="relative col-span-1"
                  >
                    {category.hasSubcategories ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                        }}
                      >
                        <button
                          onMouseEnter={() => {
                            if (dropdownTimeoutRef.current) {
                              clearTimeout(dropdownTimeoutRef.current);
                            }
                            setProductsDropdownOpen(true);
                          }}
                          onClick={() => {
                            // Check if the clicked category is already open
                            let isCurrentlyOpen = false;
                            if (category.name === "Cashew Nuts") {
                              isCurrentlyOpen = cashewSubmenuOpen;
                            } else if (category.name === "Pepper") {
                              isCurrentlyOpen = pepperSubmenuOpen;
                            } else if (category.name === "Desiccated Coconut") {
                              isCurrentlyOpen = desiccatedCoconutSubmenuOpen;
                            } else if (category.name === "Fresh Ginger") {
                              isCurrentlyOpen = gingerSubmenuOpen;
                            } else if (category.name === "Cardamom") {
                              isCurrentlyOpen = cardamomSubmenuOpen;
                            } else if (category.name === "CASSIA/CINNAMON") {
                              isCurrentlyOpen = cassiaSubmenuOpen;
                            } else if (category.name === "Seeds") {
                              isCurrentlyOpen = seedsSubmenuOpen;
                            } else if (category.name === "Peanuts") {
                              isCurrentlyOpen = peanutsSubmenuOpen;
                            } else if (category.name === "Almonds") {
                              isCurrentlyOpen = almondsSubmenuOpen;
                            } else if (category.name === "Star Anise") {
                              isCurrentlyOpen = starAniseSubmenuOpen;
                            } else if (category.name === "Green Coffee Beans") {
                              isCurrentlyOpen = greenCoffeeSubmenuOpen;
                            }
                            
                            // Always close all submenus first
                            closeAllSubmenus();
                            
                            // Then open the clicked one only if it wasn't already open
                            if (!isCurrentlyOpen) {
                              if (category.name === "Cashew Nuts") {
                                setCashewSubmenuOpen(true);
                              } else if (category.name === "Pepper") {
                                setPepperSubmenuOpen(true);
                              } else if (category.name === "Desiccated Coconut") {
                                setDesiccatedCoconutSubmenuOpen(true);
                              } else if (category.name === "Fresh Ginger") {
                                setGingerSubmenuOpen(true);
                              } else if (category.name === "Cardamom") {
                                setCardamomSubmenuOpen(true);
                              } else if (category.name === "CASSIA/CINNAMON") {
                                setCassiaSubmenuOpen(true);
                              } else if (category.name === "Seeds") {
                                setSeedsSubmenuOpen(true);
                              } else if (category.name === "Peanuts") {
                                setPeanutsSubmenuOpen(true);
                              } else if (category.name === "Almonds") {
                                setAlmondsSubmenuOpen(true);
                              } else if (category.name === "Star Anise") {
                                setStarAniseSubmenuOpen(true);
                              } else if (category.name === "Green Coffee Beans") {
                                setGreenCoffeeSubmenuOpen(true);
                              }
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
                              (category.name === "Pepper" && pepperSubmenuOpen) ||
                              (category.name === "Desiccated Coconut" && desiccatedCoconutSubmenuOpen) ||
                              (category.name === "Fresh Ginger" && gingerSubmenuOpen) ||
                              (category.name === "Cardamom" && cardamomSubmenuOpen) ||
                              (category.name === "CASSIA/CINNAMON" && cassiaSubmenuOpen) ||
                              (category.name === "Seeds" && seedsSubmenuOpen) ||
                              (category.name === "Peanuts" && peanutsSubmenuOpen) ||
                              (category.name === "Almonds" && almondsSubmenuOpen) ||
                              (category.name === "Star Anise" && starAniseSubmenuOpen) ||
                              (category.name === "Green Coffee Beans" && greenCoffeeSubmenuOpen)
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
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                                setRoastedSubmenuOpen(false);
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
                              if (subcat.hasSubcategories && subcat.id === "roasted") {
                                setRoastedSubmenuOpen(true);
                                setWw320SubmenuOpen(false);
                              }
                              if (subcat.hasSubcategories && subcat.id === "ww320") {
                                setWw320SubmenuOpen(true);
                                setRoastedSubmenuOpen(false);
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
                                  if (subcat.id === "roasted") {
                                    setRoastedSubmenuOpen(true);
                                    setWw320SubmenuOpen(false);
                                  }
                                  if (subcat.id === "ww320") {
                                    setWw320SubmenuOpen(true);
                                    setRoastedSubmenuOpen(false);
                                  }
                                }}
                                onClick={() => {
                                  if (subcat.id === "roasted") {
                                    setRoastedSubmenuOpen(!roastedSubmenuOpen);
                                    setWw320SubmenuOpen(false);
                                  }
                                  if (subcat.id === "ww320") {
                                    setWw320SubmenuOpen(!ww320SubmenuOpen);
                                    setRoastedSubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${(subcat.id === "roasted" && roastedSubmenuOpen) || (subcat.id === "ww320" && ww320SubmenuOpen) ? "rotate-90" : ""}`}
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
                            {/* Roasted Submenu */}
                            {subcat.hasSubcategories && subcat.id === "roasted" && roastedSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCashewSubmenuOpen(true);
                                  setRoastedSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setProductsDropdownOpen(false);
                                    setCashewSubmenuOpen(false);
                                    setRoastedSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {roastedSubcategories.map((roastedSubcat) => (
                                  <button
                                    key={roastedSubcat.id}
                                    onClick={() => handleProductClick(roastedSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {roastedSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* WW320 Submenu */}
                            {subcat.hasSubcategories && subcat.id === "ww320" && ww320SubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                    {/* Pepper Submenu */}
                    {category.hasSubcategories && category.name === "Pepper" && pepperSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setPepperSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setPepperSubmenuOpen(false);
                            setBlackPepperSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {pepperSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setPepperSubmenuOpen(true);
                              if (subcat.hasSubcategories && subcat.id === "blackPepper") {
                                setBlackPepperSubmenuOpen(true);
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
                                  setPepperSubmenuOpen(true);
                                  setBlackPepperSubmenuOpen(true);
                                }}
                                onClick={() => setBlackPepperSubmenuOpen(!blackPepperSubmenuOpen)}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${blackPepperSubmenuOpen ? "rotate-90" : ""}`}
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
                            {/* Black Pepper Submenu */}
                            {subcat.hasSubcategories && subcat.id === "blackPepper" && blackPepperSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setPepperSubmenuOpen(true);
                                  setBlackPepperSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setProductsDropdownOpen(false);
                                    setPepperSubmenuOpen(false);
                                    setBlackPepperSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {blackPepperSubcategories.map((bpSubcat) => (
                                  <button
                                    key={bpSubcat.id}
                                    onClick={() => handleProductClick(bpSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {bpSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Desiccated Coconut Submenu - Fine & Medium expandable */}
                    {category.hasSubcategories && category.name === "Desiccated Coconut" && desiccatedCoconutSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                            setDesiccatedCoconutFineSubmenuOpen(false);
                            setDesiccatedCoconutMediumSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {desiccatedCoconutSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setDesiccatedCoconutSubmenuOpen(true);
                              if (subcat.hasSubcategories) {
                                setDesiccatedCoconutFineSubmenuOpen(subcat.id === "dc-fine");
                                setDesiccatedCoconutMediumSubmenuOpen(subcat.id === "dc-medium");
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
                                  setDesiccatedCoconutSubmenuOpen(true);
                                  setDesiccatedCoconutFineSubmenuOpen(subcat.id === "dc-fine");
                                  setDesiccatedCoconutMediumSubmenuOpen(subcat.id === "dc-medium");
                                }}
                                onClick={() => {
                                  if (subcat.id === "dc-fine") {
                                    setDesiccatedCoconutFineSubmenuOpen(!desiccatedCoconutFineSubmenuOpen);
                                    setDesiccatedCoconutMediumSubmenuOpen(false);
                                  } else if (subcat.id === "dc-medium") {
                                    setDesiccatedCoconutMediumSubmenuOpen(!desiccatedCoconutMediumSubmenuOpen);
                                    setDesiccatedCoconutFineSubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${(subcat.id === "dc-fine" && desiccatedCoconutFineSubmenuOpen) || (subcat.id === "dc-medium" && desiccatedCoconutMediumSubmenuOpen) ? "rotate-90" : ""}`}
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
                            {subcat.hasSubcategories && subcat.id === "dc-fine" && desiccatedCoconutFineSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                  setProductsDropdownOpen(true);
                                  setDesiccatedCoconutSubmenuOpen(true);
                                  setDesiccatedCoconutFineSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setDesiccatedCoconutSubmenuOpen(false);
                                    setDesiccatedCoconutFineSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {desiccatedCoconutFineSubcategories.map((item) => (
                                  <button key={item.id} onClick={() => handleProductClick(item.id)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors">{item.name}</button>
                                ))}
                              </div>
                            )}
                            {subcat.hasSubcategories && subcat.id === "dc-medium" && desiccatedCoconutMediumSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                  setProductsDropdownOpen(true);
                                  setDesiccatedCoconutSubmenuOpen(true);
                                  setDesiccatedCoconutMediumSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setDesiccatedCoconutSubmenuOpen(false);
                                    setDesiccatedCoconutMediumSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {desiccatedCoconutMediumSubcategories.map((item) => (
                                  <button key={item.id} onClick={() => handleProductClick(item.id)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors">{item.name}</button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Cardamom Submenu */}
                    {category.hasSubcategories && category.name === "Cardamom" && cardamomSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setCardamomSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setCardamomSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {cardamomSubcategories.map((subcat) => (
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
                    {/* Cassia/Cinnamon Submenu - same pattern as Cashew Nuts */}
                    {category.hasSubcategories && category.name === "CASSIA/CINNAMON" && cassiaSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setCassiaSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setCassiaSubmenuOpen(false);
                            setCassiaPressedSubmenuOpen(false);
                            setCassiaLongStickSubmenuOpen(false);
                            setCassiaStickSubmenuOpen(false);
                            setCassiaPowderSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {cassiaSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setCassiaSubmenuOpen(true);
                              if (subcat.hasSubcategories) {
                                setCassiaPressedSubmenuOpen(subcat.id === "cassia-pressed");
                                setCassiaLongStickSubmenuOpen(subcat.id === "cassia-long-stick");
                                setCassiaStickSubmenuOpen(subcat.id === "cassia-stick");
                                setCassiaPowderSubmenuOpen(subcat.id === "cassia-powder");
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
                                  setCassiaSubmenuOpen(true);
                                  setCassiaPressedSubmenuOpen(subcat.id === "cassia-pressed");
                                  setCassiaLongStickSubmenuOpen(subcat.id === "cassia-long-stick");
                                  setCassiaStickSubmenuOpen(subcat.id === "cassia-stick");
                                  setCassiaPowderSubmenuOpen(subcat.id === "cassia-powder");
                                }}
                                onClick={() => {
                                  if (subcat.id === "cassia-pressed") {
                                    setCassiaPressedSubmenuOpen(!cassiaPressedSubmenuOpen);
                                    setCassiaLongStickSubmenuOpen(false);
                                    setCassiaStickSubmenuOpen(false);
                                    setCassiaPowderSubmenuOpen(false);
                                  } else if (subcat.id === "cassia-long-stick") {
                                    setCassiaLongStickSubmenuOpen(!cassiaLongStickSubmenuOpen);
                                    setCassiaPressedSubmenuOpen(false);
                                    setCassiaStickSubmenuOpen(false);
                                    setCassiaPowderSubmenuOpen(false);
                                  } else if (subcat.id === "cassia-stick") {
                                    setCassiaStickSubmenuOpen(!cassiaStickSubmenuOpen);
                                    setCassiaPressedSubmenuOpen(false);
                                    setCassiaLongStickSubmenuOpen(false);
                                    setCassiaPowderSubmenuOpen(false);
                                  } else if (subcat.id === "cassia-powder") {
                                    setCassiaPowderSubmenuOpen(!cassiaPowderSubmenuOpen);
                                    setCassiaPressedSubmenuOpen(false);
                                    setCassiaLongStickSubmenuOpen(false);
                                    setCassiaStickSubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${(subcat.id === "cassia-pressed" && cassiaPressedSubmenuOpen) || (subcat.id === "cassia-long-stick" && cassiaLongStickSubmenuOpen) || (subcat.id === "cassia-stick" && cassiaStickSubmenuOpen) || (subcat.id === "cassia-powder" && cassiaPowderSubmenuOpen) ? "rotate-90" : ""}`}
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
                            {/* Cassia Pressed flyout */}
                            {subcat.hasSubcategories && subcat.id === "cassia-pressed" && cassiaPressedSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCassiaSubmenuOpen(true);
                                  setCassiaPressedSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setCassiaSubmenuOpen(false);
                                    setCassiaPressedSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {cassiaPressedSubcategories.map((cassiaPressedSubcat) => (
                                  <button
                                    key={cassiaPressedSubcat.id}
                                    onClick={() => handleProductClick(cassiaPressedSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {cassiaPressedSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* Cassia Long Stick flyout */}
                            {subcat.hasSubcategories && subcat.id === "cassia-long-stick" && cassiaLongStickSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCassiaSubmenuOpen(true);
                                  setCassiaLongStickSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setCassiaSubmenuOpen(false);
                                    setCassiaLongStickSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {cassiaLongStickSubcategories.map((cassiaLongStickSubcat) => (
                                  <button
                                    key={cassiaLongStickSubcat.id}
                                    onClick={() => handleProductClick(cassiaLongStickSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {cassiaLongStickSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* Cassia Stick flyout */}
                            {subcat.hasSubcategories && subcat.id === "cassia-stick" && cassiaStickSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCassiaSubmenuOpen(true);
                                  setCassiaStickSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setCassiaSubmenuOpen(false);
                                    setCassiaStickSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {cassiaStickSubcategories.map((cassiaStickSubcat) => (
                                  <button
                                    key={cassiaStickSubcat.id}
                                    onClick={() => handleProductClick(cassiaStickSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {cassiaStickSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* Cassia Powder flyout */}
                            {subcat.hasSubcategories && subcat.id === "cassia-powder" && cassiaPowderSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) {
                                    clearTimeout(dropdownTimeoutRef.current);
                                  }
                                  setProductsDropdownOpen(true);
                                  setCassiaSubmenuOpen(true);
                                  setCassiaPowderSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setCassiaSubmenuOpen(false);
                                    setCassiaPowderSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {cassiaPowderSubcategories.map((cassiaPowderSubcat) => (
                                  <button
                                    key={cassiaPowderSubcat.id}
                                    onClick={() => handleProductClick(cassiaPowderSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {cassiaPowderSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Seeds Submenu */}
                    {category.hasSubcategories && category.name === "Seeds" && seedsSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setSeedsSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setSeedsSubmenuOpen(false);
                            setPumpkinSeedsSubmenuOpen(false);
                            setSunflowerSeedsSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {seedsSubcategories.map((subcat) => (
                          <div key={subcat.id} className="relative">
                            {subcat.hasSubcategories ? (
                              <button
                                onMouseEnter={() => {
                                  if (subcat.name === "Pumpkin Seeds") {
                                    setPumpkinSeedsSubmenuOpen(true);
                                    setSunflowerSeedsSubmenuOpen(false);
                                  } else if (subcat.name === "Sunflower Seeds") {
                                    setSunflowerSeedsSubmenuOpen(true);
                                    setPumpkinSeedsSubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                {subcat.name}
                                <ChevronRight size={14} className="text-gray-400" />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleProductClick(subcat.id)}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                              >
                                {subcat.name}
                              </button>
                            )}
                            {/* Pumpkin Seeds Sub-submenu */}
                            {subcat.name === "Pumpkin Seeds" && pumpkinSeedsSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1300]"
                                onMouseEnter={() => {
                                  setPumpkinSeedsSubmenuOpen(true);
                                  setSeedsSubmenuOpen(true);
                                  setProductsDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                  setPumpkinSeedsSubmenuOpen(false);
                                }}
                              >
                                {pumpkinSeedsSubcategories.map((pumpkinSubcat) => (
                                  <button
                                    key={pumpkinSubcat.id}
                                    onClick={() => handleProductClick(pumpkinSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {pumpkinSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                            {/* Sunflower Seeds Sub-submenu */}
                            {subcat.name === "Sunflower Seeds" && sunflowerSeedsSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1300]"
                                onMouseEnter={() => {
                                  setSunflowerSeedsSubmenuOpen(true);
                                  setSeedsSubmenuOpen(true);
                                  setProductsDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                  setSunflowerSeedsSubmenuOpen(false);
                                }}
                              >
                                {sunflowerSeedsSubcategories.map((sunflowerSubcat) => (
                                  <button
                                    key={sunflowerSubcat.id}
                                    onClick={() => handleProductClick(sunflowerSubcat.id)}
                                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors"
                                  >
                                    {sunflowerSubcat.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Peanuts Submenu */}
                    {category.hasSubcategories && category.name === "Peanuts" && peanutsSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setPeanutsSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setPeanutsSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {peanutsSubcategories.map((subcat) => (
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
                    {/* Almonds Submenu */}
                    {category.hasSubcategories && category.name === "Almonds" && almondsSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setAlmondsSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setAlmondsSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {almondsSubcategories.map((subcat) => (
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
                    {/* Almonds Submenu */}
                    {category.hasSubcategories && category.name === "Almonds" && almondsSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setAlmondsSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setAlmondsSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {almondsSubcategories.map((subcat) => (
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
                    {/* Star Anise Submenu - Autumn, Tu Quy, Canh Dan expandable with Premium/Good */}
                    {category.hasSubcategories && category.name === "Star Anise" && starAniseSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setStarAniseSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setStarAniseSubmenuOpen(false);
                            setStarAniseAutumnSubmenuOpen(false);
                            setStarAniseTuquySubmenuOpen(false);
                            setStarAniseCandhanSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {starAniseSubcategories.map((subcat) => (
                          <div 
                            key={subcat.id} 
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                              }
                              setProductsDropdownOpen(true);
                              setStarAniseSubmenuOpen(true);
                              if (subcat.hasSubcategories) {
                                setStarAniseAutumnSubmenuOpen(subcat.id === "star-anise-autumn");
                                setStarAniseTuquySubmenuOpen(subcat.id === "star-anise-tuquy");
                                setStarAniseCandhanSubmenuOpen(subcat.id === "star-anise-candhan");
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
                                  setStarAniseSubmenuOpen(true);
                                  setStarAniseAutumnSubmenuOpen(subcat.id === "star-anise-autumn");
                                  setStarAniseTuquySubmenuOpen(subcat.id === "star-anise-tuquy");
                                  setStarAniseCandhanSubmenuOpen(subcat.id === "star-anise-candhan");
                                }}
                                onClick={() => {
                                  if (subcat.id === "star-anise-autumn") {
                                    setStarAniseAutumnSubmenuOpen(!starAniseAutumnSubmenuOpen);
                                    setStarAniseTuquySubmenuOpen(false);
                                    setStarAniseCandhanSubmenuOpen(false);
                                  } else if (subcat.id === "star-anise-tuquy") {
                                    setStarAniseTuquySubmenuOpen(!starAniseTuquySubmenuOpen);
                                    setStarAniseAutumnSubmenuOpen(false);
                                    setStarAniseCandhanSubmenuOpen(false);
                                  } else if (subcat.id === "star-anise-candhan") {
                                    setStarAniseCandhanSubmenuOpen(!starAniseCandhanSubmenuOpen);
                                    setStarAniseAutumnSubmenuOpen(false);
                                    setStarAniseTuquySubmenuOpen(false);
                                  }
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors flex items-center justify-between"
                              >
                                <span>{subcat.name}</span>
                                <ChevronRight 
                                  size={14} 
                                  className={`text-gray-400 transition-transform duration-200 ${(subcat.id === "star-anise-autumn" && starAniseAutumnSubmenuOpen) || (subcat.id === "star-anise-tuquy" && starAniseTuquySubmenuOpen) || (subcat.id === "star-anise-candhan" && starAniseCandhanSubmenuOpen) ? "rotate-90" : ""}`}
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
                            {/* Autumn flyout: Premium, Good */}
                            {subcat.hasSubcategories && subcat.id === "star-anise-autumn" && starAniseAutumnSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                  setProductsDropdownOpen(true);
                                  setStarAniseSubmenuOpen(true);
                                  setStarAniseAutumnSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setStarAniseSubmenuOpen(false);
                                    setStarAniseAutumnSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {starAniseAutumnSubcategories.map((item) => (
                                  <button key={item.id} onClick={() => handleProductClick(item.id)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors">{item.name}</button>
                                ))}
                              </div>
                            )}
                            {/* Tu Quy flyout: Premium, Good */}
                            {subcat.hasSubcategories && subcat.id === "star-anise-tuquy" && starAniseTuquySubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                  setProductsDropdownOpen(true);
                                  setStarAniseSubmenuOpen(true);
                                  setStarAniseTuquySubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setStarAniseSubmenuOpen(false);
                                    setStarAniseTuquySubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {starAniseTuquySubcategories.map((item) => (
                                  <button key={item.id} onClick={() => handleProductClick(item.id)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors">{item.name}</button>
                                ))}
                              </div>
                            )}
                            {/* Canh Dan flyout: Premium, Good */}
                            {subcat.hasSubcategories && subcat.id === "star-anise-candhan" && starAniseCandhanSubmenuOpen && (
                              <div 
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
                                onMouseEnter={() => {
                                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                                  setProductsDropdownOpen(true);
                                  setStarAniseSubmenuOpen(true);
                                  setStarAniseCandhanSubmenuOpen(true);
                                }}
                                onMouseLeave={() => {
                                  dropdownTimeoutRef.current = setTimeout(() => {
                                    setStarAniseSubmenuOpen(false);
                                    setStarAniseCandhanSubmenuOpen(false);
                                  }, 200);
                                }}
                              >
                                {starAniseCandhanSubcategories.map((item) => (
                                  <button key={item.id} onClick={() => handleProductClick(item.id)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-800 hover:text-[#0D47A1] transition-colors">{item.name}</button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Green Coffee Beans Submenu */}
                    {category.hasSubcategories && category.name === "Green Coffee Beans" && greenCoffeeSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                          setProductsDropdownOpen(true);
                          setGreenCoffeeSubmenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeoutRef.current = setTimeout(() => {
                            setProductsDropdownOpen(false);
                            setGreenCoffeeSubmenuOpen(false);
                          }, 200);
                        }}
                      >
                        {greenCoffeeSubcategories.map((subcat) => (
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
                    {category.hasSubcategories && category.name === "Fresh Ginger" && gingerSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                            // Check if the clicked category is already open
                            let isCurrentlyOpen = false;
                            if (category.name === "Cashew Nuts") {
                              isCurrentlyOpen = mobileCashewSubmenuOpen;
                            } else if (category.name === "Pepper") {
                              isCurrentlyOpen = mobilePepperSubmenuOpen;
                            } else if (category.name === "Desiccated Coconut") {
                              isCurrentlyOpen = mobileDesiccatedCoconutSubmenuOpen;
                            } else if (category.name === "Fresh Ginger") {
                              isCurrentlyOpen = mobileGingerSubmenuOpen;
                            } else if (category.name === "Cardamom") {
                              isCurrentlyOpen = mobileCardamomSubmenuOpen;
                            } else if (category.name === "CASSIA/CINNAMON") {
                              isCurrentlyOpen = mobileCassiaSubmenuOpen;
                            } else if (category.name === "Seeds") {
                              isCurrentlyOpen = mobileSeedsSubmenuOpen;
                            } else if (category.name === "Peanuts") {
                              isCurrentlyOpen = mobilePeanutsSubmenuOpen;
                            } else if (category.name === "Almonds") {
                              isCurrentlyOpen = mobileAlmondsSubmenuOpen;
                            } else if (category.name === "Star Anise") {
                              isCurrentlyOpen = mobileStarAniseSubmenuOpen;
                            } else if (category.name === "Green Coffee Beans") {
                              isCurrentlyOpen = mobileGreenCoffeeSubmenuOpen;
                            }
                            
                            // Always close all mobile submenus first
                            closeAllMobileSubmenus();
                            
                            // Then open the clicked one only if it wasn't already open
                            if (!isCurrentlyOpen) {
                              if (category.name === "Cashew Nuts") {
                                setMobileCashewSubmenuOpen(true);
                              } else if (category.name === "Pepper") {
                                setMobilePepperSubmenuOpen(true);
                              } else if (category.name === "Desiccated Coconut") {
                                setMobileDesiccatedCoconutSubmenuOpen(true);
                              } else if (category.name === "Fresh Ginger") {
                                setMobileGingerSubmenuOpen(true);
                              } else if (category.name === "Cardamom") {
                                setMobileCardamomSubmenuOpen(true);
                              } else if (category.name === "CASSIA/CINNAMON") {
                                setMobileCassiaSubmenuOpen(true);
                              } else if (category.name === "Seeds") {
                                setMobileSeedsSubmenuOpen(true);
                              } else if (category.name === "Peanuts") {
                                setMobilePeanutsSubmenuOpen(true);
                              } else if (category.name === "Almonds") {
                                setMobileAlmondsSubmenuOpen(true);
                              } else if (category.name === "Star Anise") {
                                setMobileStarAniseSubmenuOpen(true);
                              } else if (category.name === "Green Coffee Beans") {
                                setMobileGreenCoffeeSubmenuOpen(true);
                              }
                            }
                          }}
                            className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[14px] text-gray-700 hover:text-[#0D47A1] hover:bg-gray-50"
                          >
                            <span>{category.name}</span>
                            <ChevronRight 
                              size={14} 
                              className={`transition-transform duration-200 ${
                                (category.name === "Cashew Nuts" && mobileCashewSubmenuOpen) ||
                                (category.name === "Pepper" && mobilePepperSubmenuOpen) ||
                                (category.name === "Desiccated Coconut" && mobileDesiccatedCoconutSubmenuOpen) ||
                                (category.name === "Fresh Ginger" && mobileGingerSubmenuOpen) ||
                                (category.name === "Cardamom" && mobileCardamomSubmenuOpen) ||
                                (category.name === "CASSIA/CINNAMON" && mobileCassiaSubmenuOpen) ||
                                (category.name === "Seeds" && mobileSeedsSubmenuOpen) ||
                                (category.name === "Peanuts" && mobilePeanutsSubmenuOpen) ||
                                (category.name === "Almonds" && mobileAlmondsSubmenuOpen) ||
                                (category.name === "Star Anise" && mobileStarAniseSubmenuOpen) ||
                                (category.name === "Green Coffee Beans" && mobileGreenCoffeeSubmenuOpen)
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
                                          if (subcat.id === "roasted") {
                                            setMobileRoastedSubmenuOpen(!mobileRoastedSubmenuOpen);
                                            setMobileWw320SubmenuOpen(false);
                                          }
                                          if (subcat.id === "ww320") {
                                            setMobileWw320SubmenuOpen(!mobileWw320SubmenuOpen);
                                            setMobileRoastedSubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${(subcat.id === "roasted" && mobileRoastedSubmenuOpen) || (subcat.id === "ww320" && mobileWw320SubmenuOpen) ? "rotate-90" : ""}`}
                                        />
                                      </button>
                                      {subcat.id === "roasted" && mobileRoastedSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {roastedSubcategories.map((roastedSubcat) => (
                                            <button
                                              key={roastedSubcat.id}
                                              onClick={() => {
                                                handleProductClick(roastedSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileCashewSubmenuOpen(false);
                                                setMobileRoastedSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {roastedSubcat.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
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
                          {category.name === "Pepper" && mobilePepperSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {pepperSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          setMobileBlackPepperSubmenuOpen(!mobileBlackPepperSubmenuOpen);
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${mobileBlackPepperSubmenuOpen ? "rotate-90" : ""}`}
                                        />
                                      </button>
                                      {subcat.id === "blackPepper" && mobileBlackPepperSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {blackPepperSubcategories.map((bpSubcat) => (
                                            <button
                                              key={bpSubcat.id}
                                              onClick={() => {
                                                handleProductClick(bpSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobilePepperSubmenuOpen(false);
                                                setMobileBlackPepperSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-500 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {bpSubcat.name}
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
                                        setMobilePepperSubmenuOpen(false);
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
                          {category.name === "Desiccated Coconut" && mobileDesiccatedCoconutSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {desiccatedCoconutSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (subcat.id === "dc-fine") {
                                            setMobileDesiccatedCoconutFineSubmenuOpen(!mobileDesiccatedCoconutFineSubmenuOpen);
                                            setMobileDesiccatedCoconutMediumSubmenuOpen(false);
                                          } else if (subcat.id === "dc-medium") {
                                            setMobileDesiccatedCoconutMediumSubmenuOpen(!mobileDesiccatedCoconutMediumSubmenuOpen);
                                            setMobileDesiccatedCoconutFineSubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${
                                            (subcat.id === "dc-fine" && mobileDesiccatedCoconutFineSubmenuOpen) ||
                                            (subcat.id === "dc-medium" && mobileDesiccatedCoconutMediumSubmenuOpen)
                                              ? "rotate-90" : ""
                                          }`}
                                        />
                                      </button>
                                      {subcat.id === "dc-fine" && mobileDesiccatedCoconutFineSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {desiccatedCoconutFineSubcategories.map((item) => (
                                            <button
                                              key={item.id}
                                              onClick={() => {
                                                handleProductClick(item.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileDesiccatedCoconutSubmenuOpen(false);
                                                setMobileDesiccatedCoconutFineSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {item.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "dc-medium" && mobileDesiccatedCoconutMediumSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {desiccatedCoconutMediumSubcategories.map((item) => (
                                            <button
                                              key={item.id}
                                              onClick={() => {
                                                handleProductClick(item.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileDesiccatedCoconutSubmenuOpen(false);
                                                setMobileDesiccatedCoconutMediumSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {item.name}
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
                                        setMobileDesiccatedCoconutSubmenuOpen(false);
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
                          {category.name === "Fresh Ginger" && mobileGingerSubmenuOpen && (
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
                          {category.name === "Cardamom" && mobileCardamomSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {cardamomSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileCardamomSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "CASSIA/CINNAMON" && mobileCassiaSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {cassiaSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (subcat.id === "cassia-pressed") {
                                            setMobileCassiaPressedSubmenuOpen(!mobileCassiaPressedSubmenuOpen);
                                            setMobileCassiaLongStickSubmenuOpen(false);
                                            setMobileCassiaStickSubmenuOpen(false);
                                            setMobileCassiaPowderSubmenuOpen(false);
                                          } else if (subcat.id === "cassia-long-stick") {
                                            setMobileCassiaLongStickSubmenuOpen(!mobileCassiaLongStickSubmenuOpen);
                                            setMobileCassiaPressedSubmenuOpen(false);
                                            setMobileCassiaStickSubmenuOpen(false);
                                            setMobileCassiaPowderSubmenuOpen(false);
                                          } else if (subcat.id === "cassia-stick") {
                                            setMobileCassiaStickSubmenuOpen(!mobileCassiaStickSubmenuOpen);
                                            setMobileCassiaPressedSubmenuOpen(false);
                                            setMobileCassiaLongStickSubmenuOpen(false);
                                            setMobileCassiaPowderSubmenuOpen(false);
                                          } else if (subcat.id === "cassia-powder") {
                                            setMobileCassiaPowderSubmenuOpen(!mobileCassiaPowderSubmenuOpen);
                                            setMobileCassiaPressedSubmenuOpen(false);
                                            setMobileCassiaLongStickSubmenuOpen(false);
                                            setMobileCassiaStickSubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight size={12} className={`transition-transform duration-200 ${(subcat.id === "cassia-pressed" && mobileCassiaPressedSubmenuOpen) || (subcat.id === "cassia-long-stick" && mobileCassiaLongStickSubmenuOpen) || (subcat.id === "cassia-stick" && mobileCassiaStickSubmenuOpen) || (subcat.id === "cassia-powder" && mobileCassiaPowderSubmenuOpen) ? "rotate-90" : ""}`} />
                                      </button>
                                      {subcat.id === "cassia-pressed" && mobileCassiaPressedSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {cassiaPressedSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileCassiaSubmenuOpen(false); setMobileCassiaPressedSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "cassia-long-stick" && mobileCassiaLongStickSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {cassiaLongStickSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileCassiaSubmenuOpen(false); setMobileCassiaLongStickSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "cassia-stick" && mobileCassiaStickSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {cassiaStickSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileCassiaSubmenuOpen(false); setMobileCassiaStickSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "cassia-powder" && mobileCassiaPowderSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {cassiaPowderSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileCassiaSubmenuOpen(false); setMobileCassiaPowderSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <button
                                      onClick={() => { handleProductClick(subcat.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileCassiaSubmenuOpen(false); }}
                                      className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                    >
                                      {subcat.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {category.name === "Seeds" && mobileSeedsSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {seedsSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (subcat.name === "Pumpkin Seeds") {
                                            setMobilePumpkinSeedsSubmenuOpen(!mobilePumpkinSeedsSubmenuOpen);
                                            setMobileSunflowerSeedsSubmenuOpen(false);
                                          } else if (subcat.name === "Sunflower Seeds") {
                                            setMobileSunflowerSeedsSubmenuOpen(!mobileSunflowerSeedsSubmenuOpen);
                                            setMobilePumpkinSeedsSubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight 
                                          size={12} 
                                          className={`transition-transform duration-200 ${
                                            (subcat.name === "Pumpkin Seeds" && mobilePumpkinSeedsSubmenuOpen) ||
                                            (subcat.name === "Sunflower Seeds" && mobileSunflowerSeedsSubmenuOpen)
                                              ? "rotate-90" : ""
                                          }`}
                                        />
                                      </button>
                                      {/* Pumpkin Seeds sub-submenu */}
                                      {subcat.name === "Pumpkin Seeds" && mobilePumpkinSeedsSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {pumpkinSeedsSubcategories.map((pumpkinSubcat) => (
                                            <button
                                              key={pumpkinSubcat.id}
                                              onClick={() => {
                                                handleProductClick(pumpkinSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileSeedsSubmenuOpen(false);
                                                setMobilePumpkinSeedsSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-500 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {pumpkinSubcat.name}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                      {/* Sunflower Seeds sub-submenu */}
                                      {subcat.name === "Sunflower Seeds" && mobileSunflowerSeedsSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {sunflowerSeedsSubcategories.map((sunflowerSubcat) => (
                                            <button
                                              key={sunflowerSubcat.id}
                                              onClick={() => {
                                                handleProductClick(sunflowerSubcat.id);
                                                setMenuOpen(false);
                                                setMobileProductsDropdownOpen(false);
                                                setMobileSeedsSubmenuOpen(false);
                                                setMobileSunflowerSeedsSubmenuOpen(false);
                                              }}
                                              className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-500 hover:text-[#0D47A1] hover:bg-gray-50"
                                            >
                                              {sunflowerSubcat.name}
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
                                        setMobileSeedsSubmenuOpen(false);
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
                          {category.name === "Peanuts" && mobilePeanutsSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {peanutsSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobilePeanutsSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "Almonds" && mobileAlmondsSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {almondsSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileAlmondsSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "Star Anise" && mobileStarAniseSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {starAniseSubcategories.map((subcat) => (
                                <div key={subcat.id}>
                                  {subcat.hasSubcategories ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (subcat.id === "star-anise-autumn") {
                                            setMobileStarAniseAutumnSubmenuOpen(!mobileStarAniseAutumnSubmenuOpen);
                                            setMobileStarAniseTuquySubmenuOpen(false);
                                            setMobileStarAniseCandhanSubmenuOpen(false);
                                          } else if (subcat.id === "star-anise-tuquy") {
                                            setMobileStarAniseTuquySubmenuOpen(!mobileStarAniseTuquySubmenuOpen);
                                            setMobileStarAniseAutumnSubmenuOpen(false);
                                            setMobileStarAniseCandhanSubmenuOpen(false);
                                          } else if (subcat.id === "star-anise-candhan") {
                                            setMobileStarAniseCandhanSubmenuOpen(!mobileStarAniseCandhanSubmenuOpen);
                                            setMobileStarAniseAutumnSubmenuOpen(false);
                                            setMobileStarAniseTuquySubmenuOpen(false);
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight size={12} className={`transition-transform duration-200 ${(subcat.id === "star-anise-autumn" && mobileStarAniseAutumnSubmenuOpen) || (subcat.id === "star-anise-tuquy" && mobileStarAniseTuquySubmenuOpen) || (subcat.id === "star-anise-candhan" && mobileStarAniseCandhanSubmenuOpen) ? "rotate-90" : ""}`} />
                                      </button>
                                      {subcat.id === "star-anise-autumn" && mobileStarAniseAutumnSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {starAniseAutumnSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileStarAniseSubmenuOpen(false); setMobileStarAniseAutumnSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "star-anise-tuquy" && mobileStarAniseTuquySubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {starAniseTuquySubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileStarAniseSubmenuOpen(false); setMobileStarAniseTuquySubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                      {subcat.id === "star-anise-candhan" && mobileStarAniseCandhanSubmenuOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                          {starAniseCandhanSubcategories.map((item) => (
                                            <button key={item.id} onClick={() => { handleProductClick(item.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileStarAniseSubmenuOpen(false); setMobileStarAniseCandhanSubmenuOpen(false); }} className="w-full text-left px-2 py-2 rounded-md text-[12px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50">{item.name}</button>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <button
                                      onClick={() => { handleProductClick(subcat.id); setMenuOpen(false); setMobileProductsDropdownOpen(false); setMobileStarAniseSubmenuOpen(false); }}
                                      className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                    >
                                      {subcat.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {category.name === "Green Coffee Beans" && mobileGreenCoffeeSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {greenCoffeeSubcategories.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileGreenCoffeeSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
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
              kashif@lion-lotus.co
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
