export async function getBlogs() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
        { cache: 'no-store' }, // atau revalidate
    )

    if (!res.ok) throw new Error('Failed to fetch blogs')

    return res.json()
}
