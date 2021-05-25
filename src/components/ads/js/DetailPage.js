import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { deleteListing } from '../../../api/adverts';
import RemoveListing from './RemoveListingBtn';
import Modal from '../../shared/Modal';

import detailPageStyle from '../css/DetailPage.module.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getDetail, getState, getUiLoading } from '../../../store/selectors';
import { detailLoadAction } from '../../../store/actions';

function DetailPage ({ setTitle, value }) {
    // const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const loading = useSelector(getUiLoading)
    const listing = useSelector(state => getDetail(state, value.match.params.id))
    console.log(value.match.params.id)
    const dispatch = useDispatch()
    dispatch(detailLoadAction(value.match.params.id))


    // Modal
    const [modal, setModal] = React.useState(false);

    const removeListing = async () => {
        try {
            await deleteListing(value.match.params.id);
            value.history.replace('/');
        } catch (error) {
            setError(error);
        }
    }

    // const handleListingLoad = async () => {
    //     try {
    //         setLoading(true);
    //         const obj = await getDetail(value.match.params.id);
    //         return(obj);
    //     } catch (error) {
    //         if (error.statusCode === 404) {
    //             value.history.replace('/404');
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // }

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
                        {!loading ? 
                            !listing ?
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
