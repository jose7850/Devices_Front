import axios from 'axios';
const ROOT_URL = `https://jsonplaceholder.typicode.com`;
export const FETCH_COMMENTS_BY_POST = "FETCH_COMMENTS_BY_POST";

export function fetchCommentsByPost( postId ){
  const url = `${ROOT_URL}/posts/${postId}/comments`;
  console.log(url);
  const request = axios.get(url);
  return{
    type: FETCH_COMMENTS_BY_POST, 
    payload: request,
  };
}