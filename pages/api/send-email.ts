import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { name, email, phone, message } = JSON.parse(req.body);

  sgMail.setApiKey(
    "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"
  );

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

  await sgMail.send(msg);
  res.json({
    success: true,
    msg: "valid user",
  });
};

// SENDGRID_PRIVATE_KEY=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
// RECAPTCHA_PRIVATE_KEY=6LdrYsYhAAAAALPExHun2SqVLQRLMw7_Y_3WjcKW
// RECAPTCHA_API_URL=https://www.google.com/recaptcha/api/siteverify
