module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'logoName': '#0C2146'
            },
            gradientColorStops: {
                'blue': '#2979ff',
                'indigo': '#4c589e'
            },
            fontFamily: {
                'redhat': ['Red Hat Display'],
            },
            fontSize: {
                '7xl': '2rem',
                '8xl': '2.25rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
