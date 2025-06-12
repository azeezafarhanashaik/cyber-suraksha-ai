import { useState, useCallback, useEffect } from 'react';
import { ChatMessage } from '../types/language';
import { sendMessage } from '../utils/api';
import { getDefaultWelcomeMessage } from '../utils/languages';

export const useChat = (languageCode: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add welcome message when language changes
  useEffect(() => {
    const welcomeMessage = getDefaultWelcomeMessage(languageCode);
    setMessages([
      {
        id: 'welcome',
        content: welcomeMessage,
        role: 'assistant',
        timestamp: new Date()
      }
    ]);
  }, [languageCode]);

  const sendChatMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessageId = `user-${Date.now()}`;
    const aiMessageId = `ai-${Date.now()}`;

    // Add user message
    const userMessage: ChatMessage = {
      id: userMessageId,
      content,
      role: 'user',
      timestamp: new Date()
    };

    // Add pending AI message
    const pendingAiMessage: ChatMessage = {
      id: aiMessageId,
      content: '',
      role: 'assistant',
      timestamp: new Date(),
      pending: true
    };

    setMessages(prev => [...prev, userMessage, pendingAiMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendMessage(content, languageCode);
      
      // Update the AI message with the actual response
      setMessages(prev => 
        prev.map(msg => 
          msg.id === aiMessageId 
            ? { 
                ...msg, 
                content: response.message, 
                pending: false,
                timestamp: new Date(response.timestamp)
              } 
            : msg
        )
      );
    } catch (err) {
      const errorMessage = languageCode === 'hi' 
        ? 'क्षमा करें, कोई त्रुटि हुई। कृपया पुनः प्रयास करें।'
        : 'Sorry, I encountered an error. Please try again.';
      
      // Update the AI message with the error
      setMessages(prev => 
        prev.map(msg => 
          msg.id === aiMessageId 
            ? { 
                ...msg, 
                content: errorMessage, 
                pending: false 
              } 
            : msg
        )
      );
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [languageCode]);

  return {
    messages,
    sendMessage: sendChatMessage,
    isLoading,
    error
  };
};