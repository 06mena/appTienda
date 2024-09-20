import React from 'react';
import SearchDropdown from './searchDropdown';
import styles from './css/searchBar.module.css';

const SearchBar = ({ searchTerm, handleInputChange, showDropdown, searchResults, handleResultClick }) => {
  return (
    <div className={styles.relativeContainer}>
      <form className={`d-flex ${styles.searchForm}`} role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className={`${styles.formControl} form-control me-2`}
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
      {showDropdown && (
        <SearchDropdown
          searchResults={searchResults}
          handleResultClick={handleResultClick}
          styles={styles}
        />
      )}
    </div>

  );
};

export default SearchBar;
