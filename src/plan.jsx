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
import reactBook from "./assets/img/books/react.gif";

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
    active: true,
    title: "Startégies et méthodes de tests",
    description: "Tester c'est douter, vraiment?",
    icon: testIcon,
    course: "/tests"
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
    title: "Se connecter à une api sécurisée",
    description: "Comment consommer des Apis sécurisées via votre client react.",
    icon: securityIcon,
    course: "/auth-front",
    evaluation: ""
  },
  {
    active: true,
    title: "Tests ReactJS",
    description: "Mettre en place des tests React",
    icon: testIcon,
    course: "/tests-react"
    // evaluation: "/eval/git"
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
    description: "Contrôle d'accés à base de token JWT",
    icon: securityIcon,
    course: "/auth-back",
    evaluation: ""
  },
  {
    active: false,
    title: "Tests NodeJs",
    description: "Mettre en place des tests NodeJS",
    icon: testIcon,
    course: "/tests-node"
    // evaluation: "/eval/git"
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
      },
      {
        label: "ebook (édition 1)",
        uri:
          "https://pepa.holla.cz/wp-content/uploads/2016/12/Learning-Node.pdf"
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
    active: true,
    title: "MongoDB: The Definitive Guide, 3rd Edition",
    description: "O'Reilly",
    contain: true,
    icon: reactBook,
    shop: [
      { label: "Amazon", uri: "https://amzn.to/2T3MlZd" },
      {
        label: "o'reilly",
        uri: "http://shop.oreilly.com/product/0636920049579.do"
      },
      {
        label: "ebook (édition 1)",
        uri:
          "http://www.r-5.org/files/books/computers/languages/escss/w-tkt/react/Alex_Banks_and_Eve_Porcello-Learning_React-EN.pdf"
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
