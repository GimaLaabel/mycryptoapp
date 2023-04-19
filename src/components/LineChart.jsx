import React from 'react'
import { Line } from 'react-chartjs-2';
import { Typography, Col, Row } from 'antd';

import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(
    LineElement, 
    PointElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend 
);


const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    
    const coinPrice = [];
    const coinTimeStamp = [];
    for(let i = 0; i < coinHistory?.data?.history?.length; i += 1){
        if(coinHistory?.data?.history[i].price && coinHistory?.data?.history[i]){
            coinPrice.push(coinHistory?.data?.history[i].price);
            coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());            
        }
    }

    // console.log(coinPrice)
    // console.log(coinTimeStamp)

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice, 
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
    <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price chart</Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>
                    {coinHistory?.data?.change} %
                </Title>
                <Title level={5} className='current-price'>
                    Current {coinName} Price: $ {currentPrice}
                </Title>
            </Col>
        </Row>
        <Line data={data} options={options}/>
    </>
  )
}

export default LineChart