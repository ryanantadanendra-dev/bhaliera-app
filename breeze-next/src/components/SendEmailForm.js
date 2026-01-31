'use client'

import { useState } from 'react'

const SendEmailForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })

        const data = await res.json()
        alert(data.success ? 'Email sent!' : 'Failed to send')
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul className="w-full">
                <li>
                    <h2 className="text-5xl font-normal text-center md:text-start">
                        Get in Touch
                    </h2>
                </li>
                <li className="mt-12">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Input Your Name. . ."
                        className="w-full"
                    />
                </li>
                <li className="mt-3">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Input Your Email. . ."
                        className="w-full"
                    />
                </li>
                <li className="mt-3">
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Input Your Message. . ."
                        className="w-full h-56"
                    />
                </li>
                <li className="flex justify-center md:justify-end">
                    <button
                        type="submit"
                        className="text-white px-12 py-3 bg-[#DFAE74] mt-5">
                        Send
                    </button>
                </li>
            </ul>
        </form>
    )
}
export default SendEmailForm
