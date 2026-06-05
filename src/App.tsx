import React, { useState, useEffect } from 'react';
import { Award, BookOpen, GraduationCap, ClipboardList, Book, Calculator, RotateCcw, Volume2, UserCircle } from 'lucide-react';
import Dashboard from './components/Dashboard';
import StudyView from './components/StudyView';
import QuizView from './components/QuizView';
import CalculatorView from './components/CalculatorView';
import DictionaryView from './components/DictionaryView';
import { UserStats } from './types';

// Default mock statistics
const DEFAULT_STATS: UserStats = {
  quizzesTaken: 0,
  correctAnswersCount: 0,
  totalQuestionsAnswered: 0,
  performanceByTopic: {},
  savedQuestionIds: [],
  points: 0
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'dash' | 'study' | 'quiz' | 'calc' | 'dict'>('dash');
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nursing_quiz_stats_ctt');
    if (saved) {
      try {
        setStats(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading nursing statistics', e);
      }
    }
  }, []);

  // Sync to LocalStorage on changes
  const handleUpdateStats = (newStats: UserStats | ((prev: UserStats) => UserStats)) => {
    setStats((prev) => {
      const resolved = typeof newStats === 'function' ? newStats(prev) : newStats;
      localStorage.setItem('nursing_quiz_stats_ctt', JSON.stringify(resolved));
      return resolved;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Tem certeza de que deseja apagar todo o seu progresso de estudos acadêmicos e reiniciar?')) {
      handleUpdateStats(DEFAULT_STATS);
      setActiveTab('dash');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* 1. TOP HEADER / BRAND NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo brand */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dash')}>
              <div className="h-10 w-10 bg-linear-to-br from-indigo-500 via-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-600/10">
                <GraduationCap className="h-6 w-6 stroke-1.5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block">
                  Enfermagem • CTT
                </span>
                <span className="text-sm font-bold text-slate-800 tracking-tight font-display">
                  QUESTIONÁRIO - CTT
                </span>
              </div>
            </div>

            {/* Desktop Navbar link options */}
            <nav className="hidden md:flex gap-1.5">
              <button
                onClick={() => setActiveTab('dash')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === 'dash'
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => setActiveTab('study')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === 'study'
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                Sumários
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === 'quiz'
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                Simulados
              </button>
              <button
                onClick={() => setActiveTab('calc')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === 'calc'
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                Cálculos
              </button>
              <button
                onClick={() => setActiveTab('dict')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === 'dict'
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-b-2 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                Dicionário
              </button>
            </nav>

            {/* Profile badge / Reset points */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full py-1.5 pl-3 pr-4 border border-amber-200">
                <Award className="h-4 w-4 text-amber-500 fill-amber-200" />
                <span className="text-xs font-mono font-bold text-amber-800">
                  {stats.points} PTS
                </span>
              </div>
              <button
                onClick={handleResetProgress}
                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                title="Reiniciar Progresso"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE CHIEF RENDER AREA */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {activeTab === 'dash' && (
          <Dashboard
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}
        {activeTab === 'study' && <StudyView />}
        {activeTab === 'quiz' && (
          <QuizView stats={stats} onUpdateStats={handleUpdateStats} />
        )}
        {activeTab === 'calc' && <CalculatorView />}
        {activeTab === 'dict' && <DictionaryView />}
      </main>

      {/* 3. MOBILE BAR NAVIGATION */}
      <div className="md:hidden sticky bottom-0 z-40 bg-white border-t border-slate-100 shadow-lg grid grid-cols-5 h-16 py-1">
        <button
          onClick={() => setActiveTab('dash')}
          className={`flex flex-col items-center justify-center gap-0.5 ${
            activeTab === 'dash' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <ClipboardList className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Início</span>
        </button>
        <button
          onClick={() => setActiveTab('study')}
          className={`flex flex-col items-center justify-center gap-0.5 ${
            activeTab === 'study' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Sumário</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex flex-col items-center justify-center gap-0.5 ${
            activeTab === 'quiz' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <Award className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Simula</span>
        </button>
        <button
          onClick={() => setActiveTab('calc')}
          className={`flex flex-col items-center justify-center gap-0.5 ${
            activeTab === 'calc' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <Calculator className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Contas</span>
        </button>
        <button
          onClick={() => setActiveTab('dict')}
          className={`flex flex-col items-center justify-center gap-0.5 ${
            activeTab === 'dict' ? 'text-indigo-600 font-bold' : 'text-slate-400'
          }`}
        >
          <Book className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Dicio</span>
        </button>
      </div>

      {/* 4. FOOTER DETAILS */}
      <footer className="bg-white border-t border-slate-100 py-6 text-center text-xs text-slate-400 font-mono mt-8">
        <p className="max-w-xl mx-auto leading-relaxed">
          CURSO ENFERMAGEM QUESTIONÁRIO - CTT © 2026. Desenvolvido para o Colégio Técnico de Teresina - UFPI.
        </p>
      </footer>
    </div>
  );
}
