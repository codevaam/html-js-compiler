import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Theme, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { codeState } from "../codeReducer";
import { updateActiveFile, updateOpenFiles } from "../actions";

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        filename: {
            backgroundColor: 'rgba(2, 0, 240, 0.05)',
            paddingLeft: '5px',
            '&:hover': {
                backgroundColor: 'rgba(2, 0, 240, 0.1)',
            }
        },
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
        <Paper className="paper">
            <div>
                <Typography variant="body1" style={{paddingTop: '10px', paddingLeft: '5px'}}>Files</Typography>
            </div>
            <div onClick={() => addFile('index.html')}>
                <Typography variant="body1" className={classes.filename}>index.html</Typography>
            </div>
            <div onClick={() => addFile('index.css')}>
                <Typography variant="body1" className={classes.filename}>index.css</Typography>
            </div>
            <div onClick={() => addFile('index.js')}>
                <Typography  variant="body1" className={classes.filename}>index.js</Typography>
            </div>
        </Paper>
    )
}