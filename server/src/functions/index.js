import * as functions from "firebase-functions";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Orm from './Orm';
import admin from "./admin/index";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

// parse application/json
app.use(bodyParser.json());


const adminroutes = Object.keys(admin);
for (let ix = 0; ix < adminroutes.length; ix++) {
  const controller = admin[adminroutes[ix]]({Orm});

  app.use(`/admin/${adminroutes[ix]}`, controller);
}

// app.use('/admin', )

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);