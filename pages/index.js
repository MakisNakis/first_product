import Products from '../components/Products'

const Home = (props) => {

    // const { Component } = props
    const Layout = Products.layout || ( children => <>{children}</>)

    return (
        <div>
            <Layout>
                <Products/>
            </Layout>
        </div>
    )
}

export default Home
