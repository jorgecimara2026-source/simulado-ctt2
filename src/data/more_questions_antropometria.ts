import { Question } from '../types';

export const ANTROPOMETRIA_MORE_QUESTIONS: Question[] = [
  {
    id: 'antrop_more_1',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Para a obtenção exata do peso de um paciente adulto capaz de deambular, qual a recomendação em relação às vestimentas e calçados do indivíduo antes de subir na balança mecânica ou digital?',
    type: 'multiple-choice',
    options: [
      'Deve subir de botas pesadas e casaco acolchoado espesso.',
      'Deve estar descalço, vestindo roupas leves (idealmente avental hospitalar leve ou roupas íntimas), posicionando-se no centro da plataforma da balança com os braços soltos ao longo do corpo.',
      'Deve apoiar-se firmemente nas grades laterais da parede para aliviar peso.',
      'Não há regulamentação higiênica, podendo pesar com qualquer aparato externo.'
    ],
    correctAnswer: 'B',
    explanation: 'Roupas grossas e calçados deformam o registro real de massa (Antropometria - Slide 8). O paciente deve subir ereto no centro sem apalpar amparos externos que aliviem a tração do sensor.',
    source: 'Medidas Antropométricas - Pesagem Adulto Slide 8'
  },
  {
    id: 'antrop_more_2',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'A estimativa alternativa de altura para pacientes idosos ou acamados impossibilitados de ficar de pé utiliza fórmulas consagradas como as Equações de Chumlea. Qual parâmetro ósseo e anatômica constitui a variável-chave nessas equações?',
    type: 'multiple-choice',
    options: [
      'Comprimento documetado do pescoço posterior.',
      'Altura do joelho ( Knee Height), medida da face anterior da coxa acima do joelho flexionado a 90° até a planta do pé, usando um calipômetro ou antropômetro rígido.',
      'Comprimento linear da clavícula direita.',
      'Circunferência abdominal pura.'
    ],
    correctAnswer: 'B',
    explanation: 'As fórmulas de Chumlea (Slide 10) cruzam dados de idade e altura do joelho para modelar matematicamente a estatura verdadeira do idoso ou sequelado neurológico restrito ao leito.',
    source: 'Medidas Antropométricas - Chumlea Slide 10'
  },
  {
    id: 'antrop_more_3',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Na mensuração da circunferência do braço (CB) em doentes asilados ou críticos, qual o ponto anatômico de marcação longitudinal deve balizar a passagem da fita métrica?',
    type: 'multiple-choice',
    options: [
      'Qualquer ponto rente ao ombro braquial superior.',
      'Ponto médio entre o acrômio da escápula e o olécrano do osso ulna (cotovelo), com o braço relaxado ao longo do tronco.',
      'No contorno do punho esquerdo posterior.',
      'Rente à fossa cubital anterior do antebraço.'
    ],
    correctAnswer: 'B',
    explanation: 'Delimitar o ponto médio do braço (Slide 10) garante a fidelidade da CB para rastrear desnutrições calórico-proteicas agudas, servindo também de base para a espessura da dobra triciptal.',
    source: 'Medidas Antropométricas - CB Linha Média'
  },
  {
    id: 'antrop_more_4',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Para a tomada de peso de recém-nascidos e bebês em balança pediátrica digital de cuba, qual o cuidado de biossegurança primordial a ser tomado pelo técnico?',
    type: 'multiple-choice',
    options: [
      'Deitar o bebê direto na cuba metálica nua sem assepsias.',
      'Higienizar a cuba com Álcool a 70% antes e após o uso, cobrir com uma toalha ou papel protetor descartável próprio e subtraí-lo (tarar a balança) para isolar o peso do bebê.',
      'Bebês devem ser pesados exclusivamente no colo dos pais sobre balanças adultas comuns.',
      'Não se pesa recém-nascidos por perigo de resfriamento gástrico.'
    ],
    correctAnswer: 'B',
    explanation: 'O cuidado de assepsia de cuba baby (Slide 9) impede a transmissão de germes transientes de pele. Tarar o peso da toalha preserva a precisão das pesagens de balanço hídrico.',
    source: 'Medidas Antropométricas - Pesagem Baby Slide 9'
  },
  {
    id: 'antrop_more_5',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Ao mensurar a dobra cutânea triciptal (DCT) com o adipômetro, o técnico de enfermagem deve pinçar exclusivamente a massa muscular profunda do braço.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'O adipômetro destina-se a mensurar a espessura da gordura subcutânea isolada (DCT - Slide 10). Pinçar musculatura causa dores excruciantes e distorce por completo o andamento nutritivo diagnósticos.',
    source: 'Medidas Antropométricas - Adipometrias'
  },
  {
    id: 'antrop_more_6',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'A circunferência de panturrilha (CP) é excelente sinalizadora de perda de massa muscular (sarcopenia) em idosos. De acordo com as diretrizes de nutrição geriátrica, qual valor em centímetros denota depleção e desnutrição muscular extrema?',
    type: 'multiple-choice',
    options: [
      'Circunferência menor que 31 cm nas diretrizes atuais de triagem.',
      'Apenas panturrilhas inferiores a 10 cm.',
      'Qualquer panturrilha gorda superior a 45 cm.',
      'Circunferência de panturrilha não possui correlação geriátrica.'
    ],
    correctAnswer: 'A',
    explanation: 'Valores de CP menores que 31 cm (Slide 10) representam sensível alerta de perda fibrosa corporal (sarcopenia) em idosos sob risco de desnutrição crônica de asilo.',
    source: 'Medidas Antropométricas - Panturrilha Slide 10'
  },
  {
    id: 'antrop_more_7',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Qual o valor de IMC de um paciente que possui 80 kg de peso corporal e 2,0 metros de altura real, e qual seu diagnóstico nutricional pelas tabelas da OMS?',
    type: 'multiple-choice',
    options: [
      'IMC de 40 kg/m²; com Obesidade Mórbida Grau 3.',
      'IMC de 20 kg/m²; considerado Eutrófico (peso saudável normal).',
      'IMC de 25 kg/m²; com Sobrepeso inicial.',
      'IMC de 16 kg/m²; com Desnutrição Severa.'
    ],
    correctAnswer: 'B',
    explanation: 'IMC = Peso / (Altura * Altura) => IMC = 80 / (2 * 2) = 80 / 4 = 20 kg/m². Esse índice situa-se no confortável intervalo eutrófico saudável de 18,5 a 24,9 kg/m² (Slide IMC).',
    source: 'Medidas Antropométricas - Cálculo IMC'
  },
  {
    id: 'antrop_more_8',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Para a pesagem de pacientes acamados totalmente imóveis sob cuidados assistenciais de terapia intensiva, qual balança especial costuma ser empregada nas unidades de ponta?',
    type: 'multiple-choice',
    options: [
      'Balança comum de banheiro sobre colchão.',
      'Balança de leito móvel integrada (leito pesador por célula de carga) ou balança suspensa com guincho hidráulico ( Sling Scale), descontando-se todos os aparatos hídricos de drenos.',
      'Pesagem de acamado baseada na média semanal visual.',
      'Estadiômetro horizontal de Frankfurt.'
    ],
    correctAnswer: 'B',
    explanation: 'A Sling Scale ou leitos digitais de UTI (Slide 8, 9) pesam o paciente crítico em decúbito. Exige zerar o peso prévio de travesseiros e equipamentos ativos de suporte para obter a massa corpórea líquida.',
    source: 'Medidas Antropométricas - Balança de UTI Slide 8'
  },
  {
    id: 'antrop_more_9',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'O monitoramento e registro sistemático do peso diário é uma intervenção crítica e valiosa no controle clínico de pacientes acometidos por Insuficiência Cardíaca Congestiva (ICC) severa.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Ganho abrupto de peso diário em cardiopatas com ICC (Slide 6) não é gordura, mas retenção hídrica mecânica oculta (anasarca ou edema periférico acentuado), exigindo infusões vigorosas de diuréticos.',
    source: 'Medidas Antropométricas - Clínicas de Peso'
  },
  {
    id: 'antrop_more_10',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Para a tomada da circunferência do pescoço (CPescoço) – reconhecido marcador metabólico de risco para Apneia Obstrutiva do Sono –, em qual ponto da cartilagem tireoide a fita deve passar em homens?',
    type: 'multiple-choice',
    options: [
      'Rente à nuca posterior sem aproximar da traqueia.',
      'Logo abaixo da proeminência laríngea (pomo de Adão) na horizontal, mantendo a fita plana e sem apertar o pescoço.',
      'Na linha da bochecha lateral.',
      'As circunferências de pescoço não trazem valor de triagem metabólica.'
    ],
    correctAnswer: 'B',
    explanation: 'Contornar o pescoço abaixo do pomo de Adão (Slide Antropometria) delimita o nível de acúmulo adiposo superior correlacionado a patologias respiratórias e resistência insulínica.',
    source: 'Medidas Antropométricas - Circunferência de Pescoço'
  },
  {
    id: 'antrop_more_11',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Dentre os diagnósticos nutricionais infantis baseados em curvas de percentis de crescimento da OMS, qual indicador monitora especificamente desnutrição aguda no bebê?',
    type: 'multiple-choice',
    options: [
      'Estatura para Idade.',
      'Peso para Estatura.',
      'IMC para Circunferência.',
      'Idade óssea da falange.'
    ],
    correctAnswer: 'B',
    explanation: 'A curva de Peso para Estatura (Antropometria - Slide Infantil) é o indicador mais sensível para detectar déficits abruptos e recentes de massa corpórea em crianças sob regimes infecciosos agudos.',
    source: 'Medidas Antropométricas - OMS Infantil'
  },
  {
    id: 'antrop_more_12',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Ao aferir a estatura física no estadiômetro vertical, os calcanhares, glúteos, ombros e cabeça do paciente devem estar perfeitamente encostados na régua métrica vertical sob postura ereta.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Esses 4 pontos de contato (Slide 10) garantem que a coluna e membros estejam retificados no plano estadiométrico sem desvios para baixo ou curvaturas compensatórias de lombar.',
    source: 'Medidas Antropométricas - Estatura Slide 10'
  },
  {
    id: 'antrop_more_13',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'O indicador antropométrico Relação Cintura-Quadril (RCQ) sinaliza risco cardiovascular. Qual a fórmula matemática simples para encontrar a RCQ?',
    type: 'multiple-choice',
    options: [
      'RCQ = Circunferência do Braço / Peso.',
      'RCQ = Circunferência da Cintura (cm) / Circunferência do Quadril (cm).',
      'RCQ = Circunferência da Panturrilha * Altura.',
      'RCQ = IMC / Idade.'
    ],
    correctAnswer: 'B',
    explanation: 'A RCQ (Slide 6) analisa a distribuição de gordura androide (formato maçã) e ginoide (formato pera). Dividir a cintura quadril aponta a gravidade central do risco obeso coronário.',
    source: 'Medidas Antropométricas - RCQ Slide 6'
  },
  {
    id: 'antrop_more_14',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Qual o valor numérico de IMC que marca o limiar de Obesidade de Grau 2, indicando alto risco metabólico no leito?',
    type: 'multiple-choice',
    options: [
      'IMC de 25,0 a 29,9 kg/m².',
      'IMC entre 35,0 e 39,9 kg/m².',
      'IMC acima de 50,0 kg/m².',
      'Qualquer valor abaixo de 10,0 kg/m².'
    ],
    correctAnswer: 'B',
    explanation: 'A classificação da OMS situa a Obesidade Moderada Grau 1 em 30,0-34,9, a Obesidade Severa Grau 2 em 35,0-39,9, e Obesidade Grau 3 ou mórbida acima ou igual a 40 kg/m² (Slide OMS).',
    source: 'Medidas Antropométricas - OMS'
  },
  {
    id: 'antrop_more_15',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'A pesagem em balança de mola ou mecânica exige destravamento e nivelamento do cursor de peso (taragem em zero de repouso) antes de convidar o paciente a subir no prato.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Zerar o braço flutuante da balança mecânica (Slide 8) garante a calibração do instrumento contra expansões térmicas sofridas pelo metal das molas de medição mecânica.',
    source: 'Medidas Antropométricas - Taragem Slide 8'
  },
  {
    id: 'antrop_more_16',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'No paciente amputado de membro inferior direito na altura dural da coxa, como o técnico deve registrar o cálculo da estimativa de peso metabólico útil?',
    type: 'multiple-choice',
    options: [
      'Não se pesa pacientes amputados sob pretexto de distorção.',
      'Pesar o indivíduo e aplicar tabelas de correção de peso proporcional que descontam a massa percentual média de braços ou pernas faltantes pelas fatias anatômicas de mercado.',
      'Apenas dobrar o peso do membro esquerdo restante.',
      'Registrar o peso na balança sem correções métricas.'
    ],
    correctAnswer: 'B',
    explanation: 'Amputações alteram o balanço e a massa metabólica real (Slide Práticas). Tabelas de compensação descontam o percentual estatístico (ex: perna inteira equivale a cerca de 16% da massa, coxa de 10%) para guiar doses seguras de quimioterápicos.',
    source: 'Medidas Antropométricas - Amputações'
  },
  {
    id: 'antrop_more_17',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Em balanças mecânicas adultas horizontais, os cursores graduados cinzas devem ser travados nas marcas de peso somente após obter repouso absoluto da barra de oscilação.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Esperar a barra mecânica alinhar perfeitamente no vão livre central horizontal (Slide 8) assegura a precisão linear da pesagem, mitigando erros visuais causados pelo balanço residual.',
    source: 'Medidas Antropométricas - Práticas Slide 8'
  },
  {
    id: 'antrop_more_18',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas apresenta uma utilidade prioritária direta do valor de IMC colhido nas admissões hospitalares eletivas?',
    type: 'multiple-choice',
    options: [
      'Avaliar se o paciente possui risco de miopia crônica urológica.',
      'Determinar o ponto de partida do plano terapêutico nutricional individual do paciente e calcular a dosagem exata de certas classes de quimioterápicos ou antibióticos metabólicos.',
      'Estimar o tamanho documetado do calçado do paciente.',
      'Definir a cor de cobertores do leito.'
    ],
    correctAnswer: 'B',
    explanation: 'A triagem de desnutrição (Slide Nutricional) e o ajuste volumétrico hídrico renal são pautados no estamento ponderal IMC coletados logo no acolhimento assistencial.',
    source: 'Medidas Antropométricas - Clínicas'
  },
  {
    id: 'antrop_more_19',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Estatura inferior a qual percentil no indicador de Altura-para-idade de curvas da OMS sinaliza baixa estatura extrema e desnutrição crônica infantil?',
    type: 'multiple-choice',
    options: [
      'Percentil acima de 90% de teto.',
      'Percentil abaixo de 3% de curva, ou escore-z abaixo de -2DP.',
      'Qualquer valor na média simples de 50%.',
      'Estatura infantil de bebês não é monitorada por percentis.'
    ],
    correctAnswer: 'B',
    explanation: 'Andamentos abaixo do percentil 3 ou limite de escore -2 dão alertas precoces de desnutrição crônica profunda na infância por carências metabólicas estruturais ou parasitoses ativa.',
    source: 'Medidas Antropométricas - OMS Infantil'
  },
  {
    id: 'antrop_more_20',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'A dobra cutânea subescapular (DCSE) é mensurada em ângulo diagonal de 45° acompanhando as linhas naturais de clivagem da pele logo abaixo do ângulo inferior da escápula.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A assepsia anatômica de tomada subescapular (Slide 10) segue a anatomia oblíqua e curvada da derme dorsal, pinçando o tecido adiposo com estrito zelo.',
    source: 'Medidas Antropométricas - Dobra subescapular Slide 10'
  }
];
