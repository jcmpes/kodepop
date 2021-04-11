import Button from './Button';
import T from 'prop-types';

import './Modal.css';

const Modal = ({ modal, setModal, removeListing }) => {

    const handleConfirmation = () => {
        setModal(false);
        removeListing();
    };

    return (
        <div className={modal ? "open modal-wrapper" : "modal-wrapper"}>
            <div className={"modal-title"}>

            </div>
            <div className="modal-body">
                <p>De verdad me borras?</p>
            </div>
            <div className="modal-footer">
                <Button children='No' onClick={() => setModal(false)} />
                <Button children='Si' onClick={handleConfirmation} />
            </div>

        </div>

    )
};

Modal.propTypes = {
    modal: T.bool.isRequired
}

export default Modal; 