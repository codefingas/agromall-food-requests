import * as functions from "firebase-functions";
import express from "express";
import * as auth from "firebase-functions";
import Auth from './authentication';
import admin from "./admin/index";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO DORO");
});

const adminroutes = Object.keys(admin);
for (let ix = 0; ix < adminroutes.length; ix++) {

    const controller = admin[adminroutes[ix]]({Auth})

  app.use(`/admin/${adminroutes[ix]}`, controller);
}

// app.use('/admin', )

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
