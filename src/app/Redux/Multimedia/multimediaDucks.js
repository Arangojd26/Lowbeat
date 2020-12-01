import { db } from '../../../firebase'

// constantes
const dataInicial = {
    urlVideos: [],
    urlAudios: [],
}

// types
const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS'
const GET_AUDIOS_SUCCESS = 'GET_AUDIOS_SUCCESS'

// reducer
export default function multimediaReducer(state = dataInicial, action){
    switch (action.type) {
        case GET_VIDEOS_SUCCESS:
            return { ...state, urlVideos: action.payload.urlVideos }
        case GET_AUDIOS_SUCCESS:
            return { ...state, urlAudios: action.payload.urlAudios }
        default:
            return state
    }
}

// actions
export const obtenerVideosAccion = (dataCollection) => async (dispatch) => {
    try {
        const datos = await db.collection(dataCollection).get()
        const arrayData = datos.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        // console.log(arrayData)
        dispatch({
            type: GET_VIDEOS_SUCCESS,
            payload: {
                urlVideos: arrayData
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAudiosAccion = (dataCollection) => async (dispatch) => {
    try {
        const datos = await db.collection(dataCollection).get()
        const arrayData = datos.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        // console.log('Audios: ')
        // console.log(arrayData)
        dispatch({
            type: GET_AUDIOS_SUCCESS,
            payload: {
                urlAudios: arrayData
            } 
        })
    } catch (error) {
        console.log(error)
    }
}