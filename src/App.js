import React from "react";
import { BrowserRouter as Router, Switch,Route, Redirect } from "react-router-dom";
import Home from "./app/pages/HomePage/Home.page";
import Login from "./app/pages/LoginPage/Login.page";
import './App.css'
import Calm from "./app/pages/CalmPage/Calm.page";
import Salud from "./app/pages/SaludPage/Salud.page";
import Positivismo from "./app/pages/PositivismoPage/Positivismo.page";
import Descanso from "./app/pages/DescansoPage/Descanso.page";
import MyList from "./app/pages/ListsPage/MyList.page";

import {auth} from './firebase'
import Loading from "./app/pages/LoadingPage/Loading.page";


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
    }
    fetchUser()
  }, [])

  const PrivateRoute = ({component, path, ...rest}) => {
    if(localStorage.getItem('usuario')){
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioStorage.uid === firebaseUser.uid){
        return <Route component={component} path={path} {...rest} />
      } else {
        return <Redirect to="/login" {...rest} />
      }
    } else {
      return <Redirect to="/login" {...rest} />
    }
  }

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Login} path="/login" exact />
        <Route component={Calm} path="/calma" exact />
        <PrivateRoute component={Salud} path="/salud" exact />
        <PrivateRoute component={Positivismo} path="/positivismo" exact />
        <PrivateRoute component={Descanso} path="/descanso" exact />
        <PrivateRoute component={MyList} path="/listas" exact />
      </Switch>
    </Router>
  ) : (
    <Loading />
  );
}

export default App;
