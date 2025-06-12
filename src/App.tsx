import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './sections/HeroSection';
import ChatSection from './sections/ChatSection';
import InfoSection from './sections/InfoSection';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <HeroSection />
        <ChatSection />
        <InfoSection />
      </Layout>
    </LanguageProvider>
  );
}

export default App;