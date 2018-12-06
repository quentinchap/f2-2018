// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import theme from "../theme";
import gitProcess from "../assets/img/git-process.png";
import gitBranch from "../assets/img/git-branch.png";
import gitFlow from "../assets/img/gitflow.png";
import htmlExtract from "../assets/img/html.png";
import htmlPdfExtract from "../assets/pdf/html.pdf";

export default class HtmlPrez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Html / Css
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Construire une page web static.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <p>
            <strong> HTML</strong> > Définition de la structure de vos pages.
            Langage basé sur des balises permettant de structurer vos
            informations.
          </p>
          <p>
            <strong>CSS</strong> > Syntaxe se rapprochant du json ayant pour but
            de fixer les propriètés esthétiques de la page.
          </p>
          <p>
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
          <p>
            <strong>&lt;nom-de-la-balise>...&lt;/nom-de-la-balise></strong>{" "}
            balise contenant de l'information.
          </p>
          <p>
            <strong>&lt;nom-de-la-balise /></strong> balise vide (autofermante)
          </p>
          <p>
            <strong>&lt;head>...&lt;/head></strong> informations liées à la
            page, titre, scripts, css, info diverses.
          </p>
          <p>
            <strong>&lt;body>...&lt;/body></strong> Les éléments affichés.
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les balises de textes
          </Heading>
          <p>
            <strong>&lt;p>texte&lt;/p></strong> :
            Paragraphe
          </p>
          <p>
            <strong>&lt;hx>texte&lt;/hx></strong> :
            Les titre le x étant à remplacer par un entier {'<='} 6 et > 0 . Plus le chiffre est petit plus le titre est important
          </p>
          <p>
            <strong>&lt;em>texte&lt;/em></strong> :
            italique
          </p>
          <p>
            <strong>&lt;strong>texte&lt;/strong></strong> :
            mettre en gras
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les balises de média
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les balises de structure
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les formulaires
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          Bonus: cheatsheet
            Bonus: GitFlow
          </Heading>
          <img src={gitFlow} />
        </Slide>
      </Deck>
    );
  }
}
//https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published