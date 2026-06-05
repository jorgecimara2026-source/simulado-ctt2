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
  }
];

