const express = require('express');
const router = express.Router();
const reservationApi = require('../api/reservation.api');
var authCheck = require('../middlewares/auth.middleware').authenticate();


router.get('/', authCheck, reservationApi.getReservationsBySomeIdAndUserId);
router.get('/all', reservationApi.getReservations);

module.exports = router;
