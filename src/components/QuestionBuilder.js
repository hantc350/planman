import React from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from "mobx-react";

import Fab from '@material-ui/core/Fab';
import Storage from './../Storage';
import NavigationIcon from '@material-ui/icons/Navigation';


const useStyles = makeStyles(theme => ({
    textField: {
        minWidth: '48%',
        width: 'auto',
        maxWidth: '100%',
        marginLeft: '5px',
        marginRight: '5px',
    },
    button: {
        width: '10%',
        minWidth: '190px',
        marginTop: '18px',
        marginBottom: '18px',
    },
    right: {
        float: 'right',
    },
}));

const selectText = (event) => event.target.select();

export default observer(function QuestionBuilder() {
    const classes = useStyles();
    return (
        <div>
            <p>Build your question tree and ask questions now!</p>
            <TextField
                className="textField"
                onFocus={selectText}
                variant="outlined"
                label="Ask a question"
            />
            <br />
            <div style={{ display: "inline-block", width: "50%" }}>
                <div style={{ float: "right", marginRight: "20px" }}>
                    <p>Ask more if she says YES!!</p>
                    <TextField
                        className="textField"
                        onFocus={selectText}
                        variant="outlined"
                        label="Ask a question"
                    />
                </div>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
                <div style={{ float: "left", marginLeft: "20px" }}>
                    <p>Ask her why if she says NO!!</p>
                    <TextField
                        onFocus={selectText}
                        variant="outlined"
                        label="Ask a question"
                    />
                </div>
            </div>

            <div align="center">
                <Fab variant="extended" color="primary" aria-label="add" className={classes.button}>
                    <NavigationIcon className={classes.extendedIcon} />
                    send
          </Fab>
          <p><a>http://www.planman-share/id323117</a></p>
            </div>
        </div>
    )

});