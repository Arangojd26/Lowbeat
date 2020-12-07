import React from 'react'
import Slidercards from '../../components/Calm/SliderCards/Slidercards.component'
import BackButtonComponent from '../../shared/BackButton/BackButton.component'
import NavbarComponent from '../../shared/Navbar/Navbar.component'
import SidebarComponent from '../../shared/Sidebar/Sidebar.component'
import './Salud.css'

const Salud = () => {

    const [hideSidebar, setHideBar] = React.useState(true)
    const [opacity, setOpacity] = React.useState(0)

    return (
        <>
            <NavbarComponent setOpacity={setOpacity} setHideBar={setHideBar} />
            <SidebarComponent opacity={opacity} setOpacity={setOpacity} hideSidebar={hideSidebar} setHideBar={setHideBar}/>
            <BackButtonComponent />
            <div className="o-title-category o-font-medium">Salud</div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Video</strong></div>
                <Slidercards typeCard={'video'} category={'salud-videos'} />
            </div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Audio</strong></div>
                <Slidercards typeCard={'audio'} category={'salud-audios'} />
            </div>
        </>
    )
}

export default Salud
