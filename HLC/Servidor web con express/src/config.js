const config = {
    application: {
        cors: {
            server: [
                {
                    origin: ["localhost:5173","https://gorgeous-gaufre-e62281.netlify.app"], //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}
module.exports.config = config