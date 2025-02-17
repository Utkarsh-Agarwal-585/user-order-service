const express = require('express');
const { notifyUser } = require('./user/user.controller')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.post('/notify', notifyUser);

app.listen('3001', () => {
    console.log('Server is running on port 3001');
});