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
            name: "Work",
            value: "work"
        }
    ]

    const handleTagsChange = (e) => {
        setSearchParams(oldValues => ({
            ...oldValues,
            tags: e.target.value
        }))
    }

    return (
        <SelectField 
            options={tagsOptions}
            value={searchParams.tags}
            onChange={handleTagsChange}
        />
    )
}

export default TagsSelect;