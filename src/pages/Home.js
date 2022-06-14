import React, { useContext } from 'react'
import { UserContext } from "../context/userContext"

export default function Home() {
    // j'ajoute le contexte pour gérer l'affichage selon si je suis connecté ou non:
    const { currentUser } = useContext(UserContext)

    return (
        <div className="container p-5">
            <h1 className="display-3 text-light">
                {currentUser ? "Bienvenue sur la Homepage" : "Veuillez vous inscrire !"}
            </h1>
        </div>
    )
}