import {useSelector} from "react-redux";

const ModalGeolocation = (props) => {
    const additionalData = useSelector(state => state.modal.additionalData);

    const isCityInformationAvailable = additionalData.geoplugin_city && additionalData.geoplugin_region;
    const isCoordinatesInformationAvailable = additionalData.geoplugin_latitude && additionalData.geoplugin_longitude;

    return <>
        <section className="modal-card-body">
            {isCityInformationAvailable ? (
                <p><strong>City/region: </strong>{additionalData.geoplugin_city}, {additionalData.geoplugin_region}</p>
            ) : (
                <p>City and region information not available for this IP</p>
            )}

            {isCoordinatesInformationAvailable ? (
                <>
                    <strong>Position: </strong>
                    <a href={`https://www.google.com/maps/@${additionalData.geoplugin_latitude},${additionalData.geoplugin_longitude},15z`}>
                        {additionalData.geoplugin_latitude}, {additionalData.geoplugin_longitude}
                    </a>
                </>
            ) : (
                <p>Geoposition information not available</p>
            )}
        </section>
        <footer className="modal-card-foot">
            <button className="button" onClick={props.onCloseModalClick}>OK</button>
        </footer>
    </>
}

export default ModalGeolocation;