import React from 'react';
import { AlertTriangle, ShieldCheck, Computer, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const InfoSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isHindi = currentLanguage.code === 'hi';
  
  const infoCards: InfoCard[] = [
    {
      icon: <AlertTriangle className="text-warning-500" size={28} />,
      title: isHindi ? "साइबर धोखाधड़ी की पहचान करें" : "Identify Cyber Fraud",
      description: isHindi 
        ? "संदिग्ध गतिविधियों को पहचानने और फिशिंग प्रयासों से बचने के तरीके जानें।" 
        : "Learn how to recognize suspicious activities and avoid phishing attempts.",
    },
    {
      icon: <ShieldCheck className="text-secondary-500\" size={28} />,
      title: isHindi ? "अपने डिजिटल फुटप्रिंट को सुरक्षित करें" : "Secure Your Digital Footprint",
      description: isHindi 
        ? "सोशल मीडिया अकाउंट और ऑनलाइन बैंकिंग को सुरक्षित रखने के तरीके।" 
        : "Ways to keep your social media accounts and online banking secure."
    },
    {
      icon: <Computer className="text-primary-600" size={28} />,
      title: isHindi ? "साइबर सुरक्षा आदतें" : "Cybersecurity Habits",
      description: isHindi 
        ? "दैनिक ऑनलाइन सुरक्षा के लिए आवश्यक आदतें और सर्वोत्तम प्रथाएँ।" 
        : "Essential habits and best practices for daily online safety."
    },
    {
      icon: <FileText className="text-accent-500\" size={28} />,
      title: isHindi ? "रिपोर्टिंग प्रक्रिया" : "Reporting Process",
      description: isHindi 
        ? "साइबर अपराध की प्रभावी रिपोर्टिंग के लिए चरण-दर-चरण मार्गदर्शिका।" 
        : "Step-by-step guide for effective reporting of cybercrimes.",
      link: "https://www.cybercrime.gov.in"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">
            {isHindi ? "साइबर सुरक्षा संसाधन" : "Cybersecurity Resources"}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {isHindi 
              ? "अपनी डिजिटल सुरक्षा को बढ़ाने के लिए इन महत्वपूर्ण जानकारियों का उपयोग करें।" 
              : "Use these important resources to enhance your digital security."}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {infoCards.map((card, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{card.description}</p>
              {card.link && (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 text-sm font-medium hover:text-primary-700 inline-flex items-center"
                >
                  {isHindi ? "अधिक जानें" : "Learn more"} →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;