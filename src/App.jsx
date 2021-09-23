import { CssBaseline } from '@material-ui/core'
import Navbar from '../src/components/Navbar/Navbar'

import Home from './pages/Home/Home'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App