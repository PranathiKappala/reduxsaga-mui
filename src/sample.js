import React,{useState} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Button,Tooltip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { purple } from '@material-ui/core/colors';
import Brightness7Icon from '@material-ui/icons/Brightness7';
function App() {

  const [prefersDarkMode,setTheme] = useState(false)
  const theme = createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // Purple and green play nicely together.
            main: purple[500],
          },
          neutral: {
            main: '#5c6ac4',
          },
        },
      })
  
  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  const handleTheme = ()=>{
    setTheme(!prefersDarkMode)
  }
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Tooltip title="Toggle light/dark theme" aria-label="add">
      <IconButton onClick={handleTheme} aria-label="add to favorites">
          <Brightness7Icon />
        </IconButton>
        </Tooltip>
      <Button color='primary'>Hook</Button>
      {/* <Routes /> */}
    </ThemeProvider>
  );
}
export default App;