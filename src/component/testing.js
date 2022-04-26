import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const Testing = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&community_data=true&developer_data=true'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)

    if(!data) return null

    return (
            <div className='nearchart'>
            <div className='text'>
                <li><span>Price: </span>{data[16].current_price}</li>
                <li><span>Exchange: </span>{data[16].name}</li>
                <li><span>Market Cap: </span>{data[16].market_cap}</li>
                <li><span>24hrs Volume: </span>{data[16].total_volume}</li>
                <li><span>Total Supply: </span>{data[16].max_supply}</li>
                <li><span>Circulating Supply: </span>{data[16].circulating_supply}</li>
                <li><span>Explorer: </span><a href='' >explorer.nearprotocol.com</a></li>
            </div>
        </div>
    );
}

export default Testing;
