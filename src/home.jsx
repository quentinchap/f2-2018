import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import theme from "./theme";
import { withStyles } from "@material-ui/core";
import gitInsta from "./assets/img/insta.png";
import AppBarCusto from "./AppBarCusto";
import BasicCard from "./BasicCard";
import { coursesTools, coursesFront, coursesBack, livres } from "./plan";

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBarCusto title="F2 - 2018" />

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
            key={c.title}
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
            contain={c.contain}
          />
        ))}
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le front
          </Typography>
        </div>
        {coursesFront.map(c => (
          <BasicCard
            key={c.title}
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
            contain={c.contain}
          />
        ))}

        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le back
          </Typography>
        </div>
        {coursesBack.map(c => (
          <BasicCard
            key={c.title}
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
            contain={c.contain}
          />
        ))}

        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Bibliographie
          </Typography>
        </div>
        {livres.map(c => (
          <BasicCard
            key={c.title}
            active={c.active}
            classes={classes}
            title={c.title}
            description={c.description}
            icon={c.icon}
            course={c.course}
            evaluation={c.evaluation}
            contain={c.contain}
            shop={c.shop}
          />
        ))}
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(Home);
