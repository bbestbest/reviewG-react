import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import routes from './config/routes'

const BackgroundColor = styled.div`
  background-color: #003d59;
`
const Wrapper = styled.div`
  max-width: 2560px;
  min-width: 1440px;
  margin: 0 auto;
`

function App () {
  return (
    <>
      <Reset />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            <BackgroundColor>
              <Wrapper>
                {Object.keys(routes).map(routeKey => (
                  <Route Key={routeKey} {...routes[routeKey]} />
                ))}
              </Wrapper>
            </BackgroundColor>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
