import {useSelector} from "react-redux";

const ModalAlert = (props) => {
    const mainContent = useSelector(state => state.modal.mainContent);
    return <>
        <section className="modal-card-body">
            {mainContent}
        </section>
        <footer className="modal-card-foot">
            <button className="button" onClick={props.onCloseModalClick}>OK</button>
        </footer>
    </>
}

export default ModalAlert;