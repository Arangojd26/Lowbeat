import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./app/pages/LoginPage/Login.page";
import SidebarProvider from "./app/context/SidebarProvider";
import { auth } from "./app/consts/firebase";
import Loading from "./app/pages/LoadingPage/Loading.page";
import "./App.css";

const Home = React.lazy(() => import("./app/pages/HomePage/Home.page"));
const Calm = React.lazy(() => import("./app/pages/CalmPage/Calm.page"));
const Salud = React.lazy(() => import("./app/pages/SaludPage/Salud.page"));
const Positivismo = React.lazy(() =>
  import("./app/pages/PositivismoPage/Positivismo.page")
);
const Descanso = React.lazy(() =>
  import("./app/pages/DescansoPage/Descanso.page")
);
const MyList = React.lazy(() => import("./app/pages/ListsPage/MyList.page"));

export default function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to="/login" {...rest} />;
      }
    } else {
      return <Redirect to="/login" {...rest} />;
    }
  };

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route component={Login} path="/login" exact />
        <React.Suspense fallback={<Loading />}>
          <SidebarProvider>
            <PrivateRoute component={Home} path="/" exact />
            <PrivateRoute component={Calm} path="/calma" exact />
            <PrivateRoute component={Salud} path="/salud" exact />
            <PrivateRoute component={Positivismo} path="/positivismo" exact />
            <PrivateRoute component={Descanso} path="/descanso" exact />
            <PrivateRoute component={MyList} path="/listas" exact />
          </SidebarProvider>
        </React.Suspense>
      </Switch>
    </Router>
  ) : (
    <Loading />
  );
}
