import { FC } from "react"
import { Link } from '@tanstack/react-router'

export const Navbar: FC<{}> = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/">
                    Rankaroo
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base font-mono">
                    <li>
                        <Link to="/insights" className="[&.active]:underline">
                        Insights
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="[&.active]:underline">
                        About
                        </Link>
                    </li>
                </ul>
            </div>
        </div> 
    )
}