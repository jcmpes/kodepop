import '../css/FormField.css'

function FormField({label, ...props}) {
    return (
        <div>
            <input 
                className='form-field-input'
                placeholder={label}
                {...props}
            />
        </div>
    )
}

export default FormField