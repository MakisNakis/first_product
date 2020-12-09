import '../styles/tailwind.css'
import SiteLayout from "../layouts/SiteLayout/";

function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || ( children => <>{children}</>)

    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    )
}

export default MyApp
