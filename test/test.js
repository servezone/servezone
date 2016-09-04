"use strict";
require("typings-test");
const should = require("should");
const servezone = require("../dist/index");
let testSzManager;
describe("servezone", function () {
    describe("SzManager", function () {
        it("should create a new instance of SzManager", function () {
            testSzManager = new servezone.SzManager();
            should(testSzManager).be.instanceof(servezone.SzManager);
        });
        it("should connect to a database", function () {
            testSzManager;
        });
        it("should start a smartsocket server");
        it("should");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFFbEMsTUFBTyxTQUFTLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFNUMsSUFBSSxhQUFpQyxDQUFDO0FBRXRDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNsQixFQUFFLENBQUMsMkNBQTJDLEVBQUM7WUFDM0MsYUFBYSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyw4QkFBOEIsRUFBQztZQUM5QixhQUFhLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9