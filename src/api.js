import axios from "axios"
//const baseURL='http://localhost:4000'
//const api = axios.create({baseURL})

export const getCardapio = async () => {
  axios.get('http://localhost:4000/cardapio')
  .then(response => {
    return response
  })
  .catch(error => {
    return error
  });

}
export const postPedido = async (body) => {
  axios.post('http://localhost:4000/pedidos',body)
  .then(response => {
    return response
  })
  .catch(error => {
    return error
  });

}