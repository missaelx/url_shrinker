import * as _ from 'bulma';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./containers/Login/Login";

function App() {
  return (<>
      <Router>
          <Switch>
              <Route path="/login" exact>
                  <Login/>
              </Route>
              <Route path="/">
                  <h1>estoy en home</h1>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
