import axios from 'axios';
import { getLanguagePrefix } from './languages';
import { ChatResponse } from '../types/language';

// API configuration
const API_URL = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/';
const API_KEY = 'sk-default-eOovA5XjxlcezdxejJZoHHUpxg8rLNh8';

// Generate random IDs for each session
const USER_ID = 'user-' + Math.random().toString(36).substring(2, 15);
const AGENT_ID = '683bf5b4cf9fc42b59e13b35';
const SESSION_ID = `683bf5b4cf9fc42b59e13b35-s${Math.random().toString(36).substring(2, 10)}`;

export const sendMessage = async (message: string, languageCode: string): Promise<ChatResponse> => {
  try {
    // Add language prefix if not already present
    const processedMessage = 
      message.startsWith(`[lang:${languageCode}]`) 
        ? message 
        : `${getLanguagePrefix(languageCode)}${message}`;

    const response = await axios.post(
      API_URL,
      {
        user_id: USER_ID,
        agent_id: AGENT_ID,
        session_id: SESSION_ID,
        message: processedMessage
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        }
      }
    );

    // Extract the response message from the correct path in the response data
    const aiMessage = response.data.response || response.data.message || 'I apologize, but I encountered an issue. Please try again.';

    return {
      message: aiMessage,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to get response from AI. Please try again.');
  }
};