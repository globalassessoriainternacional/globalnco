import type { Content } from '../types';

export const common: Content['common'] = {
  serviceFamilies: {
    live: {
      name: 'Viver',
      desc: 'Residência, documentos e a vida prática no destino — para você e para a sua família.',
    },
    wealth: {
      name: 'Patrimônio',
      desc: 'Residência fiscal, planejamento tributário, proteção patrimonial e sucessão.',
    },
    business: {
      name: 'Negócios',
      desc: 'Empresas, sucursais, regimes de incentivo e estrutura bancária internacional.',
    },
  },
  breadcrumbHome: 'Início',
  legalNav: { privacy: 'Política de Privacidade', terms: 'Termos de Uso' },
};

export const home: Content['home'] = {
  metaTitle: 'Viver e investir no Uruguai, Chile e Paraguai | Global & Co.',
  metaDescription:
    'Consultoria boutique para famílias e empresários de alto patrimônio: residência, fiscalidade, proteção patrimonial, sucessão e empresas no Uruguai, Chile e Paraguai.',

  hero: {
    eyebrow: 'Uruguai · Chile · Paraguai',
    title1: 'Viva e invista',
    title2: 'sem fronteiras.',
    lede: 'Estruturamos a vida, o patrimônio e os negócios de famílias brasileiras na América do Sul — com discrição absoluta, presença local e estruturas que se sustentam diante de qualquer autoridade.',
    badges: [
      'Três países, uma estratégia',
      'Do diagnóstico à continuidade',
      'Boutique — poucos clientes por vez',
      'Confidencialidade e rigor técnico',
    ],
  },

  countries: {
    eyebrow: 'Onde atuamos',
    title: 'Três países. Uma decisão que precisa ser certa.',
    lede: 'Cada jurisdição serve a um objetivo diferente. Comparamos com franqueza e recomendamos a que faz sentido para o seu caso — mesmo quando não é a mais óbvia.',
  },

  pains: {
    eyebrow: 'O desafio',
    title: 'Mudar de país não pode ser um salto no escuro.',
    lede: 'As famílias que nos procuram raramente têm falta de informação. Têm excesso dela — e nenhuma sequência confiável para agir.',
    items: [
      {
        t: 'A ordem errada custa caro',
        d: 'Residência, fiscalidade, patrimônio e saída do Brasil precisam acontecer em sequência específica. Inverter etapas produz custo que só aparece anos depois.',
      },
      {
        t: 'Estruturas de prateleira',
        d: 'Modelos replicados que ignoram o seu caso, desatualizados frente às mudanças de 2024 a 2026 — e que não protegem o que prometem proteger.',
      },
      {
        t: 'Ninguém cuida do depois',
        d: 'A maioria das assessorias encerra na aprovação. As obrigações que continuam, as renovações e a lei que muda ficam por sua conta.',
      },
    ],
  },

  services: {
    eyebrow: 'O que fazemos',
    title: 'Onze frentes. Uma estrutura desenhada para você.',
    lede: 'Organizadas em três famílias, para que você encontre o que precisa sem atravessar um labirinto.',
  },

  method: {
    eyebrow: 'Como trabalhamos',
    title: 'Método Global & Co.',
    lede: 'Quatro etapas. A quarta é a que quase ninguém no mercado oferece.',
    steps: [
      {
        t: 'Diagnóstico',
        d: 'Entendemos seu objetivo, seu patrimônio e sua situação atual antes de qualquer recomendação.',
      },
      {
        t: 'Desenho',
        d: 'Você recebe por escrito a estratégia: país, estrutura, sequência, custos e riscos — inclusive o que não recomendamos.',
      },
      {
        t: 'Execução',
        d: 'Conduzimos cada etapa com equipe local, tradutor e acompanhamento presencial. Você nunca enfrenta um balcão sozinho.',
      },
      {
        t: 'Continuidade',
        d: 'Depois de concluído: renovações, obrigações anuais e revisão da estrutura quando a lei muda.',
      },
    ],
  },

  included: {
    eyebrow: 'Serviço premium',
    title: 'O que está incluído quando você trabalha conosco',
    lede: 'Não vendemos protocolo. Conduzimos a experiência inteira — do primeiro documento à sua vida instalada.',
    items: [
      { t: 'Consultor dedicado', d: 'Um interlocutor do início ao fim. Sem central de atendimento, sem recontar sua história.' },
      { t: 'Tradutor acompanhante', d: 'Presente onde o idioma importa: reuniões, cartórios, bancos e instituições.' },
      { t: 'Acompanhamento presencial', d: 'Nossa equipe local está com você nas etapas que exigem presença física.' },
      { t: 'Apoio logístico', d: 'Transporte, agenda e roteiro organizados para que cada viagem renda o máximo.' },
      { t: 'Coordenação de especialistas', d: 'Advogados, contadores e escrivães locais coordenados por nós — um único ponto de contato.' },
      { t: 'Canal seguro para documentos', d: 'Seus dados sensíveis não trafegam por e-mail comum.' },
    ],
  },

  positioning: {
    eyebrow: 'O que nos separa',
    title: 'Não vendemos sigilo.',
    text: 'Boa parte deste mercado promete opacidade — contas invisíveis, estruturas que “ninguém enxerga”, tributo que desaparece. Essa promessa envelhece mal e, num ambiente de troca automática de informações entre países, costuma se transformar em problema exatamente quando o cliente mais precisaria de tranquilidade.\n\nNosso trabalho é o oposto: desenhar estruturas que podem ser mostradas. Declaradas onde precisam ser declaradas, defensáveis diante de qualquer autoridade, e discretas onde a discrição é legítima — na relação entre você e o seu assessor.',
    quote: 'Confidencialidade é a nossa relação com você. Sigilo perante o fisco é outra coisa — e não é o que fazemos.',
  },

  review: {
    eyebrow: 'Já mora fora?',
    title: 'Sua estrutura ainda está correta?',
    text: 'Entre 2024 e 2026, Brasil, Uruguai, Chile e Paraguai mudaram regras relevantes sobre renda no exterior, sociedades controladas, distribuição de lucros e sucessão. Estruturas montadas antes disso podem ter deixado de ser eficientes — ou adequadas. A revisão vem antes de qualquer novo movimento.',
    cta: 'Solicitar revisão da minha estrutura',
  },

  blog: {
    eyebrow: 'Conhecimento',
    title: 'Inteligência para quem pensa global.',
    lede: 'Análises com fonte citada, sem promessa fácil — escritas por quem executa.',
  },

  cta: {
    title: 'Pronto para estruturar sua vida internacional?',
    text: 'Comece por um diagnóstico do seu caso. Uma conversa é suficiente para entender seu objetivo e dizer, com franqueza, o que faz sentido.',
    note: 'Atendimento em português, espanhol e inglês',
  },
};

export const countriesIndex: Content['countriesIndex'] = {
  metaTitle: 'Uruguai, Chile e Paraguai — onde atuamos | Global & Co.',
  metaDescription:
    'Os três países onde a Global & Co. estrutura residência, patrimônio e negócios para famílias e empresários brasileiros, com comparativo por perfil.',
  breadcrumb: 'Países',
  title: 'Três países. Perfis diferentes. Uma escolha que precisa ser certa.',
  lede: 'Não somos agência de um destino. Atendemos nos três — e é justamente por isso que podemos comparar sem viés comercial.',
  compareCta: 'Ver o comparativo completo',
};

export const thanks: Content['thanks'] = {
  metaTitle: 'Recebemos sua solicitação — Global & Co.',
  title: 'Recebemos sua solicitação.',
  text: 'Um consultor da Global & Co. entrará em contato em até 24 horas úteis pelo canal que você indicou. Se preferir adiantar a conversa, fale conosco agora pelo WhatsApp.',
  next: 'Enquanto isso, você pode explorar nossas análises sobre residência, patrimônio e sucessão nos três países.',
  back: 'Voltar ao início',
};
