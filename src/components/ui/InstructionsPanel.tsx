import React from 'react';
import { Phone, Globe, AlertCircle, Shield } from 'lucide-react';

interface Instruction {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface InstructionsPanelProps {
  languageCode: string;
}

const InstructionsPanel: React.FC<InstructionsPanelProps> = ({ languageCode }) => {
  // Instructions in different languages
  const getInstructions = (code: string): Instruction[] => {
    // For this demo, we'll just provide English and Hindi
    // In a production app, you would have all languages supported
    switch (code) {
      case 'hi':
        return [
          {
            icon: <Globe className="text-primary-600\" size={24} />,
            title: "साइबर अपराध पोर्टल पर रिपोर्ट करें",
            description: "अपने क्षेत्र में साइबर अपराध को ऑनलाइन रिपोर्ट करने के लिए आधिकारिक साइबर अपराध पोर्टल का उपयोग करें।"
          },
          {
            icon: <Phone className="text-danger-500" size={24} />,
            title: "1930 पर कॉल करें",
            description: "तत्काल सहायता के लिए राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें। यह 24/7 उपलब्ध है।"
          },
          {
            icon: <Shield className="text-secondary-500\" size={24} />,
            title: "अपने अकाउंट सुरक्षित करें",
            description: "अपने सभी अकाउंट में मजबूत पासवर्ड और दो-कारक प्रमाणीकरण का उपयोग करें।"
          },
          {
            icon: <AlertCircle className="text-warning-500" size={24} />,
            title: "फिशिंग से बचें",
            description: "संदिग्ध लिंक पर क्लिक न करें और अनजान स्रोतों से भेजे गए अटैचमेंट न खोलें।"
          }
        ];
      default: // English and other languages (for demo)
        return [
          {
            icon: <Globe className="text-primary-600\" size={24} />,
            title: "Report on Cybercrime Portal",
            description: "Use the official cybercrime portal to report cybercrimes online in your region."
          },
          {
            icon: <Phone className="text-danger-500" size={24} />,
            title: "Call 1930",
            description: "For immediate assistance, call the National Cyber Helpline at 1930. It's available 24/7."
          },
          {
            icon: <Shield className="text-secondary-500\" size={24} />,
            title: "Secure Your Accounts",
            description: "Use strong passwords and two-factor authentication on all your accounts."
          },
          {
            icon: <AlertCircle className="text-warning-500" size={24} />,
            title: "Avoid Phishing",
            description: "Don't click on suspicious links or open attachments from unknown sources."
          }
        ];
    }
  };

  const instructions = getInstructions(languageCode);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-primary-700 mb-4">
        {languageCode === 'hi' ? "महत्वपूर्ण निर्देश" : "Important Instructions"}
      </h3>
      <div className="space-y-4">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-start space-x-3 pb-3 border-b border-slate-100 last:border-0">
            <div className="mt-0.5">{instruction.icon}</div>
            <div>
              <h4 className="font-medium text-slate-800">{instruction.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{instruction.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <a 
          href="https://www.cybercrime.gov.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-600 hover:text-primary-800 flex items-center"
        >
          {languageCode === 'hi' ? "साइबर अपराध पोर्टल पर जाएँ" : "Visit the Cybercrime Portal"} →
        </a>
      </div>
    </div>
  );
};

export default InstructionsPanel;