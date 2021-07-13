import express, { Request, Response } from "express";
// crude

const router = express.Router()

router.get('/api/todos', [], (req: Request, res: Response) => {
    return res.send('the todo')
});

router.post('/api/todos', (req, res) => {
    return res.send('hello');
});

export { router as usersRouter }
