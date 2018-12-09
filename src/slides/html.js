// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text } from "spectacle";
import theme from "../theme";
import htmlExtract from "../assets/img/html.png";
import htmlPdfExtract from "../assets/pdf/html.pdf";
import videoHtml from "../assets/img/mediaHtml.png";
import formHtml from "../assets/img/formHtml.png";
import tabHtml from "../assets/img/tabHtml.png";
import css1 from "../assets/img/css1.png";
import css2 from "../assets/img/css2.png";
import css3 from "../assets/img/css3.png";
import css4 from "../assets/img/css4.png";
import css5 from "../assets/img/css5.png";
import css6 from "../assets/img/css6.png";
import css7 from "../assets/img/css7.png";
import { withStyles } from "@material-ui/core";
import "./animation.css";

const HtmlPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Html
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Construire une page web static.
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <p className={classes.leftAlign}>
        <strong> HTML</strong> > Définition de la structure de vos pages.
        Langage basé sur des balises permettant de structurer vos informations.
      </p>
      <p className={classes.leftAlign}>
        <strong>CSS</strong> > Syntaxe se rapprochant du json ayant pour but de
        fixer les propriètés esthétiques de la page.
      </p>
      <p className={classes.leftAlign}>
        Les navigateurs interprêtes ces deux types d'éléments qu'ils soient
        écrits de manière static ou générés via une application.
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        l'html
      </Heading>
      <img src={htmlExtract} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Les Balises
      </Heading>
      <p className={classes.leftAlign}>
        <strong>&lt;nom-de-la-balise>...&lt;/nom-de-la-balise></strong> balise
        contenant de l'information.
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;nom-de-la-balise /></strong> balise vide (autofermante)
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;head>...&lt;/head></strong> informations liées à la page,
        titre, scripts, css, info diverses.
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;body>...&lt;/body></strong> Les éléments affichés.
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les balises de textes
      </Heading>
      <p className={classes.leftAlign}>
        <strong>&lt;p>texte&lt;/p></strong> Paragraphe
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;hx>texte&lt;/hx></strong> Titre le x étant à remplacer par
        un entier {"<="} 6 et > 0.
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;em>texte&lt;/em></strong> italique
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;strong>texte&lt;/strong></strong> mettre en gras
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;ul>&lt;li>texte&lt;/li>&lt;/ul></strong> liste
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les balises de média
      </Heading>
      <img src={videoHtml} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les balises de structure
      </Heading>
      <p className={classes.leftAlign}>
        <strong>&lt;div>Content&lt;/div></strong> Block
      </p>
      <p className={classes.leftAlign}>
        <strong>&lt;span>Content&lt;/span></strong> Inline block
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Les tableaux
      </Heading>
      <img src={tabHtml} />
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les formulaires
      </Heading>
      <img src={formHtml} />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Css
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Donnez du style à vos pages
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <img src={css1} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Insérer du css
      </Heading>
      <img src={css2} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Définir des styles
      </Heading>
      <p>
        Il y a trois type d'éléments (sélecteurs) pouvant être soumis à des
        règle css.
      </p>
      <img src={css3} alt="html" />
      <img src={css4} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Combinaison de sélecteurs
      </Heading>
      <img src={css5} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Le texte
      </Heading>
      <img src={css6} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Le positionnement
      </Heading>
      <p>
        Deux type de "boîte" les inline (span, a, etc.) les block (p, div, etc.)
      </p>
      <p>Parfois difficile à organiser les une par rapport aux autres.</p>
      <p>
        <strong>Mots clés</strong>: positionnement, float, flex-box, grid, etc.
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Animation
      </Heading>
      <div class="anim" />
      <img src={css7} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Ressources supplémentaires
      </Heading>
      <ul className={classes.leftAlign}>
        <li>
          <a href="https://www.w3schools.com/default.asp"> Documentation W3C </a>
        </li>
        <li>
          <a href="https://validator.w3.org/"> Validateur Html W3C </a>
        </li>
        <li>
          <a href="https://jigsaw.w3.org/css-validator/"> Validateur CSS W3C </a>
        </li>
        <li>
          <a href={htmlPdfExtract}> cheatsheet html</a>
        </li>
        <li>
          <a href="https://htmlcheatsheet.com/css/"> cheatsheet CSS3</a>
        </li>
        <li>
          <a href="https://websitesetup.org/css3-cheat-sheet/">
            {" "}
            cheatsheet CSS3
          </a>
        </li>
        <li>
          <a href="https://julien.usson.me/zz2-f5-ci/#/"> Cours des F5 </a>
        </li>
        <li>
          <a href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published">
            Openclassroms
          </a>
        </li>
      </ul>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(HtmlPrez);
