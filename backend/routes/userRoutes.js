const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP } = require('../controllers/userControllers');

router.post('/send', sendOTP);      // POST /api/getotp/send
router.post('/verify', verifyOTP);  // POST /api/getotp/verify

module.exports = router;
