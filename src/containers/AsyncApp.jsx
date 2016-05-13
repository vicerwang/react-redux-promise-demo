import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPosts, fetchPosts } from '../actions';
import SearchBox from '../components/SearchBox';
import Posts from '../components/Posts';

const mapStateToProps = state => state;
const mapDispatchToProps = { requestPosts, fetchPosts };

@connect(mapStateToProps, mapDispatchToProps)
export default class AsyncApp extends Component {
  render() {
    const { subreddit, isFetching, posts,
            requestPosts, fetchPosts } = this.props;

    return (
      <div>
        <SearchBox onSearch={(subreddit) => {
            requestPosts(subreddit);
            fetchPosts(subreddit);}} />
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <Posts posts={posts} />
          </div>}
      </div>
    );
  }
}
