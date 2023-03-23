import React from 'react'

const SearchField = () => {
    return (
        <div className="search-bar flex my-2">
            <input
                type="search"
                placeholder="Search images here"
                className="rounded-md p-2 border outline-none focus:shadow-md focus:shadow-orange-200" />
            <button
                disabled
                className="btn-search mx-2 text-lg font-semibold text-white p-2 rounded-md bg-orange-500 transition-all hover:bg-orange-600 disabled:bg-orange-200 ">
                Search
            </button>
        </div>
    )
}

export default SearchField