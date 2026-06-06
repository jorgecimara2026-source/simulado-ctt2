import { TopicSummary } from '../types';

export const SUMMARIES_DATA: TopicSummary[] = [
  {
    id: 'sng_sne',
    title: 'Sonda Nasogástrica & Nasoenteral',
    discipline: 'Assistência do Cuidar em Enfermagem',
    professor: 'Dra. Malvina Rodrigues',
    description: 'Conceito, finalidades, técnicas de cateterismo e inserção das sondas Levin, Salem, Dobhoff, monitoramento e identificação de complicações.',
    chapters: [
      {
        title: 'Conceitos Iniciais e Legislação',
        content: [
          'A sonda nasogástrica (SNG) e nasoenteral (SNE) são tubos de borracha ou polivinil inseridos pela narina até o trato digestório (estômago ou intestino).',
          'Lei 7.498/86 e Resolução COFEN 453/2014 estabelecem que COMPETE AO ENFERMEIRO fixar a via de nutrição e realizar a passagem inicial da sonda.',
          'Compete ao Técnico em Enfermagem prestar os cuidados diários com a sonda de acordo com a prescrição: preparar materiais, fixar, lavar, administrar dieta e meds, registrar e observar complicações.'
        ],
        tips: [
          'Sempre registre o volume e horário da alimentação administrada!',
          'Comunique imediatamente qualquer sinal de tosse ou falta de ar no início da dieta.'
        ]
      },
      {
        title: 'Técnica de Inserção e Medição',
        content: [
          'Posicione o paciente em Fowler (cabeceira 30° - 45°). Unção/anestesia local com gel xilocaína.',
          'Medição da Sonda Gástrica (SNG): Mensura-se da ponta do nariz até o lóbulo da orelha e, em seguida, até o apêndice xifoide.',
          'Medição da Sonda Enteral (SNE): Realiza-se a mesma marcação e acrescentam-se mais 20 cm adicionais para possibilitar a transição espontânea ao duodeno sob estímulo do peristaltismo.'
        ],
        tips: [
          'A confirmação inicial do posicionamento da SNE se dá OBRIGATORIAMENTE por exame radiológico (Raio-X) antes de retirar o fio-guia!'
        ]
      },
      {
        title: 'Principais Complicações',
        content: [
          'Broncoaspiração: Conteúdo gástrico/dieta passa acidentalmente aos pulmões, acarretando pneumonia aspirativa fatal.',
          'Obstrução da Sonda: Coágulos ou resíduos alimentares/medicamentosos. Deve ser evitada lavando a sonda com 20 a 30 mL de água sob técnica limpa a cada 3h e após refeições.',
          'Lesões Mecânicas: Úlceras por pressão e lesões na asa do nariz provocadas por fixação mal confeccionada ou inadequada.'
        ]
      }
    ]
  },
  {
    id: 'lavagem_intestinal',
    title: 'Necessidade de Eliminação e Lavagem Intestinal',
    discipline: 'Assistência do Cuidar em Enfermagem',
    professor: 'Dra. Malvina Rodrigues',
    description: 'Fatores de eliminação, enemas, clister, enteroclisma, procedimento clínico de lavagem e controle de complicações como fecaloma.',
    chapters: [
      {
        title: 'Classificação de Enemas',
        content: [
          'Enema de Limpeza: Promove esvaziamento por infusão de grande volume aquoso, provocando peristaltismo e defecação.',
          'Enema Oleoso: Amacia as fezes duras para fecalomas, lubrificando e reduzindo dor abdominal ao evacuar.',
          'Enema Carminativo: Projetado exclusivamente para aliviar obstrução por gases e distensão gasosa dolorosa.',
          'Enteroclisma: Limpeza intestinal profunda em porções altas do cólon por gotejamento lento.'
        ],
        tips: [
          'Clister representa volumes pequenos (ex: Fleet Enema); Enteroclisma envolve volumes massivos (1000 mL de solução).'
        ]
      },
      {
        title: 'Técnica Correta do Enema',
        content: [
          'Coloque o paciente em Posição de Sims (de lado, perna direita flexionada para frente).',
          'Sonda retal: lubrifique com vaselina ou xilocaína, e introduza suavemente de 7 a 10 cm no ânus (médio adulto).',
          'Instalação: abra a pinça do equipo e deixe a solução morna deslizar por gravidade. Se o paciente queixar-se de cólica intensa ou dor, reprima e pare o fluxo temporariamente.'
        ],
        tips: [
          'Oriente o paciente a segurar a solução por de 5 a 15 minutos para fazer o efeito desejado.'
        ]
      }
    ]
  },
  {
    id: 'sondagem_vesical',
    title: 'Sondagem Vesical & Dispositivo Urinário',
    discipline: 'Assistência do Cuidar em Enfermagem',
    professor: 'Dra. Malvina Rodrigues',
    description: 'Técnicas assépticas, Sonda de Alívio (Nelaton), Sonda de Demora (Foley de 2 e 3 vias), complicações e interpretação clínica da diurese do paciente.',
    chapters: [
      {
        title: 'Tipos de Cateteres Vesicais',
        content: [
          'Sonda Vesical de Alívio (SVA - Nelaton): Esvaziamento rápido da bexiga em retenção urinária. Sem balonete.',
          'Sonda Vesical de Demora (SVD - Foley 2 vias): Permanência de médio/longo prazo para drenagem contínua. Conta com balonete calibrado com água destilada.',
          'Sonda Foley 3 vias: Apresenta via extra de infusão para irrigação vesical contínua (ex: pós operatório urológico).',
          'Cateter Suprapúbico (Cistostomia): Inserido diretamente acima da sínfise púbica em obstruções completas da uretra.'
        ]
      },
      {
        title: 'Características e Débito Urinário',
        content: [
          'Volume fisiológico normal adulto: 1000 a 2000 mL nas 24h. Débito ideal estimado de 0,5 mL/kg/hora.',
          'Oligúria: Volume reduzido a menos de 400 - 500 mL por dia.',
          'Anúria: Secreção quase inexistente, inferior a 100 mL em 24h.',
          'Poliúria: Excesso de diurese, superior a 2500 mL em 24 horas.'
        ],
        tips: [
          'Coletores fechados de SVD devem ficar permanentemente abaixo da bexiga do paciente para evitar refluxo e infecção.'
        ]
      }
    ]
  },
  {
    id: 'calculos_medicacao',
    title: 'Cálculo de Medicação & Gotejamento',
    discipline: 'Sistematização do Cuidar em Enfermagem I',
    professor: 'Dra. Malvina Rodrigues',
    description: 'Regra de três simples, redimensionamento de doses, gotejamento de soro (gotas/min, microgotas/min en hora y minuto), penicilina, insulina e heparina.',
    chapters: [
      {
        title: 'Conceitos Iniciais e Conversões',
        content: [
          'Solução = Mistura homogênea de Soluto (parte sólida, pó) + Solvente (parte líquida: água ou soro).',
          'Conversões universais: 1 g = 1000 mg | 1 L = 1000 mL | 1 hora = 60 minutos | 1 gota = 3 microgotas.',
          'Em 1 mL concentram-se exatamente 20 gotas ou 60 microgotas de soro.'
        ],
        tips: [
          'Fórmula de gotas por min (horas): Gotas/min = Volume / (Tempo * 3)',
          'Fórmula de microgotas por min (horas): Microgotas/min = Volume / Tempo (é igual a mL/hora!)'
        ]
      },
      {
        title: 'Gotejamento em Minutos',
        content: [
          'Quando o tempo prescrito é menor que 1 hora, os cálculos devem ser convertidos diretamente para minutos:',
          'Gotas/min = (Volume * 20) / Tempo (em minutos)',
          'Microgotas/min = (Volume * 60) / Tempo (em minutos)'
        ],
        tips: [
          'Se o tempo for 30 minutos, multiplique o volume por 20 e divida por 30 para achar as gotas/min.'
        ]
      },
      {
        title: 'Penicilina, Insulina e Heparina',
        content: [
          'Penicilina Cristalina: Frascos de 5M UI ou 10M UI. O pó da Penicilina ocupa espaço no frasco. No frasco de 5M UI, o pó ocupa 2 mL (adiciona-se 8 mL de diluente = total 10 mL). No de 10M UI, o pó ocupa 4 mL (adiciona-se 6 mL de diluente = total 10 mL).',
          'Insulina: Medida em Unidades Internacionais (UI). Se o frasco de insulina (ex: 100 UI/mL) tiver a mesma calibração que a seringa (100 UI/mL), aspira-se diretamente o valor prescrito. Em caso de seringas de volumes maiores (ex: 3 mL), deve-se usar a regra de três.'
        ]
      }
    ]
  },
  {
    id: 'vias_administracao',
    title: 'Vias de Administração de Medicamentos',
    discipline: 'Sistematização do Cuidar em Enfermagem I',
    professor: 'Profa. Dra. Malvina Rodrigues',
    description: 'Bases legais e regulamentações éticas do COFEN 564/2017, o protocolo dos Treze Certos ginecológicos/parenterais, as vias enterais e sistêmicas.',
    chapters: [
      {
        title: 'Bases Legais e Éticas (COFEN)',
        content: [
          'O Código de Ética (Resolução COFEN nº 564/2017) resguarda direitos e fixa sanções para a segurança medicamentosa.',
          'Artigo 25: Garante o direito soberano de recusa do profissional diante de procedimentos inseguros ou para os quais não se sinta plenamente habilitado.',
          'Artigo 44: Veda sumariamente o preparo e a infusão terapêutica de qualquer droga desprovida de prescrição formal manuscrita, assinada e com carimbo médico ativo, salvo em óbvios estados de urgência sob salvaguarda de protocolos.'
        ],
        tips: [
          'Sempre confira os dados do carimbo e assinatura antes de iniciar infiltrações profundas!'
        ]
      },
      {
        title: 'Os Treze Certos e Prática de Vias',
        content: [
          'Protocolo dos Treze Certos: Prescrição correta, Paciente certo, Medicamento certo, Validade certa, Forma/Apresentação certa, Dose certa, Compatibilidade certa, Orientação certa, Via de administração certa, Horário certo, Tempo de infusão de equipo certo, Ação certa e Registro certo no prontuário.',
          'Via Sublingual: Mucosa fina altamente provida de fluxo capilar que suprime o estômago e desvia da inativação hepática de primeira passagem, propiciando ação ultra rápida.',
          'Via Vaginal e Retal: Técnicas requendo decúbito cômodo de Sims, garantia de estrito pudor e privacidade com biombos de enfermaria, lubrificação de sondas/supositórios e inserção orientada.'
        ]
      }
    ]
  },
  {
    id: 'oxigenoterapia_aspiracao',
    title: 'Oxigenoterapia, Nebulização e Aspiração',
    discipline: 'Assistência do Cuidar em Enfermagem',
    professor: 'Dra. Malvina Rodrigues',
    description: 'Mecanismos de oxigenação. Baixo fluxo (fita/cateter nasal, máscara simples) e alto fluxo (bicos coloridos de Venturi, reservatórios), processos de aspiração de vias aéreas e nebulização de apoio.',
    chapters: [
      {
        title: 'Sistemas de Fluxo de Oxigênio',
        content: [
          'Cateter Nasal tipo Óculos: Dispositivo de baixo fluxo confortável tolerando taxas de fluxo de 1 a 6 L/min, promovendo FiO2 calibrada de 21% a 44%.',
          'Máscara de Venturi: Sistema de alto fluxo que fornece FiO2 exata, estável e imune à frequência ventilatória, pautado pelo arraste físico gerado por adaptadores plásticos de calibres coloridos (24% a 50% de frações de oxigênio).',
          'Segurança: Equipos e fluxômetros em oxigenoterapia requerem obrigatoriamente preenchimento com Água Destilada estéril no copo umidificador. O soro fisiológico cristaliza e inutiliza as agulhas do fluxômetro, gerando cross-contamination.'
        ],
        tips: [
          'Umidificadores e cateteres requerem substituição diária a cada 24 horas!'
        ]
      },
      {
        title: 'Técnica de Aspiração de Secreções',
        content: [
          'Procedimento direcionado para drenar acúmulos mucosos obstrutivos na garganta ou canais de TOT/TQT de forma a liberar a respiração pulmonar.',
          'Parecer COFEN 557/2017: A aspiração buco-nasal endotraqueal pânicas profunda em doentes críticos sob ventilação mecânica é ato de alta complexidade e privativo de Enfermeiro.',
          'Técnica: A sonda macia descartável deve ser introduzida sem sucção sob clamp fechado. O vácuo regulador (seguro entre 80-120 mmHg) deve ser ativado apenas na fase de recuo lento em movimentos rotatórios suaves (não excedendo 2 a 5 segundos).'
        ]
      },
      {
        title: 'Nebulização e Suporte do O2',
        content: [
          'Nebulização: Processo gerando microgículas aerosol para carrear broncodilatadores (como Berotec ou Atrovent) diretamente aos tecidos respiratórios afetados por asma ou DPOC.',
          'Toxicidade de Oxigênio: A hiperóxia acarreta efeitos colaterais adversos severos, deprimindo a fita de refluxo de hipóxia de retentores de gás carbônico (DPOC), ressecando mucosas nasais e induzindo atelectasias por estresse capilar alveolar.'
        ]
      }
    ]
  },
  {
    id: 'medidas_antropometricas',
    title: 'Medidas Antropométricas no Leito',
    discipline: 'Assistência do Cuidar em Enfermagem',
    professor: 'Profa. Dra. Malvina Rodrigues',
    description: 'Aferição de peso, altura, circunferências coronárias nos adultos saudáveis, estimativas de Chumlea para doentes acamados e assepsia biossegura de equipamentos.',
    chapters: [
      {
        title: 'Equipamentos e IMC Clínico',
        content: [
          'Balanças mecânicas/digitais e estadiômetros (alinhando pupila no plano de Frankfurt) compõem as bases de tomada antropométrica de estatura e massa.',
          'IMC (Fórmula de Quetelet): Peso (kg) / Altura² (m²). Eutrofia (faixa de normalidade de repouso) estende-se nos índices de 18,5 a 24,9 kg/m².'
        ]
      },
      {
        title: 'Fórmulas de Chumlea e Perímetros',
        content: [
          'Chumlea: Em pacientes cirúrgicos, sob rebaixamento dural ou paralisados acamados, utilizam-se equações científicas que estimam fidedignamente o peso e altura através de medidas segmentares do corpo (comprimento da Altura do Joelho AJ e faixa etária).',
          'Circunferência de Cintura (CC): Marcador fundamental da OMS de gordura intra-abdominal e risco de acidentes cardiovasculares coronários agudos. Intervalos limitantes de atenção: CC >= 94 cm nos homens e CC >= 80 cm nas mulheres.'
        ],
        tips: [
          'A fita métrica deve ser posicionada no ponto horizontal médio entre a última costela flutuante e a crista ilíaca anterior!'
        ]
      },
      {
        title: 'Biossegurança Assistencial',
        content: [
          'Materiais antropométricos de repetição (como fitas maleáveis e cursor de estadiômetro) são fômites de infecção cruzada de pele.',
          'Higienizar com álcool 70% ou produto desinfectante regulamentar as superfícies de contato de balanças e fitas antes e após cada uso.'
        ]
      }
    ]
  }
];
