import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
    // height: "100%"
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20
  },
  chip: {
    marginRight: theme.spacing(1)
  },
  pokemonName: {
    color: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold
  }
}))