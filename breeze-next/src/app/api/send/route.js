// import nodemailer from 'nodemailer'

// export async function POST(req) {
//     try {
//         const { name, email, message } = await req.json()

//         const transporter = nodemailer.createTransport({
//             host: 'mail.bhaliera.com',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: process.env.NEXT_SMTP_USER,
//                 pass: process.env.NEXT_SMTP_PASS,
//             },
//         })

//         await transporter.sendMail({
//             from: `"${name}" <${process.env.NEXT_SMTP_USER}>`,
//             to: process.env.NEXT_SMTP_USER,
//             replyTo: email,
//             subject: 'New Contact Form Message',
//             html: `
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p>${message}</p>
//       `,
//         })

//         return Response.json({ success: true })
//     } catch (err) {
//         console.error(err)
//         return Response.json(
//             {
//                 success: false,
//                 error: err.message,
//             },
//             { status: 500 },
//         )
//     }
// }

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {
        const { name, email, message } = await req.json()

        await resend.emails.send({
            from: 'onboarding@resend.dev', // ganti setelah verify domain
            to: process.env.NEXT_SMTP_USER,
            replyTo: email,
            subject: 'New Contact Form Message',
            html: `
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p>${message}</p>
            `,
        })

        return Response.json({ success: true })
    } catch (err) {
        console.error(err)
        return Response.json(
            { success: false, error: err.message },
            { status: 500 },
        )
    }
}
