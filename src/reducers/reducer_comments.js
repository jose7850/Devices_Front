import { FETCH_COMMENTS_BY_POST } from '../actions/comments_action';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_COMMENTS_BY_POST:
      //console.log(action.payload);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}