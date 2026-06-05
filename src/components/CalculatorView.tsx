import React, { useState } from 'react';
import { Calculator, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function CalculatorView() {
  const [activeTab, setActiveTab] = useState<'dripping' | 'penicillin' | 'rule3'>('dripping');

  // dripping calculator states
  const [volume, setVolume] = useState<string>('500');
  const [time, setTime] = useState<string>('8');
  const [timeUnit, setTimeUnit] = useState<'hours' | 'minutes'>('hours');

  // penicillin calculator states
  const [vialSize, setVialSize] = useState<'5m' | '10m'>('10m');
  const [neededUI, setNeededUI] = useState<string>('4800000');

  // Rule of 3 states
  const [availableQty, setAvailableQty] = useState<string>('40'); // e.g. 40 mg
  const [availableVol, setAvailableVol] = useState<string>('4'); // e.g. 4 mL
  const [prescribedQty, setPrescribedQty] = useState<string>('20');

  const handleResetDripping = () => {
    setVolume('500');
    setTime('8');
    setTimeUnit('hours');
  };

  const handleResetPenicillin = () => {
    setVialSize('10m');
    setNeededUI('4800000');
  };

  const handleResetRule3 = () => {
    setAvailableQty('40');
    setAvailableVol('4');
    setPrescribedQty('20');
  };

  // Calculations
  const calculateDripping = () => {
    const v = parseFloat(volume);
    const t = parseFloat(time);
    if (isNaN(v) || isNaN(t) || v <= 0 || t <= 0) return null;

    let macrogotas = 0;
    let microgotas = 0;
    let steps: string[] = [];

    if (timeUnit === 'hours') {
      macrogotas = v / (t * 3);
      microgotas = v / t;
      steps.push(`Fórmula Gotas/min = Volume / (Tempo em Horas * 3)`);
      steps.push(`Gotas/min = ${v} / (${t} * 3) = ${v} / ${t * 3} = ${macrogotas.toFixed(2)}`);
      steps.push(`Fórmula Microgotas/min = Volume / Tempo em Horas`);
      steps.push(`Microgotas/min = ${v} / ${t} = ${microgotas.toFixed(2)}`);
    } else {
      macrogotas = (v * 20) / t;
      microgotas = (v * 60) / t;
      steps.push(`Fórmula Gotas/min (em Minutos) = (Volume * 20) / Tempo em Minutos`);
      steps.push(`Gotas/min = (${v} * 20) / ${t} = ${v * 20} / ${t} = ${macrogotas.toFixed(2)}`);
      steps.push(`Fórmula Microgotas/min (em Minutos) = (Volume * 60) / Tempo em Minutos`);
      steps.push(`Microgotas/min = (${v} * 60) / ${t} = ${v * 60} / ${t} = ${microgotas.toFixed(2)}`);
    }

    return {
      gotas: Math.round(macrogotas),
      micro: Math.round(microgotas),
      rawGotas: macrogotas.toFixed(1),
      rawMicro: microgotas.toFixed(1),
      steps
    };
  };

  const calculatePenicillin = () => {
    const ui = parseFloat(neededUI);
    if (isNaN(ui) || ui <= 0) return null;

    const totalVialUI = vialSize === '5m' ? 5000000 : 10000000;
    const recommendedDiluent = vialSize === '5m' ? '8 mL (total de 10 mL reconstituído após se somar os 2 mL de cristais insolúveis de pó)' : '6 mL (total de 10 mL reconstituído após se somar os 4 mL de cristais insolúveis de pó)';
    
    // In both cases, the final volume is 10 mL
    const resultVolume = (ui * 10) / totalVialUI;
    const steps = [
      `1. Identificar volume final: Todo frasco reconstituído totaliza 10 mL (Pó + Diluente adicionado).`,
      `2. No frasco de ${vialSize === '5m' ? '5.000.000' : '10.000.000'} UI, temos representação em 10 mL.`,
      `3. Montar a regra de três simples:`,
      `   ${totalVialUI.toLocaleString()} UI -------- 10 mL`,
      `   ${ui.toLocaleString()} UI -------- x mL`,
      `4. Multiplicação cruzada: x = (${ui.toLocaleString()} * 10) / ${totalVialUI.toLocaleString()}`,
      `5. Resultado: ${resultVolume.toFixed(2)} mL.`
    ];

    return {
      diluent: recommendedDiluent,
      result: resultVolume.toFixed(2),
      steps
    };
  };

  const calculateRule3 = () => {
    const qty = parseFloat(availableQty);
    const vol = parseFloat(availableVol);
    const pres = parseFloat(prescribedQty);

    if (isNaN(qty) || isNaN(vol) || isNaN(pres) || qty <= 0 || vol <= 0 || pres <= 0) return null;

    const result = (pres * vol) / qty;
    const steps = [
      `1. Identificar o que está disponível (Primeira Linha): ${qty} mg (ou g) estão contidos em ${vol} mL.`,
      `2. Identificar o que foi prescrito (Segunda Linha): O paciente precisa de ${pres} mg (ou g).`,
      `3. Montar a proporção:`,
      `   ${qty} mg -------- ${vol} mL`,
      `   ${pres} mg -------- x mL`,
      `4. Multiplicar cruzado: ${qty} * x = ${pres} * ${vol}`,
      `   x = (${pres} * ${vol}) / ${qty}`,
      `5. Resultado: x = ${result.toFixed(2)} mL.`
    ];

    return {
      result: result.toFixed(2),
      steps
    };
  };

  const drippingRes = calculateDripping();
  const penicillinRes = calculatePenicillin();
  const rule3Res = calculateRule3();

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-100 p-6 md:p-8" id="calculator-view">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
            Sistematização e Prática
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-800 mt-2 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-indigo-600" />
            Calculadora de Gotejamento e Dosagem
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Pratique resoluções matemáticas de medicamentos de acordo com as diretrizes do Colégio Técnico de Teresina (CTT).
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 mb-6 overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('dripping')}
          className={`px-4 py-2.5 font-bold text-sm rounded-t-lg border-b-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
            activeTab === 'dripping'
              ? 'border-indigo-600 text-indigo-700 font-bold bg-indigo-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
          }`}
        >
          Gotejamento de Soro
        </button>
        <button
          onClick={() => setActiveTab('penicillin')}
          className={`px-4 py-2.5 font-bold text-sm rounded-t-lg border-b-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
            activeTab === 'penicillin'
              ? 'border-indigo-600 text-indigo-700 font-bold bg-indigo-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
          }`}
        >
          Penicilina Cristalina
        </button>
        <button
          onClick={() => setActiveTab('rule3')}
          className={`px-4 py-2.5 font-bold text-sm rounded-t-lg border-b-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
            activeTab === 'rule3'
              ? 'border-indigo-600 text-indigo-700 font-bold bg-indigo-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
          }`}
        >
          Regra de 3 (Comprimido / Ampola)
        </button>
      </div>

      {/* Dripping tab */}
      {activeTab === 'dripping' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/60">
            <h3 className="font-bold text-slate-800 mb-4 text-sm font-display uppercase tracking-wider flex items-center justify-between">
              <span>Parâmetros de Entrada</span>
              <button onClick={handleResetDripping} className="text-xs text-indigo-650 hover:underline flex items-center gap-1 font-mono font-bold cursor-pointer">
                <RotateCcw className="h-3 w-3" /> Limpar
              </button>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Volume de Soro (mL)
                </label>
                <input
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="Ex: 500 ou 1000"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Tempo de Infusão
                </label>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Ex: 8 ou 2.5"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Unidade de Tempo
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTimeUnit('hours')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      timeUnit === 'hours'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/10'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Horas
                  </button>
                  <button
                    onClick={() => setTimeUnit('minutes')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      timeUnit === 'minutes'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/10'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Minutos
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 text-xs text-slate-600 font-semibold">
              <p className="font-bold text-amber-800 mb-1 flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" /> Dica Rápida do CTT:
              </p>
              Em 24 horas (Tempo = 24h):
              <ul className="list-disc pl-4 mt-1 space-y-0.5 font-mono text-xs">
                <li>500 mL = 7 gotas/min</li>
                <li>1000 mL = 14 gotas/min</li>
                <li>1500 mL = 21 gotas/min</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            {drippingRes ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    Gotejamento Calculado
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50/40 p-5 rounded-xl border border-indigo-100 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-extrabold font-display text-indigo-600">
                        {drippingRes.gotas}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider font-mono">
                        Gotas/min (Macrogotas)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                        Exato: {drippingRes.rawGotas} gts/min
                      </span>
                    </div>

                    <div className="bg-emerald-50/40 p-5 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-extrabold font-display text-emerald-600">
                        {drippingRes.micro}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider font-mono">
                        Microgotas/min
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                        Exato: {drippingRes.rawMicro} mcgts/min
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                    Passo a Passo da Resolução:
                  </h4>
                  <div className="space-y-2 text-sm text-slate-600 font-mono bg-white p-4 rounded-lg border border-slate-200">
                    {drippingRes.steps.map((step, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                <HelpCircle className="h-10 w-10 stroke-1 mb-2" />
                <p className="text-sm">Insira valores válidos ao lado para resolver.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Penicillin tab */}
      {activeTab === 'penicillin' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/60">
            <h3 className="font-bold text-slate-800 mb-4 text-sm font-display uppercase tracking-wider flex items-center justify-between">
              <span>Parâmetros de Entrada</span>
              <button onClick={handleResetPenicillin} className="text-xs text-indigo-650 hover:underline flex items-center gap-1 font-mono font-bold cursor-pointer">
                <RotateCcw className="h-3 w-3" /> Limpar
              </button>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Frasco-Ampola Disponível
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setVialSize('5m')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      vialSize === '5m'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    5.000.000 UI
                  </button>
                  <button
                    onClick={() => setVialSize('10m')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      vialSize === '10m'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    10.000.000 UI
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Dose Prescrita (UI)
                </label>
                <input
                  type="number"
                  value={neededUI}
                  onChange={(e) => setNeededUI(e.target.value)}
                  placeholder="Ex: 4800000 ou 2000000"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 text-xs text-slate-600 font-semibold">
              <p className="font-bold text-amber-800 mb-1 flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" /> Teoria das Penicilinas:
              </p>
              Os cristais de pó da Penicilina Cristalina ocupam volume real dentro do frasco:
              <ul className="list-disc pl-4 mt-1 space-y-1 font-mono text-xs">
                <li>Vial de 5.000.000 UI: O pó ocupa 2 mL. Dilui-se em 8 mL de AD (Total 10 mL).</li>
                <li>Vial de 10.000.000 UI: O pó ocupa 4 mL. Dilui-se em 6 mL de AD (Total 10 mL).</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            {penicillinRes ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    Volume a Aspirar Reconstituído
                  </h4>
                  <div className="bg-indigo-50/40 p-5 rounded-xl border border-indigo-100 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-extrabold font-display text-indigo-650 flex items-center gap-2">
                      {penicillinRes.result} <span className="text-lg">mL</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
                      Aspirar da solução final homogênea
                    </span>
                    <span className="text-xs text-slate-400 mt-2 font-mono max-w-md">
                      Diluente sugerido pelo CTT: {penicillinRes.diluent}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                    Passo a Passo da Resolução:
                  </h4>
                  <div className="space-y-2 text-sm text-slate-600 font-mono bg-white p-4 rounded-lg border border-slate-200">
                    {penicillinRes.steps.map((step, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                <HelpCircle className="h-10 w-10 stroke-1 mb-2" />
                <p className="text-sm">Insira valores válidos ao lado para resolver.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rule of 3 Tab */}
      {activeTab === 'rule3' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/60">
            <h3 className="font-bold text-slate-800 mb-4 text-sm font-display uppercase tracking-wider flex items-center justify-between">
              <span>Parâmetros de Entrada</span>
              <button onClick={handleResetRule3} className="text-xs text-indigo-650 hover:underline flex items-center gap-1 font-mono font-bold cursor-pointer">
                <RotateCcw className="h-3 w-3" /> Limpar
              </button>
            </h3>

            <div className="space-y-4">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-2">
                  Concentração que eu "TENHO" (Disponível)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-500 font-mono">Dose pura (mg, g ou UI)</label>
                    <input
                      type="number"
                      value={availableQty}
                      onChange={(e) => setAvailableQty(e.target.value)}
                      className="w-full px-2.5 py-1 text-sm border border-slate-200 rounded-md focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500 font-mono">Volume (mL ou comp.)</label>
                    <input
                      type="number"
                      value={availableVol}
                      onChange={(e) => setAvailableVol(e.target.value)}
                      className="w-full px-2.5 py-1 text-sm border border-slate-200 rounded-md focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase font-mono">
                  Dose que eu "QUERO" (Prescrita)
                </label>
                <input
                  type="number"
                  value={prescribedQty}
                  onChange={(e) => setPrescribedQty(e.target.value)}
                  placeholder="Ex: 20"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 text-xs text-slate-600 font-semibold">
              <p className="font-bold text-amber-800 mb-1 flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" /> Lembrete CTT:
              </p>
              Sempre alinhe grandezas idênticas na mesma coluna (mg embaixo de mg, mL embaixo de mL). Caso as unidades estejam trocadas (Ex: g e mg) converta primeiro!
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            {rule3Res ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    Quantidade a Administrar
                  </h4>
                  <div className="bg-indigo-50/40 p-5 rounded-xl border border-indigo-100 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-extrabold font-display text-indigo-650 flex items-center gap-2">
                      {rule3Res.result} <span className="text-lg">mL (ou comp.)</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
                      Volume ideal calculado
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                    Passo a Passo da Resolução:
                  </h4>
                  <div className="space-y-2 text-sm text-slate-600 font-mono bg-white p-4 rounded-lg border border-slate-200">
                    {rule3Res.steps.map((step, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                <HelpCircle className="h-10 w-10 stroke-1 mb-2" />
                <p className="text-sm">Insira valores válidos ao lado para resolver.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
