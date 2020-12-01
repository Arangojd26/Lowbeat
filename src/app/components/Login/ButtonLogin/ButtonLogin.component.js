import React from 'react'
import './ButtonLogin.css'

const ButtonLogin = (props) => {
    return (
        <div className="text-center">
            <button
                className="btn btn-iniciar-sesion"
                type="input"
                // onClick={(e) => signIn(e)}
                disabled={props.loading}
            >
                {props.esRegistro ? "Registrarse" : "Iniciar sesión"}
            </button>
        </div>
    )
}

export default ButtonLogin
