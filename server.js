const Hapi = require('@hapi/hapi');
const routers = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route(routers)

    await server.start();
    console.log(`server started at ${server.info.uri} `)

}

init();