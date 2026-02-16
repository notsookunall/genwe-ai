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
  {
    id: 1,
    client: "NeonStep",
    title: "Urban Footwear Launch",
    category: "Fashion",
    image: "https://picsum.photos/800/600?random=1",
    // YouTube Embed Link with autoplay enabled
    videoEmbedUrl: "https://www.youtube.com/embed/IH4yc1rANKE?autoplay=1" 
  },
  {
    id: 2,
    client: "TechFlow",
    title: "SaaS Productivity Tool",
    category: "Software",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    client: "PureLeaf",
    title: "Organic Tea Series",
    category: "FMCG",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    client: "VelvetHome",
    title: "Interior Design Reveal",
    category: "Lifestyle",
    image: "https://picsum.photos/800/600?random=4"
  }
];