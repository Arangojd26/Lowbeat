import { auth, firebase, db } from "../../../firebase";

const dataInicial = {
  loading: false,
  activo: false,
  errorMessage: null,
};

const LOADING = "LOADING";
const USER_EXITO = "USER_EXITO";
const USER_EXITO_REGISTER = "USER_EXITO_REGISTER";
const USER_ERROR = "USER_ERROR";
const CERRAR_SESION = "CERRAR_SESION";

export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        modal: action.payload.modal,
      };
    case USER_EXITO:
      return {
        ...state,
        loading: false,
        modal: action.payload.modal,
        activo: action.payload.activo,
        user: action.payload.user,
      };
    case USER_EXITO_REGISTER:
      return { ...state, activo: true };
    case CERRAR_SESION:
      return { ...dataInicial };
    default:
      return { ...state };
  }
}

export const ingresarUsuarioGoogleAccion = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);

    console.log(res);

    dispatch({
      type: USER_EXITO,
      payload: {
        user: {
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
        },
        activo: true,
        modal: false,
      },
    });
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
      })
    );

    await db.collection("usuarios").doc(res.user.email).set({
      email: res.user.email,
      uid: res.user.uid,
      displayName: res.user.displayName,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_ERROR,
      payload: {
        modal: false,
      },
    });
  }
};

export const ingresarUsuarioNormalAccion = (email, pass) => async (
  dispatch
) => {
  dispatch({
    type: LOADING,
  });

  // const res = await auth.signInWithEmailAndPassword(email, pass);
  // console.log(res.user);
  await auth
    .signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      dispatch({
        type: USER_EXITO,
        payload: {
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          },
          activo: true,
          modal: false,
        },
      });
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
      db.collection("usuarios").doc(user.email).set({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
      });
    })
    .catch((error) => {
      console.log(error);
      let setError;
      if (error.code === "auth/invalid-email") {
        setError = "Email no válido";
      } else if (error.code === "auth/user-not-found") {
        setError = "Usuario no registrado";
      } else if (error.code === "auth/wrong-password") {
        setError = "La contraseña que ingresaste es incorrecta";
      } else {
        setError = null;
      }

      dispatch({
        type: USER_ERROR,
        payload: {
          errorMessage: setError,
          modal: false,
        },
      });
    });
};

export const registrarUsuarioNormalAccion = (nombre, email, pass) => async (
  dispatch
) => {
  dispatch({
    type: LOADING,
  });

  try {
    await auth.createUserWithEmailAndPassword(email, pass).then((userFB) => {
      if (userFB.additionalUserInfo.isNewUser) {
        if (auth.currentUser) {
          userFB.user
            .updateProfile({
              displayName: nombre,
            })
            .then(() => {
              dispatch({
                type: USER_EXITO,
                payload: {
                  user: {
                    uid: userFB.user.uid,
                    email: userFB.user.email,
                    displayName: userFB.user.displayName,
                  },
                  activo: false,
                  modal: true,
                },
              });

              db.collection("usuarios").doc(userFB.user.email).set({
                email: userFB.user.email,
                uid: userFB.user.uid,
                displayName: userFB.user.displayName,
              });
              localStorage.setItem(
                "usuario",
                JSON.stringify({
                  uid: userFB.user.uid,
                  email: userFB.user.email,
                  displayName: userFB.user.displayName,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  } catch (error) {
    console.log(error);
    let setError;
    if (error.code === "auth/email-already-in-use") {
      setError = "El email ya se encuentra registrado";
    } else {
      setError = null;
    }

    dispatch({
      type: USER_ERROR,
      payload: {
        errorMessage: setError,
        modal: false,
      },
    });
  }
};

export const ingresarPorRegistroAccion = () => async (dispatch) => {
  dispatch({
    type: USER_EXITO_REGISTER,
  });
};

export const leerUsuarioAccion = () => async (dispatch) => {
  if (localStorage.getItem("usuario")) {
    dispatch({
      type: USER_EXITO,
      payload: {
        user: JSON.parse(localStorage.getItem("usuario")),
      },
    });
  }
};

export const cerrarSesionAccion = () => (dispatch) => {
  auth.signOut();
  dispatch({
    type: CERRAR_SESION,
  });
  localStorage.removeItem("usuario");
  localStorage.removeItem("calma-videos");
  localStorage.removeItem("salud-videos");
  localStorage.removeItem("positivismo-videos");
  localStorage.removeItem("descanso-videos");
};
