import { createContext, useState, useEffect } from "react";

// Méthodes qui permettent pour inscrire une personne sur firebase

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
// auth désigne le créateur du site, proprio de la bdd firebase
import { auth } from "../firebase-config"

// je crée le contexte:
export const UserContext = createContext()

// je crée le composant d'ordre supérieur = PROVIDER qui va retourner le UserContext.Provider :
export function UserContextProvider(props) {
    // state qui gère l'utilisateur qui va ce connecter
    const [currentUser, setCurrentUser] = useState();
    // state qui gère la loader le temps qu'on ait la réponse de firebase
    const [loadingData, setLoadingData] = useState(true);
    // je récupère le mail + MDP via la methode signUp qui passe par le contexte => je la passe en value dans le provider + 
    // je l'ajoute dans mon composant signUpModal aussi
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    // useEffect
    useEffect(() => {
        // pour gérer le désabonnement
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })

        return unsubscribe;

    }, [])

    //je définis mon state MODALE:
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })
    //fonction qui gère l'ouverture/fermeture des modales au clic sur le bouton:
    const toggleModals = modal => {
        if (modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if (modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if (modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    //je passe le state à APP via le provider via la VALUE:
    return (
        <UserContext.Provider value={{ modalState, toggleModals, signUp, currentUser, signIn }}>
            {!loadingData && props.children}
        </UserContext.Provider>)
}