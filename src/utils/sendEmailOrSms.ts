/* to sms */
import axios from "axios";
import qs from "querystring";
import { logger } from "./logger";
/* settings */
import sendgridMail from "@sendgrid/mail";
import { sendgridSettings } from "../config/sendgrid";

/* Hablame Settings */
const HABLAME_URI = 'https://api.hablame.co/sms/envio/'
const HABLAME_KEY = 'YSwBELayUv1HLbIrCrXXf7Tmij71Sn'

/* Sengrid Settings */

const SENDGRID_API_KEY='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'
const SENDGRID_FROM_EMAIL='lapanalera@mvplab.co'

sendgridMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async ({
  email,
  subject,
  content,
}: {
  email: any;
  subject?: string | undefined;
  content: any;
}): Promise<any> => {
  const mailDetail = {
    to: email,
    from: SENDGRID_FROM_EMAIL,
    subject,
    html: content,
  };
  try {
    let result_send = await sendgridMail.send(mailDetail);
    //logger.info(result_send)
    return result_send;
  } catch (e) {

    logger.error('sendEmail', e);
  }
};

export const sendSms = async ({
  phone,
  message,
  reference,
}: {
  phone: any;
  message?: string | undefined;
  reference: any;
}): Promise<any> => {
  const smsDetail = {
    // cliente: HABLAME_CLIENT,
    api: HABLAME_KEY,
    numero: `57${phone}`,
    sms: `${message}`,
    fecha: "",
    referencia: reference || "",
  };

  try {
    const { data } = await axios.post(HABLAME_URI, qs.stringify(smsDetail), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    logger.info("sms result");
    return data;
  } catch (e) {
    logger.error('Error sending an sms', e);
  }
};
