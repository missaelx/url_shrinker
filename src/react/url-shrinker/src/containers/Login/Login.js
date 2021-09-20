import LoginForm from "../../components/LoginForm";
import {useState} from "react";
import SinginForm from "../../components/SinginForm";
import {useSelector} from "react-redux";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    return(
        <section className="hero is-dark is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            {isLoginForm ? <LoginForm setIsLoginForm={setIsLoginForm}/> : <SinginForm setIsLoginForm={setIsLoginForm}/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;