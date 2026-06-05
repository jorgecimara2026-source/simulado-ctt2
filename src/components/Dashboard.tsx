import React, { useState } from 'react';
import { Award, ShieldAlert, Star, ShieldCheck, HelpCircle, BookCheck, ClipboardList, BookOpen } from 'lucide-react';
import { UserStats } from '../types';
import { QUESTIONS_BANK } from '../data/questions';

interface DashboardProps {
  stats: UserStats;
  onNavigate: (tab: 'study' | 'quiz' | 'calc' | 'dict') => void;
  onUpdateStats: (newStats: UserStats | ((prev: UserStats) => UserStats)) => void;
}

export default function Dashboard({ stats, onNavigate, onUpdateStats }: DashboardProps) {
  const [showEthicsAlert, setShowEthicsAlert] = useState<boolean>(true);

  // Ethics resolution rules checklist
  const ethicsRules = [
    {
      art: 'Art. 25',
      text: 'Recusar-se a executar atividades de risco ou para as quais não esteja habilitado.'
    },
    {
      art: 'Art. 44',
      text: 'É proibido administrar medicamentos sem prescrição válida por escrito.'
    },
    {
      art: 'Art. 78',
      text: 'Proibido administrar sem conhecer indicação, ação e potenciais riscos.'
    }
  ];

  // The 13 Certos checklist
  const trezeCertos = [
    'Prescrição correta', 'Paciente certo', 'Medicamento certo', 'Validade certa',
    'Forma / apresentação certa', 'Dose certa', 'Compatibilidade certa', 'Orientação ao paciente',
    'Via de administração certa', 'Horário certo', 'Tempo de administração certo',
    'Ação certa', 'Registro certo'
  ];

  // Find saved questions objects
  const savedQuestions = QUESTIONS_BANK.filter((q) => stats.savedQuestionIds.includes(q.id));

  const handleClearSaved = () => {
    onUpdateStats((prev) => ({ ...prev, savedQuestionIds: [] }));
  };

  return (
    <div className="space-y-8 animate-fade-in" id="dashboard-view">
      {/* 1. HERO HEADER SUMMARY SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 via-violet-700 to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-indigo-100 bg-indigo-500/30 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
            Colégio Técnico de Teresina
          </span>
          <h1 className="text-3xl font-black font-display tracking-tight">
            Curso Técnico em Enfermagem
          </h1>
          <p className="text-sm text-slate-100 max-w-xl leading-relaxed">
            Bem-vindo ao simulador e questionário preparatório especial. Desenvolva habilidades de biossegurança, cálculo de dosagem, administração e ética médica do COFEN.
          </p>
        </div>

        {/* Stats badge */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center min-w-[140px] shrink-0 self-stretch md:self-auto flex flex-col justify-center">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-200 uppercase block mb-1">
            Pontuação total
          </span>
          <span className="text-4xl font-extrabold font-display block text-amber-300">
            {stats.points}
          </span>
          <p className="text-[10px] text-indigo-100 font-mono mt-1">
            {stats.quizzesTaken} Simulados Feitos
          </p>
        </div>
      </div>

      {/* 2. ANALYTICS METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Simulados Concluídos
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-800 font-display">
              {stats.quizzesTaken}
            </span>
            <span className="text-xs text-slate-400 font-mono">avaliações</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Respostas Corretas
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-600 font-display">
              {stats.correctAnswersCount}
            </span>
            <span className="text-xs text-slate-400 font-mono">de {stats.totalQuestionsAnswered}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Taxa de Acertos do Aluno
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-indigo-600 font-display">
              {stats.totalQuestionsAnswered > 0
                ? Math.round((stats.correctAnswersCount / stats.totalQuestionsAnswered) * 100)
                : 0}
              %
            </span>
            <span className="text-xs text-slate-400 font-mono">média</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Questões Salvas
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-800 font-display">
              {stats.savedQuestionIds.length}
            </span>
            <span className="text-xs text-slate-400 font-mono">itens para revisão</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Columns - Quick checklist of safe administration & ethics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ethics guidelines */}
          {showEthicsAlert && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 shadow-xs">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-bold font-display text-slate-800 text-md flex items-center gap-1.5">
                  <ShieldAlert className="h-5 w-5 text-amber-600" />
                  Ética de Enfermagem: Resolução COFEN nº 564/2017
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ethicsRules.map((rule, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-100">
                    <span className="text-[10px] font-extrabold font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md block w-max mb-1.5">
                      {rule.art}
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick study references - "Treze Certos" */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h3 className="font-bold font-display text-slate-800 text-md mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Os Treze Certos na Administração de Medicamentos
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-normal font-mono">
              Processo padronizado de biossegurança adotado nas disciplinas assistenciais do CTT:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {trezeCertos.map((certo, idx) => (
                <div
                  key={idx}
                  className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-xs font-semibold text-slate-600 flex items-center gap-1.5 hover:bg-indigo-50/50 hover:border-indigo-100 transition-colors"
                >
                  <span className="text-[9px] font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded-md border font-mono">
                    {idx + 1}
                  </span>
                  <span className="truncate">{certo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Saved questions review panel */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold font-display text-slate-800 text-md flex items-center gap-2">
                <Star className="h-5 w-5 text-indigo-500 fill-indigo-100" />
                Coleção de Questões Salvas ({savedQuestions.length})
              </h3>
              {savedQuestions.length > 0 && (
                <button
                  onClick={handleClearSaved}
                  className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline font-extrabold font-mono"
                >
                  Limpar Coleção
                </button>
              )}
            </div>

            {savedQuestions.length > 0 ? (
              <div className="space-y-4">
                {savedQuestions.map((q) => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200/50 hover:border-indigo-200 transition-colors">
                    <p className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                      {q.topic} • {q.difficulty}
                    </p>
                    <p className="text-slate-800 font-semibold text-sm mt-1.5 leading-relaxed font-display">
                      {q.questionText}
                    </p>
                    <div className="mt-3 p-3 bg-white border border-slate-100 rounded-lg">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1">
                        Resposta Correta: {q.correctAnswer}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed font-mono">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400 text-xs font-mono">
                Nenhuma questão estrela-marcada no momento. Clique na estrela ao lado das questões durante o simulado para guardá-las nesta seção.
              </div>
            )}
          </div>
        </div>

        {/* Right Side Column - Quick links and modules map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h3 className="font-bold font-display text-slate-800 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-indigo-600" />
              Navegação Acadêmica
            </h3>

            <div className="space-y-3">
              <button
                onClick={() => onNavigate('study')}
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 hover:border-indigo-150 text-left transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 font-display group-hover:text-indigo-600 transition-colors">
                      Módulos de Revisão
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Apostilas e resumos de SNG, SNE e cálculos.</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onNavigate('quiz')}
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 hover:border-indigo-150 text-left transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 font-display group-hover:text-indigo-600 transition-colors">
                      Simulado de Provas
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Testes cronometrados focados em sua área.</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onNavigate('calc')}
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 hover:border-indigo-150 text-left transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 font-display group-hover:text-indigo-600 transition-colors">
                      Calculadora de Soro e Doses
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Calcule de forma visual a regra de 3 e gotejamentos.</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onNavigate('dict')}
                className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 hover:border-indigo-150 text-left transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 font-display group-hover:text-indigo-600 transition-colors">
                      Glossário de Termos
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">Resolva dúvidas de oligúria, anúria e termos retais.</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
