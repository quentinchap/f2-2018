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
import gitInsta from "./assets/img/insta.png";
import AppBarCusto from "./AppBarCusto";

const Home = props => {
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
        <Link to="eval/git" className={classes.noDecoration}>
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
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Git
              </Typography>
              <Typography component="p">Initiation à git</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              <Link to="eval/git">Les attentes</Link>
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                UX / UI
              </Typography>
              <Typography component="p">Intégration continue</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                UX / UI
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le front
          </Typography>
        </div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Html / CSS
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ReactJs
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Le back
          </Typography>
        </div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Ma première API
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Technique d'authentification
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={gitIcon} title="Git" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Utilisation d'une BDD
              </Typography>
              <Typography component="p">
                Découvrez ce qu'est l'UX et l'UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/git">Voir le cours</Link>
            </Button>
            <Button size="small" color="primary" to="/git-eval">
              Les attentes
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(theme.matUI)(Home);
