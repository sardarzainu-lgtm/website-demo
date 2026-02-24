import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // ← your actual logo

const Footer = () => {
  const NAVY = "#0D47A1";
  const DARK_NAVY = "#072D63";
  const GOLD = "#C8A84E";

  return (
    <footer
      style={{
        background: `radial-gradient(circle at 20% 0%, #1E3A8A 0%, ${NAVY} 40%, ${DARK_NAVY} 100%)`,
        color: "white",
      }}
      className="pt-12 border-t border-white/10"
    >

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 pb-10">

        {/* LOGO & COMPANY INFO */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
           <img
             src={logo}
             alt="Lion & Lotus Logo"
             className="w-20 h-20 object-contain bg-white p-2 rounded-full shadow-md border border-gray-300"
            />

            <span className="text-lg font-semibold leading-snug">
              Lion & Lotus Trading Co., Ltd
            </span>
          </div>

          <p className="text-sm text-white/80 leading-relaxed">
            Global exporters of premium cashews, coconuts, spices & agricultural commodities.
            Delivering certified, high-grade products across international markets.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xs font-semibold mb-3 text-white/70 tracking-[0.2em] uppercase">
            Navigation
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#C8A84E] transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#C8A84E] transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-[#C8A84E] transition-colors">About Us</Link></li>
            <li><Link to="/factorypage" className="hover:text-[#C8A84E] transition-colors">Processing</Link></li>
            {/* <li><a href="/#news" className="hover:text-[#C8A84E] transition-colors">News</a></li>
            <li><a href="#contact" className="hover:text-[#C8A84E] transition-colors">Contact</a></li> */}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-xs font-semibold mb-3 text-white/70 tracking-[0.2em] uppercase">
            Contact
          </h2>
          <div className="space-y-2 text-sm text-white/80">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:kashif@lion-lotus.co"
                className="hover:text-[#C8A84E] transition-colors break-all"
              >
                kashif@lion-lotus.co
              </a>
            </p>
            <p>
              <span className="font-semibold">Hotline:</span>{" "}
              <a href="tel:+6580350461" className="hover:text-[#C8A84E] transition-colors">
                +65 8035 0461
              </a>{" "}
              /{" "}
              <a href="tel:+66982818995" className="hover:text-[#C8A84E] transition-colors">
                +66 98281 8995
              </a>
            </p>
            <p>
              <span className="font-semibold">Head Office:</span>
              <br />
              158 Soi Hua Mak 27, Hua Mak, Bangkapi,
              <br />
              Bangkok 10250, Thailand
            </p>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h2 className="text-xs font-semibold mb-3 text-white/70 tracking-[0.2em] uppercase">
            Follow Us
          </h2>
          <div className="flex space-x-3 text-2xl">
            <a
              href="https://www.facebook.com/share/16AUjJcHMD/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 hover:text-[#C8A84E] transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/66982818995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 hover:text-[#C8A84E] transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div
        className="text-center text-sm py-4"
        style={{ background: DARK_NAVY }}
      >
        © 2025 Lion & Lotus Trading Co., Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
