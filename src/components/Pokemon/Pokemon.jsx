import { Grid, Card, CardContent, CardMedia, Typography, Chip, Box} from '@material-ui/core'
import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react'
import { APIgetPokemonDetail } from '../../api'
import { useHistory } from 'react-router-dom'
import useStyles from './styles.js'
const Pokemon = ({url}) => {
  const classes = useStyles()
  const [pokemon, setPokemon] = useState({})
  const history = useHistory()
  
  useEffect(() => {
    (async() => setPokemon(await APIgetPokemonDetail(url)))()
  }, [url])

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  
  return (
    <>
    { Object.keys(pokemon).length !== 0 ? 
      <Grid item xs={12} md={6} lg={4} onClick={() => history.push({pathname: '/pokemon/about', state: pokemon})} style={{cursor: 'pointer'}}>
        <Card elevation={3} className={classes.card}>
          <CardMedia style={{ height: 350 }} image={pokemon.sprites.other["official-artwork"].front_default} title={pokemon.name}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography variant="h3" className={classes.pokemonName} gutterBottom>{capitalize(pokemon.name)}</Typography>
            <Box>
              {pokemon.types.map(({type}) => {
                return (
                  <Chip key={type.name} label={capitalize(type.name)} className={classes.chip}/>
                  )
                })}
            </Box>

          </CardContent>
        </Card>
      </Grid>
      :
      <Grid item xs={12} md={6} lg={4} onClick={() => console.log('click')} style={{cursor: 'pointer'}}>
        <Skeleton variant="rectangular" animation="wave" height={118} />
      </Grid>
    }
    </>
  )
}

export default Pokemon