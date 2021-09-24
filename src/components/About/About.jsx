import { CardContent, Typography, Chip, Box} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import { capitalize } from '../../helpers'

const About = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()
  return (
    <CardContent className={classes.cardContent} >
      <Typography variant="h3" gutterBottom align="center">{capitalize(pokemon.name)}</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" gutterBottom >National Pokedex Number:</Typography>
        <Typography variant="body1" gutterBottom >{pokemon.order}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" gutterBottom >Types:</Typography>
        <Box>
          {pokemon.types.map(({type}) => {
            return (
              <Chip key={type.name} label={capitalize(type.name)} className={classes.chip} size="small"/>
              )
            })}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" gutterBottom >Base Experience:</Typography>
        <Typography variant="body1" gutterBottom >{pokemon.base_experience}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" gutterBottom >Height:</Typography>
        <Typography variant="body1" gutterBottom >{pokemon.height}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" gutterBottom >Weight:</Typography>
        <Typography variant="body1" gutterBottom >{pokemon.weight}</Typography>
      </Box>
      
    </CardContent>
  )
}

export default About