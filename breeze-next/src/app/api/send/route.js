import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        const { name, email, message } = await req.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_GMAIL_USER,
                pass: process.env.NEXT_GMAIL_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"${name}" <${process.env.NEXT_GMAIL_USER}>`,
            to: process.env.NEXT_GMAIL_USER,
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
        return Response.json({ success: false }, { status: 500 })
    }
}
