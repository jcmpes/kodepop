import React from 'react';
import T from 'prop-types';
import '../css/FilterBtn.css';

const FilterBtn = ({ showFilterBox, setShowFilterBox }) => {

    const toggleFilterBox = () => {
        showFilterBox ? setShowFilterBox(false) : setShowFilterBox(true)
    }
    
    return (
        <div id="f-btn" onClick={toggleFilterBox}>
            F
        </div>
    )
};

FilterBtn.propTypes = {
    showFilterBox: T.bool.isRequired,
    setShowFilterBox: T.func.isRequired
}

export default FilterBtn;