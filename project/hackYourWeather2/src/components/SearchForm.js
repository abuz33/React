import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = (props) => {
  return (
    <div>
      <form
        className="form-inline d-flex justify-content-center md-form form-sm mt-0"
        onSubmit={props.onSubmit}
      >
        <FontAwesomeIcon icon={faSearch} style={{ fontSize: 20 }} />
        <input
          className="form-control m-1 w-50"
          type="text"
          aria-label="Search"
          onChange={props.onChange}
          name="city"
          placeholder="Search City"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
