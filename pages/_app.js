import '../styles/tailwind.css'
import SiteLayout from "../layouts/SiteLayout";

function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || ( children => <>{children}</>)

    return (
        <SiteLayout>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SiteLayout>
    )
}

export default MyApp
