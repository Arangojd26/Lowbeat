import { db } from "../../../firebase";

// constantes
const dataInicial = {
  loading: false,
  array: [],
  listVideos: [],
  listAudios: [],
  showAlertAdd: false,
  typeAlert: "",
  currentMenu: "Calma",
};

// types
const LOADING_VIDEOS = "LOADING_VIDEOS";
const ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS";
const DELETE_VIDEO_SUCCESS = "DELETE_VIDEO_SUCCESS";
const GET_VIDEOS_LIST_SUCCESS = "GET_VIDEOS_LIST_SUCCESS";
const ALERT_ADD = "ALERT_ADD";

// reducer
export default function myListReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING_VIDEOS:
      return {
        ...state,
        loading: action.payload.loading,
        currentMenu: action.payload.currentMenu,
      };
    case ADD_VIDEO_SUCCESS:
      return { ...state, array: action.payload };
    case DELETE_VIDEO_SUCCESS:
      return {
        ...state,
        listVideos: action.payload.listVideos,
        showAlertAdd: action.payload.showAlertAdd,
        typeAlert: action.payload.typeAlert,
      };
    case GET_VIDEOS_LIST_SUCCESS:
      return {
        ...state,
        listVideos: action.payload.listVideos,
        loading: action.payload.loading,
      };
    case ALERT_ADD:
      return {
        ...state,
        array: action.payload,
        showAlertAdd: action.payload.showAlertAdd,
        typeAlert: action.payload.typeAlert,
      };
    default:
      return state;
  }
}

// actions
export const loadingVideoListaAccion = (estado) => async (dispatch, getState) => {
  const { currentMenu } = getState().myList;

  let stateMenu = false;
  if (currentMenu === estado) {
    stateMenu = false;
  } else {
    stateMenu = true;
  }
  dispatch({
    type: LOADING_VIDEOS,
    payload: {
      loading: stateMenu,
      currentMenu: estado,
    },
  });
};

export const agregarVideoAccion = (urlVideo, category) => async (dispatch) => {
  const infoUser = JSON.parse(localStorage.getItem("usuario"));

  const data = await db.collection("lista-usuario-videos").get();
  const res = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  let dataFiltered = res.filter(
    (datosFB) => datosFB.url === urlVideo && infoUser.email === datosFB.email
  );
  console.log("category");
  console.log(category);
  // console.log('arreglo comprobar video')
  // console.log(dataFiltered)

  if (dataFiltered.length > 0) {
    dispatch({
      type: ALERT_ADD,
      payload: {
        showAlertAdd: true,
        typeAlert: "exist",
      },
    });
    setTimeout(() => {
      dispatch({
        type: ALERT_ADD,
        payload: {
          showAlertAdd: false,
          typeAlert: "exist",
        },
      });
    }, 2500);
  } else {
    try {
      dispatch({
        type: ALERT_ADD,
        payload: {
          showAlertAdd: true,
          typeAlert: "add",
        },
      });
      setTimeout(() => {
        dispatch({
          type: ALERT_ADD,
          payload: {
            showAlertAdd: false,
            typeAlert: "add",
          },
        });
      }, 2500);

      const infoUser = JSON.parse(localStorage.getItem("usuario"));

      await db.collection("lista-usuario-videos").add({
        email: infoUser.email,
        displayName: infoUser.displayName,
        url: urlVideo,
        category: category,
      });
      dispatch({
        type: ADD_VIDEO_SUCCESS,
      });

      localStorage.removeItem(category);
    } catch (error) {
      console.log(error);
    }
  }
};

export const obtenerVideoListaAccion = (category) => async (dispatch) => {
  if (localStorage.getItem(category)) {
    console.log("existe");
    dispatch({
      type: GET_VIDEOS_LIST_SUCCESS,
      payload: {
        listVideos: JSON.parse(localStorage.getItem(category)),
        loading: false,
      },
    });
  } else {
    console.log("no existe");
    try {
      const infoUser = JSON.parse(localStorage.getItem("usuario"));

      const data = await db.collection("lista-usuario-videos").get();
      const res = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      let dataFiltered = res.filter(
        (datosFB) =>
          infoUser.email === datosFB.email && category === datosFB.category
      );

      console.log("data videos");
      console.log(dataFiltered);

      dispatch({
        type: GET_VIDEOS_LIST_SUCCESS,
        payload: {
          listVideos: dataFiltered,
          loading: false,
        },
      });
      localStorage.setItem(category, JSON.stringify(dataFiltered));
    } catch (error) {
      console.log(error);
    }
  }
};

export const eliminarVideoListaAccion = (id, category) => async (
  dispatch,
  getState
) => {
  const { listVideos } = getState().myList;

  dispatch({
    type: ALERT_ADD,
    payload: {
      showAlertAdd: true,
      typeAlert: "delete",
    },
  });
  setTimeout(() => {
    dispatch({
      type: ALERT_ADD,
      payload: {
        showAlertAdd: false,
        typeAlert: "delete",
      },
    });
  }, 2500);

  try {
    await db.collection("lista-usuario-videos").doc(id).delete();
    const arrayFiltrado = listVideos.filter((item) => item.id !== id);

    // console.log('data delete filtrada')
    // console.log(arrayFiltrado)
    dispatch({
      type: DELETE_VIDEO_SUCCESS,
      payload: {
        listVideos: arrayFiltrado,
        showAlertAdd: true,
        typeAlert: "delete",
      },
    });
    localStorage.removeItem(category);
  } catch (error) {
    console.log(error);
  }
};
