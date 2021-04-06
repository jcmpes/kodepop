import React from 'react';

import './SelectField.css'

function SelectField({ placeholder, options, multiple, ...props }) {

    return (
        <div>
            <select 
                className='select-field-input'
                placeholder={placeholder}
                multiple={multiple}
                {...props}
            >
                {options.map(element => {
                    return (<option key={element.name} value={element.value}>{element.name}</option>)
                    
                })}
            </select>
        </div>
    )
}

export default SelectField;