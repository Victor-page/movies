import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './SearchMoviesForm.module.css';

const SearchMoviesForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter some valid search query please.');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleQueryChange}
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className={classes['submit-button']}>
        Search
      </button>
    </form>
  );
};

export default SearchMoviesForm;
