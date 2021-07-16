import { Typography, Paper, Chip, Divider } from "@material-ui/core";
import { useState } from "react";
import '../styles/CodeEditor.component.css';

export default function CodeEditor() {
    const [currentFiles, updateOpenFiles] = useState([]);
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <Paper className="paper">
            {currentFiles.length>0 ? 
                <>
                    {currentFiles.map(item => {
                        return (
                            <Chip label={item} onClick={handleClick} style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} onDelete={handleDelete}/>
                        )
                    })}
                    <Divider />
                </>
            : 
            <div className="openEditorMessage">
                <Typography variant="h6">Open an Editor to start coding</Typography>
            </div>}
        </Paper>
    )
}