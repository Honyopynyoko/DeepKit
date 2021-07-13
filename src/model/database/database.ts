import { MongoDatabaseAdapter } from "@deepkit/mongo";
import { Database } from "@deepkit/orm";
import { FilterQuery } from "mongodb";
import User from '../user';

export default class DB {
    public uri: string = "";
    async connection() {
        const db = new Database(new MongoDatabaseAdapter(this.uri), [User]);
        await db.migrate();
        return db;
    }

    async insert(insertedObject: object) {
        (await this.connection()).persist(insertedObject);
        console.log("Insert completed");
    }

    async read(){
        return (await this.connection()).query(User).select("username").find();
    }

    async remove(value: string){
        (await this.connection()).remove({value});
        console.log("Removal of ${value}");
    }
    /**
     *
     */
    constructor(URI: string) {
        this.uri = URI;
    }
}