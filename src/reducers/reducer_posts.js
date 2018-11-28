import { FETCH_DEVICES, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action){
  switch(action.type){
    case DELETE_POST:
      
      return _.omit(state, action.payload);
    case FETCH_POST:
      console.log(action.payload.data);
     return {...state, [action.payload.data.id]: action.payload.data};//Key interpolation 
    case FETCH_DEVICES:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}