import {expect, tap} from 'tapbundle'

import * as servezone from '../dist/index'

let testCluster: servezone.SzCluster

tap.test('servezone', async () => {
  testCluster = new servezone.SzCluster()
  expect(testCluster.szManager).to.be.instanceof(servezone.SzManager)
})

tap.test('servezone should start server', async () => {
  await testCluster.szManager.startServer()
})

tap.test('shipzone should be able to schedule app', async () => {
  
})

tap.test('servezone should end server', async () => {
  await testCluster.szManager.terminate()
})

tap.start()
