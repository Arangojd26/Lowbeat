import React from 'react'
import './Slidercards.css'
import ListCards from '../ListCards/ListCards.component';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerVideosAccion, obtenerAudiosAccion } from '../../../Redux/Multimedia/multimediaDucks'
import { obtenerVideoListaAccion, obtenerAudioListaAccion } from '../../../Redux/MyList/myListDucks'

const Slidercards = (props) => {

    const dispatch = useDispatch()

    const videosGeneral = useSelector(store => store.multimedia.urlVideos)
    const videosGeneral2 = useSelector(store => store.multimedia.urlVideos2)
    const audiosGeneral = useSelector(store => store.multimedia.urlAudios)
    const audiosGeneral2 = useSelector(store => store.multimedia.urlAudios2)

    const videosMyList = useSelector(store => store.myList.listVideos)
    
    const audiosMyList = useSelector(store => store.myList.listAudios)

    React.useEffect(() => {
        async function fetchData() {

            if (props.typeCard === "video" && !props.cardList) {
                
                dispatch(obtenerVideosAccion(props.category))
            } else if (props.typeCard === "audio" && !props.cardList) {

                dispatch(obtenerAudiosAccion(props.category))
            } else if (props.typeCard === "video" && props.cardList) {

                dispatch(obtenerVideoListaAccion(props.category))
            } else {

                dispatch(obtenerAudioListaAccion(props.category))
            }
        }
        fetchData();
    }, [dispatch, props.category, props.typeCard, props.cardList]);


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
                                <ListCards 
                                    category={props.category} 
                                    cardList={props.cardList} 
                                    typeCard={props.typeCard} 
                                    items={props.cardList ? videosMyList : videosGeneral} 
                                    fallback={"Cargando..."} 
                                />
                            </div>

                            <div className="carousel-item">
                                <ListCards 
                                    category={props.category} 
                                    cardList={props.cardList} 
                                    typeCard={props.typeCard} 
                                    items={props.cardList ? videosMyList : videosGeneral2} 
                                    fallback={"Cargando..."} 
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="carousel-item active">
                                <ListCards 
                                    category={props.category} 
                                    cardList={props.cardList} 
                                    typeCard={props.typeCard} 
                                    items={props.cardList ? audiosMyList : audiosGeneral} 
                                    fallback={"Cargando..."} 
                                />
                            </div>

                            <div className="carousel-item">
                                <ListCards 
                                    category={props.category} 
                                    cardList={props.cardList} 
                                    typeCard={props.typeCard} 
                                    items={props.cardList ? audiosMyList : audiosGeneral2} 
                                    fallback={"Cargando..."} 
                                />
                            </div>
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default Slidercards
