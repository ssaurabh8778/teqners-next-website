import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// type ReqData = {
//     to: string;
//     from: string;
//     subject: string;
//     message: string;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { from, to, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS,
        },
    });

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: message,
    };

    return new Promise<void>((resolve) => {
        transporter.sendMail(mailOptions, function (error, info) {
            let resCode = 200;
            if (error) {
                resCode = 500;
            }
            res.status(resCode).send({ error, info });
            resolve();
        });
    });
}
