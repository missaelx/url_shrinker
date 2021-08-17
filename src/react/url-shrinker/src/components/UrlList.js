import {get} from '../store/reducers/url/UrlActions';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Config from '../utils/Config';
import * as actions from '../store/Actions';
import {useHistory} from "react-router-dom";

const UrlList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const created = useSelector(state => state.url.created);
    const urls = useSelector(state => state.url.urls);

    const onDevicesClick = (event, id) => {
        event.preventDefault();
        history.push("/dashboard/" + id);
    }

    useEffect(() => {
        dispatch(get());
        dispatch({type: actions.RESET_CREATED_URL})
    }, [created]);
    return (
        <div className="columns">
            <div className="column">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>ShortId</th>
                            <th>Visits</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map(url => (
                            <tr key={url._id}>
                                <td><a rel="noreferrer" target="_blank" href={url.url}>{url.url}</a></td>
                                <td><a rel="noreferrer" target="_blank" href={Config.urlBase + url.short}> {url.short}</a></td>
                                <td>{url.clicks}</td>
                                <td>
                                    <button onClick={(e) => onDevicesClick(e, url._id)} className="button is-primary is-rounded">Devices</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UrlList;