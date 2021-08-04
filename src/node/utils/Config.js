const config = Object.freeze({
    mongo_url: process.env.MONGO_URL || "mongodb://localhost/url_shrink",
    port: process.env.PORT || 5000,
    jwt_token: process.env.JWT_TOKEN || "ASDGsdagasDgfqwgtq242243rsedvcsdv",
    jwt_expires: process.env.EXPIRES || 29000
})

export default config;