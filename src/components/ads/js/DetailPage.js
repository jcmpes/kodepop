import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import RemoveListing from './RemoveListingBtn';
import Modal from '../../shared/Modal';

import detailPageStyle from '../css/DetailPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getUiError, getUiLoading } from '../../../store/selectors';
import { detailLoadAction, detailRemoveAction, UiResetError } from '../../../store/actions';

function DetailPage ({ setTitle, value }) {
    const error = useSelector(getUiError)
    const loading = useSelector(getUiLoading)
    const listing = useSelector(state => getDetail(state, value.match.params.id))
    const dispatch = useDispatch()
    
    React.useEffect(() => {
      dispatch(detailLoadAction(value.match.params.id))
      dispatch(UiResetError())
      if (listing) {
       setTitle(listing.sale ? 'Venta' : 'Compra')
      }
    }, [])
    

    // Modal
    const [modal, setModal] = React.useState(false);


    const removeListing = () => {
      dispatch(detailRemoveAction(value.match.params.id, value.location));
    }

    return(
        <React.Fragment>
            <Modal 
                modal={modal} 
                setModal={setModal}
                removeListing={removeListing}
            >
            </Modal>
            <div className={classNames(detailPageStyle["grid"], modal ? detailPageStyle["blurred"] : null)}>
                {error && <div className="delete-error" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error.message}</div>}
                {/*=== Listing Image ===*/}
                <div className={detailPageStyle["column-image"]}>
                    <div className={detailPageStyle["image-container"]}>
                        {!listing ?
                        <p>Loading...</p>
                        : !loading ?  
                            !listing.photo ?
                                <p style={{ fontSize: '8rem', marginTop: '10px' }}>🎁</p>
                                : <img src={process.env.REACT_APP_API_BASE_URL + listing.photo} />
                            : <div className={detailPageStyle["image-loading"]}></div>
                        }
                    </div>
                    {/*=== Delete Listing Button ===*/}
                    <RemoveListing setModal={setModal} />
                </div>
                {/*=== Listing Details ===*/}
                <div className={detailPageStyle["column-details"]}>
                    {!loading ?
                      listing ?
                        <React.Fragment>
                            <div className={detailPageStyle["price-container"]}>{listing.price} €</div> 
                            <div className={detailPageStyle["title-container"]}><h1>{listing.name}</h1></div>
                        </React.Fragment> : <div></div>
                    : <React.Fragment>
                        <div className={detailPageStyle["price-loading"]}></div>
                        <div className={detailPageStyle["title-loading"]}></div>
                    </React.Fragment> 
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

DetailPage.propTypes = {
    setTitle: T.func.isRequired,
    value: T.shape({ 
        match: T.object.isRequired,
        history: T.object.isRequired
    })
}

export default DetailPage;
