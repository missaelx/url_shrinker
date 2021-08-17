import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/Actions";
import * as modalTypes from "../../utils/ModalTypes";
import {useState} from "react";
import ModalGeolocation from "./ModalTypes/ModalGeolocation";
import ModalAlert from "./ModalTypes/ModalAlert";

const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen);
    const modalType = useSelector(state => state.modal.type);
    const modalTitle = useSelector(state => state.modal.title);


    const onCloseModalClick = (event) => {
        event.preventDefault();
        dispatch({type: actions.HIDE_MODAL});
    }

    const ContentToLoad = () => {
        console.log("contentToLoad", modalType);
        switch (modalType){
            case modalTypes.GEOLOCATION:
                return <ModalGeolocation onCloseModalClick={onCloseModalClick}/>;
            case modalTypes.ALERT:
                return <ModalAlert onCloseModalClick={onCloseModalClick}/>;
            default:
                return null;
        }
    }
    return (
        <div className={"modal" + (isOpen ? " is-active" : "")}>
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{modalTitle}</p>
                    <button className="delete" aria-label="close" onClick={onCloseModalClick}/>
                </header>
                <ContentToLoad/>
            </div>
        </div>
    );
}
export default Modal;