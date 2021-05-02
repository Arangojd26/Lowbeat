import { db } from '../../consts/firebase'

// constantes
const dataInicial = {
    urlVideos: [],
    urlAudios: [],
    urlVideos2: [],
    urlAudios2: []
}

// types
const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS'
const GET_AUDIOS_SUCCESS = 'GET_AUDIOS_SUCCESS'

// reducer
export default function multimediaReducer(state = dataInicial, action){
    switch (action.type) {
        case GET_VIDEOS_SUCCESS:
            return { ...state, urlVideos: action.payload.urlVideos, urlVideos2: action.payload.urlVideos2 }
        case GET_AUDIOS_SUCCESS:
            return { ...state, urlAudios: action.payload.urlAudios, urlAudios2: action.payload.urlAudios2 }
        default:
            return state
    }
}

// actions
export const obtenerVideosAccion = (dataCollection) => async (dispatch) => {
    try {

        const datos = await db.collection(dataCollection)
            .orderBy('url')
            .get()

        const arrayData = datos.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        const datosNext = await db.collection(dataCollection)
            .orderBy('uid')
            .startAfter(datos.docs[datos.docs.length - 1])
            .get()

        const arrayDataNext = datosNext.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        console.log("arrayDataNext: ")
        console.log(arrayData)

        dispatch({
            type: GET_VIDEOS_SUCCESS,
            payload: {
                urlVideos: arrayData,
                urlVideos2: arrayDataNext
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAudiosAccion = (dataCollection) => async (dispatch) => {
    try {
        const datos = await db.collection(dataCollection)
            .limit(4)
            .orderBy('uid')
            .get()

        const arrayData = datos.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        const datosNext = await db.collection(dataCollection)
            .limit(4)
            .orderBy('uid')
            .startAfter(datos.docs[datos.docs.length - 1])
            .get()

        const arrayDataNext = datosNext.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        // console.log('Audios: ')
        // console.log(arrayData)
        dispatch({
            type: GET_AUDIOS_SUCCESS,
            payload: {
                urlAudios: arrayData,
                urlAudios2: arrayDataNext
            } 
        })
    } catch (error) {
        console.log(error)
    }
}