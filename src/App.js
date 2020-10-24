import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import GlobalStyle from './components/GlobalStyle'
import withHelmet from './utils/withHelmet'
import PostData from './services/PostData'
import CommentData from './services/CommentData'

const BackgroundColor = styled.div`
  background-color: #003d59;
`
const Wrapper = styled.div`
  max-width: 2560px;
  min-width: 1440px;
  margin: 0 auto;
`

function App () {
  useEffect(() => {
    PostData()
    CommentData()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Router>
        <Suspense fallback="...loading">
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

export default withHelmet('Review-G')(App)
