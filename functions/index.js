const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Kw1iNSGKLsoFh1ZnC490CUUfqthdayfGwWzMPHLm3jdyv6F3iKbye3WKS1hQwCkjKBkD48bF3AaT65EkNXUWIVe00ui6sgX8N"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  try {
    const total = request.query.total;

    console.log("Payment Request Recieved---for this amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
    console.log(paymentIntent);
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-204c5/us-central1/api
