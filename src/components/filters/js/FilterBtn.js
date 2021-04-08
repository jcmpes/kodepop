import React from 'react';
import '../css/FilterBtn.css';

const FilterBtn = ({ filterBox, setFilterBox }) => {


    function toggleFilterBox(e) {
        filterBox ? setFilterBox(false) : setFilterBox(true)
    }
    
    return (
            <div id="f-btn" onClick={toggleFilterBox}>
                F
            </div>
    )
};

export default FilterBtn;