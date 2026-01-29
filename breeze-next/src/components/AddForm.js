import { useBlog } from '@/hooks/blog'
import Modal from './Modal'
import { useState } from 'react'
import Swal from 'sweetalert2'

const AddForm = ({ isOpen, setIsOpen, isLoading, setisLoading }) => {
    const { addBlog } = useBlog()
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        image: null,
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleFileChange = e => {
        const file = e.target.files[0]
        const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg']

        if (!ALLOWED_TYPES.includes(file.type)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be JPG, JPEG, Or PNG',
            })

            e.target.value = null

            setFormData({
                ...formData,
                image: null,
            })
        }

        if (file.size > 2 * 1024 * 1024) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'File Must Be Under 2mb',
            })

            e.target.value = null

            setFormData({
                ...formData,
                image: null,
            })
        }

        if (file) {
            {
                setFormData({
                    ...formData,
                    image: file,
                })
            }
        }
    }

    const handleAdd = async e => {
        e.preventDefault()
        setisLoading(true)

        try {
            const result = await addBlog(formData)

            if (result) {
                Swal.fire({
                    title: 'Success',
                    text: 'Blog Added Successfully!?',
                    icon: 'success',
                })
                setFormData({
                    title: '',
                    subtitle: '',
                    content: '',
                    image: null,
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

    return (
        <Modal open={isOpen} setIsOpen={setIsOpen}>
            <h1 className="text-center md:text-3xl text-xl font-bold">
                Add Blog
            </h1>
            <form onSubmit={handleAdd}>
                <ul>
                    <li className="flex justify-center mt-5 gap-10">
                        <label htmlFor="title" className="w-12">
                            Title
                        </label>
                        <input
                            value={formData.title}
                            onChange={handleChange}
                            type="text"
                            name="title"
                            className="md:w-96 md:h-12 w-52 h-7"
                        />
                    </li>
                    <li className="flex justify-center gap-10 mt-2">
                        <label htmlFor="subtitle" className="w-12">
                            Subtitle
                        </label>
                        <input
                            value={formData.subtitle}
                            onChange={handleChange}
                            type="text"
                            name="subtitle"
                            className="md:w-96 md:h-12 w-52 h-7"
                        />
                    </li>
                    <li className="flex justify-center gap-10 mt-2 ">
                        <label htmlFor="content" className="w-12">
                            Content
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={handleChange}
                            name="content"
                            className="md:w-96 md:h-40 w-52 h-32"
                        />
                    </li>
                    <li className="flex justify-center gap-10 mt-5">
                        <label htmlFor="image" className="w-12">
                            Image
                        </label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            name="image"
                            className="md:w-96 w-52"
                        />
                    </li>
                    <li className="flex justify-center mt-12">
                        <button
                            type="submit"
                            className="px-12 py-4 primary-bg text-white rounded-xl">
                            {isLoading ? 'Adding. . .' : 'Add'}
                        </button>
                    </li>
                </ul>
            </form>
        </Modal>
    )
}
export default AddForm
