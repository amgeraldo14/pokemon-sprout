import { AppBar, Typography } from "@material-ui/core";
import useStyles from './styles'
import pokemon from '../../images/Pokemon-Logo-Transparent-Image.png'
const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} color="secondary">
      {/* <Typography variant="h1" className={classes.image}>TEST</Typography> */}
      <img src={pokemon} className={classes.image} alt="pokemon-title"></img>
    </AppBar>
  )
}

export default Navbar