import React from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'
import moment from 'moment';

const { Title } = Typography


const LineChart = ({ coinHistory, currentPrice, coinName, coinColor }) => {
    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        // coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleString())
        coinTimestamp.push(moment(coinHistory.data.history[i].timestamp * 1000).format('Do MMMM, \'YY (HH:mm)'))

    }

    coinPrice.reverse()
    coinTimestamp.reverse()
    console.log('esto es')
    console.log(coinColor)
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: `Price in €`,
                data: coinPrice,
                fill: false,
                backgroundColor: coinColor,
                borderColor: coinColor,
            },
        ],
    }
    const options = {
        // responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                ticks: {
                    display: false
                }
            }
        }
    }

    // console.log(coinHistory, coinPrice, coinTimestamp)

    return (
        <>
         <Row className='chart-section'>
            <Row className='chart-header'>
                <Title level={2} className='chart-title' style={{color: coinColor}}> {coinName} Price Chart</Title>
                <Col className='price-container'>
                    <Title level={5} title='Price Change' className='price-change'>Price change: {coinHistory?.data?.change} %</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: € {currentPrice}</Title>
                </Col>
            </Row>
            {/* <Line data={data} /> */}
            <Chart type='line' options={options} data={data} />
        </Row>
        </>
    )
}

export default LineChart