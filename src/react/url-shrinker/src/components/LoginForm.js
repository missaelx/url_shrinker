import {useEffect, useState} from "react";
import {login} from "../store/reducers/auth/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {toast} from "react-toastify";
import * as actionTypes from '../store/Actions';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const isError = useSelector(state => state.network.error); //network communication error
    const isAuthError = useSelector(state => state.auth.error); //auth error
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const signinUser = useSelector(state => state.auth.signinUser);

    const [emailUser, setEmailuser] = useState(signinUser);

    useEffect(() => {
        setIsLoading(false);
    },[isError, isAuthError])

    useEffect(() => {
        if(!isAuthenticated) return;
        history.push("/dashboard")
    }, [isAuthenticated]);

    useEffect(() => {
        if(signinUser){
            toast.success("Account created");
            dispatch({type: actionTypes.RESET_AUTH})
        }
    }, [signinUser])

    const handleSubmit = (event) => {
        event.preventDefault();
        let email = emailUser;
        let password = event.target.password.value;
        dispatch(login(email, password));
        setIsLoading(true);
    }

    return (
        <form className="box" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="" className="label">Email</label>
                <div className="control has-icons-left">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="me@missael.dev"
                        className="input"
                        value={emailUser}
                        onChange={event => setEmailuser(event.target.value)}
                        required/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"/>
                    </span>
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">Password</label>
                <div className="control has-icons-left">
                    <input type="password" name="password" id="password" placeholder="*******" className="input"
                           required/>
                    <span className="icon is-small is-left">
                          <i className="fa fa-lock"/>
                    </span>
                </div>
            </div>
            <div className="field">
                <button className={"button is-success " + (isLoading ? "is-loading" : "")}>
                    Log in
                </button>
                <button className="button is-text" onClick={() => props.setIsLoginForm(false)}>Create account</button>
            </div>
        </form>
    )
}

export default LoginForm;