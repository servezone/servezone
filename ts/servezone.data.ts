import * as plugins from './servezone.plugins'
import {Core, Model, Instance, Collection, Index, Property, ObjectID} from 'iridium'
import { SzNode } from './servezone.classes.sznode'

class Database extends Core {
    SzNodes = new Model<HouseDocument, SzNode>(this, SzNode)
}

export let database = new Database({
            host: 'localhost',
            port: 8000,
            username: 'someuser',
            password: 'somepassword'
})
