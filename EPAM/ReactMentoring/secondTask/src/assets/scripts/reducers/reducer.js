import { GET_MOVIES_BY_TITLE, GET_MOVIES_BY_TITLE_SUCCESS } from "../actions/action";
import initialState from '../state/state';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_TITLE:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_MOVIES_BY_TITLE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.users,        
      },console.log("Success : " + action.users));
    default:
      console.log("Default: " + action.users);
      return state;
  }
};

export default reducer;