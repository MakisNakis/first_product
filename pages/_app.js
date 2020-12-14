import { Fragment } from 'react'
import { Provider } from 'react-redux'

import '../styles/tailwind.css'

import store from '../store'

function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || Fragment

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
