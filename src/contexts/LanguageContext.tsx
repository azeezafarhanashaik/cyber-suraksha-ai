import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types/language';
import { languages } from '../utils/languages';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (langCode: string) => void;
  languages: Language[];
}

const defaultLanguage = languages.find(lang => lang.code === 'en') || languages[0];

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  languages: languages,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  const setLanguage = (langCode: string) => {
    const selectedLanguage = languages.find(lang => lang.code === langCode);
    if (selectedLanguage) {
      setCurrentLanguage(selectedLanguage);
      // Optionally store the language preference
      localStorage.setItem('preferredLanguage', langCode);
    }
  };

  // Initialize language from stored preference
  React.useEffect(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};