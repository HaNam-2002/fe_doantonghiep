import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// method instance
export const get = async (endPoints, option = {}) => {
    return await instance.get(endPoints, option);
};

export const post = async (endPoints, body = {}, option = {}) => {
    return await instance.post(endPoints, body, option);
};

export const put = async (endPoints, body = {}, option = {}) => {
    return await instance.put(endPoints, body, option);
};

export const deleteRe = async (endPoints, option = {}) => {
    return await instance.delete(endPoints, option);
};
