import React from "react";

import theme from "../theme";
import { withStyles, Typography, Card } from "@material-ui/core";
import AppBarCusto from "../AppBarCusto";

const HtmlEval = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarCusto title="HTML/CSS évaluation" />
      <div className={classes.content}>
        <Card className={classes.evalCard}>
          <Typography variant="body1" gutterBottom>
            <p>Pour valider ce module vous devez construire un site vitrine qui permettra présenter instaZz. Voici les points qui seront regarder</p>
            <h3>Technique</h3>
            <ul>
              <li>La structure du site est propre</li>
              <li>Le code est bien segmenté et maintenable</li>
            </ul>
            <h3>Respect du besoin</h3>
            <ul>
              <li>Le site est claire et agréable</li>
              <li>Les différentes informations nécessaires sont présentes</li>
            </ul>
            <h3>Bonus</h3>
            <ul>
              <li>Le SEO est bon</li>
              <li>Les performances sont dans les normes attendu pour un site de ce type</li>
              <li>Le site est responsive</li>
            </ul>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(HtmlEval);
