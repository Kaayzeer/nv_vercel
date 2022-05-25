import * as functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createFinancialYear, refreshFortnoxToken } from "./lib/fortnox";
import { Response } from "express";

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
exports.refreshFortnoxToken = functions.pubsub
  .schedule("every 30 minutes")
  .onRun(async () => {
    await refreshFortnoxToken();
  });

// Create Fortnox Financial year, On 30th day of December every year
exports.createFinancialYear = functions.pubsub
  .schedule("* * 30 12 *")
  .onRun(async () => {
    await createFinancialYear();
  });

const app = express();

const rawBodySaver = (req: any, res: Response, buf: any, encoding: any) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
};

const options = {
  verify: rawBodySaver,
};

app.use(bodyParser.json(options));
app.use(cors({ origin: "*" }));

// Add routes
const publicRoute = require("./routes/public");
const userRoute = require("./routes/user");
const paymentRoute = require("./routes/payment");
const fortnoxRoute = require("./routes/fortnox");

app.use("/payment", paymentRoute);
app.use("/public", publicRoute);
app.use("/user", userRoute);
app.use("/fortnox", fortnoxRoute);

export const api = functions.region(REGION).https.onRequest(app);
