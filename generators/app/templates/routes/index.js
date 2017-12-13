const express = require('express');
const router = express.Router();
const auth = require('http-auth');
const aUnm = process.env.CONTROLLER_NAME || 'admin';
const aPw = process.env.CONTROLLER_PW || 'someAmazingP@$$w0rd';

// Configure basic auth
var basic = auth.basic(
  {
    realm: 'SUPER SECRET STUFF'
  },
  (username, password, callback) => {
    callback(username === aUnm && password === aPw);
  }
);

var authMiddleware = auth.connect(basic);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: '<%= pName %>' });
});

/* GET controller page. */
router.get('/control', authMiddleware, (req, res) => {
  res.render('control', { title: '<%= pName %> Controller' });
});

module.exports = router;
