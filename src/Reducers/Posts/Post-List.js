import { RECEIVE_API_DATA, REQUEST_POST_API } from "../../constants";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return action.payload;
    case REQUEST_POST_API:
    return [action.payload, ...state];
    default:
      return state;
  }
};
