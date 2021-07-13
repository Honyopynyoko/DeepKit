import express, { query } from "express";
import { json } from "body-parser";
import { usersRouter } from './routes/users';
import database from "./model/database/database";
import User from './model/user'; 
import { MongoDatabaseAdapter } from '@deepkit/mongo';
import { t, entity } from '@deepkit/type';
import { Database, Query } from "@deepkit/orm";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

async function main() {
    const db = new database("mongodb+srv://<Username>:<Password>@cluster0.krotx.mongodb.net/Users?retryWrites=true&w=majority");
    db.connection();
    //db.insert(new User("Jusukisorono"));
    //db.remove("Jusukisorono")

    await console.log(db.read());
}

/*
const uri = "mongodb+srv://honyo:123@cluster0.krotx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function main() {
    try {
        await client.connect();

        const database = client.db('sample_userlist');
        const users = database.collection('users');

        const query = { name: 'Jousif' };
        const user = await users.findOne(query);

        console.log(user);
    } finally {
        await client.close();
    }
}
*/
main().catch(console.dir);


app.use(json);
app.use(usersRouter);

app.get('/', (req, res) => {
    res.send('Send completed');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000');
})

