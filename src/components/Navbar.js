// pour utiliser le context , j'import le hook React + le fichier qui contient la déclarartion du context:
import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link } from "react-router-dom"

export default function Navbar() {

    // destructuring pour utiliser la methode du contexte qui m'interesse
    //ici, celle qui permet de gérer l'ouverture de la modale
    //j'ajoute la méthode crée dans les boutons via une fct anonyme qui l'appelle

    const { toggleModals } = useContext(UserContext)

    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to="/" className="navbar-brand">
                AuthJS
            </Link>

            <div>
                <button
                    // je mets une fonction anonyme qui sera appelée au moment du clic sur le bouton
                    onClick={() => toggleModals("signUp")}
                    className="btn btn-primary">
                    Sign Up
                </button>
                <button
                    onClick={() => toggleModals("signIn")}
                    className="btn btn-primary ms-2">
                    Sign In
                </button>
                <button
                    className="btn btn-danger ms-2">
                    Log Out
                </button>
            </div>
        </nav>
    )
}