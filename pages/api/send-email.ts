import { NextApiRequest, NextApiResponse } from "next";
import { verifyUser } from "../../utils/helpers";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

const SendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  console.table(req.body)
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

  if (verifyUser(captcha, res)) {
    await sgMail.send(msg as MailDataRequired);
    res.json({
      success: true,
      msg: "valid user",
    });
  }
};

export default SendEmail;
