import { Paper, CardContent, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { capitalize } from '../../helpers'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './styles'
const Moves = () => {
  const history = useHistory()
  const pokemon = history.location.state
  const classes = useStyles()
  
  return (
    <CardContent className={classes.cardContent} >
      <Typography variant="h3" gutterBottom align="center">{capitalize(pokemon.name)}</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Move Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemon.moves.map((move, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{capitalize(move.move.name.replace(/-/g, ' '))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  )
}

export default Moves