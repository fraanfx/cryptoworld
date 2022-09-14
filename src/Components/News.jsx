import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment';
import Loader from './Loader';

const { Text, Title } =  Typography;
const { Option } = Select;
const demoImage = 'https://cdn3.iconfinder.com/data/icons/non-fungible-token-11/600/Online_Certificate-256.png'
const demoImgFont = 'https://www.pngmart.com/files/10/Newspaper-PNG-Free-Download.png'

const News = ({ simplified }) => {
  const {data} = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 24
  }) 
  if(!cryptoNews?.value) return <Loader />;
  console.log('Cryptoneews')
  console.log(cryptoNews)
  return (
    <Row gutter={[24, 24]}>
        {!simplified && (
            <Col span={24}> 
              <Select
                
                className='select-news'
                placeholder='Select a Crypto'
                optionFilterProp='children'
                onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option)  => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >                                                                                                                                                                      ∫
                    <Option value="Cryptocurrency"></Option>
                    {data?.data?.coins.map((coin) => <Option value={coin.name}><div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}><span> {coin.name > 3 ? `${coin.name.substring(0, 13)}...` : coin.name} </span><Avatar src={coin.iconUrl} style={{maxWidth: '20px', maxHeight: '20px', margin: 'auto 0'}} /> </div> </Option>)}
                </Select>
            </Col>
        )}
        {cryptoNews.value.map((news, idx) => (
          <Col xs={24} sm={12} lg={8} key={idx}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                      <Title className='news-title' level={4}>{news.name}</Title>
                      <img style={{ maxwidth: '100px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.description} />
                </div>
                <p>
                  {console.log(typeof(news.description))}
                  {news.description > 100 ? `${news.description.substring(0, 100)} ...` : news.description}
                </p>
                <div className='provider-container'>
                  <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImgFont} alt="news" />
                        <Text className='provider-name'>{news.provider[0].name[0].toUpperCase() + news.provider[0].name.substring(1)}</Text>
                  </div>

                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}

        
    </Row>
  )
}

export default News