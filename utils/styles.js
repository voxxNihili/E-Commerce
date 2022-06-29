import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#42426F",
    "& a": {
      color: "#FFFFFF",
      marginLeft: 10,
    },
  },
  navbarButton: {
    color: "#FFFFFF",
    textTransform: "initial"
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  grow: {
    flexGrow: "1",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  },
  bold: {
    fontWeight: 600
  },
  form: {
    maxWidth: 800,
    margin: "10px auto"
  },
  transparentBackground: {
    backgroundColor: "transparent"
  }
});
export default useStyles;
