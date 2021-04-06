import client from './client'


export const getAds = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.get(url);
}

export const getDetail = async id => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/${id}`;
    return client.get(url);
}

export const newListing = async details => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.post(url, details)
}

// ([
//     {
//         "id": "3dad6450-0e61-4363-a2c7-2b669fe86508",
//         "createdAt": "2021-03-26T05:22:30.000Z",
//         "name": "Primero",
//         "sale": true,
//         "price": 12,
//         "tags": [
//             "lifestyle"
//         ],
//         "photo": "http://localhost:3001/public/1616736150445-754816386.png"
//     }
// ])
