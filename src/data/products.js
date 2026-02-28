// Canonical product list shared by:
// - Products page grid & filters
// - Navbar search + dropdown navigation
// - HomePage product carousel
//
// If you update specs / packing / loading for any SKU,
// do it here so all three places stay in sync.

import ww240Cashew from "../assets/ww240Cashew.webp";
import ww180Cashew from "../assets/ww180Cashew.webp";
import ww320Cashew from "../assets/ww320Cashew.webp";
import ww320HighQuality from "../assets/ww320HighQuality.webp";
import ww320Premium from "../assets/ww320Premium.webp";
import ww450Cashew from "../assets/ww450Cashew.webp";
import cashewSK from "../assets/cashewSK.webp";
import cashewSL from "../assets/cashewSL.webp";
import cashewnuts from "../assets/cashewnuts.webp";
import copraCup from "../assets/copraCup.webp";
import desiccatedCoconut from "../assets/desiccatedCoconut.webp";
import lowFatDesiccatedCoconut from "../assets/low-fat-desiccated-coconut.webp";
import highFatDesiccatedCoconut from "../assets/high-fat-desiccated-coconut.webp";
import mediumFatDesiccatedCoconut from "../assets/medium-fat-desiccated-cocunut.webp";
import driedGinger from "../assets/driedGinger.webp";
import gingerWholeDry from "../assets/drygng-dry.webp";
import gingerWholeFresh from "../assets/drygng-fresh.webp";
import roastedSaltedCashew from "../assets/roastedSaltedCashew.webp";
import whitePepper from "../assets/whitePepper.webp";
import blackPepper from "../assets/blackPepper.webp";
import brazilianBlackPepper from "../assets/brazilianBlackPepper.webp";
import mangoChips from "../assets/mango-chips.webp";
import redChilli from "../assets/red-chilli.webp";
import starAnise from "../assets/star-anise.webp";
import sweetTamarind from "../assets/sweet-tamarind.webp";
import robustaBeans from "../assets/robusta-beans.webp";
import robustaS16Clean from "../assets/robustas16-clean-welpolished.webp";
import robustaS18Clean from "../assets/robusta-s18-clean.webp";
import robustaS13 from "../assets/robusta-s13.webp";
import arabicaS16S18 from "../assets/arabic-s16-s18.webp";
import blackCardamom from "../assets/black-cardamom.webp";
import greenCardamom from "../assets/green-cardamom.webp";
import bigCardamom from "../assets/big-cardamom.webp";
import turmericFinger from "../assets/termaricFinger.webp";
import walnuts from "../assets/walnuts.webp";
import cassiaSplit from "../assets/cassia-split.webp";
import cassiaPressed from "../assets/cassia-pressed.webp";
import brokenCassia from "../assets/broken-cassia.webp";
import cassiaCigarette from "../assets/cassia-ciggarette.webp";
import cassiaPowder from "../assets/cassia-powder.webp";
import cassiaLeave from "../assets/cassia-leave.jpg";
import cassiaHusk from "../assets/cassia-husk.jpg";
import cassiaLongstick from "../assets/cassia-longstick.webp";
import pumpkinAAA from "../assets/pumpkin-aaa.webp";
import pumpkinAA from "../assets/pumpkin-aa.webp";
import pumpkinA from "../assets/pumpkin-a.webp";
import sunflowerSeeds from "../assets/sunflower-seeds.webp";
import sunflowerKernels from "../assets/sunflower-kernels.webp";
import watermelonSeeds from "../assets/watermelon-seed.webp";
import nigellaSativa from "../assets/nigella-sativa.webp";
import chinesePeanut from "../assets/chinese-peanunt.webp";
import almond from "../assets/almond.webp";
import cloves from "../assets/cloves.webp";

export const products = [
  { id: 1, name: "Cashew Nuts", category: "Cashew Nuts", image: cashewnuts, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", packing: "10kg/vacuum bag or tin packing", containerCapacity: "15MT/20ft, 26.5MT/40ft" },
  {
    id: 29,
    name: "Cashew Nuts WW320",
    category: "Cashew Nuts",
    subcategory: "WW320",
    image: ww320Cashew,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "300-320",
    broken: "7-8% max",
    lowerSize: "7-8% max",
    spec:
      "AFI Standard 2012\n- Counter per lb (seeds/lb): 300-320\n- Color: white, ivory white\n- Moisture: 5% max\n- Broken: 7-8% max\n- Lower size: 7-8% max",
    packing: "Vacuum/tin packing",
    containerCapacity: "15MT/20FT, 26.5MT/40FT",
  },
  { id: 2, name: "Desiccated Coconut", category: "Desiccated Coconut", image: desiccatedCoconut, origin: "Vietnam", moisture: "3% max" },
  { id: 3, name: "Edible Copra", category: "Edible Copra", image: copraCup, origin: "Indonesia", moisture: "7-10%", packing: "40 Kg Net in Mesh Bags", description: "Looking for premium quality copra? Our Edible Copra is the perfect choice for various food applications and international trade!", fullName: "Edible Copra (White Copra Sundry - Split)" },
  { id: "pepper", name: "Pepper", category: "Pepper", image: blackPepper, origin: "Vietnam", moisture: "13.5% max", packing: "25kg/bag", containerCapacity: "15MT/20ft, 28MT/40ft" },
  { id: 4, name: "Black Pepper", category: "Pepper", subcategory: "Black Pepper", image: blackPepper, origin: "Vietnam", moisture: "13.5% max", packing: "25kg/PP bag", containerCapacity: "15MT/20FT, 28MT/40FT" },
  {
    id: 5,
    name: "White Pepper 630g/l (EU Standard)",
    category: "Pepper",
    subcategory: "White Pepper",
    image: whitePepper,
    origin: "Vietnam",
    moisture: "13.5% max",
    density: "630g/l",
    admixture: "0.5% max",
    blackSeeds: "2% max",
    spec:
      "- Density: 630g/l\n- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Black seeds: 2% max\n- Free from mould, no stone, no metal",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  { id: 6, name: "Fresh Ginger", category: "Fresh Ginger", image: driedGinger, origin: "Vietnam", moisture: "8%" },
  { id: 47, name: "CARDAMOM", category: "Cardamom", image: greenCardamom, origin: "Guatemala", moisture: "12% max", admixture: "0.5% max", size: "Small to medium pods", color: "Green", description: "Premium quality green cardamom with sweet, floral aroma. Perfect for desserts, teas, and savory dishes. Known as the 'Queen of Spices'." },

  // CATEGORIZED UNDER GINGER - WHOLE GINGER
  { id: 38, name: "Dried Ginger Whole Dry", category: "Fresh Ginger", subcategory: "Whole Ginger", image: gingerWholeDry, origin: "Vietnam", moisture: "10% max", grade: "Whole", appearance: "Natural color, clean, no foreign matter", packing: "10-25 kg bags" },
  { id: 39, name: "Dried Ginger Whole Fresh", category: "Fresh Ginger", subcategory: "Whole Ginger", image: gingerWholeFresh, origin: "Vietnam", moisture: "12-15%", grade: "Whole Fresh", appearance: "Fresh appearance, natural color, clean", packing: "10-25 kg bags" },

  // CATEGORIZED UNDER GINGER - SLICE GINGER
  { id: 35, name: "DRY SLICE GINGER A GRADE", category: "Fresh Ginger", subcategory: "Slice Ginger", image: driedGinger, origin: "Vietnam", moisture: "8%" },
  { id: 36, name: "DRY SLICE GINGER B GRADE", category: "Fresh Ginger", subcategory: "Slice Ginger", image: driedGinger, origin: "Vietnam", moisture: "8%" },
  { id: 37, name: "DRY SLICE GINGER C GRADE", category: "Fresh Ginger", subcategory: "Slice Ginger", image: driedGinger, origin: "Vietnam", moisture: "8%" },

  // CATEGORIZED UNDER CASHEW NUTS - Roasted (A180, A240, A320)
  {
    id: 7,
    name: "Salted and Roasted A180",
    category: "Cashew Nuts",
    subcategory: "Roasted",
    image: roastedSaltedCashew,
    origin: "Vietnam",
    moisture: "5% max",
    spec:
      "AFI Standard 2012\n- Counter per lb (seeds/lb): 160-180\n- Color: white, ivory white\n- Moisture: 5% max\n- Processing: Salted Roasted",
    packing: "Jar 500gram",
    containerCapacity: "11MT/20FT, 24MT/40FT",
  },
  { id: 28, name: "Cashew Nuts WW320 AFI Standard", category: "Cashew Nuts", subcategory: "WW320", image: ww320Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max", packing: "10kg/vacuum bag or tin packing", containerCapacity: "15MT/20ft, 26.5MT/40ft" },
  { id: 8, name: "Cashew Nuts WW320 High Quality", category: "Cashew Nuts", subcategory: "WW320", image: ww320HighQuality, origin: "Vietnam", moisture: "5% max", standard: "High Quality", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max", packing: "10kg/vacuum bag or tin packing", containerCapacity: "15MT/20ft, 26.5MT/40ft" },
  { id: 27, name: "Cashew Nuts WW320 Premium", category: "Cashew Nuts", subcategory: "WW320", image: ww320Premium, origin: "Vietnam", moisture: "5% max", standard: "Standard Premium", seedsPerLb: "300-320", broken: "5% max", lowerSize: "7-8% max", packing: "10kg/vacuum bag or tin packing", containerCapacity: "15MT/20ft, 26.5MT/40ft" },
  {
    id: 9,
    name: "Cashew Nuts WW240",
    category: "Cashew Nuts",
    subcategory: "WW240",
    image: ww240Cashew,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "220-240",
    broken: "7-8% max",
    lowerSize: "7-8% max",
    spec:
      "AFI Standard 2012\n- Seeds/lb: 220-240\n- Color: white, ivory white\n- Moisture: 5% max\n- Broken: 7-8% max\n- Lower size: 7-8% max",
    packing: "Vacuum/tin packing",
    containerCapacity: "15MT/20FT, 26.5MT/40FT",
  },
  {
    id: 10,
    name: "Cashew Nuts WW180",
    category: "Cashew Nuts",
    subcategory: "WW180",
    image: ww180Cashew,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "160-180",
    broken: "7-8% max",
    lowerSize: "7-8% max",
    spec:
      "AFI Standard 2012\n- Counter per lb (seeds/lb): 160-180\n- Color: white, ivory white\n- Moisture: 5% max\n- Broken: 7-8% max\n- Lower size: 7-8% max",
    packing: "Vacuum/tin packing",
    containerCapacity: "15MT/20FT, 26.5MT/40FT",
  },
  { id: 11, name: "Cashew Nuts WW450", category: "Cashew Nuts", subcategory: "WW450", image: ww450Cashew, origin: "Vietnam", moisture: "5% max", standard: "AFI Standard 2012", packing: "10kg/vacuum bag or tin packing", containerCapacity: "15MT/20ft, 26.5MT/40ft" },
  {
    id: 12,
    name: "Cashew Nuts SK",
    category: "Cashew Nuts",
    subcategory: "SK",
    image: cashewSK,
    origin: "Vietnam",
    moisture: "5% max",
    spec:
      "AFI Standard 2012\n- Seeds/lb: on sieve 6.3 mm\n- Color: white, ivory white\n- Moisture: 5% max\n- New crop",
    packing: "Vacuum",
    containerCapacity: "13MT/20FT, 22MT/40FT",
  },
  {
    id: 13,
    name: "Cashew Nuts SL",
    category: "Cashew Nuts",
    subcategory: "SL",
    image: cashewSL,
    origin: "Vietnam",
    moisture: "5% max",
    packing: "Vacuum",
    containerCapacity: "13MT/20FT, 22MT/40FT",
  },
  {
    id: 21,
    name: "Cashew Nuts LP",
    category: "Cashew Nuts",
    subcategory: "LP",
    image: cashewnuts,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    sieve: "6.3 mm",
    crop: "New crop",
    spec:
      "AFI Standard 2012\n- Seeds/lb: on sieve 6.3 mm\n- Color: white, ivory white\n- Moisture: 5% max\n- New crop",
    packing: "Vacuum",
    containerCapacity: "13MT/20FT, 22MT/40FT",
  },
  {
    id: 22,
    name: "Cashew Nuts WS",
    category: "Cashew Nuts",
    subcategory: "WS",
    image: cashewnuts,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    nutSize: "WS large/small size",
    spec:
      "AFI 2012 standard\n- Color: white, ivory white\n- Moisture: 5% max\n- Made from W180 and W210 for WS large size\n- Made from W240 and W320 for WS small size\n- Broken pieces: 7-8% max",
    packing: "Vacuum",
    containerCapacity: "13MT/20FT, 22MT/40FT",
  },

  // CATEGORIZED UNDER BLACK PEPPER
  {
    id: 14,
    name: "Black Pepper 450g/l FAQ",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "13.5% max",
    density: "450g/l",
    admixture: "1% max",
    grade: "FAQ",
    spec:
      "- Density: 450g/l\n- Moisture 13.5% max\n- Admixture: 1% max\n- Free from mould",
    packing: "25kg/PP bag",
    containerCapacity: "6MT/20FT, 15MT/40FT",
  },
  {
    id: 15,
    name: "Black Pepper 500g/l FAQ",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "13.5% max",
    density: "500g/l",
    admixture: "1% max",
    grade: "FAQ",
    spec:
      "- Density: 500g/l\n- Moisture 13.5% max\n- Admixture: 1% max\n- Free from mould",
    packing: "25kg/PP bag",
    containerCapacity: "12MT/20FT, 25MT/40FT",
  },
  {
    id: 16,
    name: "Black Pepper 550g/l FAQ",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "13.5% max",
    density: "550g/l",
    admixture: "1% max",
    grade: "FAQ",
    spec:
      "- Density: 550g/l\n- Moisture 13.5% max\n- Admixture: 1% max\n- Free from mould",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  {
    id: 17,
    name: "Black Pepper 500g/l MC/ASTA",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "12.5% max",
    density: "500g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    spec:
      "- Density: 500g/l\n- Moisture 12.5% max\n- Admixture: 0.5% max\n- Free from mould, no stone, no metal",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  {
    id: 18,
    name: "Black Pepper 550g/l MC/ASTA",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "12.5% max",
    density: "550g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    spec:
      "- Density: 550g/l\n- Moisture 12.5% max\n- Admixture: 0.5% max\n- Free from mould, no stone, no metal",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  {
    id: 19,
    name: "Black Pepper 570g/l MC/ASTA",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "12.5% max",
    density: "570g/l",
    admixture: "0.5% max",
    grade: "MC/ASTA",
    spec:
      "- Density: 570g/l\n- Moisture 12.5% max\n- Admixture: 0.5% max\n- Free from mould, no stone, no metal",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  {
    id: 20,
    name: "Black Pepper 5mm Bold",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "12.5% max",
    density: "570g/l - 580g/l , 80% on screen",
    admixture: "0.5% max",
    grade: "5mm Bold",
    size: "5mm (80% Min. on sieve)",
    spec:
      "- Density: 570g/l- 580g/l, 80% on screen\n- Moisture 12.5% max\n- Admixture: 0.5% max\n- Size: 5mm (80% Min. on sieve)\n- Free from mould, no stone, no metal",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  { id: 26, name: "Brazilian Black Pepper", category: "Pepper", subcategory: "Black Pepper", image: brazilianBlackPepper, origin: "Brazil", moisture: "13.5% max", appearance: "Small, dark brown to black, wrinkled berries (~4-5 mm)", aroma: "Strong, pungent, citrusy, slightly woody, and spicy", benefits: "Aids digestion, anti-inflammatory, weight loss", packing: "25kg/bag", containerCapacity: "15MT/20ft, 28MT/40ft" },

  // CATEGORIZED UNDER DESICCATED COCONUT
  {
    id: 23,
    name: "Low fat Desiccated Coconut Fine Grade",
    category: "Desiccated Coconut",
    subcategory: "Low fat",
    image: lowFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "5% max",
    ffa: "0.3% max",
    fatContent: "30-35% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 5% max\n- FFA : 0.3% max\n- Fat content: 30-35% min\n- SO2:100 ppm max,\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag1PE + 3 Krafts +1PP",
    containerCapacity: "12MT/20FT, 26MT/40FT",
  },
  {
    id: 24,
    name: "High fat Desiccated Coconut Fine Grade - Premium 63% min",
    category: "Desiccated Coconut",
    subcategory: "High fat Fine",
    image: highFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "3% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 3% max\n- FFA : 0.3% max\n- Fat content: 63% min\n- SO2:100 ppm max,\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag1PE + 3 Krafts +1PP",
    containerCapacity: "12MT/20FT, 27MT/40FT",
  },
  {
    id: 25,
    name: "High fat Desiccated Coconut Medium Grade - Premium 63% min",
    category: "Desiccated Coconut",
    subcategory: "High fat Medium",
    image: mediumFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "3% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 3% max\n- FFA : 0.3% max\n- Fat content: 63% min\n- SO2:100 ppm max,\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag1PE + 3 Krafts +1PP",
    containerCapacity: "12MT/20FT, 27MT/40FT",
  },

  // CATEGORIZED UNDER DRIED FRUITS
  { id: 30, name: "Soft Dried Mango", category: "Soft Dried Mango", image: mangoChips, origin: "Vietnam", moisture: "12-17% max", ingredients: "100% Mango", appearanceColor: "Yellow color", cuttingType: "Slice", process: "5-10% Sugar Added / without sugar-coated", length: "8cm - 10cm", thickness: "0.1cm - 0.2cm", shelfLife: "12 Months", packing: "Zip bags, craft paper, bulk packing depends on customer request from 100g - 10kg / pack" },

  // CATEGORIZED UNDER SPICES
  { id: 31, name: "TEJA RED CHILLI", category: "TEJA RED CHILLI", image: redChilli, origin: "India", pungency: "75,000 - 1,000,000 SHU", capsaicinContent: "1%", color: "Vibrant Red Color (ASTA 40-60)", length: "5-6 cm", skinThickness: "0.50-0.70 mm", podsWithStalks: "2%", brokenChilies: "1%", looseSeeds: "1%", description: "Perfect for adding bold spice to your curries, sauces, and snacks!" },
  { id: 32, name: "Star Anise", category: "Star Anise", image: starAnise, origin: "Vietnam", moisture: "13.5%", size: "2.5 cm 80% up", brokenPieces: "10% max", notes: "No fungus, natural color" },
  // CATEGORIZED UNDER STAR ANISE
  {
    id: 83,
    name: "Spring Star Anise",
    category: "Star Anise",
    subcategory: "Spring",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2 cm (80% up)",
    brokenPieces: "10% max",
    notes: "No fungus, natural color",
    spec:
      "- Flower size: 2 cm (80% up)\n- Broken pieces: 10% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
    description:
      "Premium quality spring harvest star anise from Vietnam. Harvested during spring season for optimal flavor and aroma.",
  },
  {
    id: 84,
    name: "Autumn Star Anise",
    category: "Star Anise",
    subcategory: "Autumn",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2.5 cm (70-80% up)",
    brokenPieces: "10-12% max",
    notes: "No fungus, natural color, new crop 2025",
    spec:
      "- Flower size: 2.5cm (70-80% up)\n- Broken pieces: 10-12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color\n- New crop: 2025",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
    description:
      "Premium quality autumn harvest star anise from Vietnam. Harvested during autumn season for rich, full-bodied flavor.",
  },
  {
    id: 85,
    name: "Canh Dan Star Anise",
    category: "Star Anise",
    subcategory: "Canh Dan",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2cm (70% up)",
    brokenPieces: "12% max",
    notes: "No fungus, natural color",
    spec:
      "- Flower size: 2cm (70% up)\n- Broken pieces: 12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
    description:
      "Premium quality Canh Dan variety star anise from Vietnam. Known for its distinctive aroma and superior quality.",
  },
  {
    id: 86,
    name: "Broken Star Anise",
    category: "Star Anise",
    subcategory: "Broken",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    brokenPieces: "High percentage",
    notes: "No fungus, natural color",
    spec:
      "- Stem and seeds: 3% max\n- Admixture: 1% max\n- Moisture: 13.5% max",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
    description:
      "Cost-effective broken star anise pieces from Vietnam. Ideal for grinding and commercial food processing applications.",
  },
  {
    id: 87,
    name: "Dyed Star Anise",
    category: "Star Anise",
    subcategory: "Dyed",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2.5 cm 80% up",
    notes: "Enhanced color, natural flavor",
    description:
      "Color-enhanced star anise from Vietnam. Ideal for decorative and culinary applications where visual appeal is important.",
  },
  {
    id: 45,
    name: "BIG CARDAMOM",
    category: "Cardamom",
    subcategory: "Big Cardamom",
    image: bigCardamom,
    origin: "Nepal",
    moisture: "13.5% max",
    admixture: "0.5% max",
    size: "Round shape",
    color: "Natural brown",
    spec:
      "- MOISTURE: 13.5%\n- ADMIXTURE: 0.5%\n- Strong smell, ROUND shape\n- New Crop 2025",
    packing: "30kg/PP bag",
    containerCapacity: "9MT/20FT, 23MT/40FT",
    description:
      "Premium round-shape cardamom with strong aroma. Ideal for teas, desserts, and spice blends.",
  },
  {
    id: 41,
    name: "BLACK CARDAMOM",
    category: "Cardamom",
    subcategory: "Black Cardamom",
    image: blackCardamom,
    origin: "Vietnam",
    moisture: "13.5% max",
    admixture: "0.5% max",
    shape: "Long, strong aroma",
    crop: "New crop 2025",
    spec:
      "- MOISTURE: 13.5%\n- ADMIXTURE: 0.5%\n- Strong smell, Long shape\n- New Crop 2025",
    packing: "30kg/PP bag",
    containerCapacity: "9MT/20FT, 19MT/40FT",
    description:
      "Bold, smoky flavor perfect for curries and soups. 100% natural, no additives or preservatives. Sourced sustainably from Vietnam's best farms.",
  },
  { id: 46, name: "GREEN CARDAMOM", category: "Cardamom", subcategory: "Green Cardamom", image: greenCardamom, origin: "Guatemala", moisture: "12% max", admixture: "0.5% max", size: "Small to medium pods", color: "Green", description: "Premium quality green cardamom with sweet, floral aroma. Perfect for desserts, teas, and savory dishes. Known as the 'Queen of Spices'." },
  { id: 42, name: "TURMERIC FINGER", category: "TURMERIC FINGER", image: turmericFinger, origin: "India", moisture: "10% max", curcuminContent: "3-5% min", color: "Bright Yellow to Deep Orange", shape: "Finger-like rhizomes", size: "3-5 cm length", admixture: "1% max", extraneousMatter: "0.5% max", description: "Premium quality turmeric fingers with high curcumin content. Perfect for culinary and medicinal uses. Natural, sun-dried, and free from additives." },
  { id: 57, name: "CASSIA/CINNAMON", category: "CASSIA/CINNAMON", image: cassiaSplit, origin: "Vietnam", moisture: "13% max", description: "Premium quality cassia/cinnamon products from Vietnam. Available in various forms including split, pressed, broken, cigarette, powder, leaves, husk, long stick, and split varieties." },
  // CATEGORIZED UNDER CASSIA/CINNAMON
  {
    id: 48,
    name: "SPLIT CASSIA",
    category: "CASSIA/CINNAMON",
    subcategory: "Split",
    image: cassiaSplit,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Length: 35-45 cm\n- Thickness: 0.8mm- 2.0 mm\n- Admixture: 0.5% max\n- Not black inside, unmouldy, natural brown colour, thin bark,",
    packing: "10kg/carton",
    containerCapacity: "6MT/20FT, 15MT/40FT",
  },
  {
    id: 49,
    name: "PRESSED CASSIA",
    category: "CASSIA/CINNAMON",
    subcategory: "Pressed",
    image: cassiaPressed,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Length: 35-45 cm\n- Thickness: 0.8mm- 2.5 mm\n- Admixture: 0.5% max\n- Not black inside, unmouldy, natural brown colour, thin bark,",
    packing: "10kg/carton",
    containerCapacity: "9MT/20FT, 18MT/40FT",
  },
  {
    id: 50,
    name: "BROKEN CASSIA",
    category: "CASSIA/CINNAMON",
    subcategory: "Broken",
    image: brokenCassia,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Grade: A, pure cassia broken\n- Color: Natural brown\n- Moisture : 13.5% max\n- Length : 3 - 10 cm\n- Thickness: 0.8 - 2.0 mm\n- Impurity: 1% max\n- Free from sand, soil, stone, live/dead insects & animal drops",
    packing: "25kg/PP Bag",
    containerCapacity: "7MT/20FT, 15MT/40FT",
  },
  {
    id: 51,
    name: "CASSIA CIGARETTE",
    category: "CASSIA/CINNAMON",
    subcategory: "Cigarette",
    image: cassiaCigarette,
    origin: "Vietnam",
    placeOfOrigin: "Yen Bai, Vietnam",
    roll: "70-90% min",
    size: "8 cm",
    taste: "pungency, spicy",
    color: "Natural brown",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5%max\n- Length: 8cm\n- Thickness: 0.8-2.5mm\n- Roll: 70-90% min\n- Diameter : 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency \n- Not black inside, unmouldy,free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "1kg/mesh bag; 10kg/carton",
    containerCapacity: "7MT/20FT, 17MT/40FT",
  },
  {
    id: 52,
    name: "CASSIA POWDER",
    category: "CASSIA/CINNAMON",
    subcategory: "Powder",
    image: cassiaPowder,
    origin: "Vietnam",
    moisture: "10% max",
    spec:
      "- Moisture: 10% max\n- Oil content: 1.5% - 3%\n- Admixture: 0.5% max\n- Mesh: #60",
    packing: "25kg/bag1PE + 1 KP",
    containerCapacity: "15MT/20FT, 27MT/40FT",
  },
  {
    id: 53,
    name: "CASSIA LEAVE",
    category: "CASSIA/CINNAMON",
    subcategory: "Leaves",
    image: cassiaLeave,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture : 13.5% max\n- Admixture: 0.5% max\n- No dust, no powder, natural green",
    packing: "25kg/PP bag",
    containerCapacity: "9MT/20FT, 19MT/40FT",
  },
  {
    id: 54,
    name: "CASSIA HUSK",
    category: "CASSIA/CINNAMON",
    subcategory: "Husk",
    image: cassiaHusk,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture : 13.5% max\n- Admixture: 0.5% max",
    packing: "25kg/PP Bag",
    containerCapacity: "7MT/20FT, 15MT/40FT",
  },
  {
    id: 55,
    name: "CASSIA LONG STICK",
    category: "CASSIA/CINNAMON",
    subcategory: "Long Stick",
    image: cassiaLongstick,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5%max\n- Length: 30-45cm\n- Thickness: 0.8-2.5mm\n- Roll: 70-85% min\n- Diameter : 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency \n- Not black inside, unmouldy,free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "20kg/carton",
    containerCapacity: "5MT/20FT, 12MT/40FT",
  },

  // CATEGORIZED UNDER DRIED FRUITS / NUTS
  { id: 43, name: "WALNUTS", category: "WALNUTS", image: walnuts, origin: "Chile", moisture: "8% max", kernelYield: "45-50% min", brokenKernels: "5% max", foreignMatter: "0.5% max", size: "Extra Large (32mm+)", color: "Light Brown to Golden", grade: "Premium Grade", description: "Premium quality walnuts with high kernel yield. Rich in omega-3 fatty acids and antioxidants. Perfect for snacking, baking, and culinary applications. Naturally dried and free from preservatives." },

  // MAIN CATEGORY PRODUCTS
  { id: 92, name: "Seeds", category: "Seeds", image: pumpkinAAA, origin: "Various", moisture: "8% max", description: "Premium quality seeds including pumpkin seeds, sunflower seeds, and watermelon seeds. Perfect for snacking, baking, and culinary applications." },
  { id: 63, name: "Pumpkin Seeds", category: "Seeds", subcategory: "Pumpkin Seeds", image: pumpkinAAA, origin: "China", moisture: "8% max", description: "Premium quality pumpkin seeds available in various grades. Perfect for snacking, baking, and culinary applications." },
  { id: 64, name: "Sunflower Seeds", category: "Seeds", subcategory: "Sunflower Seeds", image: sunflowerSeeds, origin: "China", moisture: "8% max", description: "Premium quality sunflower seeds available in confectionery and bakery grades. Perfect for snacking and baking applications." },
  { id: 66, name: "Peanuts", category: "Peanuts", image: chinesePeanut, origin: "China", moisture: "7% max", description: "Premium quality Chinese peanuts available in various sizes. Perfect for snacking, cooking, and commercial applications." },
  { id: 75, name: "Almonds", category: "Almonds", image: almond, origin: "USA", moisture: "6% max", description: "Premium quality almonds available in various sizes. Perfect for snacking, baking, and commercial applications." },

  // CATEGORIZED UNDER PUMPKIN SEEDS
  { id: 58, name: "Pumpkin Seeds Grade AAA", category: "Seeds", subcategory: "Pumpkin Seeds", image: pumpkinAAA, origin: "China", moisture: "8% max", grade: "AAA", purity: "99% min", size: "Large, uniform seeds", color: "Green to dark green", description: "Premium quality pumpkin seeds Grade AAA. Large, uniform seeds with excellent taste and texture. Perfect for snacking, baking, and culinary applications." },
  { id: 59, name: "Pumpkin Seeds Grade AA", category: "Seeds", subcategory: "Pumpkin Seeds", image: pumpkinAA, origin: "China", moisture: "8% max", grade: "AA", purity: "98% min", size: "Medium to large seeds", color: "Green to dark green", description: "High quality pumpkin seeds Grade AA. Medium to large seeds with good taste and texture. Perfect for snacking, baking, and culinary applications." },
  { id: 60, name: "Pumpkin Seeds Grade A", category: "Seeds", subcategory: "Pumpkin Seeds", image: pumpkinA, origin: "China", moisture: "8% max", grade: "A", purity: "97% min", size: "Medium seeds", color: "Green to dark green", description: "Quality pumpkin seeds Grade A. Medium seeds suitable for various applications. Perfect for snacking, baking, and culinary uses." },

  // CATEGORIZED UNDER SUNFLOWER SEEDS
  { id: 61, name: "Sunflower Seeds Confectionery Grade", category: "Seeds", subcategory: "Sunflower Seeds", image: sunflowerSeeds, origin: "China", moisture: "8% max", grade: "Confectionery Grade", size: "Large seeds", color: "Black and white striped", description: "Premium quality sunflower seeds confectionery grade. Large seeds perfect for snacking. Rich in vitamin E and healthy fats. Natural, roasted, and ready to eat." },
  { id: 62, name: "Sunflower Seeds Bakery Grade", category: "Seeds", subcategory: "Sunflower Seeds", image: sunflowerKernels, origin: "China", moisture: "8% max", grade: "Bakery Grade", size: "Smaller kernels", color: "Light beige to white", description: "High quality sunflower seeds bakery grade. Smaller kernels perfect for baking and cooking applications. Ideal for bread, cookies, and other baked goods." },

  // WATERMELON SEEDS
  { id: 93, name: "Watermelon Seeds", category: "Seeds", subcategory: "Watermelon Seeds", image: watermelonSeeds, origin: "China", moisture: "8% max", purity: "99% min", color: "Black with white edges", description: "Premium quality watermelon seeds. Rich in protein, healthy fats, and essential minerals. Perfect for snacking, roasting, and culinary applications." },

  // CATEGORIZED UNDER PEANUTS - LARGE SIZE
  { id: 67, name: "Peanuts L(25/29)", category: "Peanuts", subcategory: "Large", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Large (25-29 kernels per ounce)", grade: "Large", description: "Premium quality Chinese peanuts, large size (25-29 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  { id: 68, name: "Peanuts L(29/33)", category: "Peanuts", subcategory: "Large", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Large (29-33 kernels per ounce)", grade: "Large", description: "Premium quality Chinese peanuts, large size (29-33 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  // CATEGORIZED UNDER PEANUTS - MEDIUM SIZE
  { id: 69, name: "Peanuts M(35/39)", category: "Peanuts", subcategory: "Medium", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Medium (35-39 kernels per ounce)", grade: "Medium", description: "Premium quality Chinese peanuts, medium size (35-39 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  { id: 70, name: "Peanuts M(39/43)", category: "Peanuts", subcategory: "Medium", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Medium (39-43 kernels per ounce)", grade: "Medium", description: "Premium quality Chinese peanuts, medium size (39-43 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  // CATEGORIZED UNDER PEANUTS - SMALL SIZE
  { id: 71, name: "Peanuts S(41/51)", category: "Peanuts", subcategory: "Small", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Small (41-51 kernels per ounce)", grade: "Small", description: "Premium quality Chinese peanuts, small size (41-51 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  { id: 72, name: "Peanuts S(51/61)", category: "Peanuts", subcategory: "Small", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Small (51-61 kernels per ounce)", grade: "Small", description: "Premium quality Chinese peanuts, small size (51-61 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  { id: 73, name: "Peanuts S(61/71)", category: "Peanuts", subcategory: "Small", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Small (61-71 kernels per ounce)", grade: "Small", description: "Premium quality Chinese peanuts, small size (61-71 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },
  { id: 74, name: "Peanuts S(71/91)", category: "Peanuts", subcategory: "Small", image: chinesePeanut, origin: "China", moisture: "7% max", size: "Small (71-91 kernels per ounce)", grade: "Small", description: "Premium quality Chinese peanuts, small size (71-91 kernels per ounce). Perfect for snacking, cooking, and commercial applications." },

  // CATEGORIZED UNDER ALMONDS - BY SIZE
  { id: 76, name: "Almonds 18/20", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Largest (18-20 kernels per ounce)", grade: "Premium", description: "Premium quality almonds, largest size (18-20 kernels per ounce). Premium size often used for chocolate coating or high-end snacking. Perfect for premium retail packs and gourmet applications." },
  { id: 77, name: "Almonds 20/22", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Second largest (20-22 kernels per ounce)", grade: "Premium", description: "Premium quality almonds, second largest size (20-22 kernels per ounce). Popular for premium retail packs. Perfect for snacking and high-end applications." },
  { id: 78, name: "Almonds 23/25", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Standard large (23-25 kernels per ounce)", grade: "Large", description: "Premium quality almonds, standard large size (23-25 kernels per ounce). Commonly used in snacking. Perfect for retail packs and commercial applications." },
  { id: 79, name: "Almonds 25/27", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Medium-large (25-27 kernels per ounce)", grade: "Medium-Large", description: "Premium quality almonds, medium-large size (25-27 kernels per ounce). Perfect for snacking, baking, and commercial applications." },
  { id: 80, name: "Almonds 27/30", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Medium (27-30 kernels per ounce)", grade: "Medium", description: "Premium quality almonds, medium size (27-30 kernels per ounce). Perfect for snacking, baking, and commercial applications." },
  { id: 81, name: "Almonds 30/32", category: "Almonds", subcategory: "By size", image: almond, origin: "USA", moisture: "6% max", size: "Medium-small (30-32 kernels per ounce)", grade: "Medium-Small", description: "Premium quality almonds, medium-small size (30-32 kernels per ounce). Perfect for snacking, baking, and commercial applications." },

  // CATEGORIZED UNDER SPICES
  { id: 65, name: "Nigella sativa", category: "Nigella sativa", image: nigellaSativa, origin: "India", moisture: "7% max", purity: "99%, 99.50%, 99.90%", oilContents: "36%", nonGMO: "Yes", description: "Premium quality Nigella sativa (black seed) from India. High purity levels available (99%, 99.50%, 99.90%). Rich in oil content (36%) and certified Non-GMO. Known for its medicinal properties and culinary uses." },
  { id: 82, name: "Cloves", category: "Cloves", image: cloves, origin: "Indonesia", moisture: "12% max", botanicalName: "Syzygium aromaticum", appearance: "Whole dried buds, rich dark brown to reddish-brown", foreignMatter: "1% max", grade: "Hand-picked, sorted – multiple grades available", aroma: "Strong, warm & spicy", packing: "25 kg or 50 kg net weight - Polypropylene or jute bags", description: "Premium quality cloves direct from Indonesia. Whole dried buds with rich dark brown to reddish-brown color. Hand-picked and sorted with multiple grades available. Strong, warm and spicy aroma. Perfect for culinary and commercial applications." },

  // CATEGORIZED UNDER DRIED FRUITS
  { id: 33, name: "Sweet Tamarind", category: "Sweet Tamarind", image: sweetTamarind, origin: "Vietnam", moisture: "10-14%", variety: "Sirthong", size: "6.9 - 7.5 inches", process: "Not steamed" },

  // CATEGORIZED UNDER COFFEE
  { id: 34, name: "Green Coffee Beans", category: "Green Coffee Beans", image: robustaBeans, origin: "Vietnam", moisture: "12.5%", description: "Premium quality green coffee beans from Vietnam. Available in Robusta and Arabica varieties." },
  // CATEGORIZED UNDER GREEN COFFEE BEANS
  {
    id: 88,
    name: "Robusta Coffee Beans S16 Clean/Wet Polished",
    category: "Green Coffee Beans",
    subcategory: "Robusta",
    image: robustaS16Clean,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S16 Clean/Wet Polished",
    spec:
      "- Black&Broken: 0.5% max\n- Moisture: 12.5% max\n- Admixture: 0.1% max\n- 90% min on screen No.16\n- Wet polished",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
    description:
      "Premium quality Robusta coffee beans S16 grade, clean and wet polished. Perfect for commercial roasting and blending.",
  },
  {
    id: 89,
    name: "Robusta Coffee Beans S18 Clean/Wet Polished",
    category: "Green Coffee Beans",
    subcategory: "Robusta",
    image: robustaS18Clean,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S18 Clean/Wet Polished",
    spec:
      "- Black&Broken: 0.5% max\n- Moisture: 12.5% max\n- Admixture: 0.1% max\n- 90% min on screen No.18\n- Wet polished",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
    description:
      "Premium quality Robusta coffee beans S18 grade, clean and wet polished. Larger bean size for premium applications.",
  },
  {
    id: 90,
    name: "Robusta Coffee Beans S13",
    category: "Green Coffee Beans",
    subcategory: "Robusta",
    image: robustaS13,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S13",
    spec:
      "- Black&Broken: 2% max\n- Moisture: 12.5% max\n- Admixture: 0.5% max\n- 90% min on screen no. 13",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
    description:
      "Quality Robusta coffee beans S13 grade. Cost-effective option for commercial use.",
  },
  {
    id: 91,
    name: "Arabica Coffee Beans S16/S18",
    category: "Green Coffee Beans",
    subcategory: "Arabica",
    image: arabicaS16S18,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S16/S18",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
    description:
      "Premium Arabica coffee beans S16/S18 grade. Known for smooth, aromatic flavor profile.",
  },

  // ---------- MISSING PRODUCTS FROM CSV (same product different name → main category + subcategory) ----------
  {
    id: 100,
    name: "Cashew Nuts WW210 (AFI)",
    category: "Cashew Nuts",
    subcategory: "WW210",
    image: ww240Cashew,
    origin: "Vietnam",
    moisture: "5% max",
    standard: "AFI Standard 2012",
    seedsPerLb: "190-210",
    broken: "7-8% max",
    lowerSize: "7-8% max",
    spec:
      "AFI Standard 2012\n- Seeds/lb: 190-210\n- Color: white, ivory white\n- Moisture: 5% max\n- Broken: 7-8% max\n- Lower size: 7-8% max",
    packing: "Vacuum/tin packing",
    containerCapacity: "15MT/20FT, 26.5MT/40FT",
  },
  {
    id: 101,
    name: "Salted and Roasted Cashew A240",
    category: "Cashew Nuts",
    subcategory: "Roasted",
    image: roastedSaltedCashew,
    origin: "Vietnam",
    moisture: "5% max",
    spec:
      "AFI Standard 2012\n- Seeds/lb: 220-240\n- Color: white, ivory white\n- Moisture: 5% max\n- Processing: Salted Roasted",
    packing: "Jar 500gram",
    containerCapacity: "11MT/20FT, 24MT/40FT",
  },
  {
    id: 102,
    name: "Salted and Roasted Cashew A320",
    category: "Cashew Nuts",
    subcategory: "Roasted",
    image: roastedSaltedCashew,
    origin: "Vietnam",
    moisture: "5% max",
    spec:
      "AFI Standard 2012\n- Counter per lb (seeds/lb): 300-320\n- Color: white, ivory white\n- Moisture: 5% max\n- Processing: Salted Roasted",
    packing: "Jar 500gram",
    containerCapacity: "11MT/20FT, 24MT/40FT",
  },
  {
    id: 103,
    name: "Black Pepper 570g/l FAQ",
    category: "Pepper",
    subcategory: "Black Pepper",
    image: blackPepper,
    origin: "Vietnam",
    moisture: "13.5% max",
    density: "570g/l",
    admixture: "1% max",
    grade: "FAQ",
    spec:
      "- Density: 570g/l\n- Moisture 13.5% max\n- Admixture: 1% max\n- Free from mould",
    packing: "25kg/PP bag",
    containerCapacity: "15MT/20FT, 28MT/40FT",
  },
  {
    id: 104,
    name: "Cassia Pressed Tube Whole Premium (10kg)",
    category: "CASSIA/CINNAMON",
    subcategory: "Pressed",
    image: cassiaPressed,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Length: 35-45 cm\n- Thickness: 0.8mm- 2.5 mm\n- Admixture: 0.5% max\n- Not black inside, unmouldy, natural brown colour, thin bark,",
    packing: "10kg/carton",
    containerCapacity: "9MT/20FT, 18MT/40FT",
  },
  {
    id: 105,
    name: "Cassia Pressed Tube Whole Premium (25kg)",
    category: "CASSIA/CINNAMON",
    subcategory: "Pressed",
    image: cassiaPressed,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Length: 30-45 cm\n- Thickness: 1mm-2.5 mm\n- Admixture: 0.5% max\n- Not black inside, unmouldy, natural brown colour, thin bark,",
    packing: "25kg/carton",
    containerCapacity: "12MT/20FT, 25MT/40FT",
  },
  {
    id: 130,
    name: "Cassia Pressed Tube Whole Premium (12kg)",
    category: "CASSIA/CINNAMON",
    subcategory: "Pressed",
    image: cassiaPressed,
    origin: "Vietnam",
    moisture: "13.5% max",
    spec:
      "- Moisture: 13.5% max\n- Length: 35-45 cm\n- Thickness: 0.8mm- 2.5 mm\n- Admixture: 0.5% max\n- Not black inside, unmouldy, natural brown colour, thin bark,",
    packing: "12kg/carton",
    containerCapacity: "9MT/20FT, 18MT/40FT",
  },
  {
    id: 106,
    name: "Cassia stick 8cm - roll 70%",
    category: "CASSIA/CINNAMON",
    subcategory: "Cigarette",
    image: cassiaCigarette,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "70% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 7-8 cm\n- Thickness: 0.8-2.5mm\n- Roll: 70% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "1kg/mesh bag; 10kg/carton",
    containerCapacity: "7MT/20FT, 17MT/40FT",
  },
  {
    id: 107,
    name: "Cassia stick 8cm - roll 80%",
    category: "CASSIA/CINNAMON",
    subcategory: "Cigarette",
    image: cassiaCigarette,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "80% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 8 cm\n- Thickness: 0.8-2.5mm\n- Roll: 80% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "1kg/mesh bag; 10kg/carton",
    containerCapacity: "7MT/20FT, 17MT/40FT",
  },
  {
    id: 108,
    name: "Cassia stick 8cm - roll 90%",
    category: "CASSIA/CINNAMON",
    subcategory: "Cigarette",
    image: cassiaCigarette,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "90% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 8 cm\n- Thickness: 0.8-2.5mm\n- Roll: 90% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "1kg/mesh bag; 10kg/carton",
    containerCapacity: "7MT/20FT, 17MT/40FT",
  },
  {
    id: 109,
    name: "Cassia long stick 30-45cm - roll 70%",
    category: "CASSIA/CINNAMON",
    subcategory: "Long Stick",
    image: cassiaLongstick,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "70% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 30-45 cm\n- Thickness: 0.8-2.5mm\n- Roll: 70% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "20kg/carton",
    containerCapacity: "5MT/20FT, 12MT/40FT",
  },
  {
    id: 110,
    name: "Cassia long stick 30-45cm - roll 80%",
    category: "CASSIA/CINNAMON",
    subcategory: "Long Stick",
    image: cassiaLongstick,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "80% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 30-45 cm\n- Thickness: 0.8-2.5mm\n- Roll: 80% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "20kg/carton",
    containerCapacity: "5MT/20FT, 12MT/40FT",
  },
  {
    id: 111,
    name: "Cassia long stick 30-45cm - roll 85%",
    category: "CASSIA/CINNAMON",
    subcategory: "Long Stick",
    image: cassiaLongstick,
    origin: "Vietnam",
    moisture: "13.5% max",
    roll: "85% min",
    spec:
      "- Moisture: 13.5% max\n- Admixture: 0.5% max\n- Length: 30-45 cm\n- Thickness: 0.8-2.5mm\n- Roll: 85% min\n- Diameter: 0.8 cm-2 cm\n- Natural colour\n- Taste: pungency\n- Not black inside, unmouldy, free from sand, soil, stone, live/dead insects, animal drops.",
    packing: "20kg/carton",
    containerCapacity: "5MT/20FT, 12MT/40FT",
  },
  {
    id: 112,
    name: "Cassia Powder VO 1.5%",
    category: "CASSIA/CINNAMON",
    subcategory: "Powder",
    image: cassiaPowder,
    origin: "Vietnam",
    moisture: "10% max",
    spec:
      "- Moisture: 10% max\n- Oil content: 1.5%\n- Admixture: 0.5% max\n- Mesh: #60",
    packing: "25kg/bag 1PE + 1 KP",
    containerCapacity: "15MT/20FT, 27MT/40FT",
  },
  {
    id: 113,
    name: "Cassia Powder VO 2%",
    category: "CASSIA/CINNAMON",
    subcategory: "Powder",
    image: cassiaPowder,
    origin: "Vietnam",
    moisture: "10% max",
    spec:
      "- Moisture: 10% max\n- Oil content: 2% min\n- Admixture: 0.5% max\n- Mesh: #60",
    packing: "25kg/bag 1PE + 1 KP",
    containerCapacity: "15MT/20FT, 27MT/40FT",
  },
  {
    id: 114,
    name: "Cassia Powder VO 2.5%",
    category: "CASSIA/CINNAMON",
    subcategory: "Powder",
    image: cassiaPowder,
    origin: "Vietnam",
    moisture: "10% max",
    spec:
      "- Moisture: 10% max\n- Oil content: 2.5%\n- Admixture: 0.5% max\n- Mesh: #60",
    packing: "25kg/bag 1PE + 1 KP",
    containerCapacity: "15MT/20FT, 27MT/40FT",
  },
  {
    id: 115,
    name: "Cassia Powder VO 3%",
    category: "CASSIA/CINNAMON",
    subcategory: "Powder",
    image: cassiaPowder,
    origin: "Vietnam",
    moisture: "10% max",
    spec:
      "- Moisture: 10% max\n- Oil content: 3% min\n- Admixture: 0.5% max\n- Mesh: #60",
    packing: "25kg/bag 1PE + 1 KP",
    containerCapacity: "15MT/20FT, 27MT/40FT",
  },
  {
    id: 116,
    name: "Star Anise Autumn Premium",
    category: "Star Anise",
    subcategory: "Autumn",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2.5 cm (80% up)",
    brokenPieces: "10% max",
    spec:
      "- Flower size: 2.5 cm (80% up)\n- Broken pieces: 10% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color\n- New crop: 2025",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 117,
    name: "Star Anise Autumn Good",
    category: "Star Anise",
    subcategory: "Autumn",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2.5 cm (70% up)",
    brokenPieces: "12% max",
    spec:
      "- Flower size: 2.5 cm (70% up)\n- Broken pieces: 12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color\n- New crop: 2025",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 118,
    name: "Star Anise Spring Tu Quy Premium",
    category: "Star Anise",
    subcategory: "Spring",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2 cm (80% up)",
    brokenPieces: "10% max",
    spec:
      "- Flower size: 2 cm (80% up)\n- Broken pieces: 10% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 119,
    name: "Star Anise Spring Tu Quy Good",
    category: "Star Anise",
    subcategory: "Spring",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2 cm (70% up)",
    brokenPieces: "12% max",
    spec:
      "- Flower size: 2 cm (70% up)\n- Broken pieces: 12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 120,
    name: "Star Anise Canh Dan Premium",
    category: "Star Anise",
    subcategory: "Canh Dan",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2 cm (70% up)",
    brokenPieces: "12% max",
    spec:
      "- Flower size: 2 cm (70% up)\n- Broken pieces: 12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 121,
    name: "Star Anise Canh Dan Good",
    category: "Star Anise",
    subcategory: "Canh Dan",
    image: starAnise,
    origin: "Vietnam",
    moisture: "13.5% max",
    size: "2 cm (70% up)",
    brokenPieces: "12% max",
    spec:
      "- Flower size: 2 cm (70% up)\n- Broken pieces: 12% max\n- Admixture: 1% max\n- Moisture: 13.5% max\n- No fungus, natural color",
    packing: "5KG/10KG CARTON",
    containerCapacity: "6.5MT/20FT, 15MT/40FT",
  },
  {
    id: 122,
    name: "Robusta Coffee Beans S16 Cleaning",
    category: "Green Coffee Beans",
    subcategory: "Robusta",
    image: robustaS16Clean,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S16 Cleaning",
    spec:
      "- Black&Broken: 0.5% max\n- Moisture: 12.5% max\n- Admixture: 0.1% max\n- 90% min on screen No.18",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
  },
  {
    id: 123,
    name: "Robusta Coffee Beans S18 Cleaning",
    category: "Green Coffee Beans",
    subcategory: "Robusta",
    image: robustaS18Clean,
    origin: "Vietnam",
    moisture: "12.5% max",
    grade: "S18 Cleaning",
    spec:
      "- Black&Broken: 0.5% max\n- Moisture: 12.5% max\n- Admixture: 0.1% max\n- 90% min on screen No.18",
    packing: "60kg/Jute bag",
    containerCapacity: "19.2MT/20FT, 28MT/40FT",
  },
  {
    id: 124,
    name: "High fat Desiccated Coconut Fine Grade - Good 62% min",
    category: "Desiccated Coconut",
    subcategory: "High fat Fine",
    image: highFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "4% max",
    ffa: "0.3% max",
    fatContent: "62% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 4% max\n- FFA: 0.3% max\n- Fat content: 62% min\n- SO2: 100 ppm max\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag 1PE + 3 Krafts + 1PP",
    containerCapacity: "12MT/20FT, 26MT/40FT",
  },
  {
    id: 125,
    name: "High fat Desiccated Coconut Fine Grade - Standard 60% min",
    category: "Desiccated Coconut",
    subcategory: "High fat Fine",
    image: highFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "4% max",
    ffa: "0.3% max",
    fatContent: "60% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 4% max\n- FFA: 0.3% max\n- Fat content: 60% min\n- SO2: 100 ppm max\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag 1PE + 3 Krafts + 1PP",
    containerCapacity: "12MT/20FT, 26MT/40FT",
  },
  {
    id: 126,
    name: "High fat Desiccated Coconut Medium Grade - Good 62% min",
    category: "Desiccated Coconut",
    subcategory: "High fat Medium",
    image: mediumFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "4% max",
    ffa: "0.3% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 4% max\n- FFA: 0.3% max\n- Fat content: 63% min\n- SO2: 100 ppm max\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag 1PE + 3 Krafts + 1PP",
    containerCapacity: "12MT/20FT, 26MT/40FT",
  },
  {
    id: 127,
    name: "Low fat Desiccated Coconut Extra Fine Grade",
    category: "Desiccated Coconut",
    subcategory: "Low fat",
    image: lowFatDesiccatedCoconut,
    origin: "Vietnam",
    moisture: "5% max",
    ffa: "0.3% max",
    fatContent: "30-35% min",
    so2: "100 ppm max",
    spec:
      "- Moisture: 5% max\n- FFA: 0.3% max\n- Fat content: 30-35% min\n- SO2: 100 ppm max\n- Natural white color of coconut.\n- Free from E.coli or bacteria, no foreign matter.",
    packing: "25kg/bag 1PE + 3 Krafts + 1PP",
    containerCapacity: "8MT/20FT, 18MT/40FT",
  },
  {
    id: 128,
    name: "Desiccated Coconut Chips",
    category: "Desiccated Coconut",
    subcategory: "Chips",
    image: desiccatedCoconut,
    origin: "Vietnam",
    moisture: "3.5% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    ffa: "0.3% max",
    spec:
      "- Moisture: 3.5% max\n- Fat content: 63% min\n- SO2 residual: 100 ppm max\n- FFA: 0.3% max (as lauric acid)\n- Natural White of coconut\n- 100% New goods, no scraps, no yellowing",
    packing: "25kg/PE bag",
    containerCapacity: "9MT/20FT, 21MT/40FT",
  },
  {
    id: 129,
    name: "Desiccated Coconut Flakes",
    category: "Desiccated Coconut",
    subcategory: "Flakes",
    image: desiccatedCoconut,
    origin: "Vietnam",
    moisture: "4.5% max",
    fatContent: "63% min",
    so2: "100 ppm max",
    ffa: "0.3% max",
    spec:
      "- Moisture: 4.5% max\n- Fat content: 63% min\n- SO2 residual: 100 ppm max\n- FFA: 0.3% max (as lauric acid)\n- Natural White of coconut\n- 100% New goods, no scraps, no yellowing",
    packing: "25kg/PE bag",
    containerCapacity: "9MT/20FT, 21MT/40FT",
  },
  {
    id: 130,
    name: "Cardamom Round Shape Premium (Lao Cai)",
    category: "Cardamom",
    subcategory: "Big Cardamom",
    image: bigCardamom,
    origin: "Vietnam",
    moisture: "13.5% max",
    admixture: "0.5% max",
    spec:
      "- MOISTURE: 13.5%\n- ADMIXTURE: 0.5%\n- Strong smell, ROUND shape\n- New Crop 2025",
    packing: "30kg/PP bag",
    containerCapacity: "9MT/20FT, 23MT/40FT",
  },
  {
    id: 131,
    name: "Cardamom Black Long Shape",
    category: "Cardamom",
    subcategory: "Black Cardamom",
    image: blackCardamom,
    origin: "Vietnam",
    moisture: "13.5% max",
    admixture: "0.5% max",
    spec:
      "- MOISTURE: 13.5%\n- ADMIXTURE: 0.5%\n- Strong smell, Long shape\n- New Crop 2025",
    packing: "30kg/PP bag",
    containerCapacity: "9MT/20FT, 19MT/40FT",
  },
];

// Shared filters for Desiccated Coconut (used by Products page and Navbar)
// High fat Fine only (Low fat is separate)
export function getDesiccatedCoconutFineProducts(productsList) {
  return productsList.filter(
    (p) => p.category === "Desiccated Coconut" && p.subcategory === "High fat Fine"
  );
}
export function getDesiccatedCoconutMediumProducts(productsList) {
  return productsList.filter((p) => p.category === "Desiccated Coconut" && p.subcategory === "High fat Medium");
}
export function getDesiccatedCoconutLowFatProducts(productsList) {
  return productsList.filter((p) => p.category === "Desiccated Coconut" && p.subcategory === "Low fat");
}


