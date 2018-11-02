const express = require('express');
const router = express.Router();
const payApi = require('../api/pay.api');
var authCheck = require('../middlewares/auth.middleware').authenticate();


router.post('/', authCheck, payApi.pay);

module.exports = router;
