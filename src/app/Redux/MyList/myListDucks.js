import { db } from '../../../firebase'

// constantes
const dataInicial = {
    array: []
}

// types
const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS'
const ADD_AUDIO_SUCCESS = 'ADD_AUDIO_SUCCESS'
// const GET_CALMA_AUDIOS_SUCCESS = 'GET_CALMA_AUDIOS_SUCCESS'

// reducer
export default function myListReducer(state = dataInicial, action){
    switch (action.type) {
        case ADD_VIDEO_SUCCESS:
            return { ...state, array: action.payload }
        case ADD_AUDIO_SUCCESS:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

// actions
export const agregarVideoAccion = (urlVideo, category) => async (dispatch) => {
    try {
        const infoUser = JSON.parse(localStorage.getItem('usuario'))
        
        await db.collection('lista-usuario-videos').doc(urlVideo).set({
            email: infoUser.email,
            uid: infoUser.uid,
            displayName: infoUser.displayName,
            video: urlVideo,
            category: category
        })

        dispatch({
            type: ADD_VIDEO_SUCCESS
        })
    } catch (error) {
        console.log(error)
    }
}

export const agregarAudioAccion = (urlAudio, category) => async (dispatch) => {
    try {
        const infoUser = JSON.parse(localStorage.getItem('usuario'))
        
        await db.collection('lista-usuario-audios').doc(urlAudio).set({
            email: infoUser.email,
            uid: infoUser.uid,
            displayName: infoUser.displayName,
            audio: urlAudio,
            category: category
        })

        dispatch({
            type: ADD_AUDIO_SUCCESS
        })
    } catch (error) {
        console.log(error)
    }
}
