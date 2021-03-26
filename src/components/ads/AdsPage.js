import { getAds } from '../../api/adverts'

const allAds = getAds;
console.log(allAds)
const AdsPage = () => {
    return(
        <div className="adsPage">{allAds}</div>
    )
}

export default AdsPage