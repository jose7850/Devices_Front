import axios from 'axios';

const API_KEY = "?key=1346a190836cd7de2c9eda8a21b9a7";
const ROOT_URL = 'http://187-162-35-122.static.axtel.net:8080'; //`https://jsonplaceholder.typicode.com`;

export const FETCH_DEVICES = 'FETCH_DEVICES';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export function fetchDevices() {

  const url = `${ROOT_URL}/devices`;

  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_DEVICES,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/devices`, values)
  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/devices/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/devices/${id}`)
  .then(()=> callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function updateDevice(id, values, callback) {
  const request = axios.put(`${ROOT_URL}/devices/${id}` , values)
  .then(() => callback());
  return {
    type: EDIT_POST,
    payload: request
  };
}