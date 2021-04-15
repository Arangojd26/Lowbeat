import React from 'react'
import ContainerMyList from '../../components/MyList/ContainerList/ContainerMyList.component'
import Menu from '../../components/MyList/Menu/Menu.component'
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
                        <ContainerMyList category={"calma-videos"}/>
                    ) : showList === 'Salud' ? (
                        <ContainerMyList category={"salud-videos"}/>
                    ) : showList === 'Positivismo' ? (
                        <ContainerMyList category={"positivismo-videos"}/>
                    ) : showList === 'Descanso' ? (
                        <ContainerMyList category={"descanso-videos"}/>
                    ) : null
                }
                
            </div>
        </>
    )
}

export default MyList
