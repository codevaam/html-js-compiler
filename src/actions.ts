// defining interface for all actions
interface HTMLAction {
    type: "UPDATE_HTML", 
    payload: string
}

interface JSAction {
    type: "UPDATE_JS",
    payload: string
}

interface CSSUpdate {
    type: "UPDATE_CSS",
    payload: string
}

interface OpenFilesAction {
    type: "UPDATE_OPEN_FILES",
    payload: string
}

interface CloseFilesAction {
    type: "DELETE_OPEN_FILE",
    payload: string
}

interface ActiveFileAction {
    type: "UPDATE_ACTIVE_FILE",
    payload: string
}

interface ThemeAction {
    type: "UPDATE_THEME",
    payload: string
}

export type Action = HTMLAction | JSAction | CSSUpdate | OpenFilesAction | CloseFilesAction | ActiveFileAction | ThemeAction


// action functions to send the payload to the reducer
export const updateHtml = (htmlCode:string):Action => ({
    type: "UPDATE_HTML",
    payload: htmlCode
})

export const updateCss = (cssCode:string):Action => ({
    type: "UPDATE_CSS",
    payload: cssCode
})

export const updateJs = (jsCode:string):Action => ({
    type: "UPDATE_JS",
    payload: jsCode
})

export const updateOpenFiles = (fileName: string):Action => ({
    type: "UPDATE_OPEN_FILES",
    payload: fileName
})

export const delOpenFile = (fileName: string):Action => ({
    type: "DELETE_OPEN_FILE",
    payload: fileName
})

export const updateActiveFile = (fileName: string):Action => ({
    type: "UPDATE_ACTIVE_FILE",
    payload: fileName
})

export const updateTheme = (theme: string):Action => ({
    type: "UPDATE_THEME",
    payload: theme
})