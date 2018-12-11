import React from "react";

import theme from "../theme";
import { withStyles, Typography, Card } from "@material-ui/core";
import AppBarCusto from "../AppBarCusto";

const TPEval = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarCusto title="instaZz" />
      <div className={classes.content}>
        <Card className={classes.evalCard}>
          <Typography variant="body1" gutterBottom>
            <p>
              Le but de ce tp est de réaliser un genre d'Instagram. Une approche
              incrémentale est conseillée.
            </p>
            <h1>Critères d'évaluation</h1>
            <h3>Couverture du besoin</h3>
            <ul>
              <li>
                Le projet est fonctionnel. Privilégiez la qualité aux
                fonctionnalités - 80%
              </li>
              <li>Les méthodes et stratégies d'élicitation du besoin - 20%</li>
            </ul>
            <h3>Maitrise technique</h3>
            <ul>
              <li>Votre code est hébergé sur github - 20%</li>
              <li>
                Une bonne stratégie de gestion de vos repo est mise en place -
                30%
              </li>
              <li>Le code est maintenable et compréhensible - 30%</li>
              <li>
                Vous savez choisir les bons outils pour travailler efficacement -
                20%
              </li>
            </ul>
            <h3>Bonus</h3>
            <ul>
              <li>Les tâches répétitives sont automatisées - 20%</li>
              <li>Vous êtes prédictif dans votre avancement - 20%</li>
              <li>
                Vous maitrisez au delà des attentes le développement front - 20%
              </li>
              <li>
                Vous maitrisez au delà des attentes le développement back - 20%
              </li>
              <li>Présence physique et mentale aux TP/TD - 20%</li>
            </ul>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(TPEval);
