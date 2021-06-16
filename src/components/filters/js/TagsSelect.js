import React from "react";
import T from 'prop-types';
import { SelectField } from "../../shared";
import { getTags } from "../../../store/selectors";
import { tagsLoadAction } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const TagsSelect = ({ searchParams, setSearchParams }) => {    
    const tags = useSelector(getTags);
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(tagsLoadAction());
    }, []);

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