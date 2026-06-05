import React, { useState } from 'react';
import { BookOpen, GraduationCap, ChevronRight, AlertCircle, BookmarkCheck } from 'lucide-react';
import { SUMMARIES_DATA } from '../data/summaries';

export default function StudyView() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(SUMMARIES_DATA[0].id);
  const [activeChapterIdx, setActiveChapterIdx] = useState<number>(0);

  const activeTopic = SUMMARIES_DATA.find((t) => t.id === selectedTopicId) || SUMMARIES_DATA[0];
  const activeChapter = activeTopic.chapters[activeChapterIdx] || activeTopic.chapters[0];

  const handleTopicChange = (id: string) => {
    setSelectedTopicId(id);
    setActiveChapterIdx(0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="study-view">
      {/* Sidebar Topics map */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-xs">
          <h3 className="font-bold text-slate-800 text-sm font-display uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-indigo-600" />
            Módulos de Estudo
          </h3>

          <div className="space-y-2">
            {SUMMARIES_DATA.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicChange(topic.id)}
                className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                  selectedTopicId === topic.id
                    ? 'border-indigo-600 bg-indigo-50/40 text-indigo-700 font-bold shadow-md shadow-indigo-100/10'
                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="truncate block font-display">{topic.title}</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5 truncate font-mono">
                    {topic.discipline}
                  </span>
                </div>
                <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${selectedTopicId === topic.id ? 'translate-x-1 text-indigo-600' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Guidelines Card */}
        <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 rounded-xl p-5 border border-indigo-100 shadow-xs">
          <h4 className="font-bold text-indigo-900 text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1">
            <GraduationCap className="h-4 w-4 text-indigo-700" />
            Dicas Universitárias:
          </h4>
          <p className="text-xs text-indigo-800 leading-relaxed font-semibold">
            Consulte as seções de cada capítulo antes de fazer o simulado. O questionário avaliativo exige precisão técnica embasada nos materiais oficiais do CTT.
          </p>
        </div>
      </div>

      {/* Chapter Reader Panel */}
      <div className="lg:col-span-8 bg-white rounded-2xl shadow-xs border border-slate-100 p-6 md:p-8 flex flex-col justify-between min-h-[500px]">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-5 mb-6">
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
              {activeTopic.discipline} • Profa. {activeTopic.professor}
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-800 mt-2">
              {activeTopic.title}
            </h2>
            <p className="text-sm text-slate-500 mt-1">{activeTopic.description}</p>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap border-b border-slate-100 mb-6 gap-2">
            {activeTopic.chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapterIdx(idx)}
                className={`px-3 py-1.5 text-xs font-bold rounded-t-lg border-b-2 transition-all transition-duration-200 cursor-pointer ${
                  activeChapterIdx === idx
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/20 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {chap.title}
              </button>
            ))}
          </div>

          {/* Content Lesson Block */}
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed mb-8">
            {activeChapter.content.map((p, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <BookmarkCheck className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout & Tips */}
        {activeChapter.tips && activeChapter.tips.length > 0 && (
          <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/50">
            <h4 className="font-bold text-amber-800 text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
              Observação e Conduta Técnica:
            </h4>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              {activeChapter.tips.map((tip, idx) => (
                <li key={idx} className="leading-relaxed">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
