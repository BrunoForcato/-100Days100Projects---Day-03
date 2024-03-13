import express from 'express';
import users from '../data/userMock.js';

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;

    const userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
        res.json(userFound);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

export default router;
