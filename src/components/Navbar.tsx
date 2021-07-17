import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Theme, IconButton } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import { Share } from "@material-ui/icons";
import uniqueString from 'unique-string';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1
        },
        appbar: {
            backgroundColor: "#151515"
        },
        title: {
            flexGrow: 1
        },
    })
)

export default function NavBar() {
    const classes = useStyles();
    // const dispatch = useDispatch();
    function handleShare() {
        const id = uniqueString();
        console.log(id);

        // WIP: pastebin share api
        
        // fetch('https://pastebin.com/api/api_post.php', {
        //     method: 'post',
        //     body: {
        //         api_dev_key: 'bfzBdc61ZmxE91cOb5PDxfhp8Ee4EPfQ'
        //     }
        // })
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>DE-CODE</Typography>
                    <IconButton onClick={handleShare}>
                        <Share/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}