import React from 'react'
import './CardVideo.css'
// import ReactPlayer from "react-player"
import YouTube from 'react-youtube';
import ModalVideo from '../../../shared/ModalVideo/ModalVideo.component'
import { useDispatch } from 'react-redux'
import { agregarVideoAccion } from '../../../Redux/MyList/myListDucks'

const CardVideo = (props) => {

    const dispatch = useDispatch()

    const [urls, setUrls] = React.useState(null)

    React.useEffect(() => {

        async function fetchUrl() {
            // You can await here
            await setUrls(props.url)

          }

          fetchUrl();
    }, [props.url])

    const opts = {
        height: '220px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
      
    const _onReady = (event) => {

        event.target.pauseVideo();
    }

    const addVideo = () => {

        dispatch(agregarVideoAccion(urls, props.category))
    }
    
    return (
        <div className="card o-card mb-2">
            {/* <ReactPlayer
                url={props.url}
                width='100%'
                height='100%'
                controls
            /> */}
            <YouTube 
                videoId={urls}
                opts={opts} 
                onReady={_onReady} 
            />

            <div className="card-body">
               <div className="d-flex">
                    <ModalVideo url={urls} buttonLabel={'Abrir'} />
                    {
                        props.cardList ? (
                            <button className="btn btn-info o-btn-video ml-3">Quitar</button>
                        ) : <button className="btn btn-info o-btn-video ml-3" onClick={() => addVideo()}>Agregar</button>
                    }
               </div>
            </div>
        </div>
    )
}

export default CardVideo
