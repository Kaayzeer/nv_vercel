import * as functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const REGION = "europe-west1";

admin.initializeApp(); 

// Ignore undefined
admin.firestore().settings({
  ignoreUndefinedProperties: true,
})

// Disable new users
exports.disableNewUser = functions.region(REGION).auth.user().onCreate(async (event) => {
  const uid = event.uid; // The Firebase user.

  // disable
  admin.auth().updateUser(uid, {
    disabled: true,
  });

  // Remove token set
  admin.auth().revokeRefreshTokens(uid)
      .then(() => {
        return admin.auth().getUser(uid);
      });
});

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true}));

// Add routes
const routeRoute = require("./routes/route");

app.use("/route", routeRoute)

export const api = functions.region(REGION).https.onRequest(app);