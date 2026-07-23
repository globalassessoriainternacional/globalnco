import type { Content, ServiceContent } from '../types';

const ALL = ['Uruguay', 'Chile', 'Paraguay'];

const included = {
  title: 'What is included',
  items: [
    'Dedicated consultant from start to finish',
    'Accompanying translator at in-person stages',
    'Local team in the destination country',
    'Logistical support and scheduling',
    'Coordination of lawyers, accountants and notaries',
    'Secure channel for sending sensitive documents',
  ],
};

const svc = (s: Omit<ServiceContent, 'included'>): ServiceContent => ({ ...s, included });

export const services: Content['services'] = {
  // ═══════════════════ LIVING ═══════════════════
  'svc:residencia': svc({
    nav: 'Residency & visas',
    title: 'Legal residency: temporary and permanent',
    metaTitle: 'Residency & visas in Mercosur | Global & Co.',
    metaDescription:
      'Full advisory on temporary and permanent residency in Uruguay, Chile and Paraguay, with a local team and in-person support at every stage.',
    excerpt: 'Your legal base in the three countries, handled from start to finish.',
    lede: 'Residency is not the starting point — it is the consequence of a strategy. We define the right path for your profile before any step, and conduct each stage until the document is in your hand.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Families who want to live in the region with legal certainty and predictability',
        'Entrepreneurs and investors who need a legal base to operate',
        'Retirees and rentiers seeking quality of life with stability',
        'Professionals with international income who need solid residency',
        'Those who tried on their own and found more bureaucracy than expected',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'You have a defined objective beyond the document — tax, wealth or lifestyle',
        'The decision involves family, wealth or a company and cannot go wrong',
        'You need the residency to align with your home tax situation',
        'Time and predictability are worth more to you than saving on fees',
      ],
      no: [
        'You are looking only for a document, with no other decision involved',
        'Your expectation is guaranteed approval — no serious advisor promises that',
        'You want to start before defining the objective and the sequence',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Strategy in writing', d: 'The pathway suited to your profile, with deadlines, future requirements and identified risks.' },
        { t: 'Complete document preparation', d: 'We handle obtaining, apostille and translation in the correct order — the number one cause of delay is an expired document.' },
        { t: 'Full conduct of the process', d: 'We accompany each stage before the competent authorities until completion.' },
        { t: 'Local document and next steps', d: 'With residency approved, we advise on what opens up from there: banking, taxation and settled life.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'We describe your experience in the process — the technical conduct is on us.',
      items: [
        { t: 'Most of it is remote', d: 'Diagnosis, strategy and document preparation happen without you leaving home.' },
        { t: 'Occasional, planned trips', d: 'In-person stages are concentrated and scheduled in advance, with our team by your side.' },
        { t: 'Realistic horizon', d: 'Six to twelve months until the situation is consolidated, varying by country and pathway.' },
        { t: 'You follow every stage', d: 'Direct communication with your consultant, no intermediaries and no repeating your story.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Residency is a condition that must be maintained: there are stay obligations, registry updates and renewals. We stay with you — with a mapped calendar of obligations and reminders before each deadline.',
    },
    faqs: [
      { q: 'Which country is best for residency?', a: 'It depends on your objective. Uruguay tends to favor wealth preservation and succession; Chile, business environment and capital markets; Paraguay, operational efficiency and flexibility. We compare all three in the diagnosis.' },
      { q: 'Does residency resolve my tax situation?', a: 'Not automatically. Legal residency and tax residency are distinct, with distinct effects. They must be handled in a coordinated way — and that is what separates a well-structured move from a future problem.' },
      { q: 'Do I have to live in the country all year?', a: 'It depends on the pathway and the intended tax design. There are routes with different presence requirements, and we define the right one based on your real routine.' },
      { q: 'Do you guarantee approval?', a: 'No serious advisor guarantees an authority’s decision. What we do is maximize your chances: the right path for your profile, impeccable documentation and technical conduct — the three most common causes of rejection.' },
      { q: 'Can I include my family in the process?', a: 'Yes, and that is precisely one of the decisions that must be planned from the outset — including the children’s school calendar and documentation for minors.' },
    ],
    cta: { title: 'Ready to establish your legal base?', text: 'Start with the diagnosis and receive the strategy suited to your case.' },
    countries: ALL,
  }),

  'svc:diplomas': svc({
    nav: 'Degree recognition',
    title: 'Recognition of degrees and professional credentials',
    metaTitle: 'Degree recognition | Global & Co.',
    metaDescription:
      'Advisory for the recognition of degrees and professional credentials in Uruguay, Chile and Paraguay. Schedule planning and full conduct of the process.',
    excerpt: 'Your degree recognized at the destination, without stalling the move.',
    lede: 'For regulated professionals, degree recognition often conditions the entire schedule of the move. Anticipating this stage is what avoids months of waiting with life already relocated.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Doctors, dentists and healthcare professionals',
        'Lawyers and legal professionals',
        'Engineers, architects and regulated technical professions',
        'Teachers and researchers in academic careers',
        'Families in which professional practice defines the viability of the move',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'Your profession is regulated and you intend to practice it at the destination',
        'Professional income is a relevant part of the relocation plan',
        'You want to know the real cost and timeline before choosing the country',
        'There are children or a spouse whose career must also be considered',
      ],
      no: [
        'Your activity does not require local professional registration',
        'Your income will come entirely from abroad, with no practice at the destination',
        'You intend to practice only remotely for clients back home',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Feasibility analysis', d: 'Whether your profession requires recognition in the chosen country, what it involves and how long it tends to take.' },
        { t: 'Integrated schedule', d: 'Recognition fitted into the move’s calendar — before, during or after, whichever is most efficient.' },
        { t: 'Preparation of academic documentation', d: 'Transcripts, syllabi, certificates and translations organized to the required standard.' },
        { t: 'Conduct before the institutions', d: 'We accompany the process until the decision, with local support and a translator.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'The academic part requires careful preparation — it is where most processes stall.',
      items: [
        { t: 'It starts early', d: 'We recommend beginning before the move: it is the stage with the least controllable timeline.' },
        { t: 'Documentation under our curation', d: 'We review each piece before submission — a return for an incomplete document costs months.' },
        { t: 'Timelines vary by profession', d: 'We give a realistic horizon right in the initial analysis, without commercial optimism.' },
        { t: 'Follow-up until the decision', d: 'You are informed of every movement, without having to chase it.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Once recognition is obtained, we advise on local professional registration and the maintenance obligations that usually come with it — including the interaction with your registration back home.',
    },
    faqs: [
      { q: 'Do all professions need recognition?', a: 'No. Regulated professions generally require local recognition to practice; others do not. The first step is precisely to confirm whether, in your case and in the chosen country, recognition is necessary.' },
      { q: 'How long does it take?', a: 'It varies significantly by profession, institution and country. It is the least predictable stage of a move — which is why we recommend starting it early and planning the rest around it.' },
      { q: 'Can I work while the process is underway?', a: 'It depends on the profession and local rules. We assess that possibility in the diagnosis, because it directly affects the financial planning of the move.' },
      { q: 'Do I lose my registration back home?', a: 'Not necessarily. The relationship between your home registration and the destination’s is part of the analysis — and it is frequently possible to keep both.' },
    ],
    cta: { title: 'Does your profession require recognition?', text: 'Find out in the initial analysis and plan the move in the right order.' },
    countries: ALL,
  }),

  'svc:cnh': svc({
    nav: 'Driving licence',
    title: 'Driving licence in the destination country',
    metaTitle: 'Driving licence abroad | Global & Co.',
    metaDescription:
      'Guidance and conduct to regularize your driving licence in Uruguay, Chile and Paraguay. Understand how long your home licence is valid and when the exchange becomes necessary.',
    excerpt: 'Regularized before your home licence stops being valid.',
    lede: 'A home licence usually remains valid temporarily — and almost everyone discovers the deadline after it has passed. Regularizing the licence at the right time avoids a small problem that becomes a big one.',
    forWho: {
      title: 'Who it is for',
      items: [
        'New residents who drive daily',
        'Families with more than one driver',
        'Those already living at the destination who never regularized the licence',
        'Professionals who depend on the car to work',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'You have obtained or are obtaining residency in the country',
        'You intend to drive regularly at the destination',
        'Your stay will exceed the validity period of your home licence',
      ],
      no: [
        'Your stay will be short and occasional',
        'You do not intend to drive in the country',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Deadline diagnosis', d: 'How long your home licence is accepted and from when regularization becomes necessary.' },
        { t: 'Document preparation', d: 'Documents, translations and evidence organized to the locally required standard.' },
        { t: 'Conduct of the process', d: 'Appointments and in-person support, with a translator when needed.' },
        { t: 'Guidance for the family', d: 'Each driver in the household handled individually, with their own schedule.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'A service frequently contracted alongside residency — the fit is natural.',
      items: [
        { t: 'A short stage', d: 'Compared with other processes, it is fast — provided the documents are correct.' },
        { t: 'Presence required', d: 'There are in-person stages, which we concentrate together with other trips already planned.' },
        { t: 'Coordinated with residency', d: 'Whenever possible, we make use of the same travel window.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Licences have validity and renewal. We include these dates in your calendar of obligations, with advance notice.',
    },
    faqs: [
      { q: 'Can I drive with my home licence?', a: 'Generally, yes — for a set period, which varies by country and your immigration status. After that deadline, regularization becomes necessary, and driving irregularly can have consequences.' },
      { q: 'Do I have to take a test?', a: 'It depends on the country, the category and the applicable agreement. We check your specific situation in the initial analysis and clearly inform you what will be required.' },
      { q: 'What if I have lived there for years and never regularized?', a: 'It is a common and manageable situation. We assess the current scenario and conduct the regularization — and it is usually the tip of a larger thread worth reviewing.' },
    ],
    cta: { title: 'Is your licence in order?', text: 'Check your deadline before it becomes a problem.' },
    countries: ALL,
  }),

  'svc:instalacao': svc({
    nav: 'Relocation & living',
    title: 'Relocation: your family’s life at the destination',
    metaTitle: 'Relocation & living abroad | Global & Co.',
    metaDescription:
      'Complete support for family relocation: schools, healthcare, housing, moving and adaptation, with in-person support at every stage.',
    excerpt: 'Schools, healthcare, housing and routine — resolved before arrival.',
    lede: 'The legal part is half the move. The other half is life: where the children will study, which health plan to choose, which neighborhood to live in. This is where the family decides whether the move was the right call.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Families with school-age children',
        'Those moving with a defined standard of living who do not want to improvise',
        'Executives and entrepreneurs with a tight schedule',
        'Retirees who prioritize healthcare and convenience',
        'Those who already have residency and need to organize practical life',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'The move involves family, not just you',
        'You lack the time or local network to resolve everything personally',
        'Standard of living and the children’s adaptation are priorities',
        'You want to arrive with life set up, not start setting it up on arrival',
      ],
      no: [
        'You already have a consolidated network at the destination and prefer to handle it yourself',
        'The move is individual, temporary and without specific requirements',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Map of neighborhoods and areas', d: 'Where families of your profile settle, with objective criteria: safety, schools, commuting and services.' },
        { t: 'School selection', d: 'Overview of options, academic calendar, admission process and adaptation — with visits when desired.' },
        { t: 'Healthcare', d: 'How the local system works, which coverage makes sense and how to contract it.' },
        { t: 'Housing', d: 'Support in the search, contract analysis and coordination with local agents — defending your interest.' },
        { t: 'Settled routine', d: 'Accounts, utilities, telecoms, transport and the small formalities that consume weeks for those who arrive alone.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'Ideally started before the move — arriving with everything resolved changes the experience.',
      items: [
        { t: 'It starts before arrival', d: 'Schools and housing usually require months of lead time, especially within the academic calendar.' },
        { t: 'Reconnaissance trip', d: 'We organize a productive itinerary: neighborhoods, schools and properties in a few days, with a driver and support.' },
        { t: 'Presence in the first days', d: 'Our local team is available on arrival, when everything is new at once.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'We remain your local point of support: renewing a contract, a question about a service, a new decision that arises. A move does not end at the arrivals gate.',
    },
    faqs: [
      { q: 'Are you a real estate agency?', a: 'No. We work by your side, with no conflict of interest: we select options with local agents and defend your interest exclusively in the negotiation.' },
      { q: 'Do you help with the children’s school?', a: 'Yes. It is frequently the most sensitive decision of the move. We present the overview, organize visits and accompany the admission process.' },
      { q: 'What about moving furniture and pets?', a: 'We coordinate with specialized providers and advise on local requirements, to avoid surprises on arrival.' },
      { q: 'Can I contract only the relocation?', a: 'Yes. Many families who have already obtained residency come to us solely for the practical side of life.' },
    ],
    cta: { title: 'Want to arrive with life ready?', text: 'We organize your family’s relocation before the arrival.' },
    countries: ALL,
  }),

  // ═══════════════════ WEALTH ═══════════════════
  'svc:fiscal': svc({
    nav: 'Tax residency',
    title: 'Tax residency and applicable benefits',
    metaTitle: 'Tax residency in Mercosur | Global & Co.',
    metaDescription:
      'Tax residency in Uruguay, Chile and Paraguay, benefits for new residents and coordination with the tax exit from your home country.',
    excerpt: 'Where you pay tax — and in what order it must happen.',
    lede: 'Tax residency is not requested: it is configured, upon meeting certain criteria. And the moment it is configured determines access to benefits that, once lost, do not return.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Investors with relevant passive income abroad',
        'Entrepreneurs with corporate holdings outside their home country',
        'Families in wealth transition planning succession',
        'Professionals with recurring international income',
        'Those already living abroad who are unsure where they are tax resident today',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'A relevant part of your income or wealth is outside your home country',
        'You intend to change tax residency in the next 24 months',
        'There are relevant wealth decisions on the horizon (sale, gift, reorganization)',
        'You want to understand the real effect before deciding, with figures from your case',
      ],
      no: [
        'Your income and wealth are entirely in your home country and will remain so',
        'You are looking only for "paper residency," with no real tie — we do not do that',
        'The expectation is an immediate result: this is medium-term planning',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Map of your current situation', d: 'Where you are tax resident today, in both countries, and what obligations that generates.' },
        { t: 'Recommended configuration route', d: 'Which path fits your profile and your real availability of time.' },
        { t: 'Projection of the effect', d: 'The impact over the benefit’s horizon, compared with alternative scenarios — including doing nothing.' },
        { t: 'Coordinated sequence', d: 'How this aligns with formalizing your tax exit from home, in the order that preserves the most options.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'We always work with the rules in force verified at the source — never with market summaries.',
      items: [
        { t: 'It starts with your real year', d: 'We map the days you can actually spend abroad, not the ideal ones.' },
        { t: 'Documentation and evidence', d: 'We advise on what must be kept and demonstrable — fragile evidence equals a day not spent.' },
        { t: 'Coordination between countries', d: 'Both fronts handled together, to avoid dual residency or a fiscal vacuum.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Tax residency is a condition that holds year after year, with recurring verification and reporting obligations. We accompany the maintenance and review it when the law changes — and it changed a lot between 2024 and 2026.',
    },
    faqs: [
      { q: 'How many days do I need to spend abroad?', a: 'The day count is only one of the criteria. There are routes tied to the center of economic and vital interests that may require less presence — and defining the correct route is a central part of our work.' },
      { q: 'Does this end my situation back home?', a: 'No. They are independent systems. Becoming a tax resident abroad does not end your home status: that requires its own procedure, with its own deadlines, and the order between the two matters.' },
      { q: 'Is there still time to access the benefits?', a: 'Benefits tied to first acquisition of tax residency usually have a window linked to the moment the condition is configured. That is why the structure must be designed beforehand — not after.' },
      { q: 'Do you work with residency without living in the country?', a: 'No. Structures without real substance are exposure, not planning — especially in an environment of automatic exchange of information between countries.' },
    ],
    cta: { title: 'Where are you tax resident today?', text: 'If the answer is not immediate, it is time for a diagnosis.' },
    countries: ALL,
  }),

  'svc:tributario': svc({
    nav: 'Tax planning',
    title: 'International tax planning',
    metaTitle: 'International tax planning | Global & Co.',
    metaDescription:
      'Lawful tax planning across home, Uruguay, Chile and Paraguay: tax exit, corporate structures and foreign income. Defensible, never opaque.',
    excerpt: 'Legitimate efficiency — the kind that stands before any authority.',
    lede: 'Serious tax planning does not seek invisibility: it seeks the correct classification. The difference shows when someone asks — and, today, someone always asks.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Those changing tax residency who need the right sequence',
        'Investors with assets and income in more than one country',
        'Entrepreneurs distributing profits across jurisdictions',
        'Families organizing wealth with an international view',
        'Those with a structure built before 2024 who never reviewed it',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'There is relevant wealth or income crossing borders',
        'There is an important decision on the horizon that changes with timing',
        'Your current structure was designed under rules that have already changed',
        'You want predictability and compliance, not just savings',
      ],
      no: [
        'The motivation is to hide wealth from the tax authority, a spouse or creditors',
        'There are ongoing litigations or creditors — transferring now may aggravate them',
        'The volume does not justify the cost of structure and maintenance',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Complete mapping', d: 'Assets, income, holdings and current obligations in the countries involved.' },
        { t: 'Recommended design', d: 'The appropriate structure with pros, cons, costs and risks — and what we do not recommend, with the reason.' },
        { t: 'Implementation sequence', d: 'What happens first, what depends on what and which windows exist.' },
        { t: 'Compliance routine', d: 'The calendar of obligations that sustains the structure over the years.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'We coordinate with your home professionals when they already exist — we do not replace, we integrate.',
      items: [
        { t: 'Diagnosis before any suggestion', d: 'Without the full picture, any recommendation is a guess with a technical appearance.' },
        { t: 'Proposal in writing', d: 'You decide with the complete scenario before you, including the cost of not acting.' },
        { t: 'Coordinated implementation', d: 'Execution with local specialists in the countries involved, under our coordination.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Legislation changes — and it changed substantially between 2024 and 2026 regarding foreign income, controlled companies, dividends and succession. We review your structure proactively when that happens.',
    },
    faqs: [
      { q: 'Is this legal?', a: 'We work exclusively with lawful planning: correct use of regimes provided by law, with real substance. What cannot be defended openly does not enter the design.' },
      { q: 'Do you replace my accountant?', a: 'No. We coordinate. Your current team can be integrated into the project, and we complement with local specialists in the countries involved.' },
      { q: 'Is my old structure still valid?', a: 'Perhaps not. Structures built before the recent changes may remain formally valid and have ceased to be efficient — or appropriate. The review is the starting point.' },
      { q: 'How long until I see results?', a: 'This is medium- and long-term planning. What is perceived quickly is clarity: knowing exactly where you stand and what must happen.' },
    ],
    cta: { title: 'Was your structure designed before 2024?', text: 'The review comes before any new move.' },
    countries: ALL,
  }),

  'svc:patrimonial': svc({
    nav: 'Asset protection & holding',
    title: 'Asset protection and holding structures',
    metaTitle: 'Asset protection and holding abroad | Global & Co.',
    metaDescription:
      'Asset protection and holding structures in Uruguay, Chile and Paraguay, with the analysis of home-country rules the market tends to ignore.',
    excerpt: 'The right structure for the right risk — or the recommendation to build none.',
    lede: 'A holding is a vehicle, not a magic shield. It serves certain journeys and is inappropriate for others. Built without a clear purpose, it adds cost and a false sense of security.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Families with relevant, diversified international wealth',
        'Entrepreneurs whose activity exposes personal wealth to risk',
        'Families with more than one heir and a need for governance',
        'Those with real estate or holdings in more than one country',
        'Those changing tax residency who need to reorganize ownership',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'Relevant, diversified wealth in more than one jurisdiction',
        'A defined succession horizon, with the next generation involved',
        'A need to separate personal wealth from operational risk',
        'Family governance with clear rules among heirs',
      ],
      no: [
        'Wealth concentrated at home with no intention to internationalize',
        'A volume that does not justify the annual maintenance cost',
        'A search for opacity from the tax authority, a spouse or creditors',
        'The existence of ongoing creditors or litigation',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Wealth diagnosis', d: 'What exists, where it is, in whose name and under which regime — in the countries involved.' },
        { t: 'Feasibility opinion', d: 'Whether the structure makes sense in your case, including the honest possibility of building nothing or only adjusting what exists.' },
        { t: 'Complete design', d: 'Jurisdiction, corporate type, composition, governance and sequence — with costs and risks made explicit.' },
        { t: 'Implementation with a local team', d: 'Formation conducted in the chosen country, integrated with your tax situation.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'The right question is not "should I set up a holding?" but "what needs protecting, from what risk and for whom?".',
      items: [
        { t: 'Objective before the vehicle', d: 'We define what to protect before choosing the structure — the reverse is buying the car before knowing the road.' },
        { t: 'Cross-analysis with home', d: 'The structure abroad interacts permanently with the tax residency of whoever controls it.' },
        { t: 'Informed decision', d: 'You receive the full picture before any formation.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'A structure without maintenance becomes a liability. We accompany the accounting and reporting obligations in the countries involved, and review the design when legislation changes.',
    },
    faqs: [
      { q: 'Does a holding abroad make wealth invisible?', a: 'No. In an environment of automatic exchange of information, foreign holdings of tax residents are reported. Whoever builds a structure seeking invisibility buys a problem, not a solution.' },
      { q: 'Does the holding cancel my home obligations?', a: 'No. While the owner is a tax resident at home, there are specific rules — recently reformulated — on taxation of profits of entities controlled abroad.' },
      { q: 'Which country is best for the holding?', a: 'It depends on the objective, the assets and the family’s profile. We assess Uruguay, Chile and Paraguay — and, when it makes sense, we indicate that the best solution is a domestic one.' },
      { q: 'I have had a holding for years. Should I review it?', a: 'If it was formed before 2024 and never reviewed, yes. The rules changed beneath it — it may remain valid and have ceased to be efficient.' },
    ],
    cta: { title: 'What does your family need to protect?', text: 'Start with the objective. The structure — if there is one — comes after.' },
    countries: ALL,
  }),

  'svc:sucessao': svc({
    nav: 'Succession & inheritance',
    title: 'International succession and inheritance planning',
    metaTitle: 'International succession & inheritance | Global & Co.',
    metaDescription:
      'Succession planning for families with wealth at home and abroad, with analysis of the new landscape of taxation on transfers.',
    excerpt: 'Wealth passes across generations — or becomes a lawsuit.',
    lede: 'The succession of an asset generally follows the law of the country where it is located. When legislations do not align, those who pay the bill — in money, time and conflict — are the heirs.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Families with assets at home and abroad',
        'Those with more than one heir who want to avoid conflict',
        'Entrepreneurs with corporate holdings to transfer',
        'Families with minor heirs or heirs in different jurisdictions',
        'Those with succession planning done before the recent changes',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'There is relevant wealth in more than one jurisdiction',
        'The next generation is already defined and the intent to transfer is clear',
        'There are illiquid assets that would make paying transfer taxes difficult',
        'The current planning was designed under rules that have changed',
      ],
      no: [
        'There is no relevant wealth to transfer',
        'There are open family disputes that must be resolved first',
        'The expectation is that the structure will cancel taxes — it organizes and optimizes, it does not eliminate',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Complete succession map', d: 'What exists, where it is and which law governs the transfer of each category of asset.' },
        { t: 'Identified friction points', d: 'Where legislations intersect, where there is a risk of blockage and where the outcome would differ from the intended one.' },
        { t: 'Succession design', d: 'Instruments suited to each asset, implementation sequence and family governance rules.' },
        { t: 'Cost projection', d: 'The estimated cost of planned versus unplanned transfer — in tax and in liquidity.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'It is the most postponed conversation and the most expensive to postpone. We conduct it with discretion and sensitivity.',
      items: [
        { t: 'A single view over the whole', d: 'Plans made country by country, separately, can conflict with one another.' },
        { t: 'Family involvement when desired', d: 'Governance works best when it is known by those it will affect.' },
        { t: 'Coordinated implementation', d: 'Execution in the jurisdictions involved, with local specialists under our coordination.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'A succession structure is a living organism: rules change, wealth changes and the family changes. We review it periodically so the plan continues to produce the intended effect.',
    },
    faqs: [
      { q: 'Does my home law apply to my assets abroad?', a: 'Not automatically. Succession usually follows the law of the country where the asset is located — and that is precisely why plans made looking at only one side produce surprises.' },
      { q: 'What changed recently?', a: 'The framework for taxation on transfers moved toward progressivity based on value, and the incidence on assets located abroad was regulated. For large estates, the change is material.' },
      { q: 'Is there still time to plan?', a: 'Succession planning can only be done during one’s lifetime. While there is time and choice, there is something to organize — afterward, what remains is managing consequences and, frequently, litigation.' },
      { q: 'Does this eliminate inheritance tax?', a: 'We do not promise elimination. Planning organizes, anticipates and optimizes within the law — and, above all, it prevents the family from having to sell assets in a rush to pay taxes.' },
    ],
    cta: { title: 'Is your succession designed?', text: 'The family that plans transfers wealth. The one that does not plan transfers a lawsuit.' },
    countries: ALL,
  }),

  // ═══════════════════ BUSINESS ═══════════════════
  'svc:empresas': svc({
    nav: 'Companies & branches',
    title: 'Company and branch formation',
    metaTitle: 'Open a company in Uruguay, Chile & Paraguay | Global & Co.',
    metaDescription:
      'Formation of companies, branches and subsidiaries in Uruguay, Chile and Paraguay. Choice of corporate vehicle by objective, with structured accounting and obligations.',
    excerpt: 'The right corporate vehicle for your real operation.',
    lede: 'Before forming, you must answer what it is for. The corporate type, the jurisdiction and the regime follow from the operation — never the other way around.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Entrepreneurs internationalizing operations or revenue',
        'Service providers with clients in several countries',
        'Foreign-trade businesses that need a logistics base',
        'Groups assessing special regimes and incentive zones',
        'Companies opening a branch or subsidiary in the region',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'There is a real operation or concrete intent to operate',
        'The revenue or the clients justify the structure',
        'You need a contract, account and invoicing in another jurisdiction',
        'The company integrates into a larger tax and wealth design',
      ],
      no: [
        'The company would serve only as a façade, with no activity',
        'The volume does not cover the cost of maintenance and accounting',
        'The decision was made before defining the operation’s objective',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Corporate decision matrix', d: 'Type, jurisdiction and regime chosen according to your real operation — with compared alternatives.' },
        { t: 'Complete formation', d: 'Registrations, accounting, tax domicile and recurring obligations structured.' },
        { t: 'Assessment of special regimes', d: 'Free zones, maquila and sector incentives analyzed honestly — including when they do not pay off.' },
        { t: 'Integration into your structure', d: 'The company is born connected to your tax and wealth planning, not in isolation.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'Most of it is conducted remotely; presence is concentrated in specific stages.',
      items: [
        { t: 'Objective first', d: 'We define the revenue flow and the design before any registration.' },
        { t: 'Timelines by jurisdiction', d: 'Each country has its own pace — you receive a realistic schedule before starting.' },
        { t: 'An operation ready to run', d: 'We do not deliver just the bylaws: we deliver the company ready to operate.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Accounting, ancillary obligations and recurring filings in the countries involved. We remain the coordination point — you are not left alone with a company in another language.',
    },
    faqs: [
      { q: 'Do I need to be a resident to open a company?', a: 'As a rule, foreigners can be partners in all three countries. The best combination between your residency and the corporate structure is defined in the diagnosis — and that combination matters more than it seems.' },
      { q: 'Branch or new company?', a: 'It depends on liability, taxation, image before clients and future plans. It is one of the decisions we compare in writing before executing.' },
      { q: 'Do you handle the accounting afterward?', a: 'We structure the operation with qualified local accountants and remain your single point of coordination.' },
      { q: 'How long until the company is operating?', a: 'It varies by country and corporate type. We give a realistic schedule before starting — without commercial optimism.' },
    ],
    cta: { title: 'Which structure serves your operation?', text: 'Start with the objective. The vehicle is a consequence.' },
    countries: ALL,
  }),

  'svc:incentivos': svc({
    nav: 'Corporate tax incentives',
    title: 'Incentive regimes and corporate tax benefits',
    metaTitle: 'Corporate tax incentives | Global & Co.',
    metaDescription:
      'Incentive regimes in Uruguay, Chile and Paraguay: free zones, maquila, free ports and sector benefits. Real feasibility, no easy promises.',
    excerpt: 'Incentive regimes analyzed honestly — including when they do not pay off.',
    lede: 'Free zones, maquila and sector incentives can transform the economics of an operation. They can also cost dearly to those who enter without meeting the substance requirements.',
    forWho: {
      title: 'Who it is for',
      items: [
        'Industrial and export operations',
        'Foreign trade assessing the region as a logistics hub',
        'Technology companies and exported services',
        'Agribusiness and projects with a productive component',
        'Groups assessing where to install the regional operation',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'The operation has real activity and substance',
        'The volume justifies the regime’s requirements',
        'There is an export or productive component',
        'The location decision is still open',
      ],
      no: [
        'The intent is merely to obtain the benefit without a real operation',
        'The scale does not reach the regime’s minimum requirements',
        'Compliance costs exceed the projected savings',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Feasibility study', d: 'An honest overview of requirements, costs and benefits — with the conclusion "it does not pay off" when that is the case.' },
        { t: 'Comparison across regimes and countries', d: 'Where the same operation yields more, considering taxation, logistics and labor.' },
        { t: 'Structuring of the operation', d: 'Corporate vehicle, classification and implementation sequence.' },
        { t: 'Compliance plan', d: 'The requirements that must be maintained so the benefit is not lost.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'The study before the investment — that is what it is for.',
      items: [
        { t: 'Analysis before the decision', d: 'We recommend the study before any capital commitment.' },
        { t: 'Figures from your case', d: 'A projection with your operation, not a generic example.' },
        { t: 'Supervised implementation', d: 'From paper to the operation running, with coordination of local specialists.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Incentive regimes require maintaining requirements. We accompany compliance so the benefit is not lost along the way.',
    },
    faqs: [
      { q: 'Does a free zone suit my business?', a: 'It depends on the activity, the margin and logistics. We do the honest analysis — when it does not pay off, we say so, and we propose the alternative that makes sense.' },
      { q: 'Do I need to set up a physical operation?', a: 'Most regimes require real substance: activity, people, structure. Regimes obtained without substance tend to be questioned precisely when they would be most needed.' },
      { q: 'Which country offers the best incentive?', a: 'There is no absolute best. Uruguay, Chile and Paraguay have distinct regimes that favor distinct profiles — and we compare all three with your operation’s figures.' },
    ],
    cta: { title: 'Does your project fit any regime?', text: 'Find out before investing, not after.' },
    countries: ALL,
  }),

  'svc:banca': svc({
    nav: 'Banking & accounts',
    title: 'International banking and accounts',
    metaTitle: 'International banking & accounts | Global & Co.',
    metaDescription:
      'Account opening and banking relationships in Uruguay, Chile and Paraguay for individuals and companies — with full compliance and multi-currency organization.',
    excerpt: 'Your international financial base, declared and organized.',
    lede: 'Opening the account is the beginning. What sustains the banking relationship over the long term is the consistency between what you declare, what you move and how your structure is designed.',
    forWho: {
      title: 'Who it is for',
      items: [
        'New residents who need a local banking base',
        'Families organizing reserves in more than one currency',
        'Companies operating across countries',
        'Investors who need custody and access to products',
        'Those who received a banking query about their tax domicile',
      ],
    },
    fit: {
      title: 'When it makes sense',
      yes: [
        'You have or will have residency or an operation in the country',
        'There is a recurring flow between jurisdictions to organize',
        'The source of funds is documentable and the tax situation is clear',
        'You want a declared structure, with consistency across countries',
      ],
      no: [
        'The motivation is to keep funds beyond the reach of the tax authority',
        'The source of funds cannot be documented',
        'Your tax situation is undefined — that comes first',
      ],
    },
    deliver: {
      title: 'What you receive',
      items: [
        { t: 'Profile assessment', d: 'Which institutions are compatible with your case — and which are not, avoiding wear and tear.' },
        { t: 'Dossier preparation', d: 'Documentation and proof of source of funds to the standard institutions actually assess.' },
        { t: 'Support with the opening', d: 'Conduct of the process with local support and a translator, until the account is active.' },
        { t: 'Multi-currency organization', d: 'A structure of accounts and flows coherent with your life across countries.' },
      ],
    },
    process: {
      title: 'What it will be like for you',
      note: 'No serious intermediary guarantees a bank’s decision. We maximize your chances.',
      items: [
        { t: 'Preparation before the approach', d: 'A well-built dossier is what separates approval from refusal in this process.' },
        { t: 'Presence when necessary', d: 'If the institution requires presence, we organize it to resolve in a single trip.' },
        { t: 'Compliance from the start', d: 'The structure is designed to be declared correctly in the countries involved.' },
      ],
    },
    continuity: {
      title: 'And afterward',
      text: 'Banks review records and ask about tax domicile periodically. We keep the consistency between your declared situation and the supporting documentation — and we respond with you when the question arrives.',
    },
    faqs: [
      { q: 'Do you guarantee the account opening?', a: 'No, and be wary of anyone who does. The decision belongs to the institution. What we do is present the profile correctly and choose institutions compatible with your case.' },
      { q: 'Do I need to travel?', a: 'It depends on the institution and the product. When presence is required, we organize it to resolve in a single trip, alongside other stages already planned.' },
      { q: 'Do you manage my investments?', a: 'We are not an asset manager or broker. We structure the access and the organization; investment decisions remain with you and your advisors.' },
      { q: 'Will my account be declared?', a: 'Always. The entire structure is designed for correct declaration in the countries involved — it is the basis of our work, not an option.' },
    ],
    cta: { title: 'Need to organize your financial base?', text: 'Start with the diagnosis of your current situation.' },
    countries: ALL,
  }),
};

export const servicesIndex: Content['servicesIndex'] = {
  metaTitle: 'Services: residency, wealth and business | Global & Co.',
  metaDescription:
    'Eleven fronts across three families — Living, Wealth and Business: residency, degrees, taxation, holding, succession, companies, incentives and banking.',
  breadcrumb: 'Services',
  title: 'Eleven fronts. Three families. One structure designed for you.',
  lede: 'Each service can be contracted on its own — but it is in their combination, in the right order, that your international life gains solidity.',
};
