import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { generateAdConcept } from '../services/geminiService';
import { AdConceptResponse } from '../types';
import { Sparkles, Loader2, PlayCircle, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [concept, setConcept] = useState<AdConceptResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

        {/* Portfolio Grid */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Selected Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Ads that stop the scroll</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation(); // ✅ FIX: prevents modal instant close
                if (item.videoEmbedUrl) {
                  setActiveVideo(item.videoEmbedUrl);
                }
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <PlayCircle
                    className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                    size={64}
                  />
                </div>

                {item.videoEmbedUrl && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Video Available
                  </div>
                )}
              </div>

              <div className="bg-white p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">{item.client}</h4>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-md text-gray-600 uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>

            <div
              className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative"
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
        <div id="ai-demo" className="bg-black text-white rounded-3xl overflow-hidden p-8 md:p-12 relative">
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
                  placeholder="Product Name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white"
                />

                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="Target Audience"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white"
                />

                <button
                  type="submit"
                  disabled={loading || !product || !audience}
                  className="w-full bg-[#4FFFB0] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                  Generate Concept
                </button>
              </form>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 min-h-[400px] border border-gray-800 flex flex-col">
              {concept ? (
                <>
                  <h4 className="text-xl font-bold">"{concept.headline}"</h4>
                  <p className="text-gray-300 italic">{concept.visualDescription}</p>
                  <p className="text-white font-mono text-sm mt-4">"{concept.script}"</p>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-600">
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={48} />}
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
