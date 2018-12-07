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
import htmlExtract from "../assets/img/html.png";
import htmlPdfExtract from "../assets/pdf/html.pdf";
import videoHtml from "../assets/img/mediaHtml.png";
import formHtml from "../assets/img/formHtml.png";
import tabHtml from "../assets/img/tabHtml.png";

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
            Html
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
            <strong>&lt;p>texte&lt;/p></strong> : Paragraphe
          </p>
          <p>
            <strong>&lt;hx>texte&lt;/hx></strong> : Titre le x étant à remplacer
            par un entier {"<="} 6 et > 0.
          </p>
          <p>
            <strong>&lt;em>texte&lt;/em></strong> : italique
          </p>
          <p>
            <strong>&lt;strong>texte&lt;/strong></strong> : mettre en gras
          </p>
          <p>
            <strong>&lt;ul>&lt;li>texte&lt;/li>&lt;/ul></strong> : liste
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
          <p>
            <strong>&lt;div>Content&lt;/div></strong> : Block
          </p>
          <p>
            <strong>&lt;span>Content&lt;/span></strong> : Inline block
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

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Bonus
          </Heading>
          <ul>
            <li>
              <a href={htmlPdfExtract}> cheatsheet</a>
            </li>
            <li>
              <a href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published">
                Openclassroms
              </a>
            </li>
          </ul>
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
      </Deck>
    );
  }
}
//https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published
