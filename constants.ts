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
  // Fashion Category
  {
    id: 1,
    client: "NeonStep",
    title: "Urban Footwear Launch",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    videoEmbedUrl: "https://www.youtube.com/embed/IH4yc1rANKE?autoplay=1"
  },
  {
    id: 2,
    client: "Luxe Threads",
    title: "Summer Collection",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    videoEmbedUrl: "https://www.youtube.com/embed/IH4yc1rANKE?autoplay=1" // Placeholder using same video for demo
  },

  // Automotive Category
  {
    id: 3,
    client: "Velocity GT",
    title: "Electric Future",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    client: "EcoDrive",
    title: "City Compact Series",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
  },

  // Real Estate Category
  {
    id: 5,
    client: "The Azure",
    title: "Luxury Penthouse Reveal",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    client: "Harbor View",
    title: "Waterfront Living",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?auto=format&fit=crop&q=80&w=800"
  },

  // Technology Category
  {
    id: 7,
    client: "TechFlow",
    title: "SaaS Productivity Tool",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    client: "CyberGuard",
    title: "Network Security Spot",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];