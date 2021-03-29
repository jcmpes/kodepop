import React from 'react';
import { getAds } from '../../../api/adverts';

import adsPageStyle from '../css/AdsPage.module.css'

let allAds = []
getAds().then((response) => allAds = response)

// Component to load ads
const AdsPage = () => {
    const [ads, setAds] = React.useState(allAds)

    React.useEffect(() => {
        getAds().then(setAds)
    }, [])

    const items = ads.map(item => (
        <li key={item.id} onClick={e => alert("Contruyendo enlace")}>
            <div className={adsPageStyle['ad-wrapper']}>
                <img 
                    src={item.photo} 
                    alt={item.name + ( item.sale ? ' en venta' : ' se busca' )}
                />
                <h2>{item.price} €</h2>
                <h2>{item.name}</h2>
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