import { expect, tap } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';
let testQenv = new Qenv('./', './.nogit/');

import * as servezone from '../ts/index';

let testServezone: servezone.ServeZone;
let testDb: servezone.SzDb;

tap.test('servezone', async () => {
  testServezone = new servezone.ServeZone({
    port: 8081
  });
});

tap.test('servezone should start server', async () => {
  await testServezone.startServer()
});

tap.test('shipzone should be able to schedule app', async () => {});

tap.test('servezone should terminate correctly', async () => {
  await testServezone.closeServer();
});

tap.start();
