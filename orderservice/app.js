const express = require('express');
const { createOrder } = require('./order/order.controller')
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));


app.post('/order', createOrder);

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});