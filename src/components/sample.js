import React from 'react';
import {Button, Typography,Grid,TextField,List,ListItem,Box} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root : {
    marginLeft : 30
  }
})
const Sample =(props)=>{
  const classes = useStyles()
    return(
        <React.Fragment>
        <Grid container spacing={3} style={{margin:'20px 0px'}}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={props.onInc}>
              Increment
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={props.onDec}>
              Decrement
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={props.onIncAsync}>
              Increment after 1 second
            </Button>
          </Grid>
          {/*<button onClick={getUsers}>
            get users
          </button> */}
          <Grid item>
            <Typography>
              Clicked: {props.value} times
            </Typography>
          </Grid>
        </Grid>
        <Box  p={1} m={1} bgcolor="background.paper">
          <Box display="flex" flexDirection="row">
            <TextField id="standard-basic" label="Standard" value={props.inputVal} onChange={props.onInputChange}/>
            <Button className={classes.root} variant="contained" color="primary" onClick={props.onAdd}>ADD</Button>
          </Box>
          <List>
            {props.todos.map((item,index)=>{
              return <ListItem key={index}>{item}</ListItem>
            })}
          </List>
        </Box>
      </React.Fragment>
    )
}

export default Sample;