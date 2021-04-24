import React from "react";
import IconSuccess from "../../../assets/icons/success.svg";
import IconInfo from "../../../assets/icons/info.svg";
import IconDelete from "../../../assets/icons/delete.svg";
import "./SweetAlert.css";
import { useSelector } from "react-redux";

const SweetAlert = () => {
  const stateAlert = useSelector((store) => store.myList.showAlertAdd);
  const typeAlert = useSelector((store) => store.myList.typeAlert);

  React.useEffect(() => {
    console.log(typeAlert);
  }, [typeAlert]);

  const showSweetAlert = (state) =>
    state ? { marginRight: "0rem" } : { marginRight: "-25rem" };

  const renderSweetAlert = () => {
    let className = "o-sweet-alert";
    let iconAlert = null;
    let textAlert;
    switch (typeAlert) {
      case "add":
        className = "o-sweet-alert o-add";
        iconAlert = IconSuccess;
        textAlert = "Agregado exitosamente";
        break;
      case "delete":
        className = "o-sweet-alert o-delete";
        iconAlert = IconDelete;
        textAlert = "Eliminado exitosamente";
        break;
      case "exist":
        className = "o-sweet-alert o-exist";
        iconAlert = IconInfo;
        textAlert = "Ya se encuentra en tu lista";
        break;

      default:
        break;
    }
    return (
      <div
        className={className}
        style={showSweetAlert(stateAlert)}
      >
        <img className="o-iconAlert" src={iconAlert} alt="iconAlert" />
        <div className="o-text-alert-add o-font-medium">{textAlert}</div>
      </div>
    );
  };

  return renderSweetAlert();
};

export default SweetAlert;
