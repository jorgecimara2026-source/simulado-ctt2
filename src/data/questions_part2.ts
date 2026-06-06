import { Question } from '../types';

export const VIAS_LAVAGEM_EXTRA_QUESTIONS: Question[] = [
  // --- VIAS DE ADMINISTRAÇÃO ---
  {
    id: 'vias_adm_extra_1',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Para a administração de uma injeção por via Intradérmica (ID) – comumente aplicada para testes alérgicos ou vacina BCG –, qual deve ser o ângulo de inserção da agulha em relação à pele do paciente?',
    type: 'multiple-choice',
    options: [
      'De 90°, de forma perpendicular à derme abdominal.',
      'De 10° a 15°, quase paralela à pele, com o bisel voltado para cima, formando uma pequena pápula visível.',
      'De 45°, atingindo o tecido conjuntivo alveolar adiposo.',
      'De 30° a 45°, direcionando para a veia cefálica anterior.'
    ],
    correctAnswer: 'B',
    explanation: 'A administração intradérmica (ID) é superficial e deve ser executada num ângulo raso entre 10° e 15° para garantir que o líquido fique depositado precisamente entre a epiderme e a derme, formando uma pápula típica (Vias de Administração - Sítios de Injeção).',
    source: 'Vias de Administração - Sítios e Ângulos'
  },
  {
    id: 'vias_adm_extra_2',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao planejar uma injeção por via Subcutânea (SC) em um paciente magro utilizando agulha curta de 13 mm (13x4,5), qual a recomendação em relação ao ângulo de inserção para evitar infiltração muscular inadvertida?',
    type: 'multiple-choice',
    options: [
      'Ângulo de 15° realizando estiramento vigoroso da pele.',
      'Ângulo de 90° associado à realização de uma prega cutânea segura com os dedos polegar e indicador, soltando-a após retirar a agulha.',
      'Ângulo perpendicular exato de 90° forçando o hipoderme sem prega.',
      'Ângulo lateralizado de 45° sem segurar o tecido adiposo.'
    ],
    correctAnswer: 'B',
    explanation: 'Para agulhas curtas de hipodermóclise ou subcutâneo (como a agulha de 13 mm), a inserção perpendicular a 90° com prega cutânea garante o depósito do fármaco (por exemplo, insulina ou heparina) no tecido adiposo sem deitar no músculo subjacente (Vias de Administração - Subcutâneo).',
    source: 'Vias de Administração - Sítios e Ângulos SC'
  },
  {
    id: 'vias_adm_extra_3',
    topic: 'Vias de Administração',
    difficulty: 'Difícil',
    questionText: 'O Sítio de Hochstetter (Região Ventroglútea) é amplamente elogiado pela literatura científica como o local de maior segurança para aplicação de injeções intramusculares profundas em adultos. Assinale qual a justificativa anatômica e assistencial para essa preferência:',
    type: 'multiple-choice',
    options: [
      'Possui menor sensibilidade mecânica superficial devido à ausência de epiderme.',
      'É uma região livre de vasos sanguíneos calibrosos e de feixes nervosos importantes (como o nervo ciático), protegida pelo osso ílio, e que conta com espessa camada de músculo glúteo médio e mínimo.',
      'Facilita a reabsorção biliar de hormônios pelo fígado.',
      'A aplicação neste quadrante permite infusões de grandes volumes volumétricos superiores a 10 mL.'
    ],
    correctAnswer: 'B',
    explanation: 'A região Ventroglútea (Hochstetter) é delimitada colocando-se o espalmador da mão sobre o grande trocanter do fêmur. É a área de escolha mais segura pois não apresenta risco de lesão nervosa ou punção acidental de grandes artérias pélvicas (Vias de Administração - Sítios IM).',
    source: 'Vias de Administração - Sítios IM'
  },
  {
    id: 'vias_adm_extra_4',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'O músculo deltoide localiza-se na porção proximal do braço. Devido à sua massa muscular reduzida e proximidade com o nervo radial, qual o volume líquido máximo recomendado para administração intramuscular nesta área?',
    type: 'multiple-choice',
    options: [
      'Até 5 mL de volume total homogeneizado.',
      'Até 1 mL de volume total, evitando distensão fibrosa local e lesão nervosa.',
      'Volumes livres de 2 a 3 mL sem restrição hídrica.',
      'O deltoide aceita apenas doses oleosas de até 4 mL.'
    ],
    correctAnswer: 'B',
    explanation: 'O deltoide suporta pequenos volumes por possuir pouca massa muscular de absorção. Ensina-se no guia que o limite seguro para injeção intramuscular deltoidea é de no máximo 1,0 mL (Vias de Administração - Deltoide).',
    source: 'Vias de Administração - Slide Sítios IM'
  },
  {
    id: 'vias_adm_extra_5',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Segundo as diretrizes de assepsia e segurança ocupacional, após preparar e aplicar uma injeção venosa, o profissional deve reencapar a agulha com as duas mãos antes de descartá-la no coletor comum.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Reencapar agulhas com as duas mãos é o maior gerador de acidentes com perfurocortantes em hospitais. Agulhas devem ser imediatamente descartadas na caixa coletora de perfurocortantes (Descarpack) sem manipulação direta (Vias de Administração - Segurança).',
    source: 'Vias de Administração - Biossegurança'
  },
  {
    id: 'vias_adm_extra_6',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Qual músculo é considerado o sítio de eleição primário para aplicação de injeções intramusculares em lactentes e crianças menores de dois anos de idade devido à sua robustez estrutural nesta faixa etária?',
    type: 'multiple-choice',
    options: [
      'Músculo Deltoide braquial.',
      'Músculo Vasto Lateral da Coxa (quadrilateral anterolateral da coxa).',
      'Região Dorsoglútea (nádega posterior superior).',
      'Músculo Grande Dorsal estático.'
    ],
    correctAnswer: 'B',
    explanation: 'Em bebês e crianças com menos de 2 anos, a região dorsoglútea não é desenvolvida e apresenta alto risco de comprometer o nervo isquiático por punções profundas. A área de escolha e eleição absoluta é o músculo Vasto Lateral da Coxa (Vias de Administração - Sítios IM).',
    source: 'Vias de Administração - Sítios IM Infantil'
  },
  {
    id: 'vias_adm_extra_7',
    topic: 'Vias de Administração',
    difficulty: 'Difícil',
    questionText: 'Ao aplicar uma medicação intramuscular na região dorsoglútea, qual quadrante anatômico da nádega deve ser rigorosamente delimitado e escolhido pelo técnico e por qual razão mecânica?',
    type: 'multiple-choice',
    options: [
      'Quadrante inferior interno; para aproximar da circulação femoral rápida.',
      'Quadrante superior externo; para evitar a punção acidental do nervo ciático (isquiático) e vasos calibrosos que transitam nos quadrantes internos e inferiores da nádega.',
      'Qualquer ponto central da nádega que apresente melhor prega tecidual.',
      'Linha perianal média acima do sulco interglúteo.'
    ],
    correctAnswer: 'B',
    explanation: 'A nádega é dividida imaginariamente em quatro quadrantes. O quadrante superior externo (QSE) do glúteo é o único quadrante livre do trajeto calibroso do nervo ciático, garantindo inocuidade no disparo de injeções intramusculares profundas (Vias de Administração - Dorsoglúteo).',
    source: 'Vias de Administração - Sítios IM'
  },
  {
    id: 'vias_adm_extra_8',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Dentre os treze certos da administração de medicamentos, assinale a ação que preconiza a verificação sistemática de substâncias incompatíveis diluídas no mesmo equipo de infusão:',
    type: 'multiple-choice',
    options: [
      'Dose certa.',
      'Compatibilidade medicamentosa certa, visando monitorar a ocorrência de reações químicas indesejadas, mudança de coloração ou precipitados sólidos na via parenteral compartilhada.',
      'Orientação farmacológica certa.',
      'Registro correto no sistema de prontuário eletrônico.'
    ],
    correctAnswer: 'B',
    explanation: 'A compatibilidade medicamentosa certa (Vias de Administração - Treze Certos) evita que duas substâncias incompatíveis se cristalizem ou formem ligas químicas insolúveis que tapeiam os vasos ou inativem as ações curativas.',
    source: 'Vias de Administração - Treze Certos'
  },
  {
    id: 'vias_adm_extra_9',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Para medicações aplicadas na via oftálmica (colírios), o técnico de enfermagem deve orientar o paciente a fechar e apertar os olhos com força imediatamente após a gota pingar no globo ocular para otimizar a absorção mecânica.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Espremer ou piscar com extrema força os olhos após colírios (Slide 40) ejeta de forma mecânica o medicamento para fora do saco conjuntival pelos canais lacrimais. Recomenda-se fechar de forma suave e comprimir de leve o canto interno lacrimatório.',
    source: 'Vias de Administração - Slide 40'
  },
  {
    id: 'vias_adm_extra_10',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'No preparo pós do fármaco reconstituído ou diluído, qual o tempo máximo regulamentar aceitável pelas boas práticas hospitalares de assepsia para que a solução diluída permaneça sem uso na bancada do posto?',
    type: 'multiple-choice',
    options: [
      'Pode ficar na bancada aberta por até 24 horas sem perigos.',
      'Qualquer medicamento injetável reconstituído deve ser administrado imediatamente após o preparo, não devendo ficar exposto a contaminação ambiental (regra de preparou, aplicou).',
      'Até o término do plantão de doze horas do respectivo técnico responsável.',
      'Não há essa métrica de tempo, dependendo da cor da ampolagem.'
    ],
    correctAnswer: 'B',
    explanation: 'Boas práticas de controle de infecção hospitalar ditam que as medicações diluídas sob fluxo de ar fiquem por tempo nulo ou mínimo expostas no posto para barrar proliferação microbiana cruzada (Vias de Administração - Procedimentos).',
    source: 'Vias de Administração - Boas Práticas'
  },

  // --- LAVAGEM INTESTINAL (ENEMA e CLISTER) ---
  {
    id: 'elim_int_extra_1',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Ao posicionar de forma correta e assepticamente confortável o paciente para receber uma lavagem intestinal prescrita (enteroclisma), qual posição anatômica o técnico de enfermagem deve estabelecer?',
    type: 'multiple-choice',
    options: [
      'Decúbito Lateral Direito de Sims, para que o fluxo salino atinja o estômago.',
      'Posição de Decúbito Lateral Esquerdo com a perna direita flexionada sobre a esquerda (Posição de Sims), respeitando a anatomia natural do cólon descendente e do sigmóide, o que facilita o livre trânsito gravitacional do líquido.',
      'Posição genupeitoral (de joelhos na cama com quadril elevado).',
      'Posição de Fowler com tronco ereto de 90°.'
    ],
    correctAnswer: 'B',
    explanation: 'A rota anatômica do reto deságua à esquerda no cólon sigmoide e descendente. Posicionar em decúbito lateral esquerdo (Sims - Slide 43 e 45) viabiliza que a solução transite suavemente por gravidade natural, minimizando cólicas e refluxo imediato.',
    source: 'Lavagem Intestinal - Slide 43, 45'
  },
  {
    id: 'elim_int_extra_2',
    topic: 'Lavagem Intestinal',
    difficulty: 'Difícil',
    questionText: 'Durante a infusão da solução de enteroclisma (lavagem intestinal ampla de 1000 mL) a beira do leito, o paciente começa a apresentar dor abdominal espástica intensa, náuseas e queixas de cólica insuportável. Qual a atitude imediata recomendada?',
    type: 'multiple-choice',
    options: [
      'Elevar a altura do suporte de soro para que a lavagem corra ainda mais rápido e acabe logo a cólica.',
      'Clampar (interromper temporariamente) o fluxo da solução, orientar o paciente a respirar fundo e pausadamente pela boca, abaixar ligeiramente o suporte de soro para diminuir a pressão hidrostática, e retomar a infusão lentamente assim que o espasmo doloroso ceder.',
      'Retirar abruptamente a sonda retal do paciente e deitá-lo de barriga para baixo.',
      'Seguir a infusão em fluxo contínuo e ignorar as contrações dolorosas por serem normais.'
    ],
    correctAnswer: 'B',
    explanation: 'A cólica é reflexo de contração mecânica das paredes musculares por fluxo volumoso rápido de líquido ou baixa temperatura (Slide 47). Interromper temporariamente, acalmar, diminuir a altura mecânica mecânica gravitacional estabiliza o lúmen retal para retomada com conforto.',
    source: 'Lavagem Intestinal - Observações Técnicas Slide 47'
  },
  {
    id: 'elim_int_extra_3',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Qual a faixa média de temperatura recomendada pelas boas práticas hospitalares para a preparação do líquido de enteroclisma (como soluções glicerinadas ou salinas) e qual a razão biofísica para tal controle térmico?',
    type: 'multiple-choice',
    options: [
      'Gelada (de 10°C a 15°C); para adormecer de forma anestésica as terminações retais anal-esfincterianas.',
      'Morna, entre 37°C e 40°C (próxima à temperatura corpórea); pois soluções frias provocam severas cólicas dolorosas e convulsões peristálticas, enquanto líquidos excessivamente quentes causam queimaduras e necrose no cólon intestinal.',
      'Quente a 55°C; para esterilizar eventuais patógenos intestinais.',
      'Qualquer temperatura ambiente sem controle de termômetros.'
    ],
    correctAnswer: 'B',
    explanation: 'A mucosa interna e alças intestinais (Slide 44, 46) são extremamente sensíveis a alterações térmicas. Respeitar o intervalo de 37°C a 40°C previne queimaduras e reduz enormemente espasmos pélvicos dolorosos de repúdio.',
    source: 'Lavagem Intestinal - Slide 44, 46'
  },
  {
    id: 'elim_int_extra_4',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'Na terminologia clínica de eliminação gastrointestinal, fezes endurecidas, ressecadas e compactadas e coladas sob formato esférico petrolífero (comuns em constipação crônica prolongada de acamados) são tecnicamente denominadas:',
    type: 'multiple-choice',
    options: [
      'Melena espasmódica sanguinolenta.',
      'Fecaloma ou Fezes escibalosas.',
      'Esteatorreia linfática.',
      'Diarréia osmótica pura.'
    ],
    correctAnswer: 'B',
    explanation: 'Fecaloma ou escíbalos (Slide 39) referem-se ao bolo de fezes secas, empedradas e aglutinadas no reto que obstrui de forma completa o curso de eliminação, exigindo lubrificação via enema oleoso para remoção cuidadosa.',
    source: 'Lavagem Intestinal - Slide 39'
  },
  {
    id: 'elim_int_extra_5',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Uma lavagem retal de pequeno volume (normalmente contendo de 50 a 150 mL de solução salina ácida pré-envasada de farmácia, como Fleet Enema) que atua estimulando rapidamente o reflexo evacuatório local de forma instantânea é denominada:',
    type: 'multiple-choice',
    options: [
      'Enteroclisma de grande repúdio.',
      'Clister (ou micro-enema).',
      'Lavagem gástrica gástrica por SNG.',
      'Irrigação contínua de Sonda de Foley.'
    ],
    correctAnswer: 'B',
    explanation: 'O Clister (Slide 41) refere-se ao enema de bolso ou de minguado volume (50-150 ml), cuja ação química local provoca tração osmótica de fluidos intestinais com esvaziamento anal ultra-rápido.',
    source: 'Lavagem Intestinal - Slide 41'
  },
  {
    id: 'elim_int_extra_6',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Ao regular o suporte mecânico de gotejo para infusão de grandes enteroclismas clássicos, a qual altura máxima segura o reservatório flexível contendo o líquido deve permanecer acima da cama do doente?',
    type: 'multiple-choice',
    options: [
      'Acima de 120 cm de altura lateral; para vencer resistências esfincterianas.',
      'Até 45 cm (ou no máximo 30 a 45 cm) acima do nível anal do paciente, com o intuito de modular a velocidade e força do influxo por gravidade do fluido.',
      'Rentrente e lateralizado exatamente sobre o peito do doente.',
      'Não há limite mecânico gravitacional de suporte.'
    ],
    correctAnswer: 'B',
    explanation: 'A altura correspondente a 30-45 cm (Slide 45, 47) gera uma pressão hidrostática perfeitamente aceita e suave pelo cólon descendente, impedindo distensão abrupta das paredes musculares intestinais e evitando dores abdominais pânicas.',
    source: 'Lavagem Intestinal - Slide 45 e 47'
  },
  {
    id: 'elim_int_extra_7',
    topic: 'Lavagem Intestinal',
    difficulty: 'Fácil',
    questionText: 'Durante o procedimento prático de enema, o uso de lubrificantes à base de óleos minerais ou xilocaína geleia na porção distal da sonda retal é dispensável, pois a própria solução salina amacia de forma natural o reto.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A lubrificação anal e da sonda com vaselina, óleo ou xilocaína geleia (Slide 44) é componente crítico de assepsia e conforto, evitando dores dilacerantes, fissuras sangrentas ou perfuração vascular anal ao passar a sonda.',
    source: 'Lavagem Intestinal - Slide 44'
  },
  {
    id: 'elim_int_extra_8',
    topic: 'Lavagem Intestinal',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas descreve corretamente a melena, um achado fecal de enorme valor diagnóstico clínico detectável no leito de enfermaria?',
    type: 'multiple-choice',
    options: [
      'Fezes com estrias secas de gordura esbranquiçada amarela.',
      'Fezes pastosas ou amolecidas de coloração preta, aspeto semelhante a graxa ou piche, com odor fétido extremamente pungente, indicando sangramento no trato digestivo superior digerido pelo suco digestivo.',
      'Fezes recobertas por catarro hialino ou pus infeccioso.',
      'Eliminação urinária residual acompanhada de cálculos pétreos.'
    ],
    correctAnswer: 'B',
    explanation: 'A melena representa sangue metabolizado por pâncreas e estômago no trajeto intestinal superior (Slide 39). Manifesta-se em fezes pastosas, pretas brilhantes e de odoração pútrida típica.',
    source: 'Lavagem Intestinal - Slide 39'
  }
];
