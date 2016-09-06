"use strict";
require('typings-test');
const should = require('should');
const servezone = require('../dist/index');
let testSzManager;
describe('servezone', function () {
    describe('SzManager', function () {
        it('should create a new instance of SzManager', function () {
            testSzManager = new servezone.SzManager();
            should(testSzManager).be.instanceof(servezone.SzManager);
        });
        it('should connect to a database', function () {
            testSzManager.connectDatabase();
        });
        it('should start a smartsocket server', function () {
            testSzManager.startServer();
        });
        it('should terminate a connection', function () {
            testSzManager.terminate();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FDUCxDQUFDLENBRG9CO0FBQ3JCLE1BQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFBO0FBRWpDLE1BQU8sU0FBUyxXQUFXLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLElBQUksYUFBa0MsQ0FBQTtBQUV0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDbEIsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1lBQzVDLGFBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUN6QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDNUQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDL0IsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO1lBQ3BDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQywrQkFBK0IsRUFBQztZQUMvQixhQUFhLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=