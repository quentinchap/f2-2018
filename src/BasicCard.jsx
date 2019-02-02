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
  evaluation,
  contain,
  shop
}) =>
  active ? (
    <Card className={classes.card}>
      <Link to={course || evaluation} className={classes.noDecoration}>
        <CardActionArea>
          <CardMedia
            className={contain ? classes.mediaContain : classes.media}
            image={icon}
            title={title}
          />
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
        {shop
          ? shop.map(s => (
              <a href={s.uri} className={classes.noDecoration}>
                <Button size="small" color="primary">
                  {s.label}
                </Button>
              </a>
            ))
          : ""}
      </CardActions>
    </Card>
  ) : (
    ""
  );

export default BasicCard;
