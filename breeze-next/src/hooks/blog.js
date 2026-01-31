import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export const useBlog = () => {
    const params = useParams()
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const { data: blogs, mutate } = useSWR('/api/blogs', async url => {
        try {
            const response = await axios.get('/api/blogs')

            return response.data
        } catch (error) {
            throw error
        }
    })

    const addBlog = async formData => {
        await csrf()

        const data = new FormData()

        data.append('title', formData.title)
        data.append('subtitle', formData.subtitle)
        data.append('content', formData.content)
        if (formData.image) {
            data.append('image', formData.image)
        }

        const response = await axios.post('/api/blog/add', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        return response.data.success
    }

    const updateBlog = async (id, title, subtitle, content) => {
        await csrf()

        const data = new FormData()

        data.append('title', title)
        data.append('subtitle', subtitle)
        data.append('content', content)
        data.append('_method', 'PUT')

        const response = await axios.post(`/api/blog/update/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.statusText == 'Created') {
            mutate()
        }

        return response.data.success
    }

    const deleteBlog = async id => {
        await csrf()

        const response = await axios.delete(`/api/blog/delete/${id}`)

        if (response.status === 201) {
            mutate()
        }

        return response.data.success
    }

    const updateImage = async (id, image) => {
        await csrf()

        const data = new FormData()

        if (image) {
            data.append('image', image)
        }
        data.append('_method', 'PUT')

        const response = await axios.post(
            `/api/blog/update/image/${id}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        )

        if (response.status === 201) {
            mutate()
        }

        return response.data.success
    }

    const { data: latests } = useSWR('/api/blogs/latest', async url => {
        try {
            const response = await axios.get('/api/blogs/latest')
            return response.data
        } catch (error) {
            throw error
        }
    })

    return {
        blogs,
        addBlog,
        updateBlog,
        deleteBlog,
        updateImage,
        latests,
    }
}
