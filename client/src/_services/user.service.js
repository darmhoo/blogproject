import config from 'config';
import { handleResponse, requestOptions } from '@/_helpers';

export const userService = {
    getAll,
    getById
};

function getAll() {
    return fetch(`http://localhost:3000/auth`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`$http://localhost:3000/auth/${id}`, requestOptions.get())
        .then(handleResponse);
}
