import React from 'react'
import cat from "./cat.gif"

export default function PrivateHome() {
    return (
        <div className="container p-5">
            <h1 className="display-3 text-light mb-4">
                Bienvenue chez vous !
            </h1>
            <img src={cat} alt="chat" />
        </div>
    )
}