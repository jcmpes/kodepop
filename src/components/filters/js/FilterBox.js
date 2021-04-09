import React from 'react';
import { SaleSelect, TagsSelect } from '../../filters';

import '../css/FilterBox.css';

const FilterBox = ({ filterBox, ...props }) => {


    return (
        <div className={filterBox ? "filter-box open" : "filter-box"}>
            <SaleSelect {...props} />
            <TagsSelect {...props} />
        </div>
    )
};

export default FilterBox;