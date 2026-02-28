/**
 * Product taxonomy: main categories and display order.
 * Subcategories are derived from products (product.subcategory or product name).
 * Used by Navbar, Products page, and HomePage for consistent grouping.
 */
export const MAIN_CATEGORIES = [
  "Cashew Nuts",
  "Desiccated Coconut",
  "Pepper",
  "Edible Copra",
  "Fresh Ginger",
  "CASSIA/CINNAMON",
  "Soft Dried Mango",
  "TEJA RED CHILLI",
  "Star Anise",
  "Cardamom",
  "Seeds",
  "Peanuts",
  "Almonds",
  "TURMERIC FINGER",
  "WALNUTS",
  "Sweet Tamarind",
  "Green Coffee Beans",
  "Nigella sativa",
  "Cloves",
];

/** Normalize product name for matching (lowercase, collapse spaces, remove punctuation). */
export function normalizeProductName(name) {
  if (!name || typeof name !== "string") return "";
  return name
    .toLowerCase()
    .replace(/[\s\-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
}

/** Get main category for a product (from product.category or infer from name). */
export function getMainCategory(product) {
  return product?.category || "Other";
}

/** Get subcategory label for grouping (from product.subcategory or product.name). */
export function getSubcategoryLabel(product) {
  return product?.subcategory || product?.name || "";
}

/**
 * Build category tree for Navbar: main categories in order, each with subcategories
 * and product links. Products with same category+subcategory are grouped.
 * @param {Array<{ id, name, category?, subcategory? }>} products
 * @returns {{ mainCategories: Array<{ id, name, subcategories: Array }> }}
 */
export function getCategoryTree(products) {
  const byCategory = new Map();
  for (const p of products) {
    const cat = p.category || "Other";
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(p);
  }
  const mainCategories = MAIN_CATEGORIES.filter((name) => byCategory.has(name)).map((name) => {
    const list = byCategory.get(name);
    const bySub = new Map();
    for (const p of list) {
      const sub = p.subcategory || p.name;
      if (!bySub.has(sub)) bySub.set(sub, []);
      bySub.get(sub).push(p);
    }
    const subcategories = [];
    bySub.forEach((prods, subLabel) => {
      if (prods.length === 1) {
        subcategories.push({ id: prods[0].id, name: prods[0].name });
      } else {
        subcategories.push({
          id: subLabel.replace(/\s+/g, "").toLowerCase(),
          name: prods[0].name.split(/\s+(?=\d|AFI|High|Low|Premium|Good|Standard)/)[0] + (subLabel !== prods[0].name ? ` ${subLabel}` : "") || subLabel,
          hasSubcategories: true,
          products: prods.map((p) => ({ id: p.id, name: p.name })),
        });
      }
    });
    return {
      id: name,
      name,
      subcategories: subcategories.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
    };
  });
  return { mainCategories };
}
