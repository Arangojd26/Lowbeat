import React from "react";
import "./ContainerCategory.css";

const ContainerCategory = (props) => {
  const { children } = props;

  const styleImageBG = {
    background: `url(${props.imgCategory})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="o-container-category">
      <div className="o-container-img-category-calma" style={styleImageBG} />
      
      <div className="o-container-carousel-cards">
        <div className="o-container-card-slider">{children}</div>
      </div>
    </div>
  );
};

export default ContainerCategory;
