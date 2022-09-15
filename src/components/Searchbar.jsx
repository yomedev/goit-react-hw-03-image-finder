import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <header className="searchbar">
      <form className="form">
        <button
          onClick={handleSubmit}
          type="submit"
          className="button"
        >
          <BsSearch size={20} />
          <span className="button-label">Search</span>
        </button>

        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar