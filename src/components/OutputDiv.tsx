import { Typography, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { codeState } from "../codeReducer";
import {useRef} from 'react';
import { useEffect } from "react";
import { useState } from "react";

export default function OutputDiv() {
    const [output, setOutput] = useState<HTMLIFrameElement>()
    const html = useSelector<codeState, codeState['html']>((state) => state.html)
    const css = useSelector<codeState, codeState['css']>((state) => state.css)
    const js = useSelector<codeState, codeState['js']>((state) => state.js)

    const document = output?.contentDocument;
    var content = 
          <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
            <style>
              {css}
            </style>
          </head>
          <body>
            {html}
            <script type="text/javascript">
              {js}
            </script>
          </body>
          </html>
    document?.open();
    document?.write(String(content));
    document?.close()


return (
    <Paper className="paper">
            <iframe ref={output}></iframe>
        </Paper>
    )
}
