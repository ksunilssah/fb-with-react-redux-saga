import {
  combineReducers
} from "redux";
import PostList from "./Posts/Post-List";
import Users from "./Posts/User";
import Comments from "./Posts/Comments";

export const rootReducers = combineReducers({
  posts: PostList,
  profile: Users,
  comments: Comments
});


export const initialState = {
  posts: [{
      id: 1,
      desc: "I feel json like learning react is a piece of cake.",
      location: {
        latitude: "",
        longitude: ""
      },
      time: "7/8/2018, 5:28:34 PM"
    },
    {
      id: 2,
      desc: "Need to implement google map..will do it soon",
      location: {
        latitude: "",
        longitude: ""
      },
      time: "7/8/2018, 4:22:34 PM"
    }
  ],
  comments: [{
      id: 1,
      body: "some comment",
      postId: 1
    },
    {
      id: 2,
      body: "some comment",
      postId: 2
    }
  ],
  profile: {
    name: "sunil",
    img: "../img/user.png"
  }
};