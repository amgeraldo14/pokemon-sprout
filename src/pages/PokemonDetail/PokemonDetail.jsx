import { Grid,  AppBar, Card, CardMedia, Box} from '@material-ui/core'

import { useHistory, Link, Switch, Route } from 'react-router-dom'
import useStyles from './styles'
import About from '../../components/About/About'
import Stats from '../../components/Stats/Stats'
import Evolution from '../../components/Evolution/Evolution'
import Moves from '../../components/Moves/Moves'

const PokemonDetail = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()
  return (
    <>
    { pokemon && Object.keys(pokemon).length > 0 ?
      <Grid container className={classes.container} justifyContent="center" alignItems="center">
        <Grid item >
          <Card elevation={3} className={classes.card} >
            <AppBar className={classes.appbar} color="secondary">
              <Box display="flex" justifyContent="space-around">
                <Link to={{pathname: '/pokemon/about', state: pokemon}} className={classes.link}>
                  About
                </Link>
                <Link to={{pathname: '/pokemon/stats', state: pokemon}} className={classes.link}>
                  Base Stats
                </Link>
                <Link to={{pathname: '/pokemon/evolutions', state: pokemon}} className={classes.link}>
                  Evolution
                </Link>
                <Link to={{pathname: '/pokemon/moves', state: pokemon}} className={classes.link}>
                  Moves
                </Link>
              </Box>
            </AppBar>
            <CardMedia className={classes.cardMedia} component="img" style={{ height: 500 }} image={pokemon.sprites.other["official-artwork"].front_default} title={pokemon.name}></CardMedia>
            <Switch>
              <Route exact path="/pokemon/about">
                <About/>
              </Route>
              <Route exact path="/pokemon/stats">
                <Stats/>
              </Route>
              <Route exact path="/pokemon/evolutions">
                <Evolution/>
              </Route>
              <Route exact path="/pokemon/moves">
                <Moves/>
              </Route>
            </Switch>
          </Card>
        </Grid>
      </Grid>
      :
      <p>loading</p>
  }

    </>
  )
}

export default PokemonDetail