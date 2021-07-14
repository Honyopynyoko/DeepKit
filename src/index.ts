import express from "express";
import { json } from "body-parser";
import { usersRouter } from './routes/userGET';
import database from "./model/database/database";
import User from './model/user'; 

const app = express();
const port = 3000;
export const uri = "mongodb+srv://honyo:123@cluster0.krotx.mongodb.net/Users?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Send completed');
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})

async function main() {
    const db = new database(uri);
    db.connection();
}

app.use(usersRouter);
app.use(json);

main().catch(console.dir);
