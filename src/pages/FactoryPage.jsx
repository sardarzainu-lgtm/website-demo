import React from "react";

export default function FactoryPage() {
  return (
    <div className="bg-[#f5f1e8] pt-32 pb-20 px-4 md:px-10">

      {/* -------------------------------------- */}
      {/* SECTION 1 - CINNAMON FACTORY */}
      {/* -------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/f1.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/f2.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/f3.jpg" className="rounded-md w-full h-48 md:h-64 object-cover col-span-2" />
        </div>

        {/* TEXT */}
        <div className="border border-amber-300 bg-[#fffaf4] rounded-md p-6">
          <h2 className="text-xl font-bold text-[#2d5016] mb-3">
            Cinnamon – Cassia / Star Anise Factory
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong><br />
            - Factory 1: Minh Phu, Soc Son, Hanoi<br />
            - Factory 2: Mau A, Van Yen, Yen Bai Province<br /><br />

            <strong>Total Areas:</strong> 12,000 sqm<br />
            <strong>Capacity:</strong> 10–15,000 MTS per year.
          </p>
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* SECTION 2 - PEPPER FACTORY */}
      {/* -------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* TEXT */}
        <div className="border border-amber-300 bg-[#fffaf4] rounded-md p-6">
          <h2 className="text-xl font-bold text-[#2d5016] mb-3">
            Pepper Factory
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> Long Khanh, Dong Nai Province<br />
            <strong>Total Areas:</strong> 10,000 sqm<br />
            <strong>Capacity:</strong> 15–17,000 MTS/year<br /><br />
            Equipped with modern technology, our factory provides FQA pepper,
            ASTA clean pepper, ETO & Steam Sterilization cleaned pepper.
            Export standards: ISO, HACCP, FDA.
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/p1.jpg" className="rounded-md w-full h-48 md:h-64 object-cover col-span-2" />
          <img src="/images/p2.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/p3.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* SECTION 3 - CASHEW FACTORY */}
      {/* -------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/c1.jpg" className="rounded-md w-full h-48 md:h-64 object-cover col-span-2" />
          <img src="/images/c2.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/c3.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
        </div>

        {/* TEXT */}
        <div className="border border-amber-300 bg-[#fffaf4] rounded-md p-6">
          <h2 className="text-xl font-bold text-[#2d5016] mb-3">
            Cashew Nuts Factory
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> Long Giang, Binh Phuoc Province<br />
            <strong>Total Areas:</strong> 4,000 sqm<br />
            <strong>Capacity:</strong> 8–10,000 MTS/year<br /><br />
            Producing WW320, WW240, LP, SPB, etc.
            Certifications: HACCP, ISO, HALAL, FDA.
          </p>
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* SECTION 4 - COCONUT FACTORY */}
      {/* -------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

        {/* TEXT */}
        <div className="border border-amber-300 bg-[#fffaf4] rounded-md p-6">
          <h2 className="text-xl font-bold text-[#2d5016] mb-3">
            Desiccated Coconut Factory
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> My Thach, Ben Tre Province<br />
            <strong>Total Areas:</strong> 5,000 sqm<br />
            <strong>Capacity:</strong> 5–7,000 MTS/year<br /><br />
            Producing: High Fat, Low Fat Coconut, Chips, Flakes.
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/dc1.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/dc2.jpg" className="rounded-md w-full h-48 md:h-64 object-cover" />
          <img src="/images/dc3.jpg" className="rounded-md w-full h-48 md:h-64 object-cover col-span-2" />
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* CERTIFICATIONS */}
      {/* -------------------------------------- */}
      <h2 className="text-center text-[#2d5016] font-bold mb-8">Product Certification</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <img src="/images/cert1.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert2.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert3.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert4.jpg" className="w-full rounded-md shadow-sm" />

        <img src="/images/cert5.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert6.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert7.jpg" className="w-full rounded-md shadow-sm" />
        <img src="/images/cert8.jpg" className="w-full rounded-md shadow-sm" />
      </div>

      {/* -------------------------------------- */}
      {/* PRODUCTION ACTIVITIES */}
      {/* -------------------------------------- */}
      <h2 className="text-center text-[#2d5016] font-bold mb-8">
        Production Activities in Tuan Minh
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/images/a1.jpg" className="rounded-md w-full h-40 md:h-56 object-cover" />
        <img src="/images/a2.jpg" className="rounded-md w-full h-40 md:h-56 object-cover" />
        <img src="/images/a3.jpg" className="rounded-md w-full h-40 md:h-56 object-cover" />
        <img src="/images/a4.jpg" className="rounded-md w-full h-40 md:h-56 object-cover" />

        <img src="/images/a5.jpg" className="rounded-md w-full h-40 md:h-56 object-cover col-span-2 md:col-span-1" />
        <img src="/images/a6.jpg" className="rounded-md w-full h-40 md:h-56 object-cover col-span-2 md:col-span-1" />
      </div>
    </div>
  );
}
