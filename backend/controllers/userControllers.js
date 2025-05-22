process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { TWILIO_VERIFY_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

const sendOTP = async (req, res, next) => {
  const { countryCode = '+91', phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).send({ message: 'phoneNumber is required' });
  }

  try {
    const otpResponse = await client.verify.v2
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: `${countryCode}${phoneNumber}`,
        channel: 'sms',
      });

    res.status(200).send({
      message: 'OTP sent successfully!',
      data: otpResponse,
    });
  } catch (error) {
    res.status(error?.status || 400).send({
      message: error?.message || 'Something went wrong!',
    });
  }
};

const verifyOTP = async (req, res, next) => {
  const { countryCode = '+91', phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).send({ message: 'phoneNumber and otp are required' });
  }

  try {
    const verifiedResponse = await client.verify.v2
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: `${countryCode}${phoneNumber}`,
        code: otp,
      });

    if (verifiedResponse.status === 'approved') {
      return res.status(200).send({
        message: 'OTP verified successfully!',
        data: verifiedResponse,
      });
    } else {
      return res.status(400).send({
        message: 'OTP verification failed',
        data: verifiedResponse,
      });
    }
  } catch (error) {
    res.status(error?.status || 400).send({
      message: error?.message || 'Something went wrong!',
    });
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};
