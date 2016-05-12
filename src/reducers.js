import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './actions';

const subreddit = handleActions({
  SET_SUBREDDIT: (state, action) => action.payload.subreddit
}, '');
const isFetching = handleActions({
  REQUEST_POSTS: () => true,
  RECEIVE_POSTS: () => false
}, false);
const posts = handleActions({
  RECEIVE_POSTS: {
    next(state, action){
      console.log('running');
      return action.payload.posts;
    },
    throw(state, action) {
      alert(action.payload);
      return state;
    }
  }
}, []);

export default combineReducers({
  subreddit,
  isFetching,
  posts
});
