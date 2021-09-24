import { AppBar } from "@material-ui/core";
import { Link } from 'react-router-dom'
import useStyles from './styles'
import pokemon from '../../images/Pokemon-Logo-Transparent-Image.png'
const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} color="secondary">
      <Link to="/" className={classes.link}>
        <img src={pokemon} className={classes.image} alt="pokemon-title"></img>
      </Link>
    </AppBar>
  )
}

export default Navbar