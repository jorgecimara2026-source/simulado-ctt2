import { Question } from '../types';

export const SOND_ANTROP_OXIG_EXTRA_QUESTIONS: Question[] = [
  // --- SONDAGEM VESICAL ---
  {
    id: 'sond_ves_extra_1',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Ao cuidar de um paciente em uso de Sonda Vesical de Demora (SVD), o técnico de enfermagem deve atentar para a posição física da bolsa coletora do sistema fechado. Qual a orientação científica correta?',
    type: 'multiple-choice',
    options: [
      'A bolsa coletora deve ser posicionada sobre a cama, rentrente aos ombros do paciente.',
      'A bolsa coletora deve obrigatoriamente ser mantida fixada sempre ABAIXO do nível da bexiga do paciente, impedindo o refluxo gravitacional da urina contaminada da bolsa para o trato urinário, reduzindo drasticamente infecções (ITU-ACV).',
      'Pode ser pendurada no suporte de soro a 120 cm de altura para acelerar o dreno.',
      'A bolsa coletora deve flutuar rente ao chão do quarto.'
    ],
    correctAnswer: 'B',
    explanation: 'A bexiga é ambiente estéril, e a bolsa de diurese, após horas, possui alto índice bacteriano. Manter a bolsa coletora pendurada na grade ou suporte, sempre abaixo do nível vesical (Sondagem Vesical - Slides 60-65), previne o refluxo de urina colonizada para o paciente.',
    source: 'Sondagem Vesical - Cuidados de Manutenção SVD'
  },
  {
    id: 'sond_ves_extra_2',
    topic: 'Sondagem Vesical',
    difficulty: 'Difícil',
    questionText: 'Durante uma prostatectomia ou cirurgia urológica de grande porte, o cirurgião prescreve a irrigação contínua de bexiga em sistema fechado estéril. Qual sonda urinária possui três lúmens (três vias), justificando essa indicação?',
    type: 'multiple-choice',
    options: [
      'Sonda de Foley de duas vias comum de látex.',
      'Sonda de Nelaton descartável de PVC rígido.',
      'Sonda de Dufour (ou Foley de Três Vias), onde uma via serve para insuflar o balão, a segunda para esvaziar a urina por gravidade e a terceira via para aporte contínuo de líquido de lavagem.',
      'Sonda retal lubrificada.'
    ],
    correctAnswer: 'C',
    explanation: 'Sondas de três vias (Sondagem Vesical - Sondas de Dufour ou Foley 3 vias, Slide 58) permitem a irrigação permanente vesical pós cirúrgica para lavar e dissolver coágulos hemáticos de forma instantânea antes que bloqueiem a saída urinária.',
    source: 'Sondagem Vesical - Slide 58'
  },
  {
    id: 'sond_ves_extra_3',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Como é classificado tecnicamente o achado numérico de bebedeiras e diureses onde o balanço hídrico total acumulado em 24 horas aponta um volume de urina inferior a 100 mL em um paciente adulto?',
    type: 'multiple-choice',
    options: [
      'Oligúria moderada.',
      'Anúria (ausência de depuração mecânica renal).',
      'Poliúria obstrutiva crônica.',
      ' Hematúria macroscópica terminal.'
    ],
    correctAnswer: 'B',
    explanation: 'Terminologia urológica clássica dita que diurese acumulada abaixo de 100 mL nas 24 horas (Sondagem Vesical - Slid 72) é conceituada como anúria. Valores entre 100 mL e 400-500 mL definem a oligúria.',
    source: 'Sondagem Vesical - Termos Clínicos Slide 72'
  },
  {
    id: 'sond_ves_extra_4',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Qual o tipo de cateter vesical que se constitui em uma sonda de PVC de calibre variado, caracterizado por NÃO possuir balão inflável de fixação, sendo empregado exclusivamente para o cateterismo urinário de alívio rápido?',
    type: 'multiple-choice',
    options: [
      'Sonda de Foley de látex natural.',
      'Sonda de Nelaton, ideal para esvaziamento instantâneo da bexiga em retenções agudas temporárias de urina beira leito ou coleta de exames estéreis.',
      'Sonda retal com balão de tungstênio posterior.',
      'Sonda gástrica de Salem com dois lúmens.'
    ],
    correctAnswer: 'B',
    explanation: 'A sonda de Nelaton (Slide 58) é projetada para drenagem urinária limpa de tiro único (alívio), sendo inserida estéril e retirada de imediato assim que cessa o refluxo líquid urinário.',
    source: 'Sondagem Vesical - Cateter de Alívio Slide 58'
  },
  {
    id: 'sond_ves_extra_5',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Para a prevenção de infecções do trato urinário associadas a cateteres vesicais, o técnico em enfermagem deve esvaziar a bolsa coletora regularmente a cada plantão utilizando o mesmo copo plástico sem lavagem entre diferentes pacientes.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'O dreno urinário de bolsas fechadas exige um copo ou recipiente graduado limpo higienizado INDIVIDUAL e EXCLUSIVO para cada leito, além do uso estrito de luvas de procedimento novas para barra contaminação cruzada.',
    source: 'Sondagem Vesical - Diretrizes de Prevenção'
  },

  // --- MEDIDAS ANTROPOMÉTRICAS ---
  {
    id: 'antrop_extra_1',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'Ao dispor do paciente posicionado de pé junto ao estadiômetro vertical com cursor rígido, qual plano cefálico e horizontal deve pautar o correto alinhamento do cursor de altura para uma medida sem viés?',
    type: 'multiple-choice',
    options: [
      'Plano de Sims, deitando o tronco levemente curvado para trás.',
      'Plano Horizontal de Frankfurt, mantendo o trago (margem superior do conduto auditivo externo) perfeitamente alinhado na horizontal com a margem orbital inferior do osso orbital.',
      'Alinhamento occipital paralelo à sutura glabelar posterior.',
      'Nenhum alinhamento cefálico, erguendo o pescoço ao limite da resistência dolorosa.'
    ],
    correctAnswer: 'B',
    explanation: 'O Plano de Frankfurt (Medidas Antropométricas - Slide 10) rege a tomada estadiométrica exata de estatura. O paciente deve olhar para a frente e alinhar as margens auditivas e orbitárias na horizontal.',
    source: 'Medidas Antropométricas - Frankfurt Slide 10'
  },
  {
    id: 'antrop_extra_2',
    topic: 'Medidas Antropométricas',
    difficulty: 'Médio',
    questionText: 'O Índice de Massa Corporal (IMC) é a ferramenta de triagem nutricional mais comum. De acordo com os valores de corte da OMS, qual o valor numérico que demarca o início da categorização de Obesidade Grau 1?',
    type: 'multiple-choice',
    options: [
      'IMC maior ou igual a 25,0 kg/m².',
      'IMC entre 30,0 e 34,9 kg/m².',
      'IMC superior a 40,0 kg/m².',
      'Qualquer índice entre 18,5 e 24,9 kg/m².'
    ],
    correctAnswer: 'B',
    explanation: 'A eufrovia estende-se nos índices de 18,5 a 24,9. Sobrepeso situa-se entre 25,0 e 29,9. O limiar de início da Obesidade Grau 1 se constitui nos índices exatos de 30,0 a 34,9 kg/m² (Antropometria - Slides de Diagnóstico).',
    source: 'Medidas Antropométricas - IMC e OMS'
  },
  {
    id: 'antrop_extra_3',
    topic: 'Medidas Antropométricas',
    difficulty: 'Difícil',
    questionText: 'A mensuração da circunferência da cintura (CC) é realizada no ponto médio entre a crista ilíaca anterior superior e a última costela. Quais valores de CC de acordo com a OMS representam risco cardiovascular de atenção muito alto para homens e mulheres, respectivamente?',
    type: 'multiple-choice',
    options: [
      'Maior que 120 cm nos homens e maior que 110 cm nas mulheres.',
      'Maior ou igual a 94 cm para o público masculino e maior ou igual a 80 cm para o público feminino.',
      'Maior ou igual a 80 cm para homens e maior ou igual a 70 cm para mulheres.',
      'Fórmulas antropométricas não trazem esses índices cardiovasculares limitantes.'
    ],
    correctAnswer: 'B',
    explanation: 'A gordura visceral abdominal (avaliada pela CC) é fator de risco lipídico coronário alto se superior ou igual a 94 cm em homens e 80 cm em mulheres brasileiras (Medidas Antropométricas - Slide 6).',
    source: 'Medidas Antropométricas - Circunferência de Cintura Slide 6'
  },
  {
    id: 'antrop_extra_4',
    topic: 'Medidas Antropométricas',
    difficulty: 'Fácil',
    questionText: 'Em balanças pediátricas de lactentes de berço (incubadoras), a colocação de uma toalha limpa sobre a cuba metálica antes de tarar e deitar o bebê serve única e exclusivamente para embelezar o quarto.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Colocar uma cobertura macia e limpa sobre a cuba metálica gelada evita a perda de calor por condução térmica direta do recém-nascido e reduz o risco de infecções fúngicas dérmicas oportunistas, devendo-se descontar (tarar) o peso da toalha na balança.',
    source: 'Medidas Antropométricas - Slide de Biossegurança'
  },

  // --- OXIGENOTERAPIA E ASPIRAÇÃO ---
  {
    id: 'oxig_extra_1',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'Ao monitorar um paciente recebendo O2 por cateter nasal simples (tipo óculos) em vazão ajustada no fluxômetro de 4 Litros por minuto (L/min), qual a recomendação em relação ao copo umidificador à beira do leito?',
    type: 'multiple-choice',
    options: [
      'Deve-se manter o copo seco e vazios pois fluxos abaixo de 10 L/min não causam ressecamento.',
      'O copo umidificador é indispensável para fluxos iguais ou superiores a 4 L/min contendo Água Destilada estéril limpa preenchida até o limite demarcado de segurança de fábrica, para prevenir sangramentos e ressecamento doloroso da mucosa nasal.',
      'Deve ser preenchido com álcool glicerinado 70% para inalar vapores higienizados.',
      'Pode conter soro fisiológico morno pré-aquecido na micro-ondas.'
    ],
    correctAnswer: 'B',
    explanation: 'O oxigênio encanado da parede hospitalar é gás seco que lesiona e resseca os cílios celulares nasofaríngeos. O uso de borbulhadores umidificadores com Água Destilada estéril (Oxigenoterapia - Slide 12) é obrigatório a partir de 4 L/min.',
    source: 'Oxigenoterapia e Aspiração - Umidificadores Slide 12'
  },
  {
    id: 'oxig_extra_2',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'Dentre as máscaras de fornecimento de oxigênio oxigenoterapia, qual recurso prático e terapêutico possui uma bolsa/balão flexível acoplada à máscara, permitindo que taxas elevadas de oxigênio de 10 a 15 L/min cheguem ao doente de forma rápida?',
    type: 'multiple-choice',
    options: [
      'Máscara facial simples com bico Venturi vermelho.',
      'Máscara com reservatório (ou máscara não reinalante), indicada para doentes agudos hipoxêmicos severos por prover frações inspiradas elevadas de oxigênio (FiO2) próximas a 90% a 100%.',
      'Cateter nasal tipo óculos comum de baixo fluxo.',
      'Tubo T de repouso laríngeo.'
    ],
    correctAnswer: 'B',
    explanation: 'A máscara com reservatório (Slide 24) permite taxas de FiO2 extremamente ricas devido ao saco coletor de O2 de recarga contínua. As válvulas forçam a expiração a sair pelas laterais sem misturar com gases carbonados exalados.',
    source: 'Oxigenoterapia e Aspiração - Sistemas com Reservatório Slide 24'
  },
  {
    id: 'oxig_extra_3',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Difícil',
    questionText: 'Ao executar o procedimento técnico de aspiração traqueobrônquica em pacientes entubados ou traqueostomizados graves na UTI, qual o tempo máximo recomendado em segundos que o vácuo de sucção ativa deve atuar e qual o perigo sistêmico de estender esse limite?',
    type: 'multiple-choice',
    options: [
      'Até 45 segundos corridos; por risco de provocar vômitos intensos involuntários.',
      'No máximo de 10 a 15 segundos por passagem de sonda, dado que tempos prolongados de vácuo ativo barram a entrada de ar fisiológico provocando hipóxia severa, bradicardia por incentivo vagal-cardíaco e danos profundos nas mucosas pulmonares.',
      'Tempo livre dependendo do aspeto da secreção purulenta.',
      'Exatamente 5 minutos contínuos sem pausas de repouso hídrico.'
    ],
    correctAnswer: 'B',
    explanation: 'A aspiração (Sistemas Invasivos - Parecer COFEN 557/2017 e Slide 36-38) deve limitar-se a janelas de no máximo 10-15 segundos. Exceder esse intervalo expõe o doente a hipoxemia abrupta severa, broncoaspirações de pânico e colapso cardíaco vagal.',
    source: 'Oxigenoterapia e Aspiração - Aspiração de Vias Aéreas'
  },
  {
    id: 'oxig_extra_4',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Médio',
    questionText: 'A máscara de Venturi é o padrão ouro de escolha na terapia ventilatória de pacientes acometidos por Doença Pulmonar Obstrutiva Crônica (DPOC) retentores de CO2 devido a qual prerrogativa estrutural física?',
    type: 'multiple-choice',
    options: [
      'Ela fornece maior pressão de sucção gástrica.',
      'Ela fornece uma fração de oxigênio (FiO2) exata, fixa, controlada e estável em regime independente do padrão ou velocidade de inspiração do paciente, por arraste do ar ambiente calibrado por bicos plásticos dosadores volumétricos.',
      'Ela aquece o ar encanado até exatos 45°C prévios.',
      'A máscara de Venturi impede que o paciente expire ar carbônico.'
    ],
    correctAnswer: 'B',
    explanation: 'Pacientes com DPOC retentores crônicos dependem do estímulo de leve hipóxia periférica para respirar. Administrar frações instáveis perigosamente altas de O2 anula esse drive carotídeo bulbar, induzindo parada ventilatória. O bico Venturi limita esse teto de FiO2 com precisão estrita (Slide 20, 21).',
    source: 'Oxigenoterapia e Aspiração - Venturi Slide 20, 21'
  },
  {
    id: 'oxig_extra_5',
    topic: 'Oxigenoterapia e Aspiração',
    difficulty: 'Fácil',
    questionText: 'Para a realização de aspiração profunda estéril e invasiva traqueobrônquica em pacientes conectados ao respirador mecânico, o uso de técnica asséptica estrita e luvas estéreis novas é obrigatório pela equipe assistente.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A aspiração endotraqueal adentra um circuito fechado estéril vulnerável (traqueia e pulmões). O manuseio da sonda de aspiração exige estrito rigor asséptico com luvas estéreis novas, sob grave risco de originar pneumonia associada à ventilação mecânica (PAV) rápida no paciente crítico.',
    source: 'Oxigenoterapia e Aspiração - Recomendações'
  }
];
