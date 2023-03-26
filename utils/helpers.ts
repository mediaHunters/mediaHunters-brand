import { NextApiResponse } from "next";
import axios from "axios";

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

function getHash(text: string) {
  let hash = 0;
  if (text.length === 0) {
    return hash.toString();
  }
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}


export { getHash, verifyUser };
