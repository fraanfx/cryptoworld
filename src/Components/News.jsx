import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
// import { Link } from 'react-router-dom';
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
    count: simplified ? 6 : 9
  }) 

  if(!cryptoNews?.results) return <Loader />;

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
        {cryptoNews.results.map((news, idx) => (
          <Col xs={24} sm={12} lg={8} key={idx}>
            <a tabIndex={0} href={news?.link} target="_blank" rel="noreferrer">
            <Card hoverable className='news-card'>
              
                      <Title className='news-title' level={4}>{news?.title}</Title>
                <div className='news-image-container'>
                      <img style={{ maxwidth: '100%', maxHeight: 'auto' }} src={news?.image_url || demoImage} alt={news.description} />
                </div>
                <p>
                  {news.description && (news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description)}
                </p>
                <div className='provider-container'>
                  <div>
                        <Avatar src={news?.source_icon || demoImgFont} alt={`${news?.source_name} icon`} />
                        <Text className='provider-name'>{news?.source_name.toUpperCase()}</Text>
                       
                  </div>
                </div>
                  <Text className='align-right'>{moment(news.pubDate).startOf('ss').fromNow()}</Text>
            </Card>
              </a>
          </Col>
        ))}

        
    </Row>
  )
}

export default News