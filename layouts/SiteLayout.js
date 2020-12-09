const SiteLayout = ({ children }) => {
    return (
        <div>
            <header className="flex justify-around items-center">
                <div className="flex justify-evenly items-center w-52 h-20">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-r from-blue to-indigo text-white font-redhat font-bold">
                        <span className="text-center">S</span>
                        {/* TODO:почему не работает? */}
                    </div>
                    <div className="flex justify-around items-center w-31 h-9 text-logoName font-redhat font-medium">
                        <span>Shopka</span>
                    </div>
                    {/*TODO: w-31 не работает   */}
                </div>

                <div className="">Sell on Shopka</div>
                <div className="">Register</div>

                <input className=""></input>

                <div className="">Consumer Electronics</div>
                
                <button className="">Sign in</button>
                <button className="">My cart</button>
                <div className="">
                    <img src="/images/Photo.jpg" className="w-10 h-10 rounded-full"></img>
                </div>
            </header>

            <div>{children}</div>
        </div>
    )
}

export default SiteLayout
