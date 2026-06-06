import { Question } from '../types';

export const SONDAGEM_MORE_QUESTIONS: Question[] = [
  {
    id: 'sond_more_1',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Para a fixação segura da sonda vesical de demora (Foley) em pacientes do sexo masculino, em qual localidade anatômica do corpo o técnico deve aderir e deitar as fitas adesivas?',
    type: 'multiple-choice',
    options: [
      'Na asa esquerda do osso ilíaco pélvico superior.',
      'Na face anterolateral da coxa ou região hipogástrica (baixo ventre), para evitar tração uretrovesical contínua e risco de formação de fístulas ou necrose uretral.',
      'Na fossa cubital basílica superior.',
      'Não se deve fixar a sonda para dar liberdade mecânica à bolsa.'
    ],
    correctAnswer: 'B',
    explanation: 'A uretra masculina possui curvaturas reflexas que sofrem traumas por estiramento mecânico da sonda. Fixá-la na coxa ou hipogastro (Slide 61, 63) suaviza as trações decorrentes de esbarros no leito.',
    source: 'Sondagem Vesical - Fixações e Cuidados Slide 61'
  },
  {
    id: 'sond_more_2',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Para a fixação segura da sonda vesical de demora (Foley) em pacientes do sexo feminino, onde a sonda deve ser fixada?',
    type: 'multiple-choice',
    options: [
      'Na face interna anterior da coxa, sem exercer tração compressiva sobre os pequenos lábios vaginais.',
      'Na parede superior lombar posterior.',
      'Nas falanges dos pés.',
      'Diretamente sobre a crista ilíaca anterior direita.'
    ],
    correctAnswer: 'A',
    explanation: 'Em mulheres, fixar na face interna anterior da coxa (Slide 61) previne trações excessivas causadas pelo peso e balanço do saco de diurese, preservando a integridade da derme meatal uretro-vaginal.',
    source: 'Sondagem Vesical - Fixações e Cuidados Mulher'
  },
  {
    id: 'sond_more_3',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'No preparo asséptico para inserção e estabelecimento do cateter vesical por parte do Enfermeiro, qual a finalidade da xilocaína geleia a 2% em homens e mulheres?',
    type: 'multiple-choice',
    options: [
      'Fornecer nutrientes estéreis para a derme anal.',
      'Lubrificar o canal uretral e exercer ação anestésica local temporária que reduz o espasmo uretral mecânico e diminui o sofrimento do doente ao transpor os esfíncteres.',
      'Acelerar de forma química a filtração glomerular renal.',
      'Limpar os fungos do canal vaginal posterior.'
    ],
    correctAnswer: 'B',
    explanation: 'A xilocaína geleia (Slide 59) reduz a dor de atrito físico e promove o relaxamento das fibras musculares da uretra masculina e feminina, minimizando riscos de micro-lacerações e falsas vias.',
    source: 'Sondagem Vesical - Inserções Slide 59'
  },
  {
    id: 'sond_more_4',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Assinale qual material clínico e estéril NÃO deve ser injetado para insuflar o balão ou balonete de retenção interna da Sonda de Foley, sob o risco de cristalização do produto e quebra de válvula de esvaziamento:',
    type: 'multiple-choice',
    options: [
      'Água destilada estéril de ampola.',
      'Soro Fisiológico (salino a 0,9%), pois os cristais de sódio se agregam e acumulam com o passar dos dias, entupindo a luz da microválvula plástica de esvaziamento, travando a sonda no canal.',
      'Água purificada filtrada de uso exclusivo.',
      'Os balonetes nunca devem ser inflados por líquidos frios.'
    ],
    correctAnswer: 'B',
    explanation: 'Injetar soro fisiológico (Slide 61) no balonete provoca cristalização salina insolúvel interna sãs. Ao tentar retirá-la após semanas, a válvula endurecida impede a saída do ar/água, exigindo procedimento cirúrgico traumático urológico.',
    source: 'Sondagem Vesical - Cuidados de Balão Slide 61'
  },
  {
    id: 'sond_more_5',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'A passagem de sonda vesical de demora constitui atividade asséptica complexa de alto risco infeccioso. Assinale qual a prerrogativa legal que dita as competências profissionais na enfermagem (COFEN 507/2015):',
    type: 'multiple-choice',
    options: [
      'A inserção da sonda pode ser realizada por estagiários de farmácia sem supervisão.',
      'O cateterismo vesical (SVA/SVD) é atividade de responsabilidade e competência privativa do Enfermeiro sob leis vigentes (Lei 7.498/86), cabendo ao Técnico de Enfermagem auxiliar estéril no preparo prévio, assepsias ambientais e posterior manutenção segura do circuito fechado.',
      'A passagem é delegada exclusivamente aos técnicos da radiologia.',
      'Não há marcos legais do COFEN para sondagens no território nacional.'
    ],
    correctAnswer: 'B',
    explanation: 'A inserção invasiva urinária (Parecer COFEN 507/2015) exige competência privativa de Enfermeiros e Médicos assistentes. O técnico at ativamente prestando apoio aseptico na mesa e monitorando dreno (Slide 4, 57).',
    source: 'Sondagem Vesical - Marcos Legais COFEN'
  },
  {
    id: 'sond_more_6',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Durante a higienização de rotina de leitos de pacientes sob SVD, o meato uretral masculino e feminino deve ser limpo apenas com algodão embebido em álcool a 70% sob forte massagem.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'Aplicar álcool 70% direto nas mucosas uretro-genitais (Sondagem - Slide 61) causa dores terríveis e queimaduras químicas graves. A assepsia diária e perineal de manutenção deve ser feita de forma suave com água e sabão neutro.',
    source: 'Sondagem Vesical - Assepsias Slide 61'
  },
  {
    id: 'sond_more_7',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Como é denominada a alteração clínica da eliminação urinária em que o paciente apresenta frequentes e seguidos despertares noturnos de quebra de sono exclusivamente com a finalidade de urinar pequeno volume?',
    type: 'multiple-choice',
    options: [
      'Anúria obstrutiva pélvica.',
      'Noctúria ou nictúria.',
      'Piúria purulenta.',
      'Disúria mecânica.'
    ],
    correctAnswer: 'B',
    explanation: 'O termo noctúria/nictúria (Sondagem - Slide 72) designa o aumento patológico de micção sãs no horário sono, comum em cardiopatias de compensação ou hiperplasia prostática.',
    source: 'Sondagem Vesical - Terminologias Slide 72'
  },
  {
    id: 'sond_more_8',
    topic: 'Sondagem Vesical',
    difficulty: 'Difícil',
    questionText: 'Ao deparar-se com anotações sobre urina cujo aspecto é descrito como colúria ou urina em aspecto de Coca-Cola escura, qual alteração sistêmica o técnico deve suspeitar?',
    type: 'multiple-choice',
    options: [
      'Infiltração de água destilada urinária.',
      'Presença patológica de pigmentos de bilirrubinas em grande abundância na urina, denotando distúrbios de obstrução biliar, hepáticas (icterícias) ou anemias hemolíticas severas.',
      'Diabetes insipidus sem controle hormonal.',
      'Doença pulmonar provocada por retenção carbônica.'
    ],
    correctAnswer: 'B',
    explanation: 'Colúria representa retenção e filtração exagerada de bilirrubinas puras no rim (Sondagem - Slide 73), alterando o curo hídrico urinário para marrom enegrecido com espuma dourada característica.',
    source: 'Sondagem Vesical - Terminologias Slide 73'
  },
  {
    id: 'sond_more_9',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'No tocante à obstrução mecânica e repentina da Sonda Vesical de Demora, qual conduta o técnico deve adotar para triagem inicial beira leito?',
    type: 'multiple-choice',
    options: [
      'Arrancar a bomba coletora no quadrante superior.',
      'Examinar o trajeto físico dos canos procurando por dobras, torções, pinçamentos de equipe ou compressão mecânica pelas grades da cama, além de observar se o paciente deitou por cima da via.',
      'Forçar 100 mL de álcool 70% uretral adentro.',
      'Nenhuma ação, pois a urina rompe o bloqueio por pressão interna.'
    ],
    correctAnswer: 'B',
    explanation: 'Pesquisar falhas de posicionamento mecânico (Sondagem - Slide 61) costuma diluir 90% das interrupções de fluxo urinário agudo no leito sem requerer manipulação interna invasiva do circuito.',
    source: 'Sondagem Vesical - Triagem de Obstrução'
  },
  {
    id: 'sond_more_10',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'O termo de eliminação urinária "Piúria" é definido de forma aséptica e fidedigna como a presença macroscópica ou microscópica de pus (glóbulos brancos mortos e bactérias) diluídos na urina, conferindo aspeto leitoso ou turvo fétido.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Piúria (Sondagem - Slide 72) é indicadora direta de infecções do trato urinário ativo, sendo comum a turvação visual importante agregada a flocos de fibrina e células epiteliais de descamação.',
    source: 'Sondagem Vesical - Terminologias Slide 72'
  },
  {
    id: 'sond_more_11',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Ao mensurar a diurese no balanço hídrico do acamado, qual volume numérico em 24 horas demarca cientificamente a presença de Oligúria clássica?',
    type: 'multiple-choice',
    options: [
      'Qualquer volume acumulado entre 10 e 15 mL.',
      'Volume total urinário em 24 horas inferior a 400 ou 500 mL no adulto.',
      'Volume superior a 3000 mL de água.',
      'Oligúria e anúria correspondem ao mesmo volume de 10 mL.'
    ],
    correctAnswer: 'B',
    explanation: 'Oligúria (Sondagem - Slide 72) denota deprimida taxa de filtração renal, alertando para desidratações severas ou insuficiências renais progressivas ao longo do dia.',
    source: 'Sondagem Vesical - Terminologias Slide 72'
  },
  {
    id: 'sond_more_12',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'No que tange à inserção inicial de sonda de Foley, com quantos mL de líquido estéril o balonete habitualmente deve ser inflado em adultos saudáveis e qual o diâmetro padrão expresso em letras da sonda?',
    type: 'multiple-choice',
    options: [
      'Até 100 mL; calibre de No. 34 FR.',
      'Normalmente de 10 mL de água destilada, utilizando calibres adultos situados de No. 12 FR a No. 16 FR.',
      'Com apenas 0,1 mL; calibre microscópico de No. 2 FR.',
      'Insufla-se ar comprimido até a narina ranger.'
    ],
    correctAnswer: 'B',
    explanation: 'Injetar 10 mL de água destilada (Slide 61) preenche perfeitamente o balonete na fossa vesical sem rasgar os tecidos. Calibres de 12 a 16 FR transitam confortavelmente na uretra adulta.',
    source: 'Sondagem Vesical - Insuflação Slide 61'
  },
  {
    id: 'sond_more_13',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'O duto urinário que drena urina fina por SVA (Sondagem Alívio) é retirado de imediato após cessar o gotejamento na comadre ou pia estéril.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A sondagem de alívio (Slide 58) visa drenar e esvaziar a bexiga agudamente, sendo o cateter de Nelaton retirado assim que o refluxo recolhido míngua por completo.',
    source: 'Sondagem Vesical - Nelaton Slide 58'
  },
  {
    id: 'sond_more_14',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Doente em uso de SVD apresenta urina espessa, escura, acompanhada de febre alta de cabeceira de 39°C e calafrios proeminentes. Qual a conduta preventiva e de socorro por parte do técnico?',
    type: 'multiple-choice',
    options: [
      'Trocar voluntariamente a sonda do nariz sem comunicar o Enfermeiro.',
      'Pausar dreno, manter o paciente hidratado (se prescrito) e convocar o Enfermeiro imediato para triar ITU bacteriana e colher urocultura estéril por via de aspiração do látex vedado.',
      'Submeter o paciente a lavagem intestinal gelada.',
      'Injetar 50 mL de Amoxicilina líquida direta no balonete uretrovesical.'
    ],
    correctAnswer: 'B',
    explanation: 'Sinais sistêmicos de febre e turvação (Sondagem - Slide Infecção ITU) desenham infecção urinária ativa severa. Exige-se manuseio assepto de triagem e contato com liderança técnico-assistencial.',
    source: 'Sondagem Vesical - Infecções'
  },
  {
    id: 'sond_more_15',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Nas anotações técnicas pós cateterismo executado pelo enfermeiro, deve constar o calibre da sonda inserida, o volume injetado no balão e o volume e aspecto da diureses inicial recolhida.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Essas variáveis (Slide 66) representam o valor de vigilância sanitária e de andamento de enfermagem da implantação cirúrgica de corpos estranhos invasivos.',
    source: 'Sondagem Vesical - Práticas de Registro'
  },
  {
    id: 'sond_more_16',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'No homem, o posicionamento do pênis durante a passagem da sonda vesical pelo enfermeiro visa retificar a curva uretral. Qual a angulação mecânica adequada?',
    type: 'multiple-choice',
    options: [
      'Pênis mantido apontado para baixo em direção ao quadril.',
      'Pênis mantido elevado a 90° de perpendicularidade com o abdômen, alinhando a uretra anterior.',
      'Pênis dobrado sobre a fossa inguinal esquerda.',
      'Não há alteração mecânica de tração pélvica.'
    ],
    correctAnswer: 'B',
    explanation: 'Elevar o pênis a 90° (Sondagem - Slide Técnico) desarma as curvaturas uretrais prostática e bulbar, viabilizando que o cateter progrida suavemente em trajeto retificado.',
    source: 'Sondagem Vesical - Passos Técnicos'
  },
  {
    id: 'sond_more_17',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas descreve "Disúria", termo clássico de desconforto anotado diariamente?',
    type: 'multiple-choice',
    options: [
      'Excesso de urina em volume (> 3000 mL/dia).',
      'Queimação, dor, sofrimento mecânico ou dificuldade progressiva no trajeto da micção.',
      'Urina purulenta leitosa fétida.',
      'Perda de urina involuntária durante o riso.'
    ],
    correctAnswer: 'B',
    explanation: 'Disúria (Slide 72) é dor uretral ou meatal típica de inflamações bacterianas de bexiga (cistites) ou atrito por sondagem vesical recente.',
    source: 'Sondagem Vesical - Terminologias Slide 72'
  },
  {
    id: 'sond_more_18',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'O descarte de urina coletada em dreno de Foley deve ocorrer quando a capacidade do saco bolsa atinge qual limite volumétrico no leito?',
    type: 'multiple-choice',
    options: [
      'Apenas após transbordar no chão.',
      'Quando atinge dois terços (2/3) de sua capacidade volumétrica útil totale (geralmente entre 1.000 e 1.200 mL), prevenindo tração mecânica excessiva pelo peso de garras da cama.',
      'Sempre a cada 5 minutos ininterruptos.',
      'Deixa-se a bolsa coletora cheia por semanas.'
    ],
    correctAnswer: 'B',
    explanation: 'Esvaziar bolsas a 2/3 (Slide 61) barra que a sobrecarga deforme ou estrague a fixação do cateter na perna do doente, além de reduzir riscos de perdas e contaminações retrógradas.',
    source: 'Sondagem Vesical - Manutenções'
  },
  {
    id: 'sond_more_19',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'O rompimento espontâneo do balão protetor da Foley ou a expulsão passiva da sonda vesical exige a reinserção imediata da via de dreno por Enfermeiro assistente.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Expulsões involuntárias detonam ruptura de balões (Slide 61). Requer reavaliação da derme e de uretra e passagem asséptica de novo dispositivo de Foley de demanda.',
    source: 'Sondagem Vesical - Complicações SVD'
  },
  {
    id: 'sond_more_20',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Para a irrigação manual intermitente ou desobstrução de via urinária obstruída sob ordem técnica, qual solvente estéril deve cooperar com a lavagem mecânica?',
    type: 'multiple-choice',
    options: [
      'Água bi-destilada gelada.',
      'Soro Fisiológico (SF 0,9%) estéril infundido em volume calibrado (ex: 20-30 mL) sob técnica asséptica direta de seringa de ponta escorregadia Lola.',
      'Clister oleoso focado na fossa urológica.',
      'Álcool etílico denso e quente.'
    ],
    correctAnswer: 'B',
    explanation: 'Lavar manualmente (Foley - Slide Desobstruções) exige assepsia rigorosa de bicos de equipo e o uso de solução salina estéril sã para evitar que patógenos ambientais adentrem retrogradamente o sistema urológico.',
    source: 'Sondagem Vesical - Irrigação'
  },
  {
    id: 'sond_more_21',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'O aspeto de urina definido como "Hematúria macroscópica franca" indica o quê visivelmente ao profissional de enfermagem?',
    type: 'multiple-choice',
    options: [
      'Urina purulenta totalmente amarela viscosa.',
      'Urina de coloração avermelhada intensa, nítida, com presença visível de sangue total ou coágulos que comprometem a luz de saída urinária.',
      'Urina sem coloração escura isenta de glóbulos brancos.',
      'Presença de fezes diluídas líquidas na bolsa urinária.'
    ],
    correctAnswer: 'B',
    explanation: 'A hematúria macroscópica (Sondagem - Slide 72) salienta sangramento volumoso ativo urogenital, demandando monitoramento do ritmo urinário e imediata anotação.',
    source: 'Sondagem Vesical - Hematúrias Slide 72'
  },
  {
    id: 'sond_more_22',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Assinale qual cuidado barreira do Técnico em Enfermagem é primordial antes de desconectar temporariamente a bolsa coletora urinária para troca de equipos?',
    type: 'multiple-choice',
    options: [
      'Desconectar sem luvas e chacoalhar no ar.',
      'Evitar desconectar (o sistema deve ser mantido estritamente fechado hermético); caso seja indispensável quebrar a ligação, desinfetar previamente com Álcool 70% e utilizar luvas de procedimento estéreis sãs.',
      'Derramar 10 mL de éter dentro da vagina.',
      'Não há barreiras requeridas diante de trocas fáceis.'
    ],
    correctAnswer: 'B',
    explanation: 'Manter circuito vesical vedado fechado (Sondagem - Slide Manutenção) racha em até 90% as chances de ITU retrógrada. A desconexão é evitada por representar quebra higiênica de isolamento biológico.',
    source: 'Sondagem Vesical - Controle Infeccioso'
  },
  {
    id: 'sond_more_23',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Qual das alternativas conceitua de forma precisa o termo clínico urológico "Poliúria"?',
    type: 'multiple-choice',
    options: [
      'Ausência completa de urina (< 100 mL/dia).',
      'Aumento patológico excessivo do volume diário urinário acumulado excede 2.500 mL em 24h, sem relação direta com restrição líquida.',
      'Dor lacerante ao urinar diária.',
      'Dificuldade de controlar o fluxo urinário sphincter.'
    ],
    correctAnswer: 'B',
    explanation: 'Poliúria (Slide 72) é comumente encontrada em pacientes sob patologias metabólicas descompensadas (como Diabetes Mellitus ativa descontrolada ou fase poliúrica pós NTA).',
    source: 'Sondagem Vesical - Terminologias Slide 72'
  },
  {
    id: 'sond_more_24',
    topic: 'Sondagem Vesical',
    difficulty: 'Fácil',
    questionText: 'Antes de proceder com a retirada programada da Sonda Foley do paciente de dreno de longa data, o profissional deve esvaziar/aspirar totalmente a água do balonete usando uma seringa vazia acoplada na válvula colorida.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A remoção assistida (Foley - Slide 61, 66) exige racha absoluto do balonete inflado. Puxar sem aspirar deita ruptura e laceração severa irreversível da mucosa da uretra.',
    source: 'Sondagem Vesical - Remoções SVD Slide 61'
  },
  {
    id: 'sond_more_25',
    topic: 'Sondagem Vesical',
    difficulty: 'Médio',
    questionText: 'Qual a recomendação prioritária de higiene para o paciente sondado que se encontra com diarreia abundante ou flatos gastrointestinais úmidos recorrentes?',
    type: 'multiple-choice',
    options: [
      'Ignorar as evacuações por serem de bicos retais distintos.',
      'Proceder à higienização perineal e anal imediata com água e sabão neutro para que a flora fecal bacteriana não migre de forma ascendente pela sonda vesical até a bexiga.',
      'Aplicar álcool gel 70% em todo o pênis ou vulva.',
      'Dar banho de aspersão com éter no quarto do paciente.'
    ],
    correctAnswer: 'B',
    explanation: 'A contaminação vaginal ou peniana por patógenos intestinais fecal (como E. coli, Slide ITU) é principal catalisadora de infecções graves urinárias em acamados sondados, induzindo sepse.',
    source: 'Sondagem Vesical - Prevenção de Infecções'
  }
];
