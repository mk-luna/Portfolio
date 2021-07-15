import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Page from "./Components/Page"

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Page}/>
      </Switch>
    </Router>
  );
}

export default App;
