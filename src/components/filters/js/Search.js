import React from 'react';
import { FormField } from '../../shared';
import { FilterBtn, FilterBox } from '../../filters';

import '../css/Search.css';

function Search({ searchParams, setSearchParams, ...props }) {

    const [filterBox, setFilterBox] = React.useState(false)

    const handleSearchField = e => {
        setSearchParams(e.target.value);
        
        // Redirect to index ot show results when search is used
        if(props.routerProps) {
            if(props.routerProps.history.pathname !== '/') {
                props.routerProps.history.push('/');
            }
        }
    }

    return (
        <form className='search-form' onSubmit={e => e.preventDefault()}>
            <div className="search-wrapper">
                <FormField 
                    type="search"
                    id="search-field"
                    placeholder="Search"
                    onChange={handleSearchField}
                    value={searchParams}
                />
                <FilterBtn filterBox={filterBox} setFilterBox={setFilterBox}/>
            </div>
            <FilterBox className="filterbox-wrapper" filterBox={filterBox} />
        </form>
    )
};

export default Search;