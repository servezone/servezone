import * as plugins from "./servezone.plugins";

import { Db } from "smartdata";

export class SzDb {
  db: Db;
  constructor() {
    this.db = new Db({
      db: process.env.RDB_DB,
      host: process.env.RDB_HOST,
      user: process.env.RDB_USER,
      password: process.env.RDB_PASS,
      port: parseInt(process.env.RDB_PORT)
    });
  }

  async connect() {
    this.db.setSsl(process.env.RDB_CERT, "base64");
    await this.db.connect();
  }

  async close() {
    await this.db.close();
  }
}
