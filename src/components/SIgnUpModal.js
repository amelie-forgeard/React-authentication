// useRef permet de faire des références = sélectionner des éléments avec React
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {
    // j'utilise le hook pour ytransmettre le contexte, et dedans je prends toggleModals + modalState
    const { modalState, toggleModals, signUp } = useContext(UserContext);
    console.log(signUp);
    // console.log(modalState, toggleModals);

    // le state qui gère le msg de validation:
    const [validation, setValidation] = useState("");
    // de base notre référence est un tableau vide
    const inputs = useRef([])
    // je crée une fonction qui pour chq élément, si celui-ci n'existe pas déja dans le tableau, alors je le push dedans
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    // ref pour selectionner le formulaire:   => j'ajoute la ref dans ma balise form aussi
    const formRef = useRef();

    //fonction qui gère la soumission du form coté Front:
    const handleForm = async (e) => {
        e.preventDefault()
        // console.log(inputs);
        // useRef donne une propriété current qui contient le tableau de références
        //à chq envoi de form, on veut gérer nos données coté Front = les valider
        //je vérifie la longueur du MDP dans les 2 inputs:
        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 caractères minimum")
            return;
        }
        //je vérifie que les mdp sont identiques
        else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Mot de passe différents")
            return;
        }

        // maintenant je m'inscris coté firebase
        try {
            //cred retourne l'utilisateur qui a été crée
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            // methode JS qui permet de remettre à zero les inputs:
            formRef.current.reset();
            // je vide le message de validation
            setValidation("")
            // console.log(cred);
            // toggleModals("close")
            // navigate("/private/private-home")

        } catch (err) {

            if (err.code === "auth/invalid-email") {
                setValidation("Format Email invalide")
            }

            if (err.code === "auth/email-already-in-use") {
                setValidation("Email déja existant ")
            }

        }
    }
    // methode qui gère l'effacement du form + fermeture modale
    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }
    // j'ajoute la ref sur tous les inputs en lui passant la fonction addInput: ref={addInputs}
    return (
        <>
            {modalState.signUpModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        // fermer la modale quand on clique sur l'overlay:
                        onClick={closeModal}
                        className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>
                    <div
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{ minWidth: "400px" }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">S'inscrire</h5>
                                    <button
                                        onClick={closeModal}
                                        className="btn-close">
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <form
                                        ref={formRef}
                                        onSubmit={handleForm}
                                        className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                ref={addInputs}
                                                name="email"
                                                required
                                                type="email"
                                                className="form-control"
                                                id="signUpEmail"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className="form-label">
                                                Mot de passe
                                            </label>
                                            <input
                                                ref={addInputs}
                                                name="pwd"
                                                required
                                                type="password"
                                                className="form-control"
                                                id="signUpPwd"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className="form-label">
                                                Confirmer mot de passe
                                            </label>
                                            <input
                                                ref={addInputs}
                                                name="pwd"
                                                required
                                                type="password"
                                                className="form-control"
                                                id="repeatPwd"
                                            />
                                            <p className="text-danger mt-1">{validation}</p>
                                        </div>

                                        <button className="btn btn-primary"
                                        >Valider</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>)
}

