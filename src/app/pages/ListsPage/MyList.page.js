import React from 'react'
import ListCalma from '../../components/MyList/CalmaList/ListCalma.component'
import ListDescanso from '../../components/MyList/DescansoList/ListDescanso.component'
// import Slidercards from '../../components/Calm/SliderCards/Slidercards.component'
import Menu from '../../components/MyList/Menu/Menu.component'
import ListPositivismo from '../../components/MyList/PositivismoList/ListPositivismo.component'
import ListSalud from '../../components/MyList/SaludList/ListSalud.component'
import BackButtonComponent from '../../shared/BackButton/BackButton.component'
import NavbarComponent from '../../shared/Navbar/Navbar.component'
import SidebarComponent from '../../shared/Sidebar/Sidebar.component'
import SweetAlert from '../../shared/SweetAlert/SweetAlert.component'
import './MyList.css'

const MyList = () => {

    const [hideSidebar, setHideBar] = React.useState(true)
    const [opacity, setOpacity] = React.useState(0)
    
    const [showList, setShowList] = React.useState('Calma')
    
    return (
        <>
            <NavbarComponent setOpacity={setOpacity} setHideBar={setHideBar} />
            <SidebarComponent opacity={opacity} setOpacity={setOpacity} hideSidebar={hideSidebar} setHideBar={setHideBar}/>
            <BackButtonComponent />
            <SweetAlert />
            <div className="container-fluid">
                <Menu setShowList={setShowList} />
                {
                    showList === 'Calma' ? (
                        <ListCalma />
                    ) : showList === 'Salud' ? (
                        <ListSalud />
                    ) : showList === 'Positivismo' ? (
                        <ListPositivismo />
                    ) : showList === 'Descanso' ? (
                        <ListDescanso />
                    ) : null
                }
                
            </div>
        </>
    )
}

export default MyList
