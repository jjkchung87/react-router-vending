import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="NavBar">
            <NavLink
                    to="/chips"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >
                    Chips
            </NavLink>
            <NavLink
                    to="/mentos"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >
                    Mentos
            </NavLink>
            <NavLink
                    to="/starburst"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >
                    Starburst
            </NavLink>

        </nav>
    )
}

export default NavBar;