import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSubreddit, fetchPosts } from '../actions';
import SearchBox from '../components/SearchBox';
import Posts from '../components/Posts';

const mapStateToProps = state => state;
const mapDispatchToProps = { setSubreddit, fetchPosts };

@connect(mapStateToProps, mapDispatchToProps)
export default class AsyncApp extends Component {
  render() {
    const { subreddit, isFetching, posts,
            setSubreddit, fetchPosts } = this.props;

    return (
      <div>
        <SearchBox onSearch={(subreddit) => {
            setSubreddit(subreddit);
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
