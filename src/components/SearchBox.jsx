import React, { Component } from 'react';

const handleSubmit = (onSearch, e) => {
  e.preventDefault();
  const value = e.target.querySelector('input').value;
  value && onSearch(value);
};

export default ({ value, options, onSearch }) => (
  <form action="javascript:;" onSubmit={handleSubmit.bind(null, onSearch)}>
    <input type="text"/>
    <button type="submit">Search</button>
  </form>
);
