import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Bot, Sparkles, Loader2, HeartPulse, HelpCircle, Code, ListOrdered, CheckCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const PRESET_TOPICS = [
  {
    category: 'Cálculos de Doses',
    questions: [
      { text: 'Como diluir Penicilina Cristalina de 5.000.000 UI?', short: 'Diluição Penicilina' },
      { text: 'Prescrito Decadron 2,5 mg. Tenho frasco de 4 mg/mL. Quantos mL administrar?', short: 'Regra de 3 Doses' }
    ]
  },
  {
    category: 'Soro e Gotejamento',
    questions: [
      { text: 'Como calcular gotas por minuto para um soro de 500mL correr em 6 horas?', short: 'Gotejamento Gotas' },
      { text: 'Qual a diferença prática das fórmulas de microgotas e gotas na enfermagem?', short: 'Microgotas vs Gotas' }
    ]
  },
  {
    category: 'Procedimentos e Técnicas',
    questions: [
      { text: 'Quais os passos essenciais para passagem de Sonda Nasogástrica (SNG)?', short: 'Sonda Nasogástrica' },
      { text: 'Quais os 13 certos da administração segura de medicamentos?', short: '13 Certos do Medicamento' }
    ]
  },
  {
    category: 'Legislação e Ética',
    questions: [
      { text: 'O que o técnico de enfermagem PODE e NÃO PODE fazer segundo o COFEN?', short: 'Atribuições do Técnico' },
      { text: 'Quais as punições éticas previstas pelo código de ética da enfermagem?', short: 'Sanções Éticas COFEN' }
    ]
  }
];

export default function AIChatView() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('nursing_chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        console.error('Erro ao ler histórico do chat', e);
      }
    }
    return [
      {
        id: 'welcome',
        role: 'assistant',
        content: `Olá! Eu sou o **Monitor de Enfermagem IA** do CTT - UFPI. 🩺💡

Estou aqui para ajudar você a resolver cálculos de dosagem passo a passo, tirar dúvidas sobre anatomia, procedimentos, abreviações técnicas da enfermagem e legislação do COFEN.

**Como posso ajudar nos seus estudos hoje?** Selecione uma das sugestões abaixo ou digite sua dúvida no campo de texto!`,
        timestamp: new Date()
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('nursing_chat_history', JSON.stringify(messages));
  }, [messages]);

  // Scroll downwards on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setErrorText(null);

    try {
      // Prepare full conversation context including assistant and user messages (max last 10 messages)
      const contextMessages = [...messages, userMsg].slice(-10).map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: contextMessages })
      });

      if (!res.ok) {
        throw new Error(`Erro na comunicaço: Código ${res.status}`);
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.text,
        timestamp: new Date()
      }]);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || 'Ocorreu um erro ao processar a resposta da IA. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm('Deseja realmente limpar toda esta conversa com o monitor de enfermagem?')) {
      const resetMsg: ChatMessage = {
        id: 'welcome',
        role: 'assistant',
        content: `Certo! Limpamos nosso quadro. 🫧

Qual nova dúvida acadêmica ou cálculo de dosagem de enfermaria você quer decifrar agora?`,
        timestamp: new Date()
      };
      setMessages([resetMsg]);
      setErrorText(null);
    }
  };

  // Helper function to render simple markdown elements safely on server and client without additional dependencies
  const renderFormattedText = (text: string) => {
    const paragraphs = text.split('\n');
    return paragraphs.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-2" />;

      // Subheading check
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-sm font-bold text-slate-800 mt-3 mb-1 font-display flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-indigo-500 shrink-0" />
            {parseLineInlineStyles(trimmed.replace('### ', ''))}
          </h4>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-sm font-bold uppercase tracking-wider text-indigo-700 mt-4 mb-2 font-display border-b border-indigo-100/60 pb-1">
            {parseLineInlineStyles(trimmed.replace('## ', ''))}
          </h3>
        );
      }
      if (trimmed.startsWith('# ')) {
        return (
          <h2 key={idx} className="text-base font-black text-slate-900 mt-5 mb-2 font-display">
            {parseLineInlineStyles(trimmed.replace('# ', ''))}
          </h2>
        );
      }

      // Bullets check
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return (
          <div key={idx} className="flex gap-2 ml-1.5 mt-1 mb-1 items-start text-xs text-slate-600 leading-relaxed">
            <span className="text-indigo-500 mt-1 shrink-0 text-[10px]">•</span>
            <span className="flex-1">{parseLineInlineStyles(trimmed.substring(2))}</span>
          </div>
        );
      }

      // Ordered list check
      const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        return (
          <div key={idx} className="flex gap-2 ml-1.5 mt-1.5 mb-1.5 items-start text-xs text-slate-600 leading-relaxed font-sans">
            <span className="text-indigo-600 bg-indigo-50 font-bold px-1.5 py-0.5 rounded text-[10px] scale-90 shrink-0 select-none">
              {numMatch[1]}
            </span>
            <span className="flex-1">{parseLineInlineStyles(numMatch[2])}</span>
          </div>
        );
      }

      // General Text Block
      return (
        <p key={idx} className="text-xs text-slate-600 leading-relaxed mb-2 break-words">
          {parseLineInlineStyles(trimmed)}
        </p>
      );
    });
  };

  const parseLineInlineStyles = (line: string) => {
    const parts: React.ReactNode[] = [];
    let currentKey = 0;
    
    // Regular expression to extract **bold** and `code` sequences
    const regex = /(\*\*.*?\*\*|`.*?`)/g;
    const segments = line.split(regex);
    
    for (const seg of segments) {
      if (seg.startsWith('**') && seg.endsWith('**')) {
        parts.push(
          <strong key={currentKey++} className="font-extrabold text-slate-900">
            {seg.slice(2, -2)}
          </strong>
        );
      } else if (seg.startsWith('`') && seg.endsWith('`')) {
        parts.push(
          <code key={currentKey++} className="px-1.5 py-0.5 bg-indigo-50 border border-indigo-100 rounded text-[10px] text-indigo-700 font-mono font-bold">
            {seg.slice(1, -1)}
          </code>
        );
      } else {
        parts.push(seg);
      }
    }
    return parts.length > 0 ? parts : line;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-4 md:p-6" id="ai-chat-view">
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-150 pb-5">
        <div>
          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3 fill-indigo-200 text-indigo-600" />
            Recurso Extra de Estudos
          </span>
          <h2 className="text-2xl font-black font-display text-slate-800 mt-2 flex items-center gap-2">
            <Bot className="h-6 w-6 text-indigo-600" />
            Monitor Acadêmico de Enfermagem IA
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Tire dúvidas conceituais, execute cálculos de dosagem passo a passo e consulte o regimento COFEN.
          </p>
        </div>
        <button
          onClick={handleClearHistory}
          disabled={messages.length <= 1}
          className="text-xs px-3 py-2 text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-lg font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
        >
          <Trash2 className="h-3.5 w-3.5" /> Limpar Conversa
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* PRESET TOPICS & SUGGESTIONS BAR (LEFT PANEL ON LG SCREENS) */}
        <div className="lg:col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-xs font-display uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-indigo-500" />
              Dúvidas Frequentes
            </h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-normal">
              Selecione qualquer uma das perguntas comuns para ver o professor IA explicar didaticamente com fórmulas e orientações do COFEN.
            </p>

            <div className="space-y-4">
              {PRESET_TOPICS.map((topic, sectionIdx) => (
                <div key={sectionIdx} className="space-y-1.5">
                  <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-widest block">
                    {topic.category}
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {topic.questions.map((q, qIdx) => (
                      <button
                        key={qIdx}
                        onClick={() => {
                          setInput(q.text);
                          handleSendMessage(q.text);
                        }}
                        disabled={isLoading}
                        className="text-left text-xs font-semibold py-1.5 px-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-650 transition-colors cursor-pointer block min-w-0 truncate"
                        title={q.text}
                      >
                        {q.short}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-200/60 text-[10px] text-slate-600 font-medium">
            <span className="font-bold text-amber-800 flex items-center gap-1 mb-1 uppercase tracking-wide">
              ⚠️ Alerta Acadêmico:
            </span>
            Este monitor usa IA para resolver cálculos e explicar conceitos para dar suporte e reforço acadêmico. Nunca tome decisões clínicas em estágios reais baseado exclusivamente em IAs; sempre valide com seu preceptor de plantão!
          </div>
        </div>

        {/* CHAT INTERACTIVE WINDOW (RIGHT PANEL) */}
        <div className="lg:col-span-8 flex flex-col h-[500px] border border-slate-150 rounded-xl overflow-hidden bg-slate-900/5">
          
          {/* Top Status Indicators inside viewport */}
          <div className="bg-white border-b border-slate-150 px-4 py-2.5 flex justify-between items-center bg-linear-to-r from-white to-slate-50">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold text-slate-500">Monitor Escolar Conectado • Gemini High-Speed</span>
            </div>
            <div className="text-[9px] bg-indigo-50 text-indigo-700 font-mono font-extrabold px-2 py-0.5 rounded uppercase">
              UFPI - CTT
            </div>
          </div>

          {/* Messages Lists with scrolling */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((m) => {
              const isAssistant = m.role === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex gap-3 max-w-[85%] ${
                    isAssistant ? 'mr-auto items-start' : 'ml-auto flex-row-reverse items-start'
                  }`}
                >
                  {/* Icon Avatar */}
                  <div
                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isAssistant
                        ? 'bg-linear-to-br from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200'
                        : 'bg-slate-800 text-white border-slate-900'
                    }`}
                  >
                    {isAssistant ? <Bot className="h-4 w-4" /> : <span className="text-xs font-extrabold font-mono">VC</span>}
                  </div>

                  {/* Bubble wrapper */}
                  <div className="flex flex-col">
                    <div
                      className={`p-3.5 rounded-2xl shadow-2xs border ${
                        isAssistant
                          ? 'bg-white text-slate-800 border-slate-100 rounded-tl-none'
                          : 'bg-indigo-600 text-white border-indigo-750 rounded-tr-none'
                      }`}
                    >
                      {isAssistant ? (
                        <div className="space-y-1">
                          {renderFormattedText(m.content)}
                        </div>
                      ) : (
                        <p className="text-xs leading-relaxed font-medium break-all whitespace-pre-wrap">{m.content}</p>
                      )}
                    </div>
                    {/* Timestamp */}
                    <span
                      className={`text-[9px] font-mono mt-1 text-slate-400 ${
                        isAssistant ? 'text-left ml-1' : 'text-right mr-1'
                      }`}
                    >
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Loading / Writing state */}
            {isLoading && (
              <div className="flex gap-3 max-w-[80%] mr-auto items-start animate-pulse">
                <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
                </div>
                <div className="flex flex-col">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 rounded-tl-none flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 font-mono">Monitor IA está resolvendo a questão...</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Connection error panel */}
            {errorText && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-mono mt-2 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  ⚠️ Erro ao requisitar Monitor IA
                </p>
                <p className="text-[10px] text-slate-500">{errorText}</p>
                <button
                  onClick={() => handleSendMessage(messages[messages.length - 1].content)}
                  className="text-[10px] text-indigo-600 font-bold underline cursor-pointer hover:text-indigo-800"
                >
                  Tentar reenviar última pergunta
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form input field container */}
          <div className="bg-white border-t border-slate-150 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Ex: Qual a fórmula de gotas por minuto de soro fisiológico em horas?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-opacity disabled:opacity-65"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer font-bold disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>Enviar</span>
                <Send className="h-3.5 w-3.5 shrink-0" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
