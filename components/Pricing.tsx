import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS, ANNUAL_TIER } from '../constants';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const displayTiers = isAnnual ? [ANNUAL_TIER] : PRICING_TIERS;

  return (
    <section id="pricing" className="py-24 bg-white relative">
       {/* Background decorative text similar to reference */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-gray-50 text-[10rem] font-bold select-none pointer-events-none whitespace-nowrap hidden lg:block">
        PRICING
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">Price List</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8">
            Choose your implementation plan
          </h2>

          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
              One-time project
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-gray-200 rounded-full relative transition-colors focus:outline-none"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-1 transition-all duration-300 ${
                  isAnnual ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
                Annual cooperation
              </span>
              <span className="bg-[#4FFFB0] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                Best Value
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            {isAnnual ? "Comprehensive support for the entire year" : "Take advantage of our AI video production services"}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isAnnual ? 'max-w-md mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-8`}>
          {displayTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-[32px] p-8 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300 ${
                tier.isPopular ? 'bg-[#4FFFB0] shadow-xl z-10' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className={`text-sm ${tier.isPopular ? 'text-black/70' : 'text-gray-400'}`}>
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {tier.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                  </span>
                </div>
                <span className={`text-xs ${tier.isPopular ? 'text-black/60' : 'text-gray-400'}`}>
                  {isAnnual ? 'per year' : 'per project'}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${tier.isPopular ? 'text-black' : 'text-green-500'}`} />
                    <span className={tier.isPopular ? 'text-black/80' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-colors ${
                tier.isPopular 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-transparent border border-gray-200 hover:border-black hover:bg-gray-50'
              }`}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;