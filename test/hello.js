/*jshint node:true*/
"use strict";

var Code = require("code"),             // Assertion lib
    Lab = require("lab"),               // Test utility/harness
    server = require("../"),            // Hapi server to test
    lab = exports.lab = Lab.script(),   
    expect = Code.expect;


// Creating your experiment and testing it
lab.experiment("Hello API test", function() {
    lab.test("/hello", function(done) {
        var options = {
            method: "GET",
            url: "/hello"
        };

        // Injects a request into the server simulating an incoming HTTP request without 
        // making an actual socket connection 
        server.inject(options, function(response) {
            var result = response.result;

            // validate results
            expect(response.statusCode).to.equal(200);
            expect(result).to.be.instanceof(Object);
            expect(result.hello).to.be.equal("world");

            // Notify when test is done
            done();
        });
    });
});