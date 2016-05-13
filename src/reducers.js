import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './actions';

const isFetching = handleActions({
  REQUEST_POSTS: () => true,
  FETCH_POSTS: () => false
}, false);
const posts = handleActions({
  FETCH_POSTS: {
    next(state, action){
      return action.payload.posts;
    },
    throw(state, action) {
      alert(action.payload);
      return state;
    }
  }
}, []);

export default combineReducers({
  isFetching,
  posts
});
