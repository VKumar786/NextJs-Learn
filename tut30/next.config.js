/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'upload.wikimedia.org'
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/productList',
                permanent: false
            },
            {
                source: '/users/:userId',
                destination: '/productList',
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig
