import { FETCH_USER } from "../actions/types";

const reducerFunction = function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
export default reducerFunction;
///urls:https://mighty-wildwood-13215.herokuapp.com
//redirect urls:https://mighty-wildwood-13215.herokuapp.com/auth/google/callback
//redirect urls:http://localhost:3000/auth/google/callback
