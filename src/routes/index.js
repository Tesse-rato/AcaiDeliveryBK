const User = require('../models/user');
const Orders = require('../models/orders');
const UserRoutes = require('express').Router();
const OrdersRoutes = require('express').Router();

UserRoutes.post('/auth', (req, res) => {

  const { userName, password } = req.body;

  User.find({ userName }).then(user => {

    if (!user.length) return res.status(400).send({ error: 'User not found' });

    if (user[0].password == password) {
      return res.send(user[0]);
    } else {
      return res.status(400).send({ error: 'Password don\'t match' });
    }

  }).catch(err => {
    console.log(err);
    res.status(400).send(err);
  });

});

UserRoutes.post('/verify-username', (req, res) => {
  const { userName } = req.body;

  console.log('UAISUDA')

  User.find({ userName }).then(user => {

    if (!user.length) return res.send();

    return res.status(400).send({ error: 'User already registred' });

  }).catch(err => {
    console.log(err);
    res.status(400).send({ error: 'Bad request' });
  });
});

UserRoutes.post('/register', (req, res) => {

  const {
    name,
    userName,
    password,
    street,
    district,
    number,
    city,
  } = req.body;

  {
    if (!name) {
      return res.status(400).send({
        error: 'Missing Name'
      })
    }
    else if (!userName) {
      return res.status(400).send({
        error: 'Missing UserName'
      })
    }
    else if (!password) {
      return res.status(400).send({
        error: 'Missing Password'
      });
    }
    else if (!street) {
      return res.status(400).send({
        error: 'Missing Street'
      });
    }
    else if (!district) {
      return res.status(400).send({
        error: 'Missing District'
      });
    }
    else if (!number) {
      return res.status(400).send({
        error: 'Missing Number'
      });
    }
    else if (!city) {
      return res.status(400).send({
        error: 'Missing City'
      });
    }
  }

  User.create({
    name,
    userName,
    password,
    street,
    district,
    number,
    city
  }).then(user => {
    return res.send(user);
  }).catch(err => {
    console.log(err);
    res.status(400).send();
  })


});

UserRoutes.post('/opusLogin', (req, res) => {

  console.log({
    body: { ...req.body },
    headers: { ...req.headers },
    environment: 'Aqui no servidor do Acai'
  });

  return res.send();
});

OrdersRoutes.post('/', (req, res) => {

  const { userId, cups, adress, payment } = req.body;

  if (!userId || !cups) return res.status(400).send({ error: 'Request malformated' });

  Orders.create({ userId, cups, adress, payment }).then(order => {
    console.log(order);
    return res.send();

  }).catch(err => {
    console.log(err);
    res.status(400).send({ error: 'Deu ruim aqui' });
  })

})

module.exports = {
  UserRoutes,
  OrdersRoutes
};