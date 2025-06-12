import React from 'react';
import ChatInterface from '../components/ui/ChatInterface';
import InstructionsPanel from '../components/ui/InstructionsPanel';
import { useLanguage } from '../contexts/LanguageContext';

const ChatSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-800 mb-8">
          {currentLanguage.code === 'hi' 
            ? "साइबर सुरक्षा सहायता प्राप्त करें" 
            : "Get Cybersecurity Assistance"}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat interface - takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2 h-[500px]">
            <ChatInterface />
          </div>
          
          {/* Instructions panel - takes 1/3 of the space on large screens */}
          <div className="lg:col-span-1">
            <InstructionsPanel languageCode={currentLanguage.code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;