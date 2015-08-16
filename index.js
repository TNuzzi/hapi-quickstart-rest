/*jshint node:true*/
"use strict";

var Hapi = require("hapi");

// Create a server
var server = new Hapi.Server();

// Setup server connection options
server.connection({
    host: '127.0.0.1',
    port:  3000
});

// Register routes
server.register([{
        register: require("hapi-route-auto-reg"),
        options: {
            directory: "./routes"
        }
    }],
    function(err) {
        if (err) {
            console.error(err);
            throw err;
        }

        if (!module.parent) {
            server.start(function() {
                console.log("Server started", server.info.uri);
            });
        }
    });

module.exports = server;