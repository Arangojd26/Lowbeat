import React from "react";
import CardLogin from "../../components/Login/CardLogin/CardLogin.component";
import LoadingLogin from "../../components/Login/LoadingLogin/LoadingLogin.component";
import Footer from "../../shared/Footer/Footer.component";
import "./LoginPage.css";
import LogoLowBeat from "../../../assets/images/logo.png";

const Login = () => {
  const [openLoading, setOpenLoading] = React.useState(false);

  return (
    <div className="o-container-login">
      <div className="o-content-login">
        <div className="col-12 col-md-6 col-lg-7 col-xl-8 o-fondo-login">
          <div className="layer w-100" />
          <div className="o-container-logo-login text-center">
            <img className="o-logo-login" src={LogoLowBeat} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 o-fondo-card">
          <div className="o-container-loading-login">
            <LoadingLogin openLoading={openLoading} />
          </div>

          <div className="o-container-card-login pt-md-2">
            <CardLogin setOpenLoading={setOpenLoading} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
