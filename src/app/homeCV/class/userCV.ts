import {ICompetences} from "../interface/ICompetences";
import {IExperiences} from "../interface/IExperiences";


export class UserCV {
  private _firstName: string = 'Rosa Teixeira';
  private _lastName: string = 'Joao André';
  private _birthdate: Date = new Date(1992, 1, 11, 23,35,0)
  private _email: string = "joao63430@gmail.com"
  private _linkedin: string = "https://www.linkedin.com/in/joao-andr%C3%A9-rosa-teixeira-dev-ia/"
  private _instagram: string = "https://www.instagram.com/jo_teixeira63"

  private _adresse: string = "2 rue Emile Zola, 63430 Pont-du-Château"
  private _number: string = "06 23 18 71 92"
  private _permis: Array<string> = ["B", "C", "CE", "A2"];
  private _dowloadableCv: string = "../../../assets/documents/CV-CDA-2021.pdf";
  private _dowloadableRPG: string = "../../../assets/documents/newbie.rar";

  private _age: number =0;


  private _competences: Array<ICompetences> = [
    {
      title: "Mes competences en informatique :",
      video: "../../../assets/videos/cv/programmation.mp4",
      competences: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "Symphony", "Angular", "Visual Studio", "Php Storm",
        "Savoir se servir des outils en informatique", "Détection et résolution de panne",
        "Utilisation de systeme de recherche", "Autodidacte", "Figma"]
    },
    {
      title: "Mes competences chauffeur :",
      video: "../../../assets/videos/cv/chauffeur2.mp4",
      competences: ["Contrôler l'état de fonctionnemen du vehicule", "Réaliser les opérations d'attelage", "Définir un itinéraire en fonction des consignes de livraison", "Organiser ou contrôler le chargement marchandises dans le véhicule",
        "Vérifier la présence et la conformité des documents de bord et de transport", "Vérifier la conformité de la livraison", "Organiser le transfert et la livraison des produits aux clients",
        "Réaliser un suivi d'activité", "Réglementation du transport de marchandises", "Déclencher les mesures d'urgence en cas d'incident", "Règles de sécurité des biens et des personnes",
        "Modalité chargement/déchargement des marchandises", "Utilisation de matériel de navigation", "Lecture de carte routière", "Caractéristique et utilisation du chronotachygraphe",
        "Principes de l'éco-conduit"]
    }
  ];
  private _experiences: Array<IExperiences> = [
    {
      title: "Mes Experiences informatique :",
      competences: ["2021 - 2022 - Formation de Concepteur Dévellopeur d'Applications", "2021 - Création de mon site CV", "2022 - programmation rpg 2D", "2022 - Création d'application", "2021 - projet tutoré création de site web", "2021 - stage 3 semaine en entreprise"]
    },
    {
      title: "Mes expériences en général :",
      competences: [
        "2021 - Chauffeur poids lourd/super lourd Transport mourteron 8mois", "2020 - Chauffeur Frigo – TerreAzur pomona 6 mois", "2018 - E.L.S. (drive – caisse – mise en rayonmise en place-reception) CDD – Super U",
        "2014 - 2018 E.L.S. (drive – caisse – mise en rayon) CDI – Carrefour Market – Lezoux", "2016 - Vendeur spécialisé CDD – Micromania – Lempdes", "2012 et 2013 -  Exploitant agricole – Pont-du-Château",
        "2011 - 2013 - Vendeur Rosa déco et marché Clermont-Ferrand", "2012 - Employé commercia Stages – Parlons Cash – Aubièrel", "2010 - Dépanneur matériel brun Stage – Télé Service – ClermontFerrand",
        "2009 - Dépanneur matériel blanc Stage – Clermont-Pièces – ClermontFerrand", "2008 - Aide maçon Stage – Cotton frères – Pont-du-Château", "2008 - Employé commercial Stage – SPA – Pont-du-Château",
        "2007 - E.L.S. Stage – Intermarché – Pont-du-Château"
      ]
    }
  ]
 private _motivationLetter: Array<string> =
  [
    "Bonjour à tous,\n",
    "Je m'appelle " + this.firstName + " " + this.lastName + ", j'ai " + this.age + " ans.\n",
    "Passionné par l'informatique depuis toujours, j'ai appris à programmer et à développer mes compétences au fil des années.\n",
    "Après avoir travaillé dans plusieurs domaines, j'ai repris mes études pour atteindre mon objectif principal : devenir développeur.\n",
    "Aujourd'hui, grâce à des formations en Conception et Développement d'Applications ainsi qu'en Intelligence Artificielle, j'ai pu acquérir des compétences variées et solides.\n",
    "J'ai eu la chance de travailler chez Exakis et Engie IT à Lyon, où j'ai développé une page d'actualités sur le versionning d'applications avec .NET et Vue.js 3.\n",
    "Je pense avoir toutes les qualités requises pour ce métier : patience, rigueur, autonomie, curiosité, et le désir de toujours m'améliorer.\n",
    "Je suis actuellement à la recherche d'un nouveau poste en développement web ou full stack, disponible à partir du 31 juillet.\n",
    "Merci d’avance pour toutes les mises en relation, les conseils ou les offres que vous pouvez partager.\n",
  ]


  constructor() {
    this.birthdate = new Date(1992, 1, 11);
    const today = new Date();
    this.age = today.getFullYear() - this.birthdate.getFullYear();
    const ageDate = new Date(today.getFullYear(), this.birthdate.getMonth(), this.birthdate.getDate());
    if (today < ageDate) {
      this.age--;
    }
  }

  get motivationLetter(): Array<string> {
    return this._motivationLetter;
  }

  set motivationLetter(value: Array<string>) {
    this._motivationLetter = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get birthdate(): any {
    return this._birthdate;
  }

  set birthdate(value: Date) {
    this._birthdate = value;
  }

  get age(): any {
    let timeDiff = Math.abs(Date.now() - this.birthdate);
    return Math.floor((timeDiff / (1000 * 3600 * 24))/364.25);
  }

  set age(value: number) {
    this._age = value;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  get permis(): Array<string> {
    return this._permis;
  }

  set permis(value: Array<string>) {
    this._permis = value;
  }

  get dowloadableCv(): string {
    return this._dowloadableCv;
  }

  get dowloadableRPG(): string {
    return this._dowloadableRPG;
  }


  set dowloadableCv(value: string) {
    this._dowloadableCv = value;
  }

  get competences(): Array<ICompetences> {
    return this._competences;
  }

  set competences(value: Array<ICompetences>) {
    this._competences = value;
  }

  get experiences(): Array<IExperiences> {
    return this._experiences;
  }

  set experiences(value: Array<IExperiences>) {
    this._experiences = value;
  }

  get linkedin(): string {
    return this._linkedin;
  }

  set linkedin(value: string) {
    this._linkedin = value;
  }

  get instagram(): string {
    return this._instagram;
  }

  set instagram(value: string) {
    this._instagram = value;
  }
}

