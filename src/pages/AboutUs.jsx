// src/pages/AboutUs.jsx
import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

// 🔹 Background / hero images (use your own .webp files)
import factoryVideo from "../assets/factory.mp4";
import visionBg from "../assets/about-vision.webp";
import missionBg from "../assets/about-mission.webp";
import coreBg from "../assets/about-core.webp";

const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";
const OFFWHITE = "#F6F6F6";

const AboutUs = () => {
  // one of: "vision" | "mission" | "values"
  const [openBlock, setOpenBlock] = useState("vision");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // always switch to the clicked block (never empty)
  const handleBlockChange = (key) => {
    setOpenBlock(key);
  };

  const sectionTitleDecoration = (
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
  );

  // pick background according to active block
  const getActiveBackground = () => {
    if (openBlock === "mission") return missionBg;
    if (openBlock === "values") return coreBg;
    return visionBg; // default vision
  };

  return (
    <div
      className="min-h-screen font-sans text-gray-800"
      style={{ background: "radial-gradient(circle at 20% 20%, #EFF4FF 0%, #E3ECFF 35%, #F7F9FD 70%)" }}
    >
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#0A1C2E]/70 font-semibold">About Us</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1C2E] leading-tight">
                Lion &amp; Lotus Trading Co., Ltd.
              </h1>
              <p className="text-gray-700 text-base leading-relaxed">
                Specialized exporter of cashew kernels, coconut products, peppers and selected spices from Bangkok, connecting reliable origins across Asia with industrial buyers worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Traceable supply", "Food safety first", "On-time shipments"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm border border-gray-200 text-[#0A1C2E]">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Origins", value: "Asia+" },
                  { label: "Categories", value: "Cashew / Coconut / Pepper / Spices" },
                  { label: "Service", value: "Docs • QC • Logistics" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/80 border border-gray-200 shadow-sm px-4 py-3">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm font-semibold text-[#0A1C2E]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white/70 backdrop-blur">
                <video
                  src={factoryVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/50"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#0A1C2E] shadow-sm">Processing</span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0B3A82] text-white shadow-sm">Logistics</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs sm:text-sm px-3 py-2 rounded-lg backdrop-blur-sm">
                  Modern processing &amp; logistics partners across Asia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="relative py-14 sm:py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,28,46,0.9), rgba(10,28,46,0.55)), url(${getActiveBackground()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white/8 border border-white/10 rounded-2xl backdrop-blur-lg shadow-2xl p-6 sm:p-8 text-white space-y-8">
            {["vision", "mission", "values"].map((key) => (
              <div key={key} className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleBlockChange(key)}
                  className="w-max gap-3 flex items-center border-b border-white/25 pb-3 text-left"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase">
                    {key}
                  </h2>
                  {openBlock === key ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                </button>
                {openBlock === key && (
                  <div className="pl-1 text-white/90 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {key === "vision" && (
                      <p>
                        To be a trusted, sustainable agricultural trading partner from Asia—recognized for reliable quality,
                        transparent sourcing, and long-term relationships that elevate value from origin to destination.
                      </p>
                    )}
                    {key === "mission" && (
                      <ul className="list-disc list-inside space-y-2">
                        <li>Provide safe, traceable, consistent products to partners.</li>
                        <li>Support responsible sourcing and efficient logistics from origin to port.</li>
                        <li>Deliver stable supply, clear documentation, and responsive service.</li>
                        <li>Connect origins to strong demand markets, creating shared value.</li>
                      </ul>
                    )}
                    {key === "values" && (
                      <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Reliability</span> — keep our word on quality and timing.</li>
                        <li><span className="font-semibold">Integrity</span> — transparent, honest communication.</li>
                        <li><span className="font-semibold">Partnership</span> — sustainable, long-term relationships.</li>
                        <li><span className="font-semibold">Continuous improvement</span> — refine specs with market feedback.</li>
                        <li><span className="font-semibold">Respect for origin</span> — valuing farmers, workers, and logistics teams.</li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16 sm:py-20 bg-[#fbf3ea]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {sectionTitleDecoration}
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: NAVY }}
          >
            Organizational Chart
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-10">
            Decisions stay close to customers with clear responsibility—from sourcing and quality to documentation and logistics.
            Teams collaborate on each contract to keep specs and timelines on track.
          </p>

          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded-full text-white text-sm sm:text-base font-semibold mb-6"
              style={{
                background: NAVY,
                width: "120px",
                height: "120px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
              }}
            >
              Director
            </div>

            <div className="w-px h-6 bg-gray-400 mb-6"></div>

            <div className="w-full max-w-3xl flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
              {[
                "Accounting & Finance",
                "Sales & Marketing",
                "Logistics",
                "Production / Sourcing",
                "Human Resources",
              ].map((dept) => (
                <div key={dept} className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full text-white text-xs sm:text-sm font-semibold text-center px-2"
                    style={{
                      background: "#27ae60",
                      width: "110px",
                      height: "110px",
                      boxShadow: "0 8px 20px rgba(39,174,96,0.2)",
                    }}
                  >
                    {dept}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto">
              Depending on customer and product, Sales, Logistics, Production/Sourcing and Quality align directly from inquiry to shipment.
            </p>
          </div>
        </div>
      </section>
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
};

export default AboutUs;
