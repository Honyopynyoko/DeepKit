import express, { Request, Response } from "express";
import database from "../model/database/database";
import { uri } from "../index";
import User from "../model/user";

const router = express.Router()

// get all users
router.get('/api/users', async (req: Request, res: Response) => {
    const db = new database(uri);
    const userList = await db.readAll();
    return res.json(userList);
});

// get exactly one user
router.get('/api/user/:username', async (req, res) => {
    const db = new database(uri);
    const user = await db.read(req.params.username);
    return res.json(user);
})

// create a new user
router.post('/api/userAdd/:username', async (req, res) => {
    const db = new database(uri);
    const username = await db.read(req.params.username).toString();
    const user = new User(username);
    await db.insert(user);
    res.send("User: "+ username +" has been added!");
})

// remove user
router.delete('/api/userRemove/:username', async (req, res) => {
    const db = new database(uri);
    await db.remove(req.params.username);
    res.send(`Removal of ${req.params.username} is complete`);
})

// update user
router.put('/api/userUpdate/:username/:updateValue', async (req, res) => {
    const db = new database(uri);
    await db.update(req.params['username'], req.params['updateValue'])
    res.send(`Updating of ${req.params['username']} has been successfully, update value is ${req.params['updateValue']}`);
})

export { router as usersRouter }
