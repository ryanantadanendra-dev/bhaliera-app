import axios from '@/lib/axios'

// server fetch method
export async function getBlogs() {
    const res = await axios.get('/api/blogs')
    return res.data
}
