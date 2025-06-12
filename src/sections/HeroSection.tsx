import React from 'react';
import { Shield, Lock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isHindi = currentLanguage.code === 'hi';

  return (
    <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 lg:py-24">
      {/* Background pattern - made non-floating */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2QzI0Ljg0IDYgMzAgMTEuMTYgMzAgMThIMzZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {isHindi ? "साइबर सुरक्षा AI" : "Cyber Suraksha AI"}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-blue-100">
              {isHindi 
                ? "आपकी भाषा में भारत का साइबर सुरक्षा साथी।" 
                : "India's Cybersecurity Companion in Your Language."}
            </p>
            <p className="text-blue-100 max-w-md mx-auto lg:mx-0">
              {isHindi 
                ? "फिशिंग, यूपीआई धोखाधड़ी, सोशल मीडिया हैक और डेटा उल्लंघनों जैसे साइबर खतरों को रिपोर्ट करने और उनका जवाब देने के लिए आपकी सहायता करता है।" 
                : "Helping you report and respond to cyber threats like phishing, UPI fraud, social media hacks, and data breaches."}
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 max-w-md w-full">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start p-3 rounded-lg bg-white/10">
                  <Shield className="text-secondary-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">
                      {isHindi ? "सुरक्षित रहें" : "Stay Protected"}
                    </h3>
                    <p className="text-sm text-blue-100">
                      {isHindi 
                        ? "साइबर खतरों से बचने के लिए व्यावहारिक सुझाव प्राप्त करें।" 
                        : "Get practical tips to avoid cyber threats."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-white/10">
                  <Lock className="text-secondary-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">
                      {isHindi ? "तुरंत प्रतिक्रिया" : "Immediate Response"}
                    </h3>
                    <p className="text-sm text-blue-100">
                      {isHindi 
                        ? "साइबर हमले के बाद क्या करना है, इसके बारे में मार्गदर्शन।" 
                        : "Guidance on what to do after a cyber attack."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-white/10">
                  <Users className="text-secondary-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">
                      {isHindi ? "आपकी भाषा में" : "In Your Language"}
                    </h3>
                    <p className="text-sm text-blue-100">
                      {isHindi 
                        ? "13 भारतीय भाषाओं में सहायता प्राप्त करें।" 
                        : "Get assistance in 13 Indian languages."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;