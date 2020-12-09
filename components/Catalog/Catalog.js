import React from 'react'

import ProductCard from './ProductCard'
import productsJSON from './products.json'

const card1 = {
    image: '/images/products/Typewriter.png',
    desc: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    price: 49.5,
    additional: 'Eligible for Shipping To Mars or somewhere else',
    rating: 4.56,
    isDeal: false,
    deal: 50,
}

const Catalog = () => {
    const [products, setProducts] = React.useState(productsJSON.list)

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    React.useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div>
            <button className="w-full" onClick={() => addProduct(card1)}>
                Add Card
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
        </div>
    )
}

export default Catalog
