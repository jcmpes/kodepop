import './FormField.css'

function FormField({ placeholder, label, ...props }) {
    return (
        <div>
            <input 
                className='form-field-input'
                placeholder={placeholder}
                {...props}
            />
            { label ? <label htmlFor="remember"> {label}</label> : null}
        </div>
    )
}

export default FormField;