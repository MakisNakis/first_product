import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </Layout>
    )
}
