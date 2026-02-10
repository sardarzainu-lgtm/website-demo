// src/components/InquiryForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Match your theme
const NAVY = "#0A1C2E";
const ROYAL = "#0D47A1";
const GOLD = "#D4A857";
const OFFWHITE = "#F6F6F6";

const InquiryForm = ({ compact = false }) => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_2wtfwn7",
        "template_yxhwfq3",
        formRef.current,
        "nrmc3wgVxGeC9wd44"      // <- replace
              // <- replace
      )
      .then(
        () => {
          setIsSending(false);
          setStatus({
            type: "success",
            message: "Your inquiry has been sent. We will get back to you shortly.",
          });
          formRef.current?.reset();
        },
        () => {
          setIsSending(false);
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again in a moment.",
          });
        }
      );
  };

  return (
    <div
      className={
        compact
          ? "w-full h-full rounded-2xl shadow-md p-4 sm:p-6 border bg-white flex flex-col"
          : "w-full max-w-xl mx-auto rounded-2xl shadow-2xl p-6 sm:p-8 border bg-white flex flex-col"
      }
      style={compact ? {} : { borderColor: "#E5E7EB" }}
    >
      <div className="flex-1 flex flex-col justify-between">
        <h3
          className="text-xl sm:text-2xl font-bold mb-1"
          style={{ color: NAVY }}
        >
          Send an Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          Share your product requirements and our team will respond with details,
          pricing and next steps.
        </p>
        <p className="text-[11px] sm:text-xs text-gray-400 mb-5">
          Fields marked <span className="text-red-500">*</span> are required.
        </p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">

  {/* Hidden reply-to for EmailJS */}
  <input type="hidden" name="reply_to" value="" />

  {/* Name + Email */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="user_name"
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1]"
        placeholder="Your full name"
      />
    </div>

    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="user_email"
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1]"
        placeholder="you@example.com"
      />
    </div>
  </div>

  {/* Company */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Company
    </label>
    <input
      type="text"
      name="company"
      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1]"
      placeholder="Company / Organization (optional)"
    />
  </div>

  {/* Product + Quantity */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Product of Interest <span className="text-red-500">*</span>
      </label>
      <select
        name="product_interest"
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] bg-white"
      >
        <option value="">Select product</option>
        <option value="Cashew">Cashew</option>
        <option value="Coconut">Coconut</option>
        <option value="Black Pepper">Black Pepper</option>
        <option value="Spices">Spices</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Quantity Required
      </label>
      <input
        type="text"
        name="quantity"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1]"
        placeholder="e.g. 1 container / 20 MT"
      />
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      name="message"
      required
      rows={4}
      className="w-full px-3 py-2 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1]"
      placeholder="Share product grade, packing, destination port etc."
    />
  </div>

  <button
    type="submit"
    disabled={isSending}
    className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors duration-200 transition-transform ${
      isSending
        ? "opacity-70 cursor-not-allowed"
        : "hover:bg-[#0b3a82] hover:-translate-y-0.5 shadow-md"
    }`}
    style={{ background: ROYAL }}
  >
    {isSending ? "Sending..." : "Submit Inquiry"}
  </button>

  {status && (
    <p
      className={`mt-3 text-xs sm:text-sm ${
        status.type === "success" ? "text-green-600" : "text-red-600"
      }`}
      aria-live="polite"
    >
      {status.message}
    </p>
  )}

</form>

      </div>
    </div>
  );
};

export default InquiryForm;
