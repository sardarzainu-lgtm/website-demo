import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// ✅ Import real logo
import logo from "../assets/logo.webp";

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
import nigellaSativa from "../assets/nigella-sativa.webp"
import chinesePeanut from "../assets/chinese-peanunt.webp"
import almond from "../assets/almond.webp"
import cloves from "../assets/cloves.webp"


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
  const [cardamomSubmenuOpen, setCardamomSubmenuOpen] = useState(false);
  const [cassiaSubmenuOpen, setCassiaSubmenuOpen] = useState(false);
  const [seedsSubmenuOpen, setSeedsSubmenuOpen] = useState(false);
  const [pumpkinSeedsSubmenuOpen, setPumpkinSeedsSubmenuOpen] = useState(false);
  const [sunflowerSeedsSubmenuOpen, setSunflowerSeedsSubmenuOpen] = useState(false);
  const [peanutsSubmenuOpen, setPeanutsSubmenuOpen] = useState(false);
  const [almondsSubmenuOpen, setAlmondsSubmenuOpen] = useState(false);
  const [starAniseSubmenuOpen, setStarAniseSubmenuOpen] = useState(false);
  const [greenCoffeeSubmenuOpen, setGreenCoffeeSubmenuOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const [mobileCashewSubmenuOpen, setMobileCashewSubmenuOpen] = useState(false);
  const [mobileWw320SubmenuOpen, setMobileWw320SubmenuOpen] = useState(false);
  const [mobileBlackPepperSubmenuOpen, setMobileBlackPepperSubmenuOpen] = useState(false);
  const [mobileDesiccatedCoconutSubmenuOpen, setMobileDesiccatedCoconutSubmenuOpen] = useState(false);
  const [mobileGingerSubmenuOpen, setMobileGingerSubmenuOpen] = useState(false);
  const [mobileWholeGingerSubmenuOpen, setMobileWholeGingerSubmenuOpen] = useState(false);
  const [mobileSliceGingerSubmenuOpen, setMobileSliceGingerSubmenuOpen] = useState(false);
  const [mobileCardamomSubmenuOpen, setMobileCardamomSubmenuOpen] = useState(false);
  const [mobileCassiaSubmenuOpen, setMobileCassiaSubmenuOpen] = useState(false);
  const [mobileSeedsSubmenuOpen, setMobileSeedsSubmenuOpen] = useState(false);
  const [mobilePumpkinSeedsSubmenuOpen, setMobilePumpkinSeedsSubmenuOpen] = useState(false);
  const [mobileSunflowerSeedsSubmenuOpen, setMobileSunflowerSeedsSubmenuOpen] = useState(false);
  const [mobilePeanutsSubmenuOpen, setMobilePeanutsSubmenuOpen] = useState(false);
  const [mobileAlmondsSubmenuOpen, setMobileAlmondsSubmenuOpen] = useState(false);
  const [mobileStarAniseSubmenuOpen, setMobileStarAniseSubmenuOpen] = useState(false);
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

  // ✅ FULL PRODUCT LIST (REQUIRED FOR SEARCH)
  const products = [
   { 
    id: 1, 
    name: "Cashew Nuts", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max", 
    standard: "AFI Standard 2012",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    moisture: "13.5% max",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },

  { 
    id: 5, 
    name: "White Pepper 630g/l (EU Standard)", 
    image: whitePepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "630g/l",
    admixture: "0.5% max",
    blackSeeds: "2% max",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },

  { 
    id: 6, 
    name: "Fresh Ginger", 
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
    moisture: "4%",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    lowerSize: "7-8% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    lowerSize: "7-8% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    lowerSize: "7-8% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    lowerSize: "7-8% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    lowerSize: "7-8% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
  },

  // Cashew Nuts WW450
  { 
    id: 11, 
    name: "Cashew Nuts WW450", 
    image: ww450Cashew, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
  },

  // Cashew Nuts SK
  { 
    id: 12, 
    name: "Cashew Nuts SK", 
    image: cashewSK, 
    origin: "Vietnam", 
    moisture: "4%",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
  },

  // Cashew Nuts SL
  { 
    id: 13, 
    name: "Cashew Nuts SL", 
    image: cashewSL, 
    origin: "Vietnam", 
    moisture: "4%",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    grade: "FAQ",
    packing: "25kg/bag",
    containerCapacity: "6MT/20ft, 15MT/40ft"
  },
  { 
    id: 15, 
    name: "Black Pepper 500g/l FAQ", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "500g/l",
    admixture: "1% max",
    grade: "FAQ",
    packing: "25kg/bag",
    containerCapacity: "12MT/20ft, 25MT/40ft"
  },
  { 
    id: 16, 
    name: "Black Pepper 550g/l FAQ", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "13.5% max",
    density: "550g/l",
    admixture: "1% max",
    grade: "FAQ",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },
  { 
    id: 17, 
    name: "Black Pepper 500g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "500g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },
  { 
    id: 18, 
    name: "Black Pepper 550g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "550g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },
  { 
    id: 19, 
    name: "Black Pepper 570g/l MC/ASTA", 
    image: blackPepper, 
    origin: "Vietnam", 
    moisture: "12.5% max",
    density: "570g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
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
    size: "5mm (80% Min. on sieve)",
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
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
    packing: "25kg/bag",
    containerCapacity: "15MT/20ft, 28MT/40ft"
  },

  { 
    id: 21, 
    name: "Cashew Nuts LP", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    sieve: "6.3 mm",
    crop: "New crop",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
  },
  { 
    id: 22, 
    name: "Cashew Nuts WS", 
    image: cashewnuts, 
    origin: "Vietnam", 
    moisture: "5% max",
    standard: "AFI Standard 2012",
    nutSize: "Small pieces, on sieve 5mm - 7.2mm",
    broken: "10% max",
    packing: "10kg/vacuum bag or tin packing",
    containerCapacity: "15MT/20ft, 26.5MT/40ft"
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
    so2: "100 ppm max",
    packing: "25kg/bag or custom",
    containerCapacity: "7MT/20ft, 18MT/40ft"
  },
  { 
    id: 24, 
    name: "High fat Desiccated Coconut Fine Grade", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "3% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    packing: "25kg/bag or custom",
    containerCapacity: "13MT/20ft, 27MT/40ft"
  },
  { 
    id: 25, 
    name: "High fat Desiccated Coconut Medium Grade", 
    image: desiccatedCoconut, 
    origin: "Vietnam", 
    moisture: "3% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    packing: "25kg/bag or custom",
    containerCapacity: "13MT/20ft, 27MT/40ft"
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
  // CATEGORIZED UNDER STAR ANISE
  { 
    id: 83, 
    name: "Spring Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    size: "2.5 cm 80% up", 
    brokenPieces: "10% max", 
    notes: "No fungus, natural color",
    description: "Premium quality spring harvest star anise from Vietnam. Harvested during spring season for optimal flavor and aroma."
  },
  { 
    id: 84, 
    name: "Autumn Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    size: "2.5 cm 80% up", 
    brokenPieces: "10% max", 
    notes: "No fungus, natural color",
    description: "Premium quality autumn harvest star anise from Vietnam. Harvested during autumn season for rich, full-bodied flavor."
  },
  { 
    id: 85, 
    name: "Canh Dan Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    size: "2.5 cm 80% up", 
    brokenPieces: "10% max", 
    notes: "No fungus, natural color",
    description: "Premium quality Canh Dan variety star anise from Vietnam. Known for its distinctive aroma and superior quality."
  },
  { 
    id: 86, 
    name: "Broken Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    brokenPieces: "High percentage", 
    notes: "No fungus, natural color",
    description: "Cost-effective broken star anise pieces from Vietnam. Ideal for grinding and commercial food processing applications."
  },
  { 
    id: 87, 
    name: "Dyed Star Anise", 
    image: starAnise, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    size: "2.5 cm 80% up", 
    notes: "Enhanced color, natural flavor",
    description: "Color-enhanced star anise from Vietnam. Ideal for decorative and culinary applications where visual appeal is important."
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
    name: "Green Coffee Beans", 
    image: robustaBeans, 
    origin: "Vietnam", 
    moisture: "12.5%",
    description: "Premium quality green coffee beans from Vietnam. Available in Robusta and Arabica varieties."
  },
  // CATEGORIZED UNDER GREEN COFFEE BEANS
  { 
    id: 88, 
    name: "Robusta Coffee Beans S16 Clean/Wet Polished", 
    image: robustaS16Clean, 
    origin: "Vietnam", 
    moisture: "12.5%", 
    grade: "S16 Clean/Wet Polished",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20ft, 28MT/40ft",
    description: "Premium quality Robusta coffee beans S16 grade, clean and wet polished. Perfect for commercial roasting and blending."
  },
  { 
    id: 89, 
    name: "Robusta Coffee Beans S18 Clean/Wet Polished", 
    image: robustaS18Clean, 
    origin: "Vietnam", 
    moisture: "12.5%", 
    grade: "S18 Clean/Wet Polished",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20ft, 28MT/40ft",
    description: "Premium quality Robusta coffee beans S18 grade, clean and wet polished. Larger bean size for premium applications."
  },
  { 
    id: 90, 
    name: "Robusta Coffee Beans S13", 
    image: robustaS13, 
    origin: "Vietnam", 
    moisture: "12.5%", 
    grade: "S13",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20ft, 28MT/40ft",
    description: "Quality Robusta coffee beans S13 grade. Cost-effective option for commercial use."
  },
  { 
    id: 91, 
    name: "Arabica Coffee Beans S16/S18", 
    image: arabicaS16S18, 
    origin: "Vietnam", 
    moisture: "12.5%", 
    grade: "S16/S18",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20ft, 28MT/40ft",
    description: "Premium Arabica coffee beans S16/S18 grade. Known for smooth, aromatic flavor profile."
  },
  { 
    id: 45, 
    name: "BIG CARDAMOM", 
    image: bigCardamom, 
    origin: "Nepal", 
    moisture: "12% max", 
    admixture: "1% max", 
    size: "Large pods", 
    color: "Brown to dark brown", 
    description: "Premium quality big cardamom with strong aromatic flavor. Perfect for culinary and medicinal uses. Sourced from the finest farms." 
  },
  { 
    id: 41, 
    name: "BLACK CARDAMOM", 
    image: blackCardamom, 
    origin: "Vietnam", 
    moisture: "13.5%", 
    admixture: "0.5%", 
    shape: "Long, strong aroma", 
    crop: "New crop 2025", 
    description: "Bold, smoky flavor perfect for curries and soups. 100% natural, no additives or preservatives. Sourced sustainably from Vietnam's best farms." 
  },
  { 
    id: 46, 
    name: "GREEN CARDAMOM", 
    image: greenCardamom, 
    origin: "Guatemala", 
    moisture: "12% max", 
    admixture: "0.5% max", 
    size: "Small to medium pods", 
    color: "Green", 
    description: "Premium quality green cardamom with sweet, floral aroma. Perfect for desserts, teas, and savory dishes. Known as the 'Queen of Spices'." 
  },
  { 
    id: 42, 
    name: "TURMERIC FINGER", 
    image: turmericFinger, 
    origin: "India", 
    moisture: "10% max", 
    curcuminContent: "3-5% min", 
    color: "Bright Yellow to Deep Orange", 
    shape: "Finger-like rhizomes", 
    size: "3-5 cm length", 
    admixture: "1% max", 
    extraneousMatter: "0.5% max", 
    description: "Premium quality turmeric fingers with high curcumin content. Perfect for culinary and medicinal uses. Natural, sun-dried, and free from additives." 
  },
  { 
    id: 43, 
    name: "WALNUTS", 
    image: walnuts, 
    origin: "Chile", 
    moisture: "8% max", 
    kernelYield: "45-50% min", 
    brokenKernels: "5% max", 
    foreignMatter: "0.5% max", 
    size: "Extra Large (32mm+)", 
    color: "Light Brown to Golden", 
    grade: "Premium Grade", 
    description: "Premium quality walnuts with high kernel yield. Rich in omega-3 fatty acids and antioxidants. Perfect for snacking, baking, and culinary applications. Naturally dried and free from preservatives." 
  },
  { 
    id: 48, 
    name: "SPLIT CASSIA", 
    image: cassiaSplit, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality split cassia from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 49, 
    name: "PRESSED CASSIA", 
    image: cassiaPressed, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality pressed cassia from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 50, 
    name: "BROKEN CASSIA", 
    image: brokenCassia, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality broken cassia from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 51, 
    name: "CASSIA CIGARETTE", 
    image: cassiaCigarette, 
    origin: "Vietnam", 
    placeOfOrigin: "Yen Bai, Vietnam", 
    roll: "50% to 100%", 
    size: "6-20 cm", 
    taste: "Spicy, Tasty", 
    color: "Brownish Yellow", 
    moisture: "13% max", 
    packing: "Mesh bag/ PP bag", 
    description: "Premium quality cigarette cassia from Yen Bai, Vietnam. Spicy and tasty flavor, available in various roll percentages. Perfect for culinary and commercial applications." 
  },
  { 
    id: 52, 
    name: "CASSIA POWDER", 
    image: cassiaPowder, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality cassia powder from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 53, 
    name: "CASSIA LEAVE", 
    image: cassiaLeave, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality cassia leaves from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 54, 
    name: "CASSIA HUSK", 
    image: cassiaHusk, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality cassia husk from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 55, 
    name: "CASSIA LONG STICK", 
    image: cassiaLongstick, 
    origin: "Vietnam", 
    moisture: "13% max", 
    description: "Premium quality cassia long stick from Vietnam. Perfect for culinary and commercial applications." 
  },
  { 
    id: 58, 
    name: "Pumpkin Seeds Grade AAA", 
    image: pumpkinAAA, 
    origin: "China", 
    moisture: "8% max", 
    grade: "AAA",
    purity: "99% min",
    size: "Large, uniform seeds",
    color: "Green to dark green",
    description: "Premium quality pumpkin seeds Grade AAA. Large, uniform seeds with excellent taste and texture. Perfect for snacking, baking, and culinary applications." 
  },
  { 
    id: 59, 
    name: "Pumpkin Seeds Grade AA", 
    image: pumpkinAA, 
    origin: "China", 
    moisture: "8% max", 
    grade: "AA",
    purity: "98% min",
    size: "Medium to large seeds",
    color: "Green to dark green",
    description: "High quality pumpkin seeds Grade AA. Medium to large seeds with good taste and texture. Perfect for snacking, baking, and culinary applications." 
  },
  { 
    id: 60, 
    name: "Pumpkin Seeds Grade A", 
    image: pumpkinA, 
    origin: "China", 
    moisture: "8% max", 
    grade: "A",
    purity: "97% min",
    size: "Medium seeds",
    color: "Green to dark green",
    description: "Quality pumpkin seeds Grade A. Medium seeds suitable for various applications. Perfect for snacking, baking, and culinary uses." 
  },
  { 
    id: 61, 
    name: "Sunflower Seeds Confectionery Grade", 
    image: sunflowerSeeds, 
    origin: "China", 
    moisture: "8% max", 
    grade: "Confectionery Grade",
    size: "Large seeds",
    color: "Black and white striped",
    description: "Premium quality sunflower seeds confectionery grade. Large seeds perfect for snacking. Rich in vitamin E and healthy fats. Natural, roasted, and ready to eat." 
  },
  { 
    id: 62, 
    name: "Sunflower Seeds Bakery Grade", 
    image: sunflowerKernels, 
    origin: "China", 
    moisture: "8% max", 
    grade: "Bakery Grade",
    size: "Smaller kernels",
    color: "Light beige to white",
    description: "High quality sunflower seeds bakery grade. Smaller kernels perfect for baking and cooking applications. Ideal for bread, cookies, and other baked goods." 
  },
  { 
    id: 65, 
    name: "Nigella sativa", 
    image: nigellaSativa, 
    origin: "India", 
    moisture: "7% max", 
    purity: "99%, 99.50%, 99.90%",
    oilContents: "36%",
    nonGMO: "Yes",
    description: "Premium quality Nigella sativa (black seed) from India. High purity levels available (99%, 99.50%, 99.90%). Rich in oil content (36%) and certified Non-GMO. Known for its medicinal properties and culinary uses." 
  },
  // MAIN CATEGORY PRODUCT

  // CATEGORIZED UNDER PEANUTS - LARGE SIZE
  { 
    id: 67, 
    name: "Peanuts L(25/29)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Large (25-29 kernels per ounce)",
    grade: "Large",
    description: "Premium quality Chinese peanuts, large size (25-29 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  { 
    id: 68, 
    name: "Peanuts 29/33", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Large (29-33 kernels per ounce)",
    grade: "Large",
    description: "Premium quality Chinese peanuts, large size (29-33 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  // CATEGORIZED UNDER PEANUTS - MEDIUM SIZE
  { 
    id: 69, 
    name: "Peanuts M(35/39)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Medium (35-39 kernels per ounce)",
    grade: "Medium",
    description: "Premium quality Chinese peanuts, medium size (35-39 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  { 
    id: 70, 
    name: "Peanuts M(39/43)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Medium (39-43 kernels per ounce)",
    grade: "Medium",
    description: "Premium quality Chinese peanuts, medium size (39-43 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  // CATEGORIZED UNDER PEANUTS - SMALL SIZE
  { 
    id: 71, 
    name: "Peanuts S(41/51)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Small (41-51 kernels per ounce)",
    grade: "Small",
    description: "Premium quality Chinese peanuts, small size (41-51 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  { 
    id: 72, 
    name: "Peanuts S(51/61)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Small (51-61 kernels per ounce)",
    grade: "Small",
    description: "Premium quality Chinese peanuts, small size (51-61 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  { 
    id: 73, 
    name: "Peanuts S(61/71)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Small (61-71 kernels per ounce)",
    grade: "Small",
    description: "Premium quality Chinese peanuts, small size (61-71 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  { 
    id: 74, 
    name: "Peanuts S(71/91)", 
    image: chinesePeanut, 
    origin: "China", 
    moisture: "7% max", 
    size: "Small (71-91 kernels per ounce)",
    grade: "Small",
    description: "Premium quality Chinese peanuts, small size (71-91 kernels per ounce). Perfect for snacking, cooking, and commercial applications." 
  },
  // CATEGORIZED UNDER ALMONDS - BY SIZE
  { 
    id: 76, 
    name: "Almonds 18/20", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Largest (18-20 kernels per ounce)",
    grade: "Premium",
    description: "Premium quality almonds, largest size (18-20 kernels per ounce). Premium size often used for chocolate coating or high-end snacking. Perfect for premium retail packs and gourmet applications." 
  },
  { 
    id: 77, 
    name: "Almonds 20/22", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Second largest (20-22 kernels per ounce)",
    grade: "Premium",
    description: "Premium quality almonds, second largest size (20-22 kernels per ounce). Popular for premium retail packs. Perfect for snacking and high-end applications." 
  },
  { 
    id: 78, 
    name: "Almonds 23/25", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Standard large (23-25 kernels per ounce)",
    grade: "Large",
    description: "Premium quality almonds, standard large size (23-25 kernels per ounce). Commonly used in snacking. Perfect for retail packs and commercial applications." 
  },
  { 
    id: 79, 
    name: "Almonds 25/27", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Medium-large (25-27 kernels per ounce)",
    grade: "Medium-Large",
    description: "Premium quality almonds, medium-large size (25-27 kernels per ounce). Perfect for snacking, baking, and commercial applications." 
  },
  { 
    id: 80, 
    name: "Almonds 27/30", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Medium (27-30 kernels per ounce)",
    grade: "Medium",
    description: "Premium quality almonds, medium size (27-30 kernels per ounce). Perfect for snacking, baking, and commercial applications." 
  },
  { 
    id: 81, 
    name: "Almonds 30/32", 
    image: almond, 
    origin: "USA", 
    moisture: "6% max", 
    size: "Medium-small (30-32 kernels per ounce)",
    grade: "Medium-Small",
    description: "Premium quality almonds, medium-small size (30-32 kernels per ounce). Perfect for snacking, baking, and commercial applications." 
  },
  // CATEGORIZED UNDER SPICES
  { 
    id: 82, 
    name: "Cloves", 
    image: cloves, 
    origin: "Indonesia", 
    moisture: "12% max", 
    botanicalName: "Syzygium aromaticum",
    appearance: "Whole dried buds, rich dark brown to reddish-brown",
    foreignMatter: "1% max",
    grade: "Hand-picked, sorted – multiple grades available",
    aroma: "Strong, warm & spicy",
    packing: "25 kg or 50 kg net weight - Polypropylene or jute bags",
    description: "Premium quality cloves direct from Indonesia. Whole dried buds with rich dark brown to reddish-brown color. Hand-picked and sorted with multiple grades available. Strong, warm and spicy aroma. Perfect for culinary and commercial applications." 
  },
];

  // Product categories for dropdown
  const productCategories = [
    
    { id: 1, name: "Cashew Nuts", hasSubcategories: true },
    { id: 2, name: "Desiccated Coconut", hasSubcategories: true },
    { id: 3, name: "Edible Copra", hasSubcategories: false },
    { id: 4, name: "Black Pepper", hasSubcategories: true },
    { id: 6, name: "Fresh Ginger", hasSubcategories: true },
    { id: 8, name: "CASSIA/CINNAMON", hasSubcategories: true },
    { id: 30, name: "Soft Dried Mango", hasSubcategories: false },
    { id: 31, name: "TEJA RED CHILLI", hasSubcategories: false },
    { id: 32, name: "Star Anise", hasSubcategories: true },
    { id: 7, name: "Cardamom", hasSubcategories: true },
    { id: 92, name: "Seeds", hasSubcategories: true },
    { id: 66, name: "Peanuts", hasSubcategories: true },
    { id: 75, name: "Almonds", hasSubcategories: true },
    { id: 42, name: "TURMERIC FINGER", hasSubcategories: false },
    { id: 43, name: "WALNUTS", hasSubcategories: false },
    { id: 33, name: "Sweet Tamarind", hasSubcategories: false },
    { id: 34, name: "Green Coffee Beans", hasSubcategories: true },
    { id: 65, name: "Nigella sativa", hasSubcategories: false },
    { id: 82, name: "Cloves", hasSubcategories: false },
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
    { id: 5, name: "White Pepper"},
  ];

  // Desiccated Coconut subcategories
  const desiccatedCoconutSubcategories = [
    { id: 23, name: "Low fat Desiccated Coconut Fine Grade" },
    { id: 24, name: "High fat Desiccated Coconut Fine Grade" },
    { id: 25, name: "High fat Desiccated Coconut Medium Grade" },
  ];

  // Ginger subcategories
  const gingerSubcategories = [
    { id: "wholeGinger", name: "Dried Whole Ginger", hasSubcategories: true },
    { id: "sliceGinger", name: "Dried Slice Ginger", hasSubcategories: true },
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

  // Cardamom subcategories
  const cardamomSubcategories = [
    { id: 45, name: "BIG CARDAMOM" },
    { id: 41, name: "BLACK CARDAMOM" },
    { id: 46, name: "GREEN CARDAMOM" },
  ];

  // Cassia/Cinnamon subcategories
  const cassiaSubcategories = [
    { id: 48, name: "SPLIT CASSIA" },
    { id: 49, name: "PRESSED CASSIA" },
    { id: 50, name: "BROKEN CASSIA" },
    { id: 51, name: "CASSIA CIGARETTE" },
    { id: 52, name: "CASSIA POWDER" },
    { id: 53, name: "CASSIA LEAVE" },
    { id: 54, name: "CASSIA HUSK" },
    { id: 55, name: "CASSIA LONG STICK" },
  ];

  // Seeds subcategories (Pumpkin Seeds and Sunflower Seeds)
  const seedsSubcategories = [
    { id: 63, name: "Pumpkin Seeds" ,hasSubcategories: true},
    { id: 64, name: "Sunflower Seeds", hasSubcategories: true},
  ];

  // Pumpkin Seeds subcategories
  const pumpkinSeedsSubcategories = [
    { id: 58, name: "Pumpkin Seeds Grade AAA" },
    { id: 59, name: "Pumpkin Seeds Grade AA" },
    { id: 60, name: "Pumpkin Seeds Grade A" },
  ];

  // Sunflower Seeds subcategories
  const sunflowerSeedsSubcategories = [
    { id: 61, name: "Sunflower Seeds Confectionery Grade" },
    { id: 62, name: "Sunflower Seeds Bakery Grade" },
  ];

  // Peanuts subcategories
  const peanutsSubcategories = [
    { id: 67, name: "Peanuts L(25/29)" },
    { id: 68, name: "Peanuts L(29/33)" },
    { id: 69, name: "Peanuts M(35/39)" },
    { id: 70, name: "Peanuts M(39/43)" },
    { id: 71, name: "Peanuts S(41/51)" },
    { id: 72, name: "Peanuts S(51/61)" },
    { id: 73, name: "Peanuts S(61/71)" },
    { id: 74, name: "Peanuts S(71/91)" },
  ];

  // Almonds subcategories
  const almondsSubcategories = [
    { id: 76, name: "Almonds 18/20" },
    { id: 77, name: "Almonds 20/22" },
    { id: 78, name: "Almonds 23/25" },
    { id: 79, name: "Almonds 25/27" },
    { id: 80, name: "Almonds 27/30" },
    { id: 81, name: "Almonds 30/32" },
  ];

  // Star Anise subcategories
  const starAniseSubcategories = [
    { id: 83, name: "Spring Star Anise" },
    { id: 84, name: "Autumn Star Anise" },
    { id: 85, name: "Canh Dan Star Anise" },
    { id: 86, name: "Broken Star Anise" },
    { id: 87, name: "Dyed Star Anise" },
  ];

  // Green Coffee Beans subcategories
  const greenCoffeeSubcategories = [
    { id: 88, name: "Robusta Coffee Beans S16 Clean/Wet Polished" },
    { id: 89, name: "Robusta Coffee Beans S18 Clean/Wet Polished" },
    { id: 90, name: "Robusta Coffee Beans S13" },
    { id: 91, name: "Arabica Coffee Beans S16/S18" },
  ];

  // Helper function to close all submenus (desktop)
  const closeAllSubmenus = () => {
    setCashewSubmenuOpen(false);
    setWw320SubmenuOpen(false);
    setBlackPepperSubmenuOpen(false);
    setDesiccatedCoconutSubmenuOpen(false);
    setGingerSubmenuOpen(false);
    setWholeGingerSubmenuOpen(false);
    setSliceGingerSubmenuOpen(false);
    setCardamomSubmenuOpen(false);
    setCassiaSubmenuOpen(false);
    setSeedsSubmenuOpen(false);
    setPumpkinSeedsSubmenuOpen(false);
    setSunflowerSeedsSubmenuOpen(false);
    setPeanutsSubmenuOpen(false);
    setAlmondsSubmenuOpen(false);
    setStarAniseSubmenuOpen(false);
    setGreenCoffeeSubmenuOpen(false);
  };

  // Helper function to close all mobile submenus
  const closeAllMobileSubmenus = () => {
    setMobileCashewSubmenuOpen(false);
    setMobileWw320SubmenuOpen(false);
    setMobileBlackPepperSubmenuOpen(false);
    setMobileDesiccatedCoconutSubmenuOpen(false);
    setMobileGingerSubmenuOpen(false);
    setMobileWholeGingerSubmenuOpen(false);
    setMobileSliceGingerSubmenuOpen(false);
    setMobileCardamomSubmenuOpen(false);
    setMobileCassiaSubmenuOpen(false);
    setMobileSeedsSubmenuOpen(false);
    setMobilePumpkinSeedsSubmenuOpen(false);
    setMobileSunflowerSeedsSubmenuOpen(false);
    setMobilePeanutsSubmenuOpen(false);
    setMobileAlmondsSubmenuOpen(false);
    setMobileStarAniseSubmenuOpen(false);
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
                setBlackPepperSubmenuOpen(false);
                setDesiccatedCoconutSubmenuOpen(false);
                setGingerSubmenuOpen(false);
                setWholeGingerSubmenuOpen(false);
                setSliceGingerSubmenuOpen(false);
                setCardamomSubmenuOpen(false);
                setCassiaSubmenuOpen(false);
                setSeedsSubmenuOpen(false);
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
                            } else if (category.name === "Black Pepper") {
                              isCurrentlyOpen = blackPepperSubmenuOpen;
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
                              } else if (category.name === "Black Pepper") {
                                setBlackPepperSubmenuOpen(true);
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
                              (category.name === "Black Pepper" && blackPepperSubmenuOpen) ||
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
                    {/* Black Pepper Submenu */}
                    {category.hasSubcategories && category.name === "Black Pepper" && blackPepperSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200]"
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
                    {/* Cassia/Cinnamon Submenu */}
                    {category.hasSubcategories && category.name === "CASSIA/CINNAMON" && cassiaSubmenuOpen && (
                      <div 
                        ref={(el) => {
                          if (el && cassiaSubmenuOpen) {
                            // Find the dropdown menu container
                            const dropdownContainer = el.closest('.absolute.top-full');
                            if (dropdownContainer) {
                              const dropdownRect = dropdownContainer.getBoundingClientRect();
                              const categoryButton = el.previousElementSibling?.querySelector('button');
                              if (categoryButton) {
                                const categoryRect = categoryButton.getBoundingClientRect();
                                // Calculate offset to align submenu top with dropdown top
                                const offsetTop = categoryRect.top - dropdownRect.top;
                                el.style.top = `-${offsetTop-150}px`;
                              }
                            }
                          }
                        }}
                        className="absolute left-full ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
                        style={{ 
                          maxHeight: 'calc(100vh - 100px)',
                          top: '0px'
                        }}
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
                          }, 200);
                        }}
                      >
                        {cassiaSubcategories.map((subcat) => (
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
                    {/* Star Anise Submenu */}
                    {category.hasSubcategories && category.name === "Star Anise" && starAniseSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[1200] max-h-[80vh] overflow-y-auto"
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
                          }, 200);
                        }}
                      >
                        {starAniseSubcategories.map((subcat) => (
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
                            } else if (category.name === "Black Pepper") {
                              isCurrentlyOpen = mobileBlackPepperSubmenuOpen;
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
                              } else if (category.name === "Black Pepper") {
                                setMobileBlackPepperSubmenuOpen(true);
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
                                (category.name === "Black Pepper" && mobileBlackPepperSubmenuOpen) ||
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
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileCassiaSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
                              ))}
                            </div>
                          )}
                          {category.name === "Seeds" && mobileSeedsSubmenuOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                              {seedsSubcategories.map((subcat) => (
                                <div key={subcat.id}>
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
                                <button
                                  key={subcat.id}
                                  onClick={() => {
                                    handleProductClick(subcat.id);
                                    setMenuOpen(false);
                                    setMobileProductsDropdownOpen(false);
                                    setMobileStarAniseSubmenuOpen(false);
                                  }}
                                  className="w-full text-left px-2 py-2 rounded-md text-[13px] text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50"
                                >
                                  {subcat.name}
                                </button>
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
