import type { Content, ServiceContent } from '../types';

const ALL = ['Uruguay', 'Chile', 'Paraguay'];

const included = {
  title: 'Qué está incluido',
  items: [
    'Consultor dedicado de principio a fin',
    'Traductor acompañante en las etapas presenciales',
    'Equipo local en el país de destino',
    'Apoyo logístico y organización de agenda',
    'Coordinación de abogados, contadores y escribanos',
    'Canal seguro para el envío de documentos sensibles',
  ],
};

const svc = (s: Omit<ServiceContent, 'included'>): ServiceContent => ({ ...s, included });

export const services: Content['services'] = {
  // ═══════════════════ VIVIR ═══════════════════
  'svc:residencia': svc({
    nav: 'Residencia y visados',
    title: 'Residencia legal: provisoria y permanente',
    metaTitle: 'Residencia y visados en el Mercosur | Global & Co.',
    metaDescription:
      'Asesoría integral de residencia provisoria y permanente en Uruguay, Chile y Paraguay, con equipo local y acompañamiento presencial en cada etapa.',
    excerpt: 'Su base legal en los tres países, conducida de principio a fin.',
    lede: 'La residencia no es el punto de partida — es consecuencia de una estrategia. Definimos el camino adecuado para su perfil antes de cualquier gestión, y conducimos cada etapa hasta el documento en su mano.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Familias que quieren vivir en la región con seguridad jurídica y previsibilidad',
        'Empresarios e inversores que necesitan base legal para operar',
        'Jubilados y rentistas en busca de calidad de vida con estabilidad',
        'Profesionales con renta internacional que necesitan una residencia sólida',
        'Quien ya lo intentó solo y encontró más burocracia de la esperada',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Tiene un objetivo definido más allá del documento — fiscal, patrimonial o de vida',
        'La decisión involucra familia, patrimonio o empresa y no puede salir mal',
        'Necesita que la residencia dialogue con su situación fiscal de origen',
        'El tiempo y la previsibilidad valen más para usted que ahorrar honorarios',
      ],
      no: [
        'Busca solo un documento, sin ninguna otra decisión involucrada',
        'Su expectativa es aprobación garantizada — ningún asesor serio promete eso',
        'Quiere empezar antes de definir el objetivo y la secuencia',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Estrategia por escrito', d: 'La modalidad adecuada a su perfil, con plazos, exigencias futuras y riesgos identificados.' },
        { t: 'Preparación documental completa', d: 'Conducimos la obtención, la apostilla y la traducción en el orden correcto — la causa nº 1 de atraso es un documento vencido.' },
        { t: 'Conducción integral del proceso', d: 'Acompañamos cada etapa ante los órganos competentes hasta la conclusión.' },
        { t: 'Documento local y próximos pasos', d: 'Con la residencia aprobada, orientamos qué se abre a partir de ahí: banca, fiscalidad y vida instalada.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Describimos su experiencia en el proceso — la conducción técnica es nuestra.',
      items: [
        { t: 'La mayor parte es remota', d: 'Diagnóstico, estrategia y preparación documental ocurren sin que salga de casa.' },
        { t: 'Viajes puntuales y planificados', d: 'Las etapas presenciales se concentran y agendan con antelación, con nuestro equipo a su lado.' },
        { t: 'Horizonte realista', d: 'De seis a doce meses hasta la situación consolidada, según el país y la modalidad.' },
        { t: 'Usted acompaña cada etapa', d: 'Comunicación directa con su consultor, sin intermediarios y sin repetir su historia.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'La residencia es una condición que se mantiene: hay obligaciones de permanencia, actualizaciones registrales y renovaciones. Permanecemos con usted — con calendario de obligaciones mapeado y avisos antes del vencimiento.',
    },
    faqs: [
      { q: '¿Cuál país es el mejor para residencia?', a: 'Depende de su objetivo. Uruguay tiende a favorecer la preservación patrimonial y la sucesión; Chile, el ambiente empresarial y el mercado de capitales; Paraguay, la eficiencia operativa y la flexibilidad. Comparamos los tres en el diagnóstico.' },
      { q: '¿La residencia resuelve mi situación fiscal?', a: 'No automáticamente. Residencia legal y residencia fiscal son cosas distintas, con efectos distintos. Deben conducirse de forma coordinada — y eso separa un cambio bien estructurado de un problema futuro.' },
      { q: '¿Necesito vivir en el país todo el año?', a: 'Depende de la modalidad y del diseño fiscal pretendido. Existen caminos con exigencias diferentes de presencia, y definimos el adecuado a partir de su rutina real.' },
      { q: '¿Garantizan la aprobación?', a: 'Ningún asesor serio garantiza una decisión de autoridad. Lo que hacemos es maximizar sus probabilidades: camino correcto para su perfil, documentación impecable y conducción técnica — las tres causas más comunes de rechazo.' },
      { q: '¿Puedo incluir a mi familia en el proceso?', a: 'Sí, y esa es justamente una de las decisiones que deben planificarse desde el inicio — incluido el calendario escolar de los hijos y la documentación de menores.' },
    ],
    cta: { title: '¿Listo para establecer su base legal?', text: 'Empiece por el diagnóstico y reciba la estrategia adecuada a su caso.' },
    countries: ALL,
  }),

  'svc:diplomas': svc({
    nav: 'Reválida de títulos',
    title: 'Reválida de títulos y matrículas profesionales',
    metaTitle: 'Reválida de títulos | Global & Co.',
    metaDescription:
      'Asesoría para la reválida de títulos y matrículas profesionales en Uruguay, Chile y Paraguay. Planificación del cronograma y conducción integral del proceso.',
    excerpt: 'Su título reconocido en el país de destino, sin trabar el cambio.',
    lede: 'Para profesionales regulados, la reválida del título frecuentemente condiciona el cronograma entero del cambio. Anticipar esta etapa es lo que evita meses de espera con la vida ya trasladada.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Médicos, odontólogos y profesionales de la salud',
        'Abogados y profesionales del derecho',
        'Ingenieros, arquitectos y profesiones técnicas reguladas',
        'Docentes e investigadores en carrera académica',
        'Familias en las que el ejercicio profesional define la viabilidad del cambio',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Su profesión está regulada y pretende ejercerla en el destino',
        'La renta profesional es parte relevante del plan de cambio',
        'Quiere saber el costo y el plazo reales antes de decidir el país',
        'Hay hijos o cónyuge cuya carrera también debe considerarse',
      ],
      no: [
        'Su actividad no exige matrícula profesional local',
        'Su renta vendrá íntegramente del exterior, sin ejercicio en el destino',
        'Pretende ejercer solo de forma remota para clientes en su país de origen',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Análisis de viabilidad', d: 'Si su profesión exige reválida en el país elegido, qué implica y cuánto tiende a demorar.' },
        { t: 'Cronograma integrado', d: 'La reválida encajada en el calendario del cambio — antes, durante o después, según lo más eficiente.' },
        { t: 'Preparación de la documentación académica', d: 'Historial, programas, certificados y traducciones organizados en el estándar exigido.' },
        { t: 'Conducción ante las instituciones', d: 'Acompañamos el proceso hasta la decisión, con apoyo local y traductor.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'La parte académica exige preparación cuidadosa — es donde la mayoría de los procesos se traba.',
      items: [
        { t: 'Empieza temprano', d: 'Recomendamos iniciar antes del cambio: es la etapa con plazo menos controlable.' },
        { t: 'Documentación bajo nuestra curaduría', d: 'Revisamos cada pieza antes del envío — la devolución por documento incompleto cuesta meses.' },
        { t: 'Plazos variables por profesión', d: 'Damos un horizonte realista ya en el análisis inicial, sin optimismo comercial.' },
        { t: 'Acompañamiento hasta la decisión', d: 'Usted es informado de cada movimiento, sin necesidad de reclamar.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Obtenido el reconocimiento, orientamos la matrícula profesional local y las obligaciones de mantenimiento que suelen acompañarla — incluida la interacción con su registro de origen.',
    },
    faqs: [
      { q: '¿Todas las profesiones necesitan reválida?', a: 'No. Las profesiones reguladas generalmente exigen reconocimiento local para el ejercicio; otras no. El primer paso es justamente confirmar si, en su caso y en el país elegido, la reválida es necesaria.' },
      { q: '¿Cuánto tiempo lleva?', a: 'Varía significativamente por profesión, institución y país. Es la etapa menos previsible de un cambio — por eso recomendamos iniciarla temprano y planificar el resto en torno a ella.' },
      { q: '¿Puedo trabajar mientras corre el proceso?', a: 'Depende de la profesión y de las reglas locales. Evaluamos esa posibilidad en el diagnóstico, porque afecta directamente la planificación financiera del cambio.' },
      { q: '¿Pierdo mi matrícula de origen?', a: 'No necesariamente. La relación entre la matrícula de origen y la del país de destino es parte del análisis — y frecuentemente es posible mantener ambas.' },
    ],
    cta: { title: '¿Su profesión exige reválida?', text: 'Descúbralo en el análisis inicial y planifique el cambio en el orden correcto.' },
    countries: ALL,
  }),

  'svc:cnh': svc({
    nav: 'Licencia de conducir',
    title: 'Licencia de conducir en el país de destino',
    metaTitle: 'Licencia de conducir en el exterior | Global & Co.',
    metaDescription:
      'Orientación y conducción para regularizar su licencia de conducir en Uruguay, Chile y Paraguay. Entienda hasta cuándo vale su licencia de origen y cuándo el canje se vuelve necesario.',
    excerpt: 'Regularizada antes de que su licencia de origen deje de valer.',
    lede: 'La licencia de origen suele valer temporalmente — y casi todos descubren el plazo después de vencido. Regularizar la licencia a tiempo evita un problema pequeño que se vuelve grande.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Nuevos residentes que conducen a diario',
        'Familias con más de un conductor',
        'Quien ya vive en el destino y nunca regularizó la licencia',
        'Profesionales que dependen del auto para trabajar',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Ya obtuvo o está obteniendo residencia en el país',
        'Pretende conducir con regularidad en el destino',
        'Su permanencia superará el período de validez de su licencia de origen',
      ],
      no: [
        'Su estadía será corta y puntual',
        'No pretende conducir en el país',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Diagnóstico de plazo', d: 'Hasta cuándo se acepta su licencia de origen y a partir de cuándo la regularización se vuelve necesaria.' },
        { t: 'Preparación documental', d: 'Documentos, traducciones y comprobantes organizados en el estándar exigido localmente.' },
        { t: 'Conducción del proceso', d: 'Turnos y acompañamiento presencial, con traductor cuando sea necesario.' },
        { t: 'Orientación para la familia', d: 'Cada conductor de la casa tratado individualmente, con cronograma propio.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Servicio frecuentemente contratado junto con la residencia — el encaje es natural.',
      items: [
        { t: 'Etapa corta', d: 'Comparado con otros procesos, es rápido — siempre que los documentos estén correctos.' },
        { t: 'Presencia necesaria', d: 'Hay etapas presenciales, que concentramos junto a los demás viajes ya planificados.' },
        { t: 'Coordinado con la residencia', d: 'Siempre que es posible, aprovechamos la misma ventana de viaje.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Las licencias tienen validez y renovación. Incluimos esas fechas en su calendario de obligaciones, con aviso anticipado.',
    },
    faqs: [
      { q: '¿Puedo conducir con mi licencia de origen?', a: 'En general, sí — por un período determinado, que varía según el país y su condición migratoria. Después de ese plazo, la regularización se vuelve necesaria, y conducir de forma irregular puede generar consecuencias.' },
      { q: '¿Necesito rendir examen?', a: 'Depende del país, la categoría y el acuerdo aplicable. Verificamos su situación específica en el análisis inicial e informamos con claridad qué será exigido.' },
      { q: '¿Y si ya vivo allí hace años y nunca regularicé?', a: 'Es una situación común y manejable. Evaluamos el escenario actual y conducimos la regularización — y suele ser la punta de un ovillo mayor que vale la pena revisar.' },
    ],
    cta: { title: '¿Su licencia está en regla?', text: 'Verifique su plazo antes de que se vuelva un problema.' },
    countries: ALL,
  }),

  'svc:instalacao': svc({
    nav: 'Instalación y vida',
    title: 'Instalación: la vida de su familia en el destino',
    metaTitle: 'Instalación y vida en el exterior | Global & Co.',
    metaDescription:
      'Apoyo completo a la instalación de familias: colegios, salud, vivienda, mudanza y adaptación, con acompañamiento presencial en cada etapa.',
    excerpt: 'Colegios, salud, vivienda y rutina — resueltos antes de la llegada.',
    lede: 'La parte jurídica es la mitad del cambio. La otra mitad es la vida: dónde estudiarán los hijos, qué cobertura de salud contratar, en qué barrio vivir. Es aquí donde la familia decide si el cambio fue acertado.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Familias con hijos en edad escolar',
        'Quien se muda con un estándar de vida definido y no quiere improvisar',
        'Ejecutivos y empresarios con agenda apretada',
        'Jubilados que priorizan salud y conveniencia',
        'Quien ya tiene residencia y necesita organizar la vida práctica',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'El cambio involucra a la familia, no solo a usted',
        'No tiene tiempo o red local para resolver todo personalmente',
        'El estándar de vida y la adaptación de los hijos son prioridades',
        'Quiere llegar con la vida montada, no empezar a montarla al llegar',
      ],
      no: [
        'Ya tiene red consolidada en el destino y prefiere resolver solo',
        'El cambio es individual, temporal y sin exigencias específicas',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Mapa de barrios y zonas', d: 'Dónde se instalan las familias de su perfil, con criterios objetivos: seguridad, colegios, desplazamiento y servicios.' },
        { t: 'Selección de colegios', d: 'Panorama de opciones, calendario lectivo, proceso de admisión y adaptación — con visitas cuando se desee.' },
        { t: 'Salud', d: 'Cómo funciona el sistema local, qué coberturas tienen sentido y cómo contratarlas.' },
        { t: 'Vivienda', d: 'Apoyo en la búsqueda, análisis de contratos y coordinación con corredores locales — defendiendo su interés.' },
        { t: 'Rutina instalada', d: 'Cuentas, servicios, telefonía, transporte y los pequeños trámites que consumen semanas de quien llega solo.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Idealmente iniciado antes del cambio — llegar con todo resuelto cambia la experiencia.',
      items: [
        { t: 'Empieza antes de la llegada', d: 'Colegios y vivienda suelen exigir antelación de meses, especialmente en el calendario lectivo.' },
        { t: 'Viaje de reconocimiento', d: 'Organizamos un itinerario productivo: barrios, colegios e inmuebles en pocos días, con chofer y acompañamiento.' },
        { t: 'Presencia en los primeros días', d: 'Nuestro equipo local está disponible a la llegada, cuando todo es nuevo al mismo tiempo.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Seguimos como su punto de apoyo local: la renovación de un contrato, una duda sobre un servicio, una decisión nueva que aparece. El cambio no termina al desembarcar.',
    },
    faqs: [
      { q: '¿Son inmobiliaria?', a: 'No. Trabajamos a su lado, sin conflicto de interés: seleccionamos opciones con corredores locales y defendemos exclusivamente su interés en la negociación.' },
      { q: '¿Ayudan con el colegio de los hijos?', a: 'Sí. Es frecuentemente la decisión más sensible del cambio. Presentamos el panorama, organizamos visitas y acompañamos el proceso de admisión.' },
      { q: '¿Y la mudanza de muebles y mascotas?', a: 'Coordinamos con prestadores especializados y orientamos sobre exigencias locales, para evitar sorpresas a la llegada.' },
      { q: '¿Puedo contratar solo la instalación?', a: 'Sí. Muchas familias que ya obtuvieron residencia nos buscan solo para la parte práctica de la vida.' },
    ],
    cta: { title: '¿Quiere llegar con la vida lista?', text: 'Organizamos la instalación de su familia antes del desembarque.' },
    countries: ALL,
  }),

  // ═══════════════════ PATRIMONIO ═══════════════════
  'svc:fiscal': svc({
    nav: 'Residencia fiscal',
    title: 'Residencia fiscal y beneficios aplicables',
    metaTitle: 'Residencia fiscal en el Mercosur | Global & Co.',
    metaDescription:
      'Residencia fiscal en Uruguay, Chile y Paraguay, beneficios para nuevos residentes y coordinación con la salida fiscal del país de origen.',
    excerpt: 'Dónde paga impuestos — y en qué orden debe ocurrir.',
    lede: 'La residencia fiscal no se pide: se configura, al cumplir determinados criterios. Y el momento en que se configura determina el acceso a beneficios que, una vez perdidos, no vuelven.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Inversores con renta pasiva relevante en el exterior',
        'Empresarios con participaciones societarias fuera de su país',
        'Familias en transición patrimonial planificando la sucesión',
        'Profesionales con renta recurrente internacional',
        'Quien ya vive fuera y no tiene certeza de dónde es residente fiscal hoy',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Parte relevante de su renta o patrimonio está fuera de su país de origen',
        'Pretende cambiar de residencia fiscal en los próximos 24 meses',
        'Hay decisiones patrimoniales relevantes en el horizonte (venta, donación, reorganización)',
        'Quiere entender el efecto real antes de decidir, con números de su caso',
      ],
      no: [
        'Su renta y patrimonio están íntegramente en su país de origen y así permanecerán',
        'Busca solo “residencia de papel”, sin vínculo real — no hacemos eso',
        'La expectativa es un resultado inmediato: es planificación de mediano plazo',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Mapa de su situación actual', d: 'Dónde es residente fiscal hoy, en ambos países, y qué obligaciones genera.' },
        { t: 'Vía de configuración recomendada', d: 'Qué camino se ajusta a su perfil y a su disponibilidad real de tiempo.' },
        { t: 'Proyección del efecto', d: 'El impacto a lo largo del horizonte del beneficio, comparado con los escenarios alternativos — incluido no hacer nada.' },
        { t: 'Secuencia coordinada', d: 'Cómo dialoga con la formalización de su salida fiscal de origen, en el orden que preserva más opciones.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Trabajamos siempre con la normativa vigente verificada en la fuente — nunca con resúmenes de mercado.',
      items: [
        { t: 'Empieza por su año real', d: 'Mapeamos los días que efectivamente logra pasar fuera, no los ideales.' },
        { t: 'Documentación y comprobación', d: 'Orientamos qué debe mantenerse y ser demostrable — una prueba frágil equivale a un día no pasado.' },
        { t: 'Coordinación entre países', d: 'Los dos frentes conducidos juntos, para evitar doble residencia o vacío fiscal.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'La residencia fiscal es una condición que se sostiene año a año, con verificación recurrente y obligaciones declarativas. Acompañamos el mantenimiento y revisamos cuando la ley cambia — y cambió mucho entre 2024 y 2026.',
    },
    faqs: [
      { q: '¿Cuántos días necesito pasar fuera?', a: 'El conteo de días es solo uno de los criterios. Existen vías ligadas al centro de intereses económicos y vitales que pueden exigir menos presencia — y definir la vía correcta es parte central de nuestro trabajo.' },
      { q: '¿Esto pone fin a mi situación de origen?', a: 'No. Son sistemas independientes. Volverse residente fiscal en el exterior no pone fin a su condición de origen: eso exige un procedimiento propio, con plazos propios, y el orden entre ambos importa.' },
      { q: '¿Aún estoy a tiempo de acceder a los beneficios?', a: 'Los beneficios vinculados a la primera adquisición de residencia fiscal suelen tener una ventana ligada al momento en que la condición se configura. Por eso la estructura debe diseñarse antes — no después.' },
      { q: '¿Trabajan con residencia sin vivir en el país?', a: 'No. Las estructuras sin sustancia real son exposición, no planificación — especialmente en un entorno de intercambio automático de información entre países.' },
    ],
    cta: { title: '¿Dónde es residente fiscal hoy?', text: 'Si la respuesta no es inmediata, es hora de un diagnóstico.' },
    countries: ALL,
  }),

  'svc:tributario': svc({
    nav: 'Planificación tributaria',
    title: 'Planificación tributaria internacional',
    metaTitle: 'Planificación tributaria internacional | Global & Co.',
    metaDescription:
      'Planificación tributaria lícita entre origen, Uruguay, Chile y Paraguay: salida fiscal, estructuras societarias y renta en el exterior. Defendible, nunca opaca.',
    excerpt: 'Eficiencia legítima — la que se defiende ante cualquier autoridad.',
    lede: 'La planificación tributaria seria no busca invisibilidad: busca el encuadre correcto. La diferencia aparece cuando alguien pregunta — y, hoy, alguien siempre pregunta.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Quien está cambiando de residencia fiscal y necesita la secuencia correcta',
        'Inversores con activos y rentas en más de un país',
        'Empresarios que distribuyen utilidades entre jurisdicciones',
        'Familias organizando patrimonio con visión internacional',
        'Quien tiene una estructura armada antes de 2024 y nunca la revisó',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Existe patrimonio o renta relevante cruzando fronteras',
        'Hay una decisión importante en el horizonte que cambia según el timing',
        'Su estructura actual fue diseñada bajo reglas que ya cambiaron',
        'Quiere previsibilidad y conformidad, no solo ahorro',
      ],
      no: [
        'La motivación es ocultar patrimonio del fisco, cónyuge o acreedores',
        'Existen litigios o acreedores en curso — transferir ahora puede agravar',
        'El volumen no justifica el costo de estructura y mantenimiento',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Mapeo completo', d: 'Activos, rentas, participaciones y obligaciones actuales en los países involucrados.' },
        { t: 'Diseño recomendado', d: 'La estructura adecuada con pros, contras, costos y riesgos — y lo que no recomendamos, con el motivo.' },
        { t: 'Secuencia de implementación', d: 'Qué ocurre primero, qué depende de qué y qué ventanas existen.' },
        { t: 'Rutina de conformidad', d: 'El calendario de obligaciones que sostiene la estructura a lo largo de los años.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Coordinamos con sus profesionales de origen cuando ya existen — no sustituimos, integramos.',
      items: [
        { t: 'Diagnóstico antes de cualquier sugerencia', d: 'Sin el retrato completo, cualquier recomendación es una conjetura con apariencia técnica.' },
        { t: 'Propuesta por escrito', d: 'Usted decide con el escenario completo ante usted, incluido el costo de no actuar.' },
        { t: 'Implementación coordinada', d: 'Ejecución con especialistas locales en los países involucrados, bajo nuestra coordinación.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'La legislación cambia — y cambió sustancialmente entre 2024 y 2026 en materia de renta en el exterior, sociedades controladas, dividendos y sucesión. Revisamos su estructura proactivamente cuando eso ocurre.',
    },
    faqs: [
      { q: '¿Esto es legal?', a: 'Trabajamos exclusivamente con planificación lícita: uso correcto de regímenes previstos en la ley, con sustancia real. Lo que no puede defenderse abiertamente no entra en el diseño.' },
      { q: '¿Sustituyen a mi contador?', a: 'No. Coordinamos. Su equipo actual puede integrarse al proyecto, y complementamos con especialistas locales en los países involucrados.' },
      { q: '¿Mi estructura antigua sigue valiendo?', a: 'Quizá no. Estructuras armadas antes de los cambios recientes pueden seguir formalmente válidas y haber dejado de ser eficientes — o adecuadas. La revisión es el punto de partida.' },
      { q: '¿Cuánto tiempo hasta ver resultado?', a: 'Es planificación de mediano y largo plazo. Lo que se percibe rápidamente es la claridad: saber exactamente dónde se está y qué debe ocurrir.' },
    ],
    cta: { title: '¿Su estructura fue diseñada antes de 2024?', text: 'La revisión viene antes de cualquier nuevo movimiento.' },
    countries: ALL,
  }),

  'svc:patrimonial': svc({
    nav: 'Protección patrimonial y holding',
    title: 'Protección patrimonial y estructuras de holding',
    metaTitle: 'Protección patrimonial y holding en el exterior | Global & Co.',
    metaDescription:
      'Estructuras de protección patrimonial y holding en Uruguay, Chile y Paraguay, con el análisis de las reglas de origen que el mercado suele ignorar.',
    excerpt: 'La estructura correcta para el riesgo correcto — o la recomendación de no armar ninguna.',
    lede: 'Una holding es un vehículo, no un escudo mágico. Sirve para determinados trayectos y es inadecuada para otros. Armada sin propósito claro, agrega costo y una falsa sensación de seguridad.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Familias con patrimonio internacional relevante y diversificado',
        'Empresarios cuya actividad expone el patrimonio personal a riesgo',
        'Familias con más de un heredero y necesidad de gobernanza',
        'Quien tiene inmuebles o participaciones en más de un país',
        'Quien está cambiando de residencia fiscal y necesita reorganizar la titularidad',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Patrimonio relevante, diversificado y en más de una jurisdicción',
        'Horizonte sucesorio definido, con la próxima generación involucrada',
        'Necesidad de separar el patrimonio personal del riesgo operativo',
        'Gobernanza familiar con reglas claras entre herederos',
      ],
      no: [
        'Patrimonio concentrado en origen sin intención de internacionalizar',
        'Volumen que no justifica el costo anual de mantenimiento',
        'Búsqueda de opacidad ante el fisco, cónyuge o acreedores',
        'Existencia de acreedores o litigios en curso',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Diagnóstico patrimonial', d: 'Qué existe, dónde está, a nombre de quién y bajo qué régimen — en los países involucrados.' },
        { t: 'Dictamen de viabilidad', d: 'Si la estructura tiene sentido en su caso, incluida la hipótesis honesta de no armar nada o solo ajustar lo existente.' },
        { t: 'Diseño completo', d: 'Jurisdicción, tipo societario, composición, gobernanza y secuencia — con costos y riesgos explicitados.' },
        { t: 'Implementación con equipo local', d: 'Constitución conducida en el país elegido, integrada a su situación fiscal.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'La pregunta correcta no es “¿debo armar una holding?”, sino “¿qué debe protegerse, de qué riesgo y para quién?”.',
      items: [
        { t: 'Objetivo antes del vehículo', d: 'Definimos qué proteger antes de elegir la estructura — al revés es comprar el auto antes de saber la ruta.' },
        { t: 'Análisis cruzado con el origen', d: 'La estructura en el exterior dialoga permanentemente con la residencia fiscal de quien la controla.' },
        { t: 'Decisión informada', d: 'Usted recibe el cuadro completo antes de cualquier constitución.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Una estructura sin mantenimiento se vuelve un pasivo. Acompañamos las obligaciones contables y declarativas en los países involucrados, y revisamos el diseño cuando la legislación cambia.',
    },
    faqs: [
      { q: '¿La holding en el exterior vuelve invisible el patrimonio?', a: 'No. En un entorno de intercambio automático de información, las participaciones en el exterior de residentes fiscales son informadas. Quien arma una estructura buscando invisibilidad compra un problema, no una solución.' },
      { q: '¿La holding anula mis obligaciones de origen?', a: 'No. Mientras el titular sea residente fiscal en origen, hay reglas específicas — reformuladas recientemente — sobre la tributación de utilidades de entidades controladas en el exterior.' },
      { q: '¿Qué país es mejor para la holding?', a: 'Depende del objetivo, los activos y el perfil de la familia. Evaluamos Uruguay, Chile y Paraguay — y, cuando tiene sentido, indicamos que la mejor solución es doméstica.' },
      { q: 'Tengo una holding armada hace años. ¿Debo revisarla?', a: 'Si fue constituida antes de 2024 y nunca pasó por una revisión, sí. Las reglas cambiaron debajo de ella — puede seguir válida y haber dejado de ser eficiente.' },
    ],
    cta: { title: '¿Qué necesita proteger su familia?', text: 'Empiece por el objetivo. La estructura — si la hay — aparece después.' },
    countries: ALL,
  }),

  'svc:sucessao': svc({
    nav: 'Sucesión y herencia',
    title: 'Sucesión internacional y planificación de herencia',
    metaTitle: 'Sucesión internacional y herencia | Global & Co.',
    metaDescription:
      'Planificación sucesoria para familias con patrimonio en origen y en el exterior, con análisis del nuevo escenario de tributación sobre la transmisión.',
    excerpt: 'El patrimonio atraviesa generaciones — o se vuelve un juicio.',
    lede: 'La sucesión de un bien sigue, por regla, la ley del país donde está. Cuando las legislaciones no dialogan, quien paga la cuenta — en dinero, tiempo y conflicto — son los herederos.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Familias con bienes en origen y en el exterior',
        'Quien tiene más de un heredero y quiere evitar conflictos',
        'Empresarios con participaciones societarias a transmitir',
        'Familias con herederos menores o en jurisdicciones diferentes',
        'Quien tiene una planificación sucesoria hecha antes de los cambios recientes',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Existe patrimonio relevante en más de una jurisdicción',
        'La próxima generación ya está definida y el deseo de transmisión es claro',
        'Hay activos ilíquidos que dificultarían el pago de tributos en la transmisión',
        'La planificación actual fue diseñada bajo reglas que cambiaron',
      ],
      no: [
        'No hay patrimonio relevante a transmitir',
        'Existen disputas familiares abiertas que deben resolverse antes',
        'La expectativa es que la estructura anule tributos — organiza y optimiza, no elimina',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Mapa sucesorio completo', d: 'Qué existe, dónde está y qué ley rige la transmisión de cada categoría de bien.' },
        { t: 'Puntos de fricción identificados', d: 'Dónde se cruzan las legislaciones, dónde hay riesgo de bloqueo y dónde el resultado sería diferente del pretendido.' },
        { t: 'Diseño de la sucesión', d: 'Instrumentos adecuados a cada activo, secuencia de implementación y reglas de gobernanza familiar.' },
        { t: 'Proyección de costo', d: 'El costo estimado de la transmisión planificada versus no planificada — tributario y de liquidez.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Es la conversación más postergada y la más cara de postergar. La conducimos con discreción y sensibilidad.',
      items: [
        { t: 'Visión única sobre el conjunto', d: 'Planificaciones hechas país por país, por separado, pueden entrar en conflicto entre sí.' },
        { t: 'Involucramiento de la familia cuando se desea', d: 'La gobernanza funciona mejor cuando es conocida por quien será afectado.' },
        { t: 'Implementación coordinada', d: 'Ejecución en las jurisdicciones involucradas, con especialistas locales bajo nuestra coordinación.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'La estructura sucesoria es un organismo vivo: las reglas cambian, el patrimonio cambia y la familia cambia. Revisamos periódicamente para que el plan siga produciendo el efecto pretendido.',
    },
    faqs: [
      { q: '¿La ley de origen se aplica a mis bienes en el exterior?', a: 'No automáticamente. La sucesión suele seguir la ley del país donde está el bien — y por eso las planificaciones hechas mirando solo un lado producen sorpresas.' },
      { q: '¿Qué cambió recientemente?', a: 'El cuadro de tributación sobre la transmisión pasó a observar progresividad según el valor, y la incidencia sobre bienes situados en el exterior fue disciplinada. Para patrimonios elevados, el cambio es material.' },
      { q: '¿Aún estoy a tiempo de planificar?', a: 'La planificación sucesoria solo puede hacerse en vida. Mientras haya tiempo y elección, hay algo que organizar — después, resta administrar consecuencias y, frecuentemente, litigar.' },
      { q: '¿Esto elimina el impuesto a la herencia?', a: 'No prometemos eliminación. La planificación organiza, anticipa y optimiza dentro de la ley — y, sobre todo, evita que la familia deba vender activos a las apuradas para pagar tributos.' },
    ],
    cta: { title: '¿Su sucesión está diseñada?', text: 'La familia que planifica transmite patrimonio. La que no planifica transmite un juicio.' },
    countries: ALL,
  }),

  // ═══════════════════ NEGOCIOS ═══════════════════
  'svc:empresas': svc({
    nav: 'Empresas y sucursales',
    title: 'Apertura de empresas y sucursales',
    metaTitle: 'Abrir empresa en Uruguay, Chile y Paraguay | Global & Co.',
    metaDescription:
      'Constitución de empresas, sucursales y filiales en Uruguay, Chile y Paraguay. Elección del vehículo societario por objetivo, con contabilidad y obligaciones estructuradas.',
    excerpt: 'El vehículo societario correcto para su operación real.',
    lede: 'Antes de constituir, hay que responder para qué sirve. El tipo societario, la jurisdicción y el régimen derivan de la operación — nunca al revés.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Empresarios internacionalizando operación o facturación',
        'Prestadores de servicios con clientes en varios países',
        'Negocios de comercio exterior que necesitan base logística',
        'Grupos evaluando regímenes especiales y zonas de incentivo',
        'Empresas que abren sucursal o filial en la región',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Existe operación real o intención concreta de operar',
        'La facturación o los clientes justifican la estructura',
        'Necesita contrato, cuenta y facturación en otra jurisdicción',
        'La empresa se integra a un diseño fiscal y patrimonial mayor',
      ],
      no: [
        'La empresa serviría solo como fachada, sin actividad',
        'El volumen no cubre el costo de mantenimiento y contabilidad',
        'La decisión se tomó antes de definir el objetivo de la operación',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Matriz de decisión societaria', d: 'Tipo, jurisdicción y régimen elegidos en función de su operación real — con alternativas comparadas.' },
        { t: 'Constitución completa', d: 'Registros, contabilidad, domicilio fiscal y obligaciones recurrentes estructurados.' },
        { t: 'Evaluación de regímenes especiales', d: 'Zonas francas, maquila e incentivos sectoriales analizados con honestidad — incluso cuando no compensan.' },
        { t: 'Integración a su estructura', d: 'La empresa nace conectada a su planificación fiscal y patrimonial, no aislada.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'La mayor parte se conduce de forma remota; la presencia se concentra en etapas puntuales.',
      items: [
        { t: 'Objetivo primero', d: 'Definimos el flujo de ingresos y el diseño antes de cualquier registro.' },
        { t: 'Plazos por jurisdicción', d: 'Cada país tiene su ritmo — usted recibe un cronograma realista antes de empezar.' },
        { t: 'Operación lista para funcionar', d: 'No entregamos solo el estatuto: entregamos la empresa apta para operar.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Contabilidad, obligaciones accesorias y declaraciones recurrentes en los países involucrados. Permanecemos como punto de coordinación — usted no se queda solo con una empresa en otro idioma.',
    },
    faqs: [
      { q: '¿Necesito ser residente para abrir empresa?', a: 'Por regla, los extranjeros pueden ser socios en los tres países. La mejor combinación entre su residencia y la estructura societaria se define en el diagnóstico — y esa combinación importa más de lo que parece.' },
      { q: '¿Sucursal o nueva sociedad?', a: 'Depende de responsabilidad, tributación, imagen ante clientes y planes futuros. Es una de las decisiones que comparamos por escrito antes de ejecutar.' },
      { q: '¿Se ocupan de la contabilidad después?', a: 'Estructuramos la operación con contadores locales calificados y permanecemos como su punto único de coordinación.' },
      { q: '¿Cuánto tiempo hasta que la empresa funcione?', a: 'Varía por país y tipo societario. Damos un cronograma realista antes de iniciar — sin optimismo comercial.' },
    ],
    cta: { title: '¿Qué estructura sirve a su operación?', text: 'Empiece por el objetivo. El vehículo es consecuencia.' },
    countries: ALL,
  }),

  'svc:incentivos': svc({
    nav: 'Beneficios fiscales empresariales',
    title: 'Regímenes de incentivo y beneficios fiscales empresariales',
    metaTitle: 'Incentivos fiscales empresariales | Global & Co.',
    metaDescription:
      'Regímenes de incentivo en Uruguay, Chile y Paraguay: zonas francas, maquila, puertos libres y beneficios sectoriales. Viabilidad real, sin promesa fácil.',
    excerpt: 'Regímenes de incentivo analizados con honestidad — incluso cuando no compensan.',
    lede: 'Las zonas francas, la maquila y los incentivos sectoriales pueden transformar la economía de una operación. También pueden salir caros a quien entra sin cumplir los requisitos de sustancia.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Operaciones industriales y exportadoras',
        'Comercio exterior que evalúa la región como hub logístico',
        'Empresas de tecnología y servicios exportados',
        'Agronegocio y proyectos con componente productivo',
        'Grupos evaluando dónde instalar la operación regional',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'La operación tiene actividad y sustancia reales',
        'El volumen justifica los requisitos del régimen',
        'Existe componente exportador o productivo',
        'La decisión de localización aún está abierta',
      ],
      no: [
        'La intención es solo obtener el beneficio sin operación real',
        'La escala no alcanza los requisitos mínimos del régimen',
        'Los costos de conformidad superan el ahorro proyectado',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Estudio de viabilidad', d: 'Panorama honesto de requisitos, costos y beneficios — con la conclusión “no compensa” cuando sea el caso.' },
        { t: 'Comparativo entre regímenes y países', d: 'Dónde la misma operación rinde más, considerando tributación, logística y mano de obra.' },
        { t: 'Estructuración de la operación', d: 'Vehículo societario, encuadre y secuencia de implantación.' },
        { t: 'Plan de conformidad', d: 'Los requisitos que deben mantenerse para no perder el beneficio.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'El estudio antes de la inversión — para eso existe.',
      items: [
        { t: 'Análisis antes de la decisión', d: 'Recomendamos el estudio antes de cualquier compromiso de capital.' },
        { t: 'Números de su caso', d: 'Proyección con su operación, no con un ejemplo genérico.' },
        { t: 'Implantación acompañada', d: 'Del papel a la operación en marcha, con coordinación de especialistas locales.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Los regímenes de incentivo exigen el mantenimiento de requisitos. Acompañamos la conformidad para que el beneficio no se pierda a mitad de camino.',
    },
    faqs: [
      { q: '¿La zona franca sirve para mi negocio?', a: 'Depende de la actividad, el margen y la logística. Hacemos el análisis honesto — cuando no compensa, lo decimos, y proponemos la alternativa que tiene sentido.' },
      { q: '¿Necesito instalar operación física?', a: 'La mayoría de los regímenes exige sustancia real: actividad, personas, estructura. Los regímenes obtenidos sin sustancia tienden a ser cuestionados justamente cuando serían más necesarios.' },
      { q: '¿Qué país ofrece el mejor incentivo?', a: 'No existe un mejor absoluto. Uruguay, Chile y Paraguay tienen regímenes distintos que favorecen perfiles distintos — y comparamos los tres con los números de su operación.' },
    ],
    cta: { title: '¿Su proyecto encuadra en algún régimen?', text: 'Descúbralo antes de invertir, no después.' },
    countries: ALL,
  }),

  'svc:banca': svc({
    nav: 'Banca y cuentas internacionales',
    title: 'Banca y cuentas internacionales',
    metaTitle: 'Banca y cuentas internacionales | Global & Co.',
    metaDescription:
      'Apertura de cuentas y relación bancaria en Uruguay, Chile y Paraguay para personas físicas y empresas — con conformidad total y organización multimoneda.',
    excerpt: 'Su base financiera internacional, declarada y organizada.',
    lede: 'Abrir la cuenta es el comienzo. Lo que sostiene la relación bancaria a largo plazo es la consistencia entre lo que declara, lo que mueve y cómo está diseñada su estructura.',
    forWho: {
      title: 'Para quién es',
      items: [
        'Nuevos residentes que necesitan base bancaria local',
        'Familias organizando reservas en más de una moneda',
        'Empresas que operan entre países',
        'Inversores que necesitan custodia y acceso a productos',
        'Quien recibió un cuestionamiento bancario sobre su domicilio fiscal',
      ],
    },
    fit: {
      title: 'Cuándo tiene sentido',
      yes: [
        'Tiene o tendrá residencia u operación en el país',
        'Hay flujo recurrente entre jurisdicciones a organizar',
        'El origen de los recursos es documentable y la situación fiscal es clara',
        'Quiere una estructura declarada, con consistencia entre países',
      ],
      no: [
        'La motivación es mantener recursos fuera del alcance del fisco',
        'El origen de los recursos no puede documentarse',
        'Su situación fiscal está indefinida — eso viene antes',
      ],
    },
    deliver: {
      title: 'Qué recibe',
      items: [
        { t: 'Evaluación de perfil', d: 'Qué instituciones son compatibles con su caso — y cuáles no, evitando el desgaste.' },
        { t: 'Preparación del dossier', d: 'Documentación y comprobación de origen de recursos en el estándar que las instituciones efectivamente evalúan.' },
        { t: 'Acompañamiento de la apertura', d: 'Conducción del proceso con apoyo local y traductor, hasta la cuenta activa.' },
        { t: 'Organización multimoneda', d: 'Estructura de cuentas y flujos coherente con su vida entre países.' },
      ],
    },
    process: {
      title: 'Cómo será para usted',
      note: 'Ningún intermediario serio garantiza una decisión de banco. Maximizamos sus probabilidades.',
      items: [
        { t: 'Preparación antes del abordaje', d: 'Un dossier bien construido es lo que separa la aprobación del rechazo en este proceso.' },
        { t: 'Presencia cuando es necesaria', d: 'Si la institución exige presencia, la organizamos para resolver en un único viaje.' },
        { t: 'Conformidad desde el inicio', d: 'La estructura se diseña para ser declarada correctamente en los países involucrados.' },
      ],
    },
    continuity: {
      title: 'Y después',
      text: 'Los bancos revisan registros y preguntan sobre el domicilio fiscal periódicamente. Mantenemos la consistencia entre su situación declarada y la documentación de soporte — y respondemos con usted cuando llega la pregunta.',
    },
    faqs: [
      { q: '¿Garantizan la apertura de la cuenta?', a: 'No, y desconfíe de quien lo garantice. La decisión es de la institución. Lo que hacemos es presentar el perfil correctamente y elegir instituciones compatibles con su caso.' },
      { q: '¿Necesito viajar?', a: 'Depende de la institución y del producto. Cuando la presencia es necesaria, la organizamos para resolver en una única ida, junto a otras etapas ya planificadas.' },
      { q: '¿Gestionan mis inversiones?', a: 'No somos gestora ni corredora. Estructuramos el acceso y la organización; las decisiones de inversión permanecen con usted y sus asesores.' },
      { q: '¿Mi cuenta quedará declarada?', a: 'Siempre. Toda la estructura se diseña para la declaración correcta en los países involucrados — es la base de nuestro trabajo, no una opción.' },
    ],
    cta: { title: '¿Necesita organizar su base financiera?', text: 'Empiece por el diagnóstico de su situación actual.' },
    countries: ALL,
  }),
};

export const servicesIndex: Content['servicesIndex'] = {
  metaTitle: 'Servicios: residencia, patrimonio y negocios | Global & Co.',
  metaDescription:
    'Once frentes en tres familias — Vivir, Patrimonio y Negocios: residencia, títulos, fiscalidad, holding, sucesión, empresas, incentivos y banca.',
  breadcrumb: 'Servicios',
  title: 'Once frentes. Tres familias. Una estructura diseñada para usted.',
  lede: 'Cada servicio puede contratarse por separado — pero es en su combinación, en el orden correcto, donde su vida internacional gana solidez.',
};
