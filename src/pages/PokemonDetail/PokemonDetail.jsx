import { CssBaseline, Grow, Grid, Container, AppBar, Paper, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Chip, Box} from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useHistory, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import useStyles from './styles'

const PokemonDetail = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <>
    { pokemon && Object.keys(pokemon).length > 0 ?
      <Grid container className={classes.container} justifyContent="center" alignItems="center">
        <Grid item >
          <Card elevation={3} className={classes.card} >
            <AppBar className={classes.appbar} color="secondary">
              <Box display="flex" justifyContent="space-around">
                <Link to="/pokemon" className={classes.link}>
                  About
                </Link>
                <Link to="/stats" className={classes.link}>
                  Base Stats
                </Link>
                <Link to="/evolution" className={classes.link}>
                  Evolution
                </Link>
                <Link to="/moves" className={classes.link}>
                  Moves
                </Link>
              </Box>
            </AppBar>
            <CardMedia className={classes.cardMedia} component="img" style={{ height: 500 }} image={pokemon.sprites.other["official-artwork"].front_default} title={pokemon.name}></CardMedia>
            <CardContent className={classes.cardContent} >
              <Typography variant="h3" gutterBottom align="center">{capitalize(pokemon.name)}</Typography>
              
              

            </CardContent>
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