import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InquiryForm from "../components/InquiryForm";

import logo from "../assets/logo.jpeg";
import hero from "../assets/dryfruit.jpeg"
import factoryVideo from "../assets/factory.mp4";


import cashewnuts from "../assets/cashewnuts.webp";
import desiccatedCoconut from "../assets/desiccatedCoconut.webp";
import roastedSaltedCashew from "../assets/roastedSaltedCashew.webp";
import whitePepper from "../assets/whitePepper.webp";
import blackPepper from "../assets/blackPepper.webp";
import starAnise from "../assets/star-anise.webp";
import { products as sharedProducts } from "../data/products";
import { MAIN_CATEGORIES } from "../data/categories";

const products = sharedProducts;

// Only main categories (same as Products page sidebar), with at least one product
const productCategories = MAIN_CATEGORIES.filter((cat) =>
  products.some((p) => p.category === cat)
);

// Small set of rotating hero highlights shown in the top card
const heroHighlights = [
  {
    id: 1,
    name: "Premium Cashew Nuts",
    image: cashewnuts,
  },
  {
    id: 2,
    name: "Desiccated Coconut",
    image: desiccatedCoconut,
  },
  {
    id: 32,
    name: "Star Anise",
    image: starAnise,
  },
  {
    id: 4,
    name: "Black Pepper",
    image: blackPepper,
  },
  {
    id: 5,
    name: "White Pepper",
    image: whitePepper,
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Cashew Nuts");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [tradeSlideIndex, setTradeSlideIndex] = useState(0);
  const categoryScrollRef = useRef(null);
  const categoryButtonRefs = useRef({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Auto-scroll to the selected category button
  useEffect(() => {
    const scrollContainer = categoryScrollRef.current;
    const activeButton = categoryButtonRefs.current[selectedCategory];
    
    if (scrollContainer && activeButton) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      // Calculate the scroll position to center the button
      const scrollLeft = activeButton.offsetLeft - (containerRect.width / 2) + (buttonRect.width / 2);
      
      scrollContainer.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth"
      });
    }
  }, [selectedCategory]);

  // Products for the selected category (by category or exact name match)
  const categoryProducts = products.filter(
    (p) => p.category === selectedCategory || p.name === selectedCategory
  );
  const listLength = categoryProducts.length || 1;
  const safeIndex = listLength > 0 ? Math.min(currentProductIndex, listLength - 1) : 0;
  const currentProduct = categoryProducts[safeIndex] || categoryProducts[0] || products[0];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentProductIndex(0);
  };

  const handleNext = () => {
    if (listLength <= 1) return;
    setCurrentProductIndex((prev) => (prev + 1) % listLength);
  };

  const handlePrevious = () => {
    if (listLength <= 1) return;
    setCurrentProductIndex((prev) => (prev - 1 + listLength) % listLength);
  };

  // Keep index in bounds when category changes (e.g. switch to category with fewer products)
  useEffect(() => {
    if (listLength > 0 && currentProductIndex >= listLength) {
      setCurrentProductIndex(listLength - 1);
    }
  }, [selectedCategory, listLength]);

  const NAVY = "#0A1C2E";
  const ROYAL = "#0D47A1";
  const GOLD = "#D4A857";
  const OFFWHITE = "#F6F6F6";
  const LIGHTBLUE = "#E6EEF9";

  return (
    <div
      className="font-sans text-gray-800 overflow-x-hidden"
      style={{ background: OFFWHITE, color: "#4A5568" }}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-28 md:pt-36 pb-24 md:pb-24 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${ROYAL} 0%, ${LIGHTBLUE} 100%)`,
        }}
      >
        {/* Decorative waves */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={ROYAL} stopOpacity="0.25" />
                <stop offset="100%" stopColor={LIGHTBLUE} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,280 C300,200 600,220 1200,240 L1200,400 L0,400 Z"
              fill="url(#g1)"
            />
          </svg>
        </div>

        {/* Foreground product tags */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-end gap-3 sm:gap-4 items-end">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={cashewnuts}
                  alt="Cashew"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={whitePepper}
                  alt="White Pepper"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={roastedSaltedCashew}
                  alt="Roasted Cashew"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-6">
            {/* Left - Text */}
            <div className="w-full md:w-1/2 max-w-xl md:max-w-none mb-4 md:mb-0 text-center md:text-left mx-auto md:mx-0">
              <h1
                className="mb-4 leading-[1.15] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.02em]"
                style={{
                  color: NAVY,
                  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                  fontWeight: 800,
                  textShadow: "0 1px 2px rgba(255,255,255,0.15), 0 2px 8px rgba(10,28,46,0.08)",
                }}
              >
                <span className="block text-[0.82em] font-semibold tracking-[0.22em] uppercase opacity-90 mb-1.5">
                  A TRUSTED SOURCING PARTNER OF
                </span>
                <span className="block font-extrabold tracking-[0.04em] uppercase">
                  SPICES, NUTS, BEANS, &amp; SEEDS
                </span>
              </h1>
              

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D47A1] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: ROYAL }}
                >
                  Explore Products →
                </button>

                <a
                  href="#contact"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A857] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/40"
                  style={{ borderColor: GOLD, color: NAVY, background: "#ffffff20" }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right - Rotating highlight card (auto-slide every 3s) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-xs sm:max-w-sm transform md:-translate-y-6 overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 2300, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop
                  speed={600}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="pb-6"
                  
                >
                  {heroHighlights.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="flex flex-col">
                        <img
                          src={item.image}
                          alt={item.name}
                  className="w-full h-44 sm:h-52 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h4
                    className="font-semibold text-lg mb-1"
                    style={{ color: NAVY }}
                  >
                            {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Carefully sourced, processed and shipped to global markets
                    with strict quality assurance.
                  </p>
                </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 right-3 sm:right-8 z-20 flex flex-col items-center text-white/90">
          <span
            className="text-[10px] sm:text-sm mb-1 sm:mb-2"
            style={{ writingMode: "vertical-rl", color: "#ffffffcc" }}
          >
            Scroll down
          </span>
          <ChevronDown className="animate-bounce" size={20} color="#ffffffcc" />
        </div>

       
      </section>

      {/* About Us Section */}
      <section id="about" className="py-14 sm:py-16 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block mb-4">
              <div
                style={{
                  width: "2px",
                  height: "48px",
                  background: GOLD,
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: GOLD,
                  borderRadius: 9999,
                  margin: "-6px auto 0",
                }}
              ></div>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
              style={{ color: NAVY }}
            >
              About Lion & Lotus
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-10">
            {/* LEFT */}
            <div className="flex-1 w-full max-w-xl mx-auto md:mx-0">
              <div className="bg-white/70 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 space-y-3 sm:space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold">Lion & Lotus Trading Co., Ltd.</span> is a premium agri-commodity exporter
                  focused on cashews, coconut products, black pepper and selected spices. We manage the journey from origin
                  to shipment with disciplined quality control.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Based in Bangkok, Thailand, and supported by strong sourcing networks across Asia, we supply certified
                  products tailored to the needs of roasters, packers, wholesalers and food manufacturers worldwide. Our
                  operations emphasize traceability, food safety and reliable delivery schedules.
              </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Whether you require raw cashew kernels, desiccated coconut, whole black pepper or customized spice programs,
                  our team is committed to responsive service and commercially competitive, long-term partnerships.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[#E6EEF9] text-[#0D47A1]">
                  Traceable supply chain
                </span>
                <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[#FFF7E6] text-[#92400E]">
                  Food safety focus
                </span>
                <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[#E6F6F1] text-[#065F46]">
                  Reliable delivery
                </span>
              </div>
              </div>

              <a
                href="/about"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm sm:text-base shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D47A1]"
                style={{ background: ROYAL, color: "white" }}
              >
                Learn More About Us →
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex-1 w-full flex justify-center md:justify-end md:self-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-xl bg-white transform transition-transform duration-500 hover:-translate-y-1">
                 <video
                         src={factoryVideo}
                         autoPlay
                         muted
                         loop
                         playsInline
                  className="w-full h-64 sm:h-80 md:h-[22rem] object-cover"
                        />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur">
                  Factory processing & quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="pt-4 md:pt-12 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block mb-4">
              <div
                style={{
                  width: "2px",
                  height: "48px",
                  background: GOLD,
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: GOLD,
                  borderRadius: 9999,
                  margin: "-6px auto 0",
                }}
              ></div>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
              style={{ color: NAVY }}
            >
              Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              A focused portfolio of high-grade cashew kernels, coconut products
              and selected spices, packed to international standards.
            </p>

            {/* Category Navigation */}
            <div className="mb-8 sm:mb-12">
              <div 
                ref={categoryScrollRef}
                className="flex flex-nowrap justify-start md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm md:text-base overflow-x-auto md:overflow-x-auto px-1 -mx-1 md:mx-0 md:px-0 scrollbar-hide"
              >
              {productCategories.map((category) => (
                <button
                  key={category}
                  ref={(el) => (categoryButtonRefs.current[category] = el)}
                  onClick={() => handleCategoryClick(category)}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-colors shrink-0 whitespace-nowrap"
                  style={{
                    borderBottom:
                      selectedCategory === category
                        ? `3px solid ${ROYAL}`
                        : "3px solid transparent",
                    color:
                      selectedCategory === category ? NAVY : "#6B7280",
                    background:
                      selectedCategory === category ? "#ffffff" : "transparent",
                  }}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>
          </div>

          {/* Product Display - fixed layout: category tabs above, chevrons + image in a row */}
          <div className="flex justify-center w-full">
            <div className="bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-6 sm:py-8 flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-2xl md:max-w-3xl min-h-[280px] sm:min-h-[320px]">
              {/* Left Arrow */}
              <button
                onClick={handlePrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                style={{ borderColor: GOLD, background: "white" }}
                aria-label="Previous product"
              >
                <ChevronLeft color={NAVY} size={18} />
              </button>

              {/* Circular Product Display */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border-4 border-dashed flex items-center justify-center"
                  style={{ borderColor: GOLD }}
                >
                  <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl bg-white">
                    {currentProduct && currentProduct.image && (
                      <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                style={{ borderColor: GOLD, background: "white" }}
                aria-label="Next product"
              >
                <ChevronRight color={NAVY} size={18} />
              </button>
            </div>
          </div>

          {/* Product Name and Button */}
          <div className="text-center mt-6 sm:mt-8">
            {currentProduct && (
              <>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                  style={{ color: NAVY }}
                >
                  {currentProduct.name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-2">
                  {currentProduct.origin} · Moisture {currentProduct.moisture || "—"} · {currentProduct.color || "—"}
                </p>
                {(currentProduct.packing || currentProduct.containerCapacity) && (
                  <p className="text-gray-500 text-xs sm:text-sm mb-4">
                    {currentProduct.packing ? `Packing: ${currentProduct.packing}` : ""}
                    {currentProduct.packing && currentProduct.containerCapacity ? " · " : ""}
                    {currentProduct.containerCapacity ? `Loading: ${currentProduct.containerCapacity}` : ""}
                  </p>
                )}
                <button
                  onClick={() =>
                    navigate(`/product/${currentProduct.id}`, {
                      state: { product: currentProduct },
                    })
                  }
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: ROYAL, color: "white" }}
                >
                  View Details <span>→</span>
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section id="factory" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 -mt-2 sm:-mt-4">
            <div className="inline-block mb-4">
              <div
                style={{
                  width: "2px",
                  height: "48px",
                  background: GOLD,
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: GOLD,
                  borderRadius: 9999,
                  margin: "-6px auto 0",
                }}
              ></div>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8"
              style={{ color: NAVY }}
            >
              Processing & Quality
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
            {/* Left - Panel */}
            <div
              className="w-full md:w-2/5 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl"
              style={{
                background: `linear-gradient(180deg, ${ROYAL}, ${NAVY})`,
                color: "white",
              }}
            >
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/60 mb-2">
                QA &amp; Compliance
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                style={{ color: GOLD }}
              >
                Factory Standards
              </h2>
              <p className="leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base text-white/90">
                Our partner processing facilities follow closed, controlled
                lines for cashew, coconut and spice handling, with a strong
                focus on food safety and consistency. Every shipment is
                inspected before loading.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {["BRC", "Halal", "FDA", "ISO", "HACCP", "Kosher", "FSMA"].map(
                  (cert, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 rounded-lg p-2.5 sm:p-3 text-center text-xs sm:text-sm border border-white/5 hover:bg-white/15 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                    >
                      {cert}
                    </div>
                  )
                )}
              </div>

              <button
                onClick={() => navigate("/factorypage")}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: NAVY,
                  color: "white",
                  borderColor: GOLD,
                }}
              >
                Factory Details →
              </button>
            </div>

            {/* Right - Visual */}
            <div className="w-full md:w-3/5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-full min-h-[260px] sm:min-h-[320px] transition-transform duration-700 hover:scale-[1.01]">
                <div
                  className="absolute inset-0 "
                  style={{
                   
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                      style={{ backgroundImage: `url(${hero})` }}
                    ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
                    <div className="bg-black/45 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 text-center text-white shadow-lg backdrop-blur-sm max-w-md mx-auto">
                      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏭</div>
                      <h3 className="text-lg sm:text-2xl font-semibold mb-2">
                        LION &amp; LOTUS TRADING CO., LTD.
                    </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/90">
                        Coordinating sourcing, processing and shipment across Asia to
                        serve roasters, packers and industrial buyers worldwide.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Network & Statistics */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-4 -mt-4">
            <div className="inline-block mb-4">
              <div
                style={{
                  width: "2px",
                  height: "48px",
                  background: GOLD,
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: GOLD,
                  borderRadius: 9999,
                  margin: "-6px auto 0",
                }}
              ></div>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: NAVY }}
            >
              Customer Network
            </h2>
          </div>

          {/* World Map Placeholder */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 shadow-lg">
            <div className="relative h-56 sm:h-64 bg-gradient-to-br from-white via-[#f5fbff] to-[#e4f3ff] rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center px-4">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🗺️</div>
                <p className="text-gray-700 font-semibold text-sm sm:text-base">
                  Global Export Network
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm mx-auto">
                  Serving importers, roasters and industrial buyers across Asia,
                  Middle East, Europe and the Americas.
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/80 text-gray-700 shadow-sm">
                    Asia
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 text-gray-700 shadow-sm">
                    Middle East
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 text-gray-700 shadow-sm">
                    Europe
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 text-gray-700 shadow-sm">
                    Americas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100">
              <div
                className="text-3xl sm:text-5xl font-bold mb-2"
                style={{ color: NAVY }}
              >
                70+
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Countries served through our export network
              </p>
            </div>
            <div className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100">
              <div
                className="text-3xl sm:text-5xl font-bold mb-2"
                style={{ color: NAVY }}
              >
                30M+
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Annual export value in USD (combined across product lines)
              </p>
            </div>
            <div className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100">
              <div
                className="text-3xl sm:text-5xl font-bold mb-2"
                style={{ color: NAVY }}
              >
                5000
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Approximate export volume (MT) handled annually
              </p>
            </div>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
              style={{ color: NAVY }}
            >
              Revenue Overview
            </h3>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center">
              {[
                { year: "2020", revenue: "450", color: "#bfdbfe" },
                { year: "2021", revenue: "500", color: "#93c5fd" },
                { year: "2022", revenue: "550", color: "#60a5fa" },
              ].map((item) => (
                <div key={item.year} className="text-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-dashed flex flex-col items-center justify-center mx-auto"
                    style={{ borderColor: item.color }}
                  >
                    <div
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: NAVY }}
                    >
                      {item.revenue}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      billion
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 font-semibold text-gray-700 text-sm sm:text-base">
                    Year {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{
          background: `linear-gradient(135deg, ${OFFWHITE} 0%, #EEF3FF 45%, ${LIGHTBLUE} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <div
                style={{
                  width: "2px",
                  height: "48px",
                  background: GOLD,
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: GOLD,
                  borderRadius: 9999,
                  margin: "-6px auto 0",
                }}
              ></div>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-center"
              style={{ color: NAVY }}
            >
              Contact Us
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-lg">
              Reach out for quotations, contract discussions or partnership
              opportunities. Our team will respond promptly with tailored
              solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-10 max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div
              className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-2xl"
              style={{ background: `${GOLD}22` }}
            ></div>
            <div
              className="absolute -bottom-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-2xl"
              style={{ background: `${ROYAL}12` }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 relative z-10 items-stretch">
              {/* Contact Info */}
              <div className="w-full">
                <div className="h-full rounded-2xl bg-gray-50/70 border border-gray-200 p-5 sm:p-6 shadow-sm space-y-5 sm:space-y-6">
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: NAVY }}
                >
                  Contact Information
                </h3>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-lg sm:text-xl" style={{ color: GOLD }} />
                    <div>
                      <p className="font-semibold">Email:</p>
                        <a
                          href="mailto:kashif@lion-lotus.co"
                          className="text-[#0D47A1] hover:underline break-all"
                        >
                          kashif@lion-lotus.co
                        </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdPhone className="text-lg sm:text-xl" style={{ color: GOLD }} />
                    <div>
                      <p className="font-semibold">Hotline:</p>
                        <p>
                          <a href="tel:+6580350461" className="hover:text-[#0D47A1]">
                            +65 8035 0461
                          </a>
                        </p>
                        <p>
                          <a href="tel:+66982818995" className="hover:text-[#0D47A1]">
                            +66 98281 8995
                          </a>
                        </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdLocationOn className="text-lg sm:text-xl" style={{ color: GOLD }} />
                    <div>
                      <p className="font-semibold">Head Office:</p>
                      <p>
                        158 Soi Hua Mak 27, Hua Mak, Bangkapi,
                        <br />
                        Bangkok 10250, Thailand
                      </p>
                </div>
              </div>

                    {/* Business hours / professionalism block */}
                    <div className="mt-4 rounded-xl bg-white/80 border border-gray-100 px-4 py-3 text-xs sm:text-sm text-gray-700">
                      <p className="font-semibold mb-2" style={{ color: NAVY }}>
                        Business Hours &amp; Service
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <span className="font-semibold">Hours:</span> Mon–Fri{" "}
                          <span className="font-medium">09:00–18:00 (GMT+7)</span>, Sat{" "}
                          <span className="font-medium">10:00–14:00</span>
                        </li>
                        <li>
                          <span className="font-semibold">Languages:</span> English, Thai
                        </li>
                        <li>
                          <span className="font-semibold">Typical response time:</span>{" "}
                          within <span className="font-medium">24 hours</span> on business days.
                        </li>
                      </ul>
                      <p className="mt-3 text-[11px] sm:text-xs text-gray-500">
                        For quotations, please include product, grade, packing and destination port so
                        our team can share pricing and lead time accurately.
                      </p>
                    </div>
                </div>
                </div>
              </div>

              {/* Inquiry Form (merged into contact section) */}
              <div className="flex h-full">
                <InquiryForm compact />
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href="https://wa.me/66982818995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #0B3A82 0%, #128C7E 100%)",
                  color: "white",
                  boxShadow: "0 4px 14px rgba(11, 58, 130, 0.25), 0 2px 6px rgba(18, 140, 126, 0.2)",
                }}
              >
                <span 
                  className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                  />
                </span>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[13px] sm:text-sm font-semibold leading-tight">Message Us on WhatsApp</span>
                  <span className="text-[10px] sm:text-[11px] font-normal text-white/70 leading-tight">
                    Quick response guaranteed
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
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

      
    </div>
  );
}
