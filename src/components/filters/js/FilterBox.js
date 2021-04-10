import React from 'react';
import { SaleSelect, TagsSelect } from '../../filters';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../css/FilterBox.css';

const FilterBox = ({ filterBox, ...props }) => {

    const Range = createSliderWithTooltip(Slider.Range)
    // const [priceRange, setPriceRange] = React.useState([0, 10000])
    const priceArrayRef = React.useRef([0, 1000])

    const handleRangeChange = range => {
        priceArrayRef.current = [range[0], range[1]]
        console.log('SET PRICE RANGE STATE:', priceArrayRef.current)
    }

    const updatePriceRange = range => {
        props.setSearchParams(oldValues => {
            return {
                ...oldValues,
                priceMin: priceArrayRef.current[0],
                priceMax: priceArrayRef.current[1]
            }
        })
    }

    // React.useEffect(() => {

    //     props.setSearchParams(oldValues => {
    //         return {
    //             ...oldValues,
    //             priceMin: priceArrayRef.current[0],
    //             priceMax: priceArrayRef.current[1]
    //         }
    //     })
    //     console.log(priceArrayRef.current)

    // }, [priceArrayRef.current[0], priceArrayRef.current[1]])

    return (
        <div className={filterBox ? "filter-box open" : "filter-box"}>
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
            <div>{`min:${priceArrayRef.current[0]} max:${priceArrayRef.current[1]}`}</div>
        </div>
    )
};

export default FilterBox;