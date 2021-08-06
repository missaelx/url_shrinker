import UrlForm from "../../components/UrlForm";
import UrlList from "../../components/UrlList";
import Navbar from "../../components/Nabvar";
const Dashboard = () => {
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