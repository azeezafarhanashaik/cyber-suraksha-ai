import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from './Button';
import { motion } from 'framer-motion';

const ChatInterface: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const { messages, sendMessage, isLoading } = useChat(currentLanguage.code);
  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the most recent message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading) {
      const message = inputMessage;
      setInputMessage('');
      await sendMessage(message);
    }
  };

  return (
    <div className="flex flex-col bg-slate-100 rounded-lg shadow-md h-full overflow-hidden">
      {/* Chat header */}
      <div className="bg-primary-700 text-white px-4 py-3">
        <h2 className="text-lg font-medium">
          {currentLanguage.code === 'hi' ? 'साइबर सुरक्षा AI से चैट करें' : 'Chat with Cyber Suraksha AI'}
        </h2>
      </div>

      {/* Messages container */}
      <div 
        ref={chatContainerRef} 
        className="flex-1 p-4 overflow-y-auto space-y-4"
      >
        {messages.map((message) => (
          <motion.div 
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}
            >
              {message.pending ? (
                <div className="flex items-center space-x-2">
                  <Loader size={16} className="animate-spin" />
                  <span>
                    {currentLanguage.code === 'hi' ? 'सोच रहा हूं...' : 'Thinking...'}
                  </span>
                </div>
              ) : (
                message.content
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input area */}
      <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={currentLanguage.code === 'hi' 
              ? `${currentLanguage.nativeName} में टाइप करें...`
              : `Type in ${currentLanguage.name}...`
            }
            className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            isLoading={isLoading}
          >
            <Send size={16} className="mr-1" />
            {currentLanguage.code === 'hi' ? 'भेजें' : 'Send'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;