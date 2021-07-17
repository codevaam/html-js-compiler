import { Divider, Paper, Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { codeState } from "../codeReducer";


export default function OutputDiv() {
    //get redux states for html, css, js
    const html = useSelector<codeState, codeState['html']>((state) => state.html)
    const css = useSelector<codeState, codeState['css']>((state) => state.css)
    const js = useSelector<codeState, codeState['js']>((state) => state.js)

    // construct the html structure for the iframe, alternatively babel or webpack can be used to compile
    var code = '<html lang="en">';
    code+='<head><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title>';
    code+=` <style>${css}</style>` 
    code+=`</head>`;
    code+=`<body>${html}<br/><script>\n${js}</script></body></html>`;

    // WIP: console section

    // console.stdlog = console.log.bind(console);
    // console.logs = [];
    // console.log = function(){
    //     console.logs.push(Array.from(arguments));
    //     console.stdlog.apply(console, arguments);
    // }
        
    console.log(code);
    return (
        <Paper className="paper">
            <Typography variant="h6" style={{padding: '2px 0px 2px 10px'}}>Output</Typography>
            <Divider />
            <Grid container direction="column">
                <Grid item>
                    <iframe srcDoc={code} title="output" style={{ border: 'none', overflow: 'scroll', height: '64vh'}}/>
                </Grid>
                <Grid item alignContent="flex-end">
                    <Divider />
                    <Typography component="span" style={{fontWeight: 'bold', paddingLeft: '10px'}}>Console</Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Paper>
    )
}
