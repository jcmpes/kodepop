import React from 'react';

import './SelectField.css'

function SelectField({ placeholder, options, ...props }) {
    const [myOptions, setMyOptions] = React.useState(options)

    return (
        <div>
            <select 
                className='select-field-input'
                placeholder={placeholder}
                {...props}
            >
                {console.log(myOptions)}
                {options.map(element => {
                    return (<option value={element.value}>{element.name}</option>)
                    
                })}
            </select>
        </div>
    )
}

export default SelectField;