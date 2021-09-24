import { CssBaseline, Grow, Grid, Container, Paper, Card, CardContent, CardMedia, Typography, Button, CircularProgress} from '@material-ui/core'
import Pokemon from '../../components/Pokemon/Pokemon'
import { useState, useEffect } from 'react'
import { APIgetPokemonsData } from '../../api'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  useEffect(() => {
    const getPokemonsData = async() => {
      setLoading(true)
      const data = await APIgetPokemonsData()
      setPokemons(data.results)
      setNext(data.next)
      setPrevious(data.previous)
      setLoading(false)
    }
    getPokemonsData()
  }, [])

  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [loading, setLoading] = useState(false)

  const nextPage = async() => {
    setLoading(true)
    const data = await APIgetPokemonsData(next)
    setPokemons(data.results)
    setNext(data.next)
    setPrevious(data.previous)
    setLoading(false)
  }

  const previousPage = async() => {
    setLoading(true)
    const data = await APIgetPokemonsData(previous)
    setPokemons(data.results)
    setNext(data.next)
    setPrevious(data.previous)
    setLoading(false)
  }
  return (
    <>
      {loading ? 
        <Container className={classes.loadingContainer}>
          <CircularProgress/>
        </Container> : 
      <>
        <Container className={classes.contentContainer}>
          <Grid spacing={3} container>
            {pokemons.map(pokemon => (
              <Pokemon url={pokemon.url}/>
            ))}
          </Grid>
        </Container>
        <Container className={classes.buttonContainer}>
          <Button variant="contained" onClick={previousPage} disabled={!previous ? true : false}>Previous</Button>
          <Button variant="contained" onClick={nextPage} disabled={!next ? true : false}>Next</Button>
        </Container>
      </>
      }
    </>
  )
}

export default Home