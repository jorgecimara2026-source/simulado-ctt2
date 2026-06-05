export interface Question {
  id: string;
  topic: string; // e.g., 'SNG e SNE', 'Cálculo de Medicação', 'Vias de Administração', 'Lavagem Intestinal', 'Sondagem Vesical', 'Medidas Antropométricas'
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  questionText: string;
  options?: string[]; // Multiple choice options
  correctAnswer: string; // "A", "B", "C", "D" or "Verdadeiro" / "Falso" or exact explanation for open questions
  type: 'multiple-choice' | 'true-false' | 'calculation' | 'short-answer';
  explanation: string;
  source?: string; // slide e.g., 'Slide 22', 'Exercício PDF'
  calculationSteps?: string[]; // for calculation feedback
}

export interface TermDefinition {
  term: string;
  definition: string;
  category: string;
}

export interface TopicSummary {
  id: string;
  title: string;
  description: string;
  discipline: string;
  professor: string;
  chapters: {
    title: string;
    content: string[];
    tips?: string[];
  }[];
}

export interface UserStats {
  quizzesTaken: number;
  correctAnswersCount: number;
  totalQuestionsAnswered: number;
  performanceByTopic: Record<string, { total: number; correct: number }>;
  completedQuizIds?: string[];
  savedQuestionIds: string[];
  points: number;
}
