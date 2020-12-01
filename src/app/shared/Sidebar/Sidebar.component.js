import React from 'react'
import IconCalma from '../../../assets/icons/calmaNav.svg'
import IconSalud from '../../../assets/icons/saludNav.svg'
import IconPositivismo from '../../../assets/icons/positivismoNav.svg'
import IconDescanso from '../../../assets/icons/descansoNav.svg'
import { withRouter } from "react-router-dom";
import './Sidebar.css'

const Sidebar = (props) => {

    // const [displayBar, setDisplayBar] = React.useState(true)

    const [styleNav, setStyleNav] = React.useState({
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'linear-gradient(1deg, rgba(98,73,133,1) 0%, rgba(180,128,251,1) 94%)',
        width: '16rem',
        height: '100vh',
        zIndex: 1,
        borderRadius: '0px 45px 45px 0px',
        opacity: 0,
        transition: 'opacity 0.5s'
    })
    React.useEffect(() => {
        
        setStyleNav({
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(1deg, rgba(98,73,133,1) 0%, rgba(180,128,251,1) 94%)',
            width: '16rem',
            height: '100vh',
            zIndex: 1,
            borderRadius: '0px 45px 45px 0px',
            opacity: props.opacity,
            transition: 'opacity 0.5s'
        })

    }, [props.opacity])

    const closeSideBar = () => {
        props.setOpacity(0)
        setStyleNav({
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(1deg, rgba(98,73,133,1) 0%, rgba(180,128,251,1) 94%)',
            width: '16rem',
            height: '100vh',
            zIndex: 1,
            borderRadius: '0px 45px 45px 0px',
            opacity: 0,
            transition: 'opacity 0.5s'
        })

        setTimeout(() => {
            props.setHideBar(true)
        }, 700);
    } 

    const goRouteNav = (route) => {

        switch (route) {
            case 'calma':
                props.history.push('/calma')
                break;
            case 'salud':
                props.history.push('/salud')
                break;
            case 'positivismo':
                props.history.push('/positivismo')
                break;
            case 'descanso':
                props.history.push('/descanso')
                break;
            default:
                break;
        }
    }

    return (
        <div className={props.hideSidebar ? "d-none" : ""} style={styleNav}>
            <div className="o-container-menu-nav">
                <div className="o-menu-nav o-font-medium">Menú</div>
                <div className="o-close-menu o-font-medium" onClick={() => closeSideBar()}><strong>x</strong></div>
            </div>
            <div className="o-container-links">
                <div className="o-link" onClick={() => goRouteNav('calma')}>
                    <img className="o-icon-nav" src={IconCalma} alt="icon" />
                    <div className="o-title-link o-font-medium">Calma</div>
                </div>
                <div className="o-link" onClick={() => goRouteNav('salud')}>
                    <img className="o-icon-nav" src={IconSalud} alt="icon" />
                    <div className="o-title-link o-font-medium">Salud</div>
                </div>
                <div className="o-link" onClick={() => goRouteNav('positivismo')}>
                    <img className="o-icon-nav" src={IconPositivismo} alt="icon" />
                    <div className="o-title-link o-font-medium">Positivismo</div>
                </div>
                <div className="o-link" onClick={() => goRouteNav('descanso')}>
                    <img className="o-icon-nav" src={IconDescanso} alt="icon" />
                    <div className="o-title-link o-font-medium">Descanso</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Sidebar)
