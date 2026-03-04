'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from '@/lib/axios'

const SendEmailForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/send/email', {
                name,
                email,
                message,
            })

            Swal.fire({
                title: 'Success!',
                text: 'Your Email Have Been Sent!.',
                icon: 'success',
            })
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            Swal.fire({
                title: 'error!',
                text: err,
                icon: 'error',
            })
        }
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
                        className="w-full text-black"
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
                        className="w-full text-black"
                    />
                </li>
                <li className="mt-3">
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Input Your Message. . ."
                        className="w-full h-56 text-black"
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
