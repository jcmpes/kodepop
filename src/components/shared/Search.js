import React from 'react';
import FormField from './FormField';

import './Search.css';

function Search({ searchParams, setSearchParams }) {


    const handleSearchField = e => {
        setSearchParams(e.target.value)
        console.log(e.target.value)
    }

    return (
        <form className='searchForm' onSubmit={e => e.preventDefault()}>
            <FormField 
                type="search"
                id="search-field"
                placeholder="Search"
                onChange={handleSearchField}
                value={searchParams}
            />
        </form>
    )
};

export default Search;