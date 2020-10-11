import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import routes from './config/routes'

function App () {
  return (
    <>
      <Reset />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route Key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
