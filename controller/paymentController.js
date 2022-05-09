import expressAsyncHandler from 'express-async-handler';
import Stripe from 'stripe';
import uuid from 'uuid';
export const makePayment = expressAsyncHandler(async (req, res) => {
  // write code for stripe payment and save returned data to database
  const { email, token, payment, membership } = req.body;
  try {
    const idempotencyKey = uuid();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: payment,
        currency: 'eur',
        receipt_email: email,
        description: `${membership} membership for mindsetts`,
      },
      { idempotencyKey }
    );
    res.status(200).json({
      paymentInfo: paymentIntent,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
});

export default makePayment;
