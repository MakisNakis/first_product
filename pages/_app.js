import '../styles/tailwind.css'
import SiteLayout from "../layouts/SiteLayout/"
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
const Layout = Component.layout || Fragment

    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    )
}

export default MyApp
