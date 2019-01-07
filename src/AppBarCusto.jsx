import React from "react";
import { Link } from "react-router-dom";

import {
  withStyles,
  Typography,
  Toolbar,
  AppBar,
  Button,
  Icon
} from "@material-ui/core";
import theme from "./theme";

const AppBarCusto = props => {
  const { classes, title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Programmation Web - {title}
        </Typography>
        <Button color="inherit" className={classes.noDecoration}>
          <Link to="/">
            <Icon className={classes.icon}>home</Icon>
          </Link>
        </Button>
        <a href="https://goo.gl/forms/AMKLtrr03F68ZIcr2">
          <Button color="inherit" className={classes.noDecoration}>
            <Icon className={classes.icon}>link</Icon>
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(theme.matUI)(AppBarCusto);
