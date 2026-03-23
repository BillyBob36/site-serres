/* ============================================================
   CONFIGURATION GLOBALE DU SITE — ÉDITABLE PAR UN AGENT AI
   ============================================================
   Chaque bloc est un objet indépendant.
   Pour ajouter/supprimer un bloc, modifier la liste `blocs` dans pageConfig.
   Pour changer le code couleur global, modifier `theme`.
   Pour changer le contenu texte / images d'un bloc, modifier son objet.
   ============================================================ */

/* ---------- THÈME COULEURS GLOBAL ---------- */
export const theme = {
  primaryYellow: "#FFE500",
  primaryGreen: "#1B7A2B",
  darkGreen: "#145A1F",
  softGreen: "#2D9F46",
  black: "#1A1A1A",
  white: "#FFFFFF",
  cream: "#FFF9E6",
  lightGray: "#F5F5F5",
  mediumGray: "#E0E0E0",
  darkText: "#222222",
  bodyText: "#444444",
  highlightYellow: "#FFE500",
};

/* ---------- TYPOGRAPHIES GLOBAL ---------- */
export const fonts = {
  heading: "'Bodoni Moda', serif",
  body: "'Poppins', sans-serif",
};

/* ---------- BANDEAU HAUT DE PAGE (HEADER) ---------- */
export const headerConfig = {
  topBar: {
    backgroundColor: theme.primaryYellow,
    badge: {
      text: "EXCLUSIF ECO ENVIRONNEMENT",
      backgroundColor: theme.primaryGreen,
      textColor: theme.white,
    },
    items: [
      { 
        text: "Reste à charge", 
        bold: "0€", 
        isSecondType: false 
      },
      { 
        text: "Retour sur investissement", 
        bold: "Immédiat dès l'installation", 
        isSecondType: true 
      },
    ],
    textColor: theme.black,
  },
  navbar: {
    backgroundColor: theme.white,
    logo: {
      src: "/images/logo-serres.svg",
      alt: "Eco Environnement",
      width: 120,
      height: 60,
    },
    links: [
      { label: "Solutions CEE", href: "#solutions-cee" },
      { label: "Agriculture", href: "#agriculture" },
      { label: "Prime CEE", href: "#prime-cee" },
      { label: "Éligibilité", href: "#eligibilite" },
    ],
    cta: {
      text: "0€ de reste à charge",
      href: "#contact",
      backgroundColor: theme.primaryGreen,
      textColor: theme.white,
    },
  },
};

/* ---------- BLOC 1 — HERO ---------- */
export const bloc1Config = {
  id: "bloc-hero",
  badge: {
    icon: "✅",
    text: "Fiche CEE · AGRI-TH-117",
    backgroundColor: theme.black,
    textColor: theme.white,
  },
  title: {
    line1: "Déshumidificateur",
    line2_italic: "thermodynamique",
    line3: "pour serres maraîchères",
    highlightColor: theme.white,
  },
  subtitle:
    "Maîtrisez l'hygrométrie de votre serre, réduisez vos dépenses de chauffage de 25 à 40 % et financez l'intégralité du projet grâce aux Certificats d'Économies d'Énergie.",
  priceBox: {
    amount: "0€",
    amountColor: theme.softGreen,
    text: "de reste à charge avec Eco Environnement",
    subtext:
      "La prime CEE couvre l'intégralité de l'installation. Retour sur investissement immédiat dès la mise en service — sans rien avancer.",
    backgroundColor: theme.cream,
    borderColor: "none",
  },
  ctas: [
    {
      text: "Estimer ma prime CEE",
      href: "#estimer",
      variant: "filled" as const,
      backgroundColor: theme.black,
      textColor: theme.white,
    },
    {
      text: "Vérifier l'éligibilité de ma serre",
      href: "#eligibilite",
      variant: "filled" as const,
      backgroundColor: theme.white,
      textColor: theme.black,
    },
  ],
  heroImage: {
    src: "/images/pdf-extracts/page1_img1_1306x816.jpeg",
    alt: "Déshumidificateur thermodynamique dans une serre maraîchère",
  },
  stats: [
    { value: "0€", label: "RESTE À CHARGE", color: theme.white, labelColor: theme.black, bgColor: theme.softGreen },
    { value: "Immédiat", label: "RETOUR INVEST", color: theme.white, labelColor: theme.black, bgColor: theme.softGreen },
    { value: "25-40%", label: "ÉCONOMIES CHAUFFAGE", color: theme.white, labelColor: theme.black, bgColor: theme.softGreen },
  ],
  backgroundColor: theme.primaryYellow,
};

/* ---------- BLOC 2 — PARTENAIRE ---------- */
export const bloc2Config = {
  id: "bloc-partenaire",
  backgroundColor: theme.white,
  title: {
    line1: "Partenaire avec",
    line2_highlight: "Total Energies Gaz de France",
    line2_highlightColor: theme.primaryYellow,
    line3: "depuis 2022",
  },
  image: {
    src: "/images/pdf-extracts/page1_img2_878x470.jpeg",
    alt: "Partenariat Eco Environnement et Total Energies",
  },
  partnerBadge: {
    text: "Partenariat officiel depuis",
    year: "2022",
    subtext: "Mandataire officiel Total Energies",
    backgroundColor: theme.white,
    borderColor: theme.softGreen,
    accentColor: theme.softGreen,
  },
  paragraphs: [
    {
      text: 'Depuis 2022, Eco Environnement est <strong>mandataire officiel Total Energies</strong>, un rôle stratégique au cœur du dispositif des <strong>Certificats d\'Économies d\'Énergie</strong> (CEE).',
    },
    {
      text: 'Grâce à une expertise reconnue et une parfaite maîtrise des exigences réglementaires, nous accompagnons Total Energies dans la <strong>gestion, la conformité et la valorisation</strong> des opérations d\'efficacité énergétique partout en France.',
    },
  ],
  section2Title: {
    prefix_highlight: "Mandataire",
    suffix: "fiable et reconnu",
  },
  section2Text:
    'Notre partenariat repose sur une collaboration solide autour d\'un objectif commun : <strong>simplifier et sécuriser la rénovation énergétique,</strong> tout en garantissant la conformité des dossiers CEE. Depuis 2022, Eco Environnement s\'est imposé comme un <strong>acteur de confiance</strong> grâce à :',
  features: [
    { text: "Notre expertise historique du marché CEE." },
    { text: "Une connaissance approfondie des exigences du PNCEE." },
    { text: "Une organisation capable de gérer d'importants volumes de dossiers." },
    { text: "Une transparence totale dans nos process et nos échanges." },
  ],
  featureBoxBorderColor: theme.mediumGray,
};

/* ---------- BLOC 3 — CONFIANCE ---------- */
export const bloc3Config = {
  id: "bloc-confiance",
  backgroundColor: theme.lightGray,
  badge: {
    text: "Ils nous font confiance",
    borderColor: theme.softGreen,
    textColor: theme.black,
    backgroundColor: "transparent",
  },
  title: {
    part1: "+320 exploitations agricoles ",
    part2: "",
    highlight: "accompagnées en France",
    highlightColor: theme.primaryYellow,
    part3: " — à 0€ de reste à charge",
  },
  subtitle: {
    text1: "Depuis plus de 10 ans, Eco Environnement accompagne les professionnels de l'agriculture.",
    text2: "Dans tous les projets éligibles, le reste à charge est de ",
    bold: "0€",
    text3: " :\nla prime CEE couvre l'intégralité de l'installation.",
  },
  partners: [
    "COOPÉRATIVE LÉGUMES SUD",
    "SERRE NORMANDIE",
    "TOMATES DE FRANCE",
    "AGRI ÉNERGIE BRETAGNE",
    "PRIMEURS DU RHÔNE",
    "HORTICULTEURS DE L'OUEST",
  ],
  statsCards: [
    {
      value: "+320",
      unit: "",
      label: "projets agricoles à 0€\nde reste à charge",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
    {
      value: "850 000",
      unit: " m²",
      label: "de serres accompagnées",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
    {
      value: "-38%",
      unit: "",
      label: "d'économie énergétique\nmoyenne dès J+1",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
  ],
  testimonial: {
    quoteIconColor: "#F0F0F0",
    text: "Eco Environnement a géré l'intégralité du dossier. Nous n'avons pas déboursé un seul euro — la prime CEE a tout couvert. Et les économies sur le chauffage sont visibles dès la première saison.",
    author: "Gérard M., producteur de tomates, Pyrénées-Orientales · 4 500 m² équipés — reste à charge : 0€",
    authorColor: theme.softGreen,
    backgroundColor: theme.white,
  },
};

/* ---------- BLOC 4 — DÉFI ---------- */
export const bloc4Config = {
  id: "bloc-defi",
  backgroundColor: theme.white,
  badge: {
    text: "Le défi de votre exploitation",
    borderColor: theme.primaryYellow,
    textColor: theme.black,
    backgroundColor: theme.white,
  },
  title: {
    part1: "L'humidité excessive dans vos serres : un problème ",
    highlight: "coûteux",
    highlightColor: theme.primaryYellow,
  },
  subtitle:
    "Une hygrométrie mal contrôlée représente l'une des premières causes de pertes pour les exploitations maraîchères chauffées. Les conséquences sont directes sur vos cultures et vos charges.",
  backgroundImage: "/images/eco-fond.svg",
  cards: [
    {
      title: "Maladies cryptogamiques",
      text: "Botrytis, mildiou, oïdium… Une hygrométrie supérieure à 85 % crée les conditions idéales pour le développement de champignons pathogènes, qui peuvent détruire jusqu'à 30 % de votre récolte.",
      badge: "Jusqu'à 30 % de pertes de récolte",
      badgeColor: theme.primaryYellow,
      badgeTextColor: theme.black,
    },
    {
      title: "Ventilation excessive et déperditions thermiques",
      text: "Pour évacuer l'humidité, de nombreux exploitants ouvrent les ouvrants en rejetant l'air chauffé à l'extérieur. Ce processus représente 40 à 60 % des dépenses de chauffage d'une serre.",
      badge: "40–60 % des pertes de chaleur",
      badgeColor: theme.primaryYellow,
      badgeTextColor: theme.black,
    },
    {
      title: "Rendements dégradés",
      text: "Un climat instable génère du stress pour les végétaux : croissance ralentie, fruits déformés, qualité marchande réduite. L'instabilité climatique impacte directement vos marges commerciales.",
      badge: "Qualité marchande affectée",
      badgeColor: theme.primaryYellow,
      badgeTextColor: theme.black,
    },
    {
      title: "Factures énergétiques en hausse",
      text: "La flambée des prix du gaz et du fioul fragilise la rentabilité des exploitations sous serre. Sans gestion active de l'hygrométrie, vos besoins en chauffage restent structurellement élevés.",
      badge: "Charges opérationnelles en hausse",
      badgeColor: theme.primaryYellow,
      badgeTextColor: theme.black,
    },
  ],
};

/* ---------- BLOC 5 — SOLUTION ---------- */
export const bloc5Config = {
  id: "bloc-solution",
  backgroundColor: theme.primaryYellow,
  badge: {
    text: "La solution Eco Environnement",
    backgroundColor: theme.softGreen,
    textColor: theme.white,
  },
  title: {
    line1: "Le Déshumidificateur",
    line2_italic: "thermodynamique",
    highlightColor: theme.primaryYellow,
    line3: "technologie de pointe à 0€ pour vous",
  },
  paragraphs: [
    {
      text: 'Contrairement à la ventilation classique, le déshumidificateur thermodynamique extrait l\'humidité de l\'air <strong>sans rejeter la chaleur</strong> à l\'extérieur. L\'énergie récupérée est réinjectée sous forme d\'air chaud et sec.',
    },
    {
      text: 'Grâce au dispositif CEE AGRI-TH-117, Eco Environnement finance l\'intégralité de l\'installation. <strong>Votre reste à charge est de 0€</strong> — vous générez des économies immédiates sans rien avancer.',
    },
  ],
  checkList: [
    "Contrôle précis de l'hygrométrie (55–75 % HR)",
    "Récupération des calories de condensation",
    "Réduction des besoins en chauffage de 25 à 40 %",
    "Amélioration de la qualité et du rendement des cultures",
    "Compatible gaz, fioul, biomasse, pompe à chaleur",
    "Fiche CEE AGRI-TH-117 : 710 kWh cumac / m² de serre",
  ],
  checkColor: theme.softGreen,
  rightColumn: {
    title: "Technologie homologuée CEE",
    titleColor: theme.black,
    backgroundColor: theme.white,
    steps: [
      {
        title: "Extraction de l'humidité",
        text: "Captation de la vapeur d'eau dans l'air ambiant par l'évaporateur",
        borderColor: theme.softGreen,
      },
      {
        title: "Condensation et récupération d'énergie",
        text: "La chaleur latente est extraite et conservée dans le circuit frigorifique",
        borderColor: theme.softGreen,
      },
      {
        title: "Réinjection d'air sec et chaud",
        text: "L'air assaini et réchauffé est redistribué uniformément dans la serre",
        borderColor: theme.softGreen,
      },
    ],
    priceBox: {
      amount: "0€",
      amountColor: theme.softGreen,
      title: "de reste à charge",
      text: "Prime CEE = intégralité du coût d'installation",
      backgroundColor: theme.primaryYellow,
      borderColor: theme.primaryYellow,
    },
  },
};

/* ---------- BLOC 6 — FONCTIONNEMENT ---------- */
export const bloc6Config = {
  id: "bloc-fonctionnement",
  backgroundColor: theme.white,
  badge: {
    text: "Principe de fonctionnement",
    borderColor: theme.primaryYellow,
    textColor: theme.black,
    backgroundColor: theme.white,
  },
  title: {
    part1: "Comment ",
    highlight: "fonctionne",
    highlightColor: theme.primaryYellow,
    part2: " le déshumidificateur thermodynamique ?",
  },
  subtitle:
    "Un cycle thermodynamique en 3 étapes pour assainir et valoriser l'air de votre serre\ninstallé à 0€ grâce aux CEE",
  cards: [
    {
      number: "1",
      title: "Extraction de l'air humide",
      text: "L'air chargé en vapeur d'eau est capté à l'intérieur de la serre et dirigé vers l'évaporateur du système thermodynamique. Des capteurs d'hygrométrie pilotent le flux en continu.",
      backgroundColor: "#FFF3B0", // Jaune très clair
      textColor: theme.black,
    },
    {
      number: "2",
      title: "Condensation de la vapeur d'eau",
      text: "L'air passe sur l'évaporateur froid du circuit frigorifique. La vapeur d'eau se condense et est évacuée. La chaleur latente est récupérée par le fluide frigorigène.",
      backgroundColor: "#FFE14D", // Jaune clair/moyen
      textColor: theme.black,
    },
    {
      number: "3",
      title: "Réinjection d'air sec et chaud",
      text: "L'air déshumidifié passe sur le condenseur chaud et est réchauffé par les calories récupérées. Il est ensuite redistribué dans la serre pour stabiliser le microclimat.",
      backgroundColor: theme.primaryYellow, // Jaune vif (#FFE500)
      textColor: theme.black,
    },
  ],
};

/* ---------- BLOC 7 — PROMESSE ---------- */
export const bloc7Config = {
  id: "bloc-promesse",
  backgroundColorTop: "#25A84D", // Vert moyen en haut
  backgroundColorBottom: theme.white, // Blanc pur en bas
  badge: {
    text: "La promesse Eco Environnement",
    borderColor: theme.white,
    textColor: theme.white,
    backgroundColor: "transparent",
  },
  title: {
    part1: "« Votre serre produit mieux, chauffe moins — et vous n'avez pas déboursé ",
    highlight1: "un seul euro",
    part2: ".\nC'est ça, le modèle ",
    highlight2: "Eco Environnement",
    part3: ". »",
    textColor: theme.white,
    highlightColor: theme.primaryYellow,
  },
  subtitle:
    "La prime CEE AGRI-TH-117 finance l'intégralité de votre installation.\nDès le premier jour, vous économisez. Sans jamais avoir investi.",
  cards: [
    {
      value: "0€",
      valueColor: theme.softGreen,
      text1: "Reste à charge",
      text2: "pour l'exploitant",
    },
    {
      value: "Immédiat",
      valueColor: theme.softGreen,
      text1: "Retour sur investissement",
      text2: "dès la mise en service",
    },
    {
      value: "-40%",
      valueColor: theme.softGreen,
      text1: "Économies de chauffage",
      text2: "dès la 1ère saison",
    },
  ],
  ctas: [
    {
      text: "Estimer ma prime CEE - gratuit",
      href: "#",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
    {
      text: "Parler à un expert",
      href: "#",
      backgroundColor: theme.white,
      textColor: theme.black,
    },
  ],
};

/* ---------- BLOC 8 — PERFORMANCES ---------- */
export const bloc8Config = {
  id: "bloc-performances",
  backgroundColor: theme.white,
  badge: {
    text: "Performances énergétiques",
    borderColor: theme.primaryYellow,
    textColor: theme.black,
    backgroundColor: theme.white,
  },
  title: {
    part1: "Nos ",
    highlight: "performances",
    highlightColor: theme.primaryYellow,
    part2: " sans rien avancer",
  },
  subtitle:
    "Des résultats mesurés sur plus de 320 exploitations agricoles accompagnées — zéro\ncapital engagé, économies immédiates",
  cards: [
    {
      value: "25-40%",
      title: "Économies chauffage",
      text: "Constatées dès la 1ère saison — sans avoir déboursé un euro",
      backgroundColor: "#F4A261", // Orange pastel
      textColor: theme.white,
    },
    {
      value: "Jour J",
      title: "ROI immédiat",
      text: "Retour sur investissement dès la mise en service — 0€ avancé",
      backgroundColor: "#63B59B", // Vert émeraude
      textColor: theme.white,
    },
    {
      value: "710",
      valueSuffix: "kWh cumac / m²",
      title: "",
      text: "Prime CEE générée par m² de serre équipée sur 17 ans",
      backgroundColor: "#C9D966", // Vert pistache clair
      textColor: theme.white,
    },
    {
      value: "0€",
      title: "Reste à charge",
      text: "La prime CEE couvre l'intégralité du coût d'installation",
      backgroundColor: "#FF99CD", // Rose pastel
      textColor: theme.white,
    },
  ],
  bottomBanner: {
    backgroundColor: "#009B3A", // Vert vif
    title: "Un investissement qui rapporte dès le premier jour",
    text: "La prime CEE générée par votre projet finance l'intégralité de l'installation. Vous commencez à économiser sur votre facture de chauffage dès la mise en service, sans avoir déboursé le moindre euro. C'est ce que nous appelons le <strong>retour sur investissement immédiat.</strong>",
    bigValue: "0€",
    ctas: [
      {
        text: "Estimer ma prime CEE",
        href: "#",
        backgroundColor: theme.primaryYellow,
        textColor: theme.black,
      },
      {
        text: "Parler à un expert",
        href: "#",
        backgroundColor: "transparent",
        borderColor: theme.white,
        textColor: theme.white,
      },
    ],
  },
};

/* ---------- BLOC 9 — DISPOSITIF CEE ---------- */
export const bloc9Config = {
  id: "bloc-cee",
  backgroundColor: theme.primaryYellow, // Fond entièrement jaune
  badge: {
    text: "Dispositif CEE · Fiche AGRI-TH-117",
    borderColor: theme.black,
    textColor: theme.white,
    backgroundColor: theme.black,
  },
  title: {
    part1: "Financement intégral via les CEE — ",
    highlight: "0€ de reste à charge garanti",
    textColor: theme.black,
    highlightColor: theme.black, // Le highlight n'a pas de couleur différente ici, c'est juste en gras
  },
  subtitle:
    "La prime CEE AGRI-TH-117 couvre l'intégralité du coût d'installation. Eco Environnement monte\nle dossier, négocie la prime et garantit un reste à charge nul pour l'exploitant.",
  leftCards: {
    topCard: {
      backgroundColor: "#C9E4D6", // Vert d'eau très clair
      title: "Formule de calcul AGRI-TH-117",
      equation: "CEE = 710 × Surface (m²)",
      subtext: "en kWh cumac — valorisés en financement intégral de vos travaux",
    },
    bottomCard: {
      backgroundColor: "#009B3A", // Vert vif
      title: "Exemple — serre de 4 000 m²",
      rows: [
        { label: "Surface équipée", value: "4 000 m²" },
        { label: "CEE générés (710 × 4 000)", value: "2 840 000 kWh cumac" },
        { label: "Prime CEE estimée", value: "22 700 – 28 400 €" },
        { label: "Coût installation estimé", value: "20 000 – 28 000 €" },
      ],
      totalRow: {
        label: "Reste à charge exploitant",
        value: "0 €",
      },
      asterisk: "* Montants indicatifs selon le prix de marché des CEE et la configuration de la serre.",
    },
  },
  rightCard: {
    backgroundColor: theme.white,
    title: "La fiche CEE AGRI-TH-117",
    paragraphs: [
      "Encadre spécifiquement le déshumidificateur thermodynamique pour serres\nmaraîchères chauffées.",
      "Durée conventionnelle : 17 ans.",
      "Gain : <strong>710 kWh cumac/m²</strong>.",
      "Eco Environnement valorise vos CEE directement auprès des obligés — sans\nintermédiaire — pour maximiser votre prime et garantir le <strong>reste à charge à 0€</strong>.",
    ],
    cta: {
      text: "Vérifier l'éligibilité de ma serre",
      href: "#",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
    bottomBadge: {
      value: "0€",
      title: "de reste à charge garanti",
      text: "La prime CEE couvre l'intégralité de l'installation.\nVous économisez dès le jour de la mise en service.",
      backgroundColor: "#FFF9D6", // Jaune très clair
    },
  },
};

/* ---------- BLOC 10 — CONDITIONS REQUISES ---------- */
export const bloc10Config = {
  id: "bloc-conditions",
  backgroundColor: theme.white,
  badge: {
    text: "Conditions requises",
    borderColor: theme.primaryYellow,
    textColor: theme.black,
    backgroundColor: theme.white,
  },
  title: {
    prefix: "Votre exploitation est-elle",
    highlight: "éligible",
    suffix: "à AGRI-TH-117 ?",
    textColor: theme.black,
    highlightColor: theme.primaryYellow, // Soulignement jaune
  },
  subtitle:
    "Vérifiez les conditions en moins de 2 minutes\nnotre équipe confirme l'éligibilité et le reste à charge à 0€ sous 48h",
  cards: [
    {
      title: "Serre maraîchère chauffée",
      text: "La serre doit être équipée d'un système de chauffage actif (gaz, fioul, biomasse, PAC). Les tunnels froids ne sont pas éligibles.",
      side: "left",
    },
    {
      title: "Installation par un professionnel qualifié",
      text: "Le déshumidificateur doit être installé par une entreprise spécialisée. Eco Environnement coordonne l'ensemble de la prestation.",
      side: "right",
    },
    {
      title: "Demande effectuée avant les travaux",
      text: "Le dossier CEE doit être initié avant le démarrage. Eco Environnement sécurise l'antériorité dès votre premier contact.",
      side: "left",
    },
    {
      title: "Respect des performances techniques",
      text: "Le matériel doit répondre aux spécifications AGRI-TH-117. Eco Environnement vous oriente vers les équipements certifiés.",
      side: "right",
    },
    {
      title: "Exploitations agricoles professionnelles",
      text: "Réservé aux exploitants agricoles professionnels (SIREN actif, secteur maraîchage ou horticulture). Coopératives éligibles.",
      side: "left",
    },
    {
      title: "Engagement préalable obligatoire",
      text: "Un devis signé doit être transmis avant tout démarrage de chantier. Eco Environnement vous guide pas à pas dans cette démarche.",
      side: "right",
    },
  ],
  cardBorderColor: theme.primaryYellow,
  cta: {
    text: "Vérifier l'éligibilité de ma serre",
    href: "#",
    backgroundColor: theme.primaryYellow,
    textColor: theme.black,
  },
};

/* ---------- BLOC 11 — AVANTAGES CONCRETS ---------- */
export const bloc11Config = {
  id: "bloc-avantages",
  backgroundColor: "#BFEBCF",
  connectorColor: "#E5D86A",
  badge: {
    text: "Avantages concrets",
    textColor: theme.white,
    backgroundColor: "#00A74A",
  },
  title: {
    part1: "Des bénéfices",
    highlight: "immédiats",
    part2: "— sans avoir rien dépensé",
    textColor: theme.black,
    highlightColor: theme.white,
  },
  subtitle:
    "Grâce au financement CEE intégral, vous profitez dès le premier jour d'économies\nréelles et d'une meilleure maîtrise de votre exploitation",
  cards: [
    {
      icon: "plus",
      title: "Moins de maladies, moins de pertes",
      text: "Une hygrométrie maîtrisée entre 55 et 75 % élimine les conditions favorables aux pathogènes. Moins de traitements phytosanitaires, plus de récoltes commercialisables.",
      backgroundColor: "#629BCE",
      textColor: theme.black,
    },
    {
      icon: "growth",
      title: "Rendement amélioré dès la 1ère saison",
      text: "Un microclimat stable favorise une croissance régulière. Les exploitants accompagnés constatent en moyenne 15 à 25 % de rendement supplémentaire dès la première année.",
      backgroundColor: "#B387E7",
      textColor: theme.black,
    },
    {
      icon: "bolt",
      title: "25 à 40 % d'économies chauffage",
      text: "En supprimant la ventilation d'évacuation, vous conservez toute la chaleur produite. 25 à 40 % d'économies dès la première saison — sans avoir rien avancé.",
      backgroundColor: "#EDA06A",
      textColor: theme.black,
    },
    {
      icon: "coins",
      title: "0€ de reste à charge — ROI immédiat",
      text: "La prime CEE AGRI-TH-117 (710 kWh/m²) finance l'intégralité de l'installation. Pour 2 000 m² : entre 11 000 € et 14 000 € de prime — sans que vous ne dépensiez quoi que ce soit.",
      backgroundColor: "#C7B596",
      textColor: theme.black,
    },
    {
      icon: "chart",
      title: "Stabilité du climat de culture",
      text: "Plus de variations brusques ni de courants d'air froid. Les cultures évoluent dans un environnement stable, propice à une production régulière et prévisible.",
      backgroundColor: "#E98CC2",
      textColor: theme.black,
    },
    {
      icon: "rocket",
      title: "Valorisation de votre exploitation",
      text: "Une serre performante renforce votre compétitivité, votre conformité aux normes environnementales et la valeur patrimoniale de votre outil de production.",
      backgroundColor: "#C2D56E",
      textColor: theme.black,
    },
  ],
};

/* ---------- BLOC 12 — NOTRE METHODE ---------- */
export const bloc12Config = {
  id: "bloc-methode",
  backgroundColor: theme.primaryYellow,
  bottomStripColor: "#ECECEC",
  badge: {
    text: "Notre méthode",
    backgroundColor: theme.black,
    textColor: theme.white,
  },
  title: {
    part1: "Un accompagnement",
    highlight: "clé en main",
    part2: "— de A à Z, à 0€ pour vous",
    textColor: theme.black,
    highlightColor: theme.white,
  },
  subtitle:
    "Eco Environnement gère l'intégralité du projet : étude, dossier CEE, installation, prime. Vous\nvous concentrez sur votre exploitation.",
  steps: [
    {
      number: "1",
      title: "Étude d'éligibilité",
      text: "Analyse gratuite de votre serre et simulation de prime CEE personnalisée — sans que vous ne dépensiez quoi que ce soit.",
    },
    {
      number: "2",
      title: "Dimensionnement",
      text: "Étude thermique, sélection du matériel, devis détaillé sans engagement.",
    },
    {
      number: "3",
      title: "Dossier CEE",
      text: "Constitution complète du dossier, transmission à l'obligé, sécurisation de la prime.",
    },
    {
      number: "4",
      title: "Installation",
      text: "Mise en œuvre par des professionnels certifiés, mise en service et réglages.",
    },
    {
      number: "5",
      title: "Prime versée",
      text: "Validation finale et versement de votre prime CEE — reste à charge : 0€.",
    },
  ],
  bottomBanner: {
    backgroundColor: "#00A84A",
    heading: "Économies immédiates, zéro investissement, accompagnement total.",
    text: "Eco Environnement couvre l'intégralité du financement via les CEE. Vous n'avancez rien.",
    cta: {
      text: "Démarrer mon projet — étude gratuite",
      href: "#",
      backgroundColor: theme.primaryYellow,
      textColor: theme.black,
    },
    amount: "0€",
    amountColor: theme.white,
    decorColor: "#43BD67",
  },
};

/* ---------- BLOC 13 — FAQ ---------- */
export const bloc13Config = {
  id: "bloc-faq",
  backgroundColor: "#EFEFEF",
  badge: {
    text: "Questions fréquentes",
    borderColor: theme.primaryYellow,
    textColor: theme.black,
    backgroundColor: theme.white,
  },
  title: {
    part1: "Tout ce que vous devez savoir",
    highlightColor: theme.primaryYellow,
    part2: "sur AGRI-TH-117 et le reste à charge à 0€",
    textColor: theme.black,
  },
  subtitle:
    "Vérifiez les conditions en moins de 2 minutes\nnotre équipe confirme l'éligibilité et le reste à charge à 0€ sous 48h",
  accordion: {
    borderColor: "#CFCFCF",
    questionColor: theme.black,
    answerColor: "#353535",
    chevronColor: theme.primaryYellow,
  },
  items: [
    {
      question: "Le reste à charge est-il vraiment de 0€ avec Eco Environnement ?",
      answers: [
        "Oui. Pour les projets éligibles à la fiche CEE AGRI-TH-117, la prime CEE peut couvrir l'intégralité du coût d'installation du déshumidificateur thermodynamique, ce qui permet un reste à charge de 0€ pour l'exploitant.",
        "La prise en charge comprend l'étude du projet, le montage du dossier CEE, la valorisation de la prime et l'installation, avec des économies de chauffage qui démarrent dès la mise en service.",
      ],
    },
    {
      question: "Qui peut bénéficier de la fiche CEE AGRI-TH-117 ?",
      answers: [
        "La fiche AGRI-TH-117 s'adresse aux exploitations agricoles professionnelles, notamment en maraîchage et en horticulture, ainsi qu'aux coopératives répondant aux critères d'éligibilité.",
        "L'opération concerne les serres maraîchères chauffées, neuves ou existantes, et exclut les tunnels froids non chauffés.",
        "Le projet doit être engagé avant le début des travaux et l'installation doit être réalisée par un professionnel qualifié.",
      ],
    },
    {
      question: "Quelle prime CEE puis-je obtenir pour ma serre ?",
      answers: [
        "Le volume de certificats généré par l'opération AGRI-TH-117 est calculé sur la base de 710 kWh cumac par m² de serre équipée, avec une durée de vie conventionnelle de 17 ans.",
        "Le montant exact de la prime dépend de la surface équipée, de la configuration de la serre et de la valorisation des CEE au moment du montage du dossier.",
        "À titre indicatif, une serre de 4 000 m² peut générer 2 840 000 kWh cumac, soit une prime estimée entre 22 700 € et 28 400 € selon les conditions de valorisation.",
      ],
    },
    {
      question: "Combien de temps dure le montage du dossier CEE ?",
      answers: [
        "La vérification initiale des conditions peut être faite en quelques minutes, et la confirmation de l'éligibilité ainsi que du reste à charge peut intervenir sous 48h.",
        "Le traitement complet du dossier dépend ensuite de la transmission des pièces, de la signature du devis, de la réalisation de l'installation et de la validation administrative finale.",
        "Sur le plan réglementaire, l'ensemble des justificatifs doit être déposé au plus tard dans les 12 mois suivant l'achèvement des travaux.",
      ],
    },
    {
      question: "Quel matériel de déshumidification est éligible à AGRI-TH-117 ?",
      answers: [
        "Le matériel éligible est un système de déshumidification thermodynamique destiné à la gestion de l'hygrométrie dans les serres maraîchères chauffées.",
        "L'équipement doit respecter les performances techniques prévues par la fiche AGRI-TH-117, notamment un seuil de performance minimal R supérieur ou égal à 2 L/kWh à 20°C et 80% d'humidité relative.",
        "L'installation doit être effectuée par un professionnel qualifié, avec un équipement correctement dimensionné pour la surface de serre concernée.",
      ],
    },
    {
      question: "Comment calculer précisément les CEE pour mon exploitation ?",
      answers: [
        "Le calcul de base est le suivant : CEE = 710 × surface équipée en m².",
        "Par exemple, pour une serre équipée de 4 000 m², le volume généré est de 2 840 000 kWh cumac.",
        "Ce volume est ensuite converti en prime financière selon la valeur de marché des CEE et les caractéristiques techniques du projet, ce qui explique les variations possibles d'un dossier à l'autre.",
      ],
    },
  ],
};

/* ---------- BLOC 14 — RESSOURCES & ACTUALITES ---------- */
export const bloc14Config = {
  id: "bloc-ressources",
  backgroundColor: "#EDEDED",
  badge: {
    text: "Ressources & actualités",
    backgroundColor: "#0AA14A",
    textColor: theme.white,
  },
  title: {
    part1: "Actualités",
    part2: "Agriculture & Transition Énergétique",
    textColor: theme.black,
    highlightColor: theme.primaryYellow,
  },
  featuredMain: {
    image: "/images/pdf-extracts/page1_img3_1099x562.jpeg",
    title: "Excellence technique énergétique",
    text: "Solutions d'optimisation énergétique résidentielle - Performance technique maximisée",
  },
  featuredSide: {
    image: "/images/pdf-extracts/page1_img4_850x567.jpeg",
    title: "Innovation d'ingénierie",
    text: "Technologies avancées d'optimisation énergétique - Expertise technique de pointe",
  },
  cards: [
    {
      title: "Retour d'expérience Résidentiel CEE",
      text: "Éclairage public LED intégral, 60% d'économie et 150 000€ de primes CEE pour une commune de 5 000 habitants",
    },
    {
      title: "Destratification d'air dans les immeubles",
      text: "35% d'économie de chauffage grâce aux CEE dans les équipements sportifs municipaux",
    },
    {
      title: "Cuisines centrales et transition énergétique",
      text: "Récupération de chaleur et équipements haute efficacité financés à 100% par les CEE",
    },
  ],
  cta: {
    text: "Découvrez les actualités de votre secteur",
    href: "#",
    backgroundColor: "#1E1E1E",
    textColor: theme.white,
  },
};

/* ---------- BLOC 15 — CONTACT ---------- */
export const bloc15Config = {
  id: "bloc-contact",
  backgroundColor: theme.white,
  leftIllustration: {
    src: "/images/agriculture.svg",
    alt: "Illustration végétale",
  },
  title: {
    part1: "Vous préférez",
    part2: "être",
    highlight: "recontacté",
    part3: "?",
    textColor: theme.black,
    highlightColor: theme.primaryYellow,
  },
  fields: [
    { name: "societe", placeholder: "Société", type: "text" },
    { name: "fonction", placeholder: "Fonction", type: "text" },
    { name: "nom", placeholder: "Nom", type: "text" },
    { name: "prenom", placeholder: "Prénom", type: "text" },
    { name: "email", placeholder: "E-mail", type: "email" },
    { name: "telephone", placeholder: "Téléphone", type: "tel" },
  ],
  consentText:
    "En remplissant le formulaire j'accepte le traitement de mes données à caractère personnel par ECO ENVIRONNEMENT ainsi que la Politique de protection des données.",
  submitText: "Envoyer",
};

/* ---------- BLOC 16 — FOOTER ---------- */
export const bloc16Config = {
  id: "bloc-footer",
  backgroundColor: theme.primaryYellow,
  textColor: theme.black,
  logo: {
    src: "/images/logo-eco-Horizontblanc.svg",
    alt: "Eco Environnement",
  },
  description:
    "Spécialiste du financement CEE pour l'agriculture. 0€ de reste à charge dans tous les projets éligibles. Depuis 2012, plus de 320 exploitations agricoles accompagnées en France.",
  columns: [
    {
      title: "Solutions CEE",
      links: [
        { label: "AGRI-TH-117 Serres", href: "#" },
        { label: "Double paroi gonflable", href: "#" },
        { label: "Isolation serres", href: "#" },
        { label: "Chauffage biomasse", href: "#" },
      ],
    },
    {
      title: "Secteurs",
      links: [
        { label: "Maraîchage", href: "#" },
        { label: "Horticulture", href: "#" },
        { label: "Agriculture", href: "#" },
        { label: "Coopératives", href: "#" },
      ],
    },
    {
      title: "Eco Environnement",
      links: [
        { label: "À propos", href: "#" },
        { label: "Actualités", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Mentions légales", href: "#" },
      ],
    },
  ],
  copyright: "© 2025 Eco Environnement — Tous droits réservés",
};

/* ---------- CONFIGURATION DE LA PAGE (ordre des blocs) ---------- */
export const pageConfig = {
  blocs: ["header", "bloc1", "bloc2", "bloc3", "bloc4", "bloc5", "bloc6", "bloc7", "bloc8", "bloc9", "bloc10", "bloc11", "bloc12", "bloc13", "bloc14", "bloc15", "bloc16"],
};
