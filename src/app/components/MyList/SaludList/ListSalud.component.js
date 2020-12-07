import React from 'react'
import Slidercards from '../../Calm/SliderCards/Slidercards.component'

const ListSalud = () => {
    return (
        <>
            <div className="o-container-slider-list">
                <div className="o-title o-font-medium"><strong>Video</strong></div>
                <Slidercards category={"salud-videos"} cardList={true} typeCard={'video'} />
            </div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Audio</strong></div>
                <Slidercards category={"salud-audios"} cardList={true} typeCard={'audio'} />
            </div>
        </>
    )
}

export default ListSalud
