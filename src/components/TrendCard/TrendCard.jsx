import React from 'react'
import './TrendCard.css'

import {TrendData} from '../../../src/Data/TrendData.js'
const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends For You</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
        })}


    </div>
  )
}

export default TrendCard