/*jshint node:true*/
"use strict";

// Exports = exports? Huh? Read: http://stackoverflow.com/a/7142924/5210
module.exports.routes = exports = function(server) {

    console.log("Loading Hello route");
    exports.hello(server);
};

/**
 * This routes will automatically be loaded when the server loads.
 * @param  {[Hapi.server]} server An instance of Hapi server
 */
exports.hello = function(server) {
    var uri, options;

    // Add /healthcheck/ping endpoint to HAPI server routes
    server.route({
        path: "/hello",
        method: "GET",
        handler: function(request, reply) {
            reply({
                "hello": "world"
            });
        }
    });
};