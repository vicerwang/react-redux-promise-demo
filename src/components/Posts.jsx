import React, { Component } from 'react';

export default ({ posts }) => (
  <ul>
    {posts.map((post, index) =>
      <li key={index}>{post.title}</li>)}
  </ul>
);
