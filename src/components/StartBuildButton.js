import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const onClickHandler = () =>{
    console.log("lets build! ", Storage.isBuilding);
    Storage.isBuilding = true;
}

export default observer(function ButtonSizes() {
    const classes = useStyles();

    return (
        <div>

            <div align="center">
                <Button variant="contained" size="large" onClick={onClickHandler} color="primary" className={classes.margin}>
                    Start building a question tree
          </Button>
            </div>

        </div>
    );
})