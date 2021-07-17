import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Theme, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { codeState } from "../codeReducer";
import { updateActiveFile, updateOpenFiles } from "../actions";

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        drawer: {
            padding: theme.spacing(1)
        }
    })
)

export default function FileSection() {
    const openFiles = useSelector<codeState, codeState['openEditors']>((state)=>state.openEditors)

    const dispatch = useDispatch();
    const addFile = (fileName: string) => {
        if(!openFiles.includes(fileName)) {
            dispatch(updateOpenFiles(fileName));
        }
        dispatch(updateActiveFile(fileName))
    }
    const classes = useStyles();
    return (
        <Paper className="paper-file">
            <div className="filename" onClick={() => addFile('index.html')}>
                <Typography variant="body1" className={classes.drawer}>index.html</Typography>
            </div>
            <div className="filename" onClick={() => addFile('index.css')}>
                <Typography variant="body1" className={classes.drawer}>index.css</Typography>
            </div>
            <div className="filename" onClick={() => addFile('index.js')}>
                <Typography  variant="body1" className={classes.drawer}>index.js</Typography>
            </div>
        </Paper>
    )
}