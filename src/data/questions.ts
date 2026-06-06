import { Question } from '../types';
import { SNG_SNE_EXTRA_QUESTIONS } from './questions_part1';
import { VIAS_LAVAGEM_EXTRA_QUESTIONS } from './questions_part2';
import { SOND_ANTROP_OXIG_EXTRA_QUESTIONS } from './questions_part3';
import { SNG_SNE_MORE_QUESTIONS } from './more_questions_sng';
import { CALC_MORE_QUESTIONS } from './more_questions_calc';
import { VIAS_MORE_QUESTIONS } from './more_questions_vias';
import { LAVAGEM_MORE_QUESTIONS } from './more_questions_lavagem';
import { SONDAGEM_MORE_QUESTIONS } from './more_questions_sondagem';
import { ANTROPOMETRIA_MORE_QUESTIONS } from './more_questions_antropometria';
import { OXIGENOTERAPIA_MORE_QUESTIONS } from './more_questions_oxigenoterapia';
import { CALC_MORE_EXTRA_QUESTIONS } from './more_questions_calc_extra';

const RAW_QUESTIONS_BANK: Question[] = [
  // --- TOPIC: SNG e SNE ---
  {
    id: 'sng_sne_1',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Cite a principal diferença anatômica e de uso entre a SNG (Sonda Nasogástrica) e a SNE (Sonda Nasoenteral):',
    type: 'multiple-choice',
    options: [
      'A SNG fica localizada no estômago (curto prazo, para drenagem e alimentação) e a SNE fica localizada no intestino delgado (médio a longo prazo, para nutrição enteral e possui fio-guia).',
      'A SNG fica no duodeno e a SNE no estômago, ambas de longo prazo.',
      'A SNG é de menor calibre e mais flexível, enquanto a SNE é de maior calibre e mais rígida.',
      'A SNG serve exclusivamente para hidratação venosa e a SNE para hidratação gástrica de dreno rápido.'
    ],
    correctAnswer: 'A',
    explanation: 'De acordo com o material (SNG e SNE - Slide 21), a SNG localiza-se no estômago, possui maior calibre, material mais rígido, e é para curto prazo/drenagem e alimentação. A SNE localiza-se no intestino delgado, é de menor calibre, material mais flexível (silicone/poliuretano), usada para médio a longo prazo em nutrição enteral e frequentemente possui fio-guia.',
    source: 'SNG e SNE - Slides 21 e 22'
  },
  {
    id: 'sng_sne_2',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'Durante a administração de dieta enteral por sonda, o Técnico de Enfermagem deve manter o paciente em qual posição?',
    type: 'multiple-choice',
    options: [
      'Em posição de Trendelenburg',
      'Em decúbito ventral (de barriga para baixo)',
      'Com a cabeceira elevada entre 30° e 45° (Posição de Fowler)',
      'Em posição lateral esquerda obrigatoriamente'
    ],
    correctAnswer: 'C',
    explanation: 'De acordo com o Exercício 2 e com o Slide 26, o paciente deve ser posicionado com a cabeceira elevada entre 30° e 45° para evitar broncoaspiração, mantendo essa elevação por pelo menos 30 minutos após o término da administração.',
    source: 'SNG e SNE - Exercício 2 / Slide 26'
  },
  {
    id: 'sng_sne_3',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'Antes de realizar a administração de qualquer dieta ou medicamento pela sonda, é de extrema importância que o técnico realize qual cuidado?',
    type: 'multiple-choice',
    options: [
      'Retirar a fixação de esparadrapo do nariz.',
      'Confirmar e verificar o correto posicionamento da sonda conforme protocolo.',
      'Fechar a sonda completamente para acumular resíduo do dia anterior.',
      'Aspirar sangue da sonda de forma rotineira e vigorosa.'
    ],
    correctAnswer: 'B',
    explanation: 'Antes de infundir qualquer volume na sonda, deve-se checar seu correto posicionamento (marcação externa, teste de ausculta com 20 ml de ar para SNG, e para SNE confirmação radiológica inicial) para evitar infusão inadvertida em vias aéreas.',
    source: 'SNG e SNE - Exercício 3 / Slides 14 e 26'
  },
  {
    id: 'sng_sne_4',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'A SNG (Sonda de Salem, de PVC, com dois lúmens) é ideal para descompressão gástrica pois a via menor azulada permite a entrada contínua de ar, o que evita que a mucosa do estômago seja lesionada durante a aspiração.',
    type: 'true-false',
    options: ['Verdadeiro', 'Falso'],
    correctAnswer: 'Verdadeiro',
    explanation: 'De acordo com o Slide 9, a Sonda de Salem possui dois lúmens. A via azul menor serve para ventilação contínua e evita que o vácuo puxe a mucosa estomacal contra os orifícios da sonda, prevenindo lesões e hemorragias gástricas.',
    source: 'SNG e SNE - Slide 9'
  },
  {
    id: 'sng_sne_5',
    topic: 'SNG e SNE',
    difficulty: 'Difícil',
    questionText: 'Um paciente em uso de SNE começou a apresentar tosse intensa e dispneia durante a administração da dieta enteral. Qual deve ser a conduta inicial e imediata do Técnico de Enfermagem?',
    type: 'multiple-choice',
    options: [
      'Aumentar a velocidade da infusão para terminar mais rápido.',
      'Suspender/fechar imediatamente a dieta e comunicar o Enfermeiro responsável.',
      'Realizar aspiração vigorosa pelo próprio canal da sonda sem desligar a dieta.',
      'Pedir para o paciente deitar-se de barriga para baixo para conter a tosse.'
    ],
    correctAnswer: 'B',
    explanation: 'Tosse intensa, dispneia e cianose são sinais de alerta críticos (Slide 25) que sugerem o deslocamento da sonda para a via aérea (traqueia/pulmões). A conduta inicial é parar imediatamente a infusão para evitar broncoaspiração grave e acionar o Enfermeiro (Slide 5 e Exercício 5).',
    source: 'SNG e SNE - Slide 25 e Exercício 5'
  },
  {
    id: 'sng_sne_6',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'No contexto de lavagem gástrica via SNG, qual é uma das contraindicações absolutas para a realização do procedimento?',
    type: 'multiple-choice',
    options: [
      'Ingestão de medicamentos comuns em tentativas de suicídio.',
      'Ingestão de substâncias corrosivas (ácidos ou álcalis fortes).',
      'Hemorragia digestiva em paciente acordado.',
      'Intoxicação medicamentosa severa sob supervisão médica.'
    ],
    correctAnswer: 'B',
    explanation: 'A lavagem gástrica é contraindicada na ingestão de substâncias corrosivas (como soda cáustica ou ácidos fortes) porque o retorno do líquido corrosivo pelo esôfago pode agravar as queimaduras e perfurar o trato gastrointestinal (Slide 19).',
    source: 'SNG e SNE - Slide 19'
  },

  // --- TOPIC: CÁLCULOS DE MEDICAÇÃO E GOTEJAMENTO ---
  {
    id: 'calc_med_1',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'Foi prescrita Dipirona 500 mg. No setor de enfermagem, está disponível ampola de Dipirona com 1 g em 10 mL. Quantos mL devem ser administrados?',
    type: 'calculation',
    correctAnswer: '5',
    explanation: 'Regra de três simples:\n1 g = 1000 mg\nSe 1000 mg -------- 10 mL\n     500 mg -------- x\n1000x = 500 * 10\n1000x = 5000\nx = 5 mL.',
    source: 'Gabarito Exercício 19 / Cálculos Slide 16',
    calculationSteps: [
      '1. Conversão de unidades: 1 g = 1000 mg',
      '2. Montagem da Regra de 3: 1000 mg -> 10 mL; 500 mg -> x mL',
      '3. Multiplicação cruzada: 1000 * x = 500 * 10',
      '4. Resolução: 1000x = 5000 => x = 5 mL.'
    ]
  },
  {
    id: 'calc_med_2',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição: Furosemida 20 mg EV. Disponível na enfermaria: ampolas de 40 mg em 4 mL. Quantos mL devemos aspirar e administrar ao paciente?',
    type: 'calculation',
    correctAnswer: '2',
    explanation: 'Regra de três simples:\n40 mg -------- 4 mL\n20 mg -------- x\n40x = 20 * 4\n40x = 80\nx = 80 / 40\nx = 2 mL.',
    source: 'Gabarito Exercício 3 / Cálculos Slide 18',
    calculationSteps: [
      '1. Identificar disponível: 40 mg em 4 mL',
      '2. Montar proporção: 40 mg -> 4 mL; 20 mg -> x mL',
      '3. Multiplicar cruzado: 40x = 80',
      '4. Dividir: x = 2 mL.'
    ]
  },
  {
    id: 'calc_med_3',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'O médico prescreveu 1500 mL de Soro Fisiológico (SF) 0,9% para correr em 8 horas. Qual deve ser o gotejamento por minuto (gotas/min) utilizando equipo de macrogotas?',
    type: 'calculation',
    correctAnswer: '63', // Rounded from 62.5
    explanation: 'Fórmula de gotejamento em horas (macrogotas):\nGotas/min = Volume / (Tempo * 3)\nGotas/min = 1500 / (8 * 3)\nGotas/min = 1500 / 24\nGotas/min = 62.5 ≈ 63 gotas/min.',
    source: 'Cálculos Gotejamento - Slide 44',
    calculationSteps: [
      '1. Escolha da fórmula: Gotas/min = Volume / (Tempo em horas * 3)',
      '2. Substituição: Gotas/min = 1500 / (8 * 3)',
      '3. Cálculo: Gotas/min = 1500 / 24 = 62,5',
      '4. Arredondamento clínico usual: 63 gotas/min.'
    ]
  },
  {
    id: 'calc_med_4',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'Na prática de enfermagem, sabemos que 1 gota corresponde a quantas microgotas?',
    type: 'multiple-choice',
    options: [
      '1 gota = 1 microgota',
      '1 gota = 3 microgotas',
      '1 gota = 5 microgotas',
      '1 gota = 20 microgotas'
    ],
    correctAnswer: 'B',
    explanation: 'De acordo com as formas de medidas do Slide 6, cada gota possui exatamente 3 microgotas. Portanto, 1 mL possui 20 gotas ou 60 microgotas.',
    source: 'Cálculo de Medicamentos - Slide 6'
  },
  {
    id: 'calc_med_5',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Cálculo de Penicilina Cristalina: Foi prescrita Penicilina Cristalina 4.800.000 UI, mas só temos o frasco-ampola de 10.000.000 UI. Sabendo que o pó ocupa volume de 4 mL, adicionamos 6 mL de diluente (totalizando 10 mL). Quantos mL devemos aspirar para obter a dose correta?',
    type: 'calculation',
    correctAnswer: '4.8',
    explanation: 'O frasco de 10.000.000 UI tem volume total reconstituído de 10 mL (6 mL de água destilada + 4 mL de cristais insolúveis do próprio frasco). A regra de três é:\n10.000.000 UI ------- 10 mL\n 4.800.000 UI -------  x\n100x = 480\nx = 4,8 mL.',
    source: 'Penicilina Cristalina - Slide 31',
    calculationSteps: [
      '1. Identificar volume real: 10M UI equivalem a 10 mL de solução após adicionar 6 mL de solvente.',
      '2. Montar proporção: 10.000.000 UI -> 10 mL; 4.800.000 UI -> x mL',
      '3. Simplificação e multiplicação cruzada: 10x = 48',
      '4. Resultado: x = 4.8 mL.'
    ]
  },
  {
    id: 'calc_med_6',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrito um Soro Glicosado (SG) 8% de 500 mL para correr em 8 horas. No entanto, na enfermaria só dispomos de SG 5% de 500 mL e ampolas de Glicose 50% de 10 mL. Quantos mL de glicose 50% devem ser injetados para transformar o soro glicosado em 8%?',
    type: 'calculation',
    correctAnswer: '30',
    explanation: '1. Gramas necessárias no soro 8%: 8 g em 100 mL -> x g em 500 mL => x = 40 g.\n2. Gramas existentes no soro 5%: 5 g em 100 mL -> y g em 500 mL => y = 25 g.\n3. Diferença de Glicose: 40 g - 25 g = 15 g.\n4. Ampolas de Glicose 50% (50 g em 100 mL -> 5 g em 10 mL):\nSe temos 5 g de soluto em 10 mL de ampola,\nPara obter as 15 g adicionais:\n5 g ------- 10 mL\n15 g -------  z mL\n5z = 150 => z = 30 mL (ou seja, 3 ampolas).',
    source: 'Cálculo de Medicamentos - Slides 39 e 40',
    calculationSteps: [
      '1. Calcular glicose do soro prescrito (8% de 500 mL): 40 g',
      '2. Calcular glicose do soro disponível (5% de 500 mL): 25 g',
      '3. Identificar diferença necessária: 40g - 25g = 15 g de glicose pura',
      '4. Calcular volume correspondente na ampola de Glicose 50% (5g em 10 mL): 15g equivalem a 30 mL.'
    ]
  },
  {
    id: 'calc_med_7',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'O médico prescreveu 250 mL de soro para correr em 2 horas. Quantas microgotas por minuto devem ser prescritas?',
    type: 'calculation',
    correctAnswer: '125',
    explanation: 'Fórmula de gotejamento (microgotas):\nmicrogotas/min = Volume / Tempo (em horas)\nmicrogotas/min = 250 / 2 = 125 microgotas/min.\nNota: o gotejamento de microgotas por minuto é numericamente igual ao fluxo de infusão em mL/h.',
    source: 'Gabarito Exercício 13 / Cálculos Slide 45',
    calculationSteps: [
      '1. Escolha da fórmula: Microgotas/min = Volume / Tempo (horas)',
      '2. Substituição: Microgotas/min = 250 / 2',
      '3. Divisão: 125 microgotas/min.'
    ]
  },

  // --- TOPIC: VIAS DE ADMINISTRAÇÃO DE MEDICAMENTOS ---
  {
    id: 'vias_adm_1',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Conforme a Resolução COFEN nº 564/2017 (Art. 25), o profissional de enfermagem tem o direito ético de:',
    type: 'multiple-choice',
    options: [
      'Administrar medicamentos sem prescrição médica sempre que achar apropriado.',
      'Recusar-se a executar atividades para as quais não se sinta habilitado ou que coloquem em risco a segurança do paciente.',
      'Alterar a posologia e a via de administração escrita por médicos quando suspeitar de erro e sem consultá-los.',
      'Delegar a responsabilidade de erro de medicação exclusivamente ao farmacêutico que dispensou.'
    ],
    correctAnswer: 'B',
    explanation: 'O Art. 25 do Código de Ética de Enfermagem (Slide 3) garante o direito de recusa profissional caso o procedimento ultrapasse sua competência ou ponha o paciente em risco evidente.',
    source: 'Vias de Administração Parte 1 - Slide 3'
  },
  {
    id: 'vias_adm_2',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Qual via de administração consiste em colocar o medicamento embaixo da língua, aproveitando a vasta vascularização para absorção rápida e evitando o metabolismo de primeira passagem?',
    type: 'multiple-choice',
    options: [
      'Via Oral (VO)',
      'Via Sublingual (VSL)',
      'Via Inalatória',
      'Via Intradérmica'
    ],
    correctAnswer: 'B',
    explanation: 'A via sublingual tem vantagens de rapidez de efeito devido à mucosa fina e amplamente vascularizada, caindo diretamente na circulação sistêmica e bloqueando o metabolismo hepático inicial de primeira passagem (Slide 33).',
    source: 'Vias de Administração Parte 1 - Slide 33'
  },
  {
    id: 'vias_adm_3',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'O protocolo básico de segurança na medicação recomenda verificar a regra de ouro do preparo. Quantos são os "Certos" atualmente estabelecidos?',
    type: 'multiple-choice',
    options: [
      'Cinto Certos',
      'Nove Certos',
      'Treze Certos',
      'Dezesseis Certos'
    ],
    correctAnswer: 'C',
    explanation: 'De acordo com o Slide 30 da aula, o enfermeiro e o técnico devem observar rigorosamente os "Treze Certos" antes, durante e após a administração gástrica ou sistêmica da medicação.',
    source: 'Vias de Administração Parte 1 - Slide 30'
  },
  {
    id: 'vias_adm_4',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao administrar medicação oftálmica (colírio), um cuidado crítico e a técnica correta para correta absorção consistem em:',
    type: 'multiple-choice',
    options: [
      'Tocar a ponta do frasco diretamente no globo ocular.',
      'Após gotejar no saco conjuntival, pressionar levemente o canto interno do olho (canal lacrimal) por cerca de 30 segundos a 1 minuto.',
      'Instilar o colírio diretamente na pálpebra superior fechada.',
      'Pedir para o paciente esfregar intensamente os olhos em movimentos circulares.'
    ],
    correctAnswer: 'B',
    explanation: 'A técnica oftálmica (Slide 37) preconiza puxar a pálpebra inferior para formar o saco conjuntival, instilar o colírio sem tocar o bico aplicador nos tecidos e pressionar levemente o canal lacrimal para evitar absorção sistêmica indesejada pelo duto nasolacrimal.',
    source: 'Vias de Administração Parte 1 - Slide 37'
  },
  {
    id: 'vias_adm_5',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Em relação à compatibilidade na via intravenosa, o que se sabe sobre o medicamento Pantoprazol?',
    type: 'multiple-choice',
    options: [
      'É altamente compatível com qualquer soro ou medicação e pode ser infundido livremente junto a eles.',
      'É altamente reativo e incompatível com a grande maioria dos medicamentos (como Meropenem, Vancomicina, Midazolam, Furosemida, Ondansetrona e Insulina).',
      'Serve como diluente padrão para a heparina e dipirona.',
      'Deve ser misturado na mesma seringa à ampicilina para acelerar o efeito protetor.'
    ],
    correctAnswer: 'B',
    explanation: 'O Pantoprazol é quimicamente instável em meio ácido e se precipita facilmente. O Slide 24 estabelece expressamente sua incompatibilidade com a maioria dos demais fármacos intravenosos.',
    source: 'Vias de Administração Parte 1 - Slide 24'
  },

  // --- TOPIC: NECESSIDADE DE ELIMINAÇÃO INTESTINAL E LAVAGEM INTESTINAL ---
  {
    id: 'elim_int_1',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'A lavagem intestinal é executada de variadas maneiras de acordo com o volume e objetivo. De acordo com as características de Clister, Enema e Enteroclisma, marque a resposta CORRETA:',
    type: 'multiple-choice',
    options: [
      'O Clister possui um grande volume e o Enteroclisma possui um volume muito pequeno.',
      'O Clister destina-se a evacuação rápida em volumes pequenos (ex: Fleet Enema); o Enema tem volume variável; o Enteroclisma prevê grandes volumes (ex: 1000 mL de Soro com Glicerina) para limpeza profunda higiênica e cirúrgica do cólon.',
      'O Enema é para uso exclusivo intravenoso e o Clister é introduzido por via oral.',
      'Nenhum possui contraindicação e todos são de competência privativa do médico.'
    ],
    correctAnswer: 'B',
    explanation: 'O Slide 42 do material resume que o Clister envolve volumes pequenos e evacuação rápida (alcance retal). O Enema tem volume variável e o Enteroclisma envolve volumes grandes e limpeza de porções altas do cólon.',
    source: 'Lavagem Intestinal - Slide 42'
  },
  {
    id: 'elim_int_2',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'Durante a lavagem intestinal por enema, qual é a posição terapêutica (decúbito) recomendada para o posicionamento do paciente no leito?',
    type: 'multiple-choice',
    options: [
      'Posição Ginecológica ou de litotomia com as pernas levantadas.',
      'Posição de SIMS (decúbito lateral esquerdo, com o membro inferior direito flexionado à frente).',
      'Posição de Trendelenburg com a pelve rebaixada ao solo.',
      'Decúbito dorsal plano e reto sem travesseiro.'
    ],
    correctAnswer: 'B',
    explanation: 'A posição de SIMS (descrita nos slides 45 e 51 e Exercício 2 da pág 52) é a ideal para a introdução retal de enemas e clisters de limpeza, pois respeita a curvatura anatômica descendente do reto e do cólon sigmoide, facilitando o fluxo livre por gravidade.',
    source: 'Lavagem intestinal - Slides 45 e 51, Exercício 2 da pág 52'
  },
  {
    id: 'elim_int_3',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Durante a realização de um enema de limpeza, em qual das seguintes situações o Técnico de Enfermagem deve interromper imediatamente o procedimento e comunicar o Enfermeiro?',
    type: 'multiple-choice',
    options: [
      'Quando o paciente manifestar relaxamento abdominal.',
      'Quando houver início de eliminação de flatos pelo dreno.',
      'Se o paciente queixar-se de dor abdominal intensa e houver forte resistência ao fluxo da solução.',
      'Ao final do tempo de retenção planejado de 10 minutos.'
    ],
    correctAnswer: 'C',
    explanation: 'Se houver resistência física ao introduzir a sonda, dor abdominal severa ou sangramento retal, o procedimento deve ser suspenso de imediato de forma preventiva a fim de se evitar lacerações, falso trajeto e perfuração intestinal (Slide 47 / Exercício 4 da pág 52).',
    source: 'Lavagem intestinal - Slide 47 / Exercício 4 pág 52'
  },
  {
    id: 'elim_int_4',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'Fecaloma refere-se a uma massa fecal endurecida e ressecada que fica retida e acumulada no reto ou cólon distal, comumente em idosos ou acamados. Qual medida preventiva auxilia a constipação?',
    type: 'multiple-choice',
    options: [
      'Restringir a oferta diária de líquidos hidrostáticos.',
      'Administrar rotineiramente laxantes fortes mesmo sem prescrição.',
      'Estimular a ingestão hídrica abundante, mobilização do paciente e uma dieta rica em fibras vegetais.',
      'Evitar mudanças frequentes de decúbito de pacientes acamados.'
    ],
    correctAnswer: 'C',
    explanation: 'A prevenção primária da constipação severa e fecaloma envolve hidratação apropriada, dieta saudável com aporte de fibras que geram volume fecal e mobilidade/exercícios para incentivar o trânsito do peristaltismo (Exercício 3 pág 52).',
    source: 'Lavagem intestinal - Slide 39 e Exercício 3'
  },
  {
    id: 'elim_int_5',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Ao realizar a anotação de Enfermagem após uma lavagem intestinal, quais dados específicos devem constar obrigatoriamente do registro do técnico?',
    type: 'multiple-choice',
    options: [
      'Apenas o horário e a assinatura do médico preventista.',
      'Tipo de solução infundida, volume tolerado, horário, a reação/aceitação do paciente e o aspecto e quantidade das fezes eliminadas.',
      'A marca comercial da sonda retal e o custo hospitalar.',
      'Se o paciente tomou banho antes do início da lavagem intestinal.'
    ],
    correctAnswer: 'B',
    explanation: 'A anotação de enfermagem do técnico deve ser clara, detalhando o tipo/volume da solução, horários, as intercorrências, resposta do paciente e aspecto macroscópico da eliminação fecal (quantidade, coloração, presença de sangue) (Slide 45 e 51).',
    source: 'Lavagem intestinal - Slide 45 e 51'
  },

  // --- TOPIC: SONDAGEM VESICAL E DISPOSITIVO URINÁRIO ---
  {
    id: 'sond_ves_1',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Qual é a finalidade clínico-assistencial principal da Sonda Vesical de Alívio (SVA) em contraste com a Sonda Vesical de Demora (SVD)?',
    type: 'multiple-choice',
    options: [
      'A SVA tem balonete e permanece instalada por meses, enquanto a SVD é retirada logo após esvaziar a bexiga.',
      'A SVA é introduzida apenas cirurgicamente bem acima do púbis, e a SVD serve para infusão arterial.',
      'A SVA visa o esvaziamento temporário da bexiga em casos de retenção aguda de urina (sem balonete); já a SVD permanece continuamente fixada por balonete para monitoramento minucioso do débito urinário.',
      'A SVA é quimicamente descartada pela urina e a SVD necessita de grampo mecânico estéril.'
    ],
    correctAnswer: 'C',
    explanation: 'A Sonda Vesical de Alívio (SVA ou Nelaton) serve para esvaziamento rápido e imediato de urina acumulada e coleta estéril (não permanece instalada e não tem balonete). A Sonda Vesical de Demora (SVD ou Foley) possui balonete insuflado para fixação interna permanente e drenagem contínua via sistema fechado (Slide 56).',
    source: 'Sondagem Vesical - Slide 56'
  },
  {
    id: 'sond_ves_2',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Ao realizar cuidados e manutenções diárias de um paciente com Sonda Vesical de Demora (SVD) instalada, qual é um cuidado de enfermagem correto e crítico?',
    type: 'multiple-choice',
    options: [
      'Realizar desconexões frequentes do cateter do saco coletor para limpar a via interna.',
      'Manter a bolsa coletora posicionada diretamente sobre o colchão/leito do paciente.',
      'Realizar higiene íntima mecânica diária com água/sabonete e manter o sistema sempre estéril e fechado abaixo do nível da bexiga.',
      'Manter dobras e nós na extensão para reter a diurese preventivamente.'
    ],
    correctAnswer: 'C',
    explanation: 'A higiene íntima diária (Slide 66) é crucial. O sistema de drenagem fechado NUNCA deve ser desconectado desnecessariamente ou elevado acima da bexiga para prevenir refluxo de urina contaminada da bolsa, fator principal para infecção do trato urinário (ITU ou Urosepse, Slide 67).',
    source: 'Sondagem Vesical - Slide 66 e Exercício 2 da pág 76'
  },
  {
    id: 'sond_ves_3',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Durante o plantão, o técnico em enfermagem observa que há ausência total de drenagem urinária no saco de SVD de um paciente. Qual deve ser inicialmente sua conduta correta?',
    type: 'multiple-choice',
    options: [
      'Iniciar a retirada imediata da sonda do paciente.',
      'Adicionar diurético via sonda ou por via intravenosa.',
      'Insuflar mais 10 mL de água destilada no balonete de retenção.',
      'Verificar a permeabilidade do circuito, checando se existem dobras na extensão ou obstruções simples no posicionamento do sistema.'
    ],
    correctAnswer: 'D',
    explanation: 'Diante de anúria ou parada de drenagem abrupta, o técnico deve primeiramente inspecionar o sistema externamente procurando por dobras na sonda, compressões mecânicas ou bloqueios antes de realizar intervenções invasivas (Slide 77 / Exercício 5).',
    source: 'Sondagem Vesical - Slide 77 / Exercício 5'
  },
  {
    id: 'sond_ves_4',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Os termos técnicos de Enfermagem para alteração no volume e fluxo urinário são cruciais de dominar. Relacione e assinale a alternativa CORRETA:',
    type: 'multiple-choice',
    options: [
      'Anúria: ausência ou produção de urina < 100 mL/24h; Oligúria: diminuição do volume (< 400 mL/24h); Disúria: dor e dificuldade ao urinar; Hematúria: presença de sangue na urina.',
      'Oligúria indica fluxo urinário excessivo e Poliúria é a ausência fecal.',
      'Disúria refere-se exclusivamente à infecção dos rins com urina amarela clássica.',
      'Hematúria consiste em presença anormal de glicose insolúvel na uretra distal.'
    ],
    correctAnswer: 'A',
    explanation: 'De acordo com o dicionário de Termos Técnicos dos Slides 71 e 72, Anúria é volume de urina inferior a 100 mL/24h; Oligúria menor do que 400-500 mL/24h; Disúria é desconforto/dor miccional; e Hematúria é a presença de eritrócitos/sangue na urina.',
    source: 'Sondagem Vesical - Slides 71 e 72'
  },
  {
    id: 'sond_ves_5',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Na prática clínica hospitalar, qual é o débito urinário hora considerado fisiologicamente adequado para um paciente adulto com base em seu peso corporal?',
    type: 'multiple-choice',
    options: [
      'Cerca de 5 mL por kg por hora',
      'Aproximadamente 0,5 mL por kg por hora',
      'Exatamente 100 mL por hora independente do peso',
      'Menos de 10 mL nas 24 horas totais do plantão'
    ],
    correctAnswer: 'B',
    explanation: 'De acordo com o Slide 70, o débito urinário considerado adequado nos adultos em UTI/enfermaria é de cerca de 0,5 mL/kg/hora. Como exemplo, um paciente de 70 kg deve drenar no mínimo aproximadamente 35 mL/hora.',
    source: 'Sondagem Vesical - Slide 70'
  },

  // --- TOPIC: MEDIDAS ANTROPOMÉTRICAS ---
  {
    id: 'antrop_1',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'A ciência que estuda e mede as dimensões físicas e a composição corporal do ser humano, incluindo peso, altura, circunferências e dobras cutâneas é denominada:',
    type: 'multiple-choice',
    options: [
      'Anatomopatologia',
      'Antropometria',
      'Ergometria Dinâmica',
      'Fisioterapia Motora'
    ],
    correctAnswer: 'B',
    explanation: 'Origem grega "anthropos" (homem) e "metron" (medida), a Antropometria é ferramenta não invasiva essencial para avaliação clínica nutricional (Slide 2).',
    source: 'Medidas Antropométricas - Slide 2'
  },
  {
    id: 'antrop_2',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'O Índice de Massa Corporal (IMC) é largamente utilizado no hospital para classificar o estado nutricional. Qual é a fórmula padrão para o seu cálculo e qual classificação da OMS corresponde a "Eutrofia (Peso Ideal)"?',
    type: 'multiple-choice',
    options: [
      'IMC = peso (kg) * altura (m); valor entre 30 e 35',
      'IMC = peso (kg) / [altura² (m²)]; valor entre 18,5 e 24,9',
      'IMC = altura (cm) - idade + peso corporal absoluto; valor < 10',
      'IMC = circunferência da cintura / circunferência do quadril; valor ideal igual a 1'
    ],
    correctAnswer: 'B',
    explanation: 'A fórmula de Quetelet para cálculo de IMC consiste no peso dividido pela altura ao quadrado. O intervalo classificado como eutrófico (normalidade) vai de 18,5 até 24,9 kg/m² (Slides 5 e 10).',
    source: 'Medidas Antropométricas - Slides 5 e 10'
  },
  {
    id: 'antrop_3',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Ao mensurar a Circunferência da Cintura (CC) do paciente, a Organização Mundial da Saúde (OMS) aponta maior risco cardiometabólico / cardiovascular em quais valores limites para homens e mulheres?',
    type: 'multiple-choice',
    options: [
      'Homens: ≥ 60 cm; Mulheres: ≥ 50 cm',
      'Homens: ≥ 94 cm; Mulheres: ≥ 80 cm',
      'Homens: ≥ 120 cm; Mulheres: ≥ 110 cm',
      'Homens e mulheres iguais acima de 150 cm'
    ],
    correctAnswer: 'B',
    explanation: 'A gordura visceral/abdominal elevada associa-se intimamente com risco de infarto e síndrome metabólica. A OMS define risco aumentado valores de CC ≥ 94 cm para homens e CC ≥ 80 cm para mulheres (Slide 6).',
    source: 'Medidas Antropométricas - Slide 6'
  },
  // --- NOVAS QUESTÕES DOS SLIDES E MATERIAIS ADICIONADOS ---
  {
    id: 'sng_sne_7',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Durante a passagem da Sonda Nasoenteral (SNE), caso o paciente comece a apresentar tosse persistente, cianose de extremidades ou dispneia súbita, o procedimento deve ser interrompido imediatamente. Essa intercorrência comumente indica:',
    type: 'multiple-choice',
    options: [
      'Inserção correta e bem-sucedida da sonda no esôfago posterior.',
      'Falta de lubrificante estéril suficiente ou gel de xilocaína.',
      'Introdução acidental da sonda nas vias aéreas respiratórias (traqueia ou brônquios).',
      'Reflexo vagal com aumento imediato da motilidade esofágica.'
    ],
    correctAnswer: 'C',
    explanation: 'O aparecimento de tosse súbita, dispneia e cianose é um sinal crítico gravíssimo de que a sonda entrou acidentalmente na árvore respiratória superior (laringe, traqueia e pulmões). O técnico deve interromper e orientar a imediata tração de recuo para evitar pneumonia espasmodica ou asfixia imediata.',
    source: 'SNG e SNE - Slide 25'
  },
  {
    id: 'sng_sne_8',
    topic: 'SNG e SNE',
    difficulty: 'Difícil',
    questionText: 'Com relação ao teste de ausculta epigástrica para verificar o posicionamento provisório de uma Sonda Nasogástrica (SNG), assinale a resposta correta sobre a técnica e suas limitações regulamentadas:',
    type: 'multiple-choice',
    options: [
      'É o único método 100% infalível de verificação, desobrigando qualquer inspeção externa de raios-x.',
      'Consiste na infusão rápida de 10 a 20 mL de ar pelo lúmen da sonda e ausculta simultânea com estetoscópio na região epigástrica. Embora útil de forma preliminar na beira do leito para SNG, não é totalmente fidedigna pois ruídos das vias respiratórias ou esôfago podem ser retransmitidos e simular posição gástrica.',
      'Consiste em manter a ponta do estetoscópio posicionada no esterno superior, injetando 50 mL de água destilada.',
      'Está completamente proibido e banido pelo COFEN para toda e qualquer situação pediátrica ou clínica adulta.'
    ],
    correctAnswer: 'B',
    explanation: 'O teste de ausculta (injetar 10-20 mL de ar e escutar o som de borbulho no hipocôndrio esquerdo/epigástrio) é prático e muito comum na SNG de beira de leito, mas pesquisas e manuais mostram que ruídos pulmonares ou esofágicos podem ser falsamente tomados por gástricos. Assim, a indicação oficial para alimentação prolongada (SNE) exige sempre confirmação por radiografia (raio-x) antes do primeiro uso.',
    source: 'SNG e SNE - Slide 16 / Exercício 3'
  },
  {
    id: 'sng_sne_9',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'Para prevenir efetivamente a obstrução física de uma Sonda Nasogástrica ou Nasoenteral por restos de alimentos ou precipitação de medicamentos, qual o volume de água recomendado para realizar o flushing (lavagem) rotineiro do cateter?',
    type: 'multiple-choice',
    options: [
      'De 1 mL a 2 mL de álcool isopropílico para dissolver gorduras.',
      'Cerca de 20 a 30 mL de água potável ou destilada sterile.',
      'Pelo menos 150 a 200 mL de água fervida a cada administração.',
      'Não se recomenda injetar nenhum líquido além da própria nutrição enteral.'
    ],
    correctAnswer: 'B',
    explanation: 'A lavagem periódica com seringa contendo 20 a 30 mL de água limpa deve ser efetuada imediatamente após a administração de qualquer medicamento por via de sonda enteral, após término de dietas ou a cada 3 a 4 horas em infusão de bombas de esvaziamento contínuo.',
    source: 'SNG e SNE - Slide 26'
  },
  {
    id: 'sng_sne_10',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Dietas enterais expostas ao ambiente clínico (nutrição enteral por sistema aberto) são sensíveis e altamente propensas à proliferação bacteriana. Qual o tempo máximo estipulado de permanência e infusão da mesma embalagem de dieta sob temperatura ambiente para prevenir diarreia infecciosa no paciente?',
    type: 'multiple-choice',
    options: [
      'No máximo 4 horas sob sistema aberto.',
      'Até 24 horas consecutivas se o clima local estiver ameno.',
      'Até 12 horas, desde que o lúmen da sonda receba irrigação salina.',
      'O tempo de permanência é livre, pois dietas prontas não contêm carboidratos.'
    ],
    correctAnswer: 'A',
    explanation: 'De acordo com as boas práticas sanitárias descritas no material (Slide 26) e protocolos internacionais sobre enteral de sistema aberto, a dieta que sofre manipulação rápida ou fracionamento não deve ficar pendurada à beira do leito sob infusão por mais de 4 horas devido ao risco exponencial de contaminação por patógenos humanos alimentares.',
    source: 'SNG e SNE - Slide 26'
  },
  {
    id: 'calc_med_8',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'Prescrição médica de 1000 mL de Soro Fisiológico (SF) 0,9% para correr em 12 horas. Quantas gotas por minuto (macrogotas/min) o Técnico em Enfermagem deve programar no gotejamento por gravidade para regular o fluxo?',
    type: 'calculation',
    correctAnswer: '28',
    explanation: 'Fórmula de macrogotas em horas: Gotas/min = Volume / (Tempo * 3). Substituindo:\nGotas/min = 1000 / (12 * 3)\nGotas/min = 1000 / 36\nGotas/min = 27,77 ≈ 28 gotas por minuto (arredondamento clínico usual).',
    source: 'Cálculos de Gotejamento - Slide 44',
    calculationSteps: [
      '1. Seleção da fórmula conveniente: Gotas/min = Volume / (Tempo em Horas * 3)',
      '2. Identificar dados da prescrição: Volume = 1000 mL, Tempo = 12 horas',
      '3. Substituir valores: Gotas/min = 1000 / (12 * 3) = 1000 / 36',
      '4. Executar divisão: 1000 / 36 = 27,77',
      '5. Aplicar arrendodamento usual na beira do leito para número inteiro: 28 gotas/min.'
    ]
  },
  {
    id: 'calc_med_9',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrita Glicose pura na quantidade de 12 g por via intravenosa. Na enfermaria, estão disponíveis apenas ampolas de solução de Glicose 25% com volume contendo 20 mL. Quantos mL dessa solução são necessários aspirar para administrar a dose exata?',
    type: 'calculation',
    correctAnswer: '48',
    explanation: 'Glicose 25% significa que existem 25 gramas de soluto em 100 mL de solução.\nMontamos a proporção:\n25 g -------- 100 mL\n12 g -------- x mL\n25 * x = 12 * 100\n25x = 1200\nx = 1200 / 25 = 48 mL.',
    source: 'Cálculos de Dosagem - Slide 16 / Slide 39',
    calculationSteps: [
      '1. Compreender a escala de porcentagem: Glicose 25% indica fixos 25 g de glicose pura dentro de cada 100 mL.',
      '2. Montar proporção linear da regra de três simples: 25 g -> 100 mL | 12 g -> x mL',
      '3. Multiplicar cruzado: 25 * x = 1200',
      '4. Dividir: x = 1200 / 25 = 48 mL.'
    ]
  },
  {
    id: 'calc_med_10',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição: Penicilina Cristalina de 2.500.000 UI por via intravenosa de 8/8h. No hospital, está disponível o frasco-ampola de 5.000.000 UI. Sabendo que o pó seco no frasco ocupa 2 mL e adicionamos 8 mL de água destilada, totalizando 10 mL de volume reconstituído, quantos mL o técnico de enfermagem deve aspirar para administrar a dose exata?',
    type: 'calculation',
    correctAnswer: '5',
    explanation: 'Com a adição de 8 mL de solvente líquido ao volume próprio de 2 mL do pó interno de cristais solúveis, o reservatório total do frasco resulta em exatamente 10 mL.\nProporção linear simples:\n5.000.000 UI -------- 10 mL\n2.500.000 UI -------- x mL\n5.000.000x = 2.500.000 * 10\n5.000.000x = 25.000.000\nx = 25.000.000 / 5.000.000\nx = 5 mL.',
    source: 'Penicilina Cristalina - Slide 31',
    calculationSteps: [
      '1. Analisar volume total da embalagem: Volume dos cristais (2 mL) + Diluente adicionado (8 mL) = 10 mL.',
      '2. Formular regra de três: 5.000.000 UI está para 10 mL, assim como 2.500.000 UI está para x mL.',
      '3. Realizar cruzamento de produtos: 5.000.000 * x = 25.000.000',
      '4. Simplificação final: x = 5 mL.'
    ]
  },
  {
    id: 'calc_med_11',
    topic: 'Cálculo de Medicação',
    difficulty: 'Fácil',
    questionText: 'O médico prescreveu uma infusão venosa de 3 mL de determinada droga vasodilatadora para correr em 1 hora usando equipo de microgotas. Quantas microgotas por minuto devem ser programadas?',
    type: 'calculation',
    correctAnswer: '3',
    explanation: 'Fórmula de gotejamento de microgotas por hora: Microgotas/min = Volume / Tempo (em horas).\nSubstituindo os valores:\nMicrogotas/min = 3 mL / 1 hora = 3 microgotas/min.\nLembrando que o fluxo em mL/hora é numericamente igual a microgotas por minuto.',
    source: 'Cálculos de Gotejamento - Slide 45',
    calculationSteps: [
      '1. Aplicar a fórmula direta de microgotas/hora: Microgotas/min = Volume em mL / Horas de duração',
      '2. Obter as variáveis correspondentes: Volume = 3 mL, Tempo = 1 hora',
      '3. Divisão: 3 / 1 = 3 microgotas/min.'
    ]
  },
  {
    id: 'vias_adm_6',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'De acordo com a segurança clínica de medicamentos, a ação sistemática de cruzar o nome na cabeceira, a pulseira legível com código de barras institucional e a prescrição médica corresponde aos seguintes certos fundamentais de enfermagem:',
    type: 'multiple-choice',
    options: [
      'Prescrição certa e Paciente certo.',
      'Seringa certa e Diluente certo.',
      'Via certa e Farmácia de manipulação certa.',
      'Médico certo e Diagnóstico clínico correto.'
    ],
    correctAnswer: 'A',
    explanation: 'A identificação correta do paciente (através de dois identificadores como nome completo e data de nascimento na pulseira ou fita) cruzando com a prescrição sem emendas ou ilegibilidades (prescrição certa) formam os degraus iniciais indispensáveis de barreira contra incidentes graves de medicação.',
    source: 'Vias de Administração - Slides 30-31'
  },
  {
    id: 'vias_adm_7',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Qual a angulação do bisel e o ângulo correto recomendado para introduzir a agulha na administração de fármacos por Via Intradérmica (ID), usualmente realizada em testes alérgicos (Dermatestes) e na vacina BCG?',
    type: 'multiple-choice',
    options: [
      '90 graus com bisel inteiramente voltado para baixo.',
      '45 graus com bisel lateralizado paralelamente.',
      '10 a 15 graus com bisel inclinado para cima.',
      '30 graus mantendo bisel voltado para baixo.'
    ],
    correctAnswer: 'C',
    explanation: 'A derme é a fina camada dérmica logo abaixo da epiderme. A técnica padrão (Slide 48) requer posicionar a agulha rente em um ângulo muito agudo (10° a 15°) com o bisel de face voltada para cima, permitindo a correta injeção superficial e consequente formação de pápula.',
    source: 'Vias de Administração - Slide 48'
  },
  {
    id: 'vias_adm_8',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'No tocante à Via Intramuscular (IM) profunda em pacientes adultos, a região ventroglútea (também conhecida na beira do leito como sítio de Hochstetter) é amplamente considerada segura por estar livre de grandes troncos arteriais periféricos e livre do nervo ciático.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Conforme descrito nos guias de semiologia e via intramuscular do Slide 52, a região ventroglútea (localizada sobre o quadril, traçando-se triângulo a partir do trocanter maior e espinha ilíaca ântero-superior) é o sítio mais seguro para injetáveis de grande densidade ou volume nos adultos devido à sua excelente camada muscular espessa e menor índice de acidentes vasculares/gás-neurológicos.',
    source: 'Vias de Administração - Slide 52'
  },
  {
    id: 'vias_adm_9',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Como é chamado o evento adverso não planejado em terapia intravenosa no qual há o vazamento de soluções não vesicantes da luz do vaso sanguíneo para o espaço intersticial adjacente, causando edema frio, dor, palidez local e lentidão na infusão do equipo?',
    type: 'multiple-choice',
    options: [
      'Tromboflebite purulenta.',
      'Infiltração (ou extravasamento).',
      'Espasmo arterial traumático.',
      'Embolia gasosa coronária.'
    ],
    correctAnswer: 'B',
    explanation: 'A infiltração ocorre quando um fluido injetado por cateter se espalha para o tecido subcutâneo porque a agulha ou cateter perfurou a veia ou deslocou-se de seu lúmen. Se o fármaco for irritante/vesicante extremo (ex: quimioterápicos, aminas), o quadro é classificado como extravasamento.',
    source: 'Vias de Administração - Slide 23'
  },
  {
    id: 'elim_int_6',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Ao realizar um enteroclisma de grande volume (ex: 1000 mL de soro morno glicerinado), qual a altura adequada de suspensão do frasco que o profissional de enfermagem deve estabelecer para regular a pressão hídrica no reto?',
    type: 'multiple-choice',
    options: [
      'A altura é irrelevante, bastando abrir totalmente a pinça do equipo.',
      'Aproximadamente 30 a 45 cm acima do nível do quadril/leito do paciente.',
      'Pelo menos de 100 a 150 cm acima das pernas do paciente.',
      'No mesmo nível das cobertas do paciente.'
    ],
    correctAnswer: 'B',
    explanation: 'A altura correspondente a 30-45 cm do nível do quadril regula a gravidade do fluxo. Uma altura maior cria pressão hidrostática muito alta de forma repentina, forçando o estiramento das paredes intestinais, o que gera imediata dor cólica aguda, contração repentina do reto e expulsão precipitada do líquido sem realizar a higiene ou amaciamento corretos.',
    source: 'Lavagem Intestinal - Slide 46 / Exercício 2'
  },
  {
    id: 'elim_int_7',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'A lavagem intestinal (enemas de esvaziamento) contra fecalomas impõe movimentos para as sondas retais de borracha. No entanto, o cateter retal deve ser sempre lubrificado antes da aplicação para evitar microfissuras e dor ao paciente.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Injetar sondas secas sem amaciantes rompe ou escoria os dobras do ânus e esfíncter retal. Lubrificar a ponta da sonda retal com vaselina em gel ou xilocaína solúvel por 5-7 cm reduz drasticamente o trauma doloroso mecânico inicial de inserção e facilita o deslizamento sob a curvatura sigmoide.',
    source: 'Lavagem intestinal - Slides 45 e 51'
  },
  {
    id: 'elim_int_8',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Qual a temperatura ideal das soluções e líquidos para infusão na lavagem intestinal e enemas, e o porquê dessa regulamentação de segurança?',
    type: 'multiple-choice',
    options: [
      'Gelada (entre 4°C e 8°C) para provocar paradas de sangramento e vasoconstrição.',
      'Morna (aproximadamente entre 37°C e 38°C), próxima à escala normal de temperatura do corpo humano, pois líquidos frios geram espasmos cólicos dolorosos intensos e quentes causam graves lesões térmicas de queimadura intestinal.',
      'Aquecido ao ponto máximo de vaporização (acima de 55°C) para dissolver os gases.',
      'Qualquer ponto térmico de termômetro ambiente.'
    ],
    correctAnswer: 'B',
    explanation: 'A temperatura tépida ou morna do enema (37°C a 38°C) é vital para acomodar as mucosas sensíveis do intestino sem provocar hiperestimulação mecânica por frio (cólicas lancinantes, diarreia explosiva precoce) ou sérias queimaduras de necrose do tecido por calor excessivo.',
    source: 'Lavagem Intestinal - Slide 45'
  },
  {
    id: 'elim_int_9',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'Ao descrever a eliminação fecal de um paciente de enfermaria após realização de enteroclisma, o técnico observa fezes em forma de esferas pequenas, duras, cinzentas e totalmente secas devido ao atraso crônico de trânsito estomacal-biliar. O termo correto para essas fezes ressecadas é:',
    type: 'multiple-choice',
    options: [
      'Melena espumosa com sangue digerido.',
      'Fezes escibalosas (ou cíbalas).',
      'Fezes esteatorreicas amareladas.',
      'Diarreia pastosa mucilaginosa.'
    ],
    correctAnswer: 'B',
    explanation: 'As cíbalas ou escíbalos (fezes escibalosas) consistem em pequenos aglomerados de matéria fecal fragmentada e endurecida pela intensa retirada de água na porção do intestino grosso, sinal característico de grave constipação e obstipação digestória prolongada.',
    source: 'Lavagem Intestinal - Slide 39'
  },
  {
    id: 'sond_ves_6',
    topic: 'Sondagem Vesical',
    difficulty: 'Difícil',
    questionText: 'Com relação aos limites legais profissionais estabelecidos pelo COFEN, qual o papel e limites do Técnico de Enfermagem face ao cateterismo e sondagem vesical de demora (SVD)?',
    type: 'multiple-choice',
    options: [
      'O técnico tem autonomia completa para decidir, inserir e assinar o cateterismo em qualquer doente cirúrgico.',
      'A inserção física do cateter vesical estéril (procedimento de alta complexidade e técnica estéril) é privativa do Enfermeiro (ou Médico); contudo, ao técnico de enfermagem cabe de direito e obrigação preparar o paciente, organizar toda a bandeja limpa estéril, atuar ativamente no auxílio sob supervisão e realizar os cuidados diários.',
      'O técnico de enfermagem é proibido de sequer tocar no coletor de urina ou esvaziar a bolsa devido ao risco de contaminação.',
      'O técnico deve realizar exclusivamente a passagem da sonda de demora sob técnica não-estéril doméstica de banho.'
    ],
    correctAnswer: 'B',
    explanation: 'O parecer oficial COFEN e a lei do exercício profissional definem que o cateterismo vesical é ato invasivo de rica complexidade técnica e requer enfermeiro qualificado em sua passagem urinária direta. O técnico participa fortemente arranjando mesas estéreis, higienizando o paciente, fornecendo suprimentos com técnica asséptica e zelando pelas anotações de diurese subsequentes.',
    source: 'Sondagem Vesical - Slide 59 e Exercício 1'
  },
  {
    id: 'sond_ves_7',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Para qual finalidade serve a insuflação do balão de fixação interno (balonete) na extremidade anterior da Sonda Foley de SVD e qual a substância prescrita para isso?',
    type: 'multiple-choice',
    options: [
      'Serve para expandir a bexiga desidratada, sendo preenchido com vaselina.',
      'Serve para ancorar a sonda no trígono vesical e reter sua passagem para fora da uretra, sendo preenchido única e exclusivamente com Água Destilada estéril.',
      'Serve para aspirar sangramentos vesicais ativos, sendo preenchido com ar do ambiente.',
      'Serve para lubrificar a urina por liberação prolongada, sendo preenchido com Solução Salina (SF 0,9%) concentrada.'
    ],
    correctAnswer: 'B',
    explanation: 'O balonete serve como âncora para a sonda interna. Deve ser preenchido exclusivamente com água destilada. O uso de Soro Fisiológico (SF) é proscrito para balonetes devido ao risco de formação de cristais de sal de cloreto de sódio que obstruem a válvula piloto, impedindo ou dificultando sua desinsuflação na hora da retirada e provocando dores e espasmos uretrais graves na decateterização do paciente.',
    source: 'Sondagem Vesical - Slide 64'
  },
  {
    id: 'sond_ves_8',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Como se define clinicamente a queixa clínica freqüente na beira do leito de enfermagem em que um paciente com sonda de Foley ou em regime autônomo refere dor intensa, ardor estomacal ou queimação mecânica profunda à micção?',
    type: 'multiple-choice',
    options: [
      'Hesitação pélvica crônica.',
      'Disúria.',
      'Anúria obstrutiva.',
      'Hematúria infecciosa.'
    ],
    correctAnswer: 'B',
    explanation: 'O termo semiológico disúria abrange dor, queimação, ardor, peso agudo ou desconforto durante o escoamento ou eliminação urinária. É uma queixa comum pós-inserção traumática ou sinal preditivo de Infecção do Trato Urinário (ITU).',
    source: 'Sondagem Vesical - Termos Técnicos Slide 71'
  },
  {
    id: 'sond_ves_9',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'A manifestação de urina com alteração de pigmento para vermelho ou laranja em pacientes sem infecção urinária ativa ou sangramentos, mas que realizam tratamento antituberculose com Rifampicina ou uso sintomático de Piridium (Fenazopiridina), é benigno e não representa hemorragia.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'As substâncias corantes contidas em fármacos de alta excreção renal (ex: metilfármacos, Rifampicina ou Piridium de efeito anestésico) tingem de forma passageira e inócua a cor urinária com matizes vermelhos, avermelhados ou laranjas. Essa variação benévola não deve ser interpretada de imediato como hematúria ativa ou urosepse pelo técnico, sendo prudente acalmar e educar os familiares e paciente.',
    source: 'Sondagem Vesical - Slide 71'
  },
  {
    id: 'antrop_4',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Para a exata mensuração da estatura linear de um paciente adulto hígido em pé utilizando escala de estadiômetro de parede ou balança mecânica de pé, o paciente deve estar ereto, descalço, com calcanhares unidos e encostando ombros, nádegas sãs e região occipital na haste graduada.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Conforme descrito no material (Slide 7), o alinhamento corporal reto (plano de Frankfurt paralelo ao horizonte) e os calcanhares juntos, nádegas e omoplata em perfeito paralelo contra a balança garantem menor taxa de erro milimétrico por deflexões na coluna.',
    source: 'Medidas Antropométricas - Slide 7'
  },
  {
    id: 'antrop_5',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'A métrica RCQ (Relação Cintura-Quadril) é largamente avaliada nos exames físicos preventivos de cardiologia. Qual a fórmula correta do seu cálculo matemático e qual seu significado de controle clínico de riscos à saúde do adulto?',
    type: 'multiple-choice',
    options: [
      'Multiplica-se a circunferência da cintura pela do quadril; serve unicamente para estimar gordura periférica da panturrilha do idoso.',
      'Divide-se a circunferência da cintura (em centímetros) pelo perímetro do quadril (em centímetros); funciona como um biomarcador preditivo de distribuição de tecido adiposo androide (gordura visceral alta), indicador de maior taxa de infarto agudo do miocárdio, dislipidemia e hipertensão arterial.',
      'Divide-se o peso pela cintura elevada ao quadrado; mede o desjejum e riscos de anemia crônica.',
      'Equivale à soma simples da cintura, idade e altura dividido por 10; mede a esclerose arterial pélvica.'
    ],
    correctAnswer: 'B',
    explanation: 'A equação simples consiste em dividir Cintura (cm) pelo Quadril (cm). O valor resultante reflete a adiposidade visceral (padrão androide ou formato "maçã"), que se associa de forma direta a maior inflamação sistêmica, estresse vascular e distúrbios cardiovascular de risco aterogênico.',
    source: 'Medidas Antropométricas - Slide 6'
  },
  {
    id: 'antrop_6',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Em idosos ou acamados impossibilitados de locomoção ou posição ereta estável sobre balanças tradicionais, o peso e estatura gerais de saúde podem ser calculados de forma indireta e aceitável através de fórmulas matemáticas que utilizam antropometria local como altura do joelho e perímetro da panturrilha.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'De acordo com o material (Slide 12), em situações em que o paciente se encontra imobilizado ou com sérias paraplegias, utilizam-se equações preditivas científicas aceitas (tais como a consagrada equação de Chumlea), que predizem fidedignamente o peso aproximado para dosagem e monitoramento nutricional no leito.',
    source: 'Medidas Antropométricas - Slide 12'
  },
  {
    id: 'sng_sne_11',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A Sonda de Levine (sonda nasogástrica simples de lúmen único) é confeccionada em cloreto de polivinila (PVC) flexível ou plástico cristal, indicada principalmente para quais finalidades no ambiente de enfermaria?',
    type: 'multiple-choice',
    options: [
      'Confeccionada para alimentação enteral definitiva prolongada (por meses ou anos) com menor taxa de desconforto pélvico.',
      'Drenagem temporária de resíduos gástricos (descompressão para alívio de distensão abdominal, pós-operatórios ou em casos de oclusão intestinal) ou infusão rápida de carvão ativado em intoxicações agudas.',
      'Feita para canular vias biliares ou artéria renal sob pressão hidráulica de infusores manuais.',
      'Indicada exclusivamente para hidratação pulmonar de pacientes asmáticos desidratados.'
    ],
    correctAnswer: 'B',
    explanation: 'A sonda de Levine (PVC comum) é excelente para lavagem, esvaziamento ácido, drenagem por sifonagem/vácuo de ar e líquidos retidos no estômago, ou para curta nutrição. Sendo um plástico mais rígido que o silicone, não deve permanecer por semanas sob o risco de provocar úlceras e necrose das fossas nasais ou esôfago (Slide 8).',
    source: 'SNG e SNE - Slide 8'
  },
  {
    id: 'sng_sne_12',
    topic: 'SNG e SNE',
    difficulty: 'Difícil',
    questionText: 'Além do método tradicional NEX (Nariz-Orelha-Xifoide) utilizado para medir a linha de progressão da SNG/SNE, qual adaptação científica ou acréscimo de medida é sugerida para garantir que a ponta atinja e se instale integralmente na cavidade estomacal ou duodenal profunda, reduzindo risco de posicionamento esofágico alto?',
    type: 'multiple-choice',
    options: [
      'Adicionar de 10 a 15 cm à extensão medida tradicionalmente no método NEX (ou marcar a metade da distância entre o apêndice xifoide e a cicatriz umbilical como margem extra de avanço).',
      'Subtrair 10 centímetros do resultado final NEX para compensar a curvatura natural externa do pescoço ou laringe superior.',
      'Dividir a distância NEX por dois para evitar perfuração gástrica mecânica.',
      'Não realizar nenhuma verificação de comprimento e introduzir o cateter até que toda a sonda tenha sumido no nariz.'
    ],
    correctAnswer: 'A',
    explanation: 'Pesquisas clínicas de nutrição mostram que a tradicional medida NEX em adultos muitas vezes deixa os orifícios proximais da sonda no esôfago, aumentando risco de pneumonia por aspiração do material. A adição de 10 a 15 cm adicionais ou aferir a distância até a metade da reta ventral entre apêndice xifoide e umbigo garante o posicionamento gástrico ideal (Slide 13).',
    source: 'SNG e SNE - Slide 13'
  },
  {
    id: 'calc_med_12',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição médica de Soro Glicosado (SG) 5% com volume de 500 mL para infusão intravenosa contínua a correr em exatas 4 horas. Quantas gotas por minuto (macrogotas/min) o técnico em enfermagem deve regular no equipo clássico?',
    type: 'calculation',
    correctAnswer: '42',
    explanation: 'Aplicamos a fórmula de gotas por minuto em base horária:\nGotas/min = Volume / (Tempo * 3)\nGotas/min = 500 / (4 * 3)\nGotas/min = 500 / 12\nGotas/min = 41.66 ≈ 42 gotas/min (aplicando arredondamento usual de gotejo).',
    source: 'Cálculos de Gotejamento - Slide 44',
    calculationSteps: [
      '1. Seleção da fórmula básica: Gotas/min = Volume em mL / (Horas de infusão * 3)',
      '2. Coleta de dados clínicos: Volume = 500 mL, Tempo = 4 horas',
      '3. Substituição na fórmula: Gotas/min = 500 / (4 * 3) = 500 / 12',
      '4. Divisão matemática: 500 / 12 = 41,66 gotas/min',
      '5. Arredondamento profissional na beira do leito: 42 gotas/min.'
    ]
  },
  {
    id: 'calc_med_13',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Prescrição de Heparina Sódica profilática de 2.500 UI por via subcutânea (SC) de 12/12h. No almoxarifado do setor há frascos-ampolas de Heparina contendo concentração de 5.000 UI por mL (5.000 UI/mL) e seringas milimetradas estéreis graduadas de 1 mL (seringas de insulina, onde cada 0,1 mL representa 10 divisões finas). Quantos mL do fármaco o técnico de enfermagem deve aspirar?',
    type: 'calculation',
    correctAnswer: '0.5',
    explanation: 'Montagem da proporção linear simples:\n5.000 UI -------- 1,0 mL\n2.500 UI -------- x mL\n5.000 * x = 2.500 * 1\n5.000x = 2.500\nx = 2.500 / 5.000 = 0,5 mL.\nO técnico deve aspirar exatamente 0,5 mL (ou 50 subdivisões da seringa de 1 mL).',
    source: 'Cálculos de Dosagens de Medicamentos - Slide 26',
    calculationSteps: [
      '1. Identificar concentração disposta: 5.000 UI estão contidas em cada 1 mL de Heparina líquida.',
      '2. Estrutura de três simples: 5000 UI -> 1 mL | 2500 UI -> x mL',
      '3. Cruzar produtos: 5000 * x = 2500',
      '4. Divisão linear: x = 2500 / 5000 = 0,5 mL de heparina.'
    ]
  },
  {
    id: 'vias_adm_10',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'A aplicação de vacinas e hormônios por Via Subcutânea (SC) exige técnica segura detalhada de prega tecidual. Quais são os sítios anatômicos comumente indicados para aplicação sistemática da via SC e quais os ângulos clássicos sugeridos para agulha dependendo de tecido adiposo individual?',
    type: 'multiple-choice',
    options: [
      'Grande glúteo e porção do tríceps proximal; ângulo reto de 90° apenas para agulhas maiores e magros.',
      'Porção posterior dos braços, quadrante periumbilical (abdômen), lateral externa das coxas ou superior do dorso (infraescapular); ângulo de 45° (com agulha longa convencional de 1,5 cm em magros) a 90° (utilizando agulhas ultracurtas menores de 1 cm ou em indivíduos obesos).',
      'Borda ulnar externa do punho e fossa poplítea posterior; ângulo fixo de 5° raspando epiderme.',
      'Canal palmar e tornozelo lateral; ângulo oblíquo de 30°.'
    ],
    correctAnswer: 'B',
    explanation: 'A via subcutânea ou hipodérmica (Slide 49) absorve medicamentos de forma lenta e contínua devido à menor densidade vascular deste tecido gorduroso abdominal, braquial ou coxal. O ajuste do ângulo de introdução (45° a 90°) baseia-se diretamente na espessura da prega e no tamanho de haste da agulha estéril disponível para prevenir dor periosteal profunda ou injeção acidental em fibras musculares íntimas.',
    source: 'Vias de Administração - Slide 49'
  },
  {
    id: 'vias_adm_11',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Ao planejar administrar uma injeção por via Intramuscular (IM) usando o músculo deltoide (região deltoidiana) em pacientes adultos saudáveis na atenção primária, qual o limite máximo volumétrico líquido recomendado pela literatura científica para este sítio muscular acessório?',
    type: 'multiple-choice',
    options: [
      'No máximo 5 mL de fármacos oleosos densos.',
      'Entre 3 mL e 4 mL de antibióticos concentrados.',
      'No máximo 1 mL (admitindo-se excepcionalmente até 1,5 mL caso o paciente apresente excelente e avantajada constituição de massa de deltoide).',
      'Até 10 mL divididos obrigatoriamente em duas punções de agulhas cirúrgicas.'
    ],
    correctAnswer: 'C',
    explanation: 'O deltoide é um músculo pequeno e desprovido de grandes bainhas anatômicas. A injeção de volumes acima de 1 mL a 1,5 mL neste local gera dores excruciantes, edema grave por compressão vascular, distensão extrema das fibras e maior risco de compressão do nervo radial ou circunflexo (Slide 52).',
    source: 'Vias de Administração - Sítio Deltoidiano Slide 52'
  },
  {
    id: 'vias_adm_12',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'No tocante à aplicação intramuscular profunda e segura de medicamentos em adultos de grande porte ou obesos (como benzilpenicilina ou diclofenaco sódico), qual calibre e comprimento de agulha estéril descartável é usualmente eleito para assegurar que a substância transpasse a epiderme/tecido subcutâneo e alcance o ventre muscular de forma eficiente?',
    type: 'multiple-choice',
    options: [
      'Agulha calibre 13 x 4,5 mm.',
      'Agulhas calibre 30 x 7 mm ou 30 x 8 mm.',
      'Agulha calibre 40 x 12 mm exclusivamente.',
      'Agulha calibre 20 x 5,5 mm.'
    ],
    correctAnswer: 'B',
    explanation: 'A escolha da agulha depende do biotipo do assistido. Para adultos saudáveis em músculo dorso ou ventroglúteo, a agulha de 30x7 mm ou 30x8 mm garante o depósito intramuscular seguro. Se utilizarmos agulhas muito curtas (ex: 20x5,5 ou 13x4,5), o fármaco corre o sério risco de ficar depositado apenas no tecido subcutâneo subcuticular, gerando nódulos de necrose necrosante dérmica tardia por irritação.',
    source: 'Vias de Administração - Materiais e Agulhas'
  },
  {
    id: 'elim_int_10',
    topic: 'Lavagem Intestinal',
    difficulty: 'Difícil',
    questionText: 'O preparo clínico e posicionamento do paciente no leito são vitais para o gotejamento confortável e retenção do enteroclisma/enema. Qual decúbito e posição específica o paciente deve assumir no leito para a realização do enteroclisma?',
    type: 'multiple-choice',
    options: [
      'Posição de Trendelenburg com as pernas suspensas por cintas.',
      'Decúbito lateral esquerdo com o membro inferior direito flectido em direção ao esterno (Posição de Sims), pois esta conformação facilita o fluxo natural e trânsito do líquido em direção ao cólon sigmoide e descendente.',
      'Decúbito dorsal plano com as pernas abertas sobre estribos (posição ginecológica).',
      'Decúbito lateral direito estrito com a coluna curvada.'
    ],
    correctAnswer: 'B',
    explanation: 'A anatomia do intestino grosso exibe o cólon sigmoide e descendente descendo pela parede cavitária abdominal esquerda. Posicionar o paciente em decúbito lateral esquerdo (posição de Sims) faz com que a gravidade acomode a solução de limpeza no curso anatômico, minimizando espasmos dolorosos imediatos e auxiliando na eliminação e limpeza de fezes retidas (Slide 45).',
    source: 'Lavagem intestinal - Slide 45'
  },
  {
    id: 'elim_int_11',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'A lavagem intestinal (enemas ou enteroclismas de esvaziamento) contra fecalomas impõe movimentos precisos. No entanto, o procedimento é formalmente contraindicado em quais patologias gástricas?',
    type: 'multiple-choice',
    options: [
      'Obstipação intestinal crônica severa.',
      'Retocolite ulcerativa ativa em fase de sangramento, apendicite aguda suspeita de abdômen agudo vascular inflamatório ou perfuração de alça conhecida.',
      'Excesso de flatulências alimentares pós-estágio dietético.',
      'Preparo cirúrgico pré-operatório para videocolonoscopias rotineiras.'
    ],
    correctAnswer: 'B',
    explanation: 'A infusão de grandes volumes de soluções laxativas em tecidos inflamados agudamente (como no apêndice inflamado ou reto ulcerativo) impõe estresse físico severo que pode romper a parede da alça, gerando vazamento de fezes para o peritônio, peritonite fecal de alta mortalidade e choque séptico intestinal (Slide 43).',
    source: 'Lavagem intestinal - Slide 43'
  },
  {
    id: 'sond_ves_10',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'O cateterismo vesical de alívio (feito com sonda reta simples de Nelaton) difere fundamentalmente do cateterismo vesical de demora (Foley) em quais aspectos operacionais e de indicação diagnóstica?',
    type: 'multiple-choice',
    options: [
      'O cateterismo de alívio dispensa assepsia cirúrgica avançada e pode ser passado sem luvas.',
      'O de alívio visa esvaziar a bexiga pontualmente (retenção aguda de urina, coleta de urina estéril de jato médio, exames) e é imediatamente retirado após drenagem total de urina, não apresentando balão de fixação interno que ancoraria no trígono pélvico.',
      'O de alívio deve permanecer no paciente por meses estipulados de tratamento diário de infecções biliar-urinárias.',
      'O de alívio serve unicamente para drenar secreções biliares profundas de pacientes graves acamados.'
    ],
    correctAnswer: 'B',
    explanation: 'A sonda de Nelaton (cateterismo de alívio) é flexível, de lúmen único e fina. O objetivo é retirar a urina e remover a sonda de imediato, e por este motivo não é dotada de balonete ou canal auxiliar para fixação. É um procedimento de técnica estéril profunda para prevenir infecção hospitalar secundária (Slide 60).',
    source: 'Sondagem Vesical - Tipos de Sondas Slide 60'
  },
  {
    id: 'sond_ves_11',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Para prevenir infecções do trato urinário associadas a cateterismo vesical (ITU-ACV) em pacientes em uso de SVD no leito de enfermaria, qual é uma das principais recomendações de biossegurança de enfermagem?',
    type: 'multiple-choice',
    options: [
      'Manter a bolsa coletora sempre apoiada nas cobertas de cima ou no colo do paciente.',
      'Manter e fixar a bolsa de urina permanentemente abaixo do nível da bexiga do paciente (livre e pendurada em grades baixas) para evitar o fluxo reverso gravitacional de urina colonizada para o trato urinário superior, além de esvaziá-la regularmente sem encostar a torneira no chão.',
      'Esvaziar o coletor de urina semanalmente para evitar contato aerossol.',
      'Infundir sabão bactericida de rotina por dentro do cano da sonda para lavar glândulas urinárias.'
    ],
    correctAnswer: 'B',
    explanation: 'No manejo de manutenção do cateter vesical estéril, o refluxo da urina retida na mangueira ou na bolsa é uma das principais causas de translocação bacteriana retrógrada e sepse urinária. Manter a bolsa abaixo da bexiga impede o refluxo. Zela-se também em nunca deixar a bolsa coletora encostar direta no solo clínico (Slides 65-66).',
    source: 'Sondagem Vesical - Cuidados Slide 65'
  },
  {
    id: 'antrop_7',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'O Cálculo do Índice de Massa Corporal (IMC) é rotineiramente aferido na semiologia básica. Se um estudante ou paciente apresenta peso de 80 kg e estatura de 1,60 m, qual do valores assevera seu IMC e sua exata classificação conforme a OMS?',
    type: 'multiple-choice',
    options: [
      'IMC de 25 kg/m²; classificado como Eutrófico (peso ideal adequado para os padrões de idade).',
      'IMC de 31,25 kg/m²; classificado como Obesidade Grau I.',
      'IMC de 19,4 kg/m²; classificado como Baixo Peso severo com risco de desidratação crônica.',
      'IMC de 42,0 kg/m²; classificado como Obesidade Mórbida Grau III.'
    ],
    correctAnswer: 'B',
    explanation: 'A fórmula matemática do IMC consiste em dividir o peso pelo quadrado da altura:\nIMC = Peso / (Altura * Altura)\nIMC = 80 / (1,60 * 1,60)\nIMC = 80 / 2,56 = 31,25 kg/m².\nSegundo a classificação da Organização Mundial da Saúde (OMS), valores de IMC situados entre 30,0 e 34,9 kg/m² configuram quadro clínico de Obesidade Grau I (Slide 5).',
    source: 'Medidas Antropométricas - Slide 5'
  },
  {
    id: 'antrop_8',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Para a exata e confiável aferição clínica da Circunferência de Cintura (CC) a fim de apurar riscos coronários, qual marco esquelético anatômico referencial deve guiar o posicionamento plano da fita métrica maleável?',
    type: 'multiple-choice',
    options: [
      'Logo na altura da penúltima costela aparente anterior.',
      'No ponto médio horizontal entre o rebordo costal inferior (última costela flutuante) e a crista ilíaca superior lateral (geralmente coincidente ou logo acima da cicatriz do umbigo em condições normais).',
      'No ponto 15 centímetros abaixo de qualquer espinha do púbis.',
      'Ao redor da coxa no nível superior reto da virilha.'
    ],
    correctAnswer: 'B',
    explanation: 'A medição padronizada da circunferência abdominal (Slide 6) dita o posicionamento da fita métrica no plano horizontal no ponto médio entre a crista ilíaca anterior superior e a margem costal lateral inferior. Recomenda-se realizar a leitura ao final do movimento expiratório suave normal do paciente, registrando os centímetros correspondentes.',
    source: 'Medidas Antropométricas - Slide 6'
  },
  // --- NOVAS QUESTÕES PROFUNDAS E DETALHADAS DE CADA PDF ---
  {
    id: 'sng_sne_13',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A ogiva pesada de mola de tungstênio (ou material radiopaco denso) inserida na ponta distal de uma Sonda de Dobhoff (sonda nasoenteral de poliuretano ou silicone) tem por finalidade assistencial primária:',
    type: 'multiple-choice',
    options: [
      'Servir como canal de irrigação rápida de soro salino para o esôfago posterior.',
      'Atuar como peso gravitacional e direcionador para que, auxiliada pela força de decúbito lateral direito e o peristaltismo gástrico normal, a sonda migre espontaneamente através do piloro até as porções post-pilóricas (duodeno/jejuno).',
      'Permitir o esmagamento ativo de resíduos ou comprimidos insolúveis na asa nasal.',
      'Saturar refluxos ácidos estomacais pelo vazamento constante de tungstênio estéril.'
    ],
    correctAnswer: 'B',
    explanation: 'As sondas de poliuretano (por exemplo, Dobhoff) são de calibre fino, extremamente flexíveis e confortáveis para nutrição enteral de médio a longo prazo. O peso distal denso radiopaco atua como guia gravitacional passivo guiado pelo peristaltismo normal gástrico para vencer a barreira esfincteriana do piloro (Slides 21-22).',
    source: 'SNG e SNE - Slide 22'
  },
  {
    id: 'sng_sne_14',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'Para prevenir a retenção de gordura e obstrução física de sondas nasoenterais, a lavagem ou flushing com água deve ser suspensa em pacientes de terapia intensiva sob ventilação mecânica ativa devido ao risco pulmonar.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A irrigação periódica de manutenção com 20 a 30 mL de água potável limpa (Slide 18 e 26) é indispensável para todos os pacientes em uso de SNG ou SNE, inclusive doentes de terapia intensiva sob ventilação mecânica, sob risco de obstrução rápida do lúmen por precipitação química de dietas enterais densas ou resíduos de fármacos.',
    source: 'SNG e SNE - Slide 18 e 26'
  },
  {
    id: 'calc_med_14',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Foi prescrita a infusão rápida de 500 mL de Soro Fisiológico (SF) 0,9% intravenoso para correr em exatamente 30 minutos (tempo menor que uma hora). Quantas gotas por minuto (gotas/min) o técnico em enfermagem deve programar no equipo tradicional por gravidade?',
    type: 'calculation',
    correctAnswer: '333',
    explanation: 'Como o tempo (T) na prescrição clínica é expresso em minutos (T < 1 hora), utilizamos obrigatoriamente a fórmula de gotejamento correspondente em minutos: Gotas/min = (Volume em mL * 20) / Tempo em minutos. Substituindo os valores: Gotas/min = (500 * 20) / 30 = 10000 / 30 = 333,33 ≈ 333 gotas/min.',
    source: 'Cálculos de Gotejamento - Slide 42',
    calculationSteps: [
      '1. Seleção da fórmula conveniente para tempo de infusão menor que 1h (em minutos): Gotas/min = (Volume * 20) / Tempo (minutos)',
      '2. Coleta das variáveis: Volume = 500 mL, Tempo = 30 minutos',
      '3. Substituir valores: Gotas/min = (500 * 20) / 30 = 10000 / 30',
      '4. Resultados: 10000 / 30 = 333,33 gotas/min',
      '5. Arredondamento padrão: 333 gotas/min.'
    ]
  },
  {
    id: 'calc_med_15',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'O médico prescreveu Soro Glicosado (SG) concentrado a 15% contendo volume de 500 mL. No posto, o técnico dispõe apenas de bolsas de Soro Glicosado (SG) 5% de 500 mL e ampolas de Glicose hipertônica a 50% contendo volume de 10 mL. Quantas ampolas de Glicose 50% de 10 mL o técnico deve aspirar e injetar na bolsa de SG 5% para transformá-lo na concentração exata prescrita?',
    type: 'calculation',
    correctAnswer: '10',
    explanation: '1. Calcular a quantidade de glicose pura necessária (15%): 15g em 100mL -> x g em 500mL => x = 75 g.\n2. Calcular a glicose já presente no soro disponível (5%): 5g em 100mL -> y g em 500mL => y = 25 g.\n3. Encontrar a massa a ser adicionada: 75 g - 25 g = 50 g de glicose pura.\n4. Calcular a glicose de cada ampola de 50% de 10 mL: 50g em 100mL -> z g em 10mL => z = 5 g por ampola.\n5. Calcular número de ampolas necessárias: 50 g necessárias / 5 g por ampola = 10 ampolas.',
    source: 'Cálculo de Medicamentos - Slides 39 e 40',
    calculationSteps: [
      '1. Calcular glicose pura ideal no SG 15% (500 mL): 15 g * 5 = 75 g de glicose',
      '2. Calcular glicose remanescente no SG 5% (500 mL): 5 g * 5 = 25 g de glicose',
      '3. Definir déficit de massa: 75 g - 25 g = 50 g de glicose pura necessária para adição',
      '4. Determinar concentração da ampola (Glicose 50% de 10 mL): 5g de glicose em cada ampola',
      '5. Dividir déficit pela massa da ampola: 50 g / 5 g = 10 ampolas.'
    ]
  },
  {
    id: 'calc_med_16',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Foi prescrita Insulina Regular humana de 12 UI por via subcutânea. No almoxarifado há frascos contendo Insulina de 100 UI/mL, mas o setor possui apenas seringas descartáveis comuns graduadas de 3 mL (onde cada 1 mL corresponde a 100 subdivisões milimetradas). Quantos mL de insulina o técnico em enfermagem deve aspirar na seringas de 3 mL para cumprir a dose exata?',
    type: 'calculation',
    correctAnswer: '0.12',
    explanation: 'Montamos a regra de três simples utilizando a escala de correspondência volumétrica de 1 mL para seringas descartáveis comuns sem escala dedicada de insulina (onde 100 UI estão contidas em 1 mL):\n100 UI -------- 1,0 mL\n12 UI -------- x mL\n100 * x = 12 * 1\n100x = 12\nx = 12 / 100 = 0,12 mL.\nO profissional deve aspirar exatamente 0,12 mL (o que equivale a 12 subdivisões finas da graduação da seringa comum).',
    source: 'Cálculos com Insulina de Seringa Comum - Slide 34',
    calculationSteps: [
      '1. Fixar a formulação básica do frasco de insulina de mercado: 100 UI equivalem a 1 mL',
      '2. Montar proporção linear com a seringa volumétrica: 100 UI -> 1 mL | 12 UI -> x mL',
      '3. Multiplicação em cruz: 100 * x = 12',
      '4. Divisão correspondente: x = 12 / 100 = 0,12 mL.'
    ]
  },
  {
    id: 'calc_med_17',
    topic: 'Cálculo de Medicação',
    difficulty: 'Médio',
    questionText: 'Prescrição de infusão venosa de 500 mL de SF 0,9% para correr em 2 horas e 30 minutos por gravidade. Quantas gotas por minuto (macrogotas/min) o técnico em enfermagem deve programar no gotejador de rotina?',
    type: 'calculation',
    correctAnswer: '67',
    explanation: '1. Converter o tempo de horas para minutos: 2 horas e 30 minutos = 150 minutos.\n2. Aplicar a fórmula de gotas em minutos (tempo < 3h ou frações em min): Gotas/min = (Volume em mL * 20) / Tempo em minutos.\n3. Substituindo: Gotas/min = (500 * 20) / 150 = 10000 / 150 = 66,66 ≈ 67 gotas/min (arredondamento usual).',
    source: 'Cálculo de Gotejamento em Minutos - Slide 48',
    calculationSteps: [
      '1. Converter duração fracionada total para minutos: 2h30min = 150 minutos',
      '2. Empregar fórmula de gotejo para escala em minutos: Gotas/min = (Volume * 20) / Tempo em minutos',
      '3. Substituir valores: Gotas/min = (500 * 20) / 150 = 10000 / 150',
      '4. Divisão matemática: 10000 / 150 = 66,66 gotas/min',
      '5. Aplicar o arredondamento profissional para inteiro: 67 gotas/min.'
    ]
  },
  {
    id: 'calc_med_18',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'Prescrição médica de Penicilina Cristalina de 1.000.000 UI por via intravenosa de 4/4h. No setor de enfermagem, está disponível para reconstituição frasco-ampola de 5.000.000 UI (composto de pó liofilizado que ocupa volume estático de 2 mL no frasco). Se o técnico em enfermagem reconstituir o frasco adicionando exatos 8 mL de diluente (Água Destilada estéril, totalizando 10 mL de volume final), quantos mL ele deve aspirar para obter a dose exata prescrita?',
    type: 'calculation',
    correctAnswer: '2',
    explanation: 'A Penicilina Cristalina de 5.000.000 UI possui pó solúvel que ocupa espaço interno correspondendo a 2 mL. Se adicionamos 8 mL de solvente, o volume final líquido homogeneizado é de exatos 10 mL (conforme Slide 26).\nMontamos a proporção linear simples:\n5.000.000 UI -------- 10 mL\n1.000.000 UI -------- x mL\n5.000.000x = 10.000.000\nx = 10.000.000 / 5.000.000\nx = 2 mL.',
    source: 'Penicilina Cristalina Reconstituição - Slide 26 e 31',
    calculationSteps: [
      '1. Identificar volume real homogeneizado: Cristais insolúveis liofilizados ocupam 2 mL. Adicionando 8 mL de água detilada, resulta em 10 mL de solução',
      '2. Formular regra de três simples: 5.000.000 UI está contido em 10 mL, logo 1.000.000 UI está contido em x mL',
      '3. Multiplicar em cruz: 5.000.000 * x = 10.000.000',
      '4. Divisão final simplificada: x = 2 mL.'
    ]
  },
  {
    id: 'calc_med_19',
    topic: 'Cálculo de Medicação',
    difficulty: 'Difícil',
    questionText: 'O médico prescreveu Heparina Sódica profilática de 2.000 UI por via subcutânea (SC) de 12/12h. O hospital dispõe apenas de ampolas de Heparina contendo concentração ultra-concentrada de 5.000 UI em apenas 0,25 mL (5.000 UI/0,25 mL) de volume. Quantos mL o técnico de enfermagem deve aspirar utilizando seringas milimetradas estéreis de 1 mL para cumprir a dose exata?',
    type: 'calculation',
    correctAnswer: '0.1',
    explanation: 'Montamos a proporção linear simples cruzando a concentração real do frasco e o volume minguado da ampolagem:\n5.000 UI -------- 0,25 mL\n2.000 UI -------- x mL\n5.000x = 2.000 * 0,25\n5.000x = 500\nx = 500 / 5.000 = 0,1 mL.\nO profissional deve aspirar exatamente 0,1 mL (correspondendo a 10 divisões finas da seringa de 1 mL).',
    source: 'Cálculos de Heparina Concentrada - Slide 35',
    calculationSteps: [
      '1. Coletar concentração do disponível: 5.000 UI contidas em 0,25 mL',
      '2. Estruturar a regra de três simples: 5.000 UI está para 0,25 mL, assim como 2.000 UI está para x mL',
      '3. Resolver multiplicação cruzada: 5.000 * x = 2.000 * 0,25 = 500',
      '4. Dividir valores correspondentes: x = 500 / 5.000 = 0,1 mL.'
    ]
  },
  {
    id: 'vias_adm_10',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'O Artigo 44 da Resolução COFEN nº 564/2017 (Código de Ética de Enfermagem) versa sobre as prescrições médicas na rotina de enfermarias. Assinale qual conduta é permitida ao profissional de enfermagem segundo este fragmento regulamentar:',
    type: 'multiple-choice',
    options: [
      'Sempre administrar medicamentos por teleprescrição telefônica informal sem registro oficial por conveniência.',
      'Recusar-se, em conformidade ética, a administrar qualquer tipo de medicamento que venha desprovido de uma prescrição escrita legível assente em registro oficial, salvo em situações de extrema emergência clínica de acordo com os protocolos institucionais oficiais vigentes.',
      'Realizar alterações de via e dosagem caso suspeite de ineficácia.',
      'Permitir que auxiliares de enfermagem subscrevam autônoma receita medicamentosa de suporte.'
    ],
    correctAnswer: 'B',
    explanation: 'De acordo com o Art. 44 (Vias de Administração - Slide 3), é terminantemente vedada a injeção ou infusão de fármacos na ausência de prescrição médica manuscrita, assinada e carimbada de forma correta, estipulando-se proteção apenas para urgências graves sob abrigo de protocolos aprovados legalmente no serviço.',
    source: 'Vias de Administração Parte 1 - Slide 3'
  },
  {
    id: 'vias_adm_11',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'A via sublingual (VSL) de medicação (por exemplo, isordil ou toragesic) possui excelente velocidade de transposição e absorção tecidual periférica no leito de enfermaria. Assinale qual elemento anatômico e fisiológico assegura essa expressiva rapidez terapêutica:',
    type: 'multiple-choice',
    options: [
      'A acidez gástrica sob o epitélio bucal que acelera a quebra de solutos.',
      'A extensa vascularização capilar sanguínea profunda presente na mucosa sublingual somada à delicada espessura de revestimento deste tecido pélvico bucal, permitindo a absorção direta para a circulação sistêmica e anulando a inativação bioquímica do metabolismo hepático de primeira passagem.',
      'A diluição salivar do fármaco pela amilase que decompõe proteínas no estômago.',
      'A baixa absorção gástrica celular da mucosa bucal.'
    ],
    correctAnswer: 'B',
    explanation: 'A mucosa sublingual (Slide 33) é profusamente irrigada por ramificações vasculares que absorvem com tremenda rapidez qualquer substância de peso molecular reduzido, inserindo-a diretamente no átrio circulatório venoso sem transitar pelo esôfago ou estômago, o que impede a inativação inicial pré-sistêmica promovida pelas enzimas do fígado.',
    source: 'Vias de Administração Parte 1 - Slide 33'
  },
  {
    id: 'vias_adm_12',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'A aplicação de injeções por Via Intramuscular profunda exige o domínio de técnicas para prevenir complicações. Com relação à técnica do trajeto em "Z" (Z-track), assinale qual a justificativa de sua indicação assistencial em enfermaria:',
    type: 'multiple-choice',
    options: [
      'Evita dores cutâneas geradas pela punção perpendicular rápida.',
      'Veda hermeticamente o canal de inserção linear da agulha através do deslocamento do tecido subcutâneo antes da aplicação. Isso barra o escape ou refluxo do fármaco para as camadas superficiais subcutâneas adiposas (evitando necrose local, cicatrizes hipertróficas ou nódulos inflamados de medicações irritantes como o ferro intramuscular).',
      'Elimina todo e qualquer vestígio de dor dural.',
      'Reduz a necessidade imediata de aspirar à beira do leito.'
    ],
    correctAnswer: 'B',
    explanation: 'A técnica em "Z" consiste em afastar mecanicamente para o lado a pele e o tecido celular subcutâneo com a mão não-dominante antes de espetar perpendicularmente a haste metálica da agulha. Após a injeção e reposicionamento natural do tecido superficial, o cano linear de progressão é bloqueado por lacre físico (Vias de Administração - Sítios IM).',
    source: 'Vias de Administração - Técnicas de Aplicação IM'
  },
  {
    id: 'vias_adm_13',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Durante a administração vaginal de óvulos ou pomadas ginecológicas com bico aplicador plástico, qual cuidado de assepsia e técnica deve orientar o técnico de enfermagem?',
    type: 'multiple-choice',
    options: [
      'Realizar aplicação sem necessidade de higiene íntima por ser mucosa protegida.',
      'Promover higiene íntima prévia cuidadosa da região perineal, assegurar estrito respeito à privacidade do paciente utilizando biombos, posicionar o paciente em decúbito dorsal com pernas flexionadas (litotomia) e introduzir delicadamente o aplicador direcionando o curso para trás e para cima, seguindo a curvatura vaginal normal.',
      'O aplicador plástico deve ser introduzido em ângulo perpendicular reto de 90° em direção ao reto.',
      'Orientar o paciente a deitar-se de abdômen para baixo imediatamente após aplicação para reidratação.'
    ],
    correctAnswer: 'B',
    explanation: 'A mucosa vaginal é de revestimento delicado. A assepsia prévia e posicionamento respeitoso em biombos e litotomia asseguram uma aplicação confortável pós-absorção. Direcionar o aplicador levemente para trás e para cima (Slide 41) respeita o canal vaginal posterior, evitando traumas pélvicos na uretra ou colo uterino.',
    source: 'Vias de Administração Parte 1 - Slide 41'
  },
  {
    id: 'elim_int_12',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'O enema de bário (enema opaco) corresponde a uma via laxativa hospitalar recomendada para pacientes com severa prisão de ventre, cujo objetivo principal é amolecer as fezes compactadas do cólon.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'O enema de bário ou opaco (Slide 41) não possui finalidade terapêutica reconstrutiva de amolecimento fecal ou tratamento laxativo de prisão de ventre. Consiste em procedimento diagnóstico radiológico onde soluções de contraste radiopaco salino de bário são administradas por via retal, visando mapear radiograficamente a conformidade morfológica e patologias do cólon.',
    source: 'Lavagem Intestinal - Slide 41'
  },
  {
    id: 'elim_int_13',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Qual modalidade de enema retal é especificamente prescrita para revestir e amolecer o fecaloma (fezes desidratadas endurecidas) instalados em idosos e doentes acamados, facilitando sua expulsão confortável e protegendo as mucosas de traumas anal-fissurais?',
    type: 'multiple-choice',
    options: [
      'Enema Medicamentoso Estéril de Neomicina.',
      'Enema Carminativo contra flatos gástricos.',
      'Enema Oleoso, que lubrifica o cólon e auxilia as fezes ressecadas a absorver o óleo, tornando-as macias e flexíveis.',
      'Clister hipotônico de Fleet Enema com solução salina ácida.'
    ],
    correctAnswer: 'C',
    explanation: 'O enema oleoso (Slide 41) lubrifica o curso do cólon. As fezes de compactação ressecadas absorvem e retêm os óleos minerais ou vegetais dispersos no lúmen, acarretando amolecimento sem induzir contrações espáticas mecânicas excessivas das alças intestinais.',
    source: 'Lavagem Intestinal - Slide 41'
  },
  {
    id: 'elim_int_14',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'A lavagem intestinal exige a progressão de uma sonda lubrificada pelo ânus. Para o sucesso no procedimento clínico de grandes enteroclismas clássicos em pacientes adultos, qual o comprimento seguro e padronizado de inserção da sonda retal?',
    type: 'multiple-choice',
    options: [
      'De 1 a 2 cm de profundidade epidermal local.',
      'De 25 a 30 cm de profundidade até o cólon descendente.',
      'De 7 a 10 cm através do canal retal, permitindo a transposição livre da válvula anal.',
      'A sonda deve ser introduzida em sua totalidade reta de 40 cm.'
    ],
    correctAnswer: 'C',
    explanation: 'A progressão linear cuidadosa da sonda retal no adulto de enfermaria deve estender-se de 7 a 10 cm (Slide 45) para transpor com eficácia a curvatura anal e fixar o fluxo da solução de foma cômoda no interior do reto, minimizando o risco de perfurações intestinais severas por inserções excessivamente profundas.',
    source: 'Lavagem Intestinal - Slide 45'
  },
  {
    id: 'elim_int_15',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Ao descrever o débito hídrico fecal de um paciente submetido a enema, o técnico reporta fezes esteatorreicas. Qual propriedade de coloração e aspecto define semiologicamente esse achado digestivo?',
    type: 'multiple-choice',
    options: [
      'Fezes com traços de sangue vivo brilhante na periferia.',
      'Presença anormal de gordura não absorvida, conferindo cor esbranquiçada/amarelada pálida, aspecto brilhante espumoso nas comadres e odor extremamente fétido e rançoso decorrente de má digestão de lipídeos.',
      'Fezes em formato escibaloso esférico e pétreo cinzento.',
      'Fezes escuras negras fétidas devido a hemorragia gástrica.'
    ],
    correctAnswer: 'B',
    explanation: 'Esteatorreia (Slide 39) decorre da deposição maciça de frações lipídicas intestinais não assimiladas no bolo fecal, manifestação típica de enfermidades absortivas biliares, duodenais ou colecistites, exalando odor repugnante típico de gordura oxidada rançosa.',
    source: 'Lavagem Intestinal - Slide 39'
  },
  {
    id: 'sond_ves_12',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'O cateterismo vesical (inserção de sondas urinárias de demora ou alívio pelo meato uretral estéril) é procedimento invasivo e causador potencial de sepse bacteriana retrógrada. Qual o papel regulamentar profissional de enfermagem assegurado pelo COFEN para tal ato?',
    type: 'multiple-choice',
    options: [
      'O técnico tem autonomia livre e isolada para introduzir o cateter vesical em qualquer cirurgia.',
      'A inserção física do cateter vesical estéril (alívio ou demora) é atividade invasiva e privativa do Enfermeiro (ou Médico), conquanto atue o técnico ativamente organizando a mesa, preenchendo bacias, assistindo e mantendo o coletor sob cuidados diários.',
      'O técnico de enfermagem é proibido por completo de tocar no circuito de SVD devido a riscos bioéticos.',
      'O técnico deve realizar exclusivamente a passagem em ambientes ambulatoriais não-estéreis.'
    ],
    correctAnswer: 'B',
    explanation: 'A inserção da sonda na uretra demanda conhecimentos complexos e alto rigor de técnica asséptica para evitar traumas uretral-prostáticos e infecção do trato urinário associada ao cateterismo (ITU-ACV). Sendo assim, a inserção é restrita de direito ao Enfermeiro habilitado ou ao Médico (Slide 59 e Exercício 1).',
    source: 'Sondagem Vesical - Slide 59 e Exercício 1'
  },
  {
    id: 'sond_ves_13',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'No tocante às características diagnósticas da urina de pacientes sondados no leito de enfermaria, como é denominado o achado urinário com urina de aspecto leitoso, turvo e grumoso, acompanhado de odor fétido?',
    type: 'multiple-choice',
    options: [
      'Hematúria crônica por microperfurações vasculares.',
      'Glicosúria excessiva decorrente de jejuns prolongados.',
      'Piúria (presença anormal de leucócitos/pus na urina), indicador clássico inflamatório-febril de infecção ativa.',
      'Presença inócua de piridium anestésico biliar.'
    ],
    correctAnswer: 'C',
    explanation: 'A piúria (Slide 72) é detectada visualmente pelo aspecto semelhante ao leite fluido ou turvação densa com sedimento esbranquiçado amarelado, composto de miríades de células imunes (leucócitos) de combate, caracterizando quadro infeccioso ativo do trato urológico.',
    source: 'Sondagem Vesical - Termos Técnicos Slide 72'
  },
  {
    id: 'sond_ves_14',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Para insuflar o balonete de fixação interna da sonda vesical de demora (Foley), o técnico em enfermagem deve preferir exclusivamente solução salina (SF 0,9%) estéril.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Insuflar balonete de demora com Soro Fisiológico (SF 0,9%) é terminantemente proibido. A água da solução salina evapora através do silicone/látex da sonda ao longo do tempo, restando cristais de sódio que se acumulam e entopem a fina válvula piloto pélvica lateral. Isso impede a desinsuflação posterior na retirada, exigindo punções dolorosas ou cirurgias uretrais graves de bexiga (Slide 64).',
    source: 'Sondagem Vesical - Slide 64'
  },
  {
    id: 'antrop_9',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'A mensuração confiável e fidedigna da estatura linear é vital para avaliar o IMC corporal e prescrever doses de quimioterapia. Em idosos ou acamados impossibilitados de ficar de pé, qual modelo estimativo matemático é usualmente empregado nas enfermarias brasileiras?',
    type: 'multiple-choice',
    options: [
      'Estatura por anamnese verbal baseada no perímetro do pescoço.',
      'Fórmulas matemáticas de Chumlea (que estimam indiretamente a estatura por meio do comprimento linear da Altura do Joelho e idade cronológica do paciente acamado).',
      'Cálculo cartesiano de Chumlea somando peso e distância do trocanter.',
      'Medição linear da derme utilizando fitas de assepsia vaginal.'
    ],
    correctAnswer: 'B',
    explanation: 'A equação estimativa de Chumlea (Slide 12) avalia a proporcionalidade física a partir do fêmur/joelho e idade do doente pélvico, superando a barreira mecânica do doente cirúrgico paralisado no leito.',
    source: 'Medidas Antropométricas - Slide 12'
  },
  {
    id: 'antrop_10',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'A biossegurança é degrau vital durante a execução prática diária de pesagens e tomadas antropométricas no hospital. No tocante aos cuidados higiênicos, assinale qual dever profissional de enfermagem se impõe:',
    type: 'multiple-choice',
    options: [
      'Utilizar luvas estéreis novas no manuseio de fitas descartáveis sem higienizar balanças.',
      'Realizar a desinfecção mecânica minuciosa de fitas métricas, cubas da balança pediátrica ou a fita maleável com álcool 70% ou desinfetante oficial padronizado imediatamente antes e após pesagens individuais de cada paciente para barrar a transmissão cruzada de enterobactérias ou fungos dérmicos.',
      'Evitar o contato com a superfície metálica estéril cobrindo-a com jornais do dia.',
      'Higienizar materiais antropométricos apenas com solução salina gástrica morna.'
    ],
    correctAnswer: 'B',
    explanation: 'Instrumentos antropométricos constituem fômite de altíssima transmissão de infecções oportunistas hospitalares por contato repetido com dermes íntegras ou feridas (fita métrica, estadiômetros, balanças, Slide 7). Exige-se assepsia estrita.',
    source: 'Medidas Antropométricas - Slide 7'
  },
  {
    id: 'oxig_1',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Qual o nome do procedimento assistencial de enfermagem focado na desobstrução física de secreções viscosas das vias aéreas buco-nasais com o emprego de cateter conectado a sistema de vácuo, visando restaurar livres trocas gasosas no doente?',
    type: 'multiple-choice',
    options: [
      'Oxigenoterapia por cateter nasofaríngeo.',
      'Aspiração de Secreções de Vias Aéreas (superiores e inferiores).',
      'Lavagem pulmonar endotraqueal com lúmen duplo.',
      'Umidificação por névoas quentes de Glicose.'
    ],
    correctAnswer: 'B',
    explanation: 'A aspiração (Slide 15) remove secreções traqueobrônquicas e orofaríngeas que obstruem fisicamente os alvéolos e vias aéreas superiores, garantindo a permeabilidade e a restauração do padrão de saturação normal de oxigênio de repouso (Slide 15).',
    source: 'Oxigenoterapia e Aspiração - Slide 15'
  },
  {
    id: 'oxig_2',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'O cateter nasal tipo óculos (um elemento central de baixo fluxo de O2) possui regulamentação assistencial restrita para taxas volumétricas específicas de fluxo gasoso. Qual o limite de infusão clínica preconizado pelos guias de segurança para este dispositivo?',
    type: 'multiple-choice',
    options: [
      'De 1 a 6 Litros por minuto (L/min), ofertando fração de FiO2 ajustada entre 21% e 44% de O2.',
      'Duração livre contínua acima de 20 L/min com ar sob pressão alta.',
      'Exclusivamente gotas de 0,5 mL de oxigênio destilado hora.',
      'A infusão é de alto fluxo, variando de 10 a 15 L/min.'
    ],
    correctAnswer: 'A',
    explanation: 'O cateter nasal tipo óculos (Slide 8 e 27) é ajustado para operar entre 1 L/min e 6 L/min. Taxas de vazão volumétrica superiores a 6 L/min não proporcionam aumento concomitante de FiO2 inspirada efetiva e geram dores lancinantes cefálicas por distensão do seio da face e sangramentos traumáticos da integridade nasal.',
    source: 'Oxigenoterapia e Aspiração - Slides 8 e 27'
  },
  {
    id: 'oxig_3',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Dentre os dispositivos de alto fluxo está a consagrada Máscara de Venturi. Por qual motivo clínico estrutural ela representa o sistema mais seguro e indicado para suporte ventilatório de doentes acometidos por DPOC retentores de dióxido de carbono?',
    type: 'multiple-choice',
    options: [
      'A máscara de Venturi possui amortecedor de tungstênio pélvico contra arritmias corporais.',
      'Fornece oxigênio em frações inspiradas (FiO2) exatas, fixas, estáveis e conhecidas do paciente independente do padrão ou frequência de respiração do doente, ajustado pelo arraste de ar ambiente por bicos plásticos dosadores de cores correspondentes (orifícios físicos diversos de 24% a 50% de O2).',
      'Fornece reinalação profunda de gases úmidos retidos estomacalmente.',
      'Permite o fornecimento sob sistema fechado de 100% de ar puro sem arraste.'
    ],
    correctAnswer: 'B',
    explanation: 'O bico Venturi (Slide 20-21) titula a mistura por arraste aerodinâmico estático. Isso impede flutuações na FiO2 inspirada, o que é de crucial segurança aos retentores de gás carbônico (DPOC), os quais perderiam o drive reflexo respiratório hipóxico bulbar caso submetidos a frações de oxigênio excessivas pânicas.',
    source: 'Oxigenoterapia e Aspiração - Slides 20 e 21'
  },
  {
    id: 'oxig_4',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'O umidificador de oxigênio serve para evitar o ressecamento celular grave das mucosas nasofaríngeas. Qual solução deve ser sistematicamente adicionada ao reservatório do copo umidificador à beira do leito e qual a razão técnica urológica para tal restrição?',
    type: 'multiple-choice',
    options: [
      'Soro Fisiológico (SF 0,9%), visando reidratar os brônquios com sais emolientes.',
      'Água Destilada estéril livre, dado que soluções salinas (SF) se cristalizam rapidamente sob fluxo de ar, bloqueando de forma física os orifícios do borbulhador de gotejo, danificando os fluxômetros e expondo o pulmão a infecções graves bacterianas.',
      'Soluções anti-sépticas glicerinadas estéreis de neomicina oral.',
      'Não se utiliza líquido, umidificando-se apenas por infusão de soro na sonda.'
    ],
    correctAnswer: 'B',
    explanation: 'A evaporação contínua do Soro Fisiológico (Slide 12) precipita cristais sólidos de sódio clorético nas hastes internas e nos poros do borbulhador, alterando a vazão, gerando caldos infecciosos bacteriológicos retrógrados pulmonares e inutilizando o circuito médico de oxigenação. Deve-se empregar unicamente Água Destilada estéril.',
    source: 'Oxigenoterapia e Aspiração - Slide 12'
  },
  {
    id: 'oxig_5',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Consoante os pareceres do COFEN, a aspiração endotraqueal pânicas de vias aéreas em doentes intubados sob ventilação mecânica invasiva ou em traqueostomizados graves no leito de UTI é ato regulamentar de competência de quem?',
    type: 'multiple-choice',
    options: [
      'O técnico de enfermagem tem autonomia privativa para executar o procedimento de alta complexidade em pacientes graves sem Enfermeiro.',
      'É atividade privativa do Enfermeiro (ou do Médico) por consistir em manejo de alta complexidade técnica e iminência de intercorrências respiratórias agudas, cabendo contudo ao técnico aspirar doentes crônicos ou não graves estáveis.',
      'Pode ser confiada a cuidadores ou auxiliares de forma geral sob supervisão telefônica.',
      'Deve ser executado unicamente se o paciente apresentar diurese residual menor que 100 mL.'
    ],
    correctAnswer: 'B',
    explanation: 'A Lei do Exercício da Enfermagem (Slide 15 e 36) e a Resolução COFEN 557/2017 fixam a aspiração de vias aéreas invasivas de doentes críticos pós-intubação ou TQT como privativo de Enfermeiro ou dependente de prescrição direta assistida, dado o potencial de lesão e instabilidade vagal-cardiogênica repentina nos doentes graves.',
    source: 'Oxigenoterapia e Aspiração - Slides 15 e 36'
  },
  {
    id: 'oxig_6',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Durante a execução técnica de Aspiração buco-nasal, o técnico de enfermagem deve manter o circuito de sucção de vácuo ativado ininterruptamente desde a inserção nas narinas até a retirada final da sonda.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A sonda flexível descartável estéril deve ser introduzida sem sucção (Slide 37) para evitar que o vácuo puxe e dilacere a mucosa ao longo da fossa de inserção. A pressão de vácuo deve ser liberada de forma intermitente (girando a sonda circularmente de forma suave, sem movimentos de vaivém bruscos) APENAS durante a tração voluntária lenta de recuo, durando no máximo de 2 a 5 segundos por entrada.',
    source: 'Oxigenoterapia e Aspiração - Slides 15 e 37'
  },
  {
    id: 'oxig_7',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'O tratamento assistencial por nebulizações e inalações clínicas utiliza vapores formados por fluxo gasoso pânicos. Quais finalidades terapêuticas básicas justificam esse recurso médico?',
    type: 'multiple-choice',
    options: [
      'Provocar bloqueios pélvicos de secreções para descompressão estomacal.',
      'Desobstruir o canal respiratório (com broncodilatadores), solubilizar e diluir o muco denso colado em brônquios (pelo soro), reidratar mucosas e vias respiratórias ressecadas e facilitar a expectoração natural sob repouso.',
      'Medicação anti-séptica em regime de sistema aberto biliar.',
      'Substituir a necessidade de oxigênio adicionados por cateter sob DPOC.'
    ],
    correctAnswer: 'B',
    explanation: 'A névoa úmida (Slide 16) homogeneíza medicamentos diluidores brônquicos como Berotec ou Atrovent diretamente na superfície das membranas pulmonares, estimulando desobstrução rápida, amaciamento de escarros e repouso de padrão estritamente fisiológico confortável.',
    source: 'Oxigenoterapia e Aspiração - Slide 16'
  },
  {
    id: 'oxig_8',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'A pneumonia associada à assistência (infecção nosocomial de vias aéreas) é complicação severa. Para mitigá-la na rotina de enfermarias, quais tempos máximos de troca e assepsia clínica de umidificadores e copos nebulizadores devem conduzir o técnico?',
    type: 'multiple-choice',
    options: [
      'Não há limite térmico ou higiênico, deitando-se apenas após turvação fétida.',
      'Trocar e desinfectar sistemas umidificadores de O2 e cateter nasal a cada 24 horas consecutivas de uso, e higienizar ou substituir os copos de nebulização medicinal a cada 12 horas consecutivas.',
      'Os reservatórios de água estéril de Venturi são substituídos apenas semanalmente.',
      'Os equipos umidificadores são limpos exclusivamente pelos enfermeiros no fim do mês.'
    ],
    correctAnswer: 'B',
    explanation: 'A contaminação retrógrada em reservatórios (Slide 33) é evitada realizando-se trocas rígidas. A fita de O2/umidificador a cada 24h e o nebulizador a cada 12h evitam a proliferação bacteriana que causaria infecções retrógradas.',
    source: 'Oxigenoterapia e Aspiração - Recomendações Slide 33'
  },
  {
    id: 'oxig_9',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'O excesso de O2 regulado por fluxos elevados sem suporte médico é reconhecido como deletério. Qual o mecanismo patológico adverso decorrente do estresse tóxico por hiperóxia prolongada no paciente retentor crônico de CO2?',
    type: 'multiple-choice',
    options: [
      'Estimulação de cólicas intestinais seguidas de diarréia pélvica.',
      'Depressão do centro respiratório bulbar (anulação do drive respiratório em decorrência da saturação súbita de O2), atelectasias por lesão de endotélio alveolar, tosse seca severa irritativa e desidratação profunda de mucosas.',
      'Inversão do fluxo de diurese vesical com anúria.',
      'Aceleração biliar com queimação mecânica profunda.'
    ],
    correctAnswer: 'B',
    explanation: 'Pacientes retentores crônicos dependem da baixa saturação púlmonar de O2 (leves incentivos hipóxicos no glomo carotídeo) para respirar. Oferecer frações exaradas de O2 (Slide 38) derruba reflexos, provocando parada respiratória com acidose e fibroses por estresse endotelial alveolar-capilar (atelectasias, lesão ciliar).',
    source: 'Oxigenoterapia e Aspiração - Slide 38'
  },
  {
    id: 'oxig_10',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'A oxigenoterapia em câmara hiperbárica submete o paciente a oxigênio puro sob pressões elevadas. Assinale qual patologia representa sua principal indicação assistencial e qual se constitui em contraindicação absoluta:',
    type: 'multiple-choice',
    options: [
      'Indicada para tratamento de febre pediátrica; contraindicada em infecções urinárias.',
      'Indicada para melhora de feridas isquêmicas de difícil cicatrização (pé diabético), osteomielite refratária e intoxicações graves por Monóxido de Carbono (CO); contraindicada de forma absoluta na presença de Pneumotórax não tratado.',
      'Indicada exclusivamente para esvaziar fecalomas em apendicite ativa bacteriana.',
      'Indicada para refluxo biliar gástrico; contraindicada em hipotensões pélvicas.'
    ],
    correctAnswer: 'B',
    explanation: 'A alta hiperoxigenação pânicas estimula neoangiogênese e cicatrização de escaras isquêmicas refratárias sãs (Slide 29). Constitui contraindicação absoluta soberana o Pneumotórax por risco de expansão rápida traumática de bolhas pulmonares hipertensivas.',
    source: 'Oxigenoterapia e Aspiração - Slide 29'
  },
  {
    id: 'oxig_11',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'A máscara com reservatório (não reinalante) possui válvulas unidirecionais exclusivas de exalação que impedem que o ar expirado com gás carbônico retorne para a bolsa de recarga de oxigênio estéril.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'De acordo com o Slide 24 do material de Sistemas com Reservatório, a máscara não reinalante conta com pequenas tampas ou membranas circulares de válvula unidirecional que forçam os gases exalados do pulmão a sair pelas ranhuras ambientais, garantindo respiração pura de O2 do saco coletor auxiliar graduado.',
    source: 'Sistemas com Reservatório - Slide 24'
  },
  {
    id: 'oxig_12',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'A regulação milimétrica do nível de vácuo no aspirador cirúrgico é vital antes de prosseguir com a aspiração clínica de vias aéreas por perigos de lesão. Qual escala de pressão de sucção deve pautar o profissional?',
    type: 'multiple-choice',
    options: [
      'Pressão de vácuo livre superior a 250 mmHg.',
      'Pressão de vácuo segura balizada entre 80 e 120 mmHg no instrumento.',
      'Pressão estática de apenas 1 a 2 mmHg para acamados.',
      'Não há limite regulado de vácuo para sonda gástrica ou purulenta.'
    ],
    correctAnswer: 'B',
    explanation: 'Manter a força do vácuo no manômetro de vácuo restrito a 80-120 mmHg (Slide 36) assegura sucção com força ideal para carrear secreções espessas de orofaringe e traqueia, prevenindo estiramentos dolorosos, barotraumas ou lesões traumáticas dos tecidos laringe-epiglóticos.',
    source: 'Oxigenoterapia e Aspiração - Recomendações de Pressão Slide 36'
  },
  ...SNG_SNE_EXTRA_QUESTIONS,
  ...VIAS_LAVAGEM_EXTRA_QUESTIONS,
  ...SOND_ANTROP_OXIG_EXTRA_QUESTIONS,
  ...SNG_SNE_MORE_QUESTIONS,
  ...CALC_MORE_QUESTIONS,
  ...VIAS_MORE_QUESTIONS,
  ...LAVAGEM_MORE_QUESTIONS,
  ...SONDAGEM_MORE_QUESTIONS,
  ...ANTROPOMETRIA_MORE_QUESTIONS,
  ...OXIGENOTERAPIA_MORE_QUESTIONS,
  ...CALC_MORE_EXTRA_QUESTIONS
];

// Helper to shuffle multiple choice questions dynamically
export const QUESTIONS_BANK: Question[] = RAW_QUESTIONS_BANK.map((q) => {
  if (q.type === 'multiple-choice' && q.options && q.options.length > 0) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const correctIdx = letters.indexOf(q.correctAnswer.toUpperCase());
    if (correctIdx !== -1 && correctIdx < q.options.length) {
      const correctText = q.options[correctIdx];
      
      // Shuffle options (Fisher-Yates)
      const shuffledOptions = [...q.options];
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      
      const newCorrectIdx = shuffledOptions.indexOf(correctText);
      if (newCorrectIdx !== -1) {
        return {
          ...q,
          options: shuffledOptions,
          correctAnswer: letters[newCorrectIdx]
        };
      }
    }
  }
  return q;
});




