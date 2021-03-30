import React from 'react';
import { getAds } from '../../../api/adverts';
import Card from 'react-bootstrap/Card'

import adsPageStyle from '../css/AdsPage.module.css'

let allAds = []
getAds().then((response) => allAds = response)

// Component to load ads
const AdsPage = ({ setTitle }) => {
    const [ads, setAds] = React.useState(allAds)

    React.useEffect(() => {
        // Set the page title
        setTitle('AdsPage')
        // Load ads
        getAds().then(setAds)
    }, [])

    const items = ads.map(item => (
        <article key={item.id} style={{ padding: '.75rem' }}>
            <Card className={adsPageStyle['ad-card']}>
                <Card.Img 
                    variant="top"
                    style={{ borderRadius: '1.1rem' }}
                    src={`${process.env.REACT_APP_API_BASE_URL}${item.photo}`} 
                    alt={item.name + ( item.sale ? ' en venta' : ' se busca' )}
                />
                <Card.Body style={{ padding: '1rem 1rem' }}>
                    <div style={{ fontSize: "2rem" }}>{item.price}€</div>
                    <Card.Title style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{item.name}</Card.Title>
                    <div 
                        className="tags" 
                        style={{ 
                            fontSize: '.8rem',
                            marginRight: '5px',
                            backgroundColor: item.sale === true ? '#02c853' : '#ffeb3c',
                            display: 'inline-flex',
                            padding: '.2rem .4rem',
                            borderRadius: '5px',
                        }}
                    >
                        { item.sale ? 'Venta' : 'Compra'}
                    </div>
                </Card.Body>
            </Card>
        </article>
        // <li key={item.id} onClick={e => alert("Contruyendo enlace")}>
        //     <div className={adsPageStyle['ad-wrapper']}>
        //         <img 
        //             src={item.photo} 
        //             alt={item.name + ( item.sale ? ' en venta' : ' se busca' )}
        //         />
        //         <h2>{item.price} €</h2>
        //         <h2>{item.name}</h2>
        //     </div>
        // </li>
    ));

    return(
        <div className="ads-page">
            <div className="ads-wrapper"style={{ display: 'flex', flexWrap: 'wrap' }}>
                {items}
            </div>
        </div>
    )
}

export default AdsPage