import { Question } from '../types';

export const QUESTIONS_BANK: Question[] = [
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
  }
];
