import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Error} from './components';
import './App.css';
// import { getCoins } from './services/apiCalls';
import millify from 'millify';


export default function App(){
    const [coinsData, setCoinsData] = React.useState({});
    const [isSimplified, setIsSimplified] = React.useState(false);
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'd65829ddaemsh6b46f24e6aa18a5p19c278jsn738e2d130ed8',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };        
    
    // React.useEffect(() => {
    //     fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    //       .then(response => response.json())
    //       .then(result => {
    //         // console.log({result})
    //         setCoinsData(result);
    //     })
    //       .catch(err => console.error(err));
    // }, [])
    
    // console.log((coinsData?.data?.coins)) 
    // const numberExchanges = coinsData.data.stats.totalExchanges

    return(
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route 
                                path='/' 
                                element={<Homepage />} 
                            />
                            <Route path='/exchanges' element={<Exchanges />} />
                            <Route 
                                path='/cryptocurrencies' 
                                element={ <Cryptocurrencies /> } 
                            />
                            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route path='/news' element={<News />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer' lev>
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Cryptoverse <br />
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news' >News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}