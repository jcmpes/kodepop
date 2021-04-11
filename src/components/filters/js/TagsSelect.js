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
                    name: tags[i].charAt(0).toUpperCase() + tags[i].slice(1) ,
                    value: tags[i]
                })
            setTagsOptions(loadedTags)
            console.log('categorias añadidas desde estado')
            }
        } else {
            const defaultTagsOptions = [
                {
                    name: "Todas las categorías",
                    value: "todas las categorías"
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
            console.log('categorias añadidas por defecto')
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
    setSearchParams: T.func.isRequired,
    tags: T.array.isRequired
};

export default TagsSelect;