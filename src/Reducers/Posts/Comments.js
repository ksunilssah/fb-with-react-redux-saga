import { GET_COMMENTS, POST_NEW_COMMENT } from "../../constants";
export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    case POST_NEW_COMMENT:
      return [action.payload, ...state];
    default:
      return state;
  }
};
