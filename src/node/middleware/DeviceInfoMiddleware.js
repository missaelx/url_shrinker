import DeviceDetector from "node-device-detector";

const detector = new DeviceDetector;

export default (req, res, next) => {
    let userAgent = req.headers['user-agent'];
    req.deviceInfo = detector.detect(userAgent);
    next();
}