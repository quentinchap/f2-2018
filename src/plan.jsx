import mongoBack from "./assets/img/mongo/back.jpg";
import gitIcon from "./assets/img/git.png";
import htmlIcon from "./assets/img/html.png";
import webIcon from "./assets/img/web.jpg";
import uxIcon from "./assets/img/ux.jpg";
import ciIcon from "./assets/img/ci.jpg";
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
    title: "BDD NoSql - part 1",
    description: "NoSQL, MongoDB & Mongoose",
    icon: mongoBack,
    course: "/mongo",
    evaluation: ""
  },
  {
    active: true,
    title: "BDD NoSql - part 2",
    description: "Technologies et outils",
    icon: mongoBack,
    course: "/mongo2",
    evaluation: ""
  },
  {
    active: false,
    title: "Technique d'authentification",
    description: "Comment décrire une page web static simplement",
    icon: htmlIcon,
    course: "/html",
    evaluation: "/eval/html-eval"
  }
];
