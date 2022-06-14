import { createContext, useState } from "react";

// je crée le contexte:
export const UserContext = createContext()

// je crée le composant d'ordre supérieur = PROVIDER qui va retourner le UserContext.Provider :
export function UserContextProvider(props) {
    //je définis mon state:
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
        <UserContext.Provider value={{ modalState, toggleModals }}>
            {props.children}
        </UserContext.Provider>
    )
}