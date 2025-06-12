import { Language } from '../types/language';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
];

export const getLanguagePrefix = (langCode: string): string => {
  return `[lang:${langCode}] `;
};

export const detectLanguage = (text: string): string => {
  // This is a simple implementation - in a real app, you might want to use a more sophisticated language detection library
  const langPrefixMatch = text.match(/^\[lang:([a-z]{2})\]/);
  if (langPrefixMatch && langPrefixMatch[1]) {
    return langPrefixMatch[1];
  }
  
  // Default to English if no language prefix is found
  return 'en';
};

export const removeLanguagePrefix = (text: string): string => {
  return text.replace(/^\[lang:[a-z]{2}\]\s*/, '');
};

export const getDefaultWelcomeMessage = (langCode: string): string => {
  const welcomeMessages: Record<string, string> = {
    en: "Hello! I'm Cyber Suraksha AI, your cybersecurity assistant. How can I help you with cyber threats today?",
    hi: "नमस्ते! मैं साइबर सुरक्षा AI हूँ, आपका साइबर सुरक्षा सहायक। आज मैं आपकी साइबर खतरों से कैसे मदद कर सकता हूँ?",
    bn: "হ্যালো! আমি সাইবার সুরক্ষা AI, আপনার সাইবার নিরাপত্তা সহায়ক। আজ আমি আপনাকে সাইবার হুমকি নিয়ে কীভাবে সাহায্য করতে পারি?",
    te: "నమస్కారం! నేను సైబర్ సురక్ష AI ని, మీ సైబర్ భద్రతా సహాయకుడిని. ఈరోజు నేను మీకు సైబర్ ముప్పుల విషయంలో ఎలా సహాయపడగలను?",
    ta: "வணக்கம்! நான் சைபர் சுரக்ஷா AI, உங்கள் சைபர் பாதுகாப்பு உதவியாளர். இன்று நான் உங்களுக்கு சைபர் அச்சுறுத்தல்களில் எவ்வாறு உதவ முடியும்?",
    mr: "नमस्कार! मी सायबर सुरक्षा AI आहे, तुमचा सायबर सुरक्षा सहाय्यक. आज मी तुम्हाला सायबर धमक्यांबद्दल कशी मदत करू शकतो?",
    gu: "નમસ્તે! હું સાયબર સુરક્ષા AI છું, તમારો સાયબર સુરક્ષા સહાયક. આજે હું તમને સાયબર ખતરાઓ સાથે કેવી રીતે મદદ કરી શકું છું?",
    kn: "ನಮಸ್ಕಾರ! ನಾನು ಸೈಬರ್ ಸುರಕ್ಷಾ AI, ನಿಮ್ಮ ಸೈಬರ್ ಭದ್ರತಾ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಸೈಬರ್ ಬೆದರಿಕೆಗಳೊಂದಿಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    ml: "ഹലോ! ഞാൻ സൈബർ സുരക്ഷ AI ആണ്, നിങ്ങളുടെ സൈബർ സുരക്ഷാ സഹായി. ഇന്ന് എനിക്ക് നിങ്ങളെ സൈബർ ഭീഷണികളിൽ എങ്ങനെ സഹായിക്കാൻ കഴിയും?",
    pa: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਾਈਬਰ ਸੁਰੱਖਿਆ AI ਹਾਂ, ਤੁਹਾਡਾ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਸਹਾਇਕ। ਅੱਜ ਮੈਂ ਤੁਹਾਨੂੰ ਸਾਈਬਰ ਖ਼ਤਰਿਆਂ ਨਾਲ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
    ur: "السلام علیکم! میں سائبر سرکشا AI ہوں، آپ کا سائبر سیکیورٹی اسسٹنٹ۔ آج میں آپ کی سائبر خطرات کے ساتھ کیسے مدد کر سکتا ہوں؟",
    or: "ନମସ୍କାର! ମୁଁ ସାଇବର ସୁରକ୍ଷା AI, ଆପଣଙ୍କର ସାଇବର ସୁରକ୍ଷା ସହାୟକ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ ସାଇବର ବିପଦ ସହ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
    as: "নমস্কাৰ! মই চাইবাৰ সুৰক্ষা AI, আপোনাৰ চাইবাৰ সুৰক্ষা সহায়ক। আজি মই আপোনাক চাইবাৰ বিপদৰ বিষয়ে কেনেকৈ সহায় কৰিব পাৰোঁ?",
  };

  return welcomeMessages[langCode] || welcomeMessages.en;
};