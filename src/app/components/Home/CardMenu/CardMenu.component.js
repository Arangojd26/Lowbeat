import React from 'react'
import './CardMenu.css'
import { withRouter } from "react-router-dom";

const CardMenu = (props) => {

    const openCategory = () => {

        switch (props.title) {
            case 'Calma':
                props.history.push('/calma')
                break;
            case 'Salud':
                props.history.push('/salud')
                break;
            case 'Positivismo':
                props.history.push('/positivismo')
                break
            case 'Descanso':
                props.history.push('/descanso')
                break
            default:
                break;
        }
    } 

    return (
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <button className="o-btn-card-home" onClick={() => openCategory()}>
                <div className="card-flyer">
                    <div className="text-box">
                        <div className="image-box">
                            <img className="o-icon-card-home" src={props.image} alt="iconCard" />
                            <div className="o-layer-card" />
                        </div>
                        <div className="text-container">
                            <h6 className="o-font-medium"><strong>{props.title}</strong></h6>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                        </div>
                    </div>
                </div>
            </button>
        </div>

    )
}

export default withRouter(CardMenu)
