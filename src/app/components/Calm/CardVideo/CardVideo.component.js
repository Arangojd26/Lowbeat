import React from "react";
import "./CardVideo.css";
import ReactPlayer from "react-player";
import ModalVideo from "../../../shared/ModalVideo/ModalVideo.component";
import { useDispatch } from "react-redux";
import {
  agregarVideoAccion,
  eliminarVideoListaAccion,
} from "../../../Redux/MyList/myListDucks";

const CardVideo = (props) => {
  const dispatch = useDispatch();

  // const [urls, setUrls] = React.useState(null);

  // React.useEffect(() => {
  //   function fetchUrl() {
  //     // You can await here
  //     setUrls(props.url);
  //   }

  //   fetchUrl();
  // }, [props.url]);

  const addVideo = () => {
    dispatch(agregarVideoAccion(props.url, props.category));
  };

  const deleteVideo = () => {
    dispatch(eliminarVideoListaAccion(props.id));
  };

  return (
    <div className="o-card-video-category">
      <div className="wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${props.url}`}
          width="100%"
          height="100%"
          light={true}
          playIcon={<></>}
        />
      </div>

      <div className="o-container-name">
        <div className="o-container-buttons-card">
          <ModalVideo url={props.url} buttonLabel={"Abrir"} />
          {props.cardList ? (
            <button
              className="btn btn-info o-btn-video o-font-medium ml-2"
              onClick={() => deleteVideo()}
            >
              Quitar
            </button>
          ) : (
            <button
              className="btn btn-info o-btn-video o-font-medium ml-2 mr-2"
              onClick={() => addVideo()}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
