const { useBlog } = require('@/hooks/blog')
import { useEffect, useState } from 'react'
import Modal from './Modal'
import Image from 'next/image'
import Swal from 'sweetalert2'

const UpdateImageForm = ({
    id,
    image,
    isOpen,
    setIsOpen,
    isLoading,
    setIsLoading,
}) => {
    const { updateImage } = useBlog()
    const [formData, setFormData] = useState({
        image: null,
    })
    const [preview, setPreview] = useState(image ?? null)

    useEffect(() => {
        if (!formData.image) return

        const objectUrl = URL.createObjectURL(formData.image)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [formData.image])

    useEffect(() => {
        if (!image) return
        setPreview(image)
    }, [image, isOpen])

    const handleFileChange = e => {
        const file = e.target.files[0]
        if (!file) return

        setFormData(prev => ({
            image: file,
        }))
    }

    const handleUpdateImage = async e => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const result = await updateImage(id, formData.image)

            if (result) {
                Swal.fire({
                    title: 'Success',
                    text: 'Image Updated Successfully!?',
                    icon: 'success',
                })
                setFormData({
                    image: null,
                })
                setIsOpen(false)
                setFormData({ image: null })
                setPreview(null)
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message,
                icon: 'error',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal open={isOpen} setIsOpen={setIsOpen}>
            <h1 className="text-center text-3xl font-bold">Update Blog</h1>
            <form onSubmit={handleUpdateImage}>
                <ul>
                    <li className="flex justify-center mt-5 gap-10 px-5">
                        <div className="relative w-full h-56">
                            <img
                                src={
                                    preview.startsWith('blob')
                                        ? preview
                                        : `http://localhost:8000/${preview}`
                                }
                                alt="Uploaded image"
                                className="object-cover w-full h-full"
                                id="preview"
                            />
                        </div>
                    </li>
                    <li className="flex justify-center gap-10 md:mt-12 mt-20">
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
                            {isLoading ? 'Editing. . .' : 'Edit'}
                        </button>
                    </li>
                </ul>
            </form>
        </Modal>
    )
}

export default UpdateImageForm
