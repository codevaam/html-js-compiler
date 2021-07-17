import { Grid, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import FileSection from "./FileSection";
import CodeEditor from "./CodeEditor";
import OutputDiv from "./OutputDiv";

import '../styles/MainScreen.component.css';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        gridCol: {
            height: '90vh',
            width: '100%',
            margin: 0
        },
        bgColor: {
            backgroundColor: '#252525'
        }
    })
)

export default function MainScreen() {
    const classes = useStyles();
    return (
        <Grid container direction="row" className={classes.gridCol} spacing={2} style={{marginTop: 70}}>
            <Grid item xs={2}>
                <FileSection />
            </Grid>
            <Grid item xs>
                <CodeEditor />
            </Grid>
            <Grid item xs>
                <OutputDiv />
            </Grid>
        </Grid>
    )
}