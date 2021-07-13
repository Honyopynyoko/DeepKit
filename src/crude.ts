import { json } from "body-parser";
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://honyo:123@cluster0.krotx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function write(value: string){
    await client.connect();

    const database = client.db('sample_userlist');
    const users = database.collection('users');

    const doc = { "user": value };
    const result = await database.collection(doc);
    console.log('${result.insertedCount} document was inserted with the _id: ${result.insertedId}');
}
