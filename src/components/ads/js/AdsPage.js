import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { getAds } from '../../../api/adverts';
import Card from 'react-bootstrap/Card';

import adsPageStyle from '../css/AdsPage.module.css'
import EmptyPage from './EmptyPage';

// Component to load ads
const AdsPage = ({ setTitle, searchParams }) => {
    const [allAds, setAllAds] = React.useState([])
    const [listings, setListings] = React.useState([])

    React.useEffect(() => {
        // Set the page title
        setTitle('AdsPage')
        // Load ads
        getAds().then(setAllAds)
        setListings(allAds)
    }, [allAds])

    React.useEffect(() => {             
        // Change ads with filtering
        if (searchParams.name !== '' || 
            searchParams.sale !== null || 
            searchParams.tags !== 'todas las categorías' ||
            searchParams.priceMax !== process.env.MAX_PRICE ||
            searchParams.priceMin !== 0) {
            setListings(allAds
                // Filtering by sale type
                .filter(item => searchParams.sale === null ? 
                    item : item.sale === searchParams.sale ? 
                    item : null)
                // Filtering by tags
                .filter(item => searchParams.tags === 'todas las categorías' ? 
                    item : item.tags.includes(searchParams.tags) ? 
                    item : null)
                // Filtering by price range
                .filter(item => searchParams.priceMin === 0 ? 
                    item : item.price > searchParams.priceMin ?
                    item : null)
                .filter(item => searchParams.priceMax === process.env.MAX_PRICE ?
                    item : item.price < searchParams.priceMax ?
                    item: null)
                // Filtering by name
                .filter(item => 
                    item.name.toLowerCase().includes(searchParams.name.toLowerCase()) ? 
                    item : null
                ))
        // } else if (searchParams.sale !== null) {
        //     console.log('CAMBIA SALE A', searchParams.sale)
        //     setShownAds(allAds
        //         .filter(item =>
        //             item.sale == searchParams.sale ?
        //                 item : null
        //         ))
        } else {
            setListings(allAds)
        }
    }, [allAds, searchParams])

    const items = listings.map(item => (
        <article key={item.id} style={{ padding: '.75rem' }}>
            <Link to={`/listing/${item.id}`}>
                <Card className={adsPageStyle['ad-card']}>
                    {/* <Card.Img 
                        variant="top"
                        style={{ 
                            borderTopLeftRadius: '1.1rem', 
                            borderTopRightRadius: '1.1rem', 
                            minHeight: '200px', 
                            objectFit: 'cover' 
                        }}
                        src={`${process.env.REACT_APP_API_BASE_URL}${item.photo}`} 
                        alt={item.name + ( item.sale ? ' en venta' : ' se busca' )}
                    /> */}
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
            </Link>
        </article>
    ));

    return(
        <div className="ads-page">
            { (listings.length === 0) ? <EmptyPage /> :
                <div className="ads-wrapper"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {items}
                </div>
            }
        </div>
    )
}

AdsPage.propTypes = {
    setTitle: T.func.isRequired,
    searchParams: T.object.isRequired
}

export default AdsPage