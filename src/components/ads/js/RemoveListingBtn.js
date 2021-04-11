import React from 'react';
import removeListingBtnStyle from '../css/RemoveListingBtn.module.css';

const RemoveListing = ({ setModal }) => {

    const handleRemoveListing = () => {
        setModal(true)
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