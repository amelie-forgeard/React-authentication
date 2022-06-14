import React, { useContext } from 'react'
import { UserContext } from "../../context/userContext"
import { Outlet, useLocation, Navigate } from "react-router-dom"

export default function Private() {

    const { currentUser } = useContext(UserContext)
    console.log("PRIVATE", currentUser);

    if (!currentUser) {
        // si pas d'utilisateur connu je renvoie à l'acceuil
        return <Navigate to="/" />
    }
    // si l'utilisateur est connu dans firebase: je le fais naviguer vers sa page
    //OUTLET renvoie au composant  enfant  PrivateHome
    return (
        <div className="container">
            <Outlet />
        </div>
    )
}