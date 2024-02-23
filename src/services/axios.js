import axios from 'axios'

export default axios.create({
    //url da API
    baseURL: 'http://localhost:3000/api'
})