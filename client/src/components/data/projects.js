import AUSGif from 'src/assets/portfolio/aus.gif';
import Pic from 'src/assets/portfolio/AUS_pres.png';
import PortfolioPic from 'src/assets/portfolio/portfolio.png';
import PGif from 'src/assets/portfolio/portfolio.gif';

const projects = [
  {
    gif: AUSGif,
    title: 'Adopte une série',
    url: 'http://209.182.238.244',
    summary: ['Adopte Une Série est un projet responsive développé from scrach en un mois par une équipe de 4 développeurs (2 front et 2 back) en total remote, dans le cadre d\'un projet de fin de formation.',
      'Dû à la variété considérable de séries que peuvent nous proposer les divers studios de productions, le simple critère de tri par un seul et unique "genre" qu\'on retrouve sur les plateformes de visionnages est beaucoup trop imprécis et l\'utilisateur passe plus de temps à chercher du contenus qu\'à le visionner.',
      'Cette application web responsive suggère des séries en fonction de différents critères choisis par les utilisateurs (ex : temps moyen d\'un épisode, studio de production, notation...etc.). L\'objectif est de réduire le temps de recherche de nouvelles séries afin que les utilisateurs passent au visionnage le plus rapidement possible. ',
      'L\'utilisateur peut également avoir la possibilité de se créer un compte et d\'ajouter ses séries préférées en favoris. ',
      'Une V2 est en cours de production où les utilisateurs pourront avoir accès à un suivi de visionnage de leurs séries, ainsi qu\'à d\'autres critères de recherches. ',
    ],
    git: 'https://github.com/FarahBou/Projet_Adopte_Une_Serie_Front_End',
    technos: [
      'React Redux',
      'Symfony',
    ],
    roles: [
      'Product owner',
      'Lead dev front REACT',
    ],
    picture: Pic,
  },
  {
    gif: PGif,
    title: 'Ce Portfolio',
    url: '',
    summary: [
      'Ce portfolio présente les projets sur lesquels j\'ai travaillé depuis la fin de ma formation.',
      'J\'ai travaillé sur ce projet de manière discontinue du mois de mai à juillet 2020.',
    ],
    git: 'https://github.com/FarahBou/Portfolio',
    technos: [
      'React Redux',
      'Node.js',
    ],
    roles: [
      'Product owner',
    ],
    picture: PortfolioPic,
  },
];

export default projects;
