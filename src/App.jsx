import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Page from "./Pages/Page"
import Secret from "./Applications/Secret"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/secret" component={Secret}/>
        <Route component={Page}/>
      </Switch>
    </Router>
  );
}

export default App;
