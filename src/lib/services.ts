export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  features?: string[];
}

export const services: ServiceItem[] = [
  {
    id: "global-import-export",
    title: "Global Import & Export",
    description:
      "Comprehensive cross-border import and export trade operations connecting worldwide manufacturers and verified wholesale buyers.",
    icon: "Globe",
    features: [
      "Customs Clearance & Documentation",
      "Multimodal Freight Coordination",
      "Global Trade Compliance",
    ],
  },
  {
    id: "bulk-commodity-trading",
    title: "Bulk Commodity Trading",
    description:
      "Reliable sourcing and distribution of essential agro, industrial, consumer, and energy commodities with verified quality standards.",
    icon: "PackageCheck",
    features: [
      "Wholesale Agricultural Goods",
      "Industrial Raw Materials",
      "Certified Quality Assurance",
    ],
  },
  {
    id: "supply-chain-logistics",
    title: "Supply Chain & Logistics",
    description:
      "End-to-end supply chain management, cargo shipping tracking, warehousing solutions, and safe door-to-door freight distribution.",
    icon: "Truck",
    features: [
      "Ocean & Air Freight Management",
      "Secure Warehousing & Inventory",
      "Real-time Shipment Tracking",
    ],
  },
  {
    id: "wholesale-product-sourcing",
    title: "Wholesale Product Sourcing",
    description:
      "Direct procurement from certified global factories, contract negotiation, vendor verification, and rigorous quality inspection.",
    icon: "Building2",
    features: [
      "Direct Factory Sourcing",
      "Pre-shipment Inspection",
      "Bespoke Trade Contracts",
    ],
  },
  {
    id: "trade-finance-consultancy",
    title: "Trade Finance & Advisory",
    description:
      "Strategic trade advisory, Letter of Credit (LC) guidance, foreign exchange risk mitigation, and commercial trade compliance.",
    icon: "TrendingUp",
    features: [
      "Letter of Credit (LC) Consulting",
      "Market Intelligence & Research",
      "Customs Tariff Advisory",
    ],
  },
];
