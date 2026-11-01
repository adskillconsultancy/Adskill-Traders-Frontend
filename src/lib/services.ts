export interface ProductServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export const exportCategories: ProductServiceItem[] = [
  {
    id: "apparel-clothing-export",
    title: "RMG & Apparel Export",
    category: "Clothing & Garments",
    description:
      "Direct B2B wholesale export of premium knitwear, denim, activewear, and woven apparel from certified manufacturers in Bangladesh to USA retailers and global brands.",
    features: [
      "Custom OEM & Private Label Production",
      "US FDA / Consumer Safety Compliant",
      "Bulk Wholesale Order Fulfillment",
    ],
  },
  {
    id: "fashion-jewelry-accessories",
    title: "Fine & Fashion Jewellery",
    category: "Jewellery & Ornaments",
    description:
      "Artisan handcrafted and contemporary fashion jewelry, gold-plated ornaments, brass, and gemstone accessories sourced for American boutiques and distributors.",
    features: [
      "High-Precision Craftsmanship",
      "Hypoallergenic & Lead/Nickel Free",
      "Bespoke Packaging for US Brands",
    ],
  },
  {
    id: "footwear-leather-export",
    title: "Footwear & Leather Goods",
    category: "Shoes & Footwear",
    description:
      "Sustainable leather footwear, casual sneakers, formal dress shoes, and handmade leather bags tailored for North American retail standards.",
    features: [
      "Genuine Leather & Eco-friendly Soles",
      "Strict Quality Control & Durability",
      "Duty-Efficient US Customs Clearing",
    ],
  },
  {
    id: "lifestyle-fashion-accessories",
    title: "Lifestyle & Fashion Items",
    category: "Fashion Accessories",
    description:
      "Trendy seasonal fashion items including scarves, bags, headwear, and artisanal textiles designed for global fast-fashion brands and department stores.",
    features: [
      "Seasonal Trend Forecasting",
      "Eco-friendly Certified Fabrics",
      "Fast Air & Ocean Cargo Turnaround",
    ],
  },
  {
    id: "cross-border-trade-logistics",
    title: "BD to USA Trade & Logistics",
    category: "Export & Trade Clearance",
    description:
      "End-to-end export corridor solutions between Bangladesh manufacturing hubs and major USA distribution ports (New York, Los Angeles, Savannah).",
    features: [
      "Door-to-Door Container Freight",
      "US Customs Tariffs & LC Management",
      "Pre-shipment Inspection (AQL 2.5)",
    ],
  },
];

// Alias for compatibility across existing components
export const services = exportCategories;
