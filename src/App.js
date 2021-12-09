import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Switch, Route, Redirect } from "react-router-dom"
import Main from './components/Main'
import About from './components/About'
import Project from './components/Project/Project'

function App() {
  return (
  <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' render={()=> <Main />}/>
        <Route path='/about' render={()=> <About />}/>
        <Route path='/project/:id?' render={()=> <Project />}/>
        <Redirect to='/' />
      </Switch>
  </BrowserRouter>
  );
}

export default App