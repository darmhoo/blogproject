import config from 'config';
import { handleResponse, requestOptions } from '@/_helpers';

export const postService = {
  getAll,
  getById,
  create
};

function getAll() {
  return fetch(`http://localhost:3000/posts`, requestOptions.get())
    .then(handleResponse);
}

function getById(id) {
  return fetch(`http://localhost:3000/posts/${id}`, requestOptions.get())
    .then(handleResponse);
}
function create(title, content){
  return fetch(`http://localhost:3000/posts`, requestOptions.post({ title, content }))
    .then(handleResponse);


}

