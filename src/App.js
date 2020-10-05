import React,{useState} from 'react';

import './App.css';
// import {Button,Container,Typography,Paper,Grid} from '@material-ui/core';
import NavBar from './components/navbar';
import Sample from './components/sample'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { purple } from '@material-ui/core/colors';
import {connect} from 'react-redux'

function App(props) {

  const [prefersDarkMode,setTheme] = useState(false)
  const [todo,setTodo] = useState('')
  const theme = createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary:{
          main: purple[500]
          }
        },
      })
  
  const handleTheme = ()=>{
    setTheme(!prefersDarkMode)
  }

  const handleIncrement = ()=>{
    props.onIncrement()
  }
  const handleDecrement = ()=>{
    props.onDecrement()
    // props.dispatch({type:'DECREMENT'})
  }
  const handleChange =(e)=>{
    setTodo(e.target.value)
    
  }
  const handleAdd = ()=>{
    props.addTodo(todo)
    setTodo('')
  }
  const handleAsync = ()=>{
    props.onIncrementAsync()
  }
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar onTheme={handleTheme}/>
      <Sample 
            value={props.value}
            onInc={()=>handleIncrement()}
            onDec={()=>handleDecrement()}
            onInputChange = {(e)=>handleChange(e)}
            inputVal = {todo}
            todos = {props.todos}
            onAdd = {handleAdd}
            onIncAsync = {handleAsync}
            // getUsers={()=>action('FETCH_USERS_REQUEST')}
      />
    </ThemeProvider>
  );
}
const mapStateToProps = (state)=>({
  value : state.value,
  todos : state.todos
})

const mapDispatchToProps = (dispatch)=>({
  onIncrement : ()=> dispatch({type:'INCREMENT'}),
  onDecrement : ()=> dispatch({type:'DECREMENT'}),
  onIncrementAsync : () => dispatch({type:'INCREMENT_ASYNC'}),
  addTodo : (todo)=>dispatch({type:'ADD_TODO',payload : todo})
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
  


 
