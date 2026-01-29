'use client'

import React, { useEffect, useState } from 'react'
import { expandShortUrl } from './Action'
import { getEmbedSrc } from './mapUtils'

/**
 * @param {Object} props
 * @param {string} props.url - The Google Maps URL (can be short link or full link)
 * @param {string} [props.height="350px"] - Height in px or vh
 * @param {string} [props.borderRadius="0"] - Radius string
 * @param {boolean} [props.showError=true] - Whether to show the error box if URL is invalid
 * @param {string} [props.className=""] - Optional extra class names for the container
 * @param {React.CSSProperties} [props.style] - Optional inline styles
 */

export const MapPreview = ({
    url,
    height = '350px',
    borderRadius = '0px',
    showError = true,
    className = '',
    style = {},
}) => {
    const [embedSrc, setEmbedSrc] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        let isMounted = true

        const processUrl = async () => {
            setLoading(true)
            setIsValid(true)

            if (!url) {
                if (isMounted) {
                    setIsValid(false)
                    setLoading(false)
                }
                return
            }

            // 1. Expand URL (Server Action) if needed
            let processedUrl = url
            if (
                url.includes('goo.gl') ||
                url.includes('g.co') ||
                url.includes('bit.ly')
            ) {
                processedUrl = await expandShortUrl(url)
            }

            // 2. Parse for Embed Source
            const src = getEmbedSrc(processedUrl)

            if (isMounted) {
                if (src) {
                    setEmbedSrc(src)
                    setIsValid(true)
                } else {
                    setEmbedSrc(null)
                    setIsValid(false)
                }
                setLoading(false)
            }
        }

        processUrl()

        return () => {
            isMounted = false
        }
    }, [url])

    // If invalid and errors are hidden, return nothing (matching PHP logic)
    if (!isValid && !showError) return null

    return (
        <div
            className={`map-preview-container w-full relative bg-gray-100 overflow-hidden ${className}`}
            style={{
                height,
                borderRadius,
                ...style, // Allows passing box-shadow via style prop
            }}>
            {loading ? (
                // Loading State (Skeleton)
                <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse">
                    <span className="text-gray-400 text-sm">
                        Loading Map...
                    </span>
                </div>
            ) : isValid && embedSrc ? (
                // Map Iframe
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={embedSrc}
                    title="Map Preview"
                    loading="lazy"
                    className="border-0 block w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                // Error State
                <div className="map-preview-error w-full h-full flex items-center justify-center bg-gray-50 text-gray-500 p-5 text-center">
                    <span>Invalid Map URL provided.</span>
                </div>
            )}
        </div>
    )
}
