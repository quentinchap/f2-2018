import React from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Card
} from "@material-ui/core";

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
      <Link to={course || evaluation} className={classes.noDecoration}>
        <CardActionArea>
          <CardMedia className={classes.media} image={icon} title="Git" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {course ? (
          <Link to={course} className={classes.noDecoration}>
            <Button size="small" color="primary">
              Voir le cours
            </Button>
          </Link>
        ) : (
          ""
        )}
        {evaluation ? (
          <Link to={evaluation} className={classes.noDecoration}>
            <Button size="small" color="primary">
              Les attentes
            </Button>
          </Link>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  ) : (
    ""
  );

export default BasicCard;
