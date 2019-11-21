import React, { Component } from 'react'
import Api from '../services/api'
import SearchView from './SearchView'

class Searchlist extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Seachquery: null
    }
  }

myCall = (dataFromparent) => {
    this.setState({ Seachquery: dataFromparent });
}
  render () {
if(this.state.Seachquery=="{}"){
      return(<h1>Please Enter a Search</h1>)
}
else if(this.state.Seachquery=="x"){
  
  return(<h1>Please Initiate a Search</h1>)
}
    
  }
}
export default Searchlist
