import axios from "axios";

const API_URL = 'http://localhost:8080';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
            "email": email,
            "password": password,
        });
        return await response;
    } catch (err) {
        throw err.response?.data?.message || 'Ошибка при входе';
    }
}

export const register = async (firstName, lastName, patronymic, phoneNumber,
                               email, password, repeatPassword) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/auth/register`, {
            "firstName": firstName,
            "lastName": lastName,
            "patronymic": patronymic,
            "phoneNumber": phoneNumber,
            "password": password,
            "repeatPassword": repeatPassword,
            "email": email,
        })
        console.log("Успешная регистрация:", response.data);

        window.location.href = "/login";
    } catch (err) {
        throw err.response?.data?.message || 'Ошибка при регистрации';
    }
}