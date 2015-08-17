/*jshint node:true*/
"use strict";

// Exports = exports? Huh? Read: http://stackoverflow.com/a/7142924/5210
module.exports.routes = exports = function(server) {

    console.log("Loading Hello route");
    exports.hello(server);
};

/**
 * This route will automatically be loaded when the server loads.
 * @param  {[Hapi.server]} server An instance of Hapi server
 */
exports.hello = function(server) {
    // Adding /hello route
    server.route({
        path: "/hello",
        method: "GET",
        handler: function(request, reply) {

            // Hello world response
            reply({
                "hello": "world"
            });
        }
    });
};