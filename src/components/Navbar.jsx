import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, X } from 'phosphor-react'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="container flex justify-between">
                <Link to="/" className="logo">
                    NOVEYRA
                </Link>

                <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <List size={28} />}
                </div>

                <ul className={`nav-links flex gap-lg ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

                    <li>
                        <Link to="/admin" className="btn btn-outline" onClick={() => setIsOpen(false)}>
                            Admin
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
