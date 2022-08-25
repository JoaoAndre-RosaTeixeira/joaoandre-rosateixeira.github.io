import {ICompetences} from "../interface/ICompetences";
import {IExperiences} from "../interface/IExperiences";


export class UserCV {
  private _firstName: string = 'Rosa Teixeira';
  private _lastName: string = 'Joao André';
  private _birthdate: Date = new Date(1992, 1, 11, 23,35,0)
  private _age: number =0;
  private _email: string = "joao63430@gmail.com"
  private _linkedin: string = "https://www.linkedin.com/in/joao-andr%C3%A9-rosa-teixeira-45600019a/"
  private _instagram: string = "https://www.instagram.com/jo_teixeira63/"

  private _adresse: string = "2 rue Emile Zola, 63430 Pont-du-Château"
  private _number: string = "06 23 18 71 92"
  private _permis: Array<string> = ["B", "C", "CE", "A2"];
  private _dowloadableCv: string = "../../../assets/documents/CV-CDA-2021.pdf";
  private _competences: Array<ICompetences> = [
    {
      title: "Mes competences en informatique :",
      video: "../../../assets/videos/cv/programmation.mp4",
      competences: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "Symphony", "Angular", "Visual Studio", "Php Storm",
        "Savoir se servir des outils en informatique", "Détection et résolution de panne",
        "Utilisation de systeme de recherche", "Autodidacte"]
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
      competences: ["2014 - un peu de Javascript pour la programmation d'une porte des étoiles Entièrement\n" +
      "\t\t\t\t\tfonctionnelle dans Minecraft", "2021 - 2022 - Formation de Concepteur Dévellopeur d'Applications", "2021 - Création de mon site CV"]
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
  private _motivationLetter: string =
    "Ayant toujours été un passionné d'informatique, j’ai toujours voulu apprendre à programmer et travailler dedans. Malheureusement, une mauvaise orientation à fait que je n’ai pas eu accès à ce genre d’études avant aujourd’hui.\n" +
    "\n" +
    "À ce jour, suite à de nombreux emplois, je reprends les études afin d’atteindre mon objectif principal qui est de devenir programmateur en informatique. Pour ce qui est du métier en lui-même, je n’ai aucun doute, dès que cela touche à de l'informatique, je peux passer des jours pencher dessus tant que je n’ai pas terminé mon projet. Lors de mes anciens emplois et même formations, j’étais toujours celui qui venait résoudre les petits problèmes.\n" +
    "\n" +
    "Pour ce qui est de la programmation en elle-même, je m’y suis essayé pendant une courte période il y a quelques années sur Algobox et une programmation pour jeu sur un niveau assez basique, c’est-à-dire la création d’une porte des étoiles entièrement fonctionnelle qui menait d’un point A à un point B.\n" +
    "\n" +
    "Je pense avoir toutes les qualités requises pour ce métier par ma patience, rigueur, autonomie, curiosité, le désir de toujours faire mieux.\n" +
    "\n" +
    "Si je me lance aujourd’hui c’est par l’envie d’apprendre, d’évolution et pour réaliser ma passion Dans un contexte plus personnel je souhaite également apprendre la programmation en informatique et électronique pour des projets personnels."


  constructor() {
    if(this.birthdate){
      let timeDiff = Math.abs(Date.now() - this.birthdate);
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);

    }
  }
  get motivationLetter(): string {
    return this._motivationLetter;
  }

  set motivationLetter(value: string) {
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
    return this._age
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

