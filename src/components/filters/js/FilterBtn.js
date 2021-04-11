import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import '../css/FilterBtn.css';

const FilterBtn = ({ showFilterBox, setShowFilterBox }) => {

    const toggleFilterBox = () => {
        showFilterBox ? setShowFilterBox(false) : setShowFilterBox(true)
    }
    
    return (
        <div id="f-btn" onClick={toggleFilterBox}>
            <FontAwesomeIcon id="f-icon" icon={faFilter} />
        </div>
    )
};

FilterBtn.propTypes = {
    showFilterBox: T.bool.isRequired,
    setShowFilterBox: T.func.isRequired
}

export default FilterBtn;