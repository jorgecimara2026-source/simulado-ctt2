import { Question } from '../types';

export const CALC_MORE_EXTRA_QUESTIONS: Question[] = [
  {
    id: 'calc_more_extra_1',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrito Soro Fisiológico (SF) 0,9% de 500 mL para gotejar em exatamente 10 horas contínuas. Quantas gotas por minuto (macrogotas/min) o técnico deve regular?',
    type: 'calculation',
    correctAnswer: '17',
    explanation: 'Gotas/min = Volume / (Tempo * 3)\nGotas/min = 500 / (10 * 3) = 500 / 30 = 16,66 ≈ 17 gotas/min (Arredondado).',
    source: 'Gotejamento em Horas - Slide 44',
    calculationSteps: [
      '1. Coletar dados da prescrição: Volume = 500 mL, Tempo = 10 horas',
      '2. Aplicar fórmula de macrogotas base hora: Gotas/min = Volume / (Horas * 3)',
      '3. Substituir valores: Gotas/min = 500 / (10 * 3) = 500 / 30',
      '4. Realizar divisão: 500 / 30 = 16.666...',
      '5. Arredondar para o valor inteiro mais próximo: 17 gotas/min.'
    ]
  },
  {
    id: 'calc_more_extra_2',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrito gotejamento de Soro Glicosado (SG) 5% de 1.000 mL para correr em 24 horas por gravidade. Quantas gotas por minuto (macrogotas/min) o técnico em enfermagem deve programar no bico?',
    type: 'calculation',
    correctAnswer: '14',
    explanation: 'Gotas/min = Volume / (Horas * 3)\nGotas/min = 1000 / (24 * 3) = 1000 / 72 = 13,88 ≈ 14 gotas/min.',
    source: 'Gotejamento em Horas - Slide 44',
    calculationSteps: [
      '1. Coleta das variáveis: Volume = 1000 mL, Tempo = 24 horas',
      '2. Empregar fórmula de macrogotas base hora: Gotas/min = Volume / (Horas * 3)',
      '3. Substituir valores na fórmula: Gotas/min = 1000 / (24 * 3) = 1000 / 72',
      '4. Calcular resultado preliminar: 1000 / 72 = 13,88 macrogotas/min',
      '5. Arredondar para o valor inteiro mais próximo: 14 gotas/min.'
    ]
  },
  {
    id: 'calc_more_extra_3',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Se 1 gota (macrogota) equivale a exactly 3 microgotas, quantas microgotas por minuto estão correndo se o gotejamento indicar 15 macrogotas/min na câmara?',
    type: 'calculation',
    correctAnswer: '45',
    explanation: 'Temos a correlação física direta: 1 gota/minuto = 3 microgotas/minutos.\nMultiplicamos linearmente:\n15 macrogotas/min * 3 = 45 microgotas/min.',
    source: 'Unidades de Gotejamento - Slide 6',
    calculationSteps: [
      '1. Multiplicação simples: 15 macrogotas * 3 microgotas/macrogota = 45 microgotas/min.'
    ]
  },
  {
    id: 'calc_more_extra_4',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Prescrição pediátrica: Penicilina G Potássica de 2.000.000 UI por via intravenosa de 4/4h. No posto, dispõe-se de frascos-ampolas de Penicilina de 10.000.000 UI cuja dose de pó seco ocupa 4 mL de volume interno. Se o técnico diluir o pó injetando exatamente 6 mL de Água Destilada estéril (totalizando volume final de 10 mL), quantos mL ele deve aspirar?',
    type: 'calculation',
    correctAnswer: '2',
    explanation: 'Montamos a regra de três considerando o volume total pós reconstituição de 10 mL:\n10.000.000 UI -------- 10 mL\n2.000.000 UI -------- x mL\n10.000.000x = 20.000.000\nx = 20.000.000 / 10.000.000 = 2 mL.',
    source: 'Cálculos de Penicilina - Slide 26',
    calculationSteps: [
      '1. Compreender o volume total: pó ocupa 4 mL + 6 mL diluente = 10 mL',
      '2. Estruturar regra de três: 10.000.000 UI -> 10 mL; 2.000.000 UI -> x mL',
      '3. Cruzar produtos na diagonal: 10.000.000 * x = 2.000.000 * 10 = 20.000.000',
      '4. Resolver divisão final: x = 20.000.000 / 10.000.000 = 2 mL.'
    ]
  },
  {
    id: 'calc_more_extra_5',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrito Soro Glicosado (SG) a 15% contendo volume de 500 mL. Estão disponíveis na unidade bolsas de SG 5% de 500 mL e ampolas de Glicose hipertônica de 50% com volume de 20 mL. Quantas ampolas de glicose 50% de 20 mL o técnico deve acrescentar ao soro?',
    type: 'calculation',
    correctAnswer: '5.5', // equivalent to exactly 11 ampolas of 10 mL (or 5.5 ampolas of 20 mL, which is 5 ampolas and a half)
    explanation: '1. Calcular glicose requerida no SG 15% em 500 mL: 15g em 100mL -> 75g de glicose pura.\n2. Calcular glicose exada no SG 5% em 500 mL: 5g em 100mL -> 25g de glicose pura.\n3. Diferença de soluto a acrescentar no soro: 75g - 25g = 50g.\n4. Gramas de glicose por ampola (50% em 20 mL): 10g de glicose pura por ampola.\n5. Número de ampolas necessárias: 50g / 10g por ampola = 5,0 ampolas para acrescentar, ou 5 ampolas caso desconsideremos o volume, ou mais precisamente se for 15% (75g total e 11 ampolas de 10 ml que seria 5.5 ampolas).',
    source: 'Transformação de Soro - Slide 39 e 40',
    calculationSteps: [
      '1. Massa ideal no SG 15% em 500 mL: 15 g * 5 = 75 g',
      '2. Massa instalada no SG 5% em 500 mL: 5 g * 5 = 25 g',
      '3. Déficit de massa a adicionar: 75 g - 25 g = 50 g',
      '4. Teor de soluto por ampola (50% em 20 mL): (50g / 100mL) * 20 mL = 10 g de glicose pura por ampola',
      '5. Calcular ampolas requisitadas: 50 g / 10 g por ampola = 5 ampolas (ou 5 ampolas completas).'
    ]
  },
  {
    id: 'calc_more_extra_6',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição: Decadron 2 mg por via intravenosa de 12/12h. No posto de enfermagem estão disponíveis ampolas contendo concentração de 4 mg em volume final de 2,5 mL (4 mg/2,5 mL). Quantos mL o técnico em enfermagem deve aspirar?',
    type: 'calculation',
    correctAnswer: '1.25',
    explanation: 'Regra de três simples:\n4 mg -------- 2,5 mL\n2 mg -------- x mL\n4x = 2 * 2,5\n4x = 5\nx = 5 / 4 = 1,25 mL.',
    source: 'Diluição Injetáveis - Gabarito Exercício 14',
    calculationSteps: [
      '1. Coleta do disponível: 4 mg de substância contidas em 2,5 mL',
      '2. Estruturar regra de três: 4 mg -> 2,5 mL; 2 mg -> x mL',
      '3. Resolver multiplicação cruzada: 4 * x = 2 * 2,5 = 5',
      '4. Resultados: x = 5 / 4 = 1,25 mL.'
    ]
  },
  {
    id: 'calc_more_extra_7',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'O médico prescreveu Soro Glicosado (SG) 5% de 240 mL para gotejar em exatamente 4 horas. Quantas microgotas por minuto (microgotas/min) devem correr no microgotejador?',
    type: 'calculation',
    correctAnswer: '60',
    explanation: 'Microgotas/min = Volume em mL / Horas.\nMicrogotas/min = 240 / 4 = 60 microgotas/min.',
    source: 'Gotejamento de Microgotas - Slide 45',
    calculationSteps: [
      '1. Variáveis: Volume = 240 mL, Tempo = 4 horas',
      '2. Aplicar fórmula de microgotas base hora: Microgotas/min = Volume / Horas',
      '3. Calcular resultado: 240 / 4 = 60 microgotas/min.'
    ]
  },
  {
    id: 'calc_more_extra_8',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrito gotejo de SF 0,9% de 100 mL para durar exatamente 120 minutos (2 horas) em via intravenosa rápida. Quantas gotas por minuto (macrogotas/min) o técnico em enfermagem deve programar?',
    type: 'calculation',
    correctAnswer: '17',
    explanation: 'Converter tempo para horas: 120 minutos = 2 horas.\nGotas/min = Volume / (Horas * 3)\nGotas/min = 100 / (2 * 3) = 100 / 6 = 16,66 ≈ 17 gotas/min.',
    source: 'Gotejamento em Horas - Slide 44',
    calculationSteps: [
      '1. Unificar unidade de tempo: 120 minutos = 2 horas',
      '2. Escolha da fórmula de macrogotas base hora: Gotas/min = Volume / (Horas * 3)',
      '3. Substituir valores na fórmula: Gotas/min = 100 / (2 * 3) = 100 / 6',
      '4. Calcular resultado preliminar: 100 / 6 = 16,66 macrogotas/min',
      '5. Arredondar para o valor inteiro mais próximo: 17 gotas/min.'
    ]
  },
  {
    id: 'calc_more_extra_9',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrito para um paciente febril em regime do leito a dose decimal de 125 mg de Dipirona diluída. Dispomos no posto de ampolas de dipirona de 1,0 g em volume de 2 mL líquidas. Se o técnico diluir a medicação injetando exatos 8 mL de Água Destilada estéril (totalizando volume final de 10 mL), quantos mL devem ser aspirados estéreis para aplicar a dose exata?',
    type: 'calculation',
    correctAnswer: '1.25',
    explanation: 'Primeiro convertemos 1,0 g = 1000 mg.\nVolume final totalizando 10 mL pós diluente.\nMontamos a proporção:\n1000 mg -------- 10 mL\n125 mg -------- x mL\n1000x = 125 * 10 = 1250\nx = 1250 / 1000 = 1,25 mL.',
    source: 'Diluições de Medicamentos Injetáveis - Slide 11',
    calculationSteps: [
      '1. Conversão de unidade de massa: 1 g = 1000 mg',
      '2. Obter volume final total: 2 mL ampolas + 8 mL solvente = 10 mL',
      '3. Estruturar regra de três: 1000 mg -> 10 mL; 125 mg -> x mL',
      '4. Resolver multiplicação cruzada: 1000 * x = 125 * 10 = 1250',
      '5. Isolar incógnita: x = 1250 / 1000 = 1.25 mL.'
    ]
  },
  {
    id: 'calc_more_extra_10',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Se 1 gota (macrogota) corresponde a 3 microgotas, quantas gotas por minuto estão correndo se o microgotejamento acusar regulados 75 microgotas/min na bomba?',
    type: 'calculation',
    correctAnswer: '25',
    explanation: 'Temos o caminho reverso de conversão: Macrogotas = Microgotas / 3.\nDividimos as microgotas por 3:\n75 microgotas / 3 = 25 macrogotas/min.',
    source: 'Unidades de Gotejamento - Slide 6',
    calculationSteps: [
      '1. Divisão simples: 75 microgotas / 3 microgotas por macrogota = 25 gotas/min.'
    ]
  }
];
