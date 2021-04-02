import React from 'react';
import { Button, FormField, SelectField } from "../../shared";

import newListingFormStyle from '../css/NewListingForm.module.css'

function NewListingForm() {
    const [formFields, setFormFields] = React.useState({
        title: '',
        price: '',
        sale: true
    })

    const handleInputChange = e => {
        setFormFields(oldValues => {
            return {
                ...oldValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className={newListingFormStyle["container"]}>
            <form className={newListingFormStyle["new-listing-form"]} onSubmit={handleSubmit}>
                <SelectField 
                    name="sale"
                    placeholder="Venta"
                    type="select"
                    id={newListingFormStyle["select-sale"]}
                    className={newListingFormStyle["new-listing-form-field"]}
                    value={formFields.sale}
                    onChange={handleInputChange}
                    options={[
                        {
                            name: "Venta",
                            value: true
                        },
                        {
                            name: "Compra",
                            value: false
                        }
                    ]}
                />
                <FormField 
                    name="title"
                    placeholder="What's it?"
                    type="text"
                    className={newListingFormStyle["new-listing-form-field"]}
                    value={formFields.title}
                    onChange={handleInputChange}
                />
                <FormField 
                    name="price"
                    placeholder="What price?"
                    type="number"
                    className={newListingFormStyle["new-listing-form-field"]}
                    value={formFields.price}
                    onChange={handleInputChange}
                />
                <Button 
                    type="submit"
                >Submit</Button>
            </form>
        </div>
    )
}

export default NewListingForm;