"use strict";
require("typings-test");
const should = require("should");
const request = require("request");
const socketIoClient = require("socket.io-client");
const servezone = require("../dist/index");
describe("servezone", function () {
    describe("start", function () {
        it("should start servezone on port", function () {
            servezone.start({
                port: 3000,
                authToken: "test"
            });
        });
        it("should return a string as answer for a normal request", function (done) {
            request('http://localhost:3000', function (error, response, body) {
                should.equal(body, "Looking for something?");
                done();
            });
        });
        it("should react to websocket requests", function (done) {
            this.timeout(10000);
            let socket = socketIoClient("http://localhost:3000", {});
            socket.on("requestAuth", function () {
                console.log("server requested authentication");
                socket.emit("dataAuth", {
                    secret: "hello"
                });
            });
        });
        it("should close the server", function () {
            servezone.stop();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDbEMsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsTUFBTyxjQUFjLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUNwRCxNQUFPLFNBQVMsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDZCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsTUFBTTthQUNwQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxVQUFVLElBQUk7WUFDdEUsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO2dCQUM1RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsVUFBUyxJQUFJO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLHVCQUF1QixFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO29CQUNuQixNQUFNLEVBQUMsT0FBTztpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=