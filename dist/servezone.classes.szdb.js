"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const smartdata_1 = require("smartdata");
class SzDb {
    constructor() {
        this.db = new smartdata_1.Db({
            db: process.env.RDB_DB,
            host: process.env.RDB_HOST,
            user: process.env.RDB_USER,
            password: process.env.RDB_PASS,
            port: parseInt(process.env.RDB_PORT)
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db.setSsl(process.env.RDB_CERT, "base64");
            yield this.db.connect();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.close();
        });
    }
}
exports.SzDb = SzDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3pkYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlcnZlem9uZS5jbGFzc2VzLnN6ZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHlDQUErQjtBQUUvQjtJQUVFO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGNBQUUsQ0FBQztZQUNmLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07WUFDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1lBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7WUFDOUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssT0FBTzs7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUssS0FBSzs7WUFDVCxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUFBO0NBQ0Y7QUFwQkQsb0JBb0JDIn0=