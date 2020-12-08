import '../styles/tailwind.css'
import SiteLayout from "../layouts/SiteLayout";

function MyApp({ Component, pageProps }) {
    return (
        <SiteLayout>
            <Component {...pageProps} />
        </SiteLayout>
    )
}

export default MyApp
