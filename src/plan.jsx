import mongoBack from "./assets/img/mongo/back.jpg";
import gitIcon from "./assets/img/git.png";
import htmlIcon from "./assets/img/html.png";
import webIcon from "./assets/img/web.jpg";
import uxIcon from "./assets/img/ux.jpg";
import ciIcon from "./assets/img/ci.jpg";
import testIcon from "./assets/img/test.jpeg";
import securityIcon from "./assets/img/auth/security.jpeg";
import apiCover from "./assets/img/apiCover.jpg";

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
    active: false,
    title: "La théorie des tests",
    description:
      "Un bon test passe par une bonne stratégie de test",
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
    active: false,
    title: "Test API",
    description: "Comment test ces APIs",
    icon: testIcon,
    course: "/test-api",
    evaluation: ""
  },
  {
    active: true,
    title: "Techniques d'authentification",
    description: "Contrôler l'accés de vos APIs",
    icon: securityIcon,
    course: "/auth",
    evaluation: ""
  }
];
