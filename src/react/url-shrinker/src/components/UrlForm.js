import {useDispatch, useSelector} from "react-redux";
import {create} from "../store/reducers/url/UrlActions";
import {useEffect, useState} from "react";


const UrlForm = () => {
    const dispatch = useDispatch();
    const created = useSelector(state => state.url.created);

    const [urlValue, setUrlValue] = useState("");

    useEffect(() => {
        if(created){
            setUrlValue("");
        }
    }, [created]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(create(urlValue));
    }
    return (
        <div className="columns">
            <div className="column">
                <form onSubmit={handleSubmit}>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" type="url" placeholder="URL" name="url" value={urlValue} onChange={(e) => setUrlValue(e.target.value)}/>
                        </div>
                        <div className="control">
                            <input type="submit" className="button is-info" value="Shrink link :)" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UrlForm;