import React from 'react'
import './Slidercards.css'
// import VideoCalma1 from '../../../../assets/vid/VideoCalma1.mp4'
// import VideoCalma2 from '../../../../assets/vid/VideoCalma2.mp4'
// import VideoCalma3 from '../../../../assets/vid/VideoCalma3.mp4'
// import ReactAudioPlayer from 'react-audio-player';
// import CardVideo from '../CardVideo/CardVideo.component'
// import AudCalma1 from '../../../../assets/aud/AudioCalma1.mp3'
import ListCards from '../ListCards/ListCards.component';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerVideosAccion, obtenerAudiosAccion } from '../../../Redux/Multimedia/multimediaDucks'

const Slidercards = (props) => {

    const dispatch = useDispatch()

    const videos = useSelector(store => store.multimedia.urlVideos)
    const audios = useSelector(store => store.multimedia.urlAudios)

    React.useEffect(() => {
        async function fetchData() {

            if (props.typeCard === "video") {
                
                dispatch(obtenerVideosAccion(props.category))
            } else {

                dispatch(obtenerAudiosAccion(props.category))
            }
        }
        fetchData();
    }, [dispatch, props.category, props.typeCard]);


    return (
        <div id={props.typeCard === 'video' ? "multi-item-video" : "multi-item-audio"} className="carousel slide carousel-multi-item" data-interval="false" data-ride="carousel">

            <div className="controls-top">
                <a className="o-prev-btn" href={props.typeCard === 'video' ? "#multi-item-video" : "#multi-item-audio"} data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                <a className="o-next-btn" href={props.typeCard === 'video' ? "#multi-item-video" : "#multi-item-audio"} data-slide="next"><i className="fas fa-chevron-right"></i></a>
            </div>

            <div className="carousel-inner" role="listbox">
                {
                    props.typeCard === 'video' ? (
                        <>
                            <div className="carousel-item active">

                                <ListCards category={props.category} cardList={props.cardList} typeCard={props.typeCard} items={videos} fallback={"Cargando..."} />

                            </div>

                            <div className="carousel-item">

                                <ListCards category={props.category} cardList={props.cardList} typeCard={props.typeCard} items={videos} fallback={"Cargando..."} />

                            </div>
                        </>
                    ) : (
                        <>
                            <div className="carousel-item active">

                                <ListCards category={props.category} cardList={props.cardList} typeCard={props.typeCard} items={audios} fallback={"Cargando..."} />

                            </div>

                            <div className="carousel-item">

                                <ListCards category={props.category} cardList={props.cardList} typeCard={props.typeCard} items={audios} fallback={"Cargando..."} />

                            </div>
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default Slidercards
