import axios from 'axios';

export default class AdminService {
  constructor () {
    this.axios = axios.create({
      baseURL: 'http://localhost:5000/vest/',
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
  }


  async cadastrarProduto (dados) {
    const {data} = await this.axios.post('/veste', dados)

    if (data) {
      console.log(data);
      

      return true
    }

    return
  }
}