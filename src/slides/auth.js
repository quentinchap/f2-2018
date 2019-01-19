// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Quote,
  BlockQuote,
  Cite
} from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import sessionAuth from "../assets/img/auth/sessionAuth.png";
import jwt from "../assets/img/auth/jwt.png";
import jwtHeaderPayload from "../assets/img/auth/jwtHeaderPayload.png";
import jwtSignature from "../assets/img/auth/jwtSignature.png";
import OAuth2_algorithm from "../assets/img/auth/OAuth2_algorithm.png";
import Auth_Code_Grant from "../assets/img/auth/Auth_Code_Grant.png";
import Implicit_Grant from "../assets/img/auth/Implicit_Grant.png";
import ResourceOwnerPasswordCredentialsGrant from "../assets/img/auth/ResourceOwnerPasswordCredentialsGrant.png";
import ClientCredentialsGrant from "../assets/img/auth/ClientCredentialsGrant.png";

const AuthPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Techniques d'authentification
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Contrôler l'accés de vos APIs
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Pourquoi ?
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les trois axes d'une gestion complète
      </Heading>
      <List>
        <ListItem>
          <strong>Authentification</strong> Garantir l'identité d'un tier
        </ListItem>
        <ListItem>
          <strong>Autorisation</strong> Gérer l'accés aux fonctionnalités
        </ListItem>
        <ListItem>
          <strong>Ségrégation</strong> Gérer l'accés aux données
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les solutions d'authentification
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Session
      </Heading>
      <img src={sessionAuth} />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Session
      </Heading>
      <List>
        <ListItem>Simple à implémenter</ListItem>
        <ListItem>Utilise la session (cookie server-side)</ListItem>
        <ListItem>Statefull => difficilement scalable</ListItem>
        <ListItem>Vol de session</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Basic Auth
      </Heading>
      <List>
        <ListItem>Auth. par token</ListItem>
        <ListItem>Token = username:password en base 64</ListItem>
        <ListItem>Token dans le headers des requêtes</ListItem>
        <ListItem>Authorization: Basic QWxhZGRpbjp...</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Basic Auth
      </Heading>
      <List>
        <ListItem>Simple à implémenter</ListItem>
        <ListItem>Vol de token = vol de mot de passe</ListItem>
        <ListItem>
          Passage du mot de passe et du login à chaque requête
        </ListItem>
        <ListItem>Toujours compliquez de distribuer le système</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        API Keys
      </Heading>
      <p>Idem basic auth mais token généré et fournis à l'utilisateur</p>
      <List>
        <ListItem>Vol de token != vol de mot de passe</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        JWT: Json Web Token
      </Heading>
      <p>Un token autosuffisant</p>
      <img src={jwt} />
      <p>Authorization: Bearer "token"</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        JWT: Header & paylod
      </Heading>
      <img src={jwtHeaderPayload} />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        JWT: Signature
      </Heading>
      <img src={jwtSignature} />
      <p>Authorization: Bearer B64(header).B64(payload).sign</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        JWT
      </Heading>
      <h3>Avantages</h3>
      <List>
        <ListItem>L'état user stocké côté client</ListItem>
        <ListItem>Distribuable</ListItem>
      </List>
      <h3>Inconvénients</h3>
      <List>
        <ListItem>Partage de secret entre micro-services</ListItem>
        <ListItem>Cross device, auto login</ListItem>
        <ListItem>
          Bloquer un utilisateur avant la fin de l'iat (issue at)
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Authentication et gestion d'Authentification: OAuth 2.0
      </Heading>
      <p>
        Framework d'Autorisation permettant de déléguer la gestion des accés.
      </p>
      <List>
        <ListItem>Partage d'autorisation entre site</ListItem>
        <ListItem>Problèmatiques cross device</ListItem>
        <ListItem>Connexion permanente</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Les acteurs
      </Heading>
      <List>
        <ListItem>
          <strong>Resource owner</strong> Propriétaire de la ressource en
          capacité de donner l'accés
        </ListItem>
        <ListItem>
          <strong>Client</strong> Application, site, etc. demandant la
          ressources
        </ListItem>
        <ListItem>
          <strong>Resource server</strong> Serveur qui héberge la ressource
        </ListItem>
        <ListItem>
          <strong>Authorization server</strong> Serveur gérant les autorisations
          d'accés
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Les tokens
      </Heading>
      <List>
        <ListItem>
          <strong>Access token</strong> Token d'accés ayant une validité limité.
        </ListItem>
        <ListItem>
          <strong>Refresh token</strong> Permet d'obtenir un nouveau token
          d'accés sans saisi de mot de passe.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Authorization Code Grant
      </Heading>
      <List>
        <ListItem>Processus pour client pouvant conserver la confidentialité des ID</ListItem>
        <ListItem>Fournis un Access token ainsi qu'un Refresh Token</ListItem>
        <ListItem>Principalement pour les applications machine to machine </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Authorization Code Grant
      </Heading>
      <img src={Auth_Code_Grant} /> <br/>
      <a href="https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/">Source</a>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Implicit Grant
      </Heading>
      <List>
        <ListItem>Processus pour client ne pouvant pas conserver la confidentialité des ID</ListItem>
        <ListItem>Identification non issue du client</ListItem>
        <ListItem>Identifiant et URL de redirection permettent l'identification</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Implicit Grant
      </Heading>
      <img src={Implicit_Grant} /> <br/>
      <a href="https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/">Source</a>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Resource Owner Password Credentials Grant
      </Heading>
      
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Resource Owner Password Credentials Grant
      </Heading>
      <img src={ResourceOwnerPasswordCredentialsGrant} /> <br/>
      <a href="https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/">Source</a>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Client Credentials Grant
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Client Credentials Grant
      </Heading>
      <img src={ClientCredentialsGrant} /> <br/>
      <a href="https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/">Source</a>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0 & OpenId Connect
      </Heading>
      <p>
        OAuth permet de définir des méthodes et scénarios de déléguation
        d'accés. Cependant la notion d'utilisateur est inexistant et les
        problèmatiques d'autorisation et d'indentification ne sont pas gérer.
      </p>
      <p>
        Pour avoir un système complet il est donc nécessaire de faire appel à
        une surcouche comme par exemple openID Connect
      </p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OpenId Connect
      </Heading>
      <BlockQuote>
        <Quote>
          OpenID Connect (OIDC) spécifie une interface HTTP Restful
          d’authentification et se base sur le protocole OAuth2 pour faire de la
          délégation d’autorisation, c’est à dire que dans la grande majorité
          des cas, l’utilisateur final n’aura plus besoin de fournir directement
          ses informations d’identification à une application tierce. OIDC
          utilise également le formalisme d’échange JWT (JSON Web Token) pour
          transmettre l’identité des utilisateurs aux applications, ainsi que
          leurs rôles/habilitations.
        </Quote>
        <Cite>
          Matthieu MABYRE -{" "}
          <a href="https://meritis.fr/techno-archi/openid-connect/">Meritis</a>
        </Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Cas pratique
      </Heading>
      <img src={OAuth2_algorithm} />
      <br />
      <a href="https://dba-presents.com/index.php/other/my-thoughts/125-what-is-openid-oauth2-and-google-sign-in">
        Source
      </a>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth 2.0: Les tokens
      </Heading>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BNEoKexlmA4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Ressources
      </Heading>
      <List>
        <ListItem>
          <a href="https://nordicapis.com/3-common-methods-api-authentication-explained/">
            3 Common Methods of API Authentication
          </a>
        </ListItem>
        <ListItem>
          <a href="https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4">
            Session vs Token Based Authentication
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jwt.io/">JWT.io</a>
        </ListItem>
        <ListItem>
          <a href="https://fr.wikipedia.org/wiki/JSON_Web_Token">
            JWT Wikipedia
          </a>
        </ListItem>
        <ListItem>
          <a href="https://tools.ietf.org/html/rfc7519">JWT spec</a>
        </ListItem>
        <ListItem>
          <a href="https://fr.wikipedia.org/wiki/OAuth">oAuth Wikipédia</a>
        </ListItem>
        <ListItem>
          <a href="https://oauth.net/">oAuth doc</a>
        </ListItem>
        <ListItem>
          <a href="https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/">
            Comprendre OAuth 2.0 par l'exemple
          </a>
        </ListItem>
        <ListItem>
          <a href="https://tools.ietf.org/html/rfc6749">RFC OAuth 2.0</a>
        </ListItem>
        <ListItem>
          <a href="https://meritis.fr/techno-archi/openid-connect/">
            Authentification et habilitations ...
          </a>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(AuthPrez);
