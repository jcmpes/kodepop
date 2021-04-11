import React from 'react';
import T from 'prop-types';

import './SelectField.css'

function SelectField({ placeholder, options, multiple, ...props }) {

    return (
        <div>
            <label>
                {props.label ? props.label : null}
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

            </label>
        </div>
    )
}

SelectField.propTypes = {
    options: T.array.isRequired
}

SelectField.defaultTypes = {
    placeholder: '',
    multiple: false
}

export default SelectField;