import { SelectField } from "../../shared";


const TagsSelect = ({ searchParams, setSearchParams }) => {    

    const tagsOptions = [
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
            name: "Compra",
            value: false
        }
    ]

    const handleSaleChange = (e) => {
        setSearchParams(oldValues => ({
            ...oldValues,
            tags: e.target.value === 'true' ? true : 
                e.target.value === 'false' ? false :
                null
        }))
    }

    return (
        <SelectField 
            options={tagsOptions}
            value={searchParams.sale}
            onChange={handleSaleChange}
        />
    )
}

export default TagsSelect;