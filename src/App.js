import React , { Suspense , lazy }from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './main.css';
import './reset.css';

const Home = lazy(() => import("./pages/Home"))
const Action = lazy(() => import("./pages/Action"))
const Adventure = lazy(() => import("./pages/Adventure"))
const RPG = lazy(() => import("./pages/RPG"))
const Simulation = lazy(() => import("./pages/Simulation"))
const Strategy = lazy(() => import("./pages/Strategy"))
const Sport = lazy(() => import("./pages/Sport"))


function App() {
  return (<>
    <Router>
      <Suspense fallback="...loading">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/rpg" component={RPG} />
          <Route path="/Simulation" component={Simulation} />
          <Route path="/strategy" component={Strategy} />
          <Route path="/sport" component={Sport} />
        </Switch>
      </Suspense>
    </Router>
  </>);
}

export default App;
