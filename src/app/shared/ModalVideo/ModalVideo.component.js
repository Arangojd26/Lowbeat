import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./ModalVideo.css";
import ReactPlayer from "react-player";
import Typed from "react-typed";
import GenericButton from "../GenericButton/GenericButton.component";

const ModalVideo = (props) => {
  const { url, toggle, modal } = props;
  const [showMessage, setShowMessage] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout(() => setShowMessage(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered modal-lg"
      >
        <div className="modal-content">
          <ModalBody className="o-modal-body">
            <div className="o-container-video-modal">
              <div className="o-video-modal">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${url}`}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <div className="o-container-text-modal text-light">
                <div className="o-text-modal">
                  {showMessage && (
                    <Typed strings={[props.message]} typeSpeed={58} />
                  )}
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
