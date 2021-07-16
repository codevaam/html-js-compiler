import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Theme, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        drawer: {
            padding: theme.spacing(1)
        }
    })
)

export default function FileSection() {
    const classes = useStyles();
    return (
        <Paper className="paper">
            <Typography variant="body1" className={classes.drawer}>index.html</Typography>
            <Typography variant="body1" className={classes.drawer}>index.css</Typography>
            <Typography variant="body1" className={classes.drawer}>index.js</Typography>
        </Paper>
    )
}