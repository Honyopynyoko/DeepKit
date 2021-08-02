import { MongoDatabaseAdapter } from "@deepkit/mongo";
import { Database } from "@deepkit/orm";
import User from '../user';

export default class DB {
    // Initialising connection and automatically running .migrate
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

    async read(readObject: string){
        return (await this.connection()).query(User).filter({username: `${ readObject }`}).findOne();
    }

    async readAll(){
        return (await this.connection()).query(User).find();
    }
    async remove(removeObject: string){
        const user = await this.read(removeObject);
        (await this.connection()).remove(user);
        console.log(`Object ${removeObject} removed`);
    }
    /**
     * URI parameter needed to connect to MongoDB. Only application valid URI's are allowed.
     */
    constructor(URI: string) {
        this.uri = URI;
    }
}
