import axios from "axios";
import { NextApiResponse } from "next";

function verifyUser(captcha: string, res: NextApiResponse) {
  if (!captcha) {
    return res.json({ success: false, msg: "Captcha is not checked" });
  }
  const verifyUrl = `${process.env.API_URL}?secret=${process.env.PRIVATE_RECAPTCHA_KEY}&response=${captcha}`;

  return axios({ url: verifyUrl, method: "post" })
    .then((body: any) => {
      body = JSON.parse(body);
      return body.success;
    })
    .catch((err) => {
      console.error(err);
    });
}

export { verifyUser };
