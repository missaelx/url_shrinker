import {useDispatch} from 'react-redux'
import {toast} from "react-toastify";
import {login} from '../../store/reducers/auth/AuthActions';

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        dispatch(login(email, password));
    }
    return(
        <section className="hero is-dark is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form className="box" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label htmlFor="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" name="email" placeholder="me@missael.dev" className="input"
                                               required/>
                                        <span className="icon is-small is-left">
                                          <i className="fa fa-envelope"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" name="password" placeholder="*******" className="input" required/>
                                        <span className="icon is-small is-left">
                                          <i className="fa fa-lock"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-success">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;