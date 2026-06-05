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
  }
];
