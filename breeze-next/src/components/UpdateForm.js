const { useState } = require('react')
import { useBlog } from '@/hooks/blog'
import Modal from './Modal'
import Swal from 'sweetalert2'

const UpdateForm = ({ blog, isOpen, setIsOpen, isLoading, setisLoading }) => {
    const [title, setTitle] = useState(blog.title || '')
    const [subtitle, setSubtitle] = useState(blog.subtitle || '')
    const [content, setContent] = useState(blog.content || '')
    const { updateBlog } = useBlog()

    const [formData, setFormData] = useState({
        title: blog.title || '',
        subtitle: blog.subtitle || '',
        content: blog.content || '',
    })

    const handleUpdate = async e => {
        e.preventDefault()
        setisLoading(true)

        try {
            const result = await updateBlog(
                blog.id,
                formData.title,
                formData.subtitle,
                formData.content,
            )

            if (result) {
                Swal.fire({
                    title: 'Success',
                    text: 'Blog Updated Successfully!?',
                    icon: 'success',
                })
                setFormData({
                    title: '',
                    subtitle: '',
                    content: '',
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

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Modal open={isOpen} setIsOpen={setIsOpen}>
            <h1 className="text-center text-3xl font-bold">Update Blog</h1>
            <form onSubmit={handleUpdate}>
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
                            className="md:w-96 md:h-12 w-52 h-8"
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
                            className="md:w-96 md:h-12 w-52 h-8"
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
                            className="md:w-96 md:h-48 w-52 h-40"
                        />
                    </li>
                    <li className="flex justify-center mt-12">
                        <button
                            type="submit"
                            className="px-12 py-4 primary-bg text-white rounded-xl">
                            {isLoading ? 'Editing. . .' : 'Edit'}
                        </button>
                    </li>
                </ul>
            </form>
        </Modal>
    )
}

export default UpdateForm
