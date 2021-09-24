import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20,
    color: theme.palette.grey[100],
  },
  chip: {
    marginLeft: theme.spacing(1)
  },
}))