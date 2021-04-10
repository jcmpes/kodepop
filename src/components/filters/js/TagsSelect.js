import React from "react";
import { SelectField } from "../../shared";

const TagsSelect = ({ searchParams, setSearchParams, tags }) => {    

    const [tagsOptions, setTagsOptions] = React.useState([])

    /*
    * Fill the select options for tags
    */
    const fillTagsOptions = () => {
        if (tags && tags.length >= 1) {
            const loadedTags = []
            for (let i=0; i<tags.length; i++) {
                loadedTags.push({
                    name: tags[i],
                    value: tags[i]
                })
            setTagsOptions(loadedTags)
            }
        } else {
            const defaultTagsOptions = [
                {
                    name: "Categoría",
                    value: ""
                },
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
            setTagsOptions(defaultTagsOptions)
        } 
    };
    
    React.useEffect(() => {
        console.log(tags)
        fillTagsOptions(tags, setTagsOptions);
        console.log(tagsOptions)

    }, [])

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