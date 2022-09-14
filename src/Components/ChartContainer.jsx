import React from "react";
import DemoArea from "./DemoArea";

import { Col, Row, Typography } from 'antd';

const Title = Typography;

const ChartContainer = ({coinHistory, currentPrice, coinName, coinColor}) =>{

        return(
        <>
        <Col style={{'width': '100%'}}>
    
                <Title level={3} className="chart-title">{coinName} {coinHistory?.data?.change}%</Title>
      
                <DemoArea style={{'width': '100%'}} coinHistory={coinHistory} coinColor={coinColor}/>
       
        </Col>
        </>
        )

}
export default ChartContainer;