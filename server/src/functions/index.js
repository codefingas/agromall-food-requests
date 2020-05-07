import * as functions from 'firebase-functions';
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("HELLO DORO");
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
