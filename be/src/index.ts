import * as functions from "firebase-functions";
import express from "express";
import * as bodyParser from "body-parser";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { verifyUser } from "../../utils/helpers";
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const app = express();
const main = express();
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
// webApi is your functions name, and you will pass main as 
// a parameter
export const webApi = functions.https.onRequest(main);

app.post("/api/send-email", async (req, res) => {
  res.send('jiepqwje;klqw')
  const { name, email, phone, message, captcha } = JSON.parse(req.body);

  sgMail.setApiKey(process.env.SENDGRID_KEY as string);
  console.log("hello");
  const msg = {
    from: "hello.mediahunters@gmail.com",
    to: "hello.mediahunters@gmail.com",
    subject: `${email} - ${phone} | ${name}`,
    content: [
      {
        type: "text/plain",
        value: message,
      },
    ],
  };

  if (verifyUser(captcha, res as any)) {
    await sgMail.send(msg as MailDataRequired);
    res.json({
      success: true,
      msg: "valid user",
    });
  }
});
