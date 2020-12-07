import React from 'react'
import './Loading.css'
import Logo from '../../../assets/images/logo_morado.png'

const Loading = () => {
    return (
        <div className="o-container-logo">
            <div>
                <img className="o-logo-loading" src={Logo} alt=""/>
            </div>
        </div>
    )
}

export default Loading
