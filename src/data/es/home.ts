import type { Content } from '../types';

export const common: Content['common'] = {
  serviceFamilies: {
    live: {
      name: 'Vivir',
      desc: 'Residencia, documentos y la vida práctica en el destino — para usted y su familia.',
    },
    wealth: {
      name: 'Patrimonio',
      desc: 'Residencia fiscal, planificación tributaria, protección patrimonial y sucesión.',
    },
    business: {
      name: 'Negocios',
      desc: 'Empresas, sucursales, regímenes de incentivo y estructura bancaria internacional.',
    },
  },
  breadcrumbHome: 'Inicio',
  legalNav: { privacy: 'Política de Privacidad', terms: 'Términos de Uso' },
};

export const home: Content['home'] = {
  metaTitle: 'Vivir e invertir en Uruguay, Chile y Paraguay | Global & Co.',
  metaDescription:
    'Consultoría boutique para familias y empresarios de alto patrimonio: residencia, fiscalidad, protección patrimonial, sucesión y empresas en Uruguay, Chile y Paraguay.',

  hero: {
    eyebrow: 'Uruguay · Chile · Paraguay',
    title1: 'Viva e invierta',
    title2: 'sin fronteras.',
    lede: 'Estructuramos la vida, el patrimonio y los negocios de familias y empresarios en América del Sur — con discreción absoluta, presencia local y estructuras que se sostienen ante cualquier autoridad.',
    badges: [
      'Tres países, una estrategia',
      'Del diagnóstico a la continuidad',
      'Boutique — pocos clientes a la vez',
      'Confidencialidad y rigor técnico',
    ],
  },

  countries: {
    eyebrow: 'Dónde operamos',
    title: 'Tres países. Una decisión que debe ser la correcta.',
    lede: 'Cada jurisdicción sirve a un objetivo distinto. Comparamos con franqueza y recomendamos la que tiene sentido para su caso — incluso cuando no es la más obvia.',
  },

  pains: {
    eyebrow: 'El desafío',
    title: 'Cambiar de país no puede ser un salto al vacío.',
    lede: 'Las familias que nos buscan rara vez tienen falta de información. Tienen exceso de ella — y ninguna secuencia confiable para actuar.',
    items: [
      {
        t: 'El orden equivocado sale caro',
        d: 'Residencia, fiscalidad, patrimonio y salida del país de origen deben ocurrir en una secuencia específica. Invertir etapas produce un costo que solo aparece años después.',
      },
      {
        t: 'Estructuras de estantería',
        d: 'Modelos replicados que ignoran su caso, desactualizados frente a los cambios de 2024 a 2026 — y que no protegen lo que prometen proteger.',
      },
      {
        t: 'Nadie se ocupa del después',
        d: 'La mayoría de las asesorías termina en la aprobación. Las obligaciones que continúan, las renovaciones y la ley que cambia quedan por su cuenta.',
      },
    ],
  },

  services: {
    eyebrow: 'Qué hacemos',
    title: 'Once frentes. Una estructura diseñada para usted.',
    lede: 'Organizadas en tres familias, para que encuentre lo que necesita sin atravesar un laberinto.',
  },

  method: {
    eyebrow: 'Cómo trabajamos',
    title: 'Método Global & Co.',
    lede: 'Cuatro etapas. La cuarta es la que casi nadie en el mercado ofrece.',
    steps: [
      {
        t: 'Diagnóstico',
        d: 'Entendemos su objetivo, su patrimonio y su situación actual antes de cualquier recomendación.',
      },
      {
        t: 'Diseño',
        d: 'Recibe por escrito la estrategia: país, estructura, secuencia, costos y riesgos — incluido lo que no recomendamos.',
      },
      {
        t: 'Ejecución',
        d: 'Conducimos cada etapa con equipo local, traductor y acompañamiento presencial. Usted nunca enfrenta una ventanilla solo.',
      },
      {
        t: 'Continuidad',
        d: 'Una vez concluido: renovaciones, obligaciones anuales y revisión de la estructura cuando la ley cambia.',
      },
    ],
  },

  included: {
    eyebrow: 'Servicio premium',
    title: 'Qué está incluido cuando trabaja con nosotros',
    lede: 'No vendemos trámite. Conducimos la experiencia entera — del primer documento a su vida instalada.',
    items: [
      { t: 'Consultor dedicado', d: 'Un interlocutor de principio a fin. Sin central de atención, sin recontar su historia.' },
      { t: 'Traductor acompañante', d: 'Presente donde el idioma importa: reuniones, escribanías, bancos e instituciones.' },
      { t: 'Acompañamiento presencial', d: 'Nuestro equipo local está con usted en las etapas que exigen presencia física.' },
      { t: 'Apoyo logístico', d: 'Transporte, agenda e itinerario organizados para que cada viaje rinda al máximo.' },
      { t: 'Coordinación de especialistas', d: 'Abogados, contadores y escribanos locales coordinados por nosotros — un único punto de contacto.' },
      { t: 'Canal seguro para documentos', d: 'Sus datos sensibles no viajan por correo electrónico común.' },
    ],
  },

  positioning: {
    eyebrow: 'Lo que nos distingue',
    title: 'No vendemos secreto.',
    text: 'Buena parte de este mercado promete opacidad — cuentas invisibles, estructuras que “nadie ve”, tributo que desaparece. Esa promesa envejece mal y, en un entorno de intercambio automático de información entre países, suele transformarse en problema exactamente cuando el cliente más necesitaría tranquilidad.\n\nNuestro trabajo es lo opuesto: diseñar estructuras que pueden mostrarse. Declaradas donde deben declararse, defendibles ante cualquier autoridad, y discretas donde la discreción es legítima — en la relación entre usted y su asesor.',
    quote: 'La confidencialidad es nuestra relación con usted. El secreto ante el fisco es otra cosa — y no es lo que hacemos.',
  },

  review: {
    eyebrow: '¿Ya vive fuera?',
    title: '¿Su estructura sigue siendo correcta?',
    text: 'Entre 2024 y 2026, varios países de la región cambiaron reglas relevantes sobre renta en el exterior, sociedades controladas, distribución de utilidades y sucesión. Estructuras armadas antes de eso pueden haber dejado de ser eficientes — o adecuadas. La revisión viene antes de cualquier nuevo movimiento.',
    cta: 'Solicitar revisión de mi estructura',
  },

  blog: {
    eyebrow: 'Conocimiento',
    title: 'Inteligencia para quien piensa global.',
    lede: 'Análisis con fuente citada, sin promesa fácil — escritos por quien ejecuta.',
  },

  cta: {
    title: '¿Listo para estructurar su vida internacional?',
    text: 'Empiece por un diagnóstico de su caso. Una conversación basta para entender su objetivo y decir, con franqueza, qué tiene sentido.',
    note: 'Atención en portugués, español e inglés',
  },
};

export const countriesIndex: Content['countriesIndex'] = {
  metaTitle: 'Uruguay, Chile y Paraguay — dónde operamos | Global & Co.',
  metaDescription:
    'Los tres países donde Global & Co. estructura residencia, patrimonio y negocios para familias y empresarios, con comparativo por perfil.',
  breadcrumb: 'Países',
  title: 'Tres países. Perfiles distintos. Una elección que debe ser la correcta.',
  lede: 'No somos agencia de un solo destino. Operamos en los tres — y es precisamente por eso que podemos comparar sin sesgo comercial.',
  compareCta: 'Ver el comparativo completo',
};

export const thanks: Content['thanks'] = {
  metaTitle: 'Recibimos su solicitud — Global & Co.',
  title: 'Recibimos su solicitud.',
  text: 'Un consultor de Global & Co. se pondrá en contacto en un plazo de hasta 24 horas hábiles por el canal que usted indicó. Si prefiere adelantar la conversación, hable con nosotros ahora por WhatsApp.',
  next: 'Mientras tanto, puede explorar nuestros análisis sobre residencia, patrimonio y sucesión en los tres países.',
  back: 'Volver al inicio',
};
