import React from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { obtenerVideosAccion } from "../../../Redux/Multimedia/multimediaDucks";
import "./SliderCard.css";
import CardVideo from "../../Calm/CardVideo/CardVideo.component";
import LoadingLogin from "../../Login/LoadingLogin/LoadingLogin.component";
import iconForward from "../../../../assets/icons/forward.svg";

const SliderCard = (props) => {
  const dispatch = useDispatch();

  const videosGeneral = useSelector((store) => store.multimedia.urlVideos);

  const [loadedVideos, setLoadedVideos] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setLoadedVideos(true);
      }, 2200);

      dispatch(obtenerVideosAccion(props.category));
    }
    fetchData();
  }, [dispatch, props.category]);

  const SampleNextArrow = (props) => {
    const { className, style, onClick, brakepoint } = props;
    return (
      <div
        className={("slick-arrow", className)}
        style={
          brakepoint === "desktop"
            ? { ...style, display: "flex", marginRight: "-0.5rem" }
            : { ...style, display: "flex", marginRight: "2.5rem" }
        }
        onClick={onClick}
      >
        <img className="o-icon-forward" src={iconForward} alt="arrow_right" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick, brakepoint } = props;
    return (
      <div
        className={("slick-arrow", className)}
        style={
          brakepoint === "desktop"
            ? { ...style, display: "flex", marginLeft: "-0.5rem" }
            : { ...style, display: "flex", marginLeft: "2.5rem" }
        }
        onClick={onClick}
      >
        <img className="o-icon-backward" src={iconForward} alt="arrow_left" />
      </div>
    );
  };

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    centerPadding: "33px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow brakepoint={"desktop"} />,
    prevArrow: <SamplePrevArrow brakepoint={"desktop"} />,
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
          nextArrow: <SampleNextArrow brakepoint={"mobile"} />,
          prevArrow: <SamplePrevArrow brakepoint={"mobile"} />,
        },
      },
    ],
  };
  return loadedVideos ? (
    <div className="o-container-slider-setting">
      <Slider {...settings}>
        {videosGeneral.map((item) => (
          <div key={item.url} className="px-2 mb-2">
            <CardVideo category={props.category} url={item.url} id={item.id} />
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div className="o-container-loading-slider">
      <LoadingLogin openLoading={true} />
    </div>
  );
};

export default SliderCard;
