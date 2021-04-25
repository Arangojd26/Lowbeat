import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { obtenerVideoListaAccion } from "../../../Redux/MyList/myListDucks";
import CardVideo from "../../Category/CardVideo/CardVideo.component";
import LoadingLogin from "../../Login/LoadingLogin/LoadingLogin.component";
import "./ContainerMyList.css";

const ContainerMyList = ({ category }) => {
  const dispatch = useDispatch();
  const videosMyList = useSelector((store) => store.myList.listVideos);
  const loadingVideos = useSelector((store) => store.myList.loading);

  React.useLayoutEffect(() => {
    async function fetchData() {
      batch(() => {
        dispatch(obtenerVideoListaAccion(category));
      });
    }
    fetchData();
  }, [dispatch, category]);

  const renderVideosList = () => {
    return videosMyList.map((item) => (
      <div
        key={item.url}
        className="col-md-5 col-lg-4 col-xl-3 offset-md-1 offset-lg-0"
      >
        <div key={item.url} className="mr-2 mb-4">
          <CardVideo
            category={category}
            cardList={true}
            url={item.url}
            id={item.id}
          />
        </div>
      </div>
    ));
  };

  return !loadingVideos ? (
    <div className="o-container-mylist px-2 px-sm-4 px-md-5">
      <div className="row justify-content-start">{renderVideosList()}</div>
    </div>
  ) : (
    <div className="o-container-loading-mylist">
      <LoadingLogin openLoading={true} />
    </div>
  );
};

export default ContainerMyList;
