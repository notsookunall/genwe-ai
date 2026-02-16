import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#4FFFB0]"></span>
          Future of Advertising is Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
          We turn data into <br />
          <span className="relative">
             visual masterpieces
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#4FFFB0] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
          GenWe combines generative AI with world-class creative direction to produce high-converting video ads at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            View Pricing <ArrowRight size={20} />
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <Play size={20} className="fill-black" /> Watch Showreel
          </a>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4FFFB0] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;