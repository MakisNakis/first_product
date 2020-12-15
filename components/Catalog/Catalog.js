import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'

import ProductCard from './ProductCard'

const card1 = {
    image: '/images/products/Typewriter.png',
    desc: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    price: 49.5,
    additional: 'Eligible for Shipping To Mars or somewhere else',
    rating: 4.56,
    isDeal: false,
    deal: 50,
}

const Catalog = props => {
    console.log(props)

    const { products, addProduct, starwars, uploadCharacterAsync, loading } = props

    const [card, setCard] = useState({
        image: '/images/products/Typewriter.png',
        desc: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 49.5,
        additional: 'Eligible for Shipping To Mars or somewhere else',
        rating: 4.56,
        isDeal: false,
        deal: 50,
    })

    useEffect(() => {
        uploadCharacterAsync()
    }, [])

    return (
        <div>
            <button className="w-full" onClick={() => addProduct(card)}>
                Add card
            </button>
            <div className="flex flex-row flex-wrap">
                {products.map((item, ix) => {
                    return (
                        <ProductCard
                            key={ix}
                            srcImg={item.image}
                            desc={item.desc}
                            price={item.price}
                            additional={item.additional}
                            rating={item.rating}
                            isDeal={item.isDeal}
                            deal={item.deal}
                        />
                    )
                })}
            </div>

            <div className="m-5">
                <button
                    className="w-full mb-1 bg-yellow-100 border-2 border-yellow-300 rounded"
                    onClick={() => uploadCharacterAsync()}
                >
                    Random character
                </button>
                {!loading ? (
                    <Card
                        title={starwars.name}
                        className="w-full px-3 py-2 flex flex-col text-2xl bg-pink-200 rounded hover:shadow-lg"
                    >
                        <span className="block text-sm">birth year: {starwars.birth_year}</span>
                        <span className="block text-sm">eye color: {starwars.eye_color}</span>
                        <span className="block text-sm">skin color: {starwars.skin_color}</span>
                    </Card>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

const mapState = state => ({
    products: state.products.data,
    starwars: state.starwars.data,
    loading: state.starwars.loading,
})

const mapDispatch = ({ products: { addProduct }, starwars: { uploadCharacterAsync } }) => ({
    addProduct: (payload) => addProduct(payload),
    uploadCharacterAsync: () => uploadCharacterAsync(Math.floor(Math.random() * 10) + 1),
})

// TODO: аргументы передаем в mapDispatch`е?
// TODO: tailwind сбрасывает стили ant. Как исправить?
// TODO: как у нас? connect или useSelector и useDispatch?
// TODO: cors в ky?

export default connect(mapState, mapDispatch)(Catalog)
