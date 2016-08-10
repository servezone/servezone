import "typings-test";
import should = require("should");
import socketIoClient = require("socket.io-client");
import servezone = require("../dist/index");

describe("servezone", function () {
    describe("start", function () {
        it("should start servezone on port", function () {
            servezone.start({
                port: 3000,
                authToken: "test"
            });
        });
        it("should react to websocket requests", function(done) {
            this.timeout(10000);
            let socket = socketIoClient("http://localhost:3000",{});
            socket.on("requestAuth", function(){
                console.log("server requested authentication");
                socket.emit("dataAuth",{
                    secret:"hello"
                });
            });
        });
        it("should close the server",function(){
            servezone.stop();
        })
    })
});