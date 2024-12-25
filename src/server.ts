import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
// import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import pool from './config/database';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();


const port =  process.env.PORT || 3000;
app.use(bodyParser.json());
// app.use(cors());
app.use(express.json());


(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connected:', result.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
})();


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
    console.log(`starting app on: ${port}`);
});
export default app;