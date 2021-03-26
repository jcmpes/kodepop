import { getAds } from '../../api/adverts'

const items = getAds()

const AdsPage = () => {
    return(
        <div className="adsPage">
            <ul>
                {items.map(ad => (
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