import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import {Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const NavBar = (props) =>{
    return(
        <AppBar position='static' >
            <Toolbar style={{justifyContent:'space-between'}} >
                <Typography variant="h6">
                    React Application
                </Typography>
                <Tooltip title="Toggle light/dark theme" aria-label="add">
                  <IconButton onClick={props.onTheme} aria-label="add to favorites">
                    <Brightness7Icon style={{color:'white'}}/>
                  </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;