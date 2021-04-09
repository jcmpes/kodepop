import React from 'react';
import '../css/FilterBtn.css';

const FilterBtn = ({ filterBox, setFilterBox }) => {

    const toggleFilterBox = () => {
        filterBox ? setFilterBox(false) : setFilterBox(true)
    }
    
    return (
        <div id="f-btn" onClick={toggleFilterBox}>
            F
        </div>
    )
};

export default FilterBtn;