const ProductCard = ({ srcImg, desc, price, additional, rating, isDeal, deal }) => {
    return (
        <div className="w-64 p-3 flex flex-col justify-between hover:shadow-lg rounded" style={{ minWidth: '16rem)' }}>
            <div className="self-center">
                <img className="" src={srcImg} />
            </div>

            <div className="flex flex-col mb-auto">
                <div className="flex flex-col overflow-ellipsis overflow-hidden " style={{ height: '4.5rem' }}>
                    <span className="text-base">{desc}</span>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <span className="text-2xl font-bold">${price}</span>
                    {isDeal && (
                        <span className="px-2 py-1 text-xs font-normal text-green-600  bg-green-100 rounded">
                            {deal}% OFF
                        </span>
                    )}
                </div>

                <span className="text-justify text-sm text-gray-500">{additional}</span>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div>
                    <button>*****</button>
                    <span className="text-sm">{rating}</span>
                </div>
                <button className="px-2 py-1 flex flex-row items-center  border-2 border-blue-500 rounded">
                    <img className="mr-2" src="/images/Like.svg" />
                    <span className="text-sm text-blue-500">Watch</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
