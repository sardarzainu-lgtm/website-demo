import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../assets/logo.jpeg";
import hero from "../assets/dryfruit.jpeg"
import factoryVideo from "../assets/factory1.mp4";

import ww240Cashew from "../assets/ww240Cashew.webp";
import ww180Cashew from "../assets/ww180Cashew.webp";
import ww320Cashew from "../assets/ww320Cashew.webp";
import ww450Cashew from "../assets/ww450Cashew.webp";
import cashewSK from "../assets/cashewSK.webp";
import cashewSL from "../assets/cashewSL.webp";
import cashewnuts from "../assets/cashewnuts.webp";
import copraCup from "../assets/copraCup.webp";
import desiccatedCoconut from "../assets/desiccatedCoconut.webp";
import driedGinger from "../assets/driedGinger.webp";
import roastedSaltedCashew from "../assets/roastedSaltedCashew.webp";
import whitePepper from "../assets/whitePepper.webp";
import blackPepper from "../assets/blackPepper.webp";

const products = [
  {
    id: 1,
    name: "Cashew Nuts",
    image: cashewnuts,
    origin: "Goa, India",
    moisture: "5%",
    color: "Cream White",
  },
  {
    id: 2,
    name: "Desiccated Coconut",
    image: desiccatedCoconut,
    origin: "Sri Lanka",
    moisture: "3%",
    color: "Pure White",
  },
  {
    id: 3,
    name: "Copra Cup",
    image: copraCup,
    origin: "Philippines",
    moisture: "6%",
    color: "Light Brown",
  },
  {
    id: 4,
    name: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "12%",
    color: "Dark Black",
  },
  {
    id: 5,
    name: "White Pepper",
    image: whitePepper,
    origin: "Indonesia",
    moisture: "12%",
    color: "Off-White",
  },
  {
    id: 6,
    name: "Dried Ginger",
    image: driedGinger,
    origin: "India",
    moisture: "8%",
    color: "Yellowish Brown",
  },
  {
    id: 7,
    name: "Roasted & Salted Cashew Nuts",
    image: roastedSaltedCashew,
    origin: "Vietnam",
    moisture: "4%",
    color: "Light Golden",
  },
  {
    id: 8,
    name: "Cashew Nuts WW320",
    image: ww320Cashew,
    origin: "India",
    moisture: "5%",
    color: "Classic White",
  },
  {
    id: 9,
    name: "Cashew Nuts WW240",
    image: ww240Cashew,
    origin: "Vietnam",
    moisture: "5%",
    color: "Cream White",
  },
  {
    id: 10,
    name: "Cashew Nuts WW180",
    image: ww180Cashew,
    origin: "Brazil",
    moisture: "5%",
    color: "Ivory White",
  },
  {
    id: 11,
    name: "Cashew Nuts WW450",
    image: ww450Cashew,
    origin: "Indonesia",
    moisture: "5%",
    color: "Off-White",
  },
  {
    id: 12,
    name: "Cashew Nuts SK",
    image: cashewSK,
    origin: "Vietnam",
    moisture: "4%",
    color: "Light Cream",
  },
  {
    id: 13,
    name: "Cashew Nuts SL",
    image: cashewSL,
    origin: "India",
    moisture: "4%",
    color: "Cream White",
  },
];

const productCategories = [
  "Cashew Nuts",
  "Desiccated Coconut",
  "Copra Cup",
  "Black Pepper",
  "White Pepper",
  "Dried Ginger",
  "Roasted & Salted Cashew Nuts",
  "Cashew Nuts WW320",
  "Cashew Nuts WW240",
  "Cashew Nuts WW180",
  "Cashew Nuts WW450",
  "Cashew Nuts SK",
  "Cashew Nuts SL",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Cashew Nuts");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [tradeSlideIndex, setTradeSlideIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const categoryMap = {
     "Cashew Nuts": 0,
      "Desiccated Coconut": 1,
      "Copra Cup": 2,
      "Black Pepper": 3,
      "White Pepper": 4,
      "Dried Ginger": 5,
      "Roasted & Salted Cashew Nuts": 6,
      "Cashew Nuts WW320": 7,
      "Cashew Nuts WW240": 8,
      "Cashew Nuts WW180": 9,
      "Cashew Nuts WW450": 10,
      "Cashew Nuts SK": 11,
      "Cashew Nuts SL": 12,
    };
    setCurrentProductIndex(categoryMap[category] || 0);
  };

  const currentProduct = products[currentProductIndex] || products[0];

  const handleNext = () => {
  setCurrentProductIndex((prev) => {
    const next = (prev + 1) % products.length;
    setSelectedCategory(products[next].name); // <-- Sync category
    return next;
  });
};

const handlePrevious = () => {
  setCurrentProductIndex((prev) => {
    const next = (prev - 1 + products.length) % products.length;
    setSelectedCategory(products[next].name); // <-- Sync category
    return next;
  });
};

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
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-[140px] pb-16 md:pb-24 overflow-hidden"
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
            <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                style={{ color: NAVY }}
              >
                Premium Cashew & Spice
                <br />
                Exports from Asia
              </h1>
              <p
                className="text-base sm:text-lg md:text-2xl font-medium"
                style={{ color: ROYAL }}
              >
                Lion & Lotus Trading Co., Ltd. 
                <br className="hidden sm:block" />
                Trusted partner for cashew, coconut, black pepper & spices.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#products"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold shadow-lg text-sm sm:text-base"
                  style={{ background: ROYAL }}
                >
                  Explore Products →
                </a>

                <a
                  href="#contact"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 text-sm sm:text-base"
                  style={{ borderColor: GOLD, color: NAVY, background: "#ffffff20" }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right - Highlight card */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-xs sm:max-w-sm transform md:-translate-y-6">
                <img
                  src={copraCup}
                  alt="Product highlight"
                  className="w-full h-44 sm:h-52 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h4
                    className="font-semibold text-lg mb-1"
                    style={{ color: NAVY }}
                  >
                    Cashew Nuts, Coca Cup & Pepper
                  </h4>
                  <p className="text-sm text-gray-600">
                    Carefully sourced, processed and shipped to global markets
                    with strict quality assurance.
                  </p>
                </div>
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
      <section id="about" className="py-14 sm:py-16">
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
            <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
              Lion & Lotus Trading Co., Ltd. is a premium agri-commodity
              exporter, specializing in cashews, coconuts, black pepper and
              select spices. From sourcing to shipment, we focus on quality,
              consistency and long-term partnerships.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* LEFT */}
            <div className="flex-1 w-full">
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Based in Bangkok, Thailand, with strong sourcing networks across
                Asia, we supply certified products tailored to the needs of
                roasters, packers, wholesalers and food manufacturers worldwide.
                Our processes emphasize traceability, food safety and reliable
                delivery schedules.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Whether you are looking for raw cashew kernels, desiccated
                coconut, whole black pepper or customized spice shipments, our
                team is committed to providing responsive service and competitive
                solutions.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm sm:text-base"
                style={{ background: ROYAL, color: "white" }}
              >
                Learn More About Us →
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <div className="w-full max-w-xs sm:max-w-sm rounded-lg overflow-hidden shadow-xl bg-white">
                 <video
                         src={factoryVideo}
                         autoPlay
                         muted
                         loop
                         playsInline
                         className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-16 sm:py-20 px-4 sm:px-6">
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
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-colors"
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

          {/* Product Display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center hover:bg-white transition-colors"
              style={{ borderColor: GOLD, background: "white" }}
            >
              <ChevronLeft color={NAVY} size={18} />
            </button>

            {/* Circular Product Display */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div
                className="absolute inset-0 rounded-full border-4 border-dashed flex items-center justify-center"
                style={{ borderColor: GOLD }}
              >
                <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl bg-white">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center hover:bg-white transition-colors"
              style={{ borderColor: GOLD, background: "white" }}
            >
              <ChevronRight color={NAVY} size={18} />
            </button>
          </div>

          {/* Product Name and Button */}
          <div className="text-center mt-6 sm:mt-8">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: NAVY }}
            >
              {currentProduct.name}
            </h3>
            <button
              onClick={() =>
                navigate(`/product/${currentProduct.id}`, {
                  state: { product: currentProduct },
                })
              }
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
              style={{ background: ROYAL, color: "white" }}
            >
              View Details <span>→</span>
            </button>
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
                      className="bg-white/10 rounded-lg p-2.5 sm:p-3 text-center text-xs sm:text-sm"
                    >
                      {cert}
                    </div>
                  )
                )}
              </div>

              <button
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 font-semibold text-sm sm:text-base"
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
              <div className="relative rounded-lg overflow-hidden shadow-xl h-64 sm:h-80 md:h-full min-h-[260px] sm:min-h-[320px]">
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
                      className="absolute inset-0 bg-cover bg-center opacity-50 "
                      style={{ backgroundImage: `url(${hero})` }}
                    ></div>
                  <div className="absolute text-center text-black p-6 sm:p-8">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🏭</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      LION & LOTUS TRADING CO., LTD.
                    </h3>
                    <p className="text-black/100 text-sm sm:text-base max-w-md mx-auto">
                      Coordinating sourcing, processing and shipment across Asia
                      to serve roasters, packers and industrial buyers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Trade Activities */}
      <section id="news" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 -mt-4">
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
              International Trade Activities
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="h-56 sm:h-64 bg-gradient-to-br from-white to-[#f0f6ff] flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6">
                      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                        🌍
                      </div>
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">
                        Trade Show {item}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2">
                        Meetings with buyers, roasters & importers across global
                        markets.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Customer Network & Statistics */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 -mt-4">
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
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12"
              style={{ color: NAVY }}
            >
              Customer Network
            </h2>
          </div>

          {/* World Map Placeholder */}
          <div className="bg-white rounded-lg p-6 sm:p-8 mb-10 sm:mb-12 shadow-lg">
            <div className="relative h-56 sm:h-64 bg-gradient-to-br from-white to-[#f0fbf7] rounded-lg flex items-center justify-center">
              <div className="text-center px-4">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🗺️</div>
                <p className="text-gray-700 font-semibold text-sm sm:text-base">
                  Global Export Network
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm mx-auto">
                  Serving importers, roasters and industrial buyers across Asia,
                  Middle East, Europe and the Americas.
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg">
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
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg">
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
            <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg">
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
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
              style={{ color: NAVY }}
            >
              Revenue Overview
            </h3>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center">
              {[
                { year: "2020", revenue: "450" },
                { year: "2021", revenue: "500" },
                { year: "2022", revenue: "550" },
              ].map((item) => (
                <div key={item.year} className="text-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-dashed flex flex-col items-center justify-center mx-auto"
                    style={{ borderColor: ROYAL }}
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
        style={{ background: `linear-gradient(180deg, ${OFFWHITE}, ${LIGHTBLUE})` }}
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

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14 max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div
              className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-2xl"
              style={{ background: `${GOLD}22` }}
            ></div>
            <div
              className="absolute -bottom-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-2xl"
              style={{ background: `${ROYAL}12` }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
              {/* Contact Info */}
              <div className="space-y-5 sm:space-y-6">
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: NAVY }}
                >
                  Contact Information
                </h3>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <span className="text-lg sm:text-xl" style={{ color: GOLD }}>
                      📧
                    </span>
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p>info@lion-lotus.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg sm:text-xl" style={{ color: GOLD }}>
                      📞
                    </span>
                    <div>
                      <p className="font-semibold">Hotline:</p>
                      <p>+65 8035 0461</p>
                      <p>+66 98281 8995</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg sm:text-xl" style={{ color: GOLD }}>
                      📍
                    </span>
                    <div>
                      <p className="font-semibold">Head Office:</p>
                      <p>
                        158 Soi Hua Mak 27, Hua Mak, Bangkapi,
                        <br />
                        Bangkok 10250, Thailand
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-5 sm:space-y-6">
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: NAVY }}
                >
                  Business Hours
                </h3>

                <div className="space-y-2 text-gray-700 text-sm sm:text-lg">
                  <p>
                    📆 Monday - Friday:{" "}
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </p>
                  <p>
                    📆 Saturday:{" "}
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </p>
                  <p>
                    📆 Sunday: <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href="https://wa.me/66982818995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold shadow-lg"
                style={{ background: ROYAL, color: "white" }}
              >
                Message Us on WhatsApp →
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
