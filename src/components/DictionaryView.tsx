import React, { useState } from 'react';
import { Search, Book, Bookmark } from 'lucide-react';
import { DICTIONARY_DATA } from '../data/dictionary';

export default function DictionaryView() {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(DICTIONARY_DATA.map((d) => d.category)))];

  const filteredTerms = DICTIONARY_DATA.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-100 p-6 md:p-8" id="dictionary-view">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
            Vocabulário Técnico
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-800 mt-2 flex items-center gap-2">
            <Book className="h-6 w-6 text-indigo-600" />
            Dicionário de Termos de Enfermagem
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Glossário de terminologias e definições clínicas presentes nas apostilas e avaliações do CTT.
          </p>
        </div>
      </div>

      {/* Filters search */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        <div className="md:col-span-8 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar termo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
        <div className="md:col-span-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas Categorias' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of cards */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-slate-100 hover:border-indigo-250 hover:shadow-xs transition-all duration-200 bg-linear-to-br from-white to-slate-50"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-slate-800 text-base font-display flex items-center gap-1.5">
                  <Bookmark className="h-4 w-4 text-indigo-500 fill-indigo-100" />
                  {item.term}
                </h3>
                <span className="text-[10px] font-bold text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-full uppercase font-mono">
                  {item.category}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-400 font-mono text-sm">
          Nenhum termo encontrado para os critérios de busca.
        </div>
      )}
    </div>
  );
}
