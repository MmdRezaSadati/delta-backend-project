import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const port = 3000;

app.use(express.json());

const sequelize = new Sequelize('yourdatabase', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});