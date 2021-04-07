import React from 'react';
import { Redirect } from 'react-router-dom';
import { getDetail } from '../../../api/adverts';

import detailPageStyle from '../css/DetailPage.module.css';

function DetailPage ({ setTitle, value }) {
    const [listing, setListing] = React.useState({photo: ''})
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    const handleListingLoad = async () => {
        try {
            setLoading(true)
            const obj = await getDetail(value.match.params.id)
            return(obj)
        } catch (error) {
            if (error.statusCode === 404) {
                value.history.replace('/404')
            }
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        // Load listing
        handleListingLoad().then(obj => setListing(obj))
        setTitle(`Detalle`)
    }, [])

    return(
        <div className={detailPageStyle["grid"]}>
            {/*=== Listing Image ===*/}
            <div className={detailPageStyle["column-image"]}>
                <div className={detailPageStyle["image-container"]}>
                    {!loading ? 
                        !listing.photo ?
                            <p style={{ fontSize: '8rem', marginTop: '10px' }}>🎁</p>
                            : <img src={process.env.REACT_APP_API_BASE_URL + listing.photo} />
                        : <div className={detailPageStyle["image-loading"]}></div>
                    }
                </div>          
            </div>
            {/*=== Listing Details ===*/}
            <div className={detailPageStyle["column-details"]}>
                {!loading ?
                    <React.Fragment>
                        <div className={detailPageStyle["price-container"]}>{listing.price} €</div>
                        <div className={detailPageStyle["title-container"]}><h1>{listing.name}</h1></div>
                    </React.Fragment>
                : <React.Fragment>
                    <div className={detailPageStyle["price-loading"]}></div>
                    <div className={detailPageStyle["title-loading"]}></div>
                </React.Fragment> 
                }
            </div>
        </div>
            
    )
}


export default DetailPage;
