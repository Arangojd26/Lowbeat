import React from "react";
import iconForward from "../../../../assets/icons/forward.svg";
import "./SampleArrow.css";

const SampleArrow = (props) => {
  const { className, style, onClick, brakepoint, type } = props;

  const renderArrow = () => {
      
    let styleArrowDesktop;
    let styleArrowMobile;
    let classNameIcon;
    switch (type) {
      case "next":
        classNameIcon = "o-icon-forward";
        styleArrowDesktop = {
          ...style,
          display: "flex",
          marginRight: "-0.5rem",
        };
        styleArrowMobile = { ...style, display: "flex", marginRight: "2.5rem" };
        break;
      case "prev":
        classNameIcon = "o-icon-backward";
        styleArrowDesktop = {
          ...style,
          display: "flex",
          marginLeft: "-0.5rem",
        };
        styleArrowMobile = { ...style, display: "flex", marginLeft: "2.5rem" };
        break;
      default:
        break;
    }

    return (
      <div
        className={("slick-arrow", className)}
        style={brakepoint === "desktop" ? styleArrowDesktop : styleArrowMobile}
        onClick={onClick}
      >
        <img className={classNameIcon} src={iconForward} alt="arrow_slider" />
      </div>
    );
  };

  return renderArrow();
};

export default SampleArrow;
