export enum ModuleView {
  DASHBOARD = 'DASHBOARD',
  REAL_VS_FAKE = 'REAL_VS_FAKE',
  CULTURE_GUARD = 'CULTURE_GUARD',
  AI_ACADEMY = 'AI_ACADEMY',
  ETHICAL_CREATOR = 'ETHICAL_CREATOR',
  PROMPT_LAB = 'PROMPT_LAB',
  LIBRARY = 'LIBRARY',
  DIGITAL_CITIZEN = 'DIGITAL_CITIZEN' // Yeni modül: Gizlilik, Algoritma, Denge
}

export enum AnalysisColor {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  RED = 'RED'
}

export interface AnalysisResult {
  color: AnalysisColor;
  title: string;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  image?: string;
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  content: string;
  interactiveQuestion: string;
  interactiveAnswer: boolean; // True for yes/agree, False for no
  explanation: string;
  icon: string;
  color: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  coverColor: string;
  summary: string;
  aiConnection: string; // Neden bu kitabı okumak YZ kullanımını geliştirir?
  category: 'VOCABULARY' | 'HISTORY' | 'FUTURE';
}