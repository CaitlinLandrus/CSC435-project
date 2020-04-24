import axios from 'axios'

let url ='';

if(process.env.NODE_ENV ==='production'){
    url = 'https://csc435-caitlin-app.herokuapp.com/api'
}
else{
    url= 'mongodb://localhost:5000/applicationdb'
}

const api = axios.create({
    baseURL: url,
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis
