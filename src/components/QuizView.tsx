import React, { useState } from 'react';
import { Eye, CheckCircle2, XCircle, ChevronRight, RefreshCw, Trophy, HelpCircle, Save, Award } from 'lucide-react';
import { Question, UserStats } from '../types';
import { QUESTIONS_BANK } from '../data/questions';

interface QuizViewProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats | ((prev: UserStats) => UserStats)) => void;
}

export default function QuizView({ stats, onUpdateStats }: QuizViewProps) {
  // Config phase states
  const [selectedTopic, setSelectedTopic] = useState<string>('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todas');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [quizPhase, setQuizPhase] = useState<'config' | 'playing' | 'results'>('config');

  // Active quiz states
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>(''); // For multi-choice/true-false
  const [calcInput, setCalcInput] = useState<string>(''); // For calculation numerical inputs
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, { answer: string; correct: boolean }>>({});

  // Filters setup
  const topics = ['todos', ...Array.from(new Set(QUESTIONS_BANK.map((q) => q.topic)))];
  const difficulties = ['todas', 'Fácil', 'Médio', 'Difícil'];

  const handleStartQuiz = () => {
    let pool = [...QUESTIONS_BANK];

    // Filter by topic
    if (selectedTopic !== 'todos') {
      pool = pool.filter((q) => q.topic === selectedTopic);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'todas') {
      pool = pool.filter((q) => q.difficulty === selectedDifficulty);
    }

    // Shuffle pool
    const shuffled = pool.sort(() => Math.random() - 0.5);

    // Slice count
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    if (selected.length === 0) {
      alert('Nenhuma questão coincide com os filtros selecionados. Tente alterar o tópico ou dificuldade.');
      return;
    }

    setActiveQuestions(selected);
    setCurrentIdx(0);
    setSelectedAnswer('');
    setCalcInput('');
    setIsAnswered(false);
    setScore(0);
    setUserAnswers({});
    setQuizPhase('playing');
  };

  const handleOptionSelect = (optionKey: string) => {
    if (isAnswered) return;
    setSelectedAnswer(optionKey);
  };

  const handleSubmitAnswer = () => {
    if (isAnswered) return;

    const currentQuestion = activeQuestions[currentIdx];
    let isCorrect = false;
    let chosenAnswer = '';

    if (currentQuestion.type === 'calculation') {
      chosenAnswer = calcInput.trim();
      // Match float or integer correctly by parsing
      const cleanInput = parseFloat(chosenAnswer.replace(',', '.'));
      const cleanCorrect = parseFloat(currentQuestion.correctAnswer.replace(',', '.'));
      isCorrect = !isNaN(cleanInput) && cleanInput === cleanCorrect;
    } else {
      chosenAnswer = selectedAnswer;
      isCorrect = chosenAnswer === currentQuestion.correctAnswer;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { answer: chosenAnswer, correct: isCorrect }
    }));

    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer('');
      setCalcInput('');
      setIsAnswered(false);
    } else {
      // Quiz finished, register stats
      const correctCount = score + (activeQuestions[currentIdx] && userAnswers[activeQuestions[currentIdx].id]?.correct ? 0 : 0); // adjust current state
      
      // Let's compute actual stats updates
      const answeredList = activeQuestions.map((q) => {
        const id = q.id;
        const correct = userAnswers[id]?.correct ?? false;
        return { topic: q.topic, correct };
      });

      // Update local storage statistics
      onUpdateStats((prev) => {
        const updatedStats = { ...prev };
        updatedStats.quizzesTaken += 1;
        updatedStats.totalQuestionsAnswered += activeQuestions.length;
        
        let localCorrect = 0;
        activeQuestions.forEach((q) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns ? userAns.correct : false;
          if (isCorrect) localCorrect++;

          // Initialize performance by topic
          if (!updatedStats.performanceByTopic[q.topic]) {
            updatedStats.performanceByTopic[q.topic] = { total: 0, correct: 0 };
          }
          updatedStats.performanceByTopic[q.topic].total += 1;
          if (isCorrect) {
            updatedStats.performanceByTopic[q.topic].correct += 1;
          }
        });

        updatedStats.correctAnswersCount += localCorrect;
        updatedStats.points += localCorrect * 10; // 10 points per right answer
        return updatedStats;
      });

      setQuizPhase('results');
    }
  };

  const toggleSaveQuestion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdateStats((prev) => {
      const saved = prev.savedQuestionIds.includes(id)
        ? prev.savedQuestionIds.filter((qId) => qId !== id)
        : [...prev.savedQuestionIds, id];
      return { ...prev, savedQuestionIds: saved };
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-100 p-6 md:p-8" id="quiz-view">
      {/* 1. CONFIG/SELECTION PHASE */}
      {quizPhase === 'config' && (
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
              Simulador de Avaliação
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-800 mt-2">
              Configurar Simulado Acadêmico
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Personalize o assunto e volume de questões para testar seus conhecimentos e fixar o aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                  Selecione o Assunto (Tópico):
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                >
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t === 'todos' ? 'Todos os Assuntos' : t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                  Nível de Dificuldade:
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                >
                  {difficulties.map((d) => (
                    <option key={d} value={d}>
                      {d === 'todas' ? 'Qualquer Dificuldade' : d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                  Volume de Questões:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {[5, 10, 15, 20, 30, 50].map((num) => {
                    const pool = QUESTIONS_BANK.filter((q) => {
                      const matchTopic = selectedTopic === 'todos' || q.topic === selectedTopic;
                      const matchDiff = selectedDifficulty === 'todas' || q.difficulty === selectedDifficulty;
                      return matchTopic && matchDiff;
                    });
                    const disabled = pool.length < num && num > 5; // Do not disable 5 as basic, but allow higher depending on availability
                    return (
                      <button
                        key={num}
                        type="button"
                        disabled={disabled}
                        onClick={() => setQuestionCount(num)}
                        className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                          questionCount === num
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {num} Questões
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 text-xs text-indigo-600 font-medium font-mono">
                  Questões disponíveis para estes filtros: {
                    QUESTIONS_BANK.filter((q) => {
                      const matchTopic = selectedTopic === 'todos' || q.topic === selectedTopic;
                      const matchDiff = selectedDifficulty === 'todas' || q.difficulty === selectedDifficulty;
                      return matchTopic && matchDiff;
                    }).length
                  }
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-indigo-700 block mb-1 font-mono uppercase tracking-wider">
                  Avaliação Diagnóstica CTT
                </span>
                Este questionário inclui casos práticos das provas de Enfermagem. Calcule doses, defina condutas com sondas gástricas e avalie termos técnicos em conformidade com as exigências acadêmicas do professor e do COFEN.
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
            <button
              onClick={handleStartQuiz}
              className="px-6 py-2.5 font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/10 transition-all flex items-center gap-1 cursor-pointer"
            >
              Iniciar Simulado <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. PLAYING PHASE */}
      {quizPhase === 'playing' && activeQuestions.length > 0 && (
        <div>
          {/* Progress Indicators */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-xs font-semibold text-slate-400 font-mono">
                Assunto: <span className="text-indigo-600 font-bold">{activeQuestions[currentIdx].topic}</span>
              </span>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Dificuldade: <span className="text-slate-600 font-bold">{activeQuestions[currentIdx].difficulty}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500 font-mono bg-slate-100 px-2.5 py-1 rounded-full">
                Questão {currentIdx + 1} de {activeQuestions.length}
              </span>
              <button
                onClick={(e) => toggleSaveQuestion(activeQuestions[currentIdx].id, e)}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  stats.savedQuestionIds.includes(activeQuestions[currentIdx].id)
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-650 font-bold'
                    : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                }`}
                title="Salvar questão para revisar depois"
              >
                <Save className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6 bg-slate-50 border border-slate-100 p-5 rounded-xl">
            <h3 className="text-md md:text-lg font-bold text-slate-800 leading-normal font-display">
              {activeQuestions[currentIdx].questionText}
            </h3>
          </div>

          {/* Interactive Input based on Question Type */}
          <div className="space-y-3 mb-6">
            {/* Type calculation: standard manual input */}
            {activeQuestions[currentIdx].type === 'calculation' ? (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase mb-2">
                  Insira o valor numérico exato calculado:
                </label>
                <div className="flex gap-2">
                  <input
                     type="text"
                     value={calcInput}
                     onChange={(e) => setCalcInput(e.target.value)}
                     disabled={isAnswered}
                     placeholder="Ex: 5 ou 4.8"
                     className="max-w-[200px] px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <span className="flex items-center text-xs font-mono text-slate-400">
                    mL / gotas / comprimidos
                  </span>
                </div>
              </div>
            ) : (
              // Type multi-choice or true-false: rendered as clickable blocks
              activeQuestions[currentIdx].options?.map((option, idx) => {
                const optionKey = ['A', 'B', 'C', 'D'][idx] || option;
                const isSelected = selectedAnswer === optionKey;
                const isCorrect = optionKey === activeQuestions[currentIdx].correctAnswer;

                let btnStyles = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:border-indigo-200';
                let iconEl = null;

                if (isAnswered) {
                  if (isCorrect) {
                     btnStyles = 'border-emerald-305 bg-emerald-50 text-emerald-800 font-bold';
                     iconEl = <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />;
                  } else if (isSelected) {
                     btnStyles = 'border-rose-300 bg-rose-50 text-rose-800 font-bold';
                     iconEl = <XCircle className="h-5 w-5 text-rose-600 shrink-0" />;
                  } else {
                     btnStyles = 'border-slate-100 bg-slate-50/50 text-slate-400';
                  }
                } else if (isSelected) {
                  btnStyles = 'border-indigo-500 bg-indigo-50 text-indigo-700 font-semibold';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOptionSelect(optionKey)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer ${btnStyles}`}
                  >
                    <span className="leading-relaxed font-display">{option}</span>
                    {iconEl}
                  </button>
                );
              })
            )}
          </div>

          {/* Feedback Section */}
          {isAnswered && (
            <div className="mb-6 p-5 rounded-xl border border-slate-250 bg-slate-50">
              <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 font-mono mb-2">
                <HelpCircle className="h-4 w-4 text-indigo-500" /> Detalhes e Justificativa CTT:
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {activeQuestions[currentIdx].explanation}
              </p>
              {activeQuestions[currentIdx].source && (
                <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-md border font-mono">
                  Fonte: {activeQuestions[currentIdx].source}
                </span>
              )}

              {/* Show step by step calculations if present */}
              {activeQuestions[currentIdx].calculationSteps && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-700 block mb-2 font-mono uppercase tracking-wider">
                    Equação Passo a Passo:
                  </span>
                  <div className="space-y-1.5">
                    {activeQuestions[currentIdx].calculationSteps?.map((step, sIdx) => (
                      <p key={sIdx} className="text-xs font-mono text-slate-500 bg-white p-2 rounded border leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={activeQuestions[currentIdx].type !== 'calculation' ? !selectedAnswer : !calcInput}
                className="px-6 py-2.5 font-bold text-sm bg-slate-800 hover:bg-slate-900 text-white rounded-xl shadow-xs transition-all disabled:opacity-50 cursor-pointer"
              >
                Confirmar Resposta
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/10 transition-all flex items-center gap-1 cursor-pointer"
              >
                {currentIdx + 1 < activeQuestions.length ? 'Próxima Questão' : 'Finalizar Simulado'}{' '}
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. SHOW SCOREBOARD RESULTS PHASE */}
      {quizPhase === 'results' && (
        <div className="text-center py-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center border border-amber-200 shadow-md shadow-amber-200/20">
              <Trophy className="h-8 w-8 stroke-1.5" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 font-display">
            Parabéns! Simulado Finalizado
          </h3>
          <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Seu desempenho foi computado e acumulou pontos na trilha de estudos de enfermagem.
          </p>

          <div className="max-w-md mx-auto my-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 grid grid-cols-2 gap-4">
            <div className="border-r border-slate-200 text-center">
              <span className="text-sm font-semibold text-slate-400 font-mono uppercase block mb-1">
                Aproveitamento
              </span>
              <span className="text-3xl font-extrabold text-indigo-600 font-display">
                {Math.round((score / activeQuestions.length) * 100)}%
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-slate-400 font-mono uppercase block mb-1">
                Acertos
              </span>
              <span className="text-3xl font-extrabold text-slate-800 font-display">
                {score} / {activeQuestions.length}
              </span>
            </div>
          </div>

          {/* Motivational Quote and Suggestion */}
          <div className="max-w-md mx-auto mb-8 p-4 bg-amber-50 border border-amber-200/50 rounded-xl text-xs text-amber-850">
            {score === activeQuestions.length ? (
              <p className="font-semibold">Desempenho Perfeito! Você demonstrou domínio absoluto dos tópicos.</p>
            ) : score >= activeQuestions.length * 0.7 ? (
              <p className="font-semibold">Ótimo aproveitamento! Falta muito pouco para gabaritar a avaliação final.</p>
            ) : (
              <p className="font-semibold">Continue estudando! Recomenda-se reler as fichas de resumo e exercitar as contas do módulo.</p>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setQuizPhase('config')}
              className="px-6 py-2.5 font-bold text-sm text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="h-4 w-4" /> Novo Simulado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
