// BlogSkeleton.jsx
import React from 'react'

export default function BlogSkeleton({ count = 3 }) {
    // count = number of skeleton blog posts to show
    return (
        <div className="space-y-8">
            {Array.from({ length: count }).map((_, idx) => (
                <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 shadow animate-pulse">
                    {/* Image placeholder */}
                    <div className="bg-gray-300 h-48 w-full rounded-md mb-4" />

                    {/* Title placeholder */}
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />

                    {/* Subtitle/author placeholder */}
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />

                    {/* Paragraph lines placeholder */}
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full" />
                        <div className="h-4 bg-gray-300 rounded w-full" />
                        <div className="h-4 bg-gray-300 rounded w-5/6" />
                    </div>
                </div>
            ))}
        </div>
    )
}
