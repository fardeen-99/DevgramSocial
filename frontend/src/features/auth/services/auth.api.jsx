import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})

export const Login = async (form) => {

  try {
    const res = await api.post("/auth/login", form)
    return res.data
  } catch (error) {
    throw error
  }
}
export const Register = async (form) => {

  try {
    const res = await api.post("/auth/register", form)
    return res.data
  } catch (error) {
    throw error
  }
}
export const Getme = async () => {

  const res = await api.get("/auth/get-me")
  console.log(res.data.user)
  return res.data



}
export const Logout = async () => {

  const res = await api.post("/auth/logout")
  return res.data
}

export const getallpost = async () => {

  const res = await api.get("/post")
  return res.data
}