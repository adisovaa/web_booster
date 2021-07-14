import React from 'react'
import {NavLink} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarItem">
                <div className="item">
                    <NavLink to={'cartItem'}>Товары</NavLink>
                </div>
                <div className="item">
                    <NavLink to={'description'}>Описание</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar