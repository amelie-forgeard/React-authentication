import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to="/" className="navbar-brand">
                Authentification REACT
            </Link>

            <div>
                <button
                    className="btn btn-primary">
                    S'inscrire
                </button>
                <button
                    className="btn btn-primary ms-2">
                    Se connecter
                </button>
                <button
                    className="btn btn-danger ms-2">
                    Déconnexion
                </button>
            </div>
        </nav>)
}

export default Navbar