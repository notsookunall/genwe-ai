import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-[#4FFFB0] font-semibold tracking-wide uppercase text-sm mb-4 block">Get in touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to scale your ads?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Join the revolution of AI-driven marketing. Whether you have a question about pricing, features, or want to see a full demo, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#4FFFB0]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-medium">hello@genwe.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#4FFFB0]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#4FFFB0]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit us</p>
                  <p className="font-medium">100 AI Blvd, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-3xl p-8 md:p-10 text-gray-900" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors"></textarea>
              </div>
              <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;