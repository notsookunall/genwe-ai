import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">GenWe</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>

        <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} GenWe Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;