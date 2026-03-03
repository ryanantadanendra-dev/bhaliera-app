// hooks/useBlogPublic.js
'use client'

import useSWR from 'swr'
import axios from '@/lib/axios'

const fetcher = url => axios.get(url).then(res => res.data)

const shouldFetch = typeof window !== 'undefined'

// SWR configuration
const swrConfig = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 5000,
    shouldRetryOnError: false,
}

export const useBlogPublic = () => {
    const { data, error, isLoading, mutate } = useSWR(
        shouldFetch ? '/api/blogs' : null,
        fetcher,
        {
            revalidateOnFocus: false,
            dedupingInterval: 10000,
        },
    )

    const { data: latests } = useSWR('/api/blogs/latest', fetcher, swrConfig)

    return {
        blogs: data,
        latests,
        error,
        isLoading,
        mutate,
    }
}
