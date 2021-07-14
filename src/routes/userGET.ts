import express, { Request, Response } from "express";
import database from "../model/database/database";
import { uri } from "../index";

const router = express.Router()

router.get('/api/users', async (req: Request, res: Response) => {
    const db = new database(uri);
    const userList = await db.readAll();
    return res.json(userList);
});

router.get('/api/user/:username', async (req, res) => {
    const db = new database(uri);
    const user = await db.read(req.params.username);
    return res.json(user);
})

export { router as usersRouter }
