export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  pending?: boolean;
}

export interface ChatResponse {
  message: string;
  timestamp: string;
}