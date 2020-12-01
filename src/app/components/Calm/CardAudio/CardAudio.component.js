import React from 'react'
import ReactPlayer from 'react-player'
import ModalVideo from '../../../shared/ModalVideo/ModalVideo.component'
import { useDispatch } from 'react-redux'
import { agregarAudioAccion } from '../../../Redux/MyList/myListDucks'

const CardAudio = (props) => {

    const dispatch = useDispatch()

    const [urls, setUrls] = React.useState(null)

    React.useEffect(() => {
        async function fetchAudios() {

            setUrls(props.url)
        }
        fetchAudios();
    }, [props.url]);
      
    const addAudio = () => {

        dispatch(agregarAudioAccion(urls, props.category))
    }

    return (
        <div className="card o-card mb-2">
            {/* <ReactPlayer
                url={props.url}
                width='100%'
                height='100%'
                controls
            /> */}
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={`https://www.youtube.com/watch?v=${urls}`}
                    width='100%'
                    height='100%'
                    playing={false}
                    controls={true}
                    light={true}
                />
            </div>

            <div className="card-body">
               <div className="d-flex">
                    <ModalVideo url={props.url} buttonLabel={'Abrir'} />
                    {
                        props.cardList ? (
                            <button className="btn btn-info o-btn-video ml-3">Quitar</button>
                        ) : <button className="btn btn-info o-btn-video ml-3" onClick={() => addAudio()}>Agregar</button>
                    }
               </div>
            </div>
        </div>
    )
}

export default CardAudio
