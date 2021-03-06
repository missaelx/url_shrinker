import {useDispatch} from "react-redux";
import * as actions from '../store/Actions';
import {useHistory} from "react-router-dom";
const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogoutClick = (event) => {
        event.preventDefault();
        dispatch({type: actions.LOGOUT});
        history.push("/");
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <button className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button onClick={onLogoutClick} className="button is-warning" id="btnLogout">
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;