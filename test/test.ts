import { expect, tap } from 'tapbundle'
import { Qenv } from 'qenv'
let testQenv = new Qenv('./','./.nogit/')

import * as servezone from '../ts/index'

let testCluster: servezone.SzCluster
let testDb: servezone.SzDb

tap.test('should setup a db', async () => {
  testDb = new servezone.SzDb();
  await testDb.connect();
})

tap.test('servezone', async () => {
  testCluster = new servezone.SzCluster()
  expect(testCluster.szManager).to.be.instanceof(servezone.SzManager)
})

tap.test('servezone should start server', async () => {
  await testCluster.szManager.startServer()
})

tap.test('shipzone should be able to schedule app', async () => {
  
})

tap.test('servezone should terminate correctly', async () => {
  await testCluster.szManager.close()
  await testDb.close()
})

tap.start()
