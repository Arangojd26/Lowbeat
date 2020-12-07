import React from 'react'
import Slidercards from '../../Calm/SliderCards/Slidercards.component'

const ListPositivismo = () => {
    return (
        <>
            <div className="o-container-slider-list">
                <div className="o-title o-font-medium"><strong>Video</strong></div>
                <Slidercards category={"positivismo-videos"} cardList={true} typeCard={'video'} />
            </div>
            <div className="o-container-slider">
                <div className="o-title o-font-medium"><strong>Audio</strong></div>
                <Slidercards category={"positivismo-audios"} cardList={true} typeCard={'audio'} />
            </div>
        </>
    )
}

export default ListPositivismo
