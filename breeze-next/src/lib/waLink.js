export default function waLink({ data = null, isService = false } = {}) {
    let message = 'Hello, I am interested to use your service.'

    if (data && isService) {
        message = `Hello, I am interested in ${data} service`
    }

    return `https://wa.me/${process.env.NEXT_PHONE}?text=${encodeURIComponent(message)}`
}
