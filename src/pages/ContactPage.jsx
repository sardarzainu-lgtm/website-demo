import React, { useEffect } from "react";
import InquiryForm from "../components/InquiryForm";

const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";

const contactStats = [
  { label: "Typical response", value: "within 24h on business days" },
  { label: "Languages", value: "English, Thai" },
  { label: "Channels", value: "Email, Phone, WhatsApp" },
];

const serviceBadges = ["Custom quotations", "Product specs", "Packing guidance", "Logistics & docs", "Lead time updates"];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-10"
      style={{ background: "radial-gradient(circle at 20% 20%, #EFF4FF 0%, #E3ECFF 35%, #F7F9FD 70%)" }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#0A1C2E]/70 font-semibold">Contact Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1C2E]">Let’s Talk Supply & Quality</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Reach out for quotations, contract discussions, or partnership opportunities. We respond promptly with tailored solutions for cashew, coconut, pepper, and spices.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["HACCP / ISO / FDA-ready", "Export documentation", "On-time shipments"].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm border border-gray-200 text-[#0A1C2E]">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Contact + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-gray-200 p-6 sm:p-7 space-y-4 h-full flex flex-col">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Contact Information</p>
              <h2 className="text-2xl font-bold text-[#0A1C2E]">Lion &amp; Lotus Trading Co., Ltd.</h2>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#0A1C2E]">Email</p>
                <a href="mailto:info@lion-lotus.co" className="text-[#0B3A82] hover:underline">
                  info@lion-lotus.co
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#0A1C2E]">Hotlines</p>
                <a href="tel:+6580350461" className="text-[#0B3A82] hover:underline block">
                  +65 8035 0461
                </a>
                <a href="tel:+66982818995" className="text-[#0B3A82] hover:underline block">
                  +66 98281 8995
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#0A1C2E]">Head Office</p>
                <p className="text-gray-700 leading-relaxed">
                  158 Soi Hua Mak 27, Hua Mak, Bangkapi,
                  <br />
                  Bangkok 10250, Thailand
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-[#0A1C2E] text-xs uppercase tracking-[0.1em]">Business Hours &amp; Service</p>
              <p>Mon–Fri: 09:00–18:00 (GMT+7) · Sat: 10:00–14:00</p>
              <p>Languages: English, Thai</p>
              <p>Typical response time: within 24 hours on business days.</p>
              <p className="text-xs text-gray-600">
                For quotations, please include product, grade, packing, and destination port to share pricing and lead time accurately.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceBadges.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-gray-200 text-[#0A1C2E] shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/66982818995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(90deg, #0B3A82, #128C7E)" }}
              >
                Message us on WhatsApp
              </a>
              <a
                href="tel:+6580350461"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full font-semibold border border-[#0B3A82] text-[#0B3A82] bg-white hover:bg-[#0B3A82] hover:text-white transition-colors"
              >
                Call Hotline
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-gray-200 p-6 sm:p-7 h-full flex flex-col">
            <InquiryForm compact />
            <div className="grid grid-cols-3 gap-3 mt-4">
              {contactStats.map((item) => (
                <div key={item.label} className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-gray-500 font-semibold">{item.label}</p>
                  <p className="text-sm font-semibold text-[#0A1C2E]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional coverage / map placeholder */}
        <div className="rounded-2xl bg-white/85 backdrop-blur shadow-lg border border-gray-200 p-6 sm:p-7">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Coverage</p>
              <h3 className="text-xl font-semibold text-[#0A1C2E]">Origins &amp; Destinations</h3>
              <p className="text-sm text-gray-600">
                Sourcing across Vietnam, Thailand, Indonesia, India; shipping to APAC, EU, Middle East, and North America.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Asia origins", "EU compliance", "US FDA-ready"].map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-[#0A1C2E] border border-gray-200">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-gradient-to-br from-[#e8f1ff] via-white to-[#eef5ff] h-64 flex items-center justify-center text-gray-500 text-sm">
            Interactive map / logistics routes (placeholder)
          </div>
        </div>
      </div>
    </div>
  );
}

