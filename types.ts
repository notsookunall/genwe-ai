export interface PricingTier {
  name: string;
  subtitle: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

export interface AdConceptResponse {
  headline: string;
  visualDescription: string;
  script: string;
}

export interface PortfolioItem {
  id: number;
  client: string;
  title: string;
  image: string;
  category: string;
  videoEmbedUrl?: string; // URL for the iframe (Google Drive Embed Link or YouTube Embed)
}