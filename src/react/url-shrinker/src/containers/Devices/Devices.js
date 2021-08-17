import {getOne} from "../../store/reducers/url/UrlActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from 'react-router-dom';
import Config from "../../utils/Config";
import {getLocation} from "../../store/reducers/geolocation/GeoLocationActions";

const Devices = (props) => {
    const dispatch = useDispatch();
    const url = useSelector(state => state.url.url);
    let urlId = props.match.params.id;

    const handleLocationInfo = (event, ip) => {
        event.preventDefault();
        dispatch(getLocation(ip));
    }

    useEffect(() => {
        dispatch(getOne(urlId));
    }, []);

    //return <h1>Devices {JSON.stringify(url)}</h1>
    return (
        <div className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-1 ">
                            <Link to="/dashboard">URL Shrinker 😎</Link> > Devices
                        </h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>URL</th>
                                    <th>ShortId</th>
                                    <th>Visits</th>
                                    <th>Created by</th>
                                    <th>Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href={url?.url}>{url?.url}</a></td>
                                    <td><a href={Config.urlBase + url?.short}> {url?.short}</a></td>
                                    <td>{url?.clicks}</td>
                                    <td>{url?.created_by?.fullname}</td>
                                    <td>{url?.created_at && (new Date(url?.created_at)).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <h2 className="title is-2 ">Visits</h2>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <table className="table is-fullwidth">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Device Info</th>
                                <th>User ip</th>
                            </tr>
                            </thead>
                            <tbody>
                                {url?.visits.map(visit => (
                                    <tr key={visit._id}>
                                        <td>{ (new Date(visit.timestamp)).toLocaleString()}</td>
                                        <td>{`${visit.deviceInfo.os?.name ?? ""} ${visit.deviceInfo.os?.version ?? ""} ${visit.deviceInfo.device.brand} (${visit.deviceInfo.device.type}) - ${visit.deviceInfo.client.name}`}</td>
                                        <td>
                                            {visit.userIp} <br/>
                                            <a onClick={(e) => handleLocationInfo(e, visit.userIp)}>Show location info</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices;