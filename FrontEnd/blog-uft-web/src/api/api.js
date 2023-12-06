// api.js
import axios from 'axios';

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

// Função para fazer login
export const login = (userData) => API.post('login/', userData);

// Função para registrar
export const register = (userData) => API.post('register/', userData);

export const fetchBlogs = () => API.get('blogs');

export const fetchBlogPost = (id, token) => {
    return API.get(`get_blog/${id}`, { 
        headers: { Authorization: `Bearer ${token}` } 
    });
};

export const fetchCategories = (token) => {
    return API.get('categories', { 
        headers: { Authorization: `Bearer ${token}` } 
    });
};

export const addComment = (c_id, commentData, token) => {
    return API.post(`add_comment/${c_id}/`, commentData, {
        headers: { Authorization: `Bearer ${token}` } 
    });
};

export const fetchComments = (c_id) => {
    return API.get(`get_all_comment/${c_id}`);
};

export const fetchAuthor = (c_id) => {
    return API.get(`get_user/${c_id}`);
};

export const fetchMyBlogs = (token) => {
    return API.get(`blogs_created`,{
        headers: { Authorization: `Token ${token}` }
    });
};

export const deleteBlog = (c_id, token) => {
    return API.delete(`delete_blog/${c_id}`,{
        headers: { Authorization: `Token ${token}` }
    });
};

export const UpdateBlog = (c_id, token) => {
    return API.put(`update_blog/${c_id}`,{
        headers: { Authorization: `Token ${token}` }
    });
};

export default API;
