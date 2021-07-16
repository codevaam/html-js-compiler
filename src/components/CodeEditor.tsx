import { Typography, Paper, Chip, Divider, TextField } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delOpenFile, updateCss, updateHtml, updateJs, updateActiveFile } from "../actions";
import { codeState } from "../codeReducer";
import '../styles/CodeEditor.component.css';

export default function CodeEditor() {
    const activeFile = useSelector<codeState, codeState['activeFile']>((state) => state.activeFile)
    const currentFiles = useSelector<codeState, codeState['openEditors']>((state)=> state.openEditors);

    const html = useSelector<codeState, codeState['html']>((state) => state.html)
    const css = useSelector<codeState, codeState['css']>((state) => state.css)
    const js = useSelector<codeState, codeState['js']>((state) => state.js)
    
    console.log(html);

    const dispatch = useDispatch();

    const handleDelete = (fileName:String) => {
        dispatch(delOpenFile(fileName))
    };

    const handleClick = (fileName:String) => {
        console.log(fileName)
        dispatch(updateActiveFile(fileName))
    };

    const onUpdateContent = (content:ChangeEvent<HTMLInputElement>) => {
        console.log(content.target.value);
        activeFile==='index.html'? 
            dispatch(updateHtml(content.target.value)) 
            : activeFile === 'index.css' ? 
            dispatch(updateCss(content.target.value)) 
            : dispatch(updateJs(content.target.value))
    }
    return (
        <Paper className="paper">
            {currentFiles.length>0 ? 
                <>
                    {currentFiles.map((item, index) => {
                        return (
                            <Chip key={index} label={item} onClick={()=>handleClick(item)} style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} onDelete={()=>handleDelete(item)}/>
                        )
                    })}
                    <Divider />
                    <TextField value={activeFile==="index.html"?html: activeFile==="index.css"?css:js} onChange={onUpdateContent} variant="outlined" />
                </>
            : 
            <div className="openEditorMessage">
                <Typography variant="h6">Open an Editor to start coding</Typography>
            </div>}
        </Paper>
    )
}