import React from 'react';
import { render } from 'react-dom';
import { getDetail } from '../../../api/adverts' 



function DetailPage ({ ...routerProps }) {
    const [listing, setListing] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        getDetail(routerProps.match.params.id).then( ad =>
            setListing(ad)
        )
        console.log(listing)
    }, [])

    return(
        <div>
            <img src={process.env.REACT_APP_API_BASE_URL + listing.photo} />
        </div>
    )
}


export default DetailPage;
