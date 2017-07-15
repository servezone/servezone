import {expect, tap} from 'tapbundle'

import * as servezone from '../dist/index'

let testManager: servezone.SzManager

tap.test('servezone', async () => {
  testManager = new servezone.SzManager()
  expect(testManager).to.be.instanceof(servezone.SzManager)
})

tap.test('servezone should start server', async () => {
  await testManager.startServer()
})

tap.test('shipzone should be able to schedule app', async () => {
  
})

tap.test('servezone should end server', async () => {
  await testManager.terminate()
})

tap.start()
