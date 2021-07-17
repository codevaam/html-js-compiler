import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Theme, Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateTheme } from "../actions";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
)

export default function NavBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    function changeTheme(event: React.ChangeEvent<{ value: unknown }>) {
        dispatch(updateTheme(event.target.value as string))
    }
    return (
        <div className={classes.root}>
            <AppBar color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Code Editor</Typography>
                    <FormControl>
                        <InputLabel>Theme</InputLabel>
                        <Select onChange={changeTheme}>
                            <MenuItem value="light">Light</MenuItem>
                            <MenuItem value="dark">Dark</MenuItem>
                        </Select>
                    </FormControl>
                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}