import express from "express";
import { json } from "body-parser";
import { usersRouter } from './routes/userGET';
import database from "./model/database/database";

const app = express();
const port = 3000;
//export const uri = "mongodb+srv://<Username>:<Password>@cluster0.krotx.mongodb.net/Users?retryWrites=true&w=majority";
export const uri = "mongodb://127.0.0.1:27017/profiles";
app.get('/', (req, res) => {
    res.send('Send completed');
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})

async function main() {
    const db = new database(uri);
    await db.connection();
}

app.use(usersRouter);
app.use(json);

main().catch(console.dir);
