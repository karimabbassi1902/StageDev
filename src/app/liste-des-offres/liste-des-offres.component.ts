import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-liste-des-offres',
  templateUrl: './liste-des-offres.component.html',
  styleUrls: ['./liste-des-offres.component.scss']
})
export class ListeDesOffresComponent implements OnInit {

  offres: Offre[] = [
    {
      id: 0,
      Titre: 'Stage Développement Java',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'EXINFO',
      descriptif: 'Au sein de la Business Unit Rail Infrastructure à Châtillon (92), vous intégrez le département Data Engineering chargé de configurer et de valider les données utilisées par le logiciel automatisant la conduite des métros et des VAL de dernière génération. Dans cet environnement, vous serez impliqué(e) pour développer de nouvelles fonctionnalités et des objets graphiques dans les outils utilisés pour la configuration ; dans ce cadre, vous ferez régulièrement état du suivi d\'avancement de ce projet et participerez à la résolution de problèmes liés à ces développements. Intégré(e) au sein d\'une équipe Agile, composée d\'architectes logiciels et de développeurs JAVA expérimentés, vous serez partie prenante lors d\'événements SCRUM, tel un véritable développeur !    Vous serez également amené(e) à participer à des démonstrations aux différents clients de ces outils et collaborerez avec les différents métiers de l\'ingénierie pour répondre au mieux aux besoins des utilisateurs de ces outils.Ce stage basé à Chatillon (92) est à pourvoir dès Janvier 2024 pour une durée de 6 mois (césure ou stage de fin d\'études)',
      datePUB:'10-06-2023'
      
    },
    {
      id: 1,
      Titre: 'Stage en Développement Fullstack - Application de Gestion des Rendez-vous Médicaux',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'MedTech',
      descriptif: 'Nous sommes à la recherche d\'un stagiaire développeur fullstack enthousiaste pour rejoindre notre équipe de développement et contribuer à la création d\'une application de gestion des rendez-vous médicaux. Vous aurez l`\'occasion de travailler sur un projet essentiel qui simplifie la prise de rendez-vous pour les patients et améliore l\'efficacité des professionnels de la santé.',
      Responsabilites: [
        'Participer au développement complet de l\'application, de la conception initiale à la mise en production.',
        'Collaborer avec les équipes de conception et de développement pour concevoir une interface utilisateur conviviale et intuitive.',
        'Créer des fonctionnalités back-end robustes pour gérer les rendez-vous, les horaires des médecins, les rappels, etc.',
        'Assurer l\'intégration de l\'application avec des bases de données pour stocker les informations des patients et des rendez-vous.',
        'Effectuer des tests approfondis pour garantir la sécurité et la qualité de l\'application.',
        'Travailler sur l\'optimisation des performances de l\'application.',
        'Contribuer à la documentation technique du projet.'
      ],
      datePUB:'10-06-2023'

    },
    {
      id: 2,
      Titre: ' Développeur Fullstack React.NET - Application de Gestion des Équipements IoT 4.0 pour les Industries',
      TypeOffre: TypeOffreEnum.EMPLOI,
      Entreprise: 'ObjectsIOT',
      descriptif: 'Nous sommes à la recherche d\'un développeur fullstack talentueux pour rejoindre notre équipe de développement et participer à la création d\'une application de pointe pour la gestion des équipements IoT 4.0 dans le secteur industriel. Vous jouerez un rôle clé dans la conception, le développement et la maintenance de cette application, qui aidera nos clients à optimiser leurs opérations industrielles grâce à l\'IoT 4.0.',
      Responsabilites: [
        'Concevoir et développer des fonctionnalités front-end en utilisant React pour une interface utilisateur intuitive et réactive.',
        'Développer des composants back-end robustes en utilisant la technologie .NET pour gérer les données IoT et l\'intégration avec les équipements.',
        'Travailler en étroite collaboration avec les équipes IoT pour intégrer et traiter les données des capteurs et des équipements industriels.',
        'Collaborer avec les équipes de conception pour créer une expérience utilisateur exceptionnelle.',
        'Assurer des tests complets pour garantir la qualité, la sécurité et la performance de l\'application.',
        'Participer à la documentation technique du projet.'

      ],
      datePUB:'10-06-2023'

    },
    {
      id: 3,
      Titre: ' Développeur Fullstack Java - Application de Gestion de Stock pour Boutique de Vêtements',
      TypeOffre: TypeOffreEnum.EMPLOI,
      Entreprise: 'Fashion You',
      descriptif: 'Nous recherchons un développeur fullstack Java talentueux pour rejoindre notre équipe et diriger la mise en œuvre d\'une application de gestion de stock destinée à notre boutique de vêtements. Cette application jouera un rôle crucial dans la gestion efficace de notre inventaire et contribuera à l\'amélioration de l\'expérience client.',
      Responsabilites: [
'Concevoir, développer et maintenir une application web de gestion de stock en utilisant Java pour le back-end et des technologies front-end modernes.',
'Collaborer avec les équipes internes pour comprendre les besoins de gestion de stock et traduire ces besoins en fonctionnalités logicielles.',
'Créer une interface utilisateur conviviale pour la saisie et la visualisation des données de stock.',
'Mettre en place des fonctionnalités de suivi en temps réel des niveaux de stock, de réapprovisionnement automatique, et de génération de rapports.',
'Assurer des tests approfondis pour garantir la qualité et la stabilité de l\'application.',
'Participer à la documentation technique du projet.'
      ],
      Qualifications:[
'Expérience avérée en développement Java, y compris la création d\'applications web.',
'Connaissance des frameworks Java, tels que Spring Boot.',
'Compétences en développement front-end avec des technologies telles que HTML, CSS, JavaScript, et des frameworks comme Angular ou React.',
'Compréhension des bases de données SQL pour le stockage et la gestion des données de stock.',
'Capacité à travailler de manière autonome et en équipe.',
'Forte motivation à contribuer à un projet ayant un impact réel sur les opérations de la boutique.'
      ],
      datePUB:'10-06-2023'

    },
    {
      id: 4,
      Titre: 'Stage en Développement Fullstack Angular/Spring Boot - Application de Gestion des Équipes pour un Jeu d\'Échecs',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'Asterix',
      descriptif: 'Nous sommes à la recherche d\'un stagiaire développeur fullstack passionné par les échecs pour rejoindre notre équipe de développement et contribuer à la création d\'une application innovante de gestion des équipes pour un jeu d\'échecs en ligne. Cette application facilitera l\'organisation de tournois, la collaboration entre les joueurs et la gestion des stratégies d\'équipe.',
      Qualifications: [
'Étudiant en informatique, génie logiciel ou domaine connexe.',
'Connaissance pratique d\'Angular et de la création d\'applications web réactives.',
'Solides compétences en développement back-end avec Spring Boot.',
'Passion pour le jeu d\'échecs et compréhension des règles et des stratégies.',
'Compétences en bases de données pour stocker et gérer les données liées aux équipes et aux matchs.',
'Capacité à travailler de manière autonome et en équipe.',
'Excellentes compétences en communication et en résolution de problèmes.'
      ],
      Responsabilites:[
'Concevoir et développer une interface utilisateur réactive en utilisant Angular pour la gestion des équipes et des tournois d\'échecs.',
'Créer des fonctionnalités back-end robustes en utilisant Spring Boot pour gérer les données des équipes, des joueurs et des matchs.',
'Implémenter des fonctionnalités de suivi en temps réel des parties d\'échecs, y compris la gestion des temps, les notations, etc.',
'Collaborer avec les équipes de conception pour créer une expérience utilisateur exceptionnelle.',
'Assurer des tests approfondis pour garantir la qualité et la stabilité de l\'application.',
'Participer à la documentation technique du projet.'
      ],
      datePUB:'10-06-2023'

    },

    {
      id: 5,
      Titre: 'Stage Développement Java',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'EXINFO',
      descriptif: 'Au sein de la Business Unit Rail Infrastructure à Châtillon (92), vous intégrez le département Data Engineering chargé de configurer et de valider les données utilisées par le logiciel automatisant la conduite des métros et des VAL de dernière génération. Dans cet environnement, vous serez impliqué(e) pour développer de nouvelles fonctionnalités et des objets graphiques dans les outils utilisés pour la configuration ; dans ce cadre, vous ferez régulièrement état du suivi d\'avancement de ce projet et participerez à la résolution de problèmes liés à ces développements. Intégré(e) au sein d\'une équipe Agile, composée d\'architectes logiciels et de développeurs JAVA expérimentés, vous serez partie prenante lors d\'événements SCRUM, tel un véritable développeur !    Vous serez également amené(e) à participer à des démonstrations aux différents clients de ces outils et collaborerez avec les différents métiers de l\'ingénierie pour répondre au mieux aux besoins des utilisateurs de ces outils.Ce stage basé à Chatillon (92) est à pourvoir dès Janvier 2024 pour une durée de 6 mois (césure ou stage de fin d\'études)',
      datePUB:'10-06-2023'
      
    },
    {
      id: 6,
      Titre: 'Stage en Développement Fullstack - Application de Gestion des Rendez-vous Médicaux',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'MedTech',
      descriptif: 'Nous sommes à la recherche d\'un stagiaire développeur fullstack enthousiaste pour rejoindre notre équipe de développement et contribuer à la création d\'une application de gestion des rendez-vous médicaux. Vous aurez l`\'occasion de travailler sur un projet essentiel qui simplifie la prise de rendez-vous pour les patients et améliore l\'efficacité des professionnels de la santé.',
      Responsabilites: [
        'Participer au développement complet de l\'application, de la conception initiale à la mise en production.',
        'Collaborer avec les équipes de conception et de développement pour concevoir une interface utilisateur conviviale et intuitive.',
        'Créer des fonctionnalités back-end robustes pour gérer les rendez-vous, les horaires des médecins, les rappels, etc.',
        'Assurer l\'intégration de l\'application avec des bases de données pour stocker les informations des patients et des rendez-vous.',
        'Effectuer des tests approfondis pour garantir la sécurité et la qualité de l\'application.',
        'Travailler sur l\'optimisation des performances de l\'application.',
        'Contribuer à la documentation technique du projet.'
      ],
      datePUB:'10-06-2023'

    },
    {
      id: 7,
      Titre: ' Développeur Fullstack React.NET - Application de Gestion des Équipements IoT 4.0 pour les Industries',
      TypeOffre: TypeOffreEnum.EMPLOI,
      Entreprise: 'ObjectsIOT',
      descriptif: 'Nous sommes à la recherche d\'un développeur fullstack talentueux pour rejoindre notre équipe de développement et participer à la création d\'une application de pointe pour la gestion des équipements IoT 4.0 dans le secteur industriel. Vous jouerez un rôle clé dans la conception, le développement et la maintenance de cette application, qui aidera nos clients à optimiser leurs opérations industrielles grâce à l\'IoT 4.0.',
      Responsabilites: [
        'Concevoir et développer des fonctionnalités front-end en utilisant React pour une interface utilisateur intuitive et réactive.',
        'Développer des composants back-end robustes en utilisant la technologie .NET pour gérer les données IoT et l\'intégration avec les équipements.',
        'Travailler en étroite collaboration avec les équipes IoT pour intégrer et traiter les données des capteurs et des équipements industriels.',
        'Collaborer avec les équipes de conception pour créer une expérience utilisateur exceptionnelle.',
        'Assurer des tests complets pour garantir la qualité, la sécurité et la performance de l\'application.',
        'Participer à la documentation technique du projet.'

      ],
      datePUB:'10-06-2023'

    },
    {
      id: 8,
      Titre: ' Développeur Fullstack Java - Application de Gestion de Stock pour Boutique de Vêtements',
      TypeOffre: TypeOffreEnum.EMPLOI,
      Entreprise: 'Fashion You',
      descriptif: 'Nous recherchons un développeur fullstack Java talentueux pour rejoindre notre équipe et diriger la mise en œuvre d\'une application de gestion de stock destinée à notre boutique de vêtements. Cette application jouera un rôle crucial dans la gestion efficace de notre inventaire et contribuera à l\'amélioration de l\'expérience client.',
      Responsabilites: [
'Concevoir, développer et maintenir une application web de gestion de stock en utilisant Java pour le back-end et des technologies front-end modernes.',
'Collaborer avec les équipes internes pour comprendre les besoins de gestion de stock et traduire ces besoins en fonctionnalités logicielles.',
'Créer une interface utilisateur conviviale pour la saisie et la visualisation des données de stock.',
'Mettre en place des fonctionnalités de suivi en temps réel des niveaux de stock, de réapprovisionnement automatique, et de génération de rapports.',
'Assurer des tests approfondis pour garantir la qualité et la stabilité de l\'application.',
'Participer à la documentation technique du projet.'
      ],
      Qualifications:[
'Expérience avérée en développement Java, y compris la création d\'applications web.',
'Connaissance des frameworks Java, tels que Spring Boot.',
'Compétences en développement front-end avec des technologies telles que HTML, CSS, JavaScript, et des frameworks comme Angular ou React.',
'Compréhension des bases de données SQL pour le stockage et la gestion des données de stock.',
'Capacité à travailler de manière autonome et en équipe.',
'Forte motivation à contribuer à un projet ayant un impact réel sur les opérations de la boutique.'
      ],
      datePUB:'10-06-2023'

    },
    {
      id: 9,
      Titre: 'Stage en Développement Fullstack Angular/Spring Boot - Application de Gestion des Équipes pour un Jeu d\'Échecs',
      TypeOffre: TypeOffreEnum.STAGE,
      Entreprise: 'Asterix',
      descriptif: 'Nous sommes à la recherche d\'un stagiaire développeur fullstack passionné par les échecs pour rejoindre notre équipe de développement et contribuer à la création d\'une application innovante de gestion des équipes pour un jeu d\'échecs en ligne. Cette application facilitera l\'organisation de tournois, la collaboration entre les joueurs et la gestion des stratégies d\'équipe.',
      Qualifications: [
'Étudiant en informatique, génie logiciel ou domaine connexe.',
'Connaissance pratique d\'Angular et de la création d\'applications web réactives.',
'Solides compétences en développement back-end avec Spring Boot.',
'Passion pour le jeu d\'échecs et compréhension des règles et des stratégies.',
'Compétences en bases de données pour stocker et gérer les données liées aux équipes et aux matchs.',
'Capacité à travailler de manière autonome et en équipe.',
'Excellentes compétences en communication et en résolution de problèmes.'
      ],
      Responsabilites:[
'Concevoir et développer une interface utilisateur réactive en utilisant Angular pour la gestion des équipes et des tournois d\'échecs.',
'Créer des fonctionnalités back-end robustes en utilisant Spring Boot pour gérer les données des équipes, des joueurs et des matchs.',
'Implémenter des fonctionnalités de suivi en temps réel des parties d\'échecs, y compris la gestion des temps, les notations, etc.',
'Collaborer avec les équipes de conception pour créer une expérience utilisateur exceptionnelle.',
'Assurer des tests approfondis pour garantir la qualité et la stabilité de l\'application.',
'Participer à la documentation technique du projet.'
      ],
      datePUB:'10-06-2023'

    }
  ]
  showInfo: boolean[] = Array(this.offres.length).fill(false);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRowClick(index: number) {
    const dataToSend = {
      offre: this.offres[index],
    };
    localStorage.setItem('offre', JSON.stringify(this.offres[index]));

    this.router.navigate(['/detail', index]);
  }

}

export interface Offre {
  id: number;
  Titre: string;
  TypeOffre: TypeOffreEnum;
  Entreprise: string;
  descriptif: string;
  Responsabilites?: string[];
  Qualifications?:string[];
  NbreExperience?: number;
  datePUB?: string
}
enum TypeOffreEnum {
  STAGE = 'Stage',
  EMPLOI = 'Emploi',
}
