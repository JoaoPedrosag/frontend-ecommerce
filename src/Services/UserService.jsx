import axios from 'axios';

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL: 'http://localhost:5000/auth/',
    })
  }

  async login (dados) {
    const {data} = await this.axios.post('/login', dados)

    if (data) {
      console.log(data);
      localStorage.setItem("token", data)

      return true
    }

    return
  }

  async cadastrar (dados) {
    return this.axios.post('/register', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token") !== undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  
  async logout () {
    localStorage.removeItem("token")
  }
}