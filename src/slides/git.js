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

export default class GitPrez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Gardez la maîtrise de votre code version après version
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote size={6}>
              Git est un logiciel de gestion de versions décentralisé. C'est un
              logiciel libre créé par Linus Torvalds, [...] il s’agit du
              logiciel de gestion de versions le plus populaire qui est utilisé
              par plus de douze millions de personnes.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Pourquoi?
          </Heading>
          <List>
            <ListItem>Collaboration</ListItem>
            <ListItem>Retour en arrière</ListItem>
            <ListItem>Automatisation</ListItem>
            <ListItem>Audit</ListItem>
            <ListItem>Travailler d'où vous voulez</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Décentralisé
          </Heading>
          <img src={gitProcess} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les commandes
          </Heading>
          <a
            href="https://www.git-tower.com/blog/git-cheat-sheet"
            target="blank"
          >
            Cheat sheet
          </a>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les branches
          </Heading>
          <img src={gitBranch} />
          <List>
            <ListItem>
              <a href="https://medium.freecodecamp.org/git-rebase-and-the-golden-rule-explained-70715eccc372">
                Les rebases
              </a>
            </ListItem>
            <ListItem>
              <a href="https://fr.atlassian.com/git/tutorials/merging-vs-rebasing">
                Merging vs rebasing
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            A vous de jouer
          </Heading>
          <List>
            <ListItem>Créer un repo sur github ou gitlab</ListItem>
            <ListItem>Réaliser votre premier commit/push</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Bonus: clients graphiques
          </Heading>
          <List>
            <ListItem>Gitkarken</ListItem>
            <ListItem>Tortoise git</ListItem>
            <ListItem>Plugin IDE</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Bonus: GitFlow
          </Heading>
          <img src={gitFlow} />
        </Slide>
      </Deck>
    );
  }
}
