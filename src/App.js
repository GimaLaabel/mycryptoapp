import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Error} from './components';
import './App.css';
// import { getCoins } from './services/apiCalls';
import millify from 'millify';


export default function App(){
    
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