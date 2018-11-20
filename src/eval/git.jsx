import React from "react";

import theme from "../theme";
import { withStyles, Typography, Card } from "@material-ui/core";
import AppBarCusto from "../AppBarCusto";

const GitEval = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarCusto title="Git évaluation" />
      <div className={classes.content}>
        <Card className={classes.evalCard}>
          <Typography variant="body1" gutterBottom>
            <p>Pour valider ce module vous devez</p>
            <ul>
              <li>Créer un repo pour votre application front</li>
              <li>Créer un repo pour votre application back</li>
              <li>Utiliser ces repos tout au long du projet fil rouge</li>
              <li>Bonus: Suivre le gitflow que nous avons étudié</li>
            </ul>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(GitEval);
