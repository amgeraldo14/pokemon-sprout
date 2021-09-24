import { CardContent, Typography, LinearProgress, Box} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { capitalize } from '../../helpers'
import useStyles from './styles'

const Stats = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()
  return (
    <CardContent className={classes.cardContent} >
      <Typography variant="h3" gutterBottom align="center">{capitalize(pokemon.name)}</Typography>
      {pokemon.stats.map(stat => (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" gutterBottom >{capitalize(stat.stat.name)}:</Typography>
          <LinearProgress className={classes.progress} variant="determinate" value={stat.base_stat} color="secondary" />
          <Typography variant="body1" gutterBottom >{stat.base_stat}</Typography>
        </Box>
      ))}
      
    </CardContent>
  )
}

export default Stats