import axios from 'axios';
import { base_url, config, } from '../../utils/axiosConfig';


const getTodos = async () => {
    const response = await axios.get(`${base_url}`);
    if (response.data) {
        return response.data;
    }
}


const editTodos = async (yourData) => {
    const {prodId,todoData} =yourData;

    console.log(prodId,"👍👍👍👍👍",todoData);
    const response =await axios.put(`${base_url}updateUser/${prodId}`,todoData);
    console.log(response.data);
    if (response.data) {
        return response.data;
    }

}

const deleteTodo = async (todoId) => {
    const response =await axios.delete(`${base_url}deleteUser/${todoId}`);
    if (response.data) {
        return response.data;
    }

}

const singleTodo = async (todoId) => {
    const response =await axios.get(`${base_url}find/${todoId}`);
    if (response.data) {
        return response.data;
    }

}

const addTodos =async (todoData)=>{
    const response =await axios.post(`${base_url}`,todoData,config);
    if (response.data) {
        return response.data;
    }

}

export const todoService = {
getTodos,
editTodos,
deleteTodo,
addTodos,
singleTodo
    
}