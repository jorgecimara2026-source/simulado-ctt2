import { Question } from '../types';

export const CALC_MORE_QUESTIONS: Question[] = [
  {
    id: 'calc_more_1',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrita a infusão de 500 mL de Soro Fisiológico (SF) 0,9% para correr em exatamente 4 horas por gravidade. Quantas gotas por minuto (macrogotas/min) o técnico em enfermagem deve programar no gotejador corporal?',
    type: 'calculation',
    correctAnswer: '42',
    explanation: 'Gotas/min = Volume / (Tempo * 3)\nGotas/min = 500 / (4 * 3) = 500 / 12 = 41,66 ≈ 42 gotas/min.',
    source: 'Gotejamento em Horas - Slide 44',
    calculationSteps: [
      '1. Coleta de variáveis: Volume = 500 mL, Tempo = 4 horas',
      '2. Empregar fórmula de macrogotas base hora: Gotas/min = Volume / (Horas * 3)',
      '3. Substituir valores na fórmula: Gotas/min = 500 / (4 * 3) = 500 / 12',
      '4. Dividir valores correspondentes: 500 / 12 = 41,66 gotas/min',
      '5. Arredondar para o valor inteiro mais próximo: 42 gotas/min.'
    ]
  },
  {
    id: 'calc_more_2',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'Para gotejamento na bomba de infusão contínua ou microgotejador de cabeceira, foi prescrito 100 mL de Soro Glicosado (SG) 5% para correr em 1 hora. Quantas microgotas por minuto (microgotas/min) devem ser reguladas?',
    type: 'calculation',
    correctAnswer: '100',
    explanation: 'Nas fórmulas de microgotas em horas, Microgotas/min = Volume / Horas.\nMicrogotas/min = 100 / 1 = 100 microgotas/min.\nLembre que o valor numérico em microgotas/min equivale exatamente ao valor em mL/hora.',
    source: 'Gotejamento de Microgotas - Slide 45',
    calculationSteps: [
      '1. Obter variáveis de cabeceira: Volume = 100 mL, Tempo = 1 hora',
      '2. Empregar fórmula de microgotas por hora: Microgotas/min = Volume / Horas',
      '3. Calcular resultado: 100 / 1 = 100 microgotas/min.'
    ]
  },
  {
    id: 'calc_more_3',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'O médico prescreveu Soro Glicosado (SG) concentrado a 10% contendo volume de 500 mL. No posto, o técnico dispõe apenas de bolsas de Soro Glicosado (SG) de 5% de 500 mL e ampolas de Glicose hipertônica a 50% contendo volume de 20 mL de volume. Quantas ampolas de Glicose 50% de 20 mL o técnico deve adicionar ao soro?',
    type: 'calculation',
    correctAnswer: '2.5',
    explanation: '1. Calcular glicose requerida (10%): 10g em 100mL -> 50g em 500mL.\n2. Calcular glicose disponível (5%): 5g em 100mL -> 25g em 500mL.\n3. Diferença de massa a adicionar: 50g - 25g = 25g.\n4. Encontrar gramas em cada ampola (50% de 20 mL): 50g em 100mL -> 10g em 20mL => 10 g de glicose pura por ampola.\n5. Número de ampolas necessárias: 25g necessárias / 10g por ampola = 2,5 ampolas (o que equivale a injetar exactly 50 mL de glicose).',
    source: 'Transformação de Soro - Slides 39 e 40',
    calculationSteps: [
      '1. Glicose pura requerida no SG 10% (500 mL): 10 g * 5 = 50 g',
      '2. Glicose pura existente no SG 5% (500 mL): 5 g * 5 = 25 g',
      '3. Encontrar massa adicional necessária: 50 g - 25 g = 25 g',
      '4. Gramas de glicose pura por ampola (50% em 20 mL): (50g / 100mL) * 20 mL = 10 g por ampola',
      '5. Calcular ampolas: 25 g / 10 g por ampola = 2,5 ampolas.'
    ]
  },
  {
    id: 'calc_more_4',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrita a dose de 1.500.000 UI de Penicilina Cristalina intravenosa de 6/6h. A farmácia satélite disponibiliza frasco-ampola de Penicilina de 5.000.000 UI compostos de cristais que ocupam 2 mL de volume interno. Se o técnico diluir o frasco injetando exatos 8 mL de Água Destilada estéril (totalizando 10 mL), quantos mL de solução devem ser aspirados para obter a dose exata?',
    type: 'calculation',
    correctAnswer: '3',
    explanation: 'Montamos a regra de três simples considerando o volume total pós reconstituição de 10 mL:\n5.000.000 UI -------- 10 mL\n1.500.000 UI -------- x mL\n5.000.000x = 15.000.000\nx = 15.000.000 / 5.000.000 = 3 mL.',
    source: 'Diluição de Penicilina - Slide 26',
    calculationSteps: [
      '1. Volume total obtido: pó seco ocupa 2 mL + 8 mL diluente = 10 mL',
      '2. Estruturar regra de três: 5.000.000 UI -> 10 mL; 1.500.000 UI -> x mL',
      '3. Multiplicar cruzado nas diagonais: 5.000.000 * x = 1.500.000 * 10 = 15.000.000',
      '4. Resolver divisão final: x = 15.000.000 / 5.000.000 = 3 mL.'
    ]
  },
  {
    id: 'calc_more_5',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'Para fins de cálculo e enfermagem, quantas microgotas equivalem exatamente a 1 gota convencional no bico de borbulho do equipo?',
    type: 'calculation',
    correctAnswer: '3',
    explanation: 'Equivalência fundamental estabelecida no gotejador da enfermagem hospitalar (Slide 6): 1 gota de líquido equivale comercialmente a exatamente 3 microgotas.',
    source: 'Unidades de Volume - Slide 6',
    calculationSteps: [
      '1. Relembrar equivalência volumétrica estática: 1 macrogota (gota) = 3 microgotas.'
    ]
  },
  {
    id: 'calc_more_6',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição médica: Soro Glicosado (SG) 5% de 1.000 mL para infundir de forma contínua em exatas 12 horas. Quantas gotas por minuto (macrogotas/min) o profissional deve regular no bico?',
    type: 'calculation',
    correctAnswer: '28',
    explanation: 'Gotas/min = Volume / (Horas * 3)\nGotas/min = 1000 / (12 * 3) = 1000 / 36 = 27,77 ≈ 28 gotas/min (Arredondamento padrão).',
    source: 'Gotejamento em Horas - Slide 44',
    calculationSteps: [
      '1. Obter variáveis: Volume = 1000 mL, Tempo = 12 horas',
      '2. Empregar fórmula de macrogotas base hora: Gotas/min = Volume / (Horas * 3)',
      '3. Substituir valores na fórmula: Gotas/min = 1000 / (12 * 3) = 1000 / 36',
      '4. Calcular resultado: 1000 / 36 = 27,77 gotas/min',
      '5. Arredondar para o valor inteiro mais próximo: 28 gotas/min.'
    ]
  },
  {
    id: 'calc_more_7',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição: Garamicina 60 mg intramuscular profunda. Na unidade estão disponíveis ampolas contendo concentração de 80 mg em volume final de 2 mL (80 mg/2 mL). Quantos mL o técnico de enfermagem deve aspirar?',
    type: 'calculation',
    correctAnswer: '1.5',
    explanation: 'Montamos a proporção linear simples do disponível de fábrica:\n80 mg -------- 2 mL\n60 mg -------- x mL\n80x = 60 * 2\n80x = 120\nx = 120 / 80 = 1,5 mL.',
    source: 'Diluição Básica - Gabarito Exercício 5',
    calculationSteps: [
      '1. Coleta do disponível: 80 mg de fármaco contidos em 2 mL',
      '2. Estruturar regra de três: 80 mg -> 2 mL; 60 mg -> x mL',
      '3. Cruzar produtos nas diagonais: 80 * x = 60 * 2 = 120',
      '4. Resolver divisão final: x = 120 / 80 = 1,5 mL.'
    ]
  },
  {
    id: 'calc_more_8',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrita a infusão rápida de 100 mL de Soro Glicosado (SG) 5% para correr intravenoso em exatos 20 minutos (tempo menor que 1 hora). Quantas gotas por minuto (gotas/min) o profissional deve programar?',
    type: 'calculation',
    correctAnswer: '100',
    explanation: 'Para tempo menor de uma hora expressos em minutos (Slide 42), empregamos a fórmula em minutos:\nGotas/min = (Volume em mL * 20) / Tempo em minutos\nGotas/min = (100 * 20) / 20 = 2000 / 20 = 100 gotas/min.',
    source: 'Gotejamento em Minutos - Slide 42',
    calculationSteps: [
      '1. Escolha da fórmula correta para minutos: Gotas/min = (Volume * 20) / Tempo (min)',
      '2. Variáveis: Volume = 100 mL, Tempo = 20 minutos',
      '3. Substituir valores: Gotas/min = (100 * 20) / 20 = 2000 / 20',
      '4. Calcular resultado: 2000 / 20 = 100 gotas/min.'
    ]
  },
  {
    id: 'calc_more_9',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição pediátrica de Dipirona gotas orais de 150 mg via sonda gástrica de dreno. Sabendo que o frasco do fabricante possui 500 mg de dipirona em cada 1 mL (contendo exatamente 20 gotas/mL), quantas gotas o técnico de enfermagem deve gotejar?',
    type: 'calculation',
    correctAnswer: '6',
    explanation: 'Primeiro determinamos quantos mg há em cada gota:\nFrasco tem 500 mg em 1 mL (20 gotas) => Cada gota possui 500 / 20 = 25 mg de dipirona pura.\nSe precisamos de 150 mg:\n1 gota -------- 25 mg\nx gotas -------- 150 mg\n25x = 150 => x = 150 / 25 = 6 gotas.',
    source: 'Cálculo de Gotas Clínicas - Slide 11 e Gabarito Exercício 17',
    calculationSteps: [
      '1. Coleta do disponível: 500 mg está em 1 mL (20 gotas)',
      '2. Determinar concentração por gota: 500 mg / 20 gotas = 25 mg por gota',
      '3. Formular regra de três simples: 1 gota -> 25 mg; x gotas -> 150 mg',
      '4. Resolver divisão final: x = 150 / 25 = 6 gotas.'
    ]
  },
  {
    id: 'calc_more_10',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'O médico prescreveu Soro Glicosado (SG) concentrado a 12% contendo volume de 500 mL. No posto, o técnico dispõe apenas de bolsas de Soro Glicosado (SG) 5% de 500 mL e ampolas de Glicose hipertônica a 50% contendo volume de 10 mL. Quantas ampolas de Glicose 50% de 10 mL de volume o técnico deve aspirar?',
    type: 'calculation',
    correctAnswer: '7.8', // Or rounded 8 ampolas in practical clinics (7.77 ampolas)
    explanation: '1. Glicose requerida no SG 12% em 500 mL: 12g em 100mL -> 60g de glicose pura.\n2. Glicose existente no SG 5% de 500 mL: 5g em 100mL -> 25g de glicose pura.\n3. Diferença de massa a adicionar: 60g - 25g = 35g de glicose.\n4. Glicose em cada ampola (50% de 10 mL): 50g em 100mL -> 5g de glicose pura por ampola.\n5. Número de ampolas necessárias: 35g / 5g por ampola = 7 ampolas completas e mais 0,8 da oitava (7,77 ampolas ou ≈ 7.8 ampolas).',
    source: 'Transformação de Soro - Slide 39 e 40',
    calculationSteps: [
      '1. Glicose pura necessária no SG 12% (500 mL): 12 g * 5 = 60 g',
      '2. Glicose pura na bolsa de SG 5% (500 mL): 5 g * 5 = 25 g',
      '3. Diferença de soluto a adicionar: 60 g - 25 g = 35 g',
      '4. Gramas de glicose pura por ampola (50% de 10 mL): 5 g',
      '5. Dividir déficit pelo conteúdo da ampola: 35 g / 5 g = 7 ampolas completas (8 ampolas arrendondado no cálculo, ou exatos 7,77 ampolas, aceitando-se 7.8 ampolas).'
    ]
  },
  {
    id: 'calc_more_11',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrito uma infusão parenteral contínua de 100 mL de antibiótico para correr em exatos 30 minutos (tempo menor de uma hora). Quantas microgotas por minuto (microgotas/min) devem ser reguladas?',
    type: 'calculation',
    correctAnswer: '200',
    explanation: 'Como o tempo é em minutos (T = 30 min) e quer-se em microgotas/min, aplicamos a fórmula:\nMicrogotas/min = (Volume em mL * 60) / Tempo em minutos\nMicrogotas/min = (100 * 60) / 30 = 6000 / 30 = 200 microgotas/min.',
    source: 'Cálculo de Gotejamento em Minutos - Slide 48',
    calculationSteps: [
      '1. Escolha da fórmula de microgotas em minutos: Microgotas/min = (Volume * 60) / Tempo (min)',
      '2. Coleta de variáveis: Volume = 100 mL, Tempo = 30 minutos',
      '3. Substituir valores: Microgotas/min = (100 * 60) / 30 = 6000 / 30',
      '4. Calcular resultado: 200 microgotas/min.'
    ]
  },
  {
    id: 'calc_more_12',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'O médico prescreveu 200 mg de Cefalotina por via intravenosa direta de 8/8h. No hospital estão disponíveis frasco-ampola de Cefalotina de 1 g (pó liofilizado). Se o técnico diluir o frasco injetando exatos 10 mL de solvente (Água Destilada totalizando 10 mL), quantos mL de solução ele deve aspirar?',
    type: 'calculation',
    correctAnswer: '2',
    explanation: 'Conversão unitária básica de massa: 1 g = 1000 mg.\nRegra de três simples:\n1000 mg -------- 10 mL\n200 mg -------- x mL\n1000x = 200 * 10 = 2000\nx = 2000 / 1000 = 2 mL.',
    source: 'Diluição de Pó Liofilizado - Slide 18 e Gabarito Exercício 11',
    calculationSteps: [
      '1. Conversão de unidade: 1 g = 1000 mg',
      '2. Estruturar regra de três: 1000 mg -> 10 mL; 200 mg -> x mL',
      '3. Cruzar produtos nas diagonais: 1000 * x = 200 * 10 = 2000',
      '4. Resolver divisão final: x = 2000 / 1000 = 2 mL.'
    ]
  },
  {
    id: 'calc_more_13',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrito Soro Glicosado (SG) 5% de 500 mL para gotejar em regime de infusão de microgotas com andamento em 6 horas. Quantas microgotas por minuto (microgotas/min) devem gotejar na bomba?',
    type: 'calculation',
    correctAnswer: '83',
    explanation: 'Fórmula direta base hora de microgotas: Microgotas/min = Volume em mL / Horas.\nMicrogotas/min = 500 / 6 = 83,33 ≈ 83 microgotas/min.',
    source: 'Gotejamento de Microgotas - Slide 45',
    calculationSteps: [
      '1. Obter variáveis: Volume = 500 mL, Tempo = 6 horas',
      '2. Empregar fórmula de microgotas base hora: Microgotas/min = Volume / Horas',
      '3. Calcular resultado: 500 / 6 = 83,33 microgotas/min',
      '4. Arredondar para o valor inteiro mais próximo: 83 microgotas/min.'
    ]
  },
  {
    id: 'calc_more_14',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Prescrição: Insulina NPH profilática subcutânea de 16 UI beira leito. Na enfermaria estão disponíveis frascos de Insulina NPH de 100 UI/mL, e apenas seringas descartáveis volumétricas de 3 mL comuns. Quantos mL o técnico de enfermagem deve aspirar na seringa?',
    type: 'calculation',
    correctAnswer: '0.16',
    explanation: 'Relação linear estática para seringas comuns graduadas sem subdivisão em Unidades de Insulina:\n100 UI -------- 1 mL\n16 UI -------- x mL\n100x = 16 => x = 16 / 100 = 0,16 mL.',
    source: 'Seringas Comuns em Insulina - Slide 34',
    calculationSteps: [
      '1. Relembrar correlação básica: 100 UI de insulina equivalem a 1 mL líquido de ampola',
      '2. Formular regra de três simples: 100 UI -> 1 mL; 16 UI -> x mL',
      '3. Resolver multiplicação cruzada: 100 * x = 16',
      '4. Isolar a incógnita: x = 16 / 100 = 0,16 mL.'
    ]
  },
  {
    id: 'calc_more_15',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'No gotejador da enfermaria hospitalar, o gotejamento programado de 30 gotas por minuto (macrogotas/min) equivale a quantas microgotas por minuto (microgotas/min) nos bicos microgotadores?',
    type: 'calculation',
    correctAnswer: '90',
    explanation: 'Como 1 gota equivale comercialmente a exatamente 3 microgotas:\nMultiplicamos as gotas por 3:\n30 macrogotas/min * 3 = 90 microgotas/min.',
    source: 'Gotejamento de Fluidos - Slide 6',
    calculationSteps: [
      '1. Multiplicação linear: 30 macrogotas * 3 microgotas/macrogota = 90 microgotas/min.'
    ]
  }
];
