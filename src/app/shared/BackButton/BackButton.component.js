import React from 'react'
import './BackButton.css'
import { withRouter } from "react-router-dom";

const BackButton = (props) => {
    return (
        <div className="o-back" >
            <div className="d-flex" onClick={() => props.history.push('/')}>
                <i className="far fa-arrow-alt-circle-left fa-lg o-icon-back" ></i>
                <div className="o-text-back o-font-medium">Atrás</div>
            </div>
        </div>
    )
}

export default withRouter(BackButton)
