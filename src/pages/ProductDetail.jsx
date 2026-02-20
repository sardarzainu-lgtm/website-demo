import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NAVY = "#0D47A1";
const GOLD = "#C8A84E";
const OFFWHITE = "#F5F1E8";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || state?.category || "All";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex items-start justify-center p-10 pt-40">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg">
          <p className="text-xl text-gray-700 mb-4">Product not found.</p>
          <button
              onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
            className="bg-[#0D47A1] hover:bg-[#062d6d] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-28 md:pt-32 pb-16 px-4 md:px-8"
      style={{ background: "linear-gradient(135deg, #F6F7FB 0%, #FFFFFF 45%, #EAF2FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Breadcrumb / Back */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <button
            onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            ← Back
          </button>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-gray-700">Product Detail</span>
        </div>

        {/* Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Media */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/70 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 shadow-sm border border-gray-100">
                  Premium Grade
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B3A82] text-white shadow-sm">
                  {product.origin || "Origin"}
                </span>
              </div>
              {product.moisture && (
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white">
                    Moisture: {product.moisture}
                </span>
              </div>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Traceable supply", value: "Supplier verified" },
                { label: "Food safety", value: "BRC / Halal ready" },
                { label: "Logistics", value: "On-time shipments" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white shadow-sm border border-gray-100 px-3 py-3 text-sm"
                >
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info & CTA */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
                  Product Profile
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0A1C2E] mt-1">
                  {product.fullName || product.name}
                </h1>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {product.description || "High-grade selection prepared for export clients with consistent grading, moisture control, and reliable supply programs."}
                </p>
              </div>
              <div className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3A82] text-white font-bold shadow-lg">
                ⭐
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F1FF] text-[#0B3A82] border border-[#0B3A82]/20">
                Export ready
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF8E6] text-[#8B6B1F] border border-[#F3DFA6]">
                Batch tested
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF7F1] text-[#1F7A53] border border-[#CDE7D7]">
                Fresh season
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/66982818995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(90deg, #0B3A82, #128C7E)" }}
              >
                WhatsApp to Order
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold border border-[#0B3A82] text-[#0B3A82] bg-white hover:bg-[#0B3A82] hover:text-white transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">Specs</p>
              <h3 className="text-2xl font-semibold text-[#0A1C2E] mt-1 mb-3">Product Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Common specs */}
                {[
                  { label: "Origin", value: product.origin || "Vietnam" },
                  ...(product.moisture ? [{ label: "Moisture", value: product.moisture }] : []),
                  // Black Pepper specific
                  ...(product.density ? [{ label: "Density", value: product.density }] : []),
                  ...(product.admixture ? [{ label: "Admixture", value: product.admixture }] : []),
                  ...(product.grade && (product.name?.includes("Black Pepper") || product.name?.includes("Pepper")) && !product.name?.includes("Ginger") ? [{ label: "Grade", value: product.grade }] : []),
                  ...(product.size && !product.name?.includes("Star Anise") && !product.name?.includes("Sweet Tamarind") ? [{ label: "Size", value: product.size }] : []),
                  ...(product.blackSeeds ? [{ label: "Black Seeds", value: product.blackSeeds }] : []),
                  // Cashew Nuts specific
                  ...(product.standard ? [{ label: "Standard", value: product.standard }] : []),
                  ...(product.seedsPerLb ? [{ label: "Seeds per lb", value: product.seedsPerLb }] : []),
                  ...(product.broken ? [{ label: "Broken", value: product.broken }] : []),
                  ...(product.lowerSize ? [{ label: "Lower Size", value: product.lowerSize }] : []),
                  ...(product.sieve ? [{ label: "Sieve", value: product.sieve }] : []),
                  ...(product.nutSize ? [{ label: "Nut Size", value: product.nutSize }] : []),
                  ...(product.crop ? [{ label: "Crop", value: product.crop }] : []),
                  // Desiccated Coconut specific
                  ...(product.ffa ? [{ label: "FFA", value: product.ffa }] : []),
                  ...(product.fatContent ? [{ label: "Fat Content", value: product.fatContent }] : []),
                  ...(product.so2 ? [{ label: "SO2", value: product.so2 }] : []),
                  // Soft Dried Mango specific
                  ...(product.ingredients ? [{ label: "Ingredients", value: product.ingredients }] : []),
                  ...(product.appearanceColor ? [{ label: "Appearance Color", value: product.appearanceColor }] : []),
                  ...(product.cuttingType ? [{ label: "Cutting Type", value: product.cuttingType }] : []),
                  ...(product.process ? [{ label: "Process", value: product.process }] : []),
                  ...(product.length ? [{ label: "Length", value: product.length }] : []),
                  ...(product.thickness ? [{ label: "Thickness", value: product.thickness }] : []),
                  ...(product.shelfLife ? [{ label: "Shelf Life", value: product.shelfLife }] : []),
                  // TEJA RED CHILLI specific
                  ...(product.pungency ? [{ label: "Pungency", value: product.pungency }] : []),
                  ...(product.capsaicinContent ? [{ label: "Capsaicin Content", value: product.capsaicinContent }] : []),
                  ...(product.color && product.name === "TEJA RED CHILLI" ? [{ label: "Color", value: product.color }] : []),
                  ...(product.skinThickness ? [{ label: "Skin Thickness", value: product.skinThickness }] : []),
                  ...(product.podsWithStalks ? [{ label: "Pods with Stalks", value: product.podsWithStalks }] : []),
                  ...(product.brokenChilies ? [{ label: "Broken Chilies", value: product.brokenChilies }] : []),
                  ...(product.looseSeeds ? [{ label: "Loose Seeds", value: product.looseSeeds }] : []),
                  // Star Anise specific
                  ...(product.size && product.name === "Star Anise" ? [{ label: "Size", value: product.size }] : []),
                  ...(product.brokenPieces ? [{ label: "Broken Pieces", value: product.brokenPieces }] : []),
                  ...(product.notes ? [{ label: "Notes", value: product.notes }] : []),
                  // Sweet Tamarind specific
                  ...(product.variety ? [{ label: "Variety", value: product.variety }] : []),
                  ...(product.size && product.name === "Sweet Tamarind" ? [{ label: "Size", value: product.size }] : []),
                  // Robusta Coffee Beans specific
                  ...(product.grades ? [{ label: "Grades", value: product.grades }] : []),
                  ...(product.brokenAndBlack ? [{ label: "Broken and Black", value: product.brokenAndBlack }] : []),
                  // Ginger Whole specific
                  ...(product.grade && (product.name?.includes("Ginger") || product.name?.includes("ginger")) ? [{ label: "Grade", value: product.grade }] : []),
                  ...(product.appearance ? [{ label: "Appearance", value: product.appearance }] : []),
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="font-semibold text-gray-800">{item.value}</p>
                  </div>
                ))}
                {/* Brazilian Black Pepper specific - Full width fields */}
                {product.appearance && (
                  <div className="sm:col-span-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">Appearance</p>
                    <p className="font-semibold text-gray-800">{product.appearance}</p>
                  </div>
                )}
                {product.aroma && (
                  <div className="sm:col-span-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">Aroma & Flavor</p>
                    <p className="font-semibold text-gray-800">{product.aroma}</p>
                  </div>
                )}
                {product.benefits && (
                  <div className="sm:col-span-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">Benefits</p>
                    <p className="font-semibold text-gray-800">{product.benefits}</p>
                  </div>
                )}
                {/* Additional notes for Black Pepper */}
                {product.grade === "FAQ" && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 ">
                    <p className="text-xs text-gray-500">Additional Notes</p>
                    <p className="font-semibold text-gray-800">Free from mould</p>
                  </div>
                )}
                {product.grade === "MC/ASTA" && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 ">
                    <p className="text-xs text-gray-500">Additional Notes</p>
                    <p className="font-semibold text-gray-800">Free from mould, no stone, no metal</p>
                  </div>
                )}
                {/* Additional notes for Desiccated Coconut */}
                {(product.ffa || product.fatContent) && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">Additional Notes</p>
                    <p className="font-semibold text-gray-800">Free from E.coli or bacteria, no foreign matter</p>
                  </div>
                )}
                {/* Additional notes for Soft Dried Mango */}
                {product.ingredients && product.name === "Soft Dried Mango" && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500">Additional Notes</p>
                    <p className="font-semibold text-gray-800">Natural product, no preservatives added</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">Packaging & Shipment</p>
              <h3 className="text-2xl font-semibold text-[#0A1C2E] mt-1 mb-3">Ready for Export</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-start">
                <div className="rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
                  <p className="text-xs text-gray-500">Packing</p>
                  <p className="font-semibold text-gray-800">{product.packing || "10kgs/carton"}</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
                  <p className="text-xs text-gray-500">Container Capacity</p>
                  <p className="font-semibold text-gray-800">8 MTs/20FT; 19 MTs/40HC</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
                  <p className="text-xs text-gray-500">Port of Loading</p>
                  <p className="font-semibold text-gray-800">{product.origin === "Brazil" ? "Brazil Port" : "Vietnam Port"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-7 space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">Assurance</p>
            <h3 className="text-xl font-semibold text-[#0A1C2E]">Quality & Service</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#0B3A82]">•</span> Batch QC reports available upon request
              </li>
              <li className="flex gap-2">
                <span className="text-[#0B3A82]">•</span> Photos/videos prior to shipment
              </li>
              <li className="flex gap-2">
                <span className="text-[#0B3A82]">•</span> Moisture and packing verified before loading
              </li>
              <li className="flex gap-2">
                <span className="text-[#0B3A82]">•</span> Lead times communicated upfront
              </li>
            </ul>
            <div className="pt-3 border-t border-gray-100 text-sm text-gray-600">
              Need a tailored spec or private label? <span className="font-semibold text-[#0B3A82]">We can customize.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
