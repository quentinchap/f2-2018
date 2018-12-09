import print from "spectacle/lib/themes/default/print";
import createTheme from "spectacle/lib/themes/default";

const styles = (colors, fonts) => ({
  screen: screen(colors, fonts),
  print: print(),
  matUI: {
    grow: {
      flexGrow: 1
    },
    body: {
      background: "red"
    },
    whiteBack: {
      background: "white",
      padding: 5
    },
    title: {
      width: "100vw"
    },
    evalCard: {
      padding: 10,
      flex: 2,
      width: "80%"
    },
    content: {
      padding: 20,
      display: "flex",
      flexWrap: "wrap"
    },
    noDecoration: {
      textDecoration: "none!important"
    },
    card: {
      minWidth: 300,
      maxWidth: "30vw",
      flex: 1,
      margin: 20
    },
    media: {
      height: 200
    },
    root: {
      flexGrow: 1
    },
    icon: {
      color: "white"
    },
    leftAlign: {
      textAlign: "left"
    }
  }
});

const defaultColors = {
  primary: "#f9c300",
  secondary: "black",
  tertiary: "white",
  quaternary: "white",
  pacman: "#000"
};

const defaultFonts = {
  primary: "Open Sans Condensed",
  secondary: "Lobster Two",
  tertiary: "monospace"
};

const screen = (colors = defaultColors, fonts = defaultFonts) => {
  const theme = createTheme(colors, fonts);
  const { screen } = theme;
  console.log(theme);
  return {
    ...screen,
    components: {
      ...screen.components,
      quote: {
        display: "block",
        color: colors.quaternary,
        fontSize: "2rem",
        lineHeight: 1
      }
    }
  };
};

export default styles;
