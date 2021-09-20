import UrlForm from "../../components/UrlForm";
import UrlList from "../../components/UrlList";
import Navbar from "../../components/Nabvar";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
const Dashboard = () => {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        if(isAuthenticated) return;
        history.push("/")
    }, [isAuthenticated])

    return (<>
        <Navbar/>
        <div className="section">

            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-1 ">URL Shrinker 😎</h1>
                    </div>
                </div>
                <UrlForm/>
                <UrlList/>
            </div>
        </div>
    </>)
}

export default Dashboard;