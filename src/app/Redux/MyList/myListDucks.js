import { db } from '../../../firebase'

// constantes
const dataInicial = {
    array: [],
    listVideos: [],
    listAudios: [],
    showAlertAdd: false,
    typeAlert: ""
}

// types
const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS'
const ADD_AUDIO_SUCCESS = 'ADD_AUDIO_SUCCESS'
const DELETE_VIDEO_SUCCESS = 'DELETE_VIDEO_SUCCESS'
const DELETE_AUDIO_SUCCESS = 'DELETE_AUDIO_SUCCESS'
const GET_VIDEOS_LIST_SUCCESS= 'GET_VIDEOS_LIST_SUCCESS'
const GET_AUDIOS_LIST_SUCCESS = 'GET_AUDIOS_LIST_SUCCESS'
const ALERT_ADD = 'ALERT_ADD'

// reducer
export default function myListReducer(state = dataInicial, action){
    switch (action.type) {
        case ADD_VIDEO_SUCCESS:
            return { ...state, array: action.payload}
        case ADD_AUDIO_SUCCESS:
            return { ...state, array: action.payload }
        case DELETE_VIDEO_SUCCESS:
            return { ...state, listVideos: action.payload.listVideos, showAlertAdd: action.payload.showAlertAdd, typeAlert: action.payload.typeAlert }
        case DELETE_AUDIO_SUCCESS:
            return { ...state, listAudios: action.payload.listAudios, showAlertAdd: action.payload.showAlertAdd, typeAlert: action.payload.typeAlert }
        case GET_VIDEOS_LIST_SUCCESS:
            return { ...state, listVideos: action.payload.listVideos }
        case GET_AUDIOS_LIST_SUCCESS:
            return { ...state, listAudios: action.payload.listAudios }
        case ALERT_ADD:
            return { ...state, array: action.payload, showAlertAdd: action.payload.showAlertAdd, typeAlert: action.payload.typeAlert}
        default:
            return state
    }
}

// actions
export const agregarVideoAccion = (urlVideo, category) => async (dispatch) => {

    const infoUser = JSON.parse(localStorage.getItem('usuario'))

    const data = await db.collection('lista-usuario-videos').get()
    const res = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    let dataFiltered = res.filter(datosFB => datosFB.url === urlVideo && infoUser.email === datosFB.email)

    // console.log('arreglo comprobar video')
    // console.log(dataFiltered)

    if (dataFiltered.length > 0) {

        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: true,
                typeAlert: 'exist'
            } 
        })
        setTimeout(() => {
            dispatch({
                type: ALERT_ADD,
                payload: {
                    showAlertAdd: false,
                    typeAlert: 'exist'
                } 
            })
        }, 2500);
    } else {

        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: true,
                typeAlert: 'add'
            } 
        })
        setTimeout(() => {
            dispatch({
                type: ALERT_ADD,
                payload: {
                    showAlertAdd: false,
                    typeAlert: 'add'
                } 
            })
        }, 2500);

        try {
            const infoUser = JSON.parse(localStorage.getItem('usuario'))
    
            await db.collection('lista-usuario-videos').add({
                email: infoUser.email,
                displayName: infoUser.displayName,
                url: urlVideo,
                category: category
            })  
    
            dispatch({
                type: ADD_VIDEO_SUCCESS
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const agregarAudioAccion = (urlAudio, category) => async (dispatch) => {

    const infoUser = JSON.parse(localStorage.getItem('usuario'))
    
    const data = await db.collection('lista-usuario-audios').get()
    const res = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    let dataFiltered = res.filter(datosFB => datosFB.url === urlAudio && infoUser.email === datosFB.email)

    // console.log('arreglo comprobar video')
    // console.log(dataFiltered)

    if (dataFiltered.length > 0) {

        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: true,
                typeAlert: 'exist'
            } 
        })
        setTimeout(() => {
            dispatch({
                type: ALERT_ADD,
                payload: {
                    showAlertAdd: false,
                    typeAlert: 'exist'
                } 
            })
        }, 2500);
    } else {

        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: true,
                typeAlert: 'add'
            } 
        })
        setTimeout(() => {
            dispatch({
                type: ALERT_ADD,
                payload: {
                    showAlertAdd: false,
                    typeAlert: 'add'
                } 
            })
        }, 2500);

        try {
            
            await db.collection('lista-usuario-audios').add({
                email: infoUser.email,
                displayName: infoUser.displayName,
                url: urlAudio,
                category: category
            })  
    
            dispatch({
                type: ADD_AUDIO_SUCCESS
            })
        } catch (error) {
            console.log(error)
        }
    }

}
const compararFiltro = (category, dataFB) => {

    const infoUser = JSON.parse(localStorage.getItem('usuario'))

    return (
        infoUser.email === dataFB.email
        && category === dataFB.category
    )
}

export const obtenerVideoListaAccion = (category) => async (dispatch) => {
    try {
        
        const data = await db.collection('lista-usuario-videos').get()
        const res = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        let dataFiltered = res.filter(datosFB => compararFiltro(category, datosFB))

        console.log('data videos')
        console.log(dataFiltered)
        dispatch({
            type: GET_VIDEOS_LIST_SUCCESS,
            payload: {
                listVideos: dataFiltered
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAudioListaAccion = (category) => async (dispatch) => {
    try {
        
        
        const data = await db.collection('lista-usuario-audios').get()
        const res = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        let dataFiltered = res.filter(datosFB => compararFiltro(category, datosFB))

        // console.log('data audios')
        // console.log(dataFiltered)
        dispatch({
            type: GET_AUDIOS_LIST_SUCCESS,
            payload: {
                listAudios: dataFiltered
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

export const eliminarVideoListaAccion = (id) => async (dispatch, getState) => {

    const { listVideos } = getState().myList 

    dispatch({
        type: ALERT_ADD,
        payload: {
            showAlertAdd: true,
            typeAlert: 'delete'
        } 
    })
    setTimeout(() => {
        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: false,
                typeAlert: 'delete'
            } 
        })
    }, 2500);

    try {
        
        
        await db.collection('lista-usuario-videos').doc(id).delete()
        const arrayFiltrado = listVideos.filter(item => item.id !== id)

        // console.log('data delete filtrada')
        // console.log(arrayFiltrado)
        dispatch({
            type: DELETE_VIDEO_SUCCESS,
            payload: {
                listVideos: arrayFiltrado,
                showAlertAdd: true,
                typeAlert: 'delete'
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

export const eliminarAudioListaAccion = (id) => async (dispatch, getState) => {

    const { listAudios } = getState().myList 

    dispatch({
        type: ALERT_ADD,
        payload: {
            showAlertAdd: true,
            typeAlert: 'delete'
        } 
    })
    setTimeout(() => {
        dispatch({
            type: ALERT_ADD,
            payload: {
                showAlertAdd: false,
                typeAlert: 'delete'
            } 
        })
    }, 2500);

    try {
        
        
        await db.collection('lista-usuario-audios').doc(id).delete()
        const arrayFiltrado = listAudios.filter(item => item.id !== id)

        // console.log('data delete filtrada')
        // console.log(arrayFiltrado)
        dispatch({
            type: DELETE_AUDIO_SUCCESS,
            payload: {
                listAudios: arrayFiltrado,
                showAlertAdd: true,
                typeAlert: 'delete'
            } 
        })
    } catch (error) {
        console.log(error)
    }
}