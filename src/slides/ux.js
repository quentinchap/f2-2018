// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import BetS from "../assets/pdf/bets.pdf";

export default class UxPrez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UX / UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Qu'est ce que c'est? Pourquoi? Comment?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            UX vs UI
          </Heading>
          <p>
            <strong>UX</strong> L'expérience utilisateur se concentre sur
            l'usabilité des systèmes. Son but est de promouvoir un système
            adapté à l'utilisateur. C'est le croisement entre le "design", la
            stratégie et la technologie.
          </p>
          <p>
            <strong>UI</strong> Se concentre sur l'aspect. Comment rendre
            "jolie" notre app.
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            5 raisons d'investir.
          </Heading>
          <List>
            <ListItem>
              <strong>Coûts</strong> x100 après lancement.
            </ListItem>
            <ListItem>
              <strong>Conversion</strong> x4 sur le taux de conversion
            </ListItem>
            <ListItem>
              <strong>Fidélité</strong> + 94% d'utilisateurs fidèles
            </ListItem>
            <ListItem>
              <strong>Time to market</strong> 50% plus rapide
            </ListItem>
            <ListItem>
              <strong>ROI</strong> Impact direct sur les volumes de ventes.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Design thinking
          </Heading>
          <List>
            <ListItem>
              <strong>Comprendre</strong> les utilisateurs
            </ListItem>
            <ListItem>
              <strong>Définir</strong> les besoins, les désirs
            </ListItem>
            <ListItem>
              <strong>Maquetter</strong>, échanger autour de "plans"
            </ListItem>
            <ListItem>
              <strong>Prototyper</strong> le produit
            </ListItem>
            <ListItem>
              <strong>Tester</strong> avec les utilisateurs
            </ListItem>
          </List>
          Iterate
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Le hook canvas
          </Heading>
          <List>
            <ListItem>
              <strong>Déclencheur</strong> Interne ou externe
            </ListItem>
            <ListItem>
              <strong>Action</strong> Doit être le plus simple possible
            </ListItem>
            <ListItem>
              <strong>Récompense</strong> Doit être variable
            </ListItem>
            <ListItem>
              <strong>Investissement</strong> Création de valeur et recherche du
              prochain déclencheur
            </ListItem>
            <ListItem>
              <strong>loop</strong>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Ce centrer sur l'utilisateur
          </Heading>
          <List>
            <ListItem>Observer les autres</ListItem>
            <ListItem>Cibler une audience</ListItem>
            <ListItem>Produit simple</ListItem>
            <ListItem>Eviter les tools box exhaustives</ListItem>
            <ListItem>Réduire la charge mentale</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Le persona
          </Heading>
          <List>
            <ListItem>Définir des modèles d'utilisateurs</ListItem>
            <ListItem>Définition de cas d'usages</ListItem>
            <ListItem>Cibler des caractéristiques</ListItem>
            <ListItem>Se projeter à la place des utilisateurs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            L'affordance
          </Heading>
          <p>Capacité à comprendre le fonctionnement et le but d'un système.</p>
          <List>
            <ListItem>Trouver un équilibre entre innovation et acquis</ListItem>
            <ListItem>Equilibre entre simplicité et autosuffisance</ListItem>
          </List>
          <p>
            Un manque d'affrodance peut-être normal dans des applications
            métiers compliquées
          </p>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            LOI DE HICK et loi de Fitts
          </Heading>
          <List>
            <ListItem>
              <strong>Fitts</strong> Temps de pointage
              <br />T = k log2(D/S + 0.5)
              <br /> k: constante, D: distance, S: Surface
            </ListItem>
            <ListItem>
              <strong>Hick</strong> Temps de prise de décision
              <br />T = b log2(n+1)
              <br /> n: nombre de choix, b: paramètre empirique
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les usages en 2018
          </Heading>
          <List>
            <ListItem>Multi-device</ListItem>
            <ListItem>Attention diffuse</ListItem>
            <ListItem>Usage temps réél</ListItem>
            <ListItem>Utilisation de l'appareil photo, gps, etc.</ListItem>
            <ListItem>Précision du clic</ListItem>
            <ListItem>Le bon contenu au bon moment</ListItem>
            <ListItem>Call to action</ListItem>
            <ListItem>Mobile first</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            CRITÈRES DE BASTIEN ET SCAPIN (1993)
          </Heading>
          <List>
            <ListItem>Guidage</ListItem>
            <ListItem>Charge de Travail</ListItem>
            <ListItem>Adaptabilité</ListItem>
            <ListItem>Gestion des Erreurs</ListItem>
            <ListItem>Homogénéité / Cohérence</ListItem>
            <ListItem>Signifiance des Codes et Dénominations</ListItem>
            <ListItem>Compatibilité</ListItem>
          </List>
          <a href={BetS}>Rapport de l'INRIA</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps>
            Critère 1 - Guidage
          </Heading>
          <p>
            Stratégies et moyens en place pour assister l'utilisateur et
            explicité l'influence de ses actions
          </p>
          <List>
            <ListItem>Incitation</ListItem>
            <ListItem>Groupement</ListItem>
            <ListItem>Réactivité</ListItem>
            <ListItem>Clareté</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Critère 2 - Charge de travail
          </Heading>
          <p>Rationnaliser l'information pour reduire la charge mentale.</p>
          <List>
            <ListItem>Brièveté - Concision, Actions minimales</ListItem>
            <ListItem>Densité</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps>
            Critère 3 - Contrôle explicite
          </Heading>
          <p>Donner à l'utilisateur le sentiment de contrôle sur le système</p>
          <List>
            <ListItem>
              <strong>Actions explicites</strong> - Prédictabilité des modes de
              contrôles
            </ListItem>
            <ListItem>
              <strong>Contrôle</strong> - Interruption de traitement, étapes
              claires, etc.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Critère 4 - Adaptabilité
          </Heading>
          <p>
            Garder en tête que chaque utilisateur et context d'utilisation sont
            différents.
          </p>
          <List>
            <ListItem>Flexibilité</ListItem>
            <ListItem>Ux adaptée</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} caps>
            Critère 5 - Gestion des Erreurs
          </Heading>
          <List>
            <ListItem>
              <strong>Protection</strong>
            </ListItem>
            <ListItem>
              <strong>Qualité</strong>
            </ListItem>
            <ListItem>
              <strong>Correction</strong>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les autres critères
          </Heading>
          <List>
            <ListItem>
              <strong>6 Homogénéité</strong> <br /> - charge mentale +
              prédictabilité
            </ListItem>
            <ListItem>
              <strong>7 Codes et Dénominations</strong> <br /> + affordance -
              distance sémantique - d'apprentissage
            </ListItem>
            <ListItem>
              <strong>8 Compatibilité </strong> <br /> - écart réalité et
              solution
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <iframe
            title="ux"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LVLoc6FrLi0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Exemple
          </Heading>
          <a href="https://www.patreon.com/">https://www.patreon.com/</a>
          <List>
            <ListItem>
              <a href="https://dribbble.com/">dribbble.com</a>
            </ListItem>
            <ListItem>
              <a href="https://uimovement.com/">uimovement</a>
            </ListItem>
            <ListItem>
              <a href="https://www.uplabs.com/">uplabs</a>
            </ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Sources
          </Heading>
          <a href="https://www.invisionapp.com/">inVision</a>
          <br />
          <a href="https://www.usabilis.com">usabilis</a>
          <br />
          <a href="https://www.anthedesign.fr/creation-de-sites-internet/experience-utilisateur/">
            anthedesign
          </a>
          <br />
          <a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux">
            openclassrooms
          </a>
          <br />
          <a href="https://theuxblog.com/">theuxblog</a>
        </Slide>
      </Deck>
    );
  }
}
