import React from 'react';
import { Button, FormField, SelectField } from "../../shared";
import { newListing } from '../../../api/adverts';

import newListingFormStyle from '../css/NewListingForm.module.css'

function NewListingForm({ routerProps }) {
    const [formFields, setFormFields] = React.useState({
        name: '',
        price: '',
        sale: true,
        tags: [],
    })
    const [image, setImage] = React.useState(null)

    console.log(routerProps)

    const handleInputChange = e => {
        setFormFields(oldValues => {
            return {
                ...oldValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleMultiselectChange = e => {
        // Define tag to add and new temp. array
        const newTag = e.target.value
        const newArr = formFields.tags

        // Check if it exists in the array
        // Add item if not in the array
        if (!newArr.some(item => item === newTag) ) {
            newArr.push(newTag)
        } else {
            // Remove item if it exists
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] === newTag) {
                    newArr.splice(i, 1);
                    return;
                } 
            }
        }
        
        // Definde tags as the new array
        setFormFields(oldValues => {
            return {
                ...oldValues,
                tags: newArr
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', formFields.name)
        formData.append('price', formFields.price)
        formData.append('sale', formFields.sale)
        formData.append('tags', formFields.tags)
        formData.append('photo', image)
        newListing(formData)
            .then(res => routerProps.history.push(`/listing/${res.id}`))
            .catch(err => console.log(err))
    }

    const saleOptions = [
        {
            name: "Venta",
            value: true
        },
        {
            name: "Compra",
            value: false
        }
    ]

    const categoryOptions = [
        {
            name: "Lifestyle",
            value: "lifestyle"
        },
        {
            name: "Mobile",
            value: "mobile"
        },
        {
            name: "Motor",
            value: "motor"
        },
        {
            name: "Work",
            value: "work"
        }
    ]

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
                    options={saleOptions}
                />
                <SelectField 
                    name="tags"
                    placeholder="Category"
                    type="select"
                    id={newListingFormStyle["select-category"]}
                    className={newListingFormStyle["new-listing-form-field"]}
                    value={formFields.tags}
                    onChange={handleMultiselectChange}
                    options={categoryOptions}
                    multiple
                />
                <FormField 
                    name="name"
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
                <FormField
                    name="photo"
                    placeholder="Upload an Image"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <Button 
                    type="submit"
                >Submit</Button>
            </form>
        </div>
    )
}

export default NewListingForm;