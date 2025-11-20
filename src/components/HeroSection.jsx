import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dryfruitImg from "../assets/dryfruits.jpg"
import dryfruit1 from "../assets/dryfruits1.jpg"
import dryfruit2 from "../assets/dryfruits2.jpg"

const heroImages = [dryfruitImg,dryfruit1,dryfruit2
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full bg-gradient-to-r from-amber-50 to-orange-100 py-10 px-6 md:px-12 flex justify-center pt-24"
    >
      <div className="relative w-full md:w-3/4 lg:w-2/3 h-[300px] rounded-xl overflow-hidden shadow-xl">
       
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[index]}
            src={heroImages[index]}
            alt="Dry Fruits Banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-3">
            Premium Dry Fruits for a Healthier Life
          </h2>
          <p className="text-100 text-base text-white md:text-lg font-medium mb-4">
            100% Natural • Handpicked • Freshly Packed
          </p>
          {/* <a
            href="#products"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Shop Now
          </a> */}
        </div>
      </div>
    </section>
  );
}
