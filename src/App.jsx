import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Navbar from '../src/components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PokemonDetail from './pages/PokemonDetail/PokemonDetail'

const App = () => {

  return (
    <Router>
      <CssBaseline/>
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pokemon">
          <PokemonDetail/>
        </Route>
      </Switch>
    </Router>

    
  )
}

export default App