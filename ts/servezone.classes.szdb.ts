import * as plugins from './servezone.plugins';

import { SmartdataDb } from '@pushrocks/smartdata';

export class SzDb {
  db: SmartdataDb;
  constructor(connectionOptions) {
    this.db = new SmartdataDb(connectionOptions);
  }

  async connect() {
    await this.db.connect();
  }

  async close() {
    await this.db.close();
  }
}
