import React from 'react';
import { Shield } from 'lucide-react';
import LanguageSelector from '../ui/LanguageSelector';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="text-primary-600 mr-2" size={28} />
          <div>
            <h1 className="text-xl font-bold text-primary-700 leading-tight">
              Cyber Suraksha AI
            </h1>
            <p className="text-xs text-slate-500">India's Cybersecurity Companion</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <a 
            href="tel:1930" 
            className="hidden md:flex items-center px-3 py-1.5 bg-danger-50 text-danger-600 rounded-md text-sm font-medium hover:bg-danger-100 transition-colors"
          >
            <Phone className="mr-1" size={16} />
            1930
          </a>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

const Phone: React.FC<{ className?: string; size: number }> = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default Header;