import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import theme from "./theme";
import { withStyles } from "@material-ui/core";
import gitIcon from "./assets/img/git.png";
import htmlIcon from "./assets/img/html.png";
import webIcon from "./assets/img/web.jpg";
import uxIcon from "./assets/img/ux.jpg";
import ciIcon from "./assets/img/ci.jpg";
import gitInsta from "./assets/img/insta.png";
import AppBarCusto from "./AppBarCusto";

const BasicCard = ({
  active,
  classes,
  title,
  description,
  icon,
  course,
  evaluation
}) =>
  active ? (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={icon} title="Git" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {course ? (
          <Button size="small" color="primary">
            <Link to={course}>Voir le cours</Link>
          </Button>
        ) : (
          ""
        )}
        {evaluation ? (
          <Button size="small" color="primary">
            <Link to={evaluation}>Les attentes</Link>
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  ) : (
    ""
  );


const Home = props => {
  const coursesTools = [
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
      course: "/git",
      evaluation: "/eval/git"
    }
  ];
  const coursesFront = [
    {
      active: true,
      title: "ReactJs",
      description: "",
      icon: webIcon,
      course: "",
      evaluation: ""
    },
    {
      active: true,
      title: "Html / CSS",
      description: "Comment décrire une page web static simplement",
      icon: htmlIcon,
      course: "/html",
      evaluation: "/eval/html-eval"
    }
  ];
  const coursesBack = [
    {
      active: true,
      title: " Ma première API",
      description: "",
      icon: webIcon,
      course: "",
      evaluation: ""
    },
    {
      active: true,
      title: "Technique d'authentification",
      description: "Comment décrire une page web static simplement",
      icon: htmlIcon,
      course: "/html",
      evaluation: "/eval/html-eval"
    },
    {
      active: true,
      title: "Utilisation d'une BDD",
      description: "Comment décrire une page web static simplement",
      icon: htmlIcon,
      course: "/html",
      evaluation: "/eval/html-eval"
    }
  ];

  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarCusto title="F3 - 2018" />

      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Fil rouge
          </Typography>
        </div>
        <Link to="eval/tp" className={classes.noDecoration}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={gitInsta}
                title="instaZz"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  InstaZz
                </Typography>
                <Typography component="p">
                  Réalisation d'un instagram like
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Outils & concepts
          </Typography>
        </div>
        {coursesTools.map(c => (
          <BasicCard
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
          />
        ))}
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le front
          </Typography>
        </div>
        {coursesFront.map(c => (
          <BasicCard
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
          />
        ))}

        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le back
          </Typography>
        </div>
        {coursesBack.map(c => (
          <BasicCard
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
          />
        ))}
        </div>
    </div>
  );
};

export default withStyles(theme.matUI)(Home);
