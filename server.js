const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {
  UserRoutes,
  OrdersRoutes,
} = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/acaidelivery', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', UserRoutes);
app.use('/order', OrdersRoutes);

app.listen(PORT, () => { console.clear(); console.log(`Ouvindo na porta ${PORT}`) });