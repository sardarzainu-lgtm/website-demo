import React from "react";

const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";

const factoryImages = {
  cinnamon: [
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1400&q=80", // spice processing
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80", // cassia sticks
    "https://images.unsplash.com/photo-1450360581253-d63c319d4c4a?auto=format&fit=crop&w=1400&q=80", // spice warehouse
  ],
  pepper: [
    "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=1400&q=80", // pepper drying
    "https://images.unsplash.com/photo-1506809210098-6b6a041b0b4a?auto=format&fit=crop&w=1400&q=80", // sacks warehouse
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1400&q=80", // peppercorn close
  ],
  cashew: [
    "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1400&q=80", // nuts processing line
    "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=1400&q=80", // sack storage
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80", // shelling/packing vibe
  ],
  coconut: [
    "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1400&q=80", // coconut chips
    "https://images.unsplash.com/photo-1589710752032-9cf7f8bc5d4c?auto=format&fit=crop&w=1400&q=80", // drying coconut
    "https://images.unsplash.com/photo-1588166635300-35524e5c31c0?auto=format&fit=crop&w=1400&q=80", // coconut flakes/processing
  ],
  activities: [
    "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1589710752032-9cf7f8bc5d4c?auto=format&fit=crop&w=1400&q=80",
  ],
  certs: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1589710752032-9cf7f8bc5d4c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
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
          <SectionCard title="Cinnamon – Cassia / Star Anise" highlight="Vietnam">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Address:</strong> Minh Phu, Soc Son, Hanoi &amp; Mau A, Van Yen, Yen Bai Province<br />
              <strong>Total Area:</strong> 12,000 sqm<br />
              <strong>Capacity:</strong> 10–15,000 MTS / year
            </p>
            <p className="text-sm text-gray-600">Steam treated, graded, and packed under food-safety protocols for export markets.</p>
          </SectionCard>
        </div>

        {/* Pepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <SectionCard title="Pepper Factory" highlight="Long Khanh">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Address:</strong> Long Khanh, Dong Nai Province<br />
              <strong>Total Area:</strong> 10,000 sqm<br />
              <strong>Capacity:</strong> 15–17,000 MTS / year
            </p>
            <p className="text-sm text-gray-600">
              FQA pepper, ASTA clean, ETO &amp; Steam Sterilization; Export standards: ISO, HACCP, FDA.
            </p>
          </SectionCard>
          <ImageGrid images={factoryImages.pepper} />
        </div>

        {/* Cashew */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ImageGrid images={factoryImages.cashew} />
          <SectionCard title="Cashew Nuts Factory" highlight="Binh Phuoc">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Address:</strong> Long Giang, Binh Phuoc Province<br />
              <strong>Total Area:</strong> 4,000 sqm<br />
              <strong>Capacity:</strong> 8–10,000 MTS / year
            </p>
            <p className="text-sm text-gray-600">
              Producing WW320, WW240, LP, SPB; Certifications: HACCP, ISO, HALAL, FDA.
            </p>
          </SectionCard>
        </div>

        {/* Coconut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <SectionCard title="Desiccated Coconut Factory" highlight="Ben Tre">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Address:</strong> My Thach, Ben Tre Province<br />
              <strong>Total Area:</strong> 5,000 sqm<br />
              <strong>Capacity:</strong> 5–7,000 MTS / year
            </p>
            <p className="text-sm text-gray-600">
              Producing High Fat, Low Fat, Chips, and Flakes under strict moisture and microbiological controls.
            </p>
          </SectionCard>
          <ImageGrid images={factoryImages.coconut} />
        </div>

        {/* Certifications */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <div style={{ width: "2px", height: "48px", background: GOLD, margin: "0 auto" }}></div>
            <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "9999px", margin: "-6px auto 0" }}></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
            Product Certification
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We align with global standards for food safety, hygiene, and documentation to ship confidently to regulated markets.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {factoryImages.certs.map((src, idx) => (
            <img
              key={idx}
              src={src}
              loading="lazy"
              className="w-full rounded-lg shadow-sm border border-white/60"
              alt="Certification"
            />
          ))}
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
