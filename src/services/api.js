import axios from 'axios'

const apiKey = 'd9c0c0af12a71e886622055327b1fe9f'

export default {
  getMovies: (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query,type) => {
    const url = `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${apiKey}`
    return axios.get(url).then(info => info.data)
  },
  getTv: (category) => {
    const url = `https://api.themoviedb.org/3/tv/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
}

