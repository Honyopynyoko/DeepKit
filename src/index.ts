import express from "express";
import { json } from "body-parser";
import { usersRouter } from './routes/users';
import database from "./model/database/database";
import User from './model/user'; 

const app = express();

async function main() {
    const db = new database("mongodb+srv://honyo:123@cluster0.krotx.mongodb.net/Users?retryWrites=true&w=majority");
    db.connection();
    //const users = await db.readAll();
    //const user = await db.read("Jojo");
    db.remove("Jojo");
    //console.log(users);
    //console.log(user);
    // await db.remove("Jojo")
}

main().catch(console.dir);

app.use(json);
app.use(usersRouter);

app.get('/', (req, res) => {
    res.send('Send completed');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000');
})

