import React from 'react';
import { SaleSelect, TagsSelect } from '../../filters';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../css/FilterBox.css';

const FilterBox = ({ filterBox, ...props }) => {

    const Range = createSliderWithTooltip(Slider.Range)

    const priceArrayRef = React.useRef([])

    const handleRangeChange = range => {
        priceArrayRef.current = [range[0], range[1]]
        console.log(priceArrayRef.current)
    }

    React.useEffect(() => {
        props.setSearchParams(oldValues => {
            return {
                ...oldValues,
                priceMin: priceArrayRef.current[0],
                priceMax: priceArrayRef.current[1]
            }
        })
    }, [])

    return (
        <div className={filterBox ? "filter-box open" : "filter-box"}>
            <SaleSelect {...props} />
            <TagsSelect {...props} />
            <Range 
                className="slider" 
                step={10} 
                max={10000}
                onChange={handleRangeChange}    
            />
        </div>
    )
};

export default FilterBox;