import * as functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { refreshFortnoxToken } from "./lib/fortnox";

const REGION = "europe-west1";

if (!admin.apps.length) {
  admin.initializeApp();

  // Ignore undefined
  admin.firestore().settings({
    ignoreUndefinedProperties: true,
  });
}

// Disable new users
exports.disableNewUser = functions
  .region(REGION)
  .auth.user()
  .onCreate(async (event) => {
    const uid = event.uid; // The Firebase user.

    // disable
    admin.auth().updateUser(uid, {
      disabled: true,
    });

    /*
  // Remove token set
  admin.auth().revokeRefreshTokens(uid).then(() => {
    return admin.auth().getUser(uid);
  });
  */
  });

// Refresh function for refreshing tokens
exports.testFunction = functions.pubsub
  .schedule("every 30 minutes")
  .onRun(async () => {
    await refreshFortnoxToken();
  });

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Add routes
const publicRoute = require("./routes/public");
const userRoute = require("./routes/user");
const paymentRoute = require("./routes/payment");
const fortnoxRoute = require("./routes/fortnox");

app.use("/public", publicRoute);
app.use("/user", userRoute);
app.use("/payment", paymentRoute);
app.use("/fortnox", fortnoxRoute);

export const api = functions.region(REGION).https.onRequest(app);
