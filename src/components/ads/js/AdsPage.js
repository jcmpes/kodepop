import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import Card from 'react-bootstrap/Card';
import EmptyPage from './EmptyPage';

import adsPageStyle from '../css/AdsPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { listingsLoadAction } from '../../../store/actions';
import { getListings, getUiError } from '../../../store/selectors'
import { logout } from '../../../api/auth'
import { authLogout } from '../../../store/actions';
import { useHistory } from 'react-router';

// Component to load ads
const AdsPage = ({ setTitle, searchParams }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
      logout().then(() => dispatch(authLogout()));
      history.push('/login');
    }
    const error = useSelector(getUiError);
    const allAds = useSelector(getListings)
    // Store filtered ads
    let shownAds = [...allAds]

    React.useEffect(() => {
      dispatch(listingsLoadAction());
    }, [])
  
    // Change lisings shown with filtering
    if (searchParams.name !== '' || 
        searchParams.sale !== null || 
        searchParams.tags !== 'todas las categorías' ||
        searchParams.priceMax !== process.env.REACT_APP_MAX_PRICE ||
        searchParams.priceMin !== 0) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        shownAds = allAds
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
            .filter(item => searchParams.priceMax === process.env.REACT_APP_MAX_PRICE ?
                item : item.price < searchParams.priceMax ?
                item: null)
            // Filtering by name
            .filter(item => 
                item.name.toLowerCase().includes(searchParams.name.toLowerCase()) ? 
                item : null
            )     
    }

    const items = shownAds.map(item => (
        <article key={item.id} style={{ padding: '.75rem' }}>
            <Link to={`/advert/${item.id}`}>
                <Card className={adsPageStyle['ad-card']}>
                    {/* Uncommnet below to show images in ads cards*/}
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
                            className="tag" 
                            style={{ 
                                fontSize: '.8rem',
                                backgroundColor: item.sale === true ? '#02c853' : '#ffeb3c',
                                display: 'inline-flex',
                                padding: '.2rem .4rem',
                                borderRadius: '5px',
                                marginBottom: '5px'
                            }}
                            >
                            { item.sale ? 'Venta' : 'Compra'}
                            
                        </div>
                        <div className="listing-tag">
                            {item.tags.map(tag => 
                                <div key={tag} style={{
                                    fontSize: '.8rem',
                                    display: 'inline-flex',
                                    padding: '.1rem .4rem',
                                    borderRadius: '5px',
                                    margin: '3px',
                                    backgroundColor: '#f5f5f5' 
                                }}>
                                    {tag === 'lifestyle' ? '💍' :
                                    tag === 'motor' ? '🏎' :
                                    tag === 'work' ? '👩‍🏫' :
                                    tag === 'mobile' ? '📱' : null} {tag}
                                </div>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </article>
    ));

    return(
        <div className="ads-page">
            
            {error ? 
                <React.Fragment>
                    <div className="delete-error" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error.message}</div>
                    <div><p>Try to <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'coral'}} onClick={handleLogout}>log out</span> and log back in.</p></div>
                </React.Fragment>
             :
            (shownAds.length === 0) ? <EmptyPage /> :
                <div className="ads-wrapper"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {items}
                </div>
            }
        </div>
    )
}

AdsPage.propTypes = {
    setTitle: T.func.isRequired,
    searchParams: T.object.isRequired,
    onLogout: T.func.isRequired
}

export default AdsPage