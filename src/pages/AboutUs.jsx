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
      style={{ background: ROYAL +"50" }}
    >
      {/* ───────────────── Hero: Company Intro + Factory Visual ───────────────── */}
      <section className="pt-[140px] pb-16 sm:pb-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* 🔹 Centered Title & Decoration ABOVE CONTENT */}
    <div className="text-center flex flex-col items-center mb-10">

      {/* Golden Line + Dot */}
      <div className="mb-4">
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
            borderRadius: "9999px",
            margin: "-6px auto 0",
          }}
        ></div>
      </div>

      {/* Heading */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        style={{ color: NAVY }}
      >
        About Lion & Lotus Trading Co., Ltd.
      </h1>
    </div>

    {/* 🔹 TWO COLUMN LAYOUT STARTS HERE */}
    <div className="flex flex-col lg:flex-row gap-10">

      {/* Text Column */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm sm:text-base text-gray leading-relaxed mb-4">
          Lion &amp; Lotus Trading Co., Ltd. is a specialized exporter of
          cashew kernels, coconut products, black pepper and selected
          spices. From Bangkok, Thailand, we connect reliable raw material
          origins across Asia with industrial buyers, roasters and packers
          worldwide.
        </p>

        <p className="text-sm sm:text-base text-gray leading-relaxed mb-4">
          Our strength lies in disciplined quality control, transparent
          sourcing and on-time shipments. We work closely with processing
          partners to ensure food-safety standards and consistent product
          specifications that meet the requirements of each market.
        </p>

        <p className="text-sm sm:text-base text-gray leading-relaxed">
          With long-term customer relationships as our focus, we aim to be a
          trusted partner for customers looking for stable volumes, clear
          communication and competitive, sustainable sourcing solutions.
        </p>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-xl bg-black/5">
         <video
         src={factoryVideo}
         autoPlay
         muted
         loop
         playsInline
         className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />


          {/* Overlay Tag */}
          <div className="absolute bottom-4 left-4 bg-black/55 text-white text-xs sm:text-sm px-3 py-2 rounded-lg backdrop-blur-sm">
            Modern processing &amp; logistics partners across Asia
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ───────────────── Vision / Mission / Core Values (single full-bg block) ───────────────── */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,28,46,0.85), rgba(10,28,46,0.35)), url(${getActiveBackground()})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          {/* VISION ROW */}
          <button
            type="button"
            onClick={() => handleBlockChange("vision")}
            className="w-max gap-4 flex items-center border-b border-white/40 pb-4 text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
              VISION
            </h2>
            {openBlock === "vision" ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>

          {openBlock === "vision" && (
            <div className="mt-4">
              <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-3xl">
                To become a trusted and sustainable agricultural trading partner
                from Asia, known for reliable quality, transparent sourcing and
                long-term relationships. We strive to elevate the value of
                cashew, coconut, pepper and spices from origin to destination,
                creating shared benefits for farmers, processors and customers.
              </p>
            </div>
          )}

          {/* spacer between rows */}
          <div className="mt-10" />

          {/* MISSION ROW */}
          <button
            type="button"
            onClick={() => handleBlockChange("mission")}
            className="w-max gap-4 flex items-center border-b border-white/40 pb-4 text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
              MISSION
            </h2>
            {openBlock === "mission" ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>

          {openBlock === "mission" && (
            <div className="mt-4">
              <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-3xl">
                • Provide safe, traceable and consistent agricultural products
                to our partners. <br />
                • Support responsible sourcing and efficient logistics from
                origin to port. <br />
                • Create long-term value through stable supply, clear
                documentation and responsive service. <br />
                • Contribute to better livelihoods in producing regions by
                connecting high-quality products with strong demand markets.
              </p>
            </div>
          )}

          {/* spacer between rows */}
          <div className="mt-10" />

          {/* CORE VALUES ROW */}
          <button
            type="button"
            onClick={() => handleBlockChange("values")}
            className="w-max gap-4 flex items-center border-b border-white/40 pb-4 text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
              CORE VALUES
            </h2>
            {openBlock === "values" ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>

          {openBlock === "values" && (
            <div className="mt-4">
              <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-3xl">
                <span className="font-semibold">Reliability</span> – keeping our
                word on quality, documentation and shipment timing. <br />
                <span className="font-semibold">Integrity</span> – transparent,
                honest communication with suppliers and customers. <br />
                <span className="font-semibold">Partnership</span> – building
                sustainable relationships instead of one-off transactions.{" "}
                <br />
                <span className="font-semibold">Continuous improvement</span> –
                refining processes and specifications based on feedback from the
                market. <br />
                <span className="font-semibold">
                  Respect for people &amp; origin
                </span>{" "}
                – recognizing the contribution of farmers, workers and logistics
                partners behind every container.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────── Organizational Chart ───────────────── */}
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
            The Lion &amp; Lotus structure is designed to keep decisions close
            to the customer while maintaining clear responsibility at each
            stage—from sourcing and quality to documentation and logistics.
            Departments work closely together to ensure each shipment meets
            agreed specifications and timelines.
          </p>

          {/* Simple responsive org chart (no images, just CSS so it's light) */}
          {/* Director */}
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

            {/* line down */}
            <div className="w-px h-6 bg-gray-400 mb-6"></div>

            {/* Top departments */}
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

            {/* second level text */}
            <p className="text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto">
              Depending on customer and product, teams from Sales &amp;
              Marketing, Logistics, Production/Sourcing and Quality collaborate
              directly on each contract to ensure clear follow-up from inquiry
              to shipment.
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
