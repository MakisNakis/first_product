const ProductCard = ({ srcImg, desc, price, additional, rating, isDeal, deal }) => {
    return (
        <div className="p-3 flex flex-col justify-between hover:shadow-lg rounded" style={{ 'flexBasis': 'calc(100% / 4)' }}>
            {/* TODO: как сделать, чтобы было несколько элкментов на странице? */}
            {/* TODO: Как выровнять отступы в карточке по сетке */}
            <div className="self-center">
                <img className="" src={srcImg} />
            </div>

            <p className="text-justify text-base">{desc}</p>

            <div className="flex flex-row justify-between items-center">
                <h3 className="text-2xl font-bold">${price}</h3>
                {isDeal && <h4 className="px-2 py-1 text-xs font-normal text-green-600  bg-green-100 rounded">{deal}% OFF</h4>}
            </div>

            <p className="text-justify text-sm text-gray-500">{additional}</p>

            <div className="flex flex-row justify-between items-center">
                <div>
                    <button>*****</button>
                    <span className="text-sm">{rating}</span>
                </div>
                <button className="px-2 py-1 flex flex-row items-center  border-2 border-blue-500 border-rad rounded">
                    <img className="pr-2" src="/images/Like.svg" />
                    <span className="text-sm text-blue-500">Watch</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
