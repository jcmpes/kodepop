import React from 'react';

import './SelectField.css'

function SelectField({ placeholder, options, ...props }) {

    return (
        <div>
            <select 
                className='select-field-input'
                placeholder={placeholder}
                {...props}
            >
                {options.map(element => {
                    return (<option value={element.value}>{element.name}</option>)
                    
                })}
            </select>
        </div>
    )
}

export default SelectField;