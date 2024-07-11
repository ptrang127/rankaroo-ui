import { FC } from "react"
import { Link } from '@tanstack/react-router'

export const Navbar: FC<{}> = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost btn-lg text-5xl uppercase">
                <Link to="/">
                    Rankaroo
                </Link>
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base font-mono">
                    <li>
                    <a>
                        <Link to="/insights" className="[&.active]:underline">
                        Insights
                        </Link>
                    </a>
                    </li>
                    <li>
                    <a>
                        <Link to="/about" className="[&.active]:underline">
                        About
                        </Link>
                    </a>
                    </li>
                </ul>
            </div>
        </div> 
    )
}