import React, { Component } from 'react'
import Movies from '../components/Movies'
import { width } from '@material-ui/system'

class MoviesContainer extends Component {
  state = {
    movies: Movies
  }
  render() {
    const { movies } = this.state
    return (
        <div width="100%">
        <Movies
          movies={movies}
        />
        </div>
    )
  }
}

export default MoviesContainer
