import client from './client'

const allAds = [
    {
        "id": "3dad6450-0e61-4363-a2c7-2b669fe86508",
        "createdAt": "2021-03-26T05:22:30.000Z",
        "name": "Primero",
        "sale": true,
        "price": 12,
        "tags": [
            "lifestyle"
        ],
        "photo": "http://localhost:3001/public/1616736150445-754816386.png"
    }
]

export const getAds = () => {
    // const url = 'api/v1/adverts/';
    // const response = await client.get(url);
    // const data = response.data;
    
 
    return allAds;
};