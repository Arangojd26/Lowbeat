import React from 'react'
import './Navbar.css'
import { withRouter } from "react-router-dom";
import Logo from '../../../assets/images/logo.png'
import { useDispatch } from 'react-redux'
import { cerrarSesionAccion } from '../../Redux/Login/usuarioDucks'

const Navbar = (props) => {

    const dispatch = useDispatch()

    const [hoverExitText, setHoverExitText] = React.useState('o-title-exit o-font-regular')
    const [hoverExitIcon, setHoverExitIcon] = React.useState('o-icon-exit')

    const changeColor = (val) => {

        if (val){
            setHoverExitText('o-title-exit-red o-font-regular')
            setHoverExitIcon('o-icon-exit-red')
        }else{
            setHoverExitText('o-title-exit o-font-regular')
            setHoverExitIcon('o-icon-exit')
        }
    }

    const closeSession = () => {

        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }

    const openLists = () => props.history.push('/listas')

    const openSideBar = () => {

        props.setHideBar(false)

        setTimeout(() => {
            props.setOpacity(1);
        }, 50);
    }

    return (
        <nav className="o-navbar-container" style={{backgroundColor: props.colorBackground}}>
            <div className="o-container-menu" onClick={() => openSideBar()}>
                <div className="o-line-menu"></div>
                <div className="o-line-menu"></div>
                <div className="o-line-menu"></div>
            </div>
            <div className="">
                <img className="o-logo-low-navbar" src={Logo} alt="Logo" />
            </div>
            <div className="o-container-btn-listas">
                <button
                    className="btn o-btn-mis-listas o-font-regular"
                    type="submit"
                    onClick={() => openLists()}
                >
                    Mis listas
                </button>
            </div>
            <div className="o-container-exit">
                <div className="d-flex pointer" onMouseEnter={() => changeColor(true)} onMouseLeave={() => changeColor(false)} onClick={() => closeSession()}>
                    <div className={hoverExitText}>Cerrar sesión</div>
                    <span className={hoverExitIcon}></span>
                </div>
            </div>
            
        </nav>
    )
}

export default withRouter(Navbar)
