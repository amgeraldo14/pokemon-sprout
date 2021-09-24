import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5)
  },
  card: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
    height: "100"
  },
  cardMedia: {
    padding: theme.spacing(1)
  },
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20
  },
  appbar: {
    position: 'static',
    padding: theme.spacing(1)
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}))