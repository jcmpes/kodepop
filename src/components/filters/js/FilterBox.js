import React from 'react';
import T from 'prop-types';
import { SaleSelect, TagsSelect } from '../../filters';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../css/FilterBox.css';

const FilterBox = ({ showFilterBox, ...props }) => {
    const Range = createSliderWithTooltip(Slider.Range);
    const priceArrayRef = React.useRef([0, 1000]);
    
    const handleRangeChange = range => {
        priceArrayRef.current = [range[0], range[1]];
    };

    const updatePriceRange = range => {
        props.setSearchParams(oldValues => {
            return {
                ...oldValues,
                priceMin: priceArrayRef.current[0],
                priceMax: priceArrayRef.current[1]
            }
        });
    };

    return (
        <div className={showFilterBox ? "filter-box open" : "filter-box"}>
            <SaleSelect {...props} />
            <TagsSelect {...props} />
            <Range 
                className="slider" 
                step={10} 
                max={1000}
                onChange={handleRangeChange}
                onAfterChange={updatePriceRange}
                allowCross={false}
                value={[props.searchParams.priceMin, props.searchParams.priceMax]}
                defaultValue={[0, 1000]}   
            />
            <div className="price-tags">{`Precio entre ${priceArrayRef.current[0]} y ${priceArrayRef.current[1]}€`}</div>
        </div>
    )
};


FilterBox.propTypes = {
    props: T.shape({ searchParams: T.object.isRequired }),
    showFilterBox: T.bool.isRequired
}

FilterBox.defaultTypes = {
    placeholder: '',
    multiple: false
}

export default FilterBox;