import { Redirect } from "react-router";

import removeListingBtnStyle from '../css/RemoveListingBtn.module.css';

const RemoveListing = ({ removeListing }) => {

    const handleRemoveListing = () => {
        removeListing();
    }

    return (
        <div 
            className={removeListingBtnStyle["remove-listing-btn"]}
            onClick={handleRemoveListing}    
        >
            Eliminar
        </div>
    )
};

export default RemoveListing;