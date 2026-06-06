import { Question } from '../types';

export const OXIGENOTERAPIA_MORE_QUESTIONS: Question[] = [
  {
    id: 'oxig_more_1',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'Como é classificada tecnicamente na enfermagem a alteração respiratória caracterizada por respiração dolorosa, difícil, penosa e que demanda do paciente esforço físico visível para respirar?',
    type: 'multiple-choice',
    options: [
      'Bradipneia obstrutiva.',
      'Dispneia (ou desconforto respiratório).',
      'Taquipneia hialina.',
      'Ortópneia biliar.'
    ],
    correctAnswer: 'B',
    explanation: 'Dispneia (Sistemas Respiratórios - Slides Iniciais) conceitua clinicamente a sensação subjetiva ou andamento de fôlego curto rítmico acompanhado de retração supraclavicular ou intercostal.',
    source: 'Sistemas Respiratórios - Terminologia Slide Iniciais'
  },
  {
    id: 'oxig_more_2',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'Como é classificado o padrão ventilatório acelerado no qual a frequência respiratória em um paciente adulto ultrapassa o limite fisiológico normal de 20 incursões por minuto (irpm)?',
    type: 'multiple-choice',
    options: [
      ' Bradipneia.',
      'Taquipneia.',
      'Apneia obstrutiva rápida.',
      'Eupneia saudável.'
    ],
    correctAnswer: 'B',
    explanation: 'Terminologia de vigilância dita que frequência respiratória acima do teto de 20 irpm (Slide Terminologia) é rotulada como taquipneia, enquanto a Bradipneia designa declínios abaixo de 12 irpm.',
    source: 'Sistemas Respiratórios - Terminologia'
  },
  {
    id: 'oxig_more_3',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas descreve "Ortópneia", padrão respiratório anotado frequentemente em doentes acamados de ICC ou DPOC?',
    type: 'multiple-choice',
    options: [
      'Respiração ruidosa no momento do sono profundo.',
      'Dificuldade respiratória dramática imediata que acomete o paciente quando deitado plano de costas (em decúbito dorsal horizontal), forçando-o a sentar ou elevar a cabeceira para conseguir respirar.',
      'Ausência total de expansão muscular pulmonar por 5 minutos.',
      'Aceleração biliar com tosse purulenta.'
    ],
    correctAnswer: 'B',
    explanation: 'A ortópneia (Slide Terminologias) se dá por desvio de fluidos púlmonares e congestão venosa dorsal quando deitado. Sentar o paciente ( Fowler 90°) alivia e resolve a falta ar por gravidade física.',
    source: 'Refluxos e Cuidados Cardiologistas - Terminologias'
  },
  {
    id: 'oxig_more_4',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Difícil',
    questionText: 'A regulação e dosagem de FiO2 (Fração Inspirada de Oxigênio) na máscara de Venturi é exercida por adaptadores coloridos e orifícios de arraste de ar ambiente. Qual a justificativa física para esse arranjo, baseado no Princípio de Bernoulli?',
    type: 'multiple-choice',
    options: [
      'O ar ambiente é bloqueado de forma eletrostática de entrar no sistema.',
      'A alta velocidade mecânica do fluxo de O2 que passa pelo estreitamento do bico colorido cria uma região de baixa pressão lateral que arrasta (aspira) o ar do quarto por janelas externas de forma contínua, garantindo FiO2 fixo.',
      'O bico aquece a fumaça de O2 impedindo que o ar escape pelas vias.',
      'Não há explicação física, sendo o processo análogo à máscara simples.'
    ],
    correctAnswer: 'B',
    explanation: 'Física hospitalar ensina que o estreitamento (bico Venturi Bernoulli - Slide 20, 21) acelera o gás canalizado. A perda de pressão lateral aspira ar ambiente, estabilizando e fixando o FiO2 de saída independentemente do esforço pulmonar.',
    source: 'Terapia de Venturi - Princípios Físicos Slide 21'
  },
  {
    id: 'oxig_more_5',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'O cateter nasal de O2 (baixo fluxo) pode ser mantido em regime de 15 L/min se o paciente reclamar de letargia no leito.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Cateter nasal simples restringe-se a fluxos máximos de 6 L/min (Slide 17). Exceder esse limite satura a cavidade nasal irritando vias aéreas provocando cefaleia severa, ressecamento epitelial e epistaxe.',
    source: 'Oxigenoterapia - Cateteres Slide 17'
  },
  {
    id: 'oxig_more_6',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Durante as etapas sequenciais de aspiração de vias aéreas por tubo endotraqueal (TOT), em qual momento o vácuo de sucção ativa deve ser liberado pelo profissional?',
    type: 'multiple-choice',
    options: [
      'Liberar o vácuo ao inserir a sonda pulmonar traqueia adentro.',
      'Introduzir a sonda sem vácuo (CLAMPADA ou com o furo liberado), aplicando vácuo e sucção unicamente na retirada lenta rotacional do dispositivo estéril pulmonar.',
      'Manter vácuo de sucção ativa contínua ao entrar e ao sair sem tréguas térmicas.',
      'O vácuo é ativado exclusivamente pelo Enfermeiro na sala de exames.'
    ],
    correctAnswer: 'B',
    explanation: 'Injetar ar sob sucção ativa (Slide 36) esvazia o pulmão de oxigênio fisiológico residual e causa traumas violentos por cisalhamento das mucosas laringe-epiglóticas. Introduzir sem sugar e sugar retirando é lei assistencial rígida.',
    source: 'Oxigenoterapia e Aspiração - Passos Técnicos'
  },
  {
    id: 'oxig_more_7',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'Para prevenir pneumonia associada à assistência (infecção nosocomial), a solução líquida de borbulhamento do umidificador de O2 de cabeceira de parede deve conter água filtrada ou soro fisiológico puro.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Soro fisiológico (solução salina, Slide 12) seca e cristaliza as microfendas do fluxômetro e do bico do nebulizador, estragando materiais e irritando pulmões com microcristais de sal. Emprega-se Água Destilada estéril nova.',
    source: 'Oxigenoterapia - Umidificadores Slide 12'
  },
  {
    id: 'oxig_more_8',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'O técnico de enfermagem pode atuar prestando suporte de preparo e monitoramento na fita de oxigenoterapia.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A equipe de técnicos lidera a assistência básica de leito na oxigenoterapia, monitorando fluxômetros de parede, águas de umidificador e fixações limpas de máscara (Slide 4).',
    source: 'Oxigenoterapia - Papel Profissional'
  },
  {
    id: 'oxig_more_9',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Dentre as patologias que se constituem na indicação ideal de O2 por máscara com reservatório (não reinalante) em alto fluxo, assinale:',
    type: 'multiple-choice',
    options: [
      'Constipação intestinal crônica severa.',
      'Surtos agudos de asma severa, edema agudo de pulmão cardiogênico, e intoxicação feto-metálica grave por monóxido de carbono (CO).',
      'Apendicite ativa em regime cirúrgico.',
      'Infeções urinárias causadas por sondas.'
    ],
    correctAnswer: 'B',
    explanation: 'A máscara com reservatório (Slide 24) provê FiO2 próximo a 100%, ideal para insuficiências respiratórias severas e hipoxemias dramáticas de UTI exigindo saturação alveolar abrupta.',
    source: 'Sistemas com Reservatório - Slide 24'
  },
  {
    id: 'oxig_more_10',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Ao deparar-se com secreções espessas, viscosas e aderidas no TOT de traqueostomias, qual manobra de diluição assistida é aceita em regimes rigorosos?',
    type: 'multiple-choice',
    options: [
      'Introduzir 100 mL de água sanitária morna para dissolver.',
      'Instilar ampolas de solução salina (SF 0,9%) estéril de 2 a 5 mL diretamente no duto para amolecer a secreção, seguido de aspiração imediata.',
      'Insuflar helíque seco por 24 horas.',
      'Instilações de álcool gel uretral.'
    ],
    correctAnswer: 'B',
    explanation: 'A lavagem local (Sistemas Pulmonares - Slide 36) amacia o tampão mucoso espesso do doente traqueostomizado, viabilizando sucção rápida e livre por gravidade na duto de vácuo.',
    source: 'Oxigenoterapia e Aspiração - Irrigação TOT'
  },
  {
    id: 'oxig_more_11',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'No que tange aos macro-sistemas de nebulização (Inalação contínua de Venturi), qual o período cronológico recomendado para desinfecção do copo e máscara?',
    type: 'multiple-choice',
    options: [
      'Não há necessidade de higienizar as máscaras.',
      'Higienizar ou trocar as máscaras e copos nebulizadores a cada 12 horas consecutivas de uso assistivo direto para barra colonização bacteriana das névoas de água.',
      'Trocar apenas se houver sangue visível.',
      'Dão-se trocas rígidas semanais no bloco cirúrgico.'
    ],
    correctAnswer: 'B',
    explanation: 'Nebulizações frias acumulam condensações hídricas propícias para o desenvolvimento de Pseudomonas nosocomi (Slide 33). Trocas rigorosas a cada 12h mitigam pneumonias assistidas.',
    source: 'Oxigenoterapia e Aspiração - Desinfecções Slide 33'
  },
  {
    id: 'oxig_more_12',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'A cianose de extremidades (dedos e lábios roxos ou azulados) constitui sinal clínico tardio crucial de hipoxemia arterial severa em andamento.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'O baixo aporte oxigenado (Slide 29) deita coloração pálida-azulada em derme periférica por circulação deficitária de hemoglobina saturada oxigênio, exigindo dar fôlego venoso rápido e O2.',
    source: 'Oxigenoterapia - Sinais Clínicos'
  },
  {
    id: 'oxig_more_13',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas descreve de forma fiel o termo de alteração respiratória "Bradipneia" em andamento assistencial?',
    type: 'multiple-choice',
    options: [
      'Respiração apurada acima de 45 incursões por minuto.',
      'Respiração excessivamente lenta, caracterizada por frequência respiratória inferior a 12 incursões por minuto (irpm) no adulto saudável.',
      'Ausência voluntária de fôlego por 10 segundos.',
      'Tosse seca dolorosa por cansaço físico.'
    ],
    correctAnswer: 'B',
    explanation: 'A bradipneia (Slide Terminologia) aponta para deprimida atividade cerebral bulbar respiratória, comum em intoxicações medicamentosas anestésicas ou opióides.',
    source: 'Oxigenoterapia - Terminologia'
  },
  {
    id: 'oxig_more_14',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Ao deparar-se com umidificador de cateter de O2 apresentando nível hídrico abaixo da marcação de "Mínimo", qual a ação do profissional?',
    type: 'multiple-choice',
    options: [
      'Deixar secar para não transbordar no piso.',
      'Desconectar momentaneamente, esvaziar o resíduo velho da água, higienizar o copo com álcool, preencher com Água Destilada estéril nova até a marcação limite de topo.',
      'Completar diretamente o nível com soro fisiológico frio.',
      'Acionar a equipe de manutenção predial para recarga.'
    ],
    correctAnswer: 'B',
    explanation: 'Esvaziar resíduos antigos (Slide 12, 33) aborta proliferações fúngicas residuais, enquanto a recarga com água destilada nova preserva assepsia na purificação e fluxo de O2 de cabeceira.',
    source: 'Oxigenoterapia - Manutenções'
  },
  {
    id: 'oxig_more_15',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'O ato de aspirar secreções de vias áreas exige que o profissional use óculos de proteção facial, máscara descartável de barreira e avental de mangagem longa devido a riscos de respingo biológico direto de aerossóis.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'O reflexo da tosse induzido por aspiração (Slide Segurança) ejeta micropartículas saliva-secreção na derme cutânea ocular do profissional, sendo obrigatório EPI completo de derme barreira.',
    source: 'Oxigenoterapia e Aspiração - Biossegurança'
  }
];
