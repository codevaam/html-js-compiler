import { Typography, Paper, Chip, Divider, Theme, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';
import { delOpenFile, updateCss, updateHtml, updateJs, updateActiveFile } from "../actions";
import { codeState } from "../codeReducer";
import CodeIcon from '@material-ui/icons/Code'

import Editor from "@monaco-editor/react";

import '../styles/CodeEditor.component.css';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        chip: {
            backgroundColor: 'rgba(25, 0, 50, 0.2)',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            "&:hover": {
                backgroundColor: 'rgba(25, 0, 50, 0.3)'
            },
        }
    })
)

export default function CodeEditor() {
    // Editor error message interface
    interface errMsg {
        code: string,
        endColumn: Number,
        endLineNumber: Number,
        message: string,
        startColumn: Number,
        startLineNumber: Number
    }
    const [errors, updateErrors] = useState<errMsg[]>([]);

    const classes = useStyles();

    // useSelector to get the redux variable
    const activeFile = useSelector<codeState, codeState['activeFile']>((state) => state.activeFile)
    const currentFiles = useSelector<codeState, codeState['openEditors']>((state)=> state.openEditors);
    
    const html = useSelector<codeState, codeState['html']>((state) => state.html)
    const css = useSelector<codeState, codeState['css']>((state) => state.css)
    const js = useSelector<codeState, codeState['js']>((state) => state.js)

    interface fileDesc {
        name: string,
        language: string,
        value: string
    }

    var fileStruct: { [fname: string]: fileDesc; } = { };
    fileStruct["index.js"]= {
          name: "index.js",
          language: "javascript",
          value: js,
    }
    fileStruct["index.css"]= {
        name: "script.css",
        language: "css",
        value: css,
    }
    fileStruct["index.html"]= {
        name: "script.html",
        language: "html",
        value: html,
    }

    const file = fileStruct[activeFile]

    const dispatch = useDispatch();

    const handleDelete = (fileName:string) => {
        dispatch(delOpenFile(fileName))
    };

    const logErrors = (markers:errMsg[]) => {
        console.log(errors)
        updateErrors(markers)
    }

    const handleClick = (fileName:string) => {
        console.log(fileName)
        dispatch(updateActiveFile(fileName))
    };

    const onUpdateContent = (value:string|undefined, content:any) => {
        if(value) {
            activeFile==='index.html'? 
                dispatch(updateHtml(value)) 
                : activeFile === 'index.css' ? 
                dispatch(updateCss(value)) 
                : dispatch(updateJs(value))
        }
    }
    return (
        <Paper className="paper">
            {currentFiles.length>0 ? 
                <>
                    {currentFiles.map((item, index) => {
                        return (
                            <Chip className={classes.chip} key={index} label={item} onClick={()=>handleClick(item)} style={activeFile===item?{backgroundColor: 'rgba(25, 0, 50, 0.05)'}:undefined} onDelete={()=>handleDelete(item)}/>
                        )
                    })}
                    <Divider />
                    <Grid container direction="column">
                        <Grid item>
                            <Editor
                                height="65vh"
                                theme="vs-dark"
                                defaultLanguage={file.language}
                                path={file.name}
                                onChange={(e, v) => onUpdateContent(e,v)}
                                defaultValue={file.value}
                                onValidate={logErrors}
                            />
                        </Grid>
                        <Grid item>
                            <Typography component="p" style={{fontWeight: 'bold', paddingLeft: '10px'}}>File errors</Typography>
                            <Divider/>
                            <div style={{overflowY: "scroll"}}>
                            {errors.map(item => (
                                <>
                                    <Typography style={{fontWeight: 'bold', color: "red"}} component="span">{item.startColumn}:{item.startLineNumber}</Typography>
                                    <Typography style={{paddingLeft: '5px'}} component="span">{item.message}</Typography>
                                    <br/>
                                </>
                                )
                            )}
                            </div>
                        </Grid>
                    </Grid>
                    {/* <TextField value={activeFile==="index.html"?html: activeFile==="index.css"?css:js} onChange={onUpdateContent} variant="outlined" /> */}
                </>
            : 
            <div className="openEditorMessage" >
                <Typography variant="h6">Open an Editor to start coding </Typography><CodeIcon className="icon" fontSize="large" />
            </div>}
        </Paper>
    )
}