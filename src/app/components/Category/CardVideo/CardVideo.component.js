import React from "react";
import "./CardVideo.css";
import ReactPlayer from "react-player";
import ModalVideo from "../../../shared/ModalVideo/ModalVideo.component";
import { useDispatch } from "react-redux";
import {
  agregarVideoAccion,
  eliminarVideoListaAccion,
} from "../../../Redux/MyList/myListDucks";
import GenericButton from "../../../shared/GenericButton/GenericButton.component";

const CardVideo = (props) => {
  const dispatch = useDispatch();

  const addVideo = () => {
    dispatch(agregarVideoAccion(props.url, props.category));
  };

  const deleteVideo = () => {
    dispatch(eliminarVideoListaAccion(props.id, props.category));
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
          controls={true}
        />
      </div>

      <div className="o-container-name">
        <div className="o-container-buttons-card">
          <ModalVideo url={props.url} buttonLabel={"Abrir"} />
          {props.cardList ? (
            <GenericButton title={"Eliminar"} clickButton={deleteVideo} />
          ) : (
            <GenericButton title={"Agregar"} clickButton={addVideo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardVideo);
