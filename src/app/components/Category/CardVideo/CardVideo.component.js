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
import { PlayerContext } from "../../../context/PlayerProvider";

const CardVideo = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(false);
  // const [playing, setPlaying] = React.useState(false);
  // const [videoSelect, setVideoSelect] = React.useState("");
  const { player, playing, setPlaying } = React.useContext(PlayerContext);

  React.useEffect(() => {
    if (props.changeSlide) {
      setPlaying(false);
    }
  }, [setPlaying, props.changeSlide]);

  const addVideo = () => {
    dispatch(agregarVideoAccion(props.url, props.category));
  };

  const deleteVideo = () => {
    dispatch(eliminarVideoListaAccion(props.id, props.category));
  };

  const toggleModal = () => {
    setModal(!modal);
    setPlaying(false);
  };

  const handleThumbnail = (url) => {
    setPlaying(true);
    console.log(playing);
  };

  return (
    <div className="o-card-video-category">
      <div className="wrapper">
        <ReactPlayer
          ref={player}
          className="react-player"
          url={`https://www.youtube.com/watch?v=${props.url}`}
          width="100%"
          height="100%"
          light={true}
          playIcon={<></>}
          controls={true}
          playing={playing}
          onClick={() => handleThumbnail(props.url)}
          // onClickPreview={() => setPlaying(true)}
        />
      </div>

      <div className="o-container-name">
        <div className="o-container-buttons-card">
          <GenericButton title={"Abrir"} clickButton={toggleModal} />
          {modal && (
            <ModalVideo url={props.url} toggle={toggleModal} modal={modal} />
          )}
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
