import { CardContent, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { capitalize } from '../../helpers'
import useStyles from './styles'
const Evolution = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()
  console.log(pokemon)
  return (
    <CardContent className={classes.cardContent} >
      <Typography variant="h3" gutterBottom align="center">{capitalize(pokemon.name)}</Typography>
      
    </CardContent>
  )
}

export default Evolution