import React from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { obtenerVideosAccion } from "../../../Redux/Multimedia/multimediaDucks";
import { obtenerVideoListaAccion } from "../../../Redux/MyList/myListDucks";
// import ListCards from "../../Calm/ListCards/ListCards.component";
import "./SliderCard.css";
import CardVideo from "../../Calm/CardVideo/CardVideo.component";

const SliderCard = (props) => {
  const dispatch = useDispatch();

  const videosGeneral = useSelector((store) => store.multimedia.urlVideos);
  const videosMyList = useSelector((store) => store.myList.listVideos);

  const [loadedVideos, setLoadedVideos] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setLoadedVideos(true);
      }, 3000);

      if (props.typeCard === "video" && !props.cardList) {
        dispatch(obtenerVideosAccion(props.category));
      } else if (props.typeCard === "video" && props.cardList) {
        dispatch(obtenerVideoListaAccion(props.category));
      }
    }
    fetchData();
  }, [dispatch, props.category, props.typeCard, props.cardList]);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          width: "19px",
          height: "19px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "33px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 873,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };
  return loadedVideos ? (
    <div className="o-container-slider-setting">
      <Slider {...settings}>
        {/* <ListCards
        category={props.category}
        cardList={props.cardList}
        typeCard={props.typeCard}
        items={props.cardList ? videosMyList : videosGeneral}
        fallback={"Cargando..."}
      /> */}
        {videosGeneral.map((item) => (
          <div key={item.url}>
            <CardVideo
              category={props.category}
              cardList={props.cardList}
              url={item.url}
              id={item.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div>{"Cargando..."}</div>
  );
};

export default SliderCard;
