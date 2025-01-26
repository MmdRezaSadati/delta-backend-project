import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully.');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});