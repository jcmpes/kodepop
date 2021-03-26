import React from 'react';
import { getAds } from '../../api/adverts';

let allAds = []
getAds().then((response) => allAds = response)

// Component to load ads
const AdsPage = () => {
    const [ads, setAds] = React.useState(allAds)
    ads.map(item => (
        <li key={item.id} >
            <div style={{ display: 'flex' }}>
                <img src={item.photo} style={{ flex: '0 0 auto' }}/>
                <h2 style={{ flex: '1' }}>{item.name}</h2>
            </div>
        </li>
    ));

    React.useEffect(() => {
        getAds().then(response => setAds(response))
    }, [])

    return(
        <div className="adsPage">
            <ul>
                {ads.map(ad => (
                    <li key={ad.id}>
                        <img src={process.env.REACT_APP_API_BASE_URL, ad.photo} />
                        {ad.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdsPage