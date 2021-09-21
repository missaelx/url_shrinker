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
            <Switch>
                <Route path="/dashboard/:id" component={Devices} exact />
                <Route path="/dashboard" component={Dashboard} exact/>
                <Route path="/" component={Login} />
            </Switch>
        </>)
    } else {
        routes = (<>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </>)
    }
    return (
        <Router>
            {routes}
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
