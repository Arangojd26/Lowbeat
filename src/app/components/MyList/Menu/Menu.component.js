import React from 'react'
import './Menu.css'

const Menu = ({ setShowList }) => {

    const [esMenu, setMenu] = React.useState('Calma'); 
    
    const [styleCalma, setStyleCalma] = React.useState({ color: '#005EA8', cursor: 'pointer' });
    const [styleSalud, setStyleSalud] = React.useState({});
    const [stylePositivismo, setStylePositivismo] = React.useState({});
    const [styleDescanso, setStyleDescanso] = React.useState({});

    const handleMenu = (estado) => {


        if (estado === 'Calma') {
            setMenu('Calma')
            setStyleCalma({ color: '#005EA8', cursor: 'pointer' })
            setShowList('Calma')
        } else {
            setStyleCalma({ color: ' #747B87', cursor: 'pointer' })
        }

        if (estado === 'Salud') {
            setMenu('Salud')
            setStyleSalud({ color: '#005EA8', cursor: 'pointer' })
            setShowList('Salud')
        } else {
            setStyleSalud({ color: ' #747B87', cursor: 'pointer' })
        }
        

        if (estado === 'Positivismo') {
            setMenu('Positivismo')
            setStylePositivismo({ color: '#005EA8', cursor: 'pointer' })
            setShowList('Positivismo')
        } else {
            setStylePositivismo({ color: ' #747B87', cursor: 'pointer' })
        }

        if (estado === 'Descanso') {
            setMenu('Descanso')
            setStyleDescanso({ color: '#005EA8', cursor: 'pointer' })
            setShowList('Descanso')
        } else {
            setStyleDescanso({ color: ' #747B87', cursor: 'pointer' })
        }
    }
    
    return (
        <div className="o-container-menu-mylist d-flex">
            <div className="o-link-menu mx-2 mx-sm-4 mx-md-5">
                <div className="o-title-menu-lists o-font-medium" onClick={() => handleMenu('Calma')} style={styleCalma}>Calma</div>
                {esMenu === 'Calma' ? <div className="subraya"></div> : null}
            </div>
            <div className="o-link-menu mx-2 mx-sm-4 mx-md-5">
                <div className="o-title-menu-lists o-font-medium" onClick={() => handleMenu('Salud')} style={styleSalud}>Salud</div>
                {esMenu === 'Salud' ? <div className="subraya"></div> : null}
            </div>
            <div className="o-link-menu mx-2 mx-sm-4 mx-md-5">
                <div className="o-title-menu-lists o-font-medium" onClick={() => handleMenu('Positivismo')} style={stylePositivismo}>Positivismo</div>
                {esMenu === 'Positivismo' ? <div className="subraya"></div> : null}
            </div>
            <div className="o-link-menu mx-2 mx-sm-4 mx-md-5">
                <div className="o-title-menu-lists o-font-medium" onClick={() => handleMenu('Descanso')} style={styleDescanso}>Descanso</div>
                {esMenu === 'Descanso' ? <div className="subraya"></div> : null}
            </div>
        </div>
    )
}

export default Menu
