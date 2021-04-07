import React from 'react';
import FormField from './FormField';

function Search() {

    const [searchValue, setSearchValue] = React.useState('')

    const handleSearchField = e => {
        setSearchValue(e.value)
        console.log(e)
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <FormField 
                type="search"
                placeholder="Search"
                onChange={handleSearchField}
                value={searchValue}
            />
        </form>
    )
}

export default Search;