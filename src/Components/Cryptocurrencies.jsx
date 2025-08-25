import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Loader from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {


  const count = simplified ? 8 : 100;
  const {data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [ cryptos, setCryptos ] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('')
  

  useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || ("€"+coin.symbol).toLowerCase().includes(searchTerm.toLowerCase()) );
        setCryptos(filteredData)
      }, [cryptoList, searchTerm] )
      if(isFetching) return <Loader />
  return (
    <>
          {!simplified  &&(<div className="search-crypto">
              <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>)}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency, idx) => (
          <Col xs={24} sm={12} lg={6}  className="crypto-card" key={idx}>
            <Link  to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className='crypto-image' alt={`Logo ${currency.name}`} src={currency.iconUrl}/>}
                hoverable
              >
                  <p>Price: {millify(currency.price)}€</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                  
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies;