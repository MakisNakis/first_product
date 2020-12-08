import Link from 'next/link'
import { filterMenuList, filterProducts } from './filterLayoutConsts'

const FilterLayout = ({ children }) => {
    return (
        <div className="flex items-center flex-col">
            <nav className="flex justify-between w-3/4">
                {filterMenuList.map(item => {
                    return (
                        <Link href={item.route}>
                            <a className="flex justify-between flex-col">
                                <img src={item.srcImg}></img>
                                <span className="text-xs text-center">{item.nameImg}</span>
                            </a>
                        </Link>
                    )
                })}
            </nav>

            <section className="flex justify-center w-3/4">
                <aside className="w-1/4">
                    <section>
                        <span></span>
                        <ul>
                            <li>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                        </ul>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>

                        <div>
                            <span>Expanded Filters</span>
                            <button>{">"}</button>
                        </div>
                        <div className="flex flex-col">
                            <label className="my-1 text-xs"><input type="checkbox"/>Recommended</label>
                            <label className="my-1 text-xs"><input type="checkbox"/>Recently Added</label>
                            <label className="my-1 text-xs"><input type="checkbox"/>Expiring Soon</label>
                            <label className="my-1 text-xs"><input type="checkbox"/>Most Rated</label>
                            <label className="my-1 text-xs"><input type="checkbox"/>Price: Low → High</label>
                            <label className="my-1 text-xs"><input type="checkbox"/>Price: High → Low</label>
                        </div>
                    </section>
                </aside>
                <main className="w-3/4">{children}</main>
            </section>
        </div>
    )
}

export default FilterLayout
