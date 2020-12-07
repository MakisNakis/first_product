import { Children } from 'react'

const SiteLayout = ({ children }) => {
    return (
        <div>
            <div>
                <nav className="flex justify-around items-center">
                    <div className="flex justify-around items-center w-52 h-20" >
                        <div className="text-center rounded-md bg-gradient-to-r from-blue to-indigo text-white text-7xl font-redhat font-bold w-10 h-10">S</div>
                        <div className="text-center font-redhat font-medium text-logoName text-8xl w-31 h-9" >Shopka</div> {/*TODO: w-31 не работает*/}
                    </div>
                    <div className="">Sell on Shopka</div>
                    <div className="">Register</div>
                    <input className=""></input>
                    <div className="">Consumer Electronics</div>
                    <button className="">Sign in</button>
                    <button className="">My cart</button>
                    <div className=""><img className=""></img></div>
                </nav>
            </div>

            <div className="bg-pink-200">{children}</div>
        </div>
    )
}

export default SiteLayout
