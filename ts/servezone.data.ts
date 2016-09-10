import * as plugins from './servezone.plugins'
import {Core, Model, Instance, Collection, Index, Property, ObjectID} from 'iridium'

class MyDatabase extends Core {
    Houses = new Model<HouseDocument, House>(this, House);
}

let myDb = new MyDatabase({ database: 'houses_test' });