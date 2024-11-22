// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';


const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
    
    res.send('storefront api!');
});

app.listen(3000, () => {
    console.log(`starting app on: ${address}`);
});
export default app;