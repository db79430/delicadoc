import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://panel.promo.develop-ogr.ru/api-site`,


})

export const getInfoGiftPromo = async () => {
    try {
        const response = await instance.get(`/promo/gift`);
        if (!Array.isArray(response.data)) {
            throw new Error('Expected data to be an array');
        }
        console.log('Data received:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postRegistrationUser = async () => {
    try {
        const response = await instance.post(`/user/registration`);
        if (!Array.isArray(response.data)) {
            throw new Error('Expected data to be an array');
        }
        console.log('Data received:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postUserAuthenticated = () => {
    return instance.post(`/user/authenticated`).then(response => {
        return response.data
    })
}

export const postRecoveryPassword = (userId) => {
    return instance.get(``,).then(response => {
        return response.data
    })
}






// Логирование запросов
instance.interceptors.request.use(
    config => {
        console.log('Request:', config);
        return config;
    },
    error => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Логирование ответов
instance.interceptors.response.use(
    response => {
        console.log('Response:', response);
        return response;
    },
    error => {
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default instance;
export const authApi = {

}
