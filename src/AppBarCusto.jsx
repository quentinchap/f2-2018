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
        <Button color="inherit" className={classes.noDecoration}>
          <Icon className={classes.icon}>
            <svg
              class="j70"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
              color="white"
            >
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
          </Icon>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(theme.matUI)(AppBarCusto);