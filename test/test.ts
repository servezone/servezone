import "typings-test";
import should = require("should");
import socketIoClient = require("socket.io-client");
import servezone = require("../dist/index");

let testSzManager:servezone.SzManager;

describe("servezone", function () {
    describe("SzManager", function () {
        it("should create a new instance of SzManager",function(){
            testSzManager = new servezone.SzManager();
            should(testSzManager).be.instanceof(servezone.SzManager);
        });
        it("should connect to a database",function(){
            testSzManager.connectDatabase();
        });
        it("should start a smartsocket server",function(){
            testSzManager.startServer();
        });
        it("should");
    });
});