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
              incrémentale est conseiller.
            </p>
            <h1>Critères d'évaluation</h1>
            <h3>Couverture du besoin</h3>
            <ul>
              <li>
                Le projet est fonctionnel. Privilégiez la qualité au
                fonctionnalitées - 80%
              </li>
              <li>Les méthodes et stratégies d'élicitation du besoin - 20%</li>
            </ul>
            <h3>Maitrise technique</h3>
            <ul>
              <li>Votre code est hébergé sur github - 20%</li>
              <li>
                Une bonne stratégie de gestion de vos repo est mis en place -
                30%
              </li>
              <li>Le code est maintenable et compréhensible - 30%</li>
              <li>
                Vous savez choisir les bon outils pour travailler efficacement -
                20%
              </li>
            </ul>
            <h3>Bonus</h3>
            <ul>
              <li>Les tâches répétitives sont automatisé - 20%</li>
              <li>Vous êtes prédictif dans votre avancement - 20%</li>
              <li>
                Vous maitrisez au delà des attentes le developpement front - 20%
              </li>
              <li>
                Vous maitrisez au delà des attentes le developpement back - 20%
              </li>
              <li>Présence physique et mentale aux TP/TD - 20%</li>
            </ul>
            <h1>Ce que j'aime</h1>
            <ul>
              <li>La transparence</li>
              <li>L'esprit d'initiative</li>
              <li>La bonne ambiance</li>
              <li>Apprendre</li>
            </ul>
            <h1>Ce que je n'aime</h1>
            <ul>
              <li>Les perturbations génant les autres</li>
              <li>La tricherie/mauvaise fois</li>
            </ul>
            <h1>Mot de la fin</h1>
            <ul>
              <li>
                Je sais ce qu'est un smartphone et dans une trousse ou sur les
                genoux ça se voit
              </li>
              <li>
                Moi aussi j'ai travaillé toute la journée et je préférerais être
                tranquille à cette heure là. Faisont en sorte de rendre ce
                créneau le moins pénible possible pour tous.
              </li>
              <li>Un petit sondage est a votre disposition. Il est anonyme alors utilisez le!</li>
            </ul>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(TPEval);
