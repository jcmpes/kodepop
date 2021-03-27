import React from 'react';
import { getAds } from '../../api/adverts';

let allAds = []
getAds().then((response) => allAds = response)

// Component to load ads
const AdsPage = () => {
    const [ads, setAds] = React.useState(allAds)

    React.useEffect(() => {
        getAds().then(response => setAds(response))
    }, [])

    const items = ads.map(item => (
        <li key={item.id} style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex' }}>
                <img src={item.photo} style={{ flex: '0 0 auto', maxWidth: '300px' }}/>
                <h2 style={{ flex: '1', textAlign: 'left', marginLeft: '1rem' }}>{item.name}</h2>
            </div>
        </li>
    ));

    return(
        <div className="adsPage">
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default AdsPage