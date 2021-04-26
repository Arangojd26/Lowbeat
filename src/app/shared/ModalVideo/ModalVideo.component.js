import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./ModalVideo.css";
import ReactPlayer from "react-player";
import Typed from "react-typed";
import GenericButton from "../GenericButton/GenericButton.component";

const ModalVideo = (props) => {
  const [modal, setModal] = React.useState(false);
  const textModal = "Texto de prueba para generar una frase motivadora.";
  const toggle = () => setModal(!modal);

  return (
    <>
      <GenericButton title={props.buttonLabel} clickButton={toggle} />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered modal-lg"
      >
        <div className="modal-content">
          <ModalBody className="o-modal-body">
            <div className="o-container-video-modal">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${props.url}`}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
              />
            </div>

            <div className="d-flex justify-content-center mt-4">
              <div className="o-container-text-modal text-light">
                <div className="o-text-modal">
                  <Typed strings={[textModal]} typeSpeed={65} />
                </div>
              </div>
            </div>
          </ModalBody>
          <GenericButton title={"Cerrar"} clickButton={toggle} />
        </div>
      </Modal>
    </>
  );
};

export default React.memo(ModalVideo);
