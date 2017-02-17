import 'typings-test'
import { expect } from 'smartchai'
import socketIoClient = require('socket.io-client')
import servezone = require('../dist/index')

let testSzManager: servezone.SzManager

describe('servezone', function () {
  describe('SzManager', function () {
    it('should create a new instance of SzManager', function () {
      testSzManager = new servezone.SzManager()
      expect(testSzManager).to.be.instanceof(servezone.SzManager)
    })
    it('should connect to a database', function () {
      testSzManager.connectDatabase()
    })
    it('should start a smartsocket server', function () {
      testSzManager.startServer()
    })
    it('should terminate a connection', function () {
      testSzManager.terminate()
    })
  })
})
