import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import millify from 'millify';
const DemoArea = (coinHistory, coinColor) => {
  
  const [data, setData] = useState([]);
  let coinPrice = [];
    let  coinTimestamp = [];
   let presetData={
      "value": '',
      "timePeriod": ''
    }
    const [config, setConfig] = useState({
      data,
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [1, 0],
      },
      
      color: coinColor,
    });
    console.log('musetra')
    //console.log(coinHistory?.coinHistory?.data?.history.map(num => num.timestamp.toString().join('000'))
    console.log(new Date(1659650400).toLocaleDateString())
    useEffect(()=>{


      for(let i = 0; i < coinHistory?.coinHistory?.data?.history.length; i++){
        /*  coinPrice.push(coinHistory?.data?.history[i].price)
          coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
          */
         console.log(new Date(coinHistory?.coinHistory?.data?.history[i].timestamp).toLocaleDateString())
         presetData = {
            "value": millify(+coinHistory?.coinHistory?.data?.history[i].price),
            "timePeriod": new Date(+(coinHistory?.coinHistory?.data?.history[i].timestamp*1000)).toLocaleDateString()
          }
         data.push(presetData)
          /*console.log(data)*/
          
      }
    },[presetData || coinHistory])
     
          console.log('esto es')
          console.log(data)

     
        console.log(presetData)
    console.log(coinPrice)
    console.log(coinTimestamp)
    console.log("esto es data")
    console.log(data)
    
    


  /*useEffect(() => {
   
   setData( {
    "timePeriod": coinPrice,
    "value": coinTimestamp
  } )
  }, []);  */
    
  
  

  return <Area {...config} />;
};

export default DemoArea;
