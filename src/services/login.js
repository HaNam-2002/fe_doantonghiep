import * as request from "../utils/request";

const LOGIN = 'auth/login';
const GET_USER = '/users/get';
const REGISTER = '/auth/register';

export const login = async (userName, passWord) => {
    const response = await request.post(LOGIN, {
        userName: userName,
        passWord: passWord,
    });
    localStorage.setItem("token", response.data.token);
    return response;
};

export const register = async (data) => {
    try {
        const response = await request.post(REGISTER, data);
        return response; // Trả về đối tượng User từ backend
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
        localStorage.removeItem("user");
        throw new Error("User not found");
    }
    try {
        const userResponse = await request.get(GET_USER, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "Application/json",
            },
        });
        localStorage.setItem("user", JSON.stringify(userResponse.data));
        return userResponse.data;
    } catch (e) {
        throw new Error(e.message);
    }
};
