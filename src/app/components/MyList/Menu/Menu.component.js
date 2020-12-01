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
        <div className="d-flex pb-5 pt-5 mt-5">
            <div className="d-block ">
                <div className="o-title-menu-lists pointer o-font-medium mx-5" onClick={() => handleMenu('Calma')} style={styleCalma}>Calma</div>
                {esMenu === 'Calma' ? <div className="subraya" style={{ width: '58px' }}></div> : null}
            </div>
            <div className="d-block ">
                <div className="o-title-menu-lists pointer o-font-medium mx-5" onClick={() => handleMenu('Salud')} style={styleSalud}>Salud</div>
                {esMenu === 'Salud' ? <div className="subraya" style={{ width: '51px' }}></div> : null}
            </div>
            <div className="d-block ">
                <div className="o-title-menu-lists pointer o-font-medium mx-5" onClick={() => handleMenu('Positivismo')} style={stylePositivismo}>Positivismo</div>
                {esMenu === 'Positivismo' ? <div className="subraya" style={{ width: '93px' }}></div> : null}
            </div>
            <div className="d-block ">
                <div className="o-title-menu-lists pointer o-font-medium mx-5" onClick={() => handleMenu('Descanso')} style={styleDescanso}>Descanso</div>
                {esMenu === 'Descanso' ? <div className="subraya"></div> : null}
            </div>
        </div>
    )
}

export default Menu
