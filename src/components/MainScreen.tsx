import { Grid } from "@material-ui/core";
import FileSection from "./FileSection";
import CodeEditor from "./CodeEditor";
import OutputDiv from "./OutputDiv";

export default function MainScreen() {
    return (
        <Grid container direction="row" style={{marginTop: 100}} justifyContent="space-around">
            <Grid item>
                <FileSection />
            </Grid>
            <Grid item>
                <CodeEditor />
            </Grid>
            <Grid item>
                <OutputDiv />
            </Grid>
        </Grid>

    )
}