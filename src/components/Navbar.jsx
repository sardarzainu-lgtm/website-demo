import React, { useState } from "react";
import { Search, X, Menu } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// ✅ Import real logo
import logo from "../assets/logo.jpeg";

// ✅ Import product images
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


// 🌟 Premium Colors
const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";
const OFFWHITE = "#F6F6F6";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // ✅ FULL PRODUCT LIST (REQUIRED FOR SEARCH)
  const products = [
   { 
    id: 1, 
    name: "Cashew Nuts", 
    image: cashewnuts, 
    origin: "Goa, India", 
    moisture: "5%", 
    color: "Cream White" 
  },

  { 
    id: 2, 
    name: "Desiccated Coconut", 
    image: desiccatedCoconut, 
    origin: "Sri Lanka", 
    moisture: "3%", 
    color: "Pure White" 
  },

  { 
    id: 3, 
    name: "Copra Cup", 
    image: copraCup, 
    origin: "Philippines", 
    moisture: "6%", 
    color: "Light Brown" 
  },

  { 
    id: 4, 
    name: "Black Pepper", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12%", 
    color: "Dark Black" 
  },

  { 
    id: 5, 
    name: "White Pepper", 
    image: whitePepper, 
    origin: "Indonesia", 
    moisture: "12%", 
    color: "Off-White" 
  },

  { 
    id: 6, 
    name: "Dried Ginger", 
    image: driedGinger, 
    origin: "India", 
    moisture: "8%", 
    color: "Yellowish Brown" 
  },
 { 
    id: 7, 
    name: "Roasted & Salted Cashew Nuts", 
    image: roastedSaltedCashew, 
    origin: "Vietnam", 
    moisture: "4%", 
    color: "Light Golden" 
  },

  // 8️⃣ Cashew Nuts WW320
  { 
    id: 8, 
    name: "Cashew Nuts WW320", 
    image: ww320Cashew, 
    origin: "India", 
    moisture: "5%", 
    color: "Classic White" 
  },

  // 9️⃣ Cashew Nuts WW240
  { 
    id: 9, 
    name: "Cashew Nuts WW240", 
    image: ww240Cashew, 
    origin: "Vietnam", 
    moisture: "5%", 
    color: "Cream White" 
  },

  // 🔟 Cashew Nuts WW180
  { 
    id: 10, 
    name: "Cashew Nuts WW180", 
    image: ww180Cashew, 
    origin: "Brazil", 
    moisture: "5%", 
    color: "Ivory White" 
  },

  // 1️⃣1️⃣ Cashew Nuts WW450
  { 
    id: 11, 
    name: "Cashew Nuts WW450", 
    image: ww450Cashew, 
    origin: "Indonesia", 
    moisture: "5%", 
    color: "Off-White" 
  },

  // 1️⃣2️⃣ Cashew Nuts SK
  { 
    id: 12, 
    name: "Cashew Nuts SK", 
    image: cashewSK, 
    origin: "Vietnam", 
    moisture: "4%", 
    color: "Light Cream" 
  },

  // 1️⃣3️⃣ Cashew Nuts SL
  { 
    id: 13, 
    name: "Cashew Nuts SL", 
    image: cashewSL, 
    origin: "India", 
    moisture: "4%", 
    color: "Cream White" 
  },];

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
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">

      {/* TOP BAR */}
      <div className="py-2 px-4 border-b" style={{ background: OFFWHITE }}>
        <div className="max-w-7xl mx-auto text-gray-600 text-xs sm:text-sm flex justify-between">
          <span>kashif@lion-lotus.co</span>
          <span>HOTLINE +65-80350461 / +66 98281 8995</span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
         <img
  src={logo}
  alt="Logo"
  className="h-10 w-auto object-contain drop-shadow-lg"
/>




          <span className="hidden sm:block text-lg font-semibold" style={{ color: NAVY }}>
            Lion & Lotus Trading Co., Ltd
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">

          <Link
            to="/"
            className="relative"
            style={{ color: isActive("/") ? ROYAL : NAVY }}
          >
            Home
            {isActive("/") && (
              <span className="absolute left-0 bottom-0 w-full h-0.5" style={{ background: GOLD }}></span>
            )}
          </Link>

         

          <Link
            to="/products"
            className="relative"
            style={{ color: isActive("/products") ? ROYAL : NAVY }}
          >
            Product
            {isActive("/products") && (
              <span className="absolute left-0 bottom-0 w-full h-0.5" style={{ background: GOLD }}></span>
            )}
          </Link>


          <Link to="/factorypage" className="hover:text-[#0D47A1]" style={{ color: NAVY }}>
            Factory
          </Link>

           <Link
            to="/about"
            className="relative"
            style={{ color: isActive("/about") ? ROYAL : NAVY }}
          >
            About Us
            {isActive("/about") && (
              <span className="absolute left-0 bottom-0 w-full h-0.5" style={{ background: GOLD }}></span>
            )}
          </Link>
          <a
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
          </a>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-gray-600 hover:text-[#0D47A1]"
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#0D47A1]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="bg-white border-t px-4 py-3 relative z-[9999]">
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
              <div className="absolute left-0 right-0 bg-white shadow-lg rounded-md mt-2 max-h-60 overflow-y-auto z-[99999] border border-gray-200">

                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer"
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
     {menuOpen && (
  <div className="lg:hidden bg-white border-t p-4 flex flex-col space-y-4 text-base font-medium">
    <Link
      to="/"
      className="block w-full py-2 border-b border-gray-200 text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>
<Link
      to="/about"
      className="block w-full py-2 border-b border-gray-200 text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={() => setMenuOpen(false)}
    >
      About Us
    </Link>
    <Link
      to="/products"
      className="block w-full py-2 border-b border-gray-200 text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={() => setMenuOpen(false)}
    >
      Products
    </Link>

  <Link
      to="/factorypage"
      className="block w-full py-2 border-b border-gray-200 text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={() => setMenuOpen(false)}
    >
      Factory
    </Link>

    <button
      className="block w-full py-2 border-b border-gray-200 text-left text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={(e) => {
        setMenuOpen(false);
        handleAnchorClick(e, "#news");
      }}
    >
      News
    </button>

    <button
      className="block w-full py-2 text-left text-[15px] text-gray-800 hover:text-[#0D47A1]"
      onClick={(e) => {
        setMenuOpen(false);
        handleAnchorClick(e, "#contact");
      }}
    >
      Contact
    </button>
  </div>
)}

    </header>
  );
};

export default Navbar;
