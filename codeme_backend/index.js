import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dbConnect from './config/connectdb.js';
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products",productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    dbConnect()
    console.log(`Server running on port ${PORT}`)
});
