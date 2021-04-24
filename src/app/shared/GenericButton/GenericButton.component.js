import React from "react";
import "./GenericButton.css";

const GenericButton = ({ clickButton, title }) => {
  const renderGenericButton = () => {
    let className;
    switch (title) {
      case "Agregar":
        className = "o-btn-video o-font-medium ml-2 mr-2";
        break;
      case "Eliminar":
        className = "o-btn-video o-font-medium ml-2 mr-2";
        break;
      case "Abrir":
        className = "o-btn-video o-font-medium";
        break;
      case "Cerrar":
        className = "o-btn-close-video o-font-medium";
        break;

      default:
        break;
    }

    return (
      <div type="button" className={className} onClick={clickButton}>
        {title}
      </div>
    );
  };

  return renderGenericButton();
};

export default GenericButton;
