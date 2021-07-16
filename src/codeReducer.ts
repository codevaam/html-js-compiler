import { Action } from "./actions"

export interface codeState {
    html: String,
    css: String,
    js: String,
    openEditors: String[],
    activeFile: String
}

const initalState = {
    html: 'html code',
    css: 'css code',
    js: 'js code',
    openEditors: [],
    activeFile: ''
}



export const codeReducer = (state:codeState = initalState, action: Action) => {
    switch(action.type){
        case "UPDATE_HTML":
            return {...state, html: action.payload }
        
        case "UPDATE_CSS":
            return {...state, css: action.payload}

        case "UPDATE_JS":
            return {...state, js: action.payload}

        case "UPDATE_OPEN_FILES":
            return {...state, openEditors: [...state.openEditors, action.payload]}

        case "DELETE_OPEN_FILE":
            return {...state, openEditors: state.openEditors.filter(e=>e!==action.payload)}

        case "UPDATE_ACTIVE_FILE":
            return {...state, activeFile: action.payload}
        default:
            return state
    }
}