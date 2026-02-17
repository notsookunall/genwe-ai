import { PricingTier, PortfolioItem } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "BASIC",
    subtitle: "Essential Ad Package",
    price: 500000,
    features: [
      "1 Premium AI-Generated Video Ad",
      "Professional Scriptwriting",
      "Stock Music License",
      "72 Hour Delivery",
      "2 Revision Rounds"
    ],
    buttonText: "Choose Basic"
  },
  {
    name: "STANDARD",
    subtitle: "Full Priority & Everything",
    price: 800000,
    features: [
      "3 Premium Video Productions",
      "Full Campaign Strategy",
      "Dedicated Account Manager",
      "24 Hour Priority Delivery",
      "Unlimited Revisions",
      "Raw Source Files & Assets"
    ],
    isPopular: true,
    buttonText: "Choose Standard"
  }
];

export const ANNUAL_TIER: PricingTier = {
  name: "ANNUAL PARTNER",
  subtitle: "Yearly All-Inclusive Access",
  price: 1800000,
  features: [
    "Unlimited AI Video Productions",
    "Complete Annual Strategy",
    "Dedicated Creative Team",
    "Priority 24/7 Support",
    "Unlimited Revisions",
    "Raw Source Files & Assets",
    "Monthly Analytics & Optimization"
  ],
  isPopular: true,
  buttonText: "Start Annual Partnership"
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Automotive Category
  {
    id: 1,
    client: "Tata Motors",
    title: "Sierra Vertical Sample",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800", // Concept SUV Image
    videoEmbedUrl: "https://drive.google.com/file/d/1KZizBA7PCaz8XxDS4sNIjYOp7rKbeVfY/preview" // Preserved Drive Link
  },
  {
    id: 2,
    client: "Tata Motors",
    title: "Sierra Horizontal Sample",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800", // Different Concept Car Image
    videoEmbedUrl: "https://drive.google.com/file/d/1RK2xMRbAY7rcFVJ-N68zFKqnAqREAWwM/preview" // New Horizontal Drive Link (Embed format)
  },

  // Real Estate Category
  {
    id: 5,
    client: "Lodha",
    title: "Luxury Penthouse Reveal",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    videoEmbedUrl: "https://drive.google.com/file/d/1uA9A-SS5a2o095OyEMqi-VE8f2PqvbNN/preview"
  },

  // Appliances Category
  {
    id: 7,
    client: "KitchenPro",
    title: "Turbo Mixer Grinder",
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800", // Modern Mixer/Blender
    videoEmbedUrl: "https://drive.google.com/file/d/1Icff_kxuUipXW-WBIMqO0lKjLSJA4W0c/preview"
  },
  {
    id: 8,
    client: "Surya",
    title: "Qubix Water Purifier",
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
    videoEmbedUrl: "https://drive.google.com/file/d/1Il2cuuwaNyCkHg9cfTHSU9poj4RUeZ88/preview"
  },
  {
    id: 9,
    client: "The Sleep Company",
    title: "Smart Grid Sofa",
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", // Modern Sofa
    videoEmbedUrl: "https://drive.google.com/file/d/1VUDhTjPMgkUVXi0chIxW69AZLrbz-rcL/preview"
  },

  // Fashion Category
  {
    id: 10,
    client: "Cord",
    title: "Premium Ethnic Collection",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", // Reliable Indian Fashion Model Image
    videoEmbedUrl: "https://drive.google.com/file/d/1LWLK4pI-37nGv6mopnV-H7D9GXqFFNLV/preview"
  }
];