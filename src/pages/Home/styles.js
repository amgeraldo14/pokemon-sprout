import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  loadingContainer: {
    display: 'flex',
    height: '20em',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    marginTop: theme.spacing(5)
  }
}))