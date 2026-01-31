'use client'

import Header from '@/app/(app)/Header'
import axios from '@/lib/axios'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useBlog } from '@/hooks/blog'

import Modal from '@/components/Modal'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { Html } from 'next/document'
import UpdateForm from '@/components/UpdateForm'
import AddForm from '@/components/AddForm'
import UpdateImageForm from '@/components/UpdateImageForm'

const Dashboard = () => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const { blogs, addBlog, updateBlog, deleteBlog, updateImage } = useBlog()
    const [modalName, setModalName] = useState('')

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = 'visible'
        }
    }, [isOpen])

    const handleDelete = async id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const result = await deleteBlog(id)
                    setisLoading(true)

                    if (result) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        })
                        setIsOpen(false)
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error.response?.data?.message,
                        icon: 'error',
                    })
                } finally {
                    setisLoading(false)
                }
            }
        })
    }

    const displayData = () => {
        if (blogs?.blogs.length == 0) {
            return <p>No Blog Yet!</p>
        } else {
            return (
                <table id="blogs-table">
                    <thead>
                        <tr>
                            <th className="w-6 text-sm md:text-xl text-center">
                                Id
                            </th>
                            <th className="w-32 text-sm md:text-xl text-center">
                                Title
                            </th>
                            <th className="w-40 text-sm md:text-xl text-center">
                                Subtitle
                            </th>
                            <th className="w-80 text-sm md:text-xl text-center">
                                Content
                            </th>
                            <th className="w-56 text-sm md:text-xl text-center">
                                Image
                            </th>
                            <th className="w-56 text-sm md:text-xl text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs?.blogs?.map((blog, index) => (
                            <tr
                                key={index}
                                className={`${blog.id % 2 == 1 ? `bg-gray-200` : `bg-white`}`}>
                                <td className="text-xs md:text-xl w-20 text-center">
                                    {blog.id}
                                </td>
                                <td className="text-center text-xs md:text-lg">
                                    <p className="truncate w-44">
                                        {blog.title}
                                    </p>
                                </td>
                                <td className="text-xs md:text-xl">
                                    <p className="truncate w-56 text-center">
                                        {blog.subtitle}
                                    </p>
                                </td>
                                <td className="whitespace-pre-line text-xs md:text-xl">
                                    <p className="truncate w-72">
                                        {blog.content}
                                    </p>
                                </td>
                                <td className="">
                                    <Image
                                        src={`http://localhost:8000/${blog.image}`}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                    <svg
                                        onClick={() => {
                                            setIsOpen(!isOpen)
                                            setModalName('updateForm')
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-3 md:w-5 mx-auto mt-3 cursor-pointer">
                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                    </svg>
                                    {modalName == 'updateForm' && (
                                        <UpdateImageForm
                                            id={blog.id}
                                            image={blog.image}
                                            isOpen={isOpen}
                                            setIsOpen={setIsOpen}
                                            isLoading={isLoading}
                                            setIsLoading={setisLoading}
                                        />
                                    )}
                                </td>
                                <td className="align-middle text-center">
                                    <div className="inline-flex gap-2">
                                        <svg
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                                setModalName('update')
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 md:w-5 mx-auto"
                                            viewBox="0 0 512 512">
                                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                        </svg>
                                        {modalName == 'update' && (
                                            <UpdateForm
                                                isOpen={isOpen}
                                                setIsOpen={setIsOpen}
                                                blog={blog}
                                                isLoading={isLoading}
                                                setisLoading={setisLoading}
                                            />
                                        )}
                                        <svg
                                            onClick={() => {
                                                handleDelete(blog?.id)
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="w-3 md:w-5 mx-auto">
                                            <path d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }

    return (
        <>
            {/* <Header title="Dashboard" /> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-12">
                    <svg
                        onClick={() => {
                            setIsOpen(!isOpen)
                            setModalName('add')
                        }}
                        className="md:w-10 w-8 lg:ms-10 ms-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            fill="#0f2742"
                            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        />
                    </svg>
                    <div className="flex justify-center overflow-hidden shadow-sm sm:rounded-lg mt-8 px-8 md:px-0">
                        {displayData()}
                    </div>
                </div>
                {modalName == 'add' && (
                    <AddForm
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isLoading={isLoading}
                        setisLoading={setisLoading}
                    />
                )}
            </div>
        </>
    )
}

export default Dashboard
