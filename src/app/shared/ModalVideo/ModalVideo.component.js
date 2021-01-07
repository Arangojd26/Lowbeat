import React from 'react'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import './ModalVideo.css'
// import ReactPlayer from "react-player"
import YouTube from 'react-youtube';

const ModalVideo = (props) => {

    const [urls, setUrls] = React.useState(null)


    const [modal, setModal] = React.useState(false);
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    React.useEffect(() => {

        async function fetchUrl() {
            // You can await here
            setUrls(props.url)
            setModal(props.open)

          }

          fetchUrl();
    }, [props.url, props.open])

    const {
        buttonLabel
      } = props;

    const toggle = () => setModal(!modal);

    const _onReady = (event) => {

        event.target.pauseVideo();
    }

    return (
        <>
            <Button className="o-btn-video o-font-medium" style={{paddingLeft: '25px', paddingRight: '25px'}} color="info" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog modal-dialog-centered modal-lg modal-video">
                <ModalBody className="m-0 p-0">
                    {/* <ReactPlayer url={props.url} width='100%' height='28rem' /> */}
                    <YouTube
                        videoId={urls}
                        opts={opts}
                        onReady={_onReady}
                    />
                </ModalBody>
                <ModalFooter className="o-modal-footer">
                    <Button className="btn btn-info o-btn-close-video" onClick={toggle}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalVideo
