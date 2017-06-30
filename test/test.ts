import {expect, tap} from 'tapbundle'

import * as servezone from '../dist/index'

let testManager: servezone.SzManager

tap.test('servezone', async () => {
  testManager = new servezone.SzManager()
  expect(testManager).to.be.instanceof(servezone.SzManager)
})

tap.start()
