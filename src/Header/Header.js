import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`/search?q=${searchQuery}`);
    setSearchQuery('');
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header>
      <Link to='/'>
        <h1>News</h1>
      </Link>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search articles...'
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
};

export default Header;