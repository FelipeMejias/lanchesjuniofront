import axios from "axios"
const baseURL='http://localhost:4000'
const api = axios.create({baseURL})

export const getProdutos = async () => {
  return api.get(`/produtos`)
}
export const postProduto = async (body) => {
  return api.post(`/produtos`,body)
}
export const putProduto = async (id,body) => {
  return api.put(`/produtos/${id}`,body)
}
export const deleteProduto = async (id) => {
  return api.delete(`/produtos/${id}`)
}