import { NextResponse } from "next/server";
import formData from "form-data";

import Mailgun from "mailgun.js";

export const GET = (request) => {
  return NextResponse.json({ message: "coucou" }, { status: 200 });
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name, email, telephone, subject, message } = body;

    // ==+> utilisation de Mailgun
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "Damien",

      key: process.env.MAILGUN_API_KEY,
    });

    const messageData = {
      from: `${name} ${email}`,
      to: "damien.bourcheix@gmail.com",
      subject: `Online - ${subject}`,
      text: `${message}\n${name}\n${telephone}\n${email}`,
    };

    const response = await client.messages.create(
      process.env.MAILGUN_DOMAIN,
      messageData
    );

    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    console.error("catch>>", error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
};
