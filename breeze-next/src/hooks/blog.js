// hooks/useBlog.js
'use client'

import axios from '@/lib/axios'
import { useBlogPublic } from './blogPublig'

// CSRF helper
const ensureCSRF = async () => {
    await axios.get('/sanctum/csrf-cookie')
}

export const useBlog = () => {
    const { mutate } = useBlogPublic()
    // // Main blogs data
    // const {
    //     data: blogs,
    //     error: blogsError,
    //     mutate,
    //     isLoading,
    //     isValidating,
    // } = useSWR(shouldFetch ? '/api/blogs' : null, fetcher, swrConfig)

    // Latest blogs data
    // const {
    //     data: latests,
    //     error: latestsError,
    //     mutate: mutateLatests,
    //     isLoading: isLoadingLatests,
    // } = useSWR('/api/blogs/latest', fetcher, swrConfig)

    // Add blog with optimistic update
    const addBlog = async formData => {
        try {
            await ensureCSRF()

            const data = new FormData()
            data.append('title', formData.title)
            data.append('subtitle', formData.subtitle)
            data.append('content', formData.content)

            if (formData.image) {
                data.append('image', formData.image)
            }

            const response = await axios.post('/api/blog/add', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

            // // Revalidate both lists
            // await Promise.all([mutate(), mutateLatests()])

            // if (response.status === 201) mutate()

            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || 'Failed to add blog',
            }
        }
    }

    // Update blog with optimistic update
    const updateBlog = async (id, formData) => {
        try {
            await ensureCSRF()

            const data = new FormData()
            data.append('title', formData.title)
            data.append('subtitle', formData.subtitle)
            data.append('content', formData.content)
            data.append('_method', 'PUT')

            // // Optimistic update
            // mutate(
            //     currentBlogs => {
            //         if (!currentBlogs) return currentBlogs
            //         return currentBlogs.map(blog =>
            //             blog.id === id ? { ...blog, ...formData } : blog,
            //         )
            //     },
            //     false, // Don't revalidate yet
            // )

            const response = await axios.post(`/api/blog/update/${id}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

            // Revalidate to get server data
            // await mutate()

            if (response.status === 201) mutate()

            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            // Revert on error
            // await mutate()
            return {
                success: false,
                error: error.response?.data?.message || 'Failed to update blog',
            }
        }
    }

    // Delete blog with optimistic update
    const deleteBlog = async id => {
        try {
            await ensureCSRF()

            // Optimistic update - remove from UI immediately
            // mutate(
            //     currentBlogs => {
            //         if (!currentBlogs) return currentBlogs
            //         return currentBlogs.filter(blog => blog.id !== id)
            //     },
            //     false, // Don't revalidate yet
            // )

            const response = await axios.delete(`/api/blog/delete/${id}`)

            if (response.status === 201) mutate()

            // Revalidate both lists to confirm
            // await Promise.all([mutate(), mutateLatests()])

            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            // Revert on error
            // await mutate()
            return {
                success: false,
                error: error.response?.data?.message || 'Failed to delete blog',
            }
        }
    }

    // Update image with optimistic update
    const updateImage = async (id, image) => {
        try {
            await ensureCSRF()

            if (!image) {
                throw new Error('Image is required')
            }

            const data = new FormData()
            data.append('image', image)
            data.append('_method', 'PUT')

            const response = await axios.post(
                `/api/blog/update/image/${id}`,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            )

            // Update specific blog image
            // mutate(currentBlogs => {
            //     if (!currentBlogs) return currentBlogs
            //     return currentBlogs.map(blog =>
            //         blog.id === id
            //             ? { ...blog, image: response.data.image }
            //             : blog,
            //     )
            // }, false)

            // Revalidate to confirm
            if (response.status === 201) mutate()

            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            return {
                success: false,
                error:
                    error.response?.data?.message || 'Failed to update image',
            }
        }
    }

    return {
        // Actions
        addBlog,
        updateBlog,
        deleteBlog,
        updateImage,

        // refreshLatests: mutateLatests,
    }
}
