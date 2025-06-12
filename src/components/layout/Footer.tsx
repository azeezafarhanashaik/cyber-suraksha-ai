import React from 'react';
import { Shield, FileText, Phone, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isHindi = currentLanguage.code === 'hi';

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-primary-400 mr-2" size={20} />
              <h3 className="font-semibold text-lg">
                Cyber Suraksha AI
              </h3>
            </div>
            <p className="text-slate-400 text-sm">
              {isHindi 
                ? "भारतीय नागरिकों के लिए साइबर सुरक्षा सहायता। साइबर धोखाधड़ी, फिशिंग, और हैकिंग से खुद को बचाएं।" 
                : "Cybersecurity assistance for Indian citizens. Protect yourself from cyber fraud, phishing, and hacking."}
            </p>
            <p className="text-slate-400 text-sm mt-3">
              {isHindi 
                ? "साइबर क्राइम हेल्पलाइन इंडिया के सहयोग से" 
                : "In collaboration with Cyber Crime Helpline India"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              {isHindi ? "त्वरित लिंक" : "Quick Links"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://www.cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  {isHindi ? "साइबर क्राइम पोर्टल" : "Cyber Crime Portal"}
                </a>
              </li>
              <li>
                <a href="tel:1930" className="hover:text-primary-400 transition-colors flex items-center">
                  <Phone size={16} className="mr-2" />
                  {isHindi ? "हेल्पलाइन: 1930" : "Helpline: 1930"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center">
                  <AlertTriangle size={16} className="mr-2" />
                  {isHindi ? "अभी रिपोर्ट करें" : "Report Now"}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              {isHindi ? "कानूनी" : "Legal"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {isHindi ? "गोपनीयता नीति" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {isHindi ? "उपयोग की शर्तें" : "Terms of Use"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {isHindi ? "डिस्क्लेमर" : "Disclaimer"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6 text-center text-xs text-slate-500">
          <p>© 2025 Cyber Suraksha AI. {isHindi ? "सभी अधिकार सुरक्षित।" : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;