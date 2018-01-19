import * as plugins from "./servezone.plugins";

import { Db } from "smartdata";

export class SzDb {
  db: Db;
  constructor(connectionOptions) {
    this.db = new Db(connectionOptions);
  }

  async connect() {
    this.db.setSsl(process.env.RDB_CERT, "base64");
    await this.db.connect();
  }

  async close() {
    await this.db.close();
  }
}
