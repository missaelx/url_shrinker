import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {signin} from "../store/reducers/auth/AuthActions";
import {toast} from "react-toastify";

const SinginForm = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const isError = useSelector(state => state.network.error);
    const isAuthError = useSelector(state => state.auth.error);
    const signinUser = useSelector(state => state.auth.signinUser);

    useEffect(() => {
        setIsLoading(false);
    },[isError, isAuthError])

    useEffect(() => {
        if(!signinUser) return;
        props.setIsLoginForm(true);
    }, [signinUser]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let fullname = event.target.fullname.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        dispatch(signin(fullname, email, password));
        setIsLoading(true);
    }
    return (
        <form className="box" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="" className="label">Fullname</label>
                <div className="control has-icons-left">
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="eg: Missael Hernández"
                        className="input"
                        required/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"/>
                    </span>
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">Email</label>
                <div className="control has-icons-left">
                    <input type="email" name="email" id="email" placeholder="me@missael.dev" className="input"
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
                    Create account
                </button>
                <button className="button is-text" onClick={(e) => {
                    e.preventDefault();
                    props.setIsLoginForm(true)
                }}>Log in</button>
            </div>
        </form>
    )
}

export default SinginForm;