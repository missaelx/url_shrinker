const Config = Object.freeze({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/",
    urlBase: process.env.REACT_APP_URL_BASE || "http://localhost:5000/m/"
});
export default Config;