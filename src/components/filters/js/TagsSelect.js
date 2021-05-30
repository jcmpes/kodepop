import React from "react";
import T from 'prop-types';
import { SelectField } from "../../shared";

const TagsSelect = ({ searchParams, setSearchParams, tags }) => {    

    const handleTagsChange = (e) => {
        setSearchParams(oldValues => ({
            ...oldValues,
            tags: e.target.value
        }));
    };

    return (
        <SelectField 
            options={tags}
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