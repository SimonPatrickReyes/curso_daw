const config = {
    application: {
        cors: {
            server: [
                {
                    origin: ["https://gorgeous-gaufre-e62281.netlify.app"], //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}
module.exports.config = config