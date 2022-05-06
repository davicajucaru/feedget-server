import { MailAdapter, SendMailData } from "../mail-adpater";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "001ee1ace09ed7",
    pass: "933b6064a48ced",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Team Feedget <oi@feedget.com>",
      to: "Davi Cajucaru <davicajucaru_20111@hotmail.com>",
      subject: subject,
      html: body,
    });
  }
}
