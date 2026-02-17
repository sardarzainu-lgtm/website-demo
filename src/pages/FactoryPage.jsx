import React from "react";
import starAnise from "../assets/star-anise.webp";
import blackPepper from "../assets/blackPepper.webp";
import blackpepperf from "../assets/blackpepperf.webp";
import blackpepperf2 from "../assets/blackpepperf2.webp";
import blackpepperf3 from "../assets/blackpepperf3.webp";
import whitePepper from "../assets/whitePepper.webp";
import cashewnuts from "../assets/cashewnuts.webp";
import ww320Cashew from "../assets/ww320Cashew.webp";
import ww240Cashew from "../assets/ww240Cashew.webp";
import desiccatedCoconut from "../assets/desiccatedCoconut.webp";
import copraCup from "../assets/copraCup.webp";
import driedGinger from "../assets/driedGinger.webp";
import redChilli from "../assets/red-chilli.webp";
import mangoChips from "../assets/mango-chips.webp";
import sweetTamarind from "../assets/sweet-tamarind.webp";
import robustaBeans from "../assets/robusta-beans.webp";

const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";

const factoryImages = {
  cinnamon: [
    starAnise, // spice processing
    starAnise, // cassia sticks
    starAnise, // spice warehouse
  ],
  pepper: [
    blackpepperf, // peppercorn factory 1
    blackpepperf2, // peppercorn factory 2
    blackpepperf3, // peppercorn factory 3
  ],
  cashew: [
    cashewnuts, // nuts processing line
    ww320Cashew, // sack storage
    ww240Cashew, // shelling/packing vibe
  ],
  coconut: [
    desiccatedCoconut, // coconut chips
    copraCup, // drying coconut
    desiccatedCoconut, // coconut flakes/processing
  ],
  activities: [
    cashewnuts,
    blackPepper,
    desiccatedCoconut,
    starAnise,
    driedGinger,
    mangoChips,
  ],
  certs: [
    cashewnuts,
    blackPepper,
    desiccatedCoconut,
    starAnise,
    redChilli,
    sweetTamarind,
    robustaBeans,
    whitePepper,
  ],
};

const SectionCard = ({ title, children, highlight, badgeTone = "#0B3A82" }) => (
  <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-gray-200 p-6 sm:p-7 space-y-4">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Facility</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0A1C2E]">{title}</h3>
      </div>
      {highlight && (
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
          style={{ background: badgeTone }}
        >
          {highlight}
        </span>
      )}
    </div>
    {children}
  </div>
);

const ImageGrid = ({ images, mainFirst = true }) => (
  <div className="grid grid-cols-2 gap-3">
    {images.map((src, idx) => (
      <div
        key={idx}
        className={`relative rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/60 ${idx === 0 && mainFirst ? "col-span-2" : ""}`}
        style={{ aspectRatio: idx === 0 && mainFirst ? "16 / 9" : "4 / 3" }}
      >
        <img
          src={src}
          loading="lazy"
          className="w-full h-full object-cover"
          alt="Factory view"
        />
      </div>
    ))}
  </div>
);

export default function FactoryPage() {
  return (
    <div
      className="pt-28 pb-20 px-4 sm:px-6 lg:px-10"
      style={{ background: "radial-gradient(circle at 20% 20%, #EFF4FF 0%, #E3ECFF 35%, #F7F9FD 70%)" }}
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Hero */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#0A1C2E]/70 font-semibold">Factory Network</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1C2E]">Processing & Quality</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Certified plants for cashew, coconut, pepper, and spices—modern lines, food-safety focus, and export-ready documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["HACCP", "ISO", "HALAL", "FDA"].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm border border-gray-200 text-[#0A1C2E]">
                {chip}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto pt-2">
            {[
              { label: "Facilities", value: "4 plants" },
              { label: "Annual capacity", value: "45k+ MTS" },
              { label: "Compliance", value: "HACCP / ISO / FDA" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/85 backdrop-blur shadow-sm border border-gray-200 px-3 py-2">
                <p className="text-[11px] text-gray-500 uppercase tracking-[0.08em]">{item.label}</p>
                <p className="text-sm font-semibold text-[#0A1C2E]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinnamon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ImageGrid images={factoryImages.cinnamon} />
          <SectionCard title="Cinnamon – Cassia / Star Anise Processing" highlight="Vietnam">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Processing:</strong> Cinnamon Cassia, Star Anise<br />
              <strong>Standards:</strong> Steam treated, graded, ASTA clean, food-safety protocols<br />
              <strong>Export Compliance:</strong> ISO, HACCP, FDA ready
            </p>
            <p className="text-sm text-gray-600">
              We coordinate with certified processing partners for cinnamon cassia and star anise. Products are steam treated, graded, and packed under food-safety protocols for export markets.
            </p>
          </SectionCard>
        </div>

        {/* Pepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <SectionCard title="Pepper Processing" highlight="Vietnam">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Processing:</strong> Black Pepper, White Pepper, Brazilian Black Pepper<br />
              <strong>Standards:</strong> FQA pepper, ASTA clean, ETO &amp; Steam Sterilization<br />
              <strong>Export Compliance:</strong> ISO, HACCP, FDA ready
            </p>
            <p className="text-sm text-gray-600">
              We coordinate with certified processing partners for black pepper, white pepper, and specialty varieties. Products are cleaned, graded, sterilized, and packed to international standards for export markets.
            </p>
          </SectionCard>
          <ImageGrid images={factoryImages.pepper} />
        </div>

        {/* Cashew */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ImageGrid images={factoryImages.cashew} />
          <SectionCard title="Cashew Nuts Processing" highlight="Vietnam">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Processing:</strong> WW320, WW240, WW180, WW450, SK, SL, LP, WS, Roasted &amp; Salted<br />
              <strong>Standards:</strong> AFI Standard 2012, graded, shelled, sorted<br />
              <strong>Export Compliance:</strong> ISO, HACCP, HALAL, FDA ready
            </p>
            <p className="text-sm text-gray-600">
              We coordinate with certified processing partners for premium cashew nuts. Products are shelled, graded, sorted, and packed to international standards for export markets.
            </p>
          </SectionCard>
        </div>

        {/* Coconut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <SectionCard title="Desiccated Coconut Processing" highlight="Vietnam">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Processing:</strong> High Fat Desiccated Coconut, Low Fat Desiccated Coconut, Fine Grade, Medium Grade, Edible Copra<br />
              <strong>Standards:</strong> Moisture control, FFA standards, SO2 limits, microbiological controls<br />
              <strong>Export Compliance:</strong> ISO, HACCP, FDA ready
            </p>
            <p className="text-sm text-gray-600">
              We coordinate with certified processing partners for desiccated coconut and edible copra. Products are processed under strict moisture and microbiological controls, graded, and packed to international standards for export markets.
            </p>
          </SectionCard>
          <ImageGrid images={factoryImages.coconut} />
        </div>

        {/* Activities */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <div style={{ width: "2px", height: "48px", background: GOLD, margin: "0 auto" }}></div>
            <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "9999px", margin: "-6px auto 0" }}></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
            Production Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From cleaning and grading to packing and dispatch—teams focus on precision, hygiene, and traceability.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {factoryImages.activities.map((src, idx) => (
            <img
              key={idx}
              src={src}
              loading="lazy"
              className={`rounded-xl w-full object-cover shadow-sm h-40 md:h-56 ${idx >= 4 ? "hidden md:block" : ""}`}
              alt="Activity"
            />
          ))}
        </div>
      </div>

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
