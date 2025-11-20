import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // ← your actual logo

const Footer = () => {
  const NAVY = "#0D47A1";
  const DARK_NAVY = "#072D63";
  const GOLD = "#C8A84E";

  return (
    <footer style={{ background: NAVY, color: "white" }} className="pt-12">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

        {/* LOGO & COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
           <img
             src={logo}
             alt="Lion & Lotus Logo"
             className="w-20 h-20 object-contain bg-white p-2 rounded-full shadow-md border border-gray-300"
            />

            <span className="text-lg font-semibold">
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
          <h2 className="text-lg font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#C8A84E] transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#C8A84E] transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-[#C8A84E] transition-colors">About Us</Link></li>
            <li><Link to="/factorypage" className="hover:text-[#C8A84E] transition-colors">Factory</Link></li>
            <li><a href="/#news" className="hover:text-[#C8A84E] transition-colors">News</a></li>
            <li><a href="/#contact" className="hover:text-[#C8A84E] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Contact</h2>
          <div className="space-y-2 text-sm text-white/80">
            <p>Email: info@lion-lotus.co</p>
            <p>Hotline: +65 8035 0461 / +66 98281 8995</p>
            <p>Address: 158 Soi Hua Mak 27, Hua Mak, Bangkapi, Bangkok 10250, Thailand</p>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-[#C8A84E] transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-[#C8A84E] transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-[#C8A84E] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#C8A84E] transition-colors"><FaLinkedin /></a>
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
