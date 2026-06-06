import { Question } from '../types';

export const SNG_SNE_MORE_QUESTIONS: Question[] = [
  {
    id: 'sng_sne_more_1',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'Qual o principal meio físico utilizado para a fixação estável beira leito de uma sonda nasogástrica?',
    type: 'multiple-choice',
    options: [
      'Gesso cirúrgico ortopédico.',
      'Fita adesiva hipoalérgica ou esparadrapo cortado em formato de gravata ou borboleta.',
      'Fios de sutura cirúrgica de nylon diretamente amarrados na narina.',
      'Clipe nasal metálico fixo.'
    ],
    correctAnswer: 'B',
    explanation: 'A fixação externa de esparadrapo ou fita hipoalergênica (Slide 15, 18) garante o posicionamento fixo da sonda e impede seu deslocamento involuntário ou saída passiva pela expiração.',
    source: 'SNG e SNE - Slide 15'
  },
  {
    id: 'sng_sne_more_2',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Quando o paciente apresenta náuseas ou tentativas de vômito durante a introdução de uma sonda gástrica, qual deve ser a orientação preliminar do profissional assistente?',
    type: 'multiple-choice',
    options: [
      'Fazer o doente gritar alto para liberar as alças laringofaringes.',
      'Orientar o paciente a respirar fundo e pausadamente pelo nariz, engolir saliva ou pequenas quantidades de água (se jejum permitir), para coordenar o fechamento reflexo da glote.',
      'Parar completamente o ato e acionar o bloco cirúrgico para intubação.',
      'Injetar 100 mL de soro morno direto no canal da sonda.'
    ],
    correctAnswer: 'B',
    explanation: 'O ato reflexo de engolir (Slide 14) desloca a glote sobre a laringe, fechando a via respiratória anterior e canalizando o trajeto da sonda diretamente para o esôfago posterior.',
    source: 'SNG e SNE - Passos Legais Slide 14'
  },
  {
    id: 'sng_sne_more_3',
    topic: 'SNG e SNE',
    difficulty: 'Difícil',
    questionText: 'A infusão rápida de alimentação enteral a temperaturas muito baixas (gelada) pela sonda nasoenteral está relacionada a qual complicação gastrointestinal?',
    type: 'multiple-choice',
    options: [
      'Sinusite purulenta bilateral.',
      'Cólica intestinal, diarreia e náuseas severas por choque térmico da mucosa duodenal.',
      'Hemorragia digestiva alta ativa catastrófica.',
      'Obstrução imediata do lúmen plástico.'
    ],
    correctAnswer: 'B',
    explanation: 'A entrada de dieta gelada (Slide 27) excita as fibras musculares entéricas do duodeno e jejuno, induzindo peristaltismo desordenado agressivo (cólica, espasmo, e esvaziamento diarreico rápido).',
    source: 'SNG e SNE - Complicações Slide 27'
  },
  {
    id: 'sng_sne_more_4',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Ao verificar o resíduo gástrico (aspiração de refluxo alimentar) em paciente recebendo nutrição enteral, qual volume em mL de retorno deve alertar o profissional para suspender temporariamente a dieta sob prescrição?',
    type: 'multiple-choice',
    options: [
      'Qualquer volume acima de 10 mL.',
      'Volume de resíduo gástrico superior a 200 ou 250 mL, sugerindo estase ou má digestão entérica.',
      'Apenas resíduos inferiores a 5 mL.',
      'O resíduo gástrico nunca deve ser medido ou avaliado.'
    ],
    correctAnswer: 'B',
    explanation: 'Grandes resíduos gástricos (Slide 30) denotam retardo esvaziamento intestinal. Recomenda-se suspender para barrar distensões, refluxo e consequente broncoaspiração perigosa (Slide 30).',
    source: 'SNG e SNE - Controle de Resíduo Slide 30'
  },
  {
    id: 'sng_sne_more_5',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Qual cuidado evita a contaminação fúngica e proliferação bacteriana nos recipientes (frascos e equipos) de alimentação enteral?',
    type: 'multiple-choice',
    options: [
      'Lavar os frascos com detergente de pia e reutilizá-los indefinidamente.',
      'Trocar os recipientes e equipos de nutrição de sistema aberto a cada 24 horas úteis consecutivas de infusão, mantendo a dieta sob rigoroso controle térmico.',
      'Ferver os equipos a cada inserção celular.',
      'Deixar a fita da dieta exposta ao sol.'
    ],
    correctAnswer: 'B',
    explanation: 'O equipo enteral em sistema aberto (Slide 18, 27) é veículo rico de desenvolvimento biológico oportunista pelo teor calórico das refeições. Requer troca rígida de rotina a cada 24h.',
    source: 'SNG e SNE - Segurança Slide 18'
  },
  {
    id: 'sng_sne_more_6',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'O posicionamento correto de Sonda de Levine (SNG PVC) antes da aspiração gástrica ativa pode ser validado beira leito por meio de:',
    type: 'multiple-choice',
    options: [
      'Medição visual sem marcas ou fitas.',
      'Aspiração de líquido com pH ácido inferior a 5,5 (confirmando suco gástrico) e teste de ausculta com som de borbulho característico no quadrante superior esquerdo após insuflar rapidamente 15-20 mL de ar pelo cano.',
      'Infiltração de água oxigenada.',
      'Insuflar helíque simples no duodeno.'
    ],
    correctAnswer: 'B',
    explanation: 'A verificação inicial à beira do leito (SNG - Slides 14-16) engloba testar o pH do aspirado e escutar com estetoscópio o borbulho de ar injetado no estômago, embora o Raio-X seja o padrão de ouro para SNE.',
    source: 'SNG e SNE - Validação Slide 14'
  },
  {
    id: 'sng_sne_more_7',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'A administração de comprimidos triturados e misturados de forma simultânea (juntos no mesmo copo) por sonda enteral é a rota mais rápida e livre de riscos na enfermaria.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Esmagar vários remédios juntos pode alterar a biodisponibilidade e provocar precipitados físicos químicos causadores diretos de obstrução do cateter. Cada remédio deve ser moído dedutivamente e administrado de forma isolada (Slide 23).',
    source: 'SNG e SNE - Segurança de Medicamentos Slide 23'
  },
  {
    id: 'sng_sne_more_8',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'O que deve ser realizado imediatamente ANTES de iniciar a infusão contínua da dieta enteral via sonda?',
    type: 'multiple-choice',
    options: [
      'Injetar 50 mL de suco cítrico morno de limão.',
      'Verificar o posicionamento correto da sonda por marcações externas e testar a patência/permeabilidade (ausculta/resíduo).',
      'Deitar completamente o leito.',
      'Promover aspiração forçada de bile.'
    ],
    correctAnswer: 'B',
    explanation: 'Antes de infundir qualquer volume na luz da sonda (Slide 26), o técnico revisa as demarcações externas de fixação nasal e a permeabilidade para eliminar o risco de aporte de dieta em cavidade cega ou pulmão.',
    source: 'SNG e SNE - Slide 26'
  },
  {
    id: 'sng_sne_more_9',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Qual a conduta recomendada se a marcação de esparadrapo da sonda apresentar deslocamento externo maior que 10 cm em relação à última anotação?',
    type: 'multiple-choice',
    options: [
      'Empurrar o excedente para dentro de volta.',
      'Pausar as infusões imediatamente, sinalizar o Enfermeiro responsável para avaliar por meio de raio-x ou teste físico o destino e trajeto atual do lúmen antes de recomeçar infusões.',
      'Amarrar o esparadrapo com maior pressão.',
      'Ignorar se o paciente apresentar diurese normal.'
    ],
    correctAnswer: 'B',
    explanation: 'Deslocamentos externos sinalizam saída da extremidade distal do estômago/duodeno. Alimentar com extremidade deslocada pode culminar em aporte brônquico mortal, devendo ser suspensa a terapia até reinserção/avaliação (Slide 30).',
    source: 'SNG e SNE - Segurança de Posicionamento'
  },
  {
    id: 'sng_sne_more_10',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A retirada de uma sonda enteral de longa permanência (SNE) após ordem clínica médica deve ser conduzida sob quais cuidados de segurança mecânica?',
    type: 'multiple-choice',
    options: [
      'Puxar repentinamente com força em fluxo rápido contínuo sem pausas rítmicas.',
      'Sinalizar o paciente para respirar fundo e pausadamente, clampar/fechar a sonda totalmente para anular refluxo ácido livre do trajeto interno, e retirar a sonda de forma suave, contínua e firme recolhendo-a com luvas de procedimento.',
      'Infundir 100 mL de soro gelado antes da retirada.',
      'A retirada de sondas só é executada no bloco cirúrgico sob sedação total.'
    ],
    correctAnswer: 'B',
    explanation: 'A remoção assistida (Slide 15, 30) exige sutileza técnica, clampar mecânico de luz para barrar fluxo residual de suco nas mucosas laringeas e coleta com panos descartáveis limpos.',
    source: 'SNG e SNE - Retirada de Sonda Slide 15'
  },
  {
    id: 'sng_sne_more_11',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'As sondas de poliuretano (SNE) requerem maior tempo de permanência clínica no leito se comparadas às de PVC (SNG). Quantas semanas de suporte contínuo este modelo comumente tolera antes de requerer reavaliação?',
    type: 'multiple-choice',
    options: [
      'No máximo 24 horas consecutivas.',
      'De 4 a 6 semanas (médio/longo prazo), devido à excelente bio-tolerância mecânica do material.',
      'Até 6 meses corridos ininterruptos.',
      'Sondas de poliuretano exigem substituição cirúrgica com doze horas.'
    ],
    correctAnswer: 'B',
    explanation: 'Silicones e poliuretanos (SNE - Slide 21) são flexíveis e resistentes à quebra química do suco estomacal, tolerando de 30 a 45 dias no leito sem requerer trocas repetidas.',
    source: 'SNG e SNE - Slide 21'
  },
  {
    id: 'sng_sne_more_12',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'No preparo beira leito de fórmulas enterais reconstituídas de pó (fórmulas artesanais ou industrializadas), qual o tempo máximo de validade sob bancada e qual cuidado higiênico se impõe?',
    type: 'multiple-choice',
    options: [
      'Pode durar 48 horas sob calor comum de enfermaria.',
      'Validade de no máximo 4 horas sob temperatura ambiente pós-reconstituição, devendo ser mantida em refrigeração clínica dedicada se não infundida de imediato.',
      'Não há limite térmico para dietas secas.',
      'Deve-se adicionar vinagre estéril para frear a proliferação biológica.'
    ],
    correctAnswer: 'B',
    explanation: 'Dietas em pó reconstituídas com águas residuais (Slide 18, 27) têm altíssimo risco de estragar rapidamente no quarto, devendo ser descartadas após 4 horas abertas.',
    source: 'SNG e SNE - Slide 27'
  },
  {
    id: 'sng_sne_more_13',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A ocorrência de diarreia em pacientes sob alimentação em sonda enteral está comumente ligada à velocidade excessiva de gotejo e à alta osmolaridade da fórmula.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Fórmulas hiperosmolares infundidas rapidamente (SNE - Slide 24, 27) causam atração osmótica de água para o lúmen intestinal, provocando diarreia agressiva e cólicas, exigindo ajuste da infusão para fluxo lento.',
    source: 'SNG e SNE - Diarreia Slide 24'
  },
  {
    id: 'sng_sne_more_14',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'No transporte do paciente sondado para exames internos no hospital, o técnico de enfermagem deve obrigatoriamente realizar qual ação preventiva na sonda?',
    type: 'multiple-choice',
    options: [
      'Deixar os canais de dieta totalmente abertos e pingando no chão.',
      'Clampar/fechar firmemente e proteger as vias de infusão com tampas estéreis para evitar derramamentos ou entrada passiva de ar do ambiente.',
      'Retirar a sonda do nariz para recolocar após o exame.',
      'Infundir 50 mL de água sanitária para higienizar o caminho.'
    ],
    correctAnswer: 'B',
    explanation: 'Clampar e selar as conexões (Slide 18) impede refluxo gástrico passivo sob balanços das macas de transporte e protege de contaminação microbiológica decorrente de esbarros mecânicos.',
    source: 'SNG e SNE - Segurança no Transporte'
  },
  {
    id: 'sng_sne_more_15',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A gastrostomia (GTT) ou jejunostomia (JTT) são opções cirúrgicas indicadas para nutrição enteral quando a necessidade terapêutica ultrapassa qual limiar cronológico?',
    type: 'multiple-choice',
    options: [
      'Sempre que a dieta durar mais que 24 horas consecutivas.',
      'Quando o planejamento nutricional assistencial ultrapassa 4 a 6 semanas (longo prazo), visando maior conforto físico e mitigação de lesões nasofaríngeas continuadas.',
      'Sempre que o paciente pedir por via oral.',
      'Em qualquer internação clínica eletiva comum.'
    ],
    correctAnswer: 'B',
    explanation: 'Para prazos longos (> 6 semanas), as sondas nasais perdem segurança devido ao atrito continuado em vias áreas superiores, justificando o estabelecimento cirúrgico de acesso abdominal direto (GTT/JTT) (Slide 21).',
    source: 'SNG e SNE - GTT Slide 21'
  },
  {
    id: 'sng_sne_more_16',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Qual complicação respiratória grave e potencialmente letal está diretamente associada ao mau posicionamento ou refluxo alimentar em sonda gástrica?',
    type: 'multiple-choice',
    options: [
      'Sinusite esfenoidal purulenta.',
      'Pneumonia aspirativa (ou broncoaspiração de dieta para a árvore traqueobrônquica).',
      'Insuficiência renal induzida por urina.',
      'Atelectasia de Frankfurt.'
    ],
    correctAnswer: 'B',
    explanation: 'A entrada de dieta alcalina ou líquida no pulmão (Slide 25) causa pneumonia química ou bacteriana violenta e refratária com alto índice de mortalidade hospitalar beira leito.',
    source: 'SNG e SNE - Complicações Slide 25'
  },
  {
    id: 'sng_sne_more_17',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Para a mensuração exata da Sonda Nasogástrica de PVC (SNG) em adultos, qual método métrico anatômico deve ser rigorosamente seguido?',
    type: 'multiple-choice',
    options: [
      'Da testa até o mamilo esquerdo adicionando 30 cm.',
      'Método NEX: Da ponta do nariz ao lobo da orelha e deste até o apêndice xifoide do osso esterno, demarcando o ponto com fita adesiva para guiar a progressão de inserção.',
      'Do queixo até o umbigo linearmente.',
      'Mede-se com trena industrial a perna esquerda.'
    ],
    correctAnswer: 'B',
    explanation: 'A mensuração pelo método NEX (nariz-orelha-xifoide, Slide 14) assegura que a extremidade final da sonda gástrica atinja com estrita precisão mecânica a cavidade de digestão ácida (estômago).',
    source: 'SNG e SNE - Medição NEX Slide 14'
  },
  {
    id: 'sng_sne_more_18',
    topic: 'SNG e SNE',
    difficulty: 'Difícil',
    questionText: 'Ao passar uma Sonda Nasoenteral (SNE) com mola de tungstênio, qual manobra de deglutição mecânica e corporal facilita a transposição pilórica para o duodeno?',
    type: 'multiple-choice',
    options: [
      'Elevar a cabeceira e colocar o doente de barriga para baixo de imediato.',
      'Manter o paciente deitado lateralmente para o lado direito (decúbito lateral direito - DLD) para estimular a descida por gravidade e ação peristáltica do bulbo em direção ao duodeno.',
      'Manter em Trendelenburg forçado.',
      'Infundir 50 mL de ar quente pelo tubo.'
    ],
    correctAnswer: 'B',
    explanation: 'Colocar o doente em decúbito lateral direito (DLD, Slide 22) direciona a ogiva de tungstênio pesada distal por gravidade física rumo ao piloro estomacal, otimizando o peristaltismo gástrico natural.',
    source: 'SNG e SNE - Transposição Pilórica Slide 22'
  },
  {
    id: 'sng_sne_more_19',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'O Técnico de Enfermagem deve realizar a lavagem higiênica e asseptização das mãos rigorosamente antes de manusear ou conectar bolsas de dietas na sonda.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A assepsia das mãos (SNE - Slide 18) é principal barreira de entrada microbiológica no lúmen de bicos e equipos de dietas que causam surtos de diarreia em enfermarias.',
    source: 'SNG e SNE - Lavagem das Mãos Slide 18'
  },
  {
    id: 'sng_sne_more_20',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Qual a conduta técnica imediata e correta ao constatar que a sonda gástrica com lúmen aberto e sifonada está apresentando refluxo gasoso abundante?',
    type: 'multiple-choice',
    options: [
      'Fechar completamente a tampa da sonda de PVC.',
      'Manter a via de descompressão conectada à bolsa de coleta abaixo do leito (sifonagem aberta), permitindo o livre fluxo retrógrado de ar e quimo acumulado.',
      'Aspirar 100 mL de água morna sob forte pressão.',
      'Injetar vaselina líquida para selar o refluxo.'
    ],
    correctAnswer: 'B',
    explanation: 'O refluxo gasoso ou líquido na sifonagem aberta (Slide 7, 9) indica hiperpressão interna intestinal ou gástrica. Manter o dreno aberto previne vômitos e tonturas gástricas traumáticas de beira leito.',
    source: 'SNG e SNE - Sifonagem Slide 7'
  },
  {
    id: 'sng_sne_more_21',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A administração de dietas enterais em sistema fechado (bolsas prontas industrializadas estéreis) racha o risco contaminação externa assistida e permite gotejamentos mais prolongados.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Os sistemas fechados contam com selo hermético estéril que reduz em até 95% o risco de contaminação ambiental (Slide 27), autorizando vazões contínuas longas com equipos dedicados.',
    source: 'SNG e SNE - Sistema Fechado Slide 27'
  },
  {
    id: 'sng_sne_more_22',
    topic: 'SNG e SNE',
    difficulty: 'Fácil',
    questionText: 'As sondas de PVC rígido (Levine) usadas para SNG são classificadas como materiais descartáveis de uso único e de curto período no hospital.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Sondas de Levine (Slide 21) irritam as mucosas de permanência por endurecerem em contato com o ácido gástrico. Recomenda-se seu uso para no máximo 3 a 5 dias.',
    source: 'SNG e SNE - PVC Slide 21'
  },
  {
    id: 'sng_sne_more_23',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Qual o papel clínico e biológico de deparar-se com anotações de aspecto de refluxo gástrico sob termo "bilioso"?',
    type: 'multiple-choice',
    options: [
      'Trata-se de refluxo purulento com bactérias pulmonares.',
      'Aspecto de transição esverdeada/amarelada, viscosa e ácida indicando presença de bile, comum em jejuns longos ou gastrites refratárias.',
      'Líquido fecal escuro indicando perfuração anal de beira de leito.',
      'Secreção mucosa avermelhada com traços de gordura.'
    ],
    correctAnswer: 'B',
    explanation: 'O termo bilioso designa o fluido rico em pigmentos biliares (bile - Slide 16) de pH neutro a alcalino que emana de refluxo gástrico em doentes gástricos inativos.',
    source: 'SNG e SNE - Termos de Avaliação'
  },
  {
    id: 'sng_sne_more_24',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'A obstrução permanente de uma sonda de nutrição exige qual conduta definitiva de enfermagem se todas as manobras suaves de flushing falharem?',
    type: 'multiple-choice',
    options: [
      'Passagem de ar quente sob altíssima pressão de vácuo mecânico.',
      'Substituição e reinstalação completa de nova sonda nasoenteral pelo Enfermeiro responsável clínico.',
      'Corte mecânico da extremidade nasal da sonda.',
      'Inundar a narina do paciente com álcool.'
    ],
    correctAnswer: 'B',
    explanation: 'Caso a obstrução tecida no lúmen interno seja permanente (Slide 23) e resista a águas mornas, o cateter é inutilizado, exigindo passagem segura de novo dispositivo pelo Enfermeiro.',
    source: 'SNG e SNE - Obstrução Crônica'
  },
  {
    id: 'sng_sne_more_25',
    topic: 'SNG e SNE',
    difficulty: 'Médio',
    questionText: 'Durante a infusão da alimentação por gravidade, o gotejamento parou de correr completamente. De forma sequencial, qual cuidado de triagem beira leito deve guiar o técnico em enfermagem?',
    type: 'multiple-choice',
    options: [
      'Arrancar a fita de fixação nasal rasgando a pele do nariz.',
      'Verificar o posicionamento do clamp (regulador de fluxo), inspecionar dobraduras ou acovelamentos na extensão plástica do equipo, avaliar obstruções internas e tentar irrigar suavemente com 20 mL de água destilada morna.',
      'Retirar a sonda do paciente de forma abrupta.',
      'Aumentar o gotejo no fluxo máximo de infusão.'
    ],
    correctAnswer: 'B',
    explanation: 'A triagem inicial beira leito analisa as causas mecânicas simples de trânsito físico (Clamps, dobras de equipo, dobras no canal do nariz, Slide 23, 27) para evitar trocas caras de cateteres desnecessariamente.',
    source: 'SNG e SNE - Slide 27'
  }
];
