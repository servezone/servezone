import { expect, tap } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';
let testQenv = new Qenv('./', './.nogit/');

import * as servezone from '../ts/index';

tap.test('servezone', async () => {
  console.log('hi');
});

tap.start();
