import React,  { useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'


import icon from '../images/cryptocurrency.png';
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true); 
    const [screenSize, setScreenSize] = useState(null); 

    useEffect(()=> {
            const handleResize = () => setScreenSize(window.innerWidth);
            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
    },[])
    
    useEffect(()=> {
        if(screenSize < 768){
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }

    }, [screenSize])

    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} style={{marginBottom: '0px'}}className="logo">
                    <Link to="/">Cryptoworld</Link>
                </Typography.Title>
                <Button theme='dark' style={{backgroundColor: '#001529'}}  className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu &&(
                    <Menu theme='dark'
                            defaultSelectedKeys={'/'}
                            mode="inline"
                            style={{
                                padding: '15px 0',
                            }}
                        >
                        <Menu.Item icon={<HomeOutlined />} key="Home">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />} key="Cryptos">
                            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />} key="News">
                            <Link to="/news">News</Link>
                        </Menu.Item>
                    </Menu> 
                )}
        </div>
    )
}
export default Navbar