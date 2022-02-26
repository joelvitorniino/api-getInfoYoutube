import cors from 'cors';
import express from 'express';
import routes from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});