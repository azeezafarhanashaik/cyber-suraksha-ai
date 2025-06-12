import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from './Button';

interface VoiceAssistantProps {
  onVoiceInput: (text: string) => void;
  isListening: boolean;
  toggleListening: () => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({
  onVoiceInput,
  isListening,
  toggleListening
}) => {
  const { currentLanguage } = useLanguage();
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    if (speechSynthesis) {
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [speechSynthesis]);

  const speak = (text: string) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Try to find a female voice for the current language
      const femaleVoice = voices.find(voice => 
        voice.lang.startsWith(currentLanguage.code) && 
        voice.name.toLowerCase().includes('female')
      );
      
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleListening}
        className={`transition-colors ${isListening ? 'bg-primary-50 text-primary-600' : ''}`}
      >
        {isListening ? (
          <Mic className="w-4 h-4 text-primary-600" />
        ) : (
          <MicOff className="w-4 h-4" />
        )}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => speak('Welcome to Cyber Suraksha AI. How can I help you today?')}
      >
        <Volume2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default VoiceAssistant;