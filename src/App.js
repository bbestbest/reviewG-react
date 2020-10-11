import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'

const Home = lazy(() => import('./pages/Home'))
const Action = lazy(() => import('./pages/Action'))
const Adventure = lazy(() => import('./pages/Adventure'))
const RPG = lazy(() => import('./pages/RPG'))
const Simulation = lazy(() => import('./pages/Simulation'))
const Strategy = lazy(() => import('./pages/Strategy'))
const Sport = lazy(() => import('./pages/Sport'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

function App () {
  return (
    <>
      <Reset />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/action' component={Action} />
            <Route path='/adventure' component={Adventure} />
            <Route path='/rpg' component={RPG} />
            <Route path='/simulation' component={Simulation} />
            <Route path='/strategy' component={Strategy} />
            <Route path='/sport' component={Sport} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
