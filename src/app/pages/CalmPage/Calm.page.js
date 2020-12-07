import React from 'react'
import Slidercards from '../../components/Calm/SliderCards/Slidercards.component'
import BackButtonComponent from '../../shared/BackButton/BackButton.component'
import NavbarComponent from '../../shared/Navbar/Navbar.component'
import SidebarComponent from '../../shared/Sidebar/Sidebar.component'
import SweetAlert from '../../shared/SweetAlert/SweetAlert.component'
// import { useSelector } from 'react-redux'
import './Calm.css'

const Calm = () => {

    const [hideSidebar, setHideBar] = React.useState(true)
    const [opacity, setOpacity] = React.useState(0)

    // const stateAlert = useSelector(store => store.myList.showAlertAdd)

    return (
        <>
            <NavbarComponent setOpacity={setOpacity} setHideBar={setHideBar} />
            <SidebarComponent opacity={opacity} setOpacity={setOpacity} hideSidebar={hideSidebar} setHideBar={setHideBar}/>
            <BackButtonComponent />
            <SweetAlert />
            <div className="o-title-category o-font-medium">Calma</div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Video</strong></div>
                <Slidercards typeCard={'video'} category={'calma-videos'} />
            </div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Audio</strong></div>
                <Slidercards typeCard={'audio'} category={'calma-audios'} />
            </div>
        </>
    )
}

export default Calm
