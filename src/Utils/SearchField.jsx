import React, { useState, useContext } from 'react'
import { ImageContext } from "../Context/ImageContext";
import { accessKey } from "../API/config";


const SearchField = () => {

    const [searchValue, setSearchValue] = useState();
    const { fetchData, setSearchImage} = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchClick = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${accessKey}`)
        setSearchValue("")
        setSearchImage(searchValue)
    }

    const handleEnterSearch = (e) => {
        if (e.key === "Enter") {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=${accessKey}`)
            setSearchValue("")
            setSearchImage(searchValue)
        }
    }

    return (
        <div className="search-bar flex my-2">
            <input
                type="search"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
                placeholder="Search images here"
                className="rounded-md p-2 border outline-none focus:shadow-md focus:shadow-orange-200" />
            <button
                disabled={!searchValue}
                onClick={handleSearchClick}
                className="btn-search mx-2 text-lg font-semibold text-white p-2 rounded-md bg-orange-500 transition-all hover:bg-orange-600 disabled:bg-orange-200 ">
                Search
            </button>
        </div>
    )
}

export default SearchField