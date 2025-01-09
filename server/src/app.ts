import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cornRoutes from './modules/corns/routes/corn.route';

const app: Application = express();

// Cors
app.use(
    cors({ origin: 'http://localhost:3000', allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Headers'] })
);

// Parse requests of content-type - application/json
app.use(express.json());

// Routes Corn
app.use(cornRoutes);

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple initial route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to back test for Base Labs.' });
});

export default app;
