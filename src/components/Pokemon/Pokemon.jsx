import { CssBaseline, Grow, Grid, Container, Paper, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Chip} from '@material-ui/core'
import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react'
import { APIgetPokemonDetail } from '../../api'
const Pokemon = ({url}) => {
  const [pokemon, setPokemon] = useState({})
  console.log(pokemon)
  useEffect(() => {
    (async() => setPokemon(await APIgetPokemonDetail(url)))()
  }, [])

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <>
    { Object.keys(pokemon).length !== 0 ? 
      <Grid item xs={12} md={6} lg={4} onClick={() => console.log('click')} style={{cursor: 'pointer'}}>
        <Card elevation={3}>
          <Typography variant="h5" gutterBottom>{capitalize(pokemon.name)}</Typography>
          {pokemon.types.map(({type}) => {
            return (
              <Chip key={type.name} label={capitalize(type.name)} size="small"/>
            )
          })}
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