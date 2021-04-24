import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import "./ModalVideo.css";
import ReactPlayer from "react-player";
// import YouTube from "react-youtube";
import GenericButton from "../GenericButton/GenericButton.component";

const ModalVideo = (props) => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <GenericButton title={props.buttonLabel} clickButton={toggle} />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog modal-dialog-centered modal-lg modal-video"
      >
        <ModalBody className="m-0 p-0">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.url}`}
            width="100%"
            height="28rem"
            controls={true}
          />
        </ModalBody>
        <ModalFooter className="o-modal-footer">
          <GenericButton title={"Cerrar"} clickButton={toggle} />
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalVideo;
