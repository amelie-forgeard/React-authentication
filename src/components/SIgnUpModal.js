import React from 'react'

function SignUpModal() {
    return (
        <>
            <div className="position-fixed top-0 vw-100 vh-100">
                <div
                    // onClick={closeModal}
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
                                    // onClick={closeModal}
                                    className="btn-close"></button>
                            </div>

                            <div className="modal-body">
                                <form
                                    // ref={formRef}
                                    // onSubmit={handleForm}
                                    className="sign-up-form">
                                    <div className="mb-3">
                                        <label htmlFor="signUpEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            //   ref={addInputs}
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
                                            // ref={addInputs}
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
                                            // ref={addInputs}
                                            name="pwd"
                                            required
                                            type="password"
                                            className="form-control"
                                            id="repeatPwd"
                                        />
                                        {/* <p className="text-danger mt-1">{validation}</p> */}
                                    </div>

                                    <button className="btn btn-primary">Valider</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div></>)
}

export default SignUpModal