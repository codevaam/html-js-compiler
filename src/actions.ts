interface HTMLAction {
    type: "UPDATE_HTML", 
    payload: String
}

interface JSAction {
    type: "UPDATE_JS",
    payload: String
}

interface CSSUpdate {
    type: "UPDATE_CSS",
    payload: String
}

interface OpenFilesAction {
    type: "UPDATE_OPEN_FILES",
    payload: String
}

interface CloseFilesAction {
    type: "DELETE_OPEN_FILE",
    payload: String
}

interface ActiveFileAction {
    type: "UPDATE_ACTIVE_FILE",
    payload: String
}

export type Action = HTMLAction | JSAction | CSSUpdate | OpenFilesAction | CloseFilesAction | ActiveFileAction

export const updateHtml = (htmlCode:String):Action => ({
    type: "UPDATE_HTML",
    payload: htmlCode
})

export const updateCss = (cssCode:String):Action => ({
    type: "UPDATE_CSS",
    payload: cssCode
})

export const updateJs = (jsCode:String):Action => ({
    type: "UPDATE_JS",
    payload: jsCode
})

export const updateOpenFiles = (fileName: String):Action => ({
    type: "UPDATE_OPEN_FILES",
    payload: fileName
})

export const delOpenFile = (fileName: String):Action => ({
    type: "DELETE_OPEN_FILE",
    payload: fileName
})

export const updateActiveFile = (fileName: String):Action => ({
    type: "UPDATE_ACTIVE_FILE",
    payload: fileName
})