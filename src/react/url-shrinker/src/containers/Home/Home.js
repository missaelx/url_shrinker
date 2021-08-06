import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Home = () => {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        if(isAuthenticated){
            history.push("/dashboard");
        }
    }, [isAuthenticated])
    return (
        <h1>Estoy en home component</h1>
    )
}

export default Home;