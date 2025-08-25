import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News} from './Components';
import './App.css'

const App = () => {
    return(
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path='/' element={<Homepage />}/>
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route exact path='/news' element={<News simplified={false} />} />
                            
                        </Routes>
                    </div>
                </Layout>
            <div className='footer' level={5} style={{ color: 'white', textAlign: 'center', }}>
                <Space>
                   <Link to="/" className='footer-link'>Home</Link>
                   <Link to="/cryptocurrencies" className='footer-link'>Cryptocurrencies</Link>
                   <Link to="/news" className='footer-link'>News</Link>
                </Space>
                <Typography style={{ color: 'white'}}>
                    All rights reserved {new Date().getFullYear()}
                </Typography>
                
            </div>
        </div>
        </div>
    
    )
}

export default App