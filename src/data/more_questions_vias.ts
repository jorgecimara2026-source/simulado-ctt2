import { Question } from '../types';

export const VIAS_MORE_QUESTIONS: Question[] = [
  {
    id: 'vias_more_1',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Qual a agulha de calibre mais curto e fino comumente utilizada para aplicações por via subcutânea (como insulina ou vacinas pediátricas)?',
    type: 'multiple-choice',
    options: [
      'Agulha de aspiração grosseira cinza escuro (40x12).',
      'Agulha hipodérmica curta marrom (13x4,5 mm ou 13x3 mm).',
      'Agulha verde longa de biopsia muscular (30x8).',
      'Agulha rosa calibrosa de aspiração de ampolas (40x10).'
    ],
    correctAnswer: 'B',
    explanation: 'Agulhas curtas de calibre reduzido, como 13x4,5 mm (Slide 33), garantem que a injeção atinja perfeitamente a gordura sem transpor para a massa muscular abaixo, prevenindo riscos hipoxêmicos.',
    source: 'Vias de Administração - Agulhas e Calibres Slide 33'
  },
  {
    id: 'vias_more_2',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Para a aspiração asséptica de substâncias de ampolas de vidro na enfermagem, qual agulha deve ser acoplada à seringa antes de trocar pela agulha de injeção?',
    type: 'multiple-choice',
    options: [
      'Agulha de bisel curto amarela (13x4,5).',
      'Agulha de aspiração de grosso calibre (como 40x12 ou 40x10) com bisel longo, para viabilizar arraste mecânico rápido.',
      'A mesma agulha que fará a punção venosa final do paciente.',
      'A agulha intradérmica de vacinação.'
    ],
    correctAnswer: 'B',
    explanation: 'Empregar agulhas calibrosas como a 40x12 (Slide 33) preserva o fio de corte da agulha menor de aplicação final, além de reter sujidades ou pequenos estilhaços de ampolas de vidro corados.',
    source: 'Vias de Administração - Aspiração e Calibres Slide 33'
  },
  {
    id: 'vias_more_3',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'A aplicação de uma injeção intramuscular de suspensões oleosas (como benzetacil ou anticoncepcionais) deve priorizar qual calibre de agulha para evitar entupimento?',
    type: 'multiple-choice',
    options: [
      'Agulha curta de calibre marrom (13x4,5).',
      'Agulha longa de calibre verde (30x8) ou preta (30x7), que oferecem maior lúmen interno para passagem do veículo oleoso denso.',
      'Agulha de microgotejo de insulina.',
      'Não há essa distinção mecânica de agulhas.'
    ],
    correctAnswer: 'B',
    explanation: 'Fluidos e fármacos oleosos (Slide 33) exigem lúmens mais largos para evitar a interrupção mecânica da injeção decorrente de endurecimento ou resistência, optando-se por calibres como 30x7 ou 30x8 para adultos.',
    source: 'Vias de Administração - Calibres IM Slide 33'
  },
  {
    id: 'vias_more_4',
    topic: 'Vias de Administração',
    difficulty: 'Difícil',
    questionText: 'Como é denominada a técnica de injeção intramuscular profunda que consiste em deslocar lateralmente a pele e o tecido subcutâneo cerca de 2,5 cm antes de introduzir a agulha, retornando-os à posição inicial após a retirada, e qual sua indicação clínica?',
    type: 'multiple-choice',
    options: [
      'Técnica de pápula simples; indicada para vacina de gripe comum.',
      'Técnica em Z (ou Z-track), indicada para mitigar o refluxo de fármacos irritantes ou corantes (como o Ferro) para o tecido subcutâneo adiposo, prevenindo manchas, dor local e necrose dérmica.',
      'Técnica do bisel invertido; indicada para infusões de heparina rápida.',
      'Técnica de fístula venosa profunda.'
    ],
    correctAnswer: 'B',
    explanation: 'A técnica em Z (Z-track, Vias de Administração - Sítios IM) veda o trajeto linear da agulha. Ao soltar o tecido lateralizado pós-disparo, as camadas dérmicas deslizam bloqueando o refluxo das soluções de volta para o subcutâneo sensível.',
    source: 'Vias de Administração - Técnica em Z'
  },
  {
    id: 'vias_more_5',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'A via de administração sublingual de medicamentos (como isordil ou analgésicos rápidos) caracteriza-se por uma absorção lenta que imita o trânsito digestivo.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A via sublingual (Vias de Administração - Slides Iniciais) possui absorção ultrarrápida, pois a mucosa sublingual é densamente vascularizada por capilares que desaguam diretamente no sistema circulatório, pulando o metabolismo gástrico.',
    source: 'Vias de Administração - Slide Intuitivo'
  },
  {
    id: 'vias_more_6',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Na administração de medicamentos por via Inalatória / Nebulização, qual o papel do fluxo de oxigênio adicionado por fluxômetro e seu valor padrão em Litros/minuto?',
    type: 'multiple-choice',
    options: [
      'Deve-se deitar a 1 L/min para reter fumaças densas.',
      'Deve-se regular o fluxômetro entre 6 e 8 Litros por minuto para assegurar a fragmentação e dispersão mecânica perfeita do líquido medicinal em fumaça de névoa inalável.',
      'Fluxo livre de até 20 L/min para resfriar a garganta.',
      'Usa-se exclusivamente ar comprimido a 1 L/min.'
    ],
    correctAnswer: 'B',
    explanation: 'O arraste dinâmico para copo nebulizador (Slide 16) de Berotec ou Atrovent exige fluxo potente de O2 ou ar comprimido balizado entre 6-8 L/min para micro-pulverizar a calda hídrica em partículas respirabilidade.',
    source: 'Vias de Administração - Nebulizações'
  },
  {
    id: 'vias_more_7',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Entre os treze certos, o cuidado "via certa" visa avaliar se o trajeto anatômico de injeção prescrito coincide com o manual técnico fabricante da droga.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Escanear a via certa (Slide 5-8) barra acidentes sérios de injetar por via venosa direta o que foi estritamente formulado para ação muscular retardada (oleosos ou suspensões com partículas).',
    source: 'Vias de Administração - Treze Certos'
  },
  {
    id: 'vias_more_8',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao aplicar vacina ou antígeno na derme do antebraço (via intradérmica), qual a posição correta do bisel da agulha curta?',
    type: 'multiple-choice',
    options: [
      'Bisel voltado para baixo, para raspar o estrato córneo.',
      'Bisel voltado estritamente para cima, para depositar com facilidade a pápula fluida na derme.',
      'Indiferente, dependendo da cor da haste adesiva.',
      'Lateralizado a 45° no plano sagital.'
    ],
    correctAnswer: 'B',
    explanation: 'A derme superficial (ID, Slide 14) é deitada paralela à agulha. O bisel voltado para cima impede perfurações de vasos e garante pápula hialina nítida diária de BCG.',
    source: 'Vias de Administração - Intradérmica'
  },
  {
    id: 'vias_more_9',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao escolher o ventroglúteo (Hochstetter) para injeção intramuscular espessa, o volume máximo aceitável para infusão local sem dores musculares excessivas é:',
    type: 'multiple-choice',
    options: [
      'No máximo 1 mL líquido.',
      'Até 4 ou 5 mL de volume em adultos de constituição saudável.',
      'Apenas doses residuais de 0,5 mL.',
      'O ventroglúteo aceita livremente até 15 mL líquidos.'
    ],
    correctAnswer: 'B',
    explanation: 'Por possuir excelente volume de absorção profunda no glúteo médio (Sítios IM), esta região tolera doses volumosas de até 4 a 5 mL com total inocuidade tecidual.',
    source: 'Vias de Administração - Sítios IM'
  },
  {
    id: 'vias_more_10',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Quais parâmetros clínicos o técnico de enfermagem deve avaliar antes de administrar heparina profilática na região abdominal por via subcutânea?',
    type: 'multiple-choice',
    options: [
      'A cor do cabelo do paciente e histórico familiar de febre.',
      'A presença de equimoses, hematomas, nódulos fibróticos de aplicações anteriores no abdômen, e realizar rotação sistemática do sítio de aplicação (rodízio).',
      'Apenas o aspeto dos dentes bucais.',
      'O valor exato da glicemia capilar de jejum antes de furar.'
    ],
    correctAnswer: 'B',
    explanation: 'Injeções subcutâneas de heparinas ou insulinas (Slide 33) exigem rodízio rigoroso de pontos para abortar lipodistrofias ou hematomas compressivos indesejados locais.',
    source: 'Vias de Administração - Heparina SC Slide 33'
  },
  {
    id: 'vias_more_11',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'A aplicação de injeções por via intravenosa direta (IV) possui como principal vantagem terapêutica o controle de absorção lenta e gradual ao longo do dia.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A via endovenosa direta deságua o fármaco imediatamente na grande circulação púnica (Slide 12). Sua vantagem é a velocidade de ação instantânea, não permitindo ação retroativa se houver erro.',
    source: 'Vias de Administração - Intravenosa'
  },
  {
    id: 'vias_more_12',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'A qual altura máxima da cama deve ser posicionado o frasco de soro de infusão gravitacional intravenosa lenta?',
    type: 'multiple-choice',
    options: [
      'Rente ao chão da cama.',
      'Aproximadamente 90 a 100 cm acima do local de inserção do cateter venoso, para assegurar fluxo contínuo contra a pressão hidrostática venosa natural do vaso.',
      'No máximo 10 cm acima do nariz.',
      'Não há correlação hidrostática.'
    ],
    correctAnswer: 'B',
    explanation: 'A força da gravidade vence a contra-pressão de dentro da via venosa ativa. Manter o soro elevado a 90-100 cm previne refluxo de sangue para os equipos dilatadores plásticos.',
    source: 'Vias de Administração - Intravenosa'
  },
  {
    id: 'vias_more_13',
    topic: 'Vias de Administração',
    difficulty: 'Difícil',
    questionText: 'Em relação ao Músculo Dorsoglúteo para injeções IM, qual recomendação etária atual as entidades reguladoras trazem de limitação?',
    type: 'multiple-choice',
    options: [
      'Deve ser usado apenas em idosos com atrofia.',
      'Não deve ser selecionado para crianças com idade inferior a 2 anos, pois a massa muscular da área só se desenvolve plenamente com o início da marcha (caminhada).',
      'Pode ser usado livremente em recém-nascidos flácidos.',
      'Não há restrição etária para injeção na nádega.'
    ],
    correctAnswer: 'B',
    explanation: 'Glúteos de bebês sem marcha (Sítios IM) não possuem sustentação muscular profunda para absorver volumes sem risco de quebra ou lesão do nervo ciático, elegendo-se o Vasto Lateral.',
    source: 'Vias de Administração - Dorsoglúteo'
  },
  {
    id: 'vias_more_14',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Na administração de medicação tópica auricular (gotas no ouvido) para adultos, qual manobra de retração do pavilhão auditivo alinha o conduto auditivo de forma correta?',
    type: 'multiple-choice',
    options: [
      'Puxar a orelha para baixo e para a frente.',
      'Tracionar o pavilhão auricular para cima e para trás, guiando a inserção reta das gotas medicinais na parede lateral.',
      'Esfregar o pavilhão com gaze quente.',
      'Apertar a orelha contra a mandíbula superior.'
    ],
    correctAnswer: 'B',
    explanation: 'A retração para cima e para trás em adultos (Slide 37) retifica as dobras do canal auditivo, facilitando a penetração pura da solução farmacológica tópica.',
    source: 'Vias de Administração - Tópica Auricular'
  },
  {
    id: 'vias_more_15',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'O técnico de enfermagem deve descartar agulhas usadas e seringas com agulhas nos coletores de material perfurocortante rígidos (ex: Descarpack) imediatamente após o disparo clínico do remédio.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'O descarte imediato em recipiente adequado (Descarpack) é norma de proteção biológica ocupacional de obrigação legal intransponível da equipe de saúde.',
    source: 'Vias de Administração - Biossegurança'
  },
  {
    id: 'vias_more_16',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Caso uma injeção IM atinja de forma indesejada o tecido subcutâneo adiposo por falha técnica de angulação ou agulha inadequada, qual a consequência clínica esperada?',
    type: 'multiple-choice',
    options: [
      'Aumento imediato da filtração renal de glicose.',
      'Absorção retardada que altera a farmacocinética da medicação, dor intensa e maior probabilidade de gerar nódulos fibróticos de retenção (lipodistrofias).',
      'Parada respiratória por intoxicação biliar rápida.',
      'Nenhum prejuízo, uma vez que a derme absorve de forma análoga ao músculo.'
    ],
    correctAnswer: 'B',
    explanation: 'O subcutâneo é pobre em circulação se contraposto à riqueza de vasos da massa muscular profunda. Fármacos indicados para muscular que caem no adiposo (Slide 33) cristalizam e causam abcessos assépticos locais.',
    source: 'Vias de Administração - Deficiências Técnicas'
  },
  {
    id: 'vias_more_17',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Dentre os treze certos, qual item assegura o direito do paciente obter explanações claras acerca da ação medicamentosa que receberá no leito?',
    type: 'multiple-choice',
    options: [
      'Dose certa.',
      'Orientação do paciente certa.',
      'Hora certa.',
      'Anotação certa.'
    ],
    correctAnswer: 'B',
    explanation: 'O paciente de posse de cognição (Vias de Administração - Treze Certos) tem o direito ético-científico de receber explicações simplificadas e transparentes da equipe de enfermagem sobre os remédios administrados.',
    source: 'Vias de Administração - Treze Certos'
  },
  {
    id: 'vias_more_18',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'O Técnico em Enfermagem pode delegar a administração de vacinas intramuscular ou subcutânea ao cuidador do idoso sob consentimento expresso da família.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Falso',
    explanation: 'A administração medicamentosa parenteral (IM, SC) constitui responsabilidade técnica privativa indelegável e intransferível de profissionais de enfermagem habilitados e credenciados por lei.',
    source: 'Vias de Administração - Prerrogativas Legais'
  },
  {
    id: 'vias_more_19',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao planejar a assepsia epidérmica local antes de realizar uma punção venosa periférica, qual o antisséptico padrão de escolha e a técnica de difusão recomendada?',
    type: 'multiple-choice',
    options: [
      'Tintura de iodo aplicada em movimentos elípticos rápidos com gaze suja.',
      'Álcool a 70% aplicado em sentido unidirecional firme (de cima para baixo ou circular de dentro para fora), deixando secar exposto ao ar ambiente.',
      'Água sanitária pura diluída em copo comum.',
      'É vedada a assepsia antes de punção venosa por risco de fragilizar o vaso.'
    ],
    correctAnswer: 'B',
    explanation: 'A assepsia com álcool 70% unidirecional (Slide Procedimentos) retira microflora oportunista transiente da derme. Evita-se repassagem e assopra para assegurar desinfecção pura.',
    source: 'Vias de Administração - Assepsia'
  },
  {
    id: 'vias_more_20',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Na via cutânea tópica (pomadas e adesivos transdérmicos), qual o cuidado inicial primordial para a fixação estável de novo adesivo no doente acamado?',
    type: 'multiple-choice',
    options: [
      'Colar diretamente em pele molhada ou suja de suor seco.',
      'Garantir rotação sistemática do sítio de contato adesivo, limpando preliminarmente a pele (assegurar derme seca, íntegra, limpa e desprovida de pelos espessos).',
      'Aqueceu o adesivo no fogão antes da aplicação.',
      'Triturar o remendo para espalhar cinzas.'
    ],
    correctAnswer: 'B',
    explanation: 'A fixação eficaz de transdérmicos (Slide Tópicos) exige superfícies epidérmicas limpas, sãs e desprovidas de excessos de pelos locais para não barrar a absorção micropulverizada do princípio ativo.',
    source: 'Vias de Administração - Tópicos e Adesivos'
  },
  {
    id: 'vias_more_21',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'Em caso de administração errônea de imunoglobulinas por via subcutânea ao invés de intramuscular profunda, o técnico deve registrar o erro detalhadamente em prontuário, notificando de imediato a chefia médica e de enfermagem.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'Erros ou desvios em medicações (COFEN 564/2017) demandam transparência técnica, registro formal de andamento fidedigno clínico sã e alertas rápidos de minimização de danos.',
    source: 'Vias de Administração - Ética Assistencial'
  },
  {
    id: 'vias_more_22',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao preparar um medicamento em pó liofilizado, o ato de homogeneizar a mistura exige qual manobra mecânica correta para que não se formem bolhas de ar?',
    type: 'multiple-choice',
    options: [
      'Agitar vigorosamente o frasco de ponta cabeça batendo na pia.',
      'Rotacionar suavemente o frasco entre as palmas das mãos de forma contínua.',
      'Chacoalhar o frasco no liquidificador comum da enfermaria.',
      'Nenhum movimento é necessário, bastando injetar ar comprimido.'
    ],
    correctAnswer: 'B',
    explanation: 'O movimento delicado de rotação circular do frasco de vidro (Slide Diluições) entre as palmas propicia diluição homogênea pura do pó seco com o solvente sem preencher o lúmen de bolhas ou espuma indesejada.',
    source: 'Vias de Administração - Diluição'
  },
  {
    id: 'vias_more_23',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Ao injetar um remédio por via intramuscular periférica, qual a finalidade técnica de aspirar puxando o êmbolo da seringa ligeiramente para trás antes de disparar o fármaco?',
    type: 'multiple-choice',
    options: [
      'Identificar o pH exato do suco intersticial profunda.',
      'Garantir que a extremidade pontiaguda da agulha não adentrou acidentalmente a luz de algum pequeno vaso sanguíneo local profundo, impedindo a infusão intravenosa acidental indesejada de dose concebida para absorção muscular.',
      'Acelerar a velocidade de passagem pelo tecido.',
      'Saber a espessura da fáscia do músculo.'
    ],
    correctAnswer: 'B',
    explanation: 'A aspiração pré-injeção IM (Slide Sítios IM) é medida essencial de segurança de enfermagem. Se verificado retorno de sangue na seringa, a agulha deve ser retirada imediatamente e o preparo descartado por invadir via circulatória direta.',
    source: 'Vias de Administração - Passo a Passo IM'
  },
  {
    id: 'vias_more_24',
    topic: 'Vias de Administração',
    difficulty: 'Médio',
    questionText: 'Durante uma infusão venosa rápida (bolus), qual das vias venosas periféricas oferece o calibre venoso mais confiável de reabsorção e controle mecânico no braço?',
    type: 'multiple-choice',
    options: [
      'Pequenas veias digitais das falanges distais do polegar.',
      'Veias fossa cubital ou basílica mediana anteriores do antebraço.',
      'Canalículos linfáticos do pescoço posterior.',
      'Arteríola ulnar marginal lateral.'
    ],
    correctAnswer: 'B',
    explanation: 'A fossa cubital anterior e vasos profundos basílica/braquial (Slide Venoso) aceitam fluxos rápidos e calibres vigorosos de cateteres plásticos (ex: Gelco), com excelente trânsito e dissolvimento.',
    source: 'Vias de Administração - Punção Venosa'
  },
  {
    id: 'vias_more_25',
    topic: 'Vias de Administração',
    difficulty: 'Fácil',
    questionText: 'A via inalatória pulmonar (sprays por aerossóis / populares bombinhas) requer bocal limpo individualizado e inspiração profunda coordenada seguida de breve apneia (prender a respiração) de 10 segundos por parte do paciente.',
    type: 'true-false',
    options: [
      'Verdadeiro',
      'Falso'
    ],
    correctAnswer: 'Verdadeiro',
    explanation: 'A parada temporária respiratória (apneia) direciona e fixa os aerossóis e partículas finas nas membranas alveolares mais distantes pulmão (Slide Inalação), impedindo a exalação rápida do gás.',
    source: 'Vias de Administração - Tópica Inalatória'
  }
];
