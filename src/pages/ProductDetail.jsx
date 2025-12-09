import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAVY = "#0D47A1";
const GOLD = "#C8A84E";
const OFFWHITE = "#F5F1E8";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex items-start justify-center p-10 pt-40">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg">
          <p className="text-xl text-gray-700 mb-4">Product not found.</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#0D47A1] hover:bg-[#062d6d] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10 mt-32" style={{ background: OFFWHITE }}>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <h1
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: NAVY }}
          >
            {product.name}
          </h1>

          {/* Large Image */}
          <div
            className="rounded-xl overflow-hidden shadow-xl mb-6"
            style={{ border: "3px solid #d1d5db" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/66982818995"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center font-semibold px-6 py-4 rounded-lg transition-all"
            style={{
              background: NAVY,
              color: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Contact to Order →
          </a>
        </div>

        {/* RIGHT SIDE DETAILS CARD */}
        <div
          className="w-full lg:w-1/2 rounded-xl shadow-xl p-8"
          style={{
            background: "white",
            border: `1px solid ${GOLD}55`,
          }}
        >

          {/* PRODUCT DETAILS */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: NAVY }}
          >
            Product Specifications
          </h3>

          <table className="w-full text-sm border border-gray-200 mb-8 rounded-lg overflow-hidden">
            <thead>
              <tr style={{ background: NAVY, color: "white" }}>
                <th className="py-2 px-4 w-1/3">Category</th>
                <th className="py-2 px-4 w-2/3">Content</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Origin
                </td>
                <td className="px-4 py-2 text-gray-700">{product.origin}</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Color
                </td>
                <td className="px-4 py-2 text-gray-700">{product.color}</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Moisture
                </td>
                <td className="px-4 py-2 text-gray-700">{product.moisture}</td>
              </tr>

              <tr>
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Oil Content
                </td>
                <td className="px-4 py-2 text-gray-700">1% - 5%</td>
              </tr>
            </tbody>
          </table>

          {/* PACKAGING SPECIFICATIONS */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: NAVY }}
          >
            Packaging & Shipment
          </h3>

          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr style={{ background: NAVY, color: "white" }}>
                <th className="py-2 px-4 w-1/3">Category</th>
                <th className="py-2 px-4 w-2/3">Content</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Packing
                </td>
                <td className="px-4 py-2 text-gray-700">10kgs/carton</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Container Capacity
                </td>
                <td className="px-4 py-2 text-gray-700">
                  8 MTs/20FT; 19 MTs/40HC
                </td>
              </tr>

              <tr>
                <td className="border-r border-gray-200 px-4 py-2 font-medium text-gray-700">
                  Port of Loading
                </td>
                <td className="px-4 py-2 text-gray-700">Vietnam Port</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
