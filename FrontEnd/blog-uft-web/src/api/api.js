// api.js
import axios from 'axios';

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

// Função para fazer login
export const login = (userData) => API.post('login/', userData);

// Exportando a instância configurada
export default API;
