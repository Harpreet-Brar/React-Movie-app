import React, { Component } from 'react'
import Movielist from './Movielist';
import TextField from '@material-ui/core';
import  MenuItem  from '@material-ui/core/MenuItem';
import inputLabel  from '@material-ui/core/inputLabel';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl  from '@material-ui/core/FormControl';
import Select  from '@material-ui/core/Select';
class MovieView extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      moviecategory: 'popular'
    }
    this.change = this.change.bind(this);
  }
  change(event){
    this.setState({moviecategory: event.target.value});
    new Movielist({"category":event.target.value})
    console.log(event.target.value)
}
  render (){
    return(
      <div className="viewareaall">
        <FormControl variant="outlined" className="catform">
      <InputLabel ref={inputLabel}>
        Category
      </InputLabel>
      <Select className="Categories"
    style= {{
        width:"100px",
        height:"40px",
        textAlign:"center"
    }}
    onChange={this.change}
    value={this.state.moviecategory}
    >
        <MenuItem value={"now_playing"}>now_playing</MenuItem>
        <MenuItem value={"popular"}>popular</MenuItem>
        <MenuItem value={"top_rated"}>top_rated</MenuItem>
        <MenuItem value={"upcoming"}>upcoming</MenuItem>

    </Select>
    </FormControl>
    <Movielist category ={this.state.moviecategory}/>
    </div>
    
    )
  }
}
export default MovieView
