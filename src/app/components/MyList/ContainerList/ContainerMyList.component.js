import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerVideoListaAccion } from "../../../Redux/MyList/myListDucks";
import CardVideo from "../../Calm/CardVideo/CardVideo.component";
import LoadingLogin from "../../Login/LoadingLogin/LoadingLogin.component";
import "./ContainerMyList.css";

const ContainerMyList = ({ category }) => {
  const dispatch = useDispatch();
  const videosMyList = useSelector((store) => store.myList.listVideos);
  const [loadedVideos, setLoadedVideos] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      dispatch(obtenerVideoListaAccion(category));
      setLoadedVideos(false);
      setTimeout(() => {
        setLoadedVideos(true);
      }, 500);
    }
    fetchData();
  }, [dispatch, category]);

  return loadedVideos ? (
    <div className="o-container-mylist px-2 px-sm-4 px-md-5 container-fluid">
      <div className="row justify-content-start">
        {videosMyList.map((item) => (
          <div
            key={item.url}
            className="col-md-5 col-lg-4 col-xl-3 offset-md-1 offset-lg-0"
          >
            <div key={item.url} className="mr-2 mb-2">
              <CardVideo
                category={category}
                cardList={true}
                url={item.url}
                id={item.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="o-container-loading-mylist">
      <LoadingLogin openLoading={true} />
    </div>
  );
};

export default ContainerMyList;