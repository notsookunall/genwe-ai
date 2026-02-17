import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { generateAdConcept } from '../services/geminiService';
import { AdConceptResponse } from '../types';
import { Sparkles, Loader2, PlayCircle, X, ArrowLeft, FolderOpen } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // AI Demo State
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [concept, setConcept] = useState<AdConceptResponse | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Video Modal State
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Derive unique categories and get a representative image for each
  const categories = Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)));
  const getCategoryCover = (cat: string) => PORTFOLIO_ITEMS.find(item => item.category === cat)?.image;

  const filteredItems = activeCategory 
    ? PORTFOLIO_ITEMS.filter(item => item.category === activeCategory)
    : [];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !audience) return;

    setLoading(true);
    setConcept(null);
    try {
      const result = await generateAdConcept(product, audience);
      setConcept(result);
    } catch (error) {
      alert("Something went wrong with the AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
            {activeCategory ? `Portfolio / ${activeCategory}` : "Our Expertise"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {activeCategory ? "Campaign Gallery" : "Industries We Transform"}
          </h3>
        </div>

        {/* Navigation / Back Button */}
        {activeCategory && (
          <div className="mb-8">
            <button 
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} /> Back to Categories
            </button>
          </div>
        )}

        {/* Content Grid */}
        <div className="min-h-[400px] mb-24">
          {!activeCategory ? (
            // CATEGORY VIEW
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={getCategoryCover(category)}
                      alt={category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                    <div className="w-10 h-10 rounded-full bg-[#4FFFB0] text-black flex items-center justify-center mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <FolderOpen size={20} />
                    </div>
                    <h4 className="text-2xl font-bold mb-1">{category}</h4>
                    <p className="text-white/80 text-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      View Projects &rarr;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // ITEMS VIEW
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.videoEmbedUrl) {
                      setActiveVideo(item.videoEmbedUrl);
                    }
                  }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <PlayCircle
                        className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 drop-shadow-lg"
                        size={64}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{item.client}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.title}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-600 uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={40} />
            </button>

            <div
              className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Project Video"
              />
            </div>
          </div>
        )}

        {/* Interactive AI Demo */}
        <div id="ai-demo" className="bg-black text-white rounded-3xl overflow-hidden p-8 md:p-12 relative border border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4FFFB0] opacity-20 blur-[80px]"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#4FFFB0]">
                <Sparkles size={20} />
                <span className="font-semibold tracking-wide uppercase text-sm">Interactive Demo</span>
              </div>

              <h3 className="text-3xl font-bold mb-4">Experience GenWe AI</h3>

              <p className="text-gray-400 mb-8">
                Not convinced? Type in your product and target audience. Our custom Gemini model will generate a viral ad concept in seconds.
              </p>

              <form onSubmit={handleGenerate} className="space-y-4">
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Product Name (e.g. Smart Coffee Maker)"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#4FFFB0] focus:outline-none transition-colors"
                />

                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="Target Audience (e.g. Busy Professionals)"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#4FFFB0] focus:outline-none transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading || !product || !audience}
                  className="w-full bg-[#4FFFB0] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#3ddc95] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                  Generate Concept
                </button>
              </form>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 min-h-[300px] border border-gray-800 flex flex-col backdrop-blur-sm">
              {concept ? (
                <div className="animate-in fade-in duration-500">
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Headline</span>
                    <h4 className="text-xl font-bold text-white mt-1">"{concept.headline}"</h4>
                  </div>
                  <div className="mb-4">
                     <span className="text-xs text-gray-500 uppercase tracking-widest">Visual</span>
                    <p className="text-gray-300 italic mt-1">{concept.visualDescription}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Script</span>
                    <p className="text-[#4FFFB0] font-mono text-sm mt-2 border-l-2 border-[#4FFFB0] pl-3 py-1">
                      "{concept.script}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-600 gap-4">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin text-[#4FFFB0]" size={40} />
                      <p className="text-sm animate-pulse">Analyzing market trends...</p>
                    </>
                  ) : (
                    <>
                      <Sparkles size={48} className="opacity-20" />
                      <p className="text-sm">Enter details to generate a concept</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;