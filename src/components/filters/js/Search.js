import React from 'react';
import FormField from '../../shared/FormField';

import '../css/Search.css';

function Search({ searchParams, setSearchParams, ...props }) {


    const handleSearchField = e => {
        setSearchParams(e.target.value);
        if(props.routerProps) {
            if(props.routerProps.history.pathname !== '/') {
                props.routerProps.history.push('/');
            }
        }
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