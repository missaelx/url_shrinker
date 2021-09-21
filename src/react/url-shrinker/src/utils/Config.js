const Config = Object.freeze({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/",
    urlBase: process.env.REACT_APP_URL_BASE || "http://localhost:5000/m/",
    geoClientUrl: process.env.REACT_APP_GEO_CLIENT_URL || "https://www.example.com",
});
export default Config;