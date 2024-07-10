import { FC } from "react"

export const Navbar: FC<{}> = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost btn-lg text-5xl uppercase">Rankaroo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base font-mono">
                    <li><a>Insights</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div> 
    )
}