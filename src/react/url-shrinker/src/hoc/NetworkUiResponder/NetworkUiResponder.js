import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toast} from 'react-toastify'
import * as actions from '../../store/Actions';
import {useHistory} from "react-router-dom";

const NetworkUiResponder = (props) => {
    const history = useHistory();
    const isError = useSelector(state => state.network.error);
    //const errorCode = useSelector(state => state.network.errorCode);
    const status = useSelector(state => state.network.status);
    const message = useSelector(state => state.network.message);
    const errorType = useSelector(state => state.network.errorType);
    const dispatch = useDispatch();


    useEffect(() => {
        if(!isError) return;
        toast.error(`${status}: ${message}`);
        if([actions.TOKEN_ABSENT, actions.INVALID_TOKEN].indexOf(errorType) !== -1){
            dispatch({type: actions.LOGOUT});
            history.push("/login");
        }
        dispatch({type: actions.CLEAR_NETWORK_ERROR});
    }, [isError]);

    return props.children;
}

export default NetworkUiResponder;