import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'


function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>Bonjour! Je m`appelle Maxim Tabolin. Je suis un ingénieur junior. </p>
                </section>
            </Layout>
        </>
    )
}

export default FirstPost
