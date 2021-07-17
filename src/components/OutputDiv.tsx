import { Divider, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { codeState } from "../codeReducer";
// import { useState } from "react";

export default function OutputDiv() {
    // const [output, setOutput] = useState<HTMLIFrameElement>()
    const html = useSelector<codeState, codeState['html']>((state) => state.html)
    const css = useSelector<codeState, codeState['css']>((state) => state.css)
    const js = useSelector<codeState, codeState['js']>((state) => state.js)
    var code = '<html lang="en">';
    code+='<head><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title>';
    code+=` <style>${css}</style>` 
    code+=`</head>`;
    code+=`<script>${js}</script>`;
    code+=`<body>${html}</body></html>`;
        
    console.log(code);
    return (
        <Paper className="paper">
            <Typography variant="h6" style={{padding: '2px 0px 2px 10px'}}>Output</Typography>
            <Divider />
            <div dangerouslySetInnerHTML={{__html:code}} />
        </Paper>
    )
}
