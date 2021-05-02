import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import CardVideo from "../../Category/CardVideo/CardVideo.component";
import LoadingLogin from "../../Login/LoadingLogin/LoadingLogin.component";
import "./SliderCard.css";
import SampleArrow from "../SampleArrow/SampleArrow.component";
import PlayerProvider from "../../../context/PlayerProvider";

const SliderCard = (props) => {
  const videosGeneral = useSelector((store) => store.multimedia.urlVideos);

  const [loadedVideos, setLoadedVideos] = React.useState(false);
  // const { setPlaying } = React.useContext(PlayerContext);
  const [changeSlide, setChangeSlide] = React.useState(false);

  // const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    let timer = setTimeout(() => setLoadedVideos(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const settingsSldier = React.useMemo(() => {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      lazyLoad: true,
      centerPadding: "25px",
      slidesToShow: 1,
      slidesToScroll: 1,
      // beforeChange: () => setPlaying(false),
      afterChange: (current) => setChangeSlide(current),
      speed: 500,
      nextArrow: <SampleArrow type={"next"} brakepoint={"desktop"} />,
      prevArrow: <SampleArrow type={"prev"} brakepoint={"desktop"} />,
      responsive: [
        {
          breakpoint: 873,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            infinite: true,
            dots: true,
            centerPadding: "0px",
            nextArrow: <SampleArrow type={"next"} brakepoint={"mobile"} />,
            prevArrow: <SampleArrow type={"prev"} brakepoint={"mobile"} />,
          },
        },
      ],
    };
    return settings;
  }, []);

  const renderGeneralVideosPerCategory = React.useCallback(
    (arrayVideos) => {
      if (arrayVideos && arrayVideos.length) {
        return arrayVideos.map((item) => (
          <div key={item.url} className="px-2 mb-2">
            <PlayerProvider>
              <CardVideo
                category={props.category}
                url={item.url}
                id={item.id}
                changeSlide={changeSlide}
              />
            </PlayerProvider>
          </div>
        ));
      }
      return [];
    },
    [props.category, changeSlide]
  );

  return loadedVideos ? (
    <div className="o-container-slider-setting">
      <Slider {...settingsSldier}>
        {renderGeneralVideosPerCategory(videosGeneral)}
      </Slider>
    </div>
  ) : (
    <div className="o-container-loading-slider">
      <LoadingLogin openLoading={true} />
    </div>
  );
};

export default SliderCard;
