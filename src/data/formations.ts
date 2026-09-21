export interface Formation {
  id: string
  level: string
  title: string
  summary: string
  duration: string
  format: string
  price: string
  program: string[]
}

export const formations: Formation[] = [
  {
    id: 'html-css',
    level: 'Débutant · aucun prérequis',
    title: 'HTML et CSS : les fondamentaux',
    summary: 'Construire vos premières pages web, claires et adaptées au mobile.',
    duration: '[Durée]',
    format: '[Format]',
    price: '[Prix]',
    program: [
      "Structure d'une page avec HTML",
      'Mise en forme avec CSS, Flexbox et Grid',
      'Design responsive',
      'Projet : un site vitrine complet',
    ],
  },
  {
    id: 'javascript',
    level: 'Débutant · bases de HTML et CSS conseillées',
    title: 'JavaScript : rendre un site interactif',
    summary: "Comprendre la logique de programmation et ajouter de l'interactivité à vos pages.",
    duration: '[Durée]',
    format: '[Format]',
    price: '[Prix]',
    program: [
      'Variables, conditions et boucles',
      'Manipulation de la page (DOM)',
      'Formulaires et validation',
      'Projet : une petite application interactive',
    ],
  },
  {
    id: 'react',
    level: 'Intermédiaire · bases de JavaScript requises',
    title: 'React : construire des interfaces',
    summary: 'Créer des interfaces modernes à partir de composants réutilisables.',
    duration: '[Durée]',
    format: '[Format]',
    price: '[Prix]',
    program: [
      'Composants, props et état',
      'Navigation entre les pages',
      'Appels à une API',
      'Projet : une application web complète',
    ],
  },
  {
    id: 'laravel',
    level: 'Intermédiaire · notions de PHP conseillées',
    title: 'Laravel : développer des applications web',
    summary:
      'Construire la partie serveur d’une application : données, comptes utilisateurs, administration.',
    duration: '[Durée]',
    format: '[Format]',
    price: '[Prix]',
    program: [
      'Routes, contrôleurs et vues',
      'Base de données et migrations',
      'Authentification et rôles',
      'Projet : une application de gestion',
    ],
  },
]

export const registrationSteps = [
  {
    step: 1,
    title: 'Contactez-nous',
    text: 'Remplissez le formulaire ou écrivez-nous sur WhatsApp en indiquant la formation qui vous intéresse.',
  },
  {
    step: 2,
    title: 'Échangeons sur votre niveau',
    text: 'Nous voyons ensemble vos objectifs et le niveau requis pour vous orienter vers la bonne formation.',
  },
  {
    step: 3,
    title: 'Confirmation',
    text: 'Nous vous communiquons les dates, le format et les modalités de règlement, puis nous confirmons votre place.',
  },
]

export const formationFaq = [
  {
    question: 'Faut-il des connaissances préalables ?',
    answer:
      'Non pour les formations destinées aux débutants, comme HTML et CSS. Le niveau requis est indiqué sur chaque formation.',
  },
  {
    question: 'Comment se déroulent les formations ?',
    answer:
      'En sessions pratiques centrées sur des projets réels, avec un accompagnement individuel selon votre rythme.',
  },
  {
    question: 'Quel matériel faut-il ?',
    answer: 'Un ordinateur avec une connexion internet suffit pour suivre l’ensemble des formations.',
  },
  {
    question: 'Comment se fait le paiement ?',
    answer:
      "Le paiement en ligne n'est pas proposé pour le moment. Les modalités de règlement sont précisées au moment de l'inscription.",
  },
  {
    question: 'Puis-je suivre plusieurs formations ?',
    answer: "Oui, les formations peuvent être suivies l'une après l'autre selon votre progression et votre disponibilité.",
  },
]
