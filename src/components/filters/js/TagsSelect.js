import React from "react";
import T from 'prop-types';
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
    
    // Fill selector with options on first render
    React.useEffect(() => {
        fillTagsOptions(tags, setTagsOptions);
    }, []);

    const handleTagsChange = (e) => {
        setSearchParams(oldValues => ({
            ...oldValues,
            tags: e.target.value
        }));
    };

    return (
        <SelectField 
            options={tagsOptions}
            value={searchParams.tags}
            onChange={handleTagsChange}
        />
    );
};

TagsSelect.propTypes = {
    searchParams: T.object.isRequired,
    setSearchParams: T.func.isRequired
};

export default TagsSelect;