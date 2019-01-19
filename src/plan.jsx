import mongoBack from "./assets/img/mongo/back.jpg";
import gitIcon from "./assets/img/git.png";
import htmlIcon from "./assets/img/html.png";
import webIcon from "./assets/img/web.jpg";
import uxIcon from "./assets/img/ux.jpg";
import ciIcon from "./assets/img/ci.jpg";
import testIcon from "./assets/img/test.jpeg";
import securityIcon from "./assets/img/auth/security.jpeg";
import npmIcon from "./assets/img/npm/npm.png";
import apiCover from "./assets/img/apiCover.jpg";
import nodeJsBook from "./assets/img/books/nodeJs.gif";
import mongoBook from "./assets/img/books/mongo.gif";

export const coursesTools = [
  {
    active: true,
    title: "Les bases du web",
    description: "Les concept de bases à maitriser",
    icon: webIcon,
    course: "/base",
    evaluation: ""
  },
  {
    active: true,
    title: "Git",
    contain: true,
    description: "Initiation à git",
    icon: gitIcon,
    course: "/git",
    evaluation: "/eval/git"
  },

  {
    active: true,
    title: "RESTful",
    description: "Concepts de base",
    icon: apiCover,
    course: "/apiRest",
    evaluation: ""
  },
  {
    active: false,
    title: "Integration continue",
    description: "Automatiser et systèmatiser les tâches pénibless",
    icon: ciIcon,
    course: "/git",
    evaluation: "/eval/git"
  },
  {
    active: true,
    title: "UX / UI",
    description:
      "Ce n'est pas l'idée qui compte mais comment vous la présentez.",
    icon: uxIcon,
    course: "/ux"
    // evaluation: "/eval/git"
  },
  {
    active: true,
    title: "NPM",
    contain: true,
    description: "Maîtrisez vos dépendances",
    icon: npmIcon,
    course: "/npm"
  },
  {
    active: true,
    title: "Techniques d'authentification",
    description: "Contrôler l'accés de vos APIs",
    icon: securityIcon,
    course: "/auth",
    evaluation: ""
  },
  {
    active: false,
    title: "La théorie des tests",
    description: "Un bon test passe par une bonne stratégie de test",
    icon: testIcon,
    course: "/ux"
    // evaluation: "/eval/git"
  }
];
export const coursesFront = [
  {
    active: true,
    title: "Html / CSS",
    description: "Comment décrire une page web static simplement",
    icon: htmlIcon,
    course: "/html",
    evaluation: "/eval/html"
  },
  {
    active: true,
    title: "ReactJs",
    description: "",
    icon: webIcon,
    course: "/react1",
    evaluation: ""
  },
  {
    active: true,
    title: "ReactJs - part 2",
    description: "L'asynchrone",
    icon: webIcon,
    course: "/react-async",
    evaluation: ""
  },
  {
    active: true,
    title: "Se connecter à une api sécuriser",
    description:
      "Comment consommer des Apis sécuriser via votre client react.",
    icon: securityIcon,
    course: "/auth",
    evaluation: ""
  }
];
export const coursesBack = [
  {
    active: true,
    title: " Ma première API",
    description: "",
    icon: webIcon,
    course: "/node",
    evaluation: ""
  },
  {
    active: true,
    title: "BDD NoSql",
    description: "NoSQL, MongoDB & Mongoose",
    icon: mongoBack,
    course: "/mongo",
    evaluation: ""
  },
  {
    active: false,
    title: "BDD NoSql - part 2",
    description: "Technologies et outils",
    icon: mongoBack,
    course: "/mongo2",
    evaluation: ""
  },
  {
    active: true,
    title: "Sécurisez vos routes",
    description:
      "Mettre en place une stratégie adapter au niveau de vos routes express",
    icon: securityIcon,
    course: "/auth",
    evaluation: ""
  },
  {
    active: false,
    title: "Test API",
    description: "Comment test ces APIs",
    icon: testIcon,
    course: "/test-api",
    evaluation: ""
  }
];

export const livres = [
  {
    active: true,
    title: "Learning Node: Moving to the Server-Side ",
    description: "O'Reilly",
    icon: nodeJsBook,
    contain: true,
    shop: [
      { label: "Amazon", uri: "https://amzn.to/2T2Bajj" },
      {
        label: "o'reilly",
        uri: "http://shop.oreilly.com/product/0636920046936.do"
      }
    ],
    evaluation: ""
  },
  {
    active: true,
    title: "MongoDB: The Definitive Guide, 3rd Edition",
    description: "O'Reilly",
    contain: true,
    icon: mongoBook,
    shop: [
      { label: "Amazon", uri: "https://amzn.to/2HnZVVQ" },
      {
        label: "o'reilly",
        uri: "http://shop.oreilly.com/product/0636920049531.do"
      },
      {
        label: "ebook (édition 2)",
        uri:
          "http://usuaris.tinet.cat/bertolin/pdfs/mongodb_%20the%20definitive%20guide%20-%20kristina%20chodorow_1401.pdf"
      }
    ],
    evaluation: ""
  },
  {
    active: false,
    title: "BDD NoSql - part 2",
    description: "Technologies et outils",
    icon: mongoBook,
    course: "/mongo2",
    evaluation: ""
  },
  {
    active: false,
    title: "Test API",
    description: "Comment test ces APIs",
    icon: testIcon,
    course: "/test-api",
    evaluation: ""
  },
  {
    active: false,
    title: "Techniques d'authentification",
    description: "Contrôler l'accés de vos APIs",
    icon: securityIcon,
    course: "/auth",
    evaluation: ""
  }
];
