export function getEmbedSrc(url) {
    if (!url) return null

    console.log('🗺️ Processing URL:', url) // Debug log

    // If already an embed URL, return as-is
    if (url.includes('output=embed') || url.includes('/maps/embed')) {
        console.log('✅ Already embed URL')
        return url
    }

    // 0. PRIORITY: Data parameter coordinates (!3d = lat, !4d = lng) - Most accurate
    // Matches: !3d-8.6559348!4d115.2168231
    const dataMatch = url.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/)
    if (dataMatch) {
        const [_, lat, lng] = dataMatch
        // Try to get zoom from URL
        const zoomMatch = url.match(/,(\d+\.?\d*)z/)
        const zoomLevel = zoomMatch ? Math.round(parseFloat(zoomMatch[1])) : 13
        console.log('✅ Found !3d/!4d coordinates:', {
            lat,
            lng,
            zoom: zoomLevel,
        })
        return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoomLevel}&output=embed`
    }

    // 1. Coordinates: @lat,lng,zoom or @lat,lng
    // Matches: @-8.650000,115.216667,15z or @-8.650000,115.216667
    const coordsMatch = url.match(
        /@(-?\d+\.?\d*),(-?\d+\.?\d*)(?:,(\d+\.?\d*)z)?/,
    )
    if (coordsMatch) {
        const [_, lat, lng, zoom] = coordsMatch
        const zoomLevel = zoom ? Math.round(parseFloat(zoom)) : 12 // Use URL zoom or default 12
        console.log('✅ Found coordinates:', { lat, lng, zoom: zoomLevel })
        return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoomLevel}&output=embed`
    }

    // 2. Place ID: place_id parameter
    // Matches: ?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4
    const placeIdMatch = url.match(/[?&]place_id=([^&]+)/)
    if (placeIdMatch) {
        const placeId = placeIdMatch[1]
        console.log('✅ Found place_id:', placeId)
        return `https://maps.google.com/maps?q=place_id:${placeId}&output=embed`
    }

    // 3. Place Name: /place/Name
    // Matches: /place/Eiffel+Tower or /place/Eiffel%20Tower
    const placeMatch = url.match(/\/place\/([^\/\?#]+)/)
    if (placeMatch) {
        const query = decodeURIComponent(placeMatch[1])
        console.log('✅ Found place name:', query)
        return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
    }

    // 4. Search Query: /search/Query
    // Matches: /search/Pizza or /maps/search/Pizza
    const searchMatch = url.match(/\/(?:maps\/)?search\/([^\/\?#]+)/)
    if (searchMatch) {
        const query = decodeURIComponent(searchMatch[1])
        console.log('✅ Found search query:', query)
        return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
    }

    // 5. Query Parameter: ?q=something
    try {
        const urlObj = new URL(url)
        const qParam = urlObj.searchParams.get('q')
        if (qParam) {
            console.log('✅ Found q parameter:', qParam)
            return `https://maps.google.com/maps?q=${encodeURIComponent(qParam)}&z=15&output=embed`
        }
    } catch (e) {
        console.log('❌ Failed to parse URL object:', e.message)
    }

    console.log('❌ No matching pattern found')
    return null
}
