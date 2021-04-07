import React from 'react';
import FormField from './FormField';

function Search({ searchParams, setSearchParams }) {


    const handleSearchField = e => {
        setSearchParams(e.target.value)
        console.log(e.target.value)
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <FormField 
                type="search"
                placeholder="Search"
                onChange={handleSearchField}
                value={searchParams}
            />
        </form>
    )
}

export default Search;