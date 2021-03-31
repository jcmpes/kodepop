import React from 'react';
import { getDetail } from '../../../api/adverts' 



function DetailPage ({ setTitle, value }) {
    const [listing, setListing] = React.useState({photo: ''})
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    const handleListingLoad = async () => {
        try {
            const obj = await getDetail(value.match.params.id)
            return(obj)
        } catch (error) {
            
        }
    }

    React.useEffect(() => {
        // Load listing
        handleListingLoad().then(obj => setListing(obj))
        setTitle(`Detalle`)
    }, [])

    return(
        <div className="full-width">
            <div className="column-image">
                <div className="image-container">
                    <img src={process.env.REACT_APP_API_BASE_URL + listing.photo} />
                </div>          
            </div>
            <div className="column-details">
                <div className="price-container">{listing.price}€</div>
                <div className="title-container"><h1>{listing.name}</h1></div>
            </div>
        </div>
            
    )
}


export default DetailPage;
