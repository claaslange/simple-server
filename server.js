'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.route({
    method: 'POST',
    path: '/applications',
    handler: function (request, reply) {
	console.log(JSON.stringify(request.payload, null, 2));
        reply('Hello, world!');
    }
});

server.route({
    method: 'POST',
    path: '/customer',
    handler: function (request, reply) {
        console.log(JSON.stringify(request.payload, null, 2));
        reply('Hello, world!');
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
