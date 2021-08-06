import 'bulma';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import Devices from "./containers/Devices/Devices";
import NetworkUiResponder from "./hoc/NetworkUiResponder/NetworkUiResponder";
import {useSelector} from "react-redux";
import Home from "./containers/Home/Home";




const ContentToLoad = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    let routes;
    if(isAuthenticated){
        routes = (<>
            <Route path="/dashboard/:id" component={Devices} exact />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />

            <Route path="/" exact component={Home}/>
        </>)
    } else {
        routes = (<>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home}/>
        </>)
    }
    return (
        <Router>
            <Switch>
                {routes}
            </Switch>
        </Router>
    )
}

function App() {
  return (
        <NetworkUiResponder>
            <ContentToLoad/>
            <ToastContainer/>
        </NetworkUiResponder>
  );
}

export default App;
