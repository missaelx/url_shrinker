import DeviceDetector from "node-device-detector";

export default (req, res, next) => {
    const detector = new DeviceDetector;
    let userAgent = req.headers['user-agent'];
    req.deviceInfo = detector.detect(userAgent);

    next();
}