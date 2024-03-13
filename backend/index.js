import express from 'express'
import bodyParser from 'body-parser'
import loginRoutes from './routes/login.js'
import cors from 'cors'

const app = express();
const PORT = 5000;

const allowedOrigins = ['http://localhost:4200'];

const options = {
    origin: allowedOrigins
};
// Then pass these options to cors:
app.use(cors(options));
app.use(bodyParser.json());

app.use('/login', loginRoutes)

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))