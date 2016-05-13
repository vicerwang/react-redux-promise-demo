import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';

export const requestPosts = createAction(REQUEST_POSTS);

// es7 async/await
export const fetchPosts = createAction(FETCH_POSTS, async subreddit => {
  const response = await fetch(`http://www.subreddit.com/r/${subreddit}.json`);
    if (response.ok) {
      const json = await response.json();
      return { posts: json.data.children.map(child => child.data) };
    }
    throw new Error(response.statusText);
});

// es6 promise
// export const fetchPosts = createAction(FETCH_POSTS, subreddit =>
//   fetch(`http://www.subreddit.com/r/${subreddit}.json`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error(response.statusText));
//     })
//     .then(json => ({ posts: json.data.children.map(child => child.data) })));
