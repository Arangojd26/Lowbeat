import React from "react";
import CardVideo from "../CardVideo/CardVideo.component";
import CardAudio from "../CardAudio/CardAudio.component";
// import { useDispatch, useSelector } from 'react-redux'
// import { obtenerVideosCalmaAccion, obtenerAudiosCalmaAccion } from '../../../Redux/Calma/calmaDucks'

const ListCards = (props) => {
  // const dispatch = useDispatch()
  // const videos = useSelector(store => store.calma.urlVideos)
  // const audios = useSelector(store => store.calma.urlAudios)

  // React.useEffect(() => {
  //     async function fetchData() {

  //         dispatch(obtenerVideosCalmaAccion())
  //         dispatch(obtenerAudiosCalmaAccion())
  //     }
  //     fetchData();
  // }, [dispatch]);

  return !props.items ? (
    <div>{props.fallback}</div>
  ) : (
    <>
      {props.items.map((item) => (
        <div key={item.url} className="">
          <CardVideo
            category={props.category}
            cardList={props.cardList}
            url={item.url}
            id={item.id}
          />
        </div>
      ))}
    </>
  );
};

export default ListCards;
