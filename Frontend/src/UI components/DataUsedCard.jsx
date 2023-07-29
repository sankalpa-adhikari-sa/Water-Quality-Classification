import React, { useEffect,useState } from 'react'
import './DataUsedCard.css'
import datapointJson from'../assets/datapoint.json'
function DataUsedCard() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(datapointJson['datapoint']);

    },[]);
  return (
    <div className="DataUsedWrapper">
         {data.map((item, index) => (
        <div key={index} className="DataUsed">
            <div className="DataAsthetic">
                <span className="DataAstheticCircle"></span>
                <div className="DataAstheticLine"></div>
            </div>
            <div className="DataPoint">
                <div className='DataPointName'>{item.DataPointName}</div>
                <div className='DataPointDetail'>{item.DataPointDetail}</div>
            </div>
        </div> ))}
    </div>
  )
}

export default DataUsedCard