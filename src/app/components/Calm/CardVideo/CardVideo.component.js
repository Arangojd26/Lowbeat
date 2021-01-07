import React from 'react'
import './CardVideo.css'
// import ReactPlayer from "react-player"
import YouTube from 'react-youtube';
import ModalVideo from '../../../shared/ModalVideo/ModalVideo.component'
import { useDispatch } from 'react-redux'
import { agregarVideoAccion, eliminarVideoListaAccion } from '../../../Redux/MyList/myListDucks'

const CardVideo = (props) => {

    const dispatch = useDispatch()

    const [urls, setUrls] = React.useState(null)
    const [stateTitle, setStateTitle] = React.useState(false)
    const [title, setTitle] = React.useState('')
    // const [titleWrap, setTitleWrap] = React.useState('')
    const [titleWrap1, setTitleWrap1] = React.useState('')
    const [titleWrap2, setTitleWrap2] = React.useState('')
    // const [viewTitle, setViewTitle] = React.useState(false)

    React.useEffect(() => {

        async function fetchUrl() {
            // You can await here
            await setUrls(props.url)
            setTitle(`Título del video o \n audio multimedia`)
            adjustTitle(title)
          }

          fetchUrl();
    }, [props.url, title])

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

    const deleteVideo = () => {

        // console.log(props.id)
        dispatch(eliminarVideoListaAccion(props.id))
    }

    // const showTitle = (stateCard) => {

    //     setStateTitle(stateCard)
    // }

    const adjustTitle = (title) => {

        //Reemplazamos los saltos de linea por espacios
        title = title.replace(/\r?\n/g, " ");

        //Reemplazamos los espacios seguidos por uno solo
        title = title.replace(/[ ]+/g, " ");

        //Quitamos los espacios del principio y del final
        title = title.replace(/^ /, "");
        title = title.replace(/ $/, "");

        //Troceamos el texto por los espacios
        let textoTroceado = title.split(" ");

        if (textoTroceado.length >= 3){ 

            const line_1 = `${textoTroceado[0]} ${textoTroceado[1]} ${textoTroceado[2]} ${textoTroceado[3]}`
            setTitleWrap1(line_1)

            const line_2 = `${textoTroceado[4]} ${textoTroceado[5]} ${textoTroceado[6]}`
            setTitleWrap2(line_2)

            // console.log('setTitleWrap2: ')
            // console.log(setTitleWrap2)
        } else {

            setTitleWrap1(title)
        }

    }
    
    return (
        <div className="card o-card mb-2" onMouseEnter={() => setStateTitle(true)} onMouseLeave={() => setStateTitle(false)}>

            <YouTube
                videoId={urls}
                opts={opts}
                onReady={_onReady}
            />

            <div className="card-body">
                <div className="o-container-name">
                    <div className="o-container-title-video o-font-medium" style={stateTitle ? {width: '13rem'} : null}>
                        <div className="o-title-multimedia">{titleWrap1} <br/> {titleWrap2}</div>
                    </div>
                    <div className="o-container-buttons-card">
                        <ModalVideo url={urls} buttonLabel={'Abrir'} />
                        {
                            props.cardList ? (
                                <button className="btn btn-info o-btn-delete o-font-medium ml-2" onClick={() => deleteVideo()}>Quitar</button>
                            ) : <button className="btn btn-info o-btn-video o-font-medium ml-2 mr-2" onClick={() => addVideo()}>Agregar</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVideo
