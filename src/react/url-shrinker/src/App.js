//import 'bulma';
import "./sass/bulma-overrides.scss";
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
import Modal from "./components/modal/Modal";




const ContentToLoad = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    let routes;
    if(isAuthenticated){
        routes = (<>
            <Route path="/dashboard/:id" component={Devices} exact />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/" exact component={Login} />
        </>)
    } else {
        routes = (<>
            <Route path="/" exact component={Login} />
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
            <Modal/>
        </NetworkUiResponder>
  );
}

export default App;
