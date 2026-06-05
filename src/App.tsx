import React, { useState, useEffect } from 'react';
import { Award, BookOpen, GraduationCap, ClipboardList, Book, Calculator, RotateCcw, Volume2, UserCircle, Trophy } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row antialiased">
      {/* DESKTOP SIDEBAR (LEFT) */}
      <aside className="hidden md:flex md:w-64 flex-col fixed inset-y-0 left-0 bg-white border-r border-slate-200/60 z-30 justify-between p-5 select-none shrink-0 shadow-xs">
        <div className="space-y-8">
          {/* Logo brand / Top Header inside Sidebar */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dash')}>
            <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-600/25 transform hover:scale-105 transition-all">
              <GraduationCap className="h-5 w-5 stroke-1.5" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-500 uppercase block">
                Enfermagem • CTT
              </span>
              <span className="text-xs font-black text-slate-800 tracking-tight font-display uppercase block">
                Questionário
              </span>
            </div>
          </div>

          {/* Academic Points Badge */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200/80 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                <Trophy className="h-4 w-4 fill-amber-100" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] font-bold text-amber-700/70 font-mono uppercase tracking-wide truncate">
                  Seu Progresso
                </span>
                <span className="text-xs font-extrabold text-amber-900 font-mono">
                  {stats.points} PTS
                </span>
              </div>
            </div>
            <div className="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-mono font-bold shrink-0">
              ESTUDANTE
            </div>
          </div>

          {/* Navigation Links inside Sidebar */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block px-2.5">
              Menu de Estudos
            </span>
            <nav className="space-y-1">
              {[
                { id: 'dash', label: 'Início', desc: 'Painel acadêmico', icon: ClipboardList },
                { id: 'study', label: 'Sumários', desc: 'Resumos e apostilas', icon: BookOpen },
                { id: 'quiz', label: 'Simulados', desc: 'Testes e casos práticos', icon: Award },
                { id: 'calc', label: 'Cálculos', desc: 'Gotejamento e doses', icon: Calculator },
                { id: 'dict', label: 'Dicionário', desc: 'Termos de Enfermagem', icon: Book },
              ].map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer group ${
                      isActive
                        ? 'bg-indigo-50/70 text-indigo-700 font-bold border-l-4 border-indigo-600 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    <IconComponent className={`h-4.5 w-4.5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-semibold leading-tight font-display">{item.label}</span>
                      <span className="text-[9px] font-mono text-slate-400 leading-none mt-0.5 group-hover:text-slate-500">{item.desc}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Sidebar Footer details & actions */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <button
            onClick={handleResetProgress}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50/70 border border-dashed border-slate-200 hover:border-rose-200 transition-all cursor-pointer"
            title="Reiniciar Progresso"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reiniciar Progresso</span>
          </button>
          
          <div className="text-[10px] text-slate-400 font-mono text-center leading-normal">
            <p className="font-bold">Portal de Enfermagem</p>
            <p className="text-[9px]">CTT • UFPI • 2026</p>
          </div>
        </div>
      </aside>

      {/* MOBILE TOP HEADER */}
      <header className="md:hidden sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('dash')}>
          <div className="h-9 w-9 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center text-white shadow-xs">
            <GraduationCap className="h-5 w-5 stroke-1.5" />
          </div>
          <div>
            <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-widest block">
              Enfermagem • CTT
            </span>
            <span className="text-xs font-black text-slate-800 tracking-tight font-display uppercase leading-tight block">
              Questionário
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full py-1 px-2.5 border border-amber-200">
            <Trophy className="h-3.5 w-3.5 text-amber-500 fill-amber-200" />
            <span className="text-[10px] font-mono font-bold text-amber-800">
              {stats.points} PTS
            </span>
          </div>
          <button
            onClick={handleResetProgress}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
            title="Reiniciar Progresso"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT CANVAS CONTAINER (WITH LEFT SIDEBAR ADJUSTMENT) */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0 min-h-screen transition-all duration-300">
        
        {/* Top bar indicators for desktop */}
        <div className="hidden md:flex justify-between items-center px-8 py-4 bg-white border-b border-slate-100 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-slate-400">Status Escolar:</span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Servidor Acadêmico Ativo
            </span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
            <span>Sessão atual: 2026/1</span>
            <span className="text-slate-200">|</span>
            <span>Progresso sincronizado localmente</span>
          </div>
        </div>

        {/* Dynamic Inner View render */}
        <main className="w-full px-4 sm:px-6 md:px-8 py-6 md:py-8 flex-1 max-w-6xl mx-auto">
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

        {/* Footer info at bottom of wrapper */}
        <footer className="bg-white border-t border-slate-105 py-6 text-center text-xs text-slate-400 font-mono mt-auto">
          <p className="max-w-xl mx-auto leading-relaxed px-4">
            REGULAMENTO COFEN • COLÉGIO TÉCNICO DE TERESINA - UFPI © 2026. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* MOBILE BAR NAVIGATION (BOTTOM) */}
      <div className="md:hidden sticky bottom-0 z-40 bg-white border-t border-slate-100 shadow-lg grid grid-cols-5 h-16 py-1">
        <button
          onClick={() => setActiveTab('dash')}
          className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
            activeTab === 'dash' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 text-xs'
          }`}
        >
          <ClipboardList className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Início</span>
        </button>
        <button
          onClick={() => setActiveTab('study')}
          className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
            activeTab === 'study' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 text-xs'
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Sumários</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
            activeTab === 'quiz' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 text-xs'
          }`}
        >
          <Award className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Simular</span>
        </button>
        <button
          onClick={() => setActiveTab('calc')}
          className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
            activeTab === 'calc' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 text-xs'
          }`}
        >
          <Calculator className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Contas</span>
        </button>
        <button
          onClick={() => setActiveTab('dict')}
          className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
            activeTab === 'dict' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 text-xs'
          }`}
        >
          <Book className="h-5 w-5" />
          <span className="text-[9px] uppercase font-mono tracking-wider">Dicio</span>
        </button>
      </div>
    </div>
  );
}
